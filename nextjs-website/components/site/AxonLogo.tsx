import Link from "next/link";

type Props = {
  className?: string;
};

/** Reusable Axon Future logo — SVG symbol + wordmark */
export function AxonLogo({ className }: Props) {
  return (
    <Link className={`logo axon-logo ${className ?? ""}`} href="/">
      <svg
        className="axon-mark"
        viewBox="0 0 32 32"
        width="28"
        height="28"
        aria-hidden="true"
        fill="none"
      >
        <defs>
          <linearGradient id="am" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2563eb" />
            <stop offset="1" stopColor="#6366f1" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="7" fill="#0a0f1e" />
        {/* A-form strokes */}
        <path
          d="M7 24 L16 7 L25 24"
          stroke="url(#am)"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="11"
          y1="18"
          x2="21"
          y2="18"
          stroke="url(#am)"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        {/* Node dots */}
        <circle cx="16" cy="7" r="1.8" fill="#6366f1" />
        <circle cx="7" cy="24" r="1.5" fill="#2563eb" />
        <circle cx="25" cy="24" r="1.5" fill="#2563eb" />
      </svg>
      <span className="axon-wordmark">Axon Future</span>
    </Link>
  );
}
