import { Star, Quote } from "lucide-react";
import { TESTIMONIALS, IMAGES } from "./data";
import { Reveal, SectionHeading } from "./Reveal";

const Stars = () => (
  <div className="flex gap-1" aria-label="Rated 5.0 out of 5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
    ))}
  </div>
);

export const Testimonials = () => (
  <section id="reviews" data-testid="reviews-section" className="bg-white py-20 sm:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="Patient Experiences"
            title="What Patients Share About Their Consultations"
          />
          <Reveal delay={0.2}>
            <p className="mt-6 text-sm leading-relaxed text-mutedgreen">
              The following experiences were supplied by the clinic for this website. They reflect
              individual consultation experiences.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="mt-8 rounded-3xl overflow-hidden shadow-lift hidden lg:block">
              <img
                src={IMAGES.thankYou}
                alt="Happy children holding a thank-you message"
                data-testid="reviews-image"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-[1.4s] ease-out"
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5 sm:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.label} delay={i * 0.08}>
              <figure
                data-testid={`testimonial-card-${i}`}
                className="h-full rounded-3xl bg-cream border border-sage p-7 shadow-soft hover:shadow-lift hover:-translate-y-1.5 transition-[box-shadow,transform] duration-500 flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <Stars />
                  <span className="text-xs font-semibold text-mutedgreen">5.0/5</span>
                </div>
                <blockquote className="mt-5 text-sm sm:text-[15px] leading-relaxed text-ink/80 flex-1">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-sage flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sage text-forest">
                    <Quote className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-forest">{t.label}</span>
                    <span className="block text-xs text-mutedgreen">Testimonial supplied for this website</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
