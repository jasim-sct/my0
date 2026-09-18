import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Professional Websites & Systems for Local Businesses & SMBs | Axio Future",
  description: "Affordable, high-performance business websites, local search discovery, and automated booking systems for small and medium businesses in India and beyond.",
};

export default function Page() {
  return (
    <SiteShell showCta={true}>
      <main id="main">
        <section className="phero"><div className="wrap">
 <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/industries">Industries</Link> / <span aria-current="page">Local Service Businesses</span></nav>
 <div className="hero-grid">
  <div><div className="eyebrow" data-anim>Local Enterprises & SMBs</div>
   <h1 className="kin-h">Professional digital presence for local businesses</h1></div>
  <div><p className="lead" data-anim data-delay="120">Search-optimized business websites, direct customer booking forms, and automated lead notifications engineered to establish authority in your local market.</p>
   <div className="hero-cta" data-anim data-delay="180">
    <Link className="btn btn-primary" href="/contact"><span>Discuss your project</span><span className="gt">&rsaquo;</span></Link>
    <Link className="btn" href="/services/websites"><span>Compare website packages</span></Link>
   </div>
  </div>
 </div>
 <div className="phero-img"><div className="rv ar-21 "><img className="ph " src="/assets/img/ph-meeting.webp" alt="Local business owner consulting with Axio Future" width="1600" height="1000" sizes="(max-width:900px) 100vw, 1320px" loading="eager" fetchPriority="high" decoding="async" style={{"backgroundImage":"url(../assets/img/ph-meeting-tiny.webp)"}} /></div></div>
</div></section>
<section><div className="wrap">
 <div className="s-head"><div><div className="eyebrow" data-anim>Capabilities</div>
  <h2 className="kin-h" data-anim>Everything your business needs online</h2></div><div></div></div>
 <div className="grid g3"><Link className="glass card svc-card" href="/services/websites" data-anim data-delay="0">
     <div className="sc-top"><span className="dt-cat">Business Websites · From ₹7,999</span></div>
     <h3>Websites</h3><p>Fast, mobile-responsive business websites with domain setup, SSL, 1 year hosting included, and clear transparent package tiers.</p>
     <span className="dt-cta">View packages <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/services/business-systems" data-anim data-delay="70">
     <div className="sc-top"><span className="dt-cat">Booking & Invoicing</span></div>
     <h3>Business Systems</h3><p>Custom online appointment booking, WhatsApp enquiry forwarding, invoice generation, and automated customer follow-ups.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/services/digital-products" data-anim data-delay="140">
     <div className="sc-top"><span className="dt-cat">Customer Portals</span></div>
     <h3>Digital Products</h3><p>Client self-service portals, membership dashboards, and appointment management web applications.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link></div>
</div></section>
<section id="faq"><div className="wrap narrow">
 <div className="center"><div className="eyebrow" data-anim>FAQ</div><h2 data-anim>Working with local businesses & SMBs</h2></div>
 <div className="faq" style={{"marginTop":"1.8rem"}}><details className="glass" data-anim data-delay="0"><summary>What does a complete business website cost?</summary><p>Our transparent website packages are ₹7,999 (Starter, 1–3 pages), ₹14,999 (Business, 5–7 pages with SEO), and ₹24,999 (Growth, full search optimization and analytics). All include domain setup, SSL, and first-year hosting.</p></details><details className="glass" data-anim data-delay="40"><summary>What happens to hosting and domain after the first year?</summary><p>First-year hosting is included with every package. Annual hosting renewal is transparently priced at ₹2,999 to ₹5,999/year depending on requirements, covering server costs, SSL maintenance, and security updates.</p></details><details className="glass" data-anim data-delay="80"><summary>Will my website show up on Google Maps and local search?</summary><p>Yes. Our Business and Growth packages implement structured LocalBusiness schema, Google Search Console registration, mobile performance tuning, and clean semantic heading tags.</p></details></div>
</div></section>
      </main>
    </SiteShell>
  );
}
