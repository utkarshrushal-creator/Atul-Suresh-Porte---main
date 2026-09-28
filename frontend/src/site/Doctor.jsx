import { GraduationCap, Stethoscope, Heart, MessageCircle, Search, Handshake } from "lucide-react";
import { IMAGES } from "./data";
import { Reveal, SectionHeading } from "./Reveal";

const QUALIFICATIONS = ["BHMS", "B.Sc.", "D.Pharm", "D.N.Y.S.", "Hypnotherapist", "Sex Therapist"];

const VALUES = [
  { icon: Stethoscope, title: "Medical Expertise", desc: "Strong knowledge and careful clinical evaluation." },
  { icon: Heart, title: "Empathy", desc: "Understanding patients and treating them with care and respect." },
  { icon: MessageCircle, title: "Communication", desc: "Explaining health concerns and available options clearly." },
  { icon: Search, title: "Attention to Detail", desc: "Carefully reviewing symptoms and relevant medical information." },
  { icon: Handshake, title: "Trust & Integrity", desc: "Maintaining honesty, ethical practice and patient safety." },
];

export const Doctor = () => (
  <section id="doctor" data-testid="doctor-section" className="bg-sage/50 py-20 sm:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-5 relative mx-auto max-w-sm lg:max-w-none w-full">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 arch-frame border-2 border-gold/40" />
              <div className="arch-frame overflow-hidden shadow-lift bg-white">
                <img
                  src={IMAGES.doctor}
                  alt="Dr. Atul Suresh Porte, doctor at Shree Sant Gajanan Pharmaclinic Nagpur"
                  data-testid="doctor-profile-image"
                  className="w-full h-[420px] sm:h-[500px] object-cover object-top hover:scale-105 transition-transform duration-[1.4s] ease-out"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <SectionHeading eyebrow="Meet Your Doctor" title="Meet Dr. Atul Suresh Porte" />
          <Reveal delay={0.2}>
            <p className="mt-6 text-base leading-relaxed text-mutedgreen">
              With 15+ years of experience, Dr. Porte consults across Ayurveda, Homeopathy,
              Naturopathy and Hypnotherapy &mdash; taking time to listen carefully, understand each
              patient&rsquo;s history, and explain available options with clarity and honesty.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div
              data-testid="qualification-card"
              className="mt-8 rounded-2xl bg-white border border-sage-deep/60 p-7 shadow-soft"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest text-gold">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-heading font-semibold text-forest">Qualifications &amp; Professional Training</p>
                  <p className="text-xs text-mutedgreen">As provided by the clinic</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {QUALIFICATIONS.map((q) => (
                  <span
                    key={q}
                    className="rounded-full bg-sage px-4 py-2 text-sm font-semibold text-forest border border-sage-deep/50"
                  >
                    {q}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-xs leading-relaxed text-mutedgreen">
                15+ Years of Experience &middot; Consultation and supportive care across integrated wellness systems.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-20">
        <SectionHeading
          eyebrow="Core Values"
          title="The Qualities Behind Every Consultation"
          center
        />
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.07}>
              <div
                data-testid={`value-card-${i}`}
                className="h-full rounded-2xl bg-white border border-sage p-6 text-center shadow-soft hover:shadow-lift hover:-translate-y-1.5 transition-[box-shadow,transform] duration-500 group"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sage text-forest group-hover:bg-forest group-hover:text-gold transition-colors duration-500">
                  <v.icon className="h-5 w-5" strokeWidth={1.9} />
                </span>
                <p className="mt-4 font-heading font-semibold text-forest text-sm sm:text-base">{v.title}</p>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-mutedgreen">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
