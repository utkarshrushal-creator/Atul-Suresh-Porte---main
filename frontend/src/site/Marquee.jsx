const ITEMS = [
  "Ayurveda",
  "Homeopathy",
  "Naturopathy",
  "Hypnotherapy",
  "Sexual Health",
  "Chronic Care",
  "Child Development",
  "Pharmacy",
];

export const Marquee = () => (
  <div data-testid="services-marquee" className="bg-forest py-5 overflow-hidden" aria-hidden="true">
    <div className="marquee-track flex w-max items-center gap-10 pr-10">
      {[...ITEMS, ...ITEMS].map((item, i) => (
        <span key={i} className="flex items-center gap-10 whitespace-nowrap">
          <span className="font-accent italic text-xl sm:text-2xl text-cream/90">{item}</span>
          <span className="text-gold text-sm">&#10022;</span>
        </span>
      ))}
    </div>
  </div>
);
