import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Software Engineering Partner for Agencies & Studios | Axio Future",
  description: "White-label software engineering, web application development, and infrastructure under NDA for creative agencies and product studios.",
};

export default function Page() {
  return (
    <SiteShell showCta={true}>
      <main id="main">
        <section className="phero"><div className="wrap">
 <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/industries">Industries</Link> / <span aria-current="page">Agencies & Studios</span></nav>
 <div className="hero-grid">
  <div><div className="eyebrow" data-anim>Technical Delivery Partner</div>
   <h1 className="kin-h">Engineering capacity for agencies & studios</h1></div>
  <div><p className="lead" data-anim data-delay="120">Reliable software execution, frontend engineering, and backend architectures delivered strictly under NDA to expand your studio's technical throughput.</p>
   <div className="hero-cta" data-anim data-delay="180">
    <Link className="btn btn-primary" href="/contact"><span>Discuss your project</span><span className="gt">&rsaquo;</span></Link>
    <Link className="btn" href="/projects"><span>Explore builds</span></Link>
   </div>
  </div>
 </div>
 <div className="phero-img"><div className="rv ar-21 "><img className="ph " src="/assets/img/ph-desk.webp" alt="Engineering studio collaboration" width="1600" height="1000" sizes="(max-width:900px) 100vw, 1320px" loading="eager" fetchPriority="high" decoding="async" style={{"backgroundImage":"url(../assets/img/ph-desk-tiny.webp)"}} /></div></div>
</div></section>
<section><div className="wrap">
 <div className="s-head"><div><div className="eyebrow" data-anim>Capabilities</div>
  <h2 className="kin-h" data-anim>How we support agency workflows</h2></div><div></div></div>
 <div className="grid g3"><Link className="glass card svc-card" href="/services/websites" data-anim data-delay="0">
     <div className="sc-top"><span className="dt-cat">High-Performance Web · From ₹7,999</span></div>
     <h3>Websites</h3><p>Production Next.js and static builds with 95+ Lighthouse performance scores, semantic markup, and responsive layouts.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/services/digital-products" data-anim data-delay="70">
     <div className="sc-top"><span className="dt-cat">Applications & Portals</span></div>
     <h3>Digital Products</h3><p>Pixel-perfect React and TypeScript implementations turning complex Figma designs into responsive, typed web apps.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/services/business-systems" data-anim data-delay="140">
     <div className="sc-top"><span className="dt-cat">Automated Workflows</span></div>
     <h3>Business Systems</h3><p>Webhook listeners, internal dashboards, CRM synchronizations, and operational automation for agency clients.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/services/platforms" data-anim data-delay="0">
     <div className="sc-top"><span className="dt-cat">Multi-Tenant Software</span></div>
     <h3>Platforms</h3><p>Multi-user web platforms, marketplace engines, and SaaS prototypes delivered on modern technical architectures.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/services/software-infrastructure" data-anim data-delay="70">
     <div className="sc-top"><span className="dt-cat">APIs & Cloud</span></div>
     <h3>Software Infrastructure</h3><p>Production API engineering, PostgreSQL database optimization, containerization, and reliable server deployments.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link></div>
</div></section>
<section id="faq"><div className="wrap narrow">
 <div className="center"><div className="eyebrow" data-anim>FAQ</div><h2 data-anim>Working with agencies & studios</h2></div>
 <div className="faq" style={{"marginTop":"1.8rem"}}><details className="glass" data-anim data-delay="0"><summary>Do you execute white-label engineering?</summary><p>Yes. We routinely work as the silent technical arm for agencies and design studios, delivering production code cleanly under your preferred workflow and repository standards.</p></details><details className="glass" data-anim data-delay="40"><summary>Do you sign non-disclosure agreements (NDAs)?</summary><p>Always. Mutual non-disclosure agreements are executed before any project specifications, designs, or credentials are shared.</p></details><details className="glass" data-anim data-delay="80"><summary>How do you handle scope and handoffs?</summary><p>We review your design files and functional requirements, agree on a concrete milestone plan, and deliver clean, documented code with thorough handover sessions.</p></details><details className="glass" data-anim data-delay="120"><summary>How is pricing structured?</summary><p>Standard website packages start with published transparent pricing (₹7,999 to ₹24,999), while custom applications and infrastructure are scoped based on architectural requirements.</p></details></div>
</div></section>
      </main>
    </SiteShell>
  );
}
