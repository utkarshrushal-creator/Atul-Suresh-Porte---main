export const LogoMark = ({ className = "h-10 w-10" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <rect width="64" height="64" rx="16" fill="#0f392b" />
    <path
      d="M32 10c9 5 15 13 15 23 0 11-7 18-15 20-8-2-15-9-15-20 0-10 6-18 15-23z"
      fill="none"
      stroke="#d4af37"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path d="M32 25v18M23 34h18" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" />
  </svg>
);
