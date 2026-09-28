import { Leaf, Droplets, Sun, Brain, ShieldCheck, Activity, ArrowUpRight } from "lucide-react";
import { SERVICES, IMAGES } from "./data";
import { Reveal, SectionHeading } from "./Reveal";
import { goTo } from "./scroll";

const ICONS = { Leaf, Droplets, Sun, Brain, ShieldCheck, Activity };

export const Services = () => (
  <section id="services" data-testid="services-section" className="bg-white py-20 sm:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="What We Offer"
        title="Our Healthcare Services"
        sub="Consultation and supportive wellness guidance across traditional and complementary systems of care."
      />

      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {SERVICES.map((s, i) => {
          const Icon = ICONS[s.icon];
          const featured = i === 0;
          return (
            <Reveal key={s.title} delay={(i % 3) * 0.08} className={featured ? "lg:row-span-2" : ""}>
              <button
                data-testid={`service-card-${i}`}
                onClick={() => goTo("#book")}
                className={`group relative h-full w-full text-left rounded-3xl border border-sage overflow-hidden shadow-soft hover:shadow-lift hover:-translate-y-1.5 transition-[box-shadow,transform] duration-500 ${
                  featured ? "bg-forest text-cream min-h-[320px] lg:min-h-full" : "bg-cream p-7"
                }`}
              >
                {featured ? (
                  <>
                    <img
                      src={IMAGES.herbs}
                      alt="Ayurvedic herbs and wellness consultation in Nagpur"
                      className="absolute inset-0 h-full w-full object-cover opacity-25 group-hover:opacity-35 group-hover:scale-105 transition-[opacity,transform] duration-[1.4s] ease-out"
                    />
                    <div className="relative p-8 flex flex-col h-full justify-end min-h-[320px]">
                      <span className="absolute top-7 left-8 flex h-13 w-13 p-3.5 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                        <Icon className="h-7 w-7" strokeWidth={1.7} />
                      </span>
                      <ArrowUpRight className="absolute top-7 right-7 h-5 w-5 text-gold/70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                      <h3 className="font-heading font-semibold text-2xl">{s.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-sage/85">{s.desc}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage text-forest group-hover:bg-forest group-hover:text-gold transition-colors duration-500">
                      <Icon className="h-6 w-6" strokeWidth={1.7} />
                    </span>
                    <ArrowUpRight className="absolute top-7 right-7 h-5 w-5 text-forest/30 group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-[color,transform] duration-500" />
                    <h3 className="mt-5 font-heading font-semibold text-xl text-forest">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-mutedgreen">{s.desc}</p>
                  </>
                )}
              </button>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.2}>
        <p className="mt-8 text-xs sm:text-sm text-mutedgreen max-w-2xl">
          Consultations are personalized and guidance is based on individual evaluation. No outcome
          can be guaranteed, and supportive care complements &mdash; never replaces &mdash; necessary
          medical treatment.
        </p>
      </Reveal>
    </div>
  </section>
);
