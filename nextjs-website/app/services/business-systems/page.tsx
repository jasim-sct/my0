import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Business Systems & Workflow Automation | Axio Future",
  description: "Custom business systems, internal dashboards, and operational automation software engineered to connect workflows and eliminate manual administrative drag.",
};

export default function Page() {
  return (
    <SiteShell showCta={true}>
      <main id="main">
        
<section className="phero">
  <div className="wrap">
    <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/services">Capabilities</Link> / <span aria-current="page">Business Systems</span></nav>
    <div className="hero-grid">
      <div>
        <div className="eyebrow" data-anim>Capabilities</div>
        <h1 className="kin-h">Custom software connecting your operations, data, and teams.</h1>
      </div>
      <div>
        <p className="lead" data-anim data-delay="120">
          We engineer internal management tools, operational dashboards, and automated pipelines that eliminate spreadsheet sprawl and manual administrative friction.
        </p>
        <div className="hero-cta" data-anim data-delay="180">
          <Link className="btn btn-primary" href="/contact">
            <span>Discuss your business system</span>
            <span className="gt">&rsaquo;</span>
          </Link>
          <Link className="btn" href="/projects/relay">
            <span>Explore RELAY Platform</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

{/* 1. What is it? & 2. What problem does it solve? */}
<section className="band">
  <div className="wrap">
    <div className="grid g2" style={{"background":"none","gap":"clamp(24px,4vw,56px)","alignItems":"center"}}>
      <div data-anim="left">
        <div className="eyebrow">Operational Friction</div>
        <h2 className="kin-h">The hidden cost of disconnected spreadsheets and manual data entry</h2>
        <p className="lead">
          As businesses grow, critical operations frequently end up scattered across twenty different spreadsheets, email threads, and disparate SaaS tools. Team members waste hours re-entering data, and leadership lacks real-time operational visibility.
        </p>
        <p className="lead">
          A custom business system provides a single source of truth: structured database records, automated status transitions, role-based access, and instant reporting.
        </p>
      </div>
      <div data-anim="right">
        <div className="rv zoom ar-43">
          <img className="ph" src="/assets/img/ph-whiteboard.webp" alt="Mapping business operations and database models" width={1600} height={1000} loading="lazy" decoding="async" />
        </div>
      </div>
    </div>
  </div>
</section>

{/* 3. What does Axio Future build? & 4. How is it approached? */}
<section>
  <div className="wrap">
    <div className="s-head">
      <div>
        <div className="eyebrow" data-anim>What We Build</div>
        <h2 className="kin-h" data-anim>Reliable internal software and automation</h2>
      </div>
      <div>
        <p className="lead" data-anim>
          Engineered to match your company's exact operational logic rather than forcing you into rigid off-the-shelf software models.
        </p>
      </div>
    </div>
    <div className="grid g3">
      <article className="glass card" data-anim data-delay="0">
        <span className="idx">01</span>
        <h3>Operational Dashboards</h3>
        <p>Real-time analytics, inventory monitoring, revenue metrics, and custom data tables with multi-field search, filtering, and CSV export.</p>
      </article>
      <article className="glass card" data-anim data-delay="60">
        <span className="idx">02</span>
        <h3>Task &amp; Pipeline Trackers</h3>
        <p>Interactive Kanban boards, stage-based workflow pipelines, assignment logic, and audit trails that ensure team accountability.</p>
      </article>
      <article className="glass card" data-anim data-delay="120">
        <span className="idx">03</span>
        <h3>Data Ingestion &amp; Automation</h3>
        <p>Automated scrapers, data enrichment workers, API webhooks, and background queues that process operational data reliably.</p>
      </article>
    </div>
  </div>
</section>

{/* 5. Technologies & 6. Real Work */}
<section className="band-dark">
  <div className="wrap">
    <div className="grid g2" style={{"background":"none","gap":"clamp(24px,4vw,56px)","alignItems":"center"}}>
      <div>
        <div className="eyebrow" data-anim>Real Demonstrations</div>
        <h2 className="kin-h" data-anim>Systems built for actual operations</h2>
        <p className="lead" data-anim>
          We build with Node.js, Express, PostgreSQL, TypeScript, and React. Test our operational demonstrations live in your browser:
        </p>
        <div className="mk-row" data-anim>
          <Link href="/projects/relay" className="mk-chip">RELAY Platform (Kanban &amp; Scraper) →</Link>
          <Link href="/projects/dashboard" className="mk-chip">Northwind Analytics (Data Table &amp; CRUD) →</Link>
        </div>
      </div>
      <div className="rv ar-43" data-anim>
        <img className="ph" src="/assets/img/ph-desk.webp" alt="Engineering internal business tools" width={1600} height={1000}  />
      </div>
    </div>
  </div>
</section>

{/* 7. Pricing & Next Steps */}
<section className="band">
  <div className="wrap narrow">
    <div className="s-head">
      <div>
        <div className="eyebrow" data-anim>Commercial Approach</div>
        <h2 className="kin-h" data-anim>Custom solutions — Let's discuss your requirements</h2>
      </div>
      <div>
        <p className="lead" data-anim>
          Business systems are priced strictly according to the scope of your operations: number of modules, database complexity, user permissions, and integrations.
        </p>
      </div>
    </div>
    <div className="glass card" style={{"padding":"2rem"}} data-anim>
      <h3 style={{"marginBottom":"0.5rem"}}>How to get started</h3>
      <p style={{"color":"var(--txt-dim)","marginBottom":"1rem"}}>
        We begin with a direct engineering consultation to analyze your workflow, identify bottlenecks, and define the necessary architecture and milestone timelines.
      </p>
      <Link className="btn btn-primary" href="/contact"><span>Discuss your requirements</span><span className="gt">&rsaquo;</span></Link>
    </div>
  </div>
</section>

      </main>
    </SiteShell>
  );
}
