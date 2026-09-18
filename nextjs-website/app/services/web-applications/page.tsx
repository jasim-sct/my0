import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Axio Future",
  description: "",
};

export default function Page() {
  return (
    <SiteShell showCta={false}>
      <main id="main">
        
  <div className="s-head">
    <div>
      <div className="eyebrow">Engineering</div>
      <h1 className="kin-h">Web Applications</h1>
    </div>
    <div>
      <p className="lead">
        We build robust and scalable Axio Future solutions for modern businesses.
      </p>
    </div>
  </div>

      </main>
    </SiteShell>
  );
}
