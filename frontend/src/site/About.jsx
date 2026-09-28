import { Check } from "lucide-react";
import { IMAGES } from "./data";
import { Reveal, SectionHeading } from "./Reveal";

const POINTS = [
  "Personalized attention for every patient",
  "Patient education and clear communication",
  "Ethical, responsible care",
  "Individualized consultation",
  "Family-oriented healthcare",
  "Holistic wellness focus",
];

export const About = () => (
  <section id="about" data-testid="about-section" className="bg-white py-20 sm:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
      <div className="relative order-2 lg:order-1">
        <Reveal>
          <div className="rounded-[28px] overflow-hidden shadow-lift">
            <img
              src={IMAGES.clinic}
              alt="Consultation at Shree Sant Gajanan Pharmaclinic, Wanadongri"
              data-testid="about-clinic-image"
              className="w-full h-[380px] sm:h-[460px] object-cover hover:scale-105 transition-transform duration-[1.4s] ease-out"
            />
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="absolute -bottom-8 -right-2 sm:right-8 w-40 sm:w-48 rounded-2xl overflow-hidden border-4 border-white shadow-lift hidden sm:block">
            <img
              src={IMAGES.thankYou}
              alt="Children thanking Shree Sant Gajanan Pharmaclinic"
              data-testid="about-thankyou-image"
              className="w-full h-32 sm:h-36 object-cover"
            />
          </div>
        </Reveal>
      </div>

      <div className="order-1 lg:order-2">
        <SectionHeading
          eyebrow="About the Clinic"
          title="About Shree Sant Gajanan Pharmaclinic"
        />
        <Reveal delay={0.2}>
          <p className="mt-6 text-base leading-relaxed text-mutedgreen">
            Shree Sant Gajanan Pharmaclinic is a healthcare clinic and pharmacy in Wanadongri,
            Nagpur, focused on personalized consultation and holistic wellness. The clinic provides
            consultation across Ayurveda, Homeopathy, Naturopathy and Hypnotherapy, with attention
            to each patient&rsquo;s individual concerns, history and needs.
          </p>
        </Reveal>
        <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {POINTS.map((p, i) => (
            <Reveal key={p} delay={0.24 + i * 0.05}>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage text-forest">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <p className="text-sm font-medium text-ink/80">{p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
