import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "E-Commerce Engineering & Web Development | Axio Future",
  description: "High-converting custom storefronts, checkout optimization, inventory synchronization, and custom commerce systems for online brands.",
};

export default function Page() {
  return (
    <SiteShell showCta={true}>
      <main id="main">
        <section className="phero"><div className="wrap">
 <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/industries">Industries</Link> / <span aria-current="page">E-Commerce Brands</span></nav>
 <div className="hero-grid">
  <div><div className="eyebrow" data-anim>Online Retailers & Modern Brands</div>
   <h1 className="kin-h">Engineering for digital commerce brands</h1></div>
  <div><p className="lead" data-anim data-delay="120">Fast storefronts, checkout flow engineering, ERP integrations, and custom inventory architectures that turn visitors into repeat customers.</p>
   <div className="hero-cta" data-anim data-delay="180">
    <Link className="btn btn-primary" href="/contact"><span>Discuss your project</span><span className="gt">&rsaquo;</span></Link>
    <Link className="btn" href="/projects"><span>Explore builds</span></Link>
   </div>
  </div>
 </div>
 <div className="phero-img"><div className="rv ar-21 "><img className="ph " src="/assets/img/ph-retail.webp" alt="E-commerce digital merchandising" width="1600" height="1000" sizes="(max-width:900px) 100vw, 1320px" loading="eager" fetchPriority="high" decoding="async" style={{"backgroundImage":"url(../assets/img/ph-retail-tiny.webp)"}} /></div></div>
</div></section>
<section><div className="wrap">
 <div className="s-head"><div><div className="eyebrow" data-anim>Capabilities</div>
  <h2 className="kin-h" data-anim>Systems built for commerce performance</h2></div><div></div></div>
 <div className="grid g3"><Link className="glass card svc-card" href="/services/websites" data-anim data-delay="0">
     <div className="sc-top"><span className="dt-cat">Storefronts · From ₹7,999</span></div>
     <h3>Websites</h3><p>Custom, lightning-fast e-commerce websites and Shopify/WooCommerce setups with sub-second page loads and mobile-first checkouts.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/services/business-systems" data-anim data-delay="70">
     <div className="sc-top"><span className="dt-cat">Inventory & Logistics</span></div>
     <h3>Business Systems</h3><p>Automated inventory sync, order dispatch webhooks, returns processing pipelines, and multi-warehouse integrations.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/services/digital-products" data-anim data-delay="140">
     <div className="sc-top"><span className="dt-cat">Custom Web Apps</span></div>
     <h3>Digital Products</h3><p>Interactive product customizers, customer account portals, subscription management engines, and loyalty dashboards.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/services/platforms" data-anim data-delay="0">
     <div className="sc-top"><span className="dt-cat">Marketplaces</span></div>
     <h3>Platforms</h3><p>Multi-vendor marketplaces, B2B wholesale portals, and automated supplier payout systems.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/services/software-infrastructure" data-anim data-delay="70">
     <div className="sc-top"><span className="dt-cat">High-Concurrency Infrastructure</span></div>
     <h3>Software Infrastructure</h3><p>Flash sale architecture, CDN caching, payment gateway integrations, and reliable database scaling.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link></div>
</div></section>
<section id="faq"><div className="wrap narrow">
 <div className="center"><div className="eyebrow" data-anim>FAQ</div><h2 data-anim>Working with e-commerce brands</h2></div>
 <div className="faq" style={{"marginTop":"1.8rem"}}><details className="glass" data-anim data-delay="0"><summary>What e-commerce platforms do you build with?</summary><p>We build on Shopify, WooCommerce, and headless commerce stacks using Next.js, Node.js, and Stripe/Razorpay depending on your business requirements.</p></details><details className="glass" data-anim data-delay="40"><summary>How do you approach mobile conversion?</summary><p>We engineer frictionless mobile checkouts with accelerated payment methods (UPI, Apple Pay, Google Pay), clean form inputs, and minimal friction.</p></details><details className="glass" data-anim data-delay="80"><summary>How is pricing structured?</summary><p>Our website packages feature clear, transparent pricing (Starter ₹7,999, Business ₹14,999, Growth ₹24,999) with first-year hosting included. Custom systems are scoped by requirements.</p></details></div>
</div></section>
      </main>
    </SiteShell>
  );
}
