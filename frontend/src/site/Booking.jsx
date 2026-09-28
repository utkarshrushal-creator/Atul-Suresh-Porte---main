import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { CalendarCheck, CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { CLINIC, CONSULTATION_TYPES } from "./data";
import { Reveal, SectionHeading } from "./Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const EMPTY = {
  full_name: "",
  phone: "",
  email: "",
  preferred_date: "",
  preferred_time: "",
  consultation_type: "",
  message: "",
};

const inputCls =
  "w-full rounded-xl border border-sage-deep/70 bg-white px-4 py-3.5 text-sm text-ink placeholder:text-mutedgreen/60 outline-none focus:border-forest focus:ring-2 focus:ring-forest/15 transition-[border-color,box-shadow] duration-300";

export const Booking = () => {
  const [form, setForm] = useState(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const whatsappPrefill = `https://wa.me/919021332788?text=${encodeURIComponent(
    `Namaste, I am ${form.full_name || "a patient"}. I would like to request a ${form.consultation_type || "consultation"} on ${form.preferred_date || "a convenient date"} at ${form.preferred_time || "a convenient time"}. ${form.message || ""}`
  )}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await axios.post(`${API}/consultations`, form);
      setSubmitted(true);
      toast.success("Consultation request received");
    } catch (err) {
      toast.error("Could not submit your request. Please call or WhatsApp the clinic instead.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="book" data-testid="booking-section" className="bg-sage/50 py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          center
          eyebrow="Appointments"
          title="Book Your Consultation"
          sub="Share your details and the clinic will contact you to confirm your appointment."
        />

        <Reveal delay={0.15}>
          <div className="mt-12 rounded-[28px] bg-white border border-sage shadow-lift p-7 sm:p-10">
            {submitted ? (
              <div data-testid="booking-success-message" className="text-center py-10">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage text-forest">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="mt-6 font-heading font-semibold text-forest text-2xl">Thank you.</h3>
                <p className="mt-3 max-w-md mx-auto text-sm sm:text-base leading-relaxed text-mutedgreen">
                  Your consultation request has been received. The clinic will contact you to
                  confirm the appointment.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <a
                    href={whatsappPrefill}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="booking-whatsapp-confirm-btn"
                    className="inline-flex items-center gap-2 rounded-full bg-leaf px-6 py-3 text-sm font-semibold text-cream hover:bg-forest transition-colors duration-300"
                  >
                    <MessageCircle className="h-4 w-4" /> Confirm faster on WhatsApp
                  </a>
                  <button
                    data-testid="booking-new-request-btn"
                    onClick={() => { setForm(EMPTY); setSubmitted(false); }}
                    className="rounded-full border border-sage-deep px-6 py-3 text-sm font-semibold text-forest hover:bg-sage transition-colors duration-300"
                  >
                    Make another request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} data-testid="booking-form" className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="book-name" className="block text-xs font-semibold uppercase tracking-wider text-forest mb-2">Full Name</label>
                  <input id="book-name" data-testid="booking-name-input" required value={form.full_name} onChange={set("full_name")} placeholder="Your full name" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="book-phone" className="block text-xs font-semibold uppercase tracking-wider text-forest mb-2">Phone Number</label>
                  <input id="book-phone" data-testid="booking-phone-input" required type="tel" value={form.phone} onChange={set("phone")} placeholder="+91 ..." className={inputCls} />
                </div>
                <div>
                  <label htmlFor="book-email" className="block text-xs font-semibold uppercase tracking-wider text-forest mb-2">Email</label>
                  <input id="book-email" data-testid="booking-email-input" required type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="book-type" className="block text-xs font-semibold uppercase tracking-wider text-forest mb-2">Consultation Type</label>
                  <select id="book-type" data-testid="booking-type-select" required value={form.consultation_type} onChange={set("consultation_type")} className={inputCls}>
                    <option value="" disabled>Select consultation type</option>
                    {CONSULTATION_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="book-date" className="block text-xs font-semibold uppercase tracking-wider text-forest mb-2">Preferred Date</label>
                  <input id="book-date" data-testid="booking-date-input" required type="date" value={form.preferred_date} onChange={set("preferred_date")} className={inputCls} />
                </div>
                <div>
                  <label htmlFor="book-time" className="block text-xs font-semibold uppercase tracking-wider text-forest mb-2">Preferred Time</label>
                  <input id="book-time" data-testid="booking-time-input" required type="time" value={form.preferred_time} onChange={set("preferred_time")} className={inputCls} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="book-message" className="block text-xs font-semibold uppercase tracking-wider text-forest mb-2">Message / Health Concern</label>
                  <textarea id="book-message" data-testid="booking-message-input" rows={4} value={form.message} onChange={set("message")} placeholder="Briefly describe your health concern (optional)" className={`${inputCls} resize-none`} />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    data-testid="booking-submit-btn"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-forest px-8 py-4 text-sm font-bold text-cream shadow-lift hover:bg-forest-deep disabled:opacity-60 transition-colors duration-300"
                  >
                    {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <CalendarCheck className="h-4 w-4" />}
                    {submitting ? "Sending request..." : "Request Appointment"}
                  </button>
                  <p className="mt-4 text-center text-xs text-mutedgreen">
                    Prefer to talk? Call{" "}
                    <a href={CLINIC.phoneHref} className="font-semibold text-forest underline underline-offset-2">
                      {CLINIC.phoneDisplay}
                    </a>{" "}
                    or message on WhatsApp.
                  </p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
