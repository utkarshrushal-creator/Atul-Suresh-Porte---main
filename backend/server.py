from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import re
import uuid
import ipaddress
import logging
import httpx
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from datetime import datetime, timezone
from html import escape
from html.parser import HTMLParser
from urllib.parse import urlparse

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

logger = logging.getLogger(__name__)

EMAIL_BASE_URL = "https://integrations.emergentagent.com"
EMAIL_KEY = os.environ["EMERGENT_EMAIL_KEY"]
EMAIL_FROM_NAME = os.environ["EMAIL_FROM_NAME"]
EMAIL_REPLY_TO = os.environ.get("EMAIL_REPLY_TO")
OWNER_EMAIL = os.environ.get("OWNER_EMAIL")

_SHORTENERS = ("bit.ly", "tinyurl.com", "t.co", "is.gd", "cutt.ly", "goo.gl", "rebrand.ly")
_CRED_ASK = ("reply with your password", "reply with the code", "send your password", "cvv",
             "send us your password", "enter your password below", "confirm your card number",
             "your full card number", "seed phrase", "recovery phrase", "verify your card",
             "social security number", "confirm your bank details")
_HOSTISH = re.compile(r"\b(?:https?://)?((?:[a-z0-9-]+\.)+[a-z]{2,})", re.I)


def _host_ok(host: str) -> bool:
    if not host or "xn--" in host:
        return False
    try:
        ipaddress.ip_address(host)
        return False
    except ValueError:
        pass
    return not any(host == s or host.endswith("." + s) for s in _SHORTENERS)


def _same_site(shown: str, real: str) -> bool:
    return shown == real or real.endswith("." + shown) or shown.endswith("." + real)


class _EmailScan(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags, self.urls, self.anchors = set(), [], []
        self._href, self._text = None, []

    def handle_starttag(self, tag, attrs):
        self.tags.add(tag.lower())
        self.urls += [v for k, v in attrs if k.lower() in ("href", "src") and v]
        if tag.lower() == "a":
            self._href = dict((k.lower(), v) for k, v in attrs).get("href")
            self._text = []

    def handle_data(self, data):
        if self._href is not None:
            self._text.append(data)

    def handle_endtag(self, tag):
        if tag.lower() == "a" and self._href is not None:
            self.anchors.append((self._href, "".join(self._text)))
            self._href, self._text = None, []


def _assert_safe_email(subject: str, html: str) -> None:
    scan = _EmailScan()
    scan.feed(html)
    if scan.tags & {"form", "input", "textarea", "select"}:
        raise ValueError("No forms or input fields in email (G2)")
    body = f"{subject}\n{html}".lower()
    for p in _CRED_ASK:
        if p in body:
            raise ValueError(f"Email asks the recipient for credentials: {p!r} (G2)")
    for url in scan.urls:
        low = url.strip().lower()
        if low.startswith(("mailto:", "tel:", "cid:", "#")):
            continue
        if not low.startswith("https://"):
            raise ValueError(f"Email links/assets must be absolute https: {url!r} (G3)")
        host = urlparse(low).hostname or ""
        if not _host_ok(host) or urlparse(low).username is not None:
            raise ValueError(f"Shortened, numeric-host or credential-bearing URL: {url!r} (G3)")
    for href, text in scan.anchors:
        real = urlparse(href.strip().lower()).hostname or ""
        if not real:
            continue
        for m in _HOSTISH.finditer(text):
            if not _same_site(m.group(1).lower(), real):
                raise ValueError(f"Anchor text {m.group(1)!r} != real link host {real!r} (G3)")


async def send_email(*, to: str, subject: str, html: str, reply_to: Optional[str] = None) -> Optional[str]:
    _assert_safe_email(subject, html)
    payload = {"to": [to], "subject": subject, "html": html, "from_name": EMAIL_FROM_NAME}
    if reply_to or EMAIL_REPLY_TO:
        payload["contact_email"] = reply_to or EMAIL_REPLY_TO
    async with httpx.AsyncClient(timeout=30) as client_http:
        resp = await client_http.post(
            f"{EMAIL_BASE_URL}/api/v1/email/send",
            headers={"X-Email-Key": EMAIL_KEY},
            json=payload,
        )
    resp.raise_for_status()
    return resp.json().get("id")


class ConsultationRequest(BaseModel):
    full_name: str = Field(min_length=2, max_length=120)
    phone: str = Field(min_length=6, max_length=20)
    email: EmailStr
    preferred_date: str = Field(min_length=4, max_length=40)
    preferred_time: str = Field(min_length=1, max_length=40)
    consultation_type: str = Field(min_length=2, max_length=80)
    message: Optional[str] = Field(default="", max_length=2000)


@api_router.get("/")
async def root():
    return {"message": "Shree Sant Gajanan Pharmaclinic API"}


@api_router.post("/consultations")
async def create_consultation(payload: ConsultationRequest):
    doc = {
        "id": str(uuid.uuid4()),
        "full_name": payload.full_name.strip(),
        "phone": payload.phone.strip(),
        "email": str(payload.email).strip(),
        "preferred_date": payload.preferred_date,
        "preferred_time": payload.preferred_time,
        "consultation_type": payload.consultation_type,
        "message": (payload.message or "").strip(),
        "status": "new",
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    await db.consultations.insert_one(doc)

    email_sent = False
    if OWNER_EMAIL:
        try:
            row = lambda label, value: (
                f'<tr><td style="padding:8px 12px;font-weight:600;color:#0f392b;'
                f'border-bottom:1px solid #e8f2ea">{label}</td>'
                f'<td style="padding:8px 12px;border-bottom:1px solid #e8f2ea">{value}</td></tr>'
            )
            html = (
                '<table role="presentation" width="100%" style="font-family:Arial,sans-serif;'
                'font-size:14px;color:#0d1f18;border-collapse:collapse">'
                f'<tr><td colspan="2" style="padding:16px 12px;font-size:18px;font-weight:700;'
                f'color:#0f392b">New Consultation Request</td></tr>'
                + row("Name", escape(doc["full_name"]))
                + row("Phone", f'<a href="tel:{escape(doc["phone"])}">{escape(doc["phone"])}</a>')
                + row("Email", escape(doc["email"]))
                + row("Preferred Date", escape(doc["preferred_date"]))
                + row("Preferred Time", escape(doc["preferred_time"]))
                + row("Consultation Type", escape(doc["consultation_type"]))
                + row("Message / Health Concern", escape(doc["message"]) or "—")
                + f'<tr><td colspan="2" style="padding:14px 12px;font-size:12px;color:#4b6358">'
                  f'Received via the {escape(EMAIL_FROM_NAME)} website. Please contact the patient '
                  f'to confirm the appointment.</td></tr></table>'
            )
            await send_email(
                to=OWNER_EMAIL,
                subject=f"New consultation request — {doc['consultation_type']}",
                html=html,
            )
            email_sent = True
        except Exception as e:
            logger.error(f"Consultation email notification failed: {e}")

    return {"status": "received", "id": doc["id"], "email_sent": email_sent}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
