"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initSiteEffects } from "@/lib/site-effects";

export function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    // Reset curtain on client navigations so loader can briefly show, then hide.
    const curtain = document.querySelector(".curtain");
    if (curtain) curtain.classList.remove("hide");
    const cleanup = initSiteEffects();
    return cleanup;
  }, [pathname]);

  return null;
}
