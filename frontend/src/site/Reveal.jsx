import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, y = 32, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-70px" }}
    transition={{ duration: 0.8, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

export const MaskLine = ({ children, delay = 0, className = "" }) => (
  <span className={`block overflow-hidden ${className}`}>
    <motion.span
      className="block"
      initial={{ y: "112%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay, ease: EASE }}
    >
      {children}
    </motion.span>
  </span>
);

export const Eyebrow = ({ children, light = false }) => (
  <p
    className={`text-xs sm:text-sm uppercase tracking-[0.28em] font-semibold font-heading ${
      light ? "text-gold-soft" : "text-leaf"
    }`}
  >
    {children}
  </p>
);

export const SectionHeading = ({ eyebrow, title, sub, light = false, center = false }) => (
  <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
    <Reveal>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
    </Reveal>
    <Reveal delay={0.08}>
      <h2
        className={`mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.08] ${
          light ? "text-cream" : "text-forest"
        }`}
      >
        {title}
      </h2>
    </Reveal>
    {sub && (
      <Reveal delay={0.16}>
        <p className={`mt-5 text-base sm:text-lg leading-relaxed ${light ? "text-sage/85" : "text-mutedgreen"}`}>
          {sub}
        </p>
      </Reveal>
    )}
  </div>
);
