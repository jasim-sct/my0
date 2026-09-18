import Link from "next/link";
import { Hero } from "./Hero";
import { SystemThinking } from "./SystemThinking";
import { ArchitectureExplorer } from "./ArchitectureExplorer";
import { ProblemToSystem } from "./ProblemToSystem";

export function HomeMain() {
  return (
    <main id="main">
      <Hero />

      {/* Marquee Banner */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>WEBSITES</span><span className="d">◆</span><span>DIGITAL PRODUCTS</span><span className="d">◆</span>
          <span>BUSINESS SYSTEMS</span><span className="d">◆</span><span>PLATFORMS</span><span className="d">◆</span>
          <span>SOFTWARE INFRASTRUCTURE</span><span className="d">◆</span><span>TYPESCRIPT</span><span className="d">◆</span>
          <span>NEXT.JS</span><span className="d">◆</span><span>NODE.JS</span><span className="d">◆</span>
          <span>POSTGRESQL</span><span className="d">◆</span><span>CORE WEB VITALS</span><span className="d">◆</span>
          <span>WEBSITES</span><span className="d">◆</span><span>DIGITAL PRODUCTS</span><span className="d">◆</span>
          <span>BUSINESS SYSTEMS</span><span className="d">◆</span><span>PLATFORMS</span><span className="d">◆</span>
          <span>SOFTWARE INFRASTRUCTURE</span><span className="d">◆</span><span>TYPESCRIPT</span><span className="d">◆</span>
          <span>NEXT.JS</span><span className="d">◆</span><span>NODE.JS</span><span className="d">◆</span>
          <span>POSTGRESQL</span><span className="d">◆</span><span>CORE WEB VITALS</span><span className="d">◆</span>
        </div>
      </div>

      {/* Why this matters & What we believe */}
      <section>
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow" data-anim>Our Position</div>
              <p className="manifesto">Software isn&apos;t just an interface. It&apos;s a system.</p>
            </div>
            <div>
              <p className="lead" data-anim>
                Businesses do not need more fragile page-builders, disposable prototypes, or layers of agency markup. We engineer clean, dependable digital systems designed to handle real business workflows, load instantly, and remain maintainable for the long term.
              </p>
              <Link className="arrow-link" href="/about" data-anim>Our engineering philosophy <span className="gt">&rsaquo;</span></Link>
            </div>
          </div>
          <div className="grid g2" style={{ marginTop: '1rem' }}>
            <div className="rv ar-43" data-anim>
              <img className="ph" src="/assets/img/ph-workshop.webp" alt="System architecture planning session" width={1600} height={1000} />
            </div>
            <div className="rv ar-43" data-anim data-delay="90">
              <img className="ph" src="/assets/img/ph-whiteboard.webp" alt="Mapping software data flow and infrastructure" width={1600} height={1000} />
            </div>
          </div>
        </div>
      </section>

      {/* Problem to System Mapping */}
      <ProblemToSystem />

      {/* Capabilities: What we build */}
      <section id="services" className="band">
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow" data-anim>Capabilities</div>
              <h2 className="kin-h" data-anim>What Axon Future builds</h2>
            </div>
            <div>
              <p className="lead" data-anim>
                From accessible professional websites to custom operational tools and multi-tenant platforms, we engineer across the full software lifecycle.
              </p>
              <Link className="arrow-link" href="/services" data-anim>View all capabilities <span className="gt">&rsaquo;</span></Link>
            </div>
          </div>
          <div className="grid g4">
            <article className="glass card pillar" data-anim data-delay="0">
              <span className="idx">01 / Web</span>
              <h3>Websites</h3>
              <p>Professional, search-optimized websites for businesses that need a fast, credible digital presence without agency bloat.</p>
              <div className="p-links">
                <Link href="/services/websites" className="pl">Explore websites →</Link>
              </div>
            </article>
            <article className="glass card pillar" data-anim data-delay="70">
              <span className="idx">02 / App</span>
              <h3>Digital Products</h3>
              <p>Customer-facing portals, interactive tools, and web applications built around real user workflows.</p>
              <div className="p-links">
                <Link href="/services/digital-products" className="pl">Explore digital products →</Link>
              </div>
            </article>
            <article className="glass card pillar" data-anim data-delay="140">
              <span className="idx">03 / Ops</span>
              <h3>Business Systems</h3>
              <p>Internal software, operational dashboards, and automation connecting your data, workflows, and teams.</p>
              <div className="p-links">
                <Link href="/services/business-systems" className="pl">Explore business systems →</Link>
              </div>
            </article>
            <article className="glass card pillar" data-anim data-delay="210">
              <span className="idx">04 / Platform</span>
              <h3>Platforms</h3>
              <p>Scalable e-commerce and multi-user systems designed for transactions, catalog scale, and custom business rules.</p>
              <div className="p-links">
                <Link href="/services/platforms" className="pl">Explore platforms →</Link>
              </div>
            </article>
            <article className="glass card pillar" data-anim data-delay="0">
              <span className="idx">05 / Infra</span>
              <h3>Software Infrastructure</h3>
              <p>Resilient APIs, database architectures, Nginx configuration, security headers, and cloud deployments.</p>
              <div className="p-links">
                <Link href="/services/software-infrastructure" className="pl">Explore infrastructure →</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="hscroll">
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow" data-anim>Selected Work</div>
              <h2 className="kin-h" data-anim>Things we&apos;ve built</h2>
            </div>
            <div>
              <p className="lead" data-anim>
                Interactive builds demonstrating real system architecture, state management, and user interaction. Click through each project to see the working software.
              </p>
              <Link className="arrow-link" href="/projects" data-anim>View all selected work <span className="gt">&rsaquo;</span></Link>
            </div>
          </div>
        </div>
        <div className="hscroll-sticky">
          <div className="wrap hscroll-scroller">
            <div className="hscroll-track">
              <Link className="hscroll-panel demo-tile" href="/projects/shop">
                <div className="dt-thumb">
                  <img className="ph dt-img" src="/assets/img/pj-shop.webp" alt="Lumen Commerce storefront and cart" width={1600} height={1000} />
                  <span className="proj-live">EXPERIMENTAL BUILD</span>
                </div>
                <div className="dt-body">
                  <span className="dt-cat">E-Commerce Architecture</span>
                  <h3>Lumen Commerce</h3>
                  <p>Product catalog, variant selection, persistent cart, promo engine, and three-step validated checkout flow.</p>
                  <span className="dt-cta">Inspect architecture <span className="gt">&rsaquo;</span></span>
                </div>
              </Link>
              <Link className="hscroll-panel demo-tile" href="/projects/flux">
                <div className="dt-thumb">
                  <img className="ph dt-img" src="/assets/img/pj-flux.webp" alt="FLUX AI studio interface" width={1600} height={1000} />
                  <span className="proj-live">EXPERIMENTAL BUILD</span>
                </div>
                <div className="dt-body">
                  <span className="dt-cat">Digital Product · Canvas UI</span>
                  <h3>FLUX AI Studio</h3>
                  <p>IDE-shell layout with ⌘K command palette, interactive node-graph canvas, and live workflow runner.</p>
                  <span className="dt-cta">Experience the build <span className="gt">&rsaquo;</span></span>
                </div>
              </Link>
              <Link className="hscroll-panel demo-tile" href="/projects/relay">
                <div className="dt-thumb">
                  <img className="ph dt-img" src="/assets/img/pj-relay.webp" alt="RELAY operations platform" width={1600} height={1000} />
                  <span className="proj-live">EXPERIMENTAL BUILD</span>
                </div>
                <div className="dt-body">
                  <span className="dt-cat">Business System · Operations</span>
                  <h3>RELAY Platform</h3>
                  <p>Operational tooling with Kanban board, scraper status pipeline, and filterable lead table with CSV export.</p>
                  <span className="dt-cta">Explore the system <span className="gt">&rsaquo;</span></span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* System Thinking Experience */}
      <SystemThinking />

      {/* Interactive Architecture Explorer */}
      <ArchitectureExplorer />

      {/* Engineering Approach / Methodology */}
      <section className="band-dark">
        <div className="wrap">
          <div className="s-head" style={{ borderColor: 'rgba(255,255,255,.16)' }}>
            <div>
              <div className="eyebrow" data-anim>Engineering Approach</div>
              <h2 className="kin-h" data-anim>How we ship software</h2>
            </div>
            <div>
              <p className="lead" data-anim>A disciplined software engineering lifecycle that eliminates guesswork and delivers predictable production systems.</p>
            </div>
          </div>
          <div className="steps" style={{ borderColor: 'rgba(255,255,255,.16)' }}>
            <div className="step" data-anim data-delay="0">
              <div className="n">01</div>
              <div>
                <h3>Analyze &amp; Scope</h3>
                <p>We map your user journeys, data requirements, and operational constraints before writing any code.</p>
              </div>
            </div>
            <div className="step" data-anim data-delay="60">
              <div className="n">02</div>
              <div>
                <h3>Architect</h3>
                <p>Designing database schemas, API contracts, security policies, and component hierarchies for long-term maintainability.</p>
              </div>
            </div>
            <div className="step" data-anim data-delay="120">
              <div className="n">03</div>
              <div>
                <h3>Build &amp; Test</h3>
                <p>TypeScript-first development with strict typing, automated linting, Core Web Vitals checks, and cross-device testing.</p>
              </div>
            </div>
            <div className="step" data-anim data-delay="180">
              <div className="n">04</div>
              <div>
                <h3>Deploy &amp; Handover</h3>
                <p>Production deployment with SSL, CDN caching, analytics, and full source code ownership handed over unconditionally.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="band-dark" style={{ paddingTop: '1rem' }}>
        <div className="wrap">
          <div className="grid g2" style={{ background: 'none', gap: 'clamp(24px,4vw,56px)', alignItems: 'center' }}>
            <div>
              <div className="eyebrow" data-anim>Technology</div>
              <h2 className="kin-h" data-anim>Modern, proven software stack</h2>
              <p className="lead" data-anim>
                We do not experiment with fragile tools on production software. We choose industry-standard, high-performance technologies with strong community support and long-term viability.
              </p>
              <div className="mk-row" data-anim>
                <span className="mk-chip">TypeScript</span>
                <span className="mk-chip">React</span>
                <span className="mk-chip">Next.js</span>
                <span className="mk-chip">Node.js</span>
                <span className="mk-chip">NestJS</span>
                <span className="mk-chip">Express.js</span>
                <span className="mk-chip">PostgreSQL</span>
                <span className="mk-chip">MongoDB</span>
                <span className="mk-chip">REST APIs</span>
                <span className="mk-chip">Nginx</span>
                <span className="mk-chip">AWS / Vercel</span>
              </div>
              <div style={{ marginTop: '1.2rem' }} data-anim>
                <Link className="arrow-link" href="/engineering">
                  Explore our engineering standards &amp; stack decisions <span className="gt">&rsaquo;</span>
                </Link>
              </div>
            </div>
            <div className="rv ar-43" data-anim data-para="14">
              <img className="ph" src="/assets/img/ph-desk.webp" alt="Software engineering workstation" width={1600} height={1000} />
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Clarity / Pricing Section */}
      <section className="band">
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow" data-anim>Pricing &amp; Value</div>
              <h2 className="kin-h" data-anim>Accessible website packages</h2>
            </div>
            <div>
              <p className="lead" data-anim>
                Transparent website packages built specifically for businesses that need high-quality digital execution without hidden fees.
              </p>
              <Link className="arrow-link" href="/pricing" data-anim>Compare all packages <span className="gt">&rsaquo;</span></Link>
            </div>
          </div>
          <div className="grid g3">
            <article className="glass card plan" data-anim data-delay="0">
              <h3>Starter Website</h3>
              <div className="price">₹7,999</div>
              <p className="note">For small businesses needing a clean online presence</p>
              <ul className="tick">
                <li>1–3 pages</li>
                <li>Responsive mobile-first layout</li>
                <li>Domain setup &amp; SSL included</li>
                <li>Production deployment</li>
                <li>1 year hosting coverage</li>
              </ul>
              <Link className="btn btn-full" href="/contact"><span>Get started</span></Link>
            </article>

            <article className="glass card plan featured" data-anim data-delay="60">
              <span className="badge">Most chosen</span>
              <h3>Business Website</h3>
              <div className="price">₹14,999</div>
              <p className="note">Complete professional website for growing businesses</p>
              <ul className="tick">
                <li>5–7 pages</li>
                <li>Custom visual implementation</li>
                <li>Search-friendly structure &amp; basic SEO</li>
                <li>Analytics integration</li>
                <li>1 year hosting coverage</li>
              </ul>
              <Link className="btn btn-primary btn-full" href="/contact"><span>Get started</span></Link>
            </article>

            <article className="glass card plan" data-anim data-delay="120">
              <h3>Growth Website</h3>
              <div className="price">₹24,999</div>
              <p className="note">Engineered for businesses competing for organic search</p>
              <ul className="tick">
                <li>Custom design &amp; multiple pages</li>
                <li>SEO structure, metadata &amp; sitemap</li>
                <li>Structured data &amp; Search Console setup</li>
                <li>Core Web Vitals performance tuning</li>
                <li>1 year hosting coverage</li>
              </ul>
              <Link className="btn btn-full" href="/contact"><span>Get started</span></Link>
            </article>
          </div>

          <div className="grid g2" style={{ marginTop: '2rem' }} data-anim>
            <div className="glass card" style={{ padding: '1.5rem' }}>
              <h4 style={{ margin: '0 0 0.5rem' }}>Hosting &amp; Maintenance Transparency</h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--txt-dim)', margin: 0 }}>
                First-year hosting is included in every website package. Future renewal is transparently priced at <strong>₹2,999–₹5,999/year</strong> covering hosting, SSL renewal, and baseline maintenance. High-traffic and custom platforms are scoped according to infrastructure needs.
              </p>
            </div>
            <div className="glass card" style={{ padding: '1.5rem' }}>
              <h4 style={{ margin: '0 0 0.5rem' }}>Custom Software &amp; Business Systems</h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--txt-dim)', margin: 0 }}>
                Need a custom digital product, operational business system, or software infrastructure? We scope custom solutions based on requirements, complexity, user scale, and integrations. 
                <Link href="/contact" style={{ display: 'inline-block', marginLeft: '0.5rem', color: 'var(--accent)' }}>Discuss your requirements →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Notes / Blog */}
      <section>
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow" data-anim>Engineering Notes</div>
              <h2 className="kin-h" data-anim>Technical insights &amp; guides</h2>
            </div>
            <div>
              <p className="lead" data-anim>Transparent analysis of web performance, development costs, and security standards.</p>
              <Link className="arrow-link" href="/blog" data-anim>All articles <span className="gt">&rsaquo;</span></Link>
            </div>
          </div>
          <div className="grid g3">
            <Link className="glass card art-card" href="/blog/core-web-vitals-fix-guide" data-anim data-delay="0">
              <div className="rv zoom ar-16"><img className="ph" src="/assets/img/ph-code.webp" alt="Code optimization" width={1600} height={1000} /></div>
              <div className="ac-body">
                <span className="dt-cat">Performance</span>
                <h3>Fixing Core Web Vitals in Next.js Apps</h3>
                <p>A technical guide to eliminating layout shifts and optimizing LCP in React applications for perfect Lighthouse scores.</p>
                <span className="dt-cta">Read guide <span className="gt">&rsaquo;</span></span>
              </div>
            </Link>
            <Link className="glass card art-card" href="/blog/how-much-does-a-website-cost" data-anim data-delay="70">
              <div className="rv zoom ar-16"><img className="ph" src="/assets/img/ph-ai.webp" alt="Architecture" width={1600} height={1000} /></div>
              <div className="ac-body">
                <span className="dt-cat">Pricing</span>
                <h3>The real cost of website development in 2026</h3>
                <p>Breaking down the engineering requirements, hosting renewals, and scope factors behind professional website pricing.</p>
                <span className="dt-cta">Read guide <span className="gt">&rsaquo;</span></span>
              </div>
            </Link>
            <Link className="glass card art-card" href="/blog/website-security-checklist-small-business" data-anim data-delay="140">
              <div className="rv zoom ar-16"><img className="ph" src="/assets/img/ph-social.webp" alt="Security" width={1600} height={1000} /></div>
              <div className="ac-body">
                <span className="dt-cat">Security</span>
                <h3>Website security checklist for small businesses</h3>
                <p>Essential security implementations from SSL configuration to CSP headers and sanitized user inputs.</p>
                <span className="dt-cta">Read guide <span className="gt">&rsaquo;</span></span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
