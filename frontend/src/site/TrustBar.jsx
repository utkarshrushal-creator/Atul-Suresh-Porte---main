import { Award, HeartHandshake, Layers, Store } from "lucide-react";
import { Reveal } from "./Reveal";

const CARDS = [
  { icon: Award, big: "15+ Years", small: "Clinical Experience" },
  { icon: HeartHandshake, big: "Patient-Centered", small: "Personalized Consultation" },
  { icon: Layers, big: "Multiple Systems", small: "Integrated Wellness Approaches" },
  { icon: Store, big: "Clinic + Pharmacy", small: "Convenient Healthcare Services" },
];

export const TrustBar = () => (
  <section data-testid="trust-bar" className="bg-cream relative z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 pb-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {CARDS.map((c, i) => (
          <Reveal key={c.big} delay={i * 0.08}>
            <div
              data-testid={`trust-card-${i}`}
              className="h-full rounded-2xl bg-white border border-sage p-6 sm:p-7 shadow-soft hover:shadow-lift hover:-translate-y-1.5 transition-[box-shadow,transform] duration-500"
            >
              <c.icon className="h-7 w-7 text-gold" strokeWidth={1.8} />
              <p className="mt-4 font-heading font-bold text-forest text-lg sm:text-xl leading-tight">{c.big}</p>
              <p className="mt-1.5 text-sm text-mutedgreen">{c.small}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
