import { CalendarCheck, MessagesSquare, ClipboardList, RefreshCw } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const STEPS = [
  { icon: CalendarCheck, num: "01", title: "Book", desc: "Request a consultation through phone, WhatsApp or the online form." },
  { icon: MessagesSquare, num: "02", title: "Consultation", desc: "Discuss your health concerns with the doctor." },
  { icon: ClipboardList, num: "03", title: "Personalized Guidance", desc: "Receive appropriate recommendations based on your consultation." },
  { icon: RefreshCw, num: "04", title: "Follow-Up", desc: "Contact the clinic for follow-up guidance when required." },
];

export const Process = () => (
  <section data-testid="process-section" className="bg-cream py-20 sm:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        center
        eyebrow="Patient Experience"
        title="Your Consultation, Step by Step"
      />
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
        <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-sage-deep to-transparent" />
        {STEPS.map((s, i) => (
          <Reveal key={s.num} delay={i * 0.1}>
            <div
              data-testid={`process-step-${i}`}
              className="relative h-full rounded-3xl bg-white border border-sage p-7 text-center shadow-soft hover:shadow-lift hover:-translate-y-1.5 transition-[box-shadow,transform] duration-500"
            >
              <span className="font-accent italic text-5xl text-gold/50">{s.num}</span>
              <span className="mx-auto mt-2 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-gold shadow-soft">
                <s.icon className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <h3 className="mt-5 font-heading font-semibold text-forest text-xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mutedgreen">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
