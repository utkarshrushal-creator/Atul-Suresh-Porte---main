import { Pill, FileText, PackageCheck, PhoneCall, MessageCircle } from "lucide-react";
import { CLINIC, IMAGES } from "./data";
import { Reveal, SectionHeading } from "./Reveal";

const POINTS = [
  { icon: Pill, title: "Pharmacy Information", desc: "An in-house pharmacy connected with the clinic for convenient, guided access." },
  { icon: FileText, title: "Prescription Support", desc: "Medicines dispensed as advised by qualified healthcare professionals." },
  { icon: PackageCheck, title: "Healthcare Products", desc: "A range of everyday healthcare and wellness products for patients and families." },
  { icon: PhoneCall, title: "Ask About Availability", desc: "Call or message the pharmacy to check availability before you visit." },
];

export const Pharmacy = () => (
  <section id="pharmacy" data-testid="pharmacy-section" className="bg-forest py-20 sm:py-28 relative overflow-hidden">
    <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-leaf/30 blur-3xl" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <SectionHeading
            light
            eyebrow="Clinic + Pharmacy"
            title="Our Pharmacy"
            sub="Convenient pharmacy services connected with the clinic, helping patients access appropriate healthcare products and medicines as advised by qualified healthcare professionals."
          />
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {POINTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <div className="h-full rounded-2xl bg-white/[0.06] border border-white/10 p-6 backdrop-blur-sm hover:bg-white/[0.1] transition-colors duration-500">
                  <p.icon className="h-6 w-6 text-gold" strokeWidth={1.8} />
                  <p className="mt-4 font-heading font-semibold text-cream">{p.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-sage/75">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={CLINIC.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="pharmacy-contact-btn"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-forest-deep hover:bg-gold-soft hover:-translate-y-0.5 transition-[background-color,transform] duration-300"
              >
                <MessageCircle className="h-4 w-4" /> Contact Pharmacy
              </a>
              <a
                href={CLINIC.phoneHref}
                data-testid="pharmacy-call-btn"
                className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream hover:bg-white/10 transition-colors duration-300"
              >
                <PhoneCall className="h-4 w-4" /> {CLINIC.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="rounded-[28px] overflow-hidden shadow-lift border border-white/10">
            <img
              src={IMAGES.naturopathy}
              alt="Natural wellness and pharmacy products at Shree Sant Gajanan Pharmaclinic"
              data-testid="pharmacy-image"
              className="w-full h-[380px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-[1.4s] ease-out"
            />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
