import { Phone, MessageCircle, Mail, MessageSquareText, CalendarCheck, MapPin, Navigation } from "lucide-react";
import { CLINIC } from "./data";
import { Reveal, SectionHeading } from "./Reveal";
import { goTo } from "./scroll";

const OPTIONS = [
  { icon: Phone, title: "Call", sub: CLINIC.phoneDisplay, href: CLINIC.phoneHref, testid: "quick-call-btn" },
  { icon: MessageCircle, title: "WhatsApp", sub: "Chat with the clinic", href: CLINIC.whatsapp, testid: "quick-whatsapp-btn", external: true },
  { icon: Mail, title: "Email", sub: CLINIC.email, href: CLINIC.emailHref, testid: "quick-email-btn" },
  { icon: MessageSquareText, title: "SMS", sub: "Send SMS", href: CLINIC.smsHref, testid: "quick-sms-btn" },
];

export const Contact = () => (
  <section id="contact" data-testid="contact-section" className="bg-white py-20 sm:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        center
        eyebrow="Reach Us"
        title="Quick Contact Options"
        sub="Choose whichever way is easiest for you — the clinic responds personally."
      />

      <div className="mt-14 grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
        {OPTIONS.map((o, i) => (
          <Reveal key={o.title} delay={i * 0.06}>
            <a
              href={o.href}
              data-testid={o.testid}
              {...(o.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex h-full flex-col items-center rounded-3xl bg-cream border border-sage p-7 text-center shadow-soft hover:shadow-lift hover:-translate-y-1.5 transition-[box-shadow,transform] duration-500"
            >
              <span className="flex h-13 w-13 p-3.5 items-center justify-center rounded-2xl bg-forest text-gold group-hover:bg-leaf transition-colors duration-500">
                <o.icon className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <span className="mt-4 font-heading font-semibold text-forest">{o.title}</span>
              <span className="mt-1.5 text-xs text-mutedgreen break-all">{o.sub}</span>
            </a>
          </Reveal>
        ))}
        <Reveal delay={0.24}>
          <button
            data-testid="quick-book-btn"
            onClick={() => goTo("#book")}
            className="group flex h-full w-full flex-col items-center rounded-3xl bg-forest p-7 text-center shadow-soft hover:shadow-lift hover:-translate-y-1.5 hover:bg-forest-deep transition-[box-shadow,transform,background-color] duration-500"
          >
            <span className="flex h-13 w-13 p-3.5 items-center justify-center rounded-2xl bg-gold text-forest-deep">
              <CalendarCheck className="h-6 w-6" strokeWidth={1.8} />
            </span>
            <span className="mt-4 font-heading font-semibold text-cream">Book Consultation</span>
            <span className="mt-1.5 text-xs text-sage/75">Request an appointment</span>
          </button>
        </Reveal>
      </div>

      <div className="mt-24 grid lg:grid-cols-2 gap-12 items-stretch">
        <div className="flex flex-col justify-center">
          <SectionHeading
            eyebrow="Visit Us"
            title="Visit Shree Sant Gajanan Pharmaclinic"
          />
          <Reveal delay={0.2}>
            <div className="mt-7 flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sage text-forest">
                <MapPin className="h-5 w-5" />
              </span>
              <p className="text-base leading-relaxed text-mutedgreen pt-1.5" data-testid="clinic-address">
                {CLINIC.address}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={CLINIC.directions}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="get-directions-btn"
                className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-cream hover:bg-forest-deep transition-colors duration-300"
              >
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
              <a
                href={CLINIC.phoneHref}
                data-testid="location-call-btn"
                className="inline-flex items-center gap-2 rounded-full border-2 border-forest/20 px-6 py-3.5 text-sm font-semibold text-forest hover:border-forest transition-colors duration-300"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href={CLINIC.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="location-whatsapp-btn"
                className="inline-flex items-center gap-2 rounded-full bg-leaf px-6 py-3.5 text-sm font-semibold text-cream hover:bg-forest transition-colors duration-300"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <div className="rounded-[28px] overflow-hidden shadow-lift border border-sage h-full min-h-[340px]">
            <iframe
              title="Shree Sant Gajanan Pharmaclinic location map — Wanadongri, Nagpur"
              data-testid="location-map"
              src={CLINIC.mapEmbed}
              className="w-full h-full min-h-[340px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
