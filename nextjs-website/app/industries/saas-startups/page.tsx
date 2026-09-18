import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Product Engineering & Platform Architecture for SaaS & Startups | Axio Future",
  description: "Full-stack software engineering, Next.js web applications, multi-tenant SaaS platforms, and cloud infrastructure for funded startups and software founders.",
};

export default function Page() {
  return (
    <SiteShell showCta={true}>
      <main id="main">
        <section className="phero"><div className="wrap">
 <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/industries">Industries</Link> / <span aria-current="page">SaaS & Startups</span></nav>
 <div className="hero-grid">
  <div><div className="eyebrow" data-anim>Product Engineering & Architecture</div>
   <h1 className="kin-h">Software engineering for SaaS & startups</h1></div>
  <div><p className="lead" data-anim data-delay="120">From production MVPs to scalable multi-tenant architectures, we build typed, documented, and maintainable software systems that scale with your user base.</p>
   <div className="hero-cta" data-anim data-delay="180">
    <Link className="btn btn-primary" href="/contact"><span>Discuss your project</span><span className="gt">&rsaquo;</span></Link>
    <Link className="btn" href="/projects"><span>Explore builds</span></Link>
   </div>
  </div>
 </div>
 <div className="phero-img"><div className="rv ar-21 "><img className="ph " src="/assets/img/ph-code.webp" alt="Production software engineering" width="1600" height="1000" sizes="(max-width:900px) 100vw, 1320px" loading="eager" fetchPriority="high" decoding="async" style={{"backgroundImage":"url(../assets/img/ph-code-tiny.webp)"}} /></div></div>
</div></section>
<section><div className="wrap">
 <div className="s-head"><div><div className="eyebrow" data-anim>Capabilities</div>
  <h2 className="kin-h" data-anim>Engineering from idea to production scale</h2></div><div></div></div>
 <div className="grid g3"><Link className="glass card svc-card" href="/services/platforms" data-anim data-delay="0">
     <div className="sc-top"><span className="dt-cat">Multi-Tenant Architecture</span></div>
     <h3>Platforms</h3><p>End-to-end multi-tenant SaaS architectures, subscription billing via Stripe/Razorpay, organization workspaces, and RBAC security models.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/services/digital-products" data-anim data-delay="70">
     <div className="sc-top"><span className="dt-cat">Web Applications & MVPs</span></div>
     <h3>Digital Products</h3><p>Fast, typed React and Next.js interfaces, complex state management, data visualization dashboards, and interactive user onboarding.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/services/software-infrastructure" data-anim data-delay="140">
     <div className="sc-top"><span className="dt-cat">APIs & Backend Systems</span></div>
     <h3>Software Infrastructure</h3><p>High-performance REST APIs in Node.js/NestJS, PostgreSQL schemas, Redis caching, job queues, and automated CI/CD deployments.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/services/websites" data-anim data-delay="0">
     <div className="sc-top"><span className="dt-cat">Marketing & Product Websites · From ₹7,999</span></div>
     <h3>Websites</h3><p>High-converting product marketing sites that explain complex technical software clearly with optimal SEO discoverability.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/services/business-systems" data-anim data-delay="70">
     <div className="sc-top"><span className="dt-cat">Operational Pipelines</span></div>
     <h3>Business Systems</h3><p>Internal admin consoles, audit log viewers, customer support tools, and webhook ingestion systems.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link></div>
</div></section>
<section id="faq"><div className="wrap narrow">
 <div className="center"><div className="eyebrow" data-anim>FAQ</div><h2 data-anim>Engineering for software startups</h2></div>
 <div className="faq" style={{"marginTop":"1.8rem"}}><details className="glass" data-anim data-delay="0"><summary>Do we retain 100% intellectual property (IP) of code written?</summary><p>Yes. All source code, repository commits, architecture diagrams, and database schemas belong entirely to your company from day one.</p></details><details className="glass" data-anim data-delay="40"><summary>What technology stack do you specialize in?</summary><p>Our core production stack includes TypeScript, Next.js, React, Node.js, Express/NestJS, PostgreSQL, MongoDB, Redis, Docker, and Nginx on modern cloud infrastructure.</p></details><details className="glass" data-anim data-delay="80"><summary>How do you approach MVP development timelines?</summary><p>We focus on tight, well-defined vertical slices that deliver functional business value in 4 to 8 weeks rather than bloated year-long roadmaps.</p></details></div>
</div></section>
      </main>
    </SiteShell>
  );
}
