import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Software Engineering & Web Development for Australia | Axio Future",
  description: "Software engineering, digital products, modern websites, and software infrastructure for businesses in Australia businesses.",
};

export default function Page() {
  return (
    <SiteShell showCta={true}>
      <main id="main">
        <section className="phero"><div className="wrap">
 <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/locations">Locations</Link> / <span aria-current="page">Australia</span></nav>
 <div className="hero-grid">
  <div><div className="eyebrow" data-anim>AEST coverage</div>
   <h1 className="kin-h">Software engineering for Australian businesses in Sydney, Melbourne and Brisbane</h1></div>
  <div><p className="lead" data-anim data-delay="120">AEST-aligned shifts so your morning is our afternoon, Australian English, and AUD invoicing on request.</p>
   <div className="hero-cta" data-anim data-delay="180">
    <Link className="btn btn-primary" href="/contact"><span>Discuss your project</span><span className="gt">&rsaquo;</span></Link>
    <Link className="btn" href="/services"><span>Explore capabilities</span></Link>
   </div>
  </div>
 </div>
 <div className="phero-img"><div className="rv ar-21 "><img className="ph " src="/assets/img/ph-city.webp" alt="Global markets served around the clock" width="1600" height="1000" sizes="(max-width:900px) 100vw, 1320px" loading="eager" fetchPriority="high" decoding="async" style={{"backgroundImage":"url(../assets/img/ph-city-tiny.webp)"}} /></div></div>
</div></section>

<section style={{"paddingTop":"0"}}><div className="wrap">
 <div className="hero-stats" style={{"marginTop":"0"}}>
  <div className="stat" data-anim><b>AEST</b><small>Working hours</small></div>
  <div className="stat" data-anim data-delay="70"><b>5</b><small>Core capabilities</small></div>
  <div className="stat" data-anim data-delay="140"><b>24h</b><small>Quote turnaround</small></div>
  <div className="stat" data-anim data-delay="210"><b>0</b><small>Time zone surcharge</small></div>
 </div>
</div></section>

<section><div className="wrap">
 <div className="s-head"><div><div className="eyebrow" data-anim>Services</div>
  <h2 className="kin-h" data-anim>What Australian clients hire us for</h2></div>
  <div><Link className="arrow-link" href="/services" data-anim>Explore capabilities <span className="gt">&rsaquo;</span></Link></div></div>
  <div className="grid g3"><Link className="glass card svc-card" href="/services/websites" data-anim data-delay="0">
     <div className="sc-top"><span className="dt-cat">High-Performance Web · From ₹7,999</span></div>
     <h3>Websites</h3><p>Production Next.js and static web architectures with 95+ Lighthouse performance scores, semantic markup, and responsive layouts.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/services/digital-products" data-anim data-delay="70">
     <div className="sc-top"><span className="dt-cat">Applications & Portals</span></div>
     <h3>Digital Products</h3><p>Scalable web applications, customer portals, and internal tools built with TypeScript, React, and Next.js.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/services/business-systems" data-anim data-delay="140">
     <div className="sc-top"><span className="dt-cat">Automated Workflows</span></div>
     <h3>Business Systems</h3><p>Custom workflow automation, webhook listeners, ERP integrations, and operational backend systems.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/services/platforms" data-anim data-delay="0">
     <div className="sc-top"><span className="dt-cat">Multi-Tenant Software</span></div>
     <h3>Platforms</h3><p>Multi-tenant SaaS architectures, marketplace engines, and secure subscription software systems.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link><Link className="glass card svc-card" href="/services/software-infrastructure" data-anim data-delay="70">
     <div className="sc-top"><span className="dt-cat">APIs & Cloud</span></div>
     <h3>Software Infrastructure</h3><p>High-concurrency RESTful APIs, PostgreSQL/MongoDB schemas, containerization, and cloud deployment pipelines.</p>
     <span className="dt-cta">View capability <span className="gt">&rsaquo;</span></span></Link></div>
</div></section>

<section id="faq"><div className="wrap narrow">
 <div className="center"><div className="eyebrow" data-anim>FAQ</div><h2 data-anim>Working with us from Australia</h2></div>
 <div className="faq" style={{"marginTop":"1.8rem"}}><details className="glass" data-anim data-delay="0"><summary>Do you work with Australian businesses?</summary><p>Yes — Australia is one of our eight core markets. AEST-aligned shifts so your morning is our afternoon, Australian English, and AUD invoicing on request.</p></details><details className="glass" data-anim data-delay="40"><summary>What time zone do you work in for Australia clients?</summary><p>We build shifts around AEST, so your morning is covered. That is written into the contract rather than promised on a call.</p></details><details className="glass" data-anim data-delay="80"><summary>Can you invoice in local currency?</summary><p>Yes. We invoice in USD by default and in GBP, EUR, CAD, AUD or AED on request. Payment by bank transfer, Wise, Payoneer or card.</p></details><details className="glass" data-anim data-delay="120"><summary>Do you understand Australian market specifics?</summary><p>We write in the correct English variant including date formats and spelling, and we have run campaigns, stores and Amazon accounts for Australian brands. Where local knowledge matters — tax, compliance, platform availability — we say what we know and what we do not.</p></details><details className="glass" data-anim data-delay="160"><summary>Is there a time zone surcharge?</summary><p>No. The rate is the rate regardless of which of our eight markets you are in.</p></details></div>
</div></section>
      </main>
    </SiteShell>
  );
}
