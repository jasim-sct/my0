"use client";

import { AxioIcon } from "@/components/icons";

export function TopButton() {
  return (
    <div
      className="top top-btn"
      role="button"
      tabIndex={0}
      aria-label="Back to top"
      onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <AxioIcon name="arrow-up" size={18} strokeWidth={2} aria-hidden="true" />
    </div>
  );
}
