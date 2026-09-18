import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Digital Products & Web Applications | Axio Future",
  description: "Custom digital products, customer portals, and interactive web tools engineered with React, Next.js, and TypeScript.",
};

export default function Page() {
  return (
    <SiteShell showCta={true}>
      <main id="main">
        
<section className="phero">
  <div className="wrap">
    <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/services">Capabilities</Link> / <span aria-current="page">Digital Products</span></nav>
    <div className="hero-grid">
      <div>
        <div className="eyebrow" data-anim>Capabilities</div>
        <h1 className="kin-h">Digital products engineered around user workflows.</h1>
      </div>
      <div>
        <p className="lead" data-anim data-delay="120">
          We design and build customer-facing web applications, interactive tools, and client portals that turn complex workflows into clean, reliable digital experiences.
        </p>
        <div className="hero-cta" data-anim data-delay="180">
          <Link className="btn btn-primary" href="/contact">
            <span>Discuss your digital product</span>
            <span className="gt">&rsaquo;</span>
          </Link>
          <Link className="btn" href="/projects/flux">
            <span>Explore FLUX AI Studio</span>
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
        <div className="eyebrow">The Challenge</div>
        <h2 className="kin-h">When generic SaaS tools fail to match your business model</h2>
        <p className="lead">
          Many businesses rely on third-party SaaS products that force them to adapt their unique customer experience to rigid, generic templates. When customer interactions feel disjointed across five different logins, customer satisfaction and retention suffer.
        </p>
        <p className="lead">
          A purpose-built digital product gives your customers a seamless, branded environment designed specifically for how they interact with your services.
        </p>
      </div>
      <div data-anim="right">
        <div className="rv zoom ar-43">
          <img className="ph" src="/assets/img/ph-workshop.webp" alt="Digital product UI planning" width={1600} height={1000} loading="lazy" decoding="async" />
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
        <h2 className="kin-h" data-anim>Purpose-built applications &amp; customer interfaces</h2>
      </div>
      <div>
        <p className="lead" data-anim>
          From interactive product customizers to comprehensive self-service portals, our software is built for durability and ease of use.
        </p>
      </div>
    </div>
    <div className="grid g3">
      <article className="glass card" data-anim data-delay="0">
        <span className="idx">01</span>
        <h3>Customer &amp; Client Portals</h3>
        <p>Authentication, user permissions, order tracking, profile management, and document exchange with secure session handling.</p>
      </article>
      <article className="glass card" data-anim data-delay="60">
        <span className="idx">02</span>
        <h3>Interactive Tools &amp; Calculators</h3>
        <p>Dynamic configurators, pricing estimators, and interactive widgets that provide instant feedback and capture qualified leads.</p>
      </article>
      <article className="glass card" data-anim data-delay="120">
        <span className="idx">03</span>
        <h3>Workflow Studio Interfaces</h3>
        <p>Specialized interfaces featuring node graphs, command palettes (⌘K), split-pane editors, and live trace visualizers.</p>
      </article>
    </div>
  </div>
</section>

{/* 5. Technologies & 6. Real Work */}
<section className="band-dark">
  <div className="wrap">
    <div className="grid g2" style={{"background":"none","gap":"clamp(24px,4vw,56px)","alignItems":"center"}}>
      <div>
        <div className="eyebrow" data-anim>Evidence &amp; Architecture</div>
        <h2 className="kin-h" data-anim>Real working demonstrations</h2>
        <p className="lead" data-anim>
          We build with TypeScript, React, Next.js, and clean state management. We test our UI architecture through functional interactive builds:
        </p>
        <div className="mk-row" data-anim>
          <Link href="/projects/flux" className="mk-chip">FLUX AI Studio (Node Canvas &amp; Trace) →</Link>
          <Link href="/projects/volt" className="mk-chip">VOLT Invoicing Platform →</Link>
          <Link href="/projects/terra" className="mk-chip">Terra Configurator →</Link>
        </div>
      </div>
      <div className="rv ar-43" data-anim>
        <img className="ph" src="/assets/img/ph-desk.webp" alt="Software development workstation" width={1600} height={1000}  />
      </div>
    </div>
  </div>
</section>

{/* 7. Pricing Guidance */}
<section className="band">
  <div className="wrap narrow">
    <div className="s-head">
      <div>
        <div className="eyebrow" data-anim>Investment</div>
        <h2 className="kin-h" data-anim>Custom solutions — requirement-based pricing</h2>
      </div>
      <div>
        <p className="lead" data-anim>
          Unlike standard websites, custom digital products vary significantly based on user roles, data architecture, security requirements, and integrations. We do not invent fake fixed prices for complex applications.
        </p>
      </div>
    </div>
    <div className="glass card" style={{"padding":"2rem"}} data-anim>
      <h3 style={{"marginBottom":"0.5rem"}}>How we scope digital products</h3>
      <ul className="tick" style={{"marginTop":"1rem"}}>
        <li><strong>Requirements &amp; User Flows:</strong> Mapping out exact roles, permissions, and journey paths.</li>
        <li><strong>Component Architecture:</strong> Designing a reusable design system and accessible interface states.</li>
        <li><strong>Backend &amp; API Integration:</strong> Connecting to your database, CRM, or payment gateway.</li>
        <li><strong>Milestone Delivery:</strong> Transparent phase-by-phase delivery with complete source code ownership.</li>
      </ul>
      <div style={{"marginTop":"1.5rem"}}>
        <Link className="btn btn-primary" href="/contact"><span>Discuss your requirements</span><span className="gt">&rsaquo;</span></Link>
      </div>
    </div>
  </div>
</section>

      </main>
    </SiteShell>
  );
}
