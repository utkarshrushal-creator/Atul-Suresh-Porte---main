# PRD — Shree Sant Gajanan Pharmaclinic Website

## Original Problem Statement
Premium, modern, trustworthy, mobile-first medical website for SHREE SANT GAJANAN PHARMACLINIC (Clinic + Pharmacy), Wanadongri, Hingna Road, Nagpur. Doctor: Dr. Atul Suresh Porte (15+ yrs). Services: Ayurveda, Homeopathy, Naturopathy, Hypnotherapy, Sexual Health, Genetic & Chronic consultation, Children's developmental care, Pharmacy. Must include booking form, quick contact (Call/WhatsApp/Email/SMS), map, testimonials, doctor quote, UPI QR section, footer disclaimer. Strict rule: no cure guarantees or invented credentials.

## User Personas
- Local patients/families in Nagpur seeking integrated/holistic consultation
- Parents of children with developmental or disability-related needs
- Existing patients wanting quick contact, directions, or UPI payment

## Architecture
- Frontend: React 19 + Tailwind + framer-motion + lenis smooth scroll. Single-page sections in /app/frontend/src/site/ (data.js holds all content + asset URLs).
- Backend: FastAPI (/api prefix), POST /api/consultations (Pydantic-validated) → MongoDB `consultations` collection + email notification via Emergent managed Resend proxy (EMERGENT_EMAIL_KEY in backend/.env, guardrail-gated HTML template).
- Email: from_name "Shree Sant Gajanan Pharmaclinic", recipient OWNER_EMAIL=sinuatul@gmail.com, reply-to same.
- Assets: 5 user-uploaded images (doctor portrait, community circle, child in wheelchair, thank-you kids, PhonePe UPI QR) hosted on customer-assets CDN; curated Unsplash for clinic/herbs/naturopathy.

## Implemented (2026-09-28)
- Sticky header + mobile hamburger, floating mobile action bar (Call|WhatsApp|Book), desktop WhatsApp float
- Hero with masked line-by-line reveal, arch-framed real doctor photo, subtle parallax, CTAs
- Editorial marquee band, trust bar (4 cards), About, Doctor profile + qualification card + 5 values cards
- Services bento (6 cards), Conditions (8 categories incl. responsible disclaimers), Children's specialized care
- Pharmacy section, 4-step process, 4 testimonials (labeled as supplied), doctor quote band
- Booking form → MongoDB + email to clinic (verified email_sent:true), WhatsApp prefill confirm
- Quick contact grid, map embed + Get Directions, UPI QR section (labeled PhonePe payment QR), footer with disclaimer
- SEO: title/meta/keywords/OG + MedicalClinic JSON-LD, favicon SVG logo mark

## Verified
- GET /api/ OK; POST /api/consultations OK (email_sent true); invalid input rejected (422)
- UI: hero/form/QR/mobile bar screenshotted at 1366/768/375; form submit shows thank-you; no horizontal scroll at 375px

## Backlog / Next
- P0: none blocking
- P1: Admin view of consultation requests (auth-gated), Google Business Profile link, real clinic interior photos
- P2: Marathi/Hindi language toggle, online payment for consultations, blog/health-tips for SEO
