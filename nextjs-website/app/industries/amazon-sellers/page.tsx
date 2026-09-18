import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Software & Systems for Multichannel & Amazon Sellers | Axio Future",
  description: "Custom software, inventory synchronization, API integrations, and high-converting storefronts for multichannel e-commerce and Amazon sellers.",
};

export default function Page() {
  return (
    <SiteShell showCta={true}>
      <main id="main">
        <section className="phero"><div className="wrap">
 <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/industries">Industries</Link> / <span aria-current="page">Amazon Sellers</span></nav>
 <div className="hero-grid">
  <div><div className="eyebrow" data-anim>Multichannel Operations & Infrastructure</div>
   <h1 className="kin-h">Digital software for multichannel & amazon sellers</h1></div>
  <div><p className="lead" data-anim data-delay="120">Automated inventory sync, custom order management tools, and high-converting off-Amazon storefronts that diversify your revenue stream.</p>
   <div className="hero-cta" data-anim data-delay="180">
    <Link className="btn btn-primary" href="/contact"><span>Discuss your project</span><span className="gt">&rsaquo;</span></Link>
    <Link className="btn" href="/projects"><span>Explore builds</span></Link>
   </div>
  </div>
 </div>
 <div className="phero-img"><div className="rv ar-21 "><img className="ph " src="/assets/img/ph-warehouse.webp" alt="E-commerce fulfilment operations" width="1600" height="1000" sizes="(max-width:900px) 100vw, 1320px" loading="eager" fetchPriority="high" decoding="async" style={{"backgroundImage":"url(../assets/img/ph-warehouse-tiny.webp)"}} /></div></div>
</div></section>
<section><div className="wrap">
 <div className="s-head"><div><div className="eyebrow" data-anim>Capabilities</div>
  <h2 className="kin-h" data-anim>Systems engineered for commerce scale</h2></div><div></div></div>
 <div className="grid g3"><Link className="glass card svc-card" href="/services/websites" data-anim data-delay="0">
     <div className="sc-top"><span className="dt-cat">Direct-to-Consumer · From ₹7,999</span></div>
     <h3>Websites</h3><p>Fast, branded web storefronts that capture customers outside Amazon marketplace fees with optimized checkout flows.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/services/business-systems" data-anim data-delay="70">
     <div className="sc-top"><span className="dt-cat">Inventory & Logistics</span></div>
     <h3>Business Systems</h3><p>Custom inventory synchronization between Amazon SP-API, warehouses, Shopify, and accounting platforms.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/services/digital-products" data-anim data-delay="140">
     <div className="sc-top"><span className="dt-cat">Operations Dashboards</span></div>
     <h3>Digital Products</h3><p>Real-time analytics and operations dashboards tracking margins, return rates, and stock thresholds across channels.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/services/software-infrastructure" data-anim data-delay="0">
     <div className="sc-top"><span className="dt-cat">API Integrations</span></div>
     <h3>Software Infrastructure</h3><p>Robust webhook pipelines, event queues, and automated data synchronization between third-party logistics and marketplaces.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link></div>
</div></section>
<section id="faq"><div className="wrap narrow">
 <div className="center"><div className="eyebrow" data-anim>FAQ</div><h2 data-anim>Engineering for multichannel sellers</h2></div>
 <div className="faq" style={{"marginTop":"1.8rem"}}><details className="glass" data-anim data-delay="0"><summary>Can you integrate directly with Amazon SP-API?</summary><p>Yes. We build custom backend microservices and webhooks that interface directly with Amazon Selling Partner API (SP-API) for orders, reports, and inventory feeds.</p></details><details className="glass" data-anim data-delay="40"><summary>Why should an Amazon seller build a standalone website?</summary><p>A standalone branded website gives you customer ownership, email capture, higher margins, and insulation against marketplace policy shifts.</p></details><details className="glass" data-anim data-delay="80"><summary>How do you ensure data accuracy in inventory sync?</summary><p>We build idempotent sync services with transactional databases and audit logs to prevent double-selling and sync discrepancies.</p></details></div>
</div></section>
      </main>
    </SiteShell>
  );
}
