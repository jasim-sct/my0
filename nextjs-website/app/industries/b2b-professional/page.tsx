import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Software & Web Systems for B2B & Professional Services | Axio Future",
  description: "Authoritative corporate websites, client portals, and secure workflow automation for B2B consultancies, legal, finance, and professional service firms.",
};

export default function Page() {
  return (
    <SiteShell showCta={true}>
      <main id="main">
        <section className="phero"><div className="wrap">
 <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/industries">Industries</Link> / <span aria-current="page">B2B & Professional Services</span></nav>
 <div className="hero-grid">
  <div><div className="eyebrow" data-anim>Consultancies, Legal, Finance & Enterprise</div>
   <h1 className="kin-h">Digital systems for B2B & professional services</h1></div>
  <div><p className="lead" data-anim data-delay="120">High-credibility corporate websites, secure client intake portals, and automated business workflows that reduce administrative overhead across long sales cycles.</p>
   <div className="hero-cta" data-anim data-delay="180">
    <Link className="btn btn-primary" href="/contact"><span>Discuss your project</span><span className="gt">&rsaquo;</span></Link>
    <Link className="btn" href="/projects"><span>Explore builds</span></Link>
   </div>
  </div>
 </div>
 <div className="phero-img"><div className="rv ar-21 "><img className="ph " src="/assets/img/ph-handshake.webp" alt="Professional services engineering consultation" width="1600" height="1000" sizes="(max-width:900px) 100vw, 1320px" loading="eager" fetchPriority="high" decoding="async" style={{"backgroundImage":"url(../assets/img/ph-handshake-tiny.webp)"}} /></div></div>
</div></section>
<section><div className="wrap">
 <div className="s-head"><div><div className="eyebrow" data-anim>Capabilities</div>
  <h2 className="kin-h" data-anim>Solutions engineered for B2B credibility</h2></div><div></div></div>
 <div className="grid g3"><Link className="glass card svc-card" href="/services/websites" data-anim data-delay="0">
     <div className="sc-top"><span className="dt-cat">Corporate Web · From ₹7,999</span></div>
     <h3>Websites</h3><p>Fast, authoritative corporate web presences with search-optimized structure, technical metadata, and lead capture workflows.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/services/digital-products" data-anim data-delay="70">
     <div className="sc-top"><span className="dt-cat">Client Portals & Dashboards</span></div>
     <h3>Digital Products</h3><p>Secure client onboarding portals, document exchange systems, and role-based operational dashboards.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/services/business-systems" data-anim data-delay="140">
     <div className="sc-top"><span className="dt-cat">Workflow Automation</span></div>
     <h3>Business Systems</h3><p>Automated intake forms, CRM integrations, document generation, and email dispatch pipelines.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/services/platforms" data-anim data-delay="0">
     <div className="sc-top"><span className="dt-cat">Service Platforms</span></div>
     <h3>Platforms</h3><p>Custom multi-tier B2B collaboration software, subscription access platforms, and reporting engines.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/services/software-infrastructure" data-anim data-delay="70">
     <div className="sc-top"><span className="dt-cat">Security & Compliance</span></div>
     <h3>Software Infrastructure</h3><p>Encrypted data storage, strict access control, TLS encryption, and secure API architectures.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link></div>
</div></section>
<section id="faq"><div className="wrap narrow">
 <div className="center"><div className="eyebrow" data-anim>FAQ</div><h2 data-anim>Working with B2B & professional service firms</h2></div>
 <div className="faq" style={{"marginTop":"1.8rem"}}><details className="glass" data-anim data-delay="0"><summary>How do you ensure data confidentiality and security?</summary><p>We enforce strict role-based access control (RBAC), end-to-end transport layer security (TLS), encrypted database fields, and sign comprehensive NDAs before work begins.</p></details><details className="glass" data-anim data-delay="40"><summary>Can we integrate our existing CRM and calendar tools?</summary><p>Yes. We integrate directly with platforms like HubSpot, Salesforce, Zoho, Google Workspace, and Stripe to keep your pipelines synchronised.</p></details><details className="glass" data-anim data-delay="80"><summary>What is the pricing model?</summary><p>Standard website packages feature published fixed pricing (₹7,999 to ₹24,999). Custom client portals and automation systems are scoped transparently based on functional requirements.</p></details></div>
</div></section>
      </main>
    </SiteShell>
  );
}
