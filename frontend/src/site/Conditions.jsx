import { HeartPulse, Brain, CloudSun, Droplet, Sparkles, Users, Baby, Stethoscope, Check, Info } from "lucide-react";
import { CONDITIONS } from "./data";
import { Reveal, SectionHeading } from "./Reveal";

const ICONS = { HeartPulse, Brain, CloudSun, Droplet, Sparkles, Users, Baby, Stethoscope };

export const Conditions = () => (
  <section id="conditions" data-testid="conditions-section" className="bg-sage/50 py-20 sm:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Areas of Clinical Focus"
        title="Conditions & Health Concerns We Consult On"
        sub="The clinic provides consultation and supportive care across a range of health concerns. Patients with serious, complex or persistent symptoms should receive appropriate evaluation from qualified medical specialists when necessary."
      />

      <div className="mt-14 grid md:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
        {CONDITIONS.map((c, i) => {
          const Icon = ICONS[c.icon];
          return (
            <Reveal key={c.title} delay={(i % 4) * 0.07}>
              <div
                data-testid={`condition-card-${i}`}
                className="h-full rounded-2xl bg-white border border-sage p-6 shadow-soft hover:shadow-lift hover:-translate-y-1.5 transition-[box-shadow,transform] duration-500 flex flex-col"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sage text-forest">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 font-heading font-semibold text-forest text-lg leading-snug">{c.title}</h3>
                <ul className="mt-4 space-y-2.5 flex-1">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-mutedgreen">
                      <Check className="h-4 w-4 mt-0.5 shrink-0 text-leaf" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
                {c.note && (
                  <p className="mt-5 rounded-xl bg-gold/10 border border-gold/30 p-3.5 text-xs leading-relaxed text-ink/75 flex gap-2">
                    <Info className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
                    {c.note}
                  </p>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
