import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Privacy Policy | Axio Future",
  description: "How we collect, use, store, retain and protect your personal information, plus how to request access, correction or deletion of your data.",
};

export default function Page() {
  return (
    <SiteShell showCta={true}>
      <main id="main">
        <section className="phero"><div className="wrap">
 <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <span aria-current="page">Privacy Policy</span></nav>
 <h1 className="kin-h">Privacy Policy</h1></div></section>
<section style={{"paddingTop":"1rem"}}><div className="wrap narrow">
  <div className="prose" data-anim><h3>What we collect</h3><p>The name, email, company, country and project details you submit through our forms, plus anonymous analytics such as pages visited and approximate location.</p><h3>How we use it</h3><p>Only to respond to your enquiry, prepare proposals and deliver contracted services. We never sell, rent or share your data with third parties for marketing.</p><h3>Cookies</h3><p>We use privacy-respecting analytics and a consent banner where required. You can disable cookies in your browser without losing site functionality.</p><h3>Data security</h3><p>Client credentials are stored in encrypted password managers with two-factor authentication. Access is granted per-tool rather than blanket, and NDAs are signed before any access.</p><h3>Your rights</h3><p>Request access to, correction of, or deletion of your personal data at any time by emailing hello@axiofuture.com. We respond within 30 days.</p><h3>Retention</h3><p>Enquiry data is kept for 24 months. Client project data is kept for the duration of the engagement plus seven years for tax purposes, then deleted.</p><h3>Updates</h3><p>This policy may be updated. Material changes will be noted at the top of this page with a revision date.</p></div></div></section>
      </main>
    </SiteShell>
  );
}
