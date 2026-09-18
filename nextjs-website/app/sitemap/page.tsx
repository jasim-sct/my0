import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Sitemap | Axio Future",
  description: "Complete sitemap of Axio Future — capabilities, pricing, selected work, technical guides, and company documentation.",
};

export default function Page() {
  return (
    <SiteShell showCta={true}>
      <main id="main">
        <section className="phero"><div className="wrap">
 <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <span aria-current="page">Sitemap</span></nav>
 <div className="eyebrow" data-anim>Index</div>
 <h1 className="kin-h">Sitemap</h1>
 <p className="lead" data-anim>Every page on the Axio Future website, organized by section.</p>
</div></section>

<section style={{"paddingTop":"1rem"}}><div className="wrap"><div className="sm-grid">

 <div className="sm-col">
  <h4>Core Company</h4>
  <ul>
   <li><Link href="/">Home</Link></li>
   <li><Link href="/about">About Axio Future</Link></li>
   <li><Link href="/services">Capabilities Overview</Link></li>
   <li><Link href="/pricing">Transparent Pricing</Link></li>
   <li><Link href="/projects">Selected Work</Link></li>
   <li><Link href="/contact">Contact &amp; Consultation</Link></li>
   <li><Link href="/blog">Engineering Notes (Blog)</Link></li>
  </ul>
 </div>

 <div className="sm-col">
  <h4>Capabilities</h4>
  <ul>
   <li><Link href="/services/websites">Websites (₹7,999 / ₹14,999 / ₹24,999)</Link></li>
   <li><Link href="/services/digital-products">Digital Products</Link></li>
   <li><Link href="/services/business-systems">Business Systems</Link></li>
   <li><Link href="/services/platforms">Platforms</Link></li>
   <li><Link href="/services/software-infrastructure">Software Infrastructure</Link></li>
  </ul>
 </div>

 <div className="sm-col">
  <h4>Selected Work (Live Builds)</h4>
  <ul>
   <li><Link href="/projects/shop">Lumen Commerce</Link></li>
   <li><Link href="/projects/flux">FLUX AI Studio</Link></li>
   <li><Link href="/projects/relay">RELAY Platform</Link></li>
   <li><Link href="/projects/dashboard">Northwind Analytics</Link></li>
   <li><Link href="/projects/terra">Terra &amp; Co</Link></li>
   <li><Link href="/projects/volt">VOLT Invoicing</Link></li>
   <li><Link href="/projects/proto">PROTO Technical Dossier</Link></li>
   <li><Link href="/projects/signal">SIGNAL Platform</Link></li>
   <li><Link href="/projects/kinetik">KINETIK Studio</Link></li>
   <li><Link href="/projects/lede">LEDE &amp; CO</Link></li>
  </ul>
 </div>

 <div className="sm-col">
  <h4>Technical Guides</h4>
  <ul>
   <li><Link href="/blog/how-much-does-a-website-cost">The Real Cost of Website Development</Link></li>
   <li><Link href="/blog/core-web-vitals-fix-guide">Core Web Vitals Fix Guide</Link></li>
   <li><Link href="/blog/website-security-checklist-small-business">Small Business Website Security Checklist</Link></li>
   <li><Link href="/blog/ai-automation-what-actually-works">AI Automation: What Actually Works</Link></li>
   <li><Link href="/blog/shopify-vs-woocommerce-2026">Shopify vs WooCommerce in 2026</Link></li>
   <li><Link href="/blog/why-your-content-is-invisible-to-google">Why Content Stays Invisible Without Structure</Link></li>
   <li><Link href="/blog/local-seo-checklist">Local SEO Checklist for Service Businesses</Link></li>
   <li><Link href="/blog/how-to-brief-a-design-agency">How to Brief an Engineering Team</Link></li>
   <li><Link href="/blog/outsourcing-vs-hiring-cost-comparison">In-House vs Dedicated Engineering Partner</Link></li>
   <li><Link href="/blog/seo-vs-paid-ads-which-first">SEO vs Paid Ads Acquisition Strategy</Link></li>
  </ul>
 </div>

 <div className="sm-col">
  <h4>Legal &amp; Policy</h4>
  <ul>
   <li><Link href="/privacy-policy">Privacy Policy</Link></li>
   <li><Link href="/terms">Terms of Service</Link></li>
  </ul>
 </div>

</div></div></section>
      </main>
    </SiteShell>
  );
}
