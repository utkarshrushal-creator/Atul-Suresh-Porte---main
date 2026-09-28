import { motion } from "framer-motion";
import { IMAGES } from "./data";
import { Reveal } from "./Reveal";

export const DoctorQuote = () => (
  <section data-testid="doctor-quote-section" className="relative py-24 sm:py-32 overflow-hidden">
    <img
      src={IMAGES.herbs}
      alt=""
      aria-hidden="true"
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-forest-deep/90" />
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto block h-px w-24 bg-gold origin-center"
      />
      <Reveal delay={0.15}>
        <p className="mt-10 font-accent italic text-3xl sm:text-4xl lg:text-5xl leading-snug text-cream">
          &ldquo;Your health is not just our responsibility; it is our commitment.&rdquo;
        </p>
      </Reveal>
      <Reveal delay={0.3}>
        <p className="mt-8 font-heading text-sm sm:text-base tracking-[0.22em] uppercase text-gold-soft">
          &mdash; Dr. Atul Suresh Porte
        </p>
      </Reveal>
    </div>
  </section>
);
