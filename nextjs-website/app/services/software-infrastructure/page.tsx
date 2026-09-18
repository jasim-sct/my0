import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Software Infrastructure & Backend Engineering | Axio Future",
  description: "Robust software infrastructure, typed REST APIs, PostgreSQL database architecture, and secure cloud deployment pipelines engineered by Axio Future.",
};

export default function Page() {
  return (
    <SiteShell showCta={true}>
      <main id="main">
        
<section className="phero">
  <div className="wrap">
    <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/services">Capabilities</Link> / <span aria-current="page">Software Infrastructure</span></nav>
    <div className="hero-grid">
      <div>
        <div className="eyebrow" data-anim>Capabilities</div>
        <h1 className="kin-h">Backend systems, APIs, and cloud infrastructure.</h1>
      </div>
      <div>
        <p className="lead" data-anim data-delay="120">
          We engineer resilient backend architectures, typed REST APIs, normalized databases, and automated deployment pipelines that keep modern applications fast, secure, and available.
        </p>
        <div className="hero-cta" data-anim data-delay="180">
          <Link className="btn btn-primary" href="/contact">
            <span>Discuss infrastructure requirements</span>
            <span className="gt">&rsaquo;</span>
          </Link>
          <Link className="btn" href="/projects/proto">
            <span>Explore PROTO Dossier</span>
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
        <div className="eyebrow">Stability &amp; Scale</div>
        <h2 className="kin-h">The foundations that prevent applications from falling over</h2>
        <p className="lead">
          Visual design and frontend features matter little if the backend suffers from slow database queries, fragile API endpoints, missing rate limits, or manual, error-prone deployment routines.
        </p>
        <p className="lead">
          Infrastructure engineering ensures your data remains consistent, your APIs respond in milliseconds, and your servers withstand traffic spikes with proper security headers and zero-downtime deployments.
        </p>
      </div>
      <div data-anim="right">
        <div className="rv zoom ar-43">
          <img className="ph" src="/assets/img/ph-whiteboard.webp" alt="Mapping cloud infrastructure and database topologies" width={1600} height={1000} loading="lazy" decoding="async" />
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
        <h2 className="kin-h" data-anim>Core backend engineering and server infrastructure</h2>
      </div>
      <div>
        <p className="lead" data-anim>
          Designed for predictability, observability, and strict security compliance from day one.
        </p>
      </div>
    </div>
    <div className="grid g3">
      <article className="glass card" data-anim data-delay="0">
        <span className="idx">01</span>
        <h3>Typed REST APIs &amp; Microservices</h3>
        <p>Type-safe request validation, input sanitization, rate-limiting, clear status codes, and comprehensive endpoint documentation.</p>
      </article>
      <article className="glass card" data-anim data-delay="60">
        <span className="idx">02</span>
        <h3>Database Architecture &amp; Migrations</h3>
        <p>Normalized relational schemas in PostgreSQL, indexed queries, connection pooling, and automated version-controlled migrations.</p>
      </article>
      <article className="glass card" data-anim data-delay="120">
        <span className="idx">03</span>
        <h3>Security Hardening &amp; CI/CD</h3>
        <p>Nginx reverse proxy setup, SSL certificate lifecycle management, OWASP-aligned CSP headers, and automated continuous deployment.</p>
      </article>
    </div>
  </div>
</section>

{/* 5. Technologies & 6. Real Work */}
<section className="band-dark">
  <div className="wrap">
    <div className="grid g2" style={{"background":"none","gap":"clamp(24px,4vw,56px)","alignItems":"center"}}>
      <div>
        <div className="eyebrow" data-anim>Tech Stack &amp; Dossier</div>
        <h2 className="kin-h" data-anim>Evidence-based infrastructure decisions</h2>
        <p className="lead" data-anim>
          We rely on proven, production-grade tools: TypeScript, Node.js, NestJS, Express, PostgreSQL, MongoDB, Docker, Nginx, and cloud providers including AWS and Vercel.
        </p>
        <p className="lead" data-anim>
          Explore our technical dossier demonstrating security audit scoring and platform architecture evaluation:
        </p>
        <div className="mk-row" data-anim>
          <Link href="/projects/proto" className="mk-chip">PROTO Technical Dossier &amp; Security Scorer →</Link>
        </div>
      </div>
      <div className="rv ar-43" data-anim>
        <img className="ph" src="/assets/img/ph-desk.webp" alt="Infrastructure engineering console" width={1600} height={1000}  />
      </div>
    </div>
  </div>
</section>

{/* 7. Pricing & Consultation */}
<section className="band">
  <div className="wrap narrow">
    <div className="s-head">
      <div>
        <div className="eyebrow" data-anim>Investment</div>
        <h2 className="kin-h" data-anim>Custom solutions — Let's discuss your requirements</h2>
      </div>
      <div>
        <p className="lead" data-anim>
          Infrastructure projects are scoped around your data volumes, availability SLA requirements, compliance needs, and existing legacy codebases.
        </p>
      </div>
    </div>
    <div className="glass card" style={{"padding":"2rem"}} data-anim>
      <h3 style={{"marginBottom":"0.5rem"}}>Infrastructure Review</h3>
      <p style={{"color":"var(--txt-dim)","marginBottom":"1rem"}}>
        Contact our team for an initial architectural review of your API contracts, database bottlenecks, or cloud deployment strategy.
      </p>
      <Link className="btn btn-primary" href="/contact"><span>Discuss infrastructure requirements</span><span className="gt">&rsaquo;</span></Link>
    </div>
  </div>
</section>

      </main>
    </SiteShell>
  );
}
