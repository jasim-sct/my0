import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Selected Work & Interactive Builds | Axio Future",
  description: "Explore working applications and interactive software architectures engineered by Axio Future. E-commerce platforms, AI studio interfaces, and operations dashboards.",
};

export default function Page() {
  return (
    <SiteShell showCta={true}>
      <main id="main">
        <section className="phero"><div className="wrap">
 <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <span aria-current="page">Selected Work</span></nav>
 <div className="hero-grid">
  <div><div className="eyebrow" data-anim>Selected Work · Real Software</div>
   <h1 className="kin-h">Things we've built.</h1></div>
  <div><p className="lead" data-anim data-delay="120">Working applications and interactive software architectures engineered by Axio Future. We build functional prototypes and platforms to test interactions, prove system design, and verify performance before production deployment.</p></div>
 </div>
</div></section>

<section style={{"paddingTop":"1rem"}}><div className="wrap"><div className="proj-list">

 {/* 01 Lumen Commerce */}
 <article className="proj-row" data-anim>
  <Link className="proj-shot" href="/projects/shop">
   <img className="ph" src="/assets/img/pj-shop.webp" alt="Lumen Commerce storefront and checkout flow" width="1600" height="1000" loading="lazy" decoding="async" />
   <span className="proj-live">EXPERIMENTAL BUILD</span>
   <span className="proj-open">Open build &rsaquo;</span>
  </Link>
  <div className="proj-info">
   <span className="dt-cat">E-Commerce Architecture · Platforms</span>
   <h3>Lumen Commerce</h3>
   <p className="lead">A complete browser-based online store engineered to verify headless commerce flows without third-party platform runtimes. Features 12 products, variant matrices, a persistent cart surviving browser refresh, promo code logic, and a validated three-step checkout wizard.</p>
   <ul className="tick proj-feats">
    <li>11 functional pages</li>
    <li>Persistent cart (LocalStorage)</li>
    <li>Dynamic variant selection</li>
    <li>Promo code discount logic</li>
    <li>Validated 3-step checkout</li>
    <li>Order tracking simulation</li>
   </ul>
   <div className="metric proj-stats">
    <div><b>11</b><small>Pages</small></div>
    <div><b>12</b><small>Products</small></div>
    <div><b>3-Step</b><small>Checkout</small></div>
    <div><b>Verified</b><small>Architecture</small></div>
   </div>
   <div className="hero-cta">
    <Link className="btn btn-primary" href="/projects/shop"><span>Inspect the architecture</span><span className="gt">&rsaquo;</span></Link>
    <Link className="btn" href="/services/platforms"><span>Related: Platforms</span></Link>
   </div>
  </div>
 </article>

 {/* 02 FLUX AI Studio */}
 <article className="proj-row proj-flip" data-anim>
  <Link className="proj-shot" href="/projects/flux">
   <img className="ph" src="/assets/img/pj-flux.webp" alt="FLUX AI studio interface with node canvas" width="1600" height="1000" loading="lazy" decoding="async" />
   <span className="proj-live">EXPERIMENTAL BUILD</span>
   <span className="proj-open">Experience build &rsaquo;</span>
  </Link>
  <div className="proj-info">
   <span className="dt-cat">Digital Products · Canvas UI</span>
   <h3>FLUX AI Studio</h3>
   <p className="lead">An IDE-shell desktop-grade layout operating directly in the browser. Features a fixed icon navigation rail, split-pane workspace, global ⌘K command palette, visual node-graph canvas with draggable connections, and a live agent trace logger with confidence scoring.</p>
   <ul className="tick proj-feats">
    <li>6 specialized views</li>
    <li>Global ⌘K command palette</li>
    <li>Interactive node-graph canvas</li>
    <li>Real-time agent trace logger</li>
    <li>Prompt compiler interface</li>
    <li>Dark-mode CSS design system</li>
   </ul>
   <div className="metric proj-stats">
    <div><b>6</b><small>Views</small></div>
    <div><b>4</b><small>Tools</small></div>
    <div><b>⌘K</b><small>Palette</small></div>
    <div><b>Verified</b><small>UI State</small></div>
   </div>
   <div className="hero-cta">
    <Link className="btn btn-primary" href="/projects/flux"><span>Experience the build</span><span className="gt">&rsaquo;</span></Link>
    <Link className="btn" href="/services/digital-products"><span>Related: Digital Products</span></Link>
   </div>
  </div>
 </article>

 {/* 03 RELAY Platform */}
 <article className="proj-row" data-anim>
  <Link className="proj-shot" href="/projects/relay">
   <img className="ph" src="/assets/img/pj-relay.webp" alt="RELAY operational platform dashboard" width="1600" height="1000" loading="lazy" decoding="async" />
   <span className="proj-live">EXPERIMENTAL BUILD</span>
   <span className="proj-open">Explore system &rsaquo;</span>
  </Link>
  <div className="proj-info">
   <span className="dt-cat">Business Systems · Operations</span>
   <h3>RELAY Platform</h3>
   <p className="lead">A cohesive business management command portal built to demonstrate internal operations software. Features an interactive Kanban board with drag transitions, a real-time scraper pipeline with live log output, a 12-record filterable lead table with instant CSV export, and a hiring cost calculator.</p>
   <ul className="tick proj-feats">
    <li>7 operational tools</li>
    <li>Interactive Kanban board</li>
    <li>Scraper pipeline with logging</li>
    <li>Filterable lead table</li>
    <li>Instant CSV data export</li>
    <li>Support chat interface</li>
   </ul>
   <div className="metric proj-stats">
    <div><b>7</b><small>Modules</small></div>
    <div><b>5</b><small>Live Tools</small></div>
    <div><b>CSV</b><small>Data Export</small></div>
    <div><b>Verified</b><small>Workflows</small></div>
   </div>
   <div className="hero-cta">
    <Link className="btn btn-primary" href="/projects/relay"><span>Explore the system</span><span className="gt">&rsaquo;</span></Link>
    <Link className="btn" href="/services/business-systems"><span>Related: Business Systems</span></Link>
   </div>
  </div>
 </article>

 {/* 04 Northwind Analytics */}
 <article className="proj-row proj-flip" data-anim>
  <Link className="proj-shot" href="/projects/dashboard">
   <img className="ph" src="/assets/img/pj-dash.webp" alt="Northwind Analytics dashboard with SVG charts" width="1600" height="1000" loading="lazy" decoding="async" />
   <span className="proj-live">EXPERIMENTAL BUILD</span>
   <span className="proj-open">Inspect charts &rsaquo;</span>
  </Link>
  <div className="proj-info">
   <span className="dt-cat">Business Systems · Data Visualization</span>
   <h3>Northwind Analytics</h3>
   <p className="lead">A production-grade administrative dashboard proving high-speed performance with zero external chart libraries. Charts are rendered using hand-crafted SVG vector geometry, alongside a 48-record customer data table with sorting, dual filters, debounced search, pagination, and full CRUD modals.</p>
   <ul className="tick proj-feats">
    <li>6 dashboard modules</li>
    <li>Zero-dependency SVG charts</li>
    <li>48-record searchable table</li>
    <li>Multi-column sorting</li>
    <li>Instant CSV data export</li>
    <li>Dark &amp; light theme toggle</li>
   </ul>
   <div className="metric proj-stats">
    <div><b>6</b><small>Modules</small></div>
    <div><b>48</b><small>Records</small></div>
    <div><b>0 KB</b><small>Chart Libs</small></div>
    <div><b>Verified</b><small>Speed</small></div>
   </div>
   <div className="hero-cta">
    <Link className="btn btn-primary" href="/projects/dashboard"><span>Inspect data architecture</span><span className="gt">&rsaquo;</span></Link>
    <Link className="btn" href="/services/business-systems"><span>Related: Business Systems</span></Link>
   </div>
  </div>
 </article>

 {/* 05 Terra & Co */}
 <article className="proj-row" data-anim>
  <Link className="proj-shot" href="/projects/terra">
   <img className="ph" src="/assets/img/pj-terra.webp" alt="Terra & Co brand and subscription commerce" width="1600" height="1000" loading="lazy" decoding="async" />
   <span className="proj-live">EXPERIMENTAL BUILD</span>
   <span className="proj-open">Explore brand &rsaquo;</span>
  </Link>
  <div className="proj-info">
   <span className="dt-cat">Websites · Brand &amp; Commerce</span>
   <h3>Terra &amp; Co</h3>
   <p className="lead">An organic farm brand demonstration covering an editorial marketing site, full product shop with checkout, an interactive subscription box-builder configurator with dynamic price updates, a customer delivery management dashboard, and a documented design system.</p>
   <ul className="tick proj-feats">
    <li>10 complete pages</li>
    <li>Editorial brand layout</li>
    <li>Product store with checkout</li>
    <li>Interactive box configurator</li>
    <li>Delivery schedule dashboard</li>
    <li>Documented design tokens</li>
   </ul>
   <div className="metric proj-stats">
    <div><b>10</b><small>Pages</small></div>
    <div><b>4</b><small>Disciplines</small></div>
    <div><b>2</b><small>Web Apps</small></div>
    <div><b>Verified</b><small>Design</small></div>
   </div>
   <div className="hero-cta">
    <Link className="btn btn-primary" href="/projects/terra"><span>Explore the storefront</span><span className="gt">&rsaquo;</span></Link>
    <Link className="btn" href="/services/websites"><span>Related: Websites</span></Link>
   </div>
  </div>
 </article>

 {/* 06 VOLT Invoicing */}
 <article className="proj-row proj-flip" data-anim>
  <Link className="proj-shot" href="/projects/volt">
   <img className="ph" src="/assets/img/pj-volt.webp" alt="VOLT neo-brutalist invoicing SaaS application" width="1600" height="1000" loading="lazy" decoding="async" />
   <span className="proj-live">EXPERIMENTAL BUILD</span>
   <span className="proj-open">Experience app &rsaquo;</span>
  </Link>
  <div className="proj-info">
   <span className="dt-cat">Digital Products · Fintech SaaS</span>
   <h3>VOLT Invoicing</h3>
   <p className="lead">A fintech web application built in a bold neo-brutalist design system. Features a pricing matrix with annual/monthly billing toggle, three-step validated signup onboarding, and an invoice management dashboard with status filters, invoice generation modals, and CSV export.</p>
   <ul className="tick proj-feats">
    <li>6 functional pages</li>
    <li>Neo-brutalist token system</li>
    <li>Pricing with billing toggle</li>
    <li>3-step validated onboarding</li>
    <li>Invoice CRUD dashboard</li>
    <li>CSV export capability</li>
   </ul>
   <div className="metric proj-stats">
    <div><b>6</b><small>Pages</small></div>
    <div><b>34</b><small>Live Invoices</small></div>
    <div><b>Full</b><small>CRUD</small></div>
    <div><b>Verified</b><small>Onboarding</small></div>
   </div>
   <div className="hero-cta">
    <Link className="btn btn-primary" href="/projects/volt"><span>Experience the app</span><span className="gt">&rsaquo;</span></Link>
    <Link className="btn" href="/services/digital-products"><span>Related: Digital Products</span></Link>
   </div>
  </div>
 </article>

 {/* 07 PROTO Dossier */}
 <article className="proj-row" data-anim>
  <Link className="proj-shot" href="/projects/proto">
   <img className="ph" src="/assets/img/pj-proto.webp" alt="PROTO technical dossier and security audit" width="1600" height="1000" loading="lazy" decoding="async" />
   <span className="proj-live">EXPERIMENTAL BUILD</span>
   <span className="proj-open">Inspect audit &rsaquo;</span>
  </Link>
  <div className="proj-info">
   <span className="dt-cat">Software Infrastructure · Security</span>
   <h3>PROTO Technical Dossier</h3>
   <p className="lead">An engineering dossier layout with a sticky metadata navigation rail. Features an interactive 12-point security audit checklist with weighted severity scoring and CSV findings export, a platform selection matrix, and a multi-chain gas cost estimator.</p>
   <ul className="tick proj-feats">
    <li>6 technical views</li>
    <li>Sticky dossier navigation</li>
    <li>12-point security audit</li>
    <li>Dynamic severity score</li>
    <li>Findings CSV export</li>
    <li>Platform selection matrix</li>
   </ul>
   <div className="metric proj-stats">
    <div><b>6</b><small>Views</small></div>
    <div><b>12</b><small>Audit Points</small></div>
    <div><b>CSV</b><small>Findings</small></div>
    <div><b>Verified</b><small>Security</small></div>
   </div>
   <div className="hero-cta">
    <Link className="btn btn-primary" href="/projects/proto"><span>Inspect security audit</span><span className="gt">&rsaquo;</span></Link>
    <Link className="btn" href="/services/software-infrastructure"><span>Related: Infrastructure</span></Link>
   </div>
  </div>
 </article>

</div></div></section>

{/* Handover & Engineering Integrity */}
<section className="band"><div className="wrap">
 <div className="s-head">
  <div>
   <div className="eyebrow" data-anim>Engineering Standards</div>
   <h2 className="kin-h" data-anim>What ships with every Axio Future project</h2>
  </div>
  <div></div>
 </div>
 <div className="grid g4">
  <div className="glass card" data-anim><span className="idx">01</span><h3>Clean Source Code</h3>
   <p>Full Git repository access, structured components, strict TypeScript typing, and zero vendor lock-in.</p></div>
  <div className="glass card" data-anim data-delay="70"><span className="idx">02</span><h3>Technical Documentation</h3>
   <p>Comprehensive setup guide, environment configuration, database schemas, and architectural walkthrough.</p></div>
  <div className="glass card" data-anim data-delay="140"><span className="idx">03</span><h3>Responsive Verification</h3>
   <p>Thoroughly tested across mobile, tablet, laptop, and desktop breakpoints with sub-second performance.</p></div>
  <div className="glass card" data-anim data-delay="210"><span className="idx">04</span><h3>Launch &amp; Deployment</h3>
   <p>Domain configuration, automated SSL provisioning, CDN caching setup, and 1 year included hosting on website packages.</p></div>
 </div>
</div></section>

      </main>
    </SiteShell>
  );
}
