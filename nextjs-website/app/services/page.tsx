import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: 'Software Engineering Capabilities | Axio Future',
  description: 'Five core software engineering capabilities: Websites, Digital Products, Business Systems, Platforms, and Software Infrastructure. Transparent pricing and architecture.',
};

export default function Page() {
  return (
    <SiteShell showCta={true}>
      <main id="main">
        <section className="phero">
          <div className="wrap">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link> / <span aria-current="page">Capabilities</span>
            </nav>
            <div className="hero-grid">
              <div>
                <div className="eyebrow" data-anim>Capabilities</div>
                <h1 className="kin-h">Engineering capabilities built for what comes next.</h1>
              </div>
              <div>
                <p className="lead" data-anim data-delay="120">
                  Axio Future engineers reliable digital systems across five disciplines: accessible business websites, bespoke digital products, internal business systems, multi-user platforms, and software infrastructure.
                </p>
              </div>
            </div>
            <div className="mk-row" data-anim data-delay="180">
              <a href="#websites" className="mk-chip">01 Websites</a>
              <a href="#digital-products" className="mk-chip">02 Digital Products</a>
              <a href="#business-systems" className="mk-chip">03 Business Systems</a>
              <a href="#platforms" className="mk-chip">04 Platforms</a>
              <a href="#software-infrastructure" className="mk-chip">05 Software Infrastructure</a>
            </div>
            <div className="phero-img">
              <div className="rv ar-21 ">
                <img
                  className="ph "
                  src="/assets/img/ph-team.webp"
                  alt="Axio Future engineering team planning session"
                  width="1600"
                  height="1000"
                  sizes="(max-width:900px) 100vw, 1320px"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 01 Websites */}
        <section id="websites">
          <div className="wrap">
            <div className="s-head">
              <div className="pill-head" data-anim>
                <span className="p-ico">01</span>
                <div><h2 className="kin-h">Websites</h2></div>
              </div>
              <div>
                <p className="lead" data-anim>
                  Fast, responsive, search-friendly websites engineered for businesses that need a credible, high-converting digital presence without bloated plugins or agency markup.
                </p>
                <Link className="arrow-link" href="/services/websites" data-anim>
                  Deep dive into website development <span className="gt">&rsaquo;</span>
                </Link>
              </div>
            </div>
            <div className="grid g3">
              <article className="glass card plan" data-anim data-delay="0">
                <span className="dt-cat">Entry Offering</span>
                <h3>Starter Website</h3>
                <div className="price">₹7,999</div>
                <p className="note">1–3 pages · Responsive design · SSL · 1 yr hosting</p>
                <p>A fast, clean digital storefront with domain configuration, basic customization, and production deployment.</p>
                <div className="p-links">
                  <Link href="/services/websites" className="pl">View specifications →</Link>
                </div>
              </article>
              <article className="glass card plan featured" data-anim data-delay="70">
                <span className="badge">Most Chosen</span>
                <span className="dt-cat">Business Offer</span>
                <h3>Business Website</h3>
                <div className="price">₹14,999</div>
                <p className="note">5–7 pages · Custom UI · Basic SEO · Analytics · 1 yr hosting</p>
                <p>Search-engine-friendly structure, custom visual implementation, and analytics setup for growing businesses.</p>
                <div className="p-links">
                  <Link href="/services/websites" className="pl">View specifications →</Link>
                </div>
              </article>
              <article className="glass card plan" data-anim data-delay="140">
                <span className="dt-cat">Growth Offer</span>
                <h3>Growth Website</h3>
                <div className="price">₹24,999</div>
                <p className="note">Multiple pages · Technical SEO · Speed · 1 yr hosting</p>
                <p>Engineered for organic discoverability with metadata, sitemap, structured data, and sub-second performance.</p>
                <div className="p-links">
                  <Link href="/services/websites" className="pl">View specifications →</Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* 02 Digital Products */}
        <section id="digital-products" className="band">
          <div className="wrap">
            <div className="s-head">
              <div className="pill-head" data-anim>
                <span className="p-ico">02</span>
                <div><h2 className="kin-h">Digital Products</h2></div>
              </div>
              <div>
                <p className="lead" data-anim>
                  Customer-facing portals, interactive web applications, and digital tools designed around user workflows. We replace disconnected forms and manual processes with intuitive, high-performance interfaces.
                </p>
                <Link className="arrow-link" href="/services/digital-products" data-anim>
                  Explore digital products <span className="gt">&rsaquo;</span>
                </Link>
              </div>
            </div>
            <div className="grid g3">
              <div className="glass card" data-anim data-delay="0">
                <h3>Client &amp; Customer Portals</h3>
                <p>Secure authentication, role-based dashboards, document management, and self-service account management.</p>
                <div className="chips">
                  <span className="chip">Auth &amp; RBAC</span>
                  <span className="chip">Secure Sessions</span>
                  <span className="chip">Account Tools</span>
                </div>
              </div>
              <div className="glass card" data-anim data-delay="70">
                <h3>Interactive Web Apps</h3>
                <p>Rich browser-based tools, calculators, configurators, and specialized product interfaces with instant feedback loops.</p>
                <div className="chips">
                  <span className="chip">React State</span>
                  <span className="chip">Interactive Canvas</span>
                  <span className="chip">Local Storage</span>
                </div>
              </div>
              <div className="glass card" data-anim data-delay="140">
                <h3>Workflow Studio Tools</h3>
                <p>Complex interfaces such as node-graph builders, command palettes (⌘K), and live trace viewers modelled after modern developer tools.</p>
                <div className="chips">
                  <span className="chip">FLUX Architecture</span>
                  <span className="chip">Node Graphs</span>
                  <span className="chip">Live Tracing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 Business Systems */}
        <section id="business-systems">
          <div className="wrap">
            <div className="s-head">
              <div className="pill-head" data-anim>
                <span className="p-ico">03</span>
                <div><h2 className="kin-h">Business Systems</h2></div>
              </div>
              <div>
                <p className="lead" data-anim>
                  Custom software connecting internal operations, operational data, workflows, and people. Built to replace messy spreadsheets and error-prone manual copy-pasting.
                </p>
                <Link className="arrow-link" href="/services/business-systems" data-anim>
                  Explore business systems <span className="gt">&rsaquo;</span>
                </Link>
              </div>
            </div>
            <div className="grid g3">
              <div className="glass card" data-anim data-delay="0">
                <h3>Operational Dashboards</h3>
                <p>Real-time metric visualization, customer data tables with sorting, filtering, and CSV export capabilities.</p>
                <div className="chips">
                  <span className="chip">Northwind Build</span>
                  <span className="chip">SVG Charts</span>
                  <span className="chip">CSV Export</span>
                </div>
              </div>
              <div className="glass card" data-anim data-delay="70">
                <h3>Task &amp; Pipeline Management</h3>
                <p>Kanban boards, workflow status trackers, and pipeline monitors that keep internal teams aligned.</p>
                <div className="chips">
                  <span className="chip">RELAY Platform</span>
                  <span className="chip">Kanban Engine</span>
                  <span className="chip">Real-Time Sync</span>
                </div>
              </div>
              <div className="glass card" data-anim data-delay="140">
                <h3>Data Automation Pipelines</h3>
                <p>Background scrapers, data cleaning, validation workers, and automated alerting services running without human intervention.</p>
                <div className="chips">
                  <span className="chip">Node Workers</span>
                  <span className="chip">Data Normalization</span>
                  <span className="chip">Error Retries</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 Platforms */}
        <section id="platforms" className="band">
          <div className="wrap">
            <div className="s-head">
              <div className="pill-head" data-anim>
                <span className="p-ico">04</span>
                <div><h2 className="kin-h">Platforms</h2></div>
              </div>
              <div>
                <p className="lead" data-anim>
                  Scalable multi-user platforms, custom e-commerce engines, and SaaS architectures built to handle transaction volume, catalog scale, and custom business logic.
                </p>
                <Link className="arrow-link" href="/services/platforms" data-anim>
                  Explore platform engineering <span className="gt">&rsaquo;</span>
                </Link>
              </div>
            </div>
            <div className="grid g3">
              <div className="glass card" data-anim data-delay="0">
                <h3>E-Commerce Architectures</h3>
                <p>Full catalog systems, variant handling, persistent shopping carts, promo engines, and multi-step checkout flows.</p>
                <div className="chips">
                  <span className="chip">Lumen Commerce</span>
                  <span className="chip">Persistent Cart</span>
                  <span className="chip">Checkout Logic</span>
                </div>
              </div>
              <div className="glass card" data-anim data-delay="70">
                <h3>Multi-Tenant SaaS MVPs</h3>
                <p>Organization isolation, subscription billing tiers, account administration, and usage metering built with maintainable data models.</p>
                <div className="chips">
                  <span className="chip">Multi-Tenancy</span>
                  <span className="chip">Billing Models</span>
                  <span className="chip">Audit Trails</span>
                </div>
              </div>
              <div className="glass card" data-anim data-delay="140">
                <h3>Custom Transaction Engines</h3>
                <p>Payment gateway integrations (Stripe, Razorpay, UPI), invoice generators with PDF creation, and webhook reconciliation.</p>
                <div className="chips">
                  <span className="chip">VOLT Invoicing</span>
                  <span className="chip">Webhook Handlers</span>
                  <span className="chip">Idempotency</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05 Software Infrastructure */}
        <section id="software-infrastructure">
          <div className="wrap">
            <div className="s-head">
              <div className="pill-head" data-anim>
                <span className="p-ico">05</span>
                <div><h2 className="kin-h">Software Infrastructure</h2></div>
              </div>
              <div>
                <p className="lead" data-anim>
                  Backend systems, typed REST APIs, relational databases, security hardening, and deployment pipelines that ensure uptime and performance.
                </p>
                <Link className="arrow-link" href="/services/software-infrastructure" data-anim>
                  Explore infrastructure <span className="gt">&rsaquo;</span>
                </Link>
              </div>
            </div>
            <div className="grid g3">
              <div className="glass card" data-anim data-delay="0">
                <h3>API &amp; Backend Engineering</h3>
                <p>Typed contracts, clean routing, schema validation, rate-limiting, and error-handling using Node.js, Express, and NestJS.</p>
                <div className="chips">
                  <span className="chip">TypeScript APIs</span>
                  <span className="chip">Schema Validation</span>
                  <span className="chip">REST Standards</span>
                </div>
              </div>
              <div className="glass card" data-anim data-delay="70">
                <h3>Database Architecture</h3>
                <p>PostgreSQL schema design, indexing, foreign keys, migration management, and MongoDB document modeling for performance.</p>
                <div className="chips">
                  <span className="chip">PostgreSQL</span>
                  <span className="chip">MongoDB</span>
                  <span className="chip">Connection Pooling</span>
                </div>
              </div>
              <div className="glass card" data-anim data-delay="140">
                <h3>Security &amp; Deployment</h3>
                <p>Nginx reverse proxies, SSL certificate lifecycle, strict Content Security Policy (CSP) headers, and CI/CD pipelines.</p>
                <div className="chips">
                  <span className="chip">Nginx Hardening</span>
                  <span className="chip">OWASP Standards</span>
                  <span className="chip">Automated CI/CD</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Transparency & FAQ */}
        <section id="faq">
          <div className="wrap narrow">
            <div className="center">
              <div className="eyebrow" data-anim>FAQ</div>
              <h2 data-anim>Capability &amp; Pricing Questions</h2>
            </div>
            <div className="faq" style={{ marginTop: "1.8rem" }}>
              <details className="glass" data-anim data-delay="0">
                <summary>How are website development packages priced?</summary>
                <p>We provide three transparent packages: Starter (₹7,999), Business (₹14,999), and Growth (₹24,999). Each tier includes design, deployment, SSL, and full first-year hosting coverage.</p>
              </details>
              <details className="glass" data-anim data-delay="40">
                <summary>What happens to hosting after the first year?</summary>
                <p>Hosting and baseline maintenance renewals cost ₹2,999–₹5,999/year depending on system requirements. There are no hidden fees or locked proprietary CMS platforms.</p>
              </details>
              <details className="glass" data-anim data-delay="80">
                <summary>How is custom software quoted?</summary>
                <p>Custom digital products, business systems, and platforms are requirement-based. Scope depends on user flows, database complexity, third-party integrations, and user volume. We provide clear technical specifications and milestone estimates before kickoff.</p>
              </details>
              <details className="glass" data-anim data-delay="120">
                <summary>Who owns the intellectual property?</summary>
                <p>You own all source code, assets, and database models unconditionally upon delivery.</p>
              </details>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
