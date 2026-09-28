import { Phone, Mail, MapPin } from "lucide-react";
import { CLINIC, NAV_LINKS } from "./data";
import { goTo } from "./scroll";
import { LogoMark } from "./LogoMark";

export const Footer = () => (
  <footer data-testid="site-footer" className="bg-forest-deep text-sage/80">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark className="h-11 w-11" />
            <span className="leading-tight">
              <span className="block font-heading font-bold text-cream text-sm tracking-tight">SHREE SANT GAJANAN</span>
              <span className="block font-heading text-[11px] tracking-[0.32em] text-gold-soft font-semibold">PHARMACLINIC</span>
            </span>
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.24em] text-gold-soft/80 font-semibold">Clinic + Pharmacy</p>
          <p className="mt-5 text-sm leading-relaxed">
            Ayurveda &middot; Homeopathy &middot; Naturopathy &middot; Hypnotherapy &middot; Health Consultation
          </p>
          <button
            data-testid="footer-book-btn"
            onClick={() => goTo("#book")}
            className="mt-7 rounded-full bg-gold px-6 py-3 text-sm font-bold text-forest-deep hover:bg-gold-soft transition-colors duration-300"
          >
            Book Consultation
          </button>
        </div>

        <nav aria-label="Footer">
          <p className="font-heading font-semibold text-cream text-sm uppercase tracking-[0.2em]">Quick Links</p>
          <ul className="mt-6 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  data-testid={`footer-link-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  onClick={(e) => { e.preventDefault(); goTo(l.href); }}
                  className="text-sm hover:text-gold-soft transition-colors duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-heading font-semibold text-cream text-sm uppercase tracking-[0.2em]">Contact</p>
          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href={CLINIC.phoneHref} data-testid="footer-phone-link" className="flex items-center gap-3 hover:text-gold-soft transition-colors duration-300">
                <Phone className="h-4 w-4 shrink-0 text-gold" /> {CLINIC.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={CLINIC.emailHref} data-testid="footer-email-link" className="flex items-center gap-3 hover:text-gold-soft transition-colors duration-300">
                <Mail className="h-4 w-4 shrink-0 text-gold" /> {CLINIC.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-heading font-semibold text-cream text-sm uppercase tracking-[0.2em]">Address</p>
          <p className="mt-6 flex items-start gap-3 text-sm leading-relaxed">
            <MapPin className="h-4 w-4 mt-1 shrink-0 text-gold" />
            {CLINIC.address}
          </p>
        </div>
      </div>

      <div className="mt-14 pt-8 border-t border-white/10">
        <p className="text-xs leading-relaxed text-sage/60 max-w-4xl" data-testid="footer-disclaimer">
          Information provided on this website is for general informational purposes and does not
          replace professional medical diagnosis, emergency care or treatment from an appropriately
          qualified healthcare professional. Serious or emergency symptoms require appropriate
          medical attention.
        </p>
        <p className="mt-6 text-xs text-sage/50">
          &copy; 2026 Shree Sant Gajanan Pharmaclinic. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);
