import type { Metadata } from "next";
import { SiteShell } from "@/components/site/SiteShell";
import { HomeMain } from "@/components/home/HomeMain";

export const metadata: Metadata = {
  title: "Axio Future | Technology for What Comes Next — Websites, Products & Systems",
  description:
    "Axio Future builds high-performance websites, digital products, business systems, platforms, and software infrastructure for modern businesses and organizations.",
  alternates: {
    canonical: "https://www.axiofuture.com/",
  },
};

export default function Home() {
  return (
    <SiteShell>
      <HomeMain />
    </SiteShell>
  );
}

