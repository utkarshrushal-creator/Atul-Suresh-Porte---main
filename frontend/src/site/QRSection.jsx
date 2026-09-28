import { ScanLine, Phone, MessageCircle } from "lucide-react";
import { CLINIC, IMAGES } from "./data";
import { Reveal, SectionHeading } from "./Reveal";

export const QRSection = () => (
  <section id="scan" data-testid="qr-section" className="bg-cream py-20 sm:py-28">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
      <SectionHeading
        center
        eyebrow="Scan & Connect"
        title="Scan &amp; Connect With Us"
        sub="Scan the QR code to quickly connect with Shree Sant Gajanan Pharmaclinic."
      />
      <Reveal delay={0.15}>
        <div className="mt-12 inline-block rounded-[32px] bg-white border border-sage shadow-lift p-6 sm:p-10">
          <div className="relative mx-auto w-64 sm:w-80">
            <ScanLine className="absolute -top-3 -left-3 h-7 w-7 text-gold" />
            <ScanLine className="absolute -top-3 -right-3 h-7 w-7 text-gold -scale-x-100" />
            <ScanLine className="absolute -bottom-3 -left-3 h-7 w-7 text-gold -scale-y-100" />
            <ScanLine className="absolute -bottom-3 -right-3 h-7 w-7 text-gold -scale-100" />
            <img
              src={IMAGES.qr}
              alt="Clinic UPI payment QR code (PhonePe) — Shree Sant Gajanan Pharmaclinic"
              data-testid="qr-code-image"
              className="w-full rounded-2xl"
            />
          </div>
          <p className="mt-6 font-heading font-semibold text-forest">Clinic UPI / Payment QR (PhonePe)</p>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-mutedgreen max-w-sm mx-auto">
            Scan with any UPI app to pay the clinic directly. The QR can also be configured for
            WhatsApp, appointment booking, clinic location or contact details.
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.25}>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={CLINIC.phoneHref}
            data-testid="qr-call-btn"
            className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream hover:bg-forest-deep transition-colors duration-300"
          >
            <Phone className="h-4 w-4" /> {CLINIC.phoneDisplay}
          </a>
          <a
            href={CLINIC.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="qr-whatsapp-btn"
            className="inline-flex items-center gap-2 rounded-full border-2 border-forest/20 px-6 py-3 text-sm font-semibold text-forest hover:border-forest transition-colors duration-300"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp the Clinic
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);
