import { useNavigate } from "react-router-dom";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { CLINIC } from "./data";

export const Floating = () => {
  const navigate = useNavigate();
  return (
  <>
    <div
      data-testid="mobile-action-bar"
      className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-forest/95 backdrop-blur-md border-t border-white/10"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-3">
        <a
          href={CLINIC.phoneHref}
          data-testid="floating-call-btn"
          className="flex flex-col items-center gap-1 py-3 text-cream active:bg-white/10 transition-colors duration-200"
        >
          <Phone className="h-5 w-5" />
          <span className="text-[11px] font-semibold tracking-wide">Call</span>
        </a>
        <a
          href={CLINIC.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="floating-whatsapp-btn"
          className="flex flex-col items-center gap-1 py-3 text-gold-soft active:bg-white/10 transition-colors duration-200"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-[11px] font-semibold tracking-wide">WhatsApp</span>
        </a>
        <button
          data-testid="floating-book-btn"
          onClick={() => navigate("/contact")}
          className="flex flex-col items-center gap-1 py-3 text-cream active:bg-white/10 transition-colors duration-200"
        >
          <CalendarCheck className="h-5 w-5" />
          <span className="text-[11px] font-semibold tracking-wide">Book</span>
        </button>
      </div>
    </div>

    <a
      href={CLINIC.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="floating-whatsapp-desktop"
      aria-label="Chat on WhatsApp"
      className="hidden md:flex fixed bottom-7 right-7 z-50 h-14 w-14 items-center justify-center rounded-full bg-leaf text-cream shadow-lift hover:bg-forest hover:scale-110 transition-[background-color,transform] duration-300"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
    </>
  );
};
