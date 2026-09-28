import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { CLINIC, NAV_LINKS } from "./data";
import { goTo } from "./scroll";
import { LogoMark } from "./LogoMark";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setOpen(false);
    goTo(href);
  };

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,box-shadow] duration-500 ${
        scrolled ? "bg-cream/90 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[76px]">
          <a
            href="#home"
            data-testid="nav-logo-link"
            onClick={(e) => handleNav(e, "#home")}
            className="flex items-center gap-3 group"
          >
            <LogoMark className="h-11 w-11 transition-transform duration-500 group-hover:rotate-3" />
            <span className="leading-tight">
              <span className="block font-heading font-bold text-forest text-sm sm:text-base tracking-tight">
                SHREE SANT GAJANAN
              </span>
              <span className="block font-heading text-[11px] sm:text-xs tracking-[0.32em] text-leaf font-semibold">
                PHARMACLINIC
              </span>
            </span>
          </a>

          <nav className="hidden xl:flex items-center gap-7" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                onClick={(e) => handleNav(e, l.href)}
                className="text-sm font-medium text-ink/75 hover:text-forest transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden xl:flex items-center gap-3">
            <a
              href={CLINIC.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="header-whatsapp-btn"
              className="inline-flex items-center gap-2 rounded-full border border-sage-deep px-5 py-2.5 text-sm font-semibold text-forest hover:bg-sage transition-colors duration-300"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <button
              data-testid="header-book-btn"
              onClick={() => goTo("#book")}
              className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-2.5 text-sm font-semibold text-cream hover:bg-forest-deep transition-colors duration-300 shadow-soft"
            >
              Book Consultation
            </button>
          </div>

          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen(!open)}
            className="xl:hidden inline-flex items-center justify-center h-11 w-11 rounded-full border border-sage-deep text-forest"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            data-testid="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="xl:hidden overflow-hidden bg-cream/95 backdrop-blur-md border-t border-sage"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  onClick={(e) => handleNav(e, l.href)}
                  className="py-3 text-base font-medium text-ink/80 border-b border-sage/70 last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex gap-3 pt-5">
                <a
                  href={CLINIC.phoneHref}
                  data-testid="mobile-call-btn"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-sage-deep px-4 py-3 text-sm font-semibold text-forest"
                >
                  <Phone className="h-4 w-4" /> Call
                </a>
                <button
                  data-testid="mobile-book-btn"
                  onClick={() => { setOpen(false); goTo("#book"); }}
                  className="flex-1 rounded-full bg-forest px-4 py-3 text-sm font-semibold text-cream"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
