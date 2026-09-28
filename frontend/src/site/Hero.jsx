import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Phone, MessageCircle, CalendarCheck, Award } from "lucide-react";
import { CLINIC, IMAGES } from "./data";
import { MaskLine } from "./Reveal";

export const Hero = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 700], [0, 70]);
  const bgY = useTransform(scrollY, [0, 700], [0, -40]);

  return (
    <section id="home" data-testid="hero-section" className="relative overflow-hidden bg-cream hero-grain">
      <motion.div style={{ y: bgY }} className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-sage blur-3xl opacity-70" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-40 lg:pb-24 grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-7">
          <MaskLine delay={0.05}>
            <span className="inline-flex items-center gap-2 rounded-full border border-sage-deep bg-white/70 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase text-leaf">
              Clinic <span className="text-gold">+</span> Pharmacy &middot; Wanadongri, Nagpur
            </span>
          </MaskLine>

          <h1 className="mt-6 font-heading font-bold tracking-tight text-forest text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.05]">
            <MaskLine delay={0.15}>Shree Sant Gajanan</MaskLine>
            <MaskLine delay={0.28}>
              <span className="font-accent italic font-semibold text-leaf">Pharmaclinic</span>
            </MaskLine>
          </h1>

          <MaskLine delay={0.42} className="mt-6">
            <p className="text-lg sm:text-xl font-heading font-medium text-ink/85">
              Compassionate Healthcare Through Integrated Wellness &amp; Medical Consultation
            </p>
          </MaskLine>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl text-base leading-relaxed text-mutedgreen"
          >
            Personalized consultation and supportive care through Ayurveda, Homeopathy, Naturopathy
            and Hypnotherapy, with a patient-centered approach.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 flex items-center gap-4"
          >
            <div className="h-px w-10 bg-gold" />
            <div>
              <p className="font-heading font-semibold text-forest">Dr. Atul Suresh Porte</p>
              <p className="text-sm text-mutedgreen">15+ Years of Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.84, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <button
              data-testid="hero-book-btn"
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-cream shadow-lift hover:bg-forest-deep hover:-translate-y-0.5 transition-[background-color,transform] duration-300"
            >
              <CalendarCheck className="h-4 w-4" /> Book Consultation
            </button>
            <a
              href={CLINIC.phoneHref}
              data-testid="hero-call-btn"
              className="inline-flex items-center gap-2 rounded-full border-2 border-forest/20 bg-white/70 px-7 py-3.5 text-sm font-semibold text-forest hover:border-forest hover:-translate-y-0.5 transition-[border-color,transform] duration-300"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href={CLINIC.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-whatsapp-btn"
              className="inline-flex items-center gap-2 rounded-full bg-leaf px-7 py-3.5 text-sm font-semibold text-cream hover:bg-forest hover:-translate-y-0.5 transition-[background-color,transform] duration-300"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-sm lg:max-w-none"
          >
            <div className="absolute -inset-4 arch-frame border-2 border-gold/40" />
            <motion.div style={{ y: imgY }} className="arch-frame overflow-hidden shadow-lift bg-sage">
              <img
                src={IMAGES.doctor}
                alt="Dr. Atul Suresh Porte — Shree Sant Gajanan Pharmaclinic, Wanadongri, Nagpur"
                data-testid="hero-doctor-image"
                className="w-full h-[440px] sm:h-[520px] object-cover object-top"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-6 -left-4 sm:-left-8 rounded-2xl bg-white/90 backdrop-blur-md border border-sage px-5 py-4 shadow-lift flex items-center gap-3"
              data-testid="hero-experience-badge"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest text-gold">
                <Award className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-heading font-bold text-forest text-lg leading-none">15+ Years</span>
                <span className="block text-xs text-mutedgreen mt-1">Clinical Experience</span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
