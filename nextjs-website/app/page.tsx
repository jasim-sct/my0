import type { Metadata } from "next";
import { SiteShell } from "@/components/site/SiteShell";
import { HomeMain } from "@/components/home/HomeMain";

export const metadata: Metadata = {
  title: "Axon Future | Technology for What Comes Next — Websites, Products & Systems",
  description:
    "Axon Future builds high-performance websites, digital products, business systems, platforms, and software infrastructure for modern businesses and organizations.",
  alternates: {
    canonical: "https://www.axonfuture.com/",
  },
};

export default function Home() {
  return (
    <SiteShell>
      <HomeMain />
    </SiteShell>
  );
}

