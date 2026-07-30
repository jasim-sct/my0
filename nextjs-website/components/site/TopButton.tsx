"use client";

export function TopButton() {
  return (
    <div
      className="top"
      role="button"
      tabIndex={0}
      aria-label="Back to top"
      onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </div>
  );
}
