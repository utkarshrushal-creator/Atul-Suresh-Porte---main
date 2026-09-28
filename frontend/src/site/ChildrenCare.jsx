import { Accessibility, PersonStanding, HeartHandshake, Check } from "lucide-react";
import { IMAGES } from "./data";
import { Reveal, SectionHeading } from "./Reveal";

const CARDS = [
  {
    icon: Accessibility,
    title: "Child with a Disability",
    desc: "A child who has a long-term physical, intellectual, sensory or developmental condition that may affect daily activities.",
    examples: ["Cerebral palsy", "Autism", "Intellectual disability", "Hearing impairment"],
  },
  {
    icon: PersonStanding,
    title: "Child with a Physical Disability",
    desc: "Specifically refers to difficulties involving physical movement or bodily functions.",
    examples: ["Mobility impairment", "Cerebral palsy", "Muscular conditions", "Limb differences"],
  },
  {
    icon: HeartHandshake,
    title: "Child with Special Needs",
    desc: "A broad term sometimes used for children who require additional support with education, development, communication or daily life.",
    examples: ["Learning difficulties", "Developmental conditions", "Sensory difficulties", "Physical disabilities"],
  },
];

const SUPPORT = [
  "Developmental support",
  "Physical and mobility concerns",
  "Speech and communication difficulties",
  "Learning and behavioral support",
  "Genetic and neurological conditions",
  "Family guidance and support",
];

export const ChildrenCare = () => (
  <section id="children" data-testid="children-section" className="bg-white py-20 sm:py-28 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-end">
        <SectionHeading
          eyebrow="Children's Specialized Care"
          title="Specialized Care for Children with Disabilities & Developmental Needs"
          sub="Supporting children and families with individualized developmental guidance, communication support and holistic care."
        />
        <Reveal delay={0.15}>
          <div className="rounded-3xl overflow-hidden shadow-lift">
            <img
              src={IMAGES.childWheelchair}
              alt="Smiling child in a wheelchair — children's developmental care in Nagpur"
              data-testid="children-hero-image"
              className="w-full h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-[1.4s] ease-out"
            />
          </div>
        </Reveal>
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-5 sm:gap-6">
        {CARDS.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <div
              data-testid={`children-card-${i}`}
              className="h-full rounded-3xl bg-cream border border-sage p-7 shadow-soft hover:shadow-lift hover:-translate-y-1.5 transition-[box-shadow,transform] duration-500"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest text-gold">
                <c.icon className="h-6 w-6" strokeWidth={1.7} />
              </span>
              <h3 className="mt-5 font-heading font-semibold text-forest text-xl leading-snug">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mutedgreen">{c.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {c.examples.map((ex) => (
                  <span key={ex} className="rounded-full bg-sage px-3 py-1.5 text-xs font-medium text-forest">
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 grid lg:grid-cols-2 gap-10 items-center">
        <Reveal>
          <div className="rounded-3xl overflow-hidden shadow-lift">
            <img
              src={IMAGES.thankYou}
              alt="Children supported by Shree Sant Gajanan Pharmaclinic holding a thank-you message"
              data-testid="children-community-image"
              className="w-full h-72 sm:h-80 object-cover hover:scale-105 transition-transform duration-[1.4s] ease-out"
            />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <h3 className="font-heading font-semibold text-forest text-2xl sm:text-3xl">
              How We Support Children &amp; Families
            </h3>
          </Reveal>
          <div className="mt-7 grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {SUPPORT.map((s, i) => (
              <Reveal key={s} delay={0.1 + i * 0.05}>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage text-forest">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <p className="text-sm font-medium text-ink/80">{s}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}>
            <p className="mt-7 text-xs leading-relaxed text-mutedgreen">
              Every child is unique. Guidance is individualized, respectful and inclusive, and works
              alongside &mdash; not in place of &mdash; recommended medical, therapeutic and educational care.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);
