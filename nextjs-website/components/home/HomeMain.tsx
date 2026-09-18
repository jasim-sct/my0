import Link from "next/link";
import { Hero } from "./Hero";
import { SystemThinking } from "./SystemThinking";
import { ArchitectureExplorer } from "./ArchitectureExplorer";
import { ProblemToSystem } from "./ProblemToSystem";
import { AxioIcon } from "@/components/icons";

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
                Strict architecture. Clean data contracts. Zero runtime bloat.
              </p>
              <Link className="arrow-link" href="/about" data-anim>Our engineering philosophy <span className="gt">&rsaquo;</span></Link>
            </div>
          </div>
          <div className="rv ar-219" style={{ marginTop: '1rem' }} data-anim>
            <img className="ph" src="/assets/img/ph-workshop.webp" alt="System architecture planning session" width={1600} height={762} />
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
              <div className="eyebrow" data-anim>Core Capabilities</div>
              <h2 className="kin-h" data-anim>Engineered around how your business works</h2>
            </div>
            <div>
              <p className="lead" data-anim>
                From high-performance web storefronts to internal operations platforms and cloud infrastructure.
              </p>
              <Link className="arrow-link" href="/services" data-anim>View all capabilities <span className="gt">&rsaquo;</span></Link>
            </div>
          </div>

          {/* Premium Capabilities Presentation */}
          <div style={{ display: "grid", gridTemplateColumns: "minmax(300px, 1.2fr) 1fr", gap: "2rem", marginTop: "2rem" }}>
            {/* Dominant Feature: Websites */}
            <article className="glass card cap-feature" data-anim data-delay="0" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "450px" }}>
              <div style={{ padding: "2.5rem" }}>
                <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "56px", height: "56px", borderRadius: "12px", background: "rgba(0, 229, 255, 0.1)", color: "var(--acc)", marginBottom: "2rem" }}>
                  <AxioIcon name="web-apps" size={32} aria-hidden="true" />
                </div>
                <h3 style={{ fontSize: "2rem", marginBottom: "1rem", lineHeight: 1.1, color: "var(--ink)", letterSpacing: "-0.02em" }}>Websites &amp; Web Experiences</h3>
                <p style={{ fontSize: "1.1rem", color: "var(--muted)", lineHeight: 1.6, maxWidth: "35ch" }}>
                  High-performance, search-optimized web architectures on Next.js. Sub-second load times, zero layout shifts, complete code ownership.
                </p>
              </div>
              <div style={{ padding: "0 2.5rem 2.5rem" }}>
                <Link href="/services/websites" className="btn btn-primary">
                  Explore websites <span className="gt">&rsaquo;</span>
                </Link>
              </div>
            </article>

            {/* Supporting Capabilities: Feature Strip List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              
              <Link href="/services/digital-products" className="glass card" data-anim data-delay="60" style={{ display: "flex", alignItems: "center", gap: "1.5rem", padding: "1.5rem", textDecoration: "none", transition: "all 0.2s ease" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "8px", background: "rgba(255,255,255,0.05)", color: "var(--ink)" }}>
                  <AxioIcon name="mobile-apps" size={20} aria-hidden="true" />
                </div>
                <div>
                  <h4 style={{ margin: "0 0 0.2rem", fontSize: "1.1rem", color: "var(--ink)", fontWeight: 600 }}>Digital Products</h4>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--muted)" }}>Interactive web applications with deterministic state.</p>
                </div>
              </Link>
              
              <Link href="/services/business-systems" className="glass card" data-anim data-delay="120" style={{ display: "flex", alignItems: "center", gap: "1.5rem", padding: "1.5rem", textDecoration: "none", transition: "all 0.2s ease" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "8px", background: "rgba(255,255,255,0.05)", color: "var(--ink)" }}>
                  <AxioIcon name="integration" size={20} aria-hidden="true" />
                </div>
                <div>
                  <h4 style={{ margin: "0 0 0.2rem", fontSize: "1.1rem", color: "var(--ink)", fontWeight: 600 }}>Business Systems</h4>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--muted)" }}>Automated workflows that eliminate manual error.</p>
                </div>
              </Link>

              <Link href="/services/platforms" className="glass card" data-anim data-delay="180" style={{ display: "flex", alignItems: "center", gap: "1.5rem", padding: "1.5rem", textDecoration: "none", transition: "all 0.2s ease" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "8px", background: "rgba(255,255,255,0.05)", color: "var(--ink)" }}>
                  <AxioIcon name="platforms" size={20} aria-hidden="true" />
                </div>
                <div>
                  <h4 style={{ margin: "0 0 0.2rem", fontSize: "1.1rem", color: "var(--ink)", fontWeight: 600 }}>Platforms</h4>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--muted)" }}>Scalable transactional systems for complex logic.</p>
                </div>
              </Link>

              <Link href="/services/software-infrastructure" className="glass card" data-anim data-delay="240" style={{ display: "flex", alignItems: "center", gap: "1.5rem", padding: "1.5rem", textDecoration: "none", transition: "all 0.2s ease" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "8px", background: "rgba(255,255,255,0.05)", color: "var(--ink)" }}>
                  <AxioIcon name="infrastructure" size={20} aria-hidden="true" />
                </div>
                <div>
                  <h4 style={{ margin: "0 0 0.2rem", fontSize: "1.1rem", color: "var(--ink)", fontWeight: 600 }}>Software Infrastructure</h4>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--muted)" }}>Resilient APIs, schemas, and high availability pipelines.</p>
                </div>
              </Link>
              
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="hscroll">
        <div className="wrap">
          <div className="s-head">
            <div>
              <div className="eyebrow" data-anim>Selected Work</div>
              <h2 className="kin-h" data-anim>Software proven in production</h2>
            </div>
            <div>
              <p className="lead" data-anim>
                Live systems. Fully testable.
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
                  <p>Complete headless commerce architecture featuring persistent cart state, dynamic variant matrices, promo engine, and three-step checkout.</p>
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
                  <p>High-density workflow studio with keyboard command palette, interactive node-graph canvas, and real-time execution engine.</p>
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
                  <p>Operations platform replacing multi-sheet friction with real-time pipeline telemetry, role permissions, and client-side data export.</p>
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
              <p className="lead" data-anim>A disciplined engineering lifecycle. Predictable production outcomes.</p>
            </div>
          </div>
          <div className="steps" style={{ borderColor: 'rgba(255,255,255,.16)' }}>
            <div className="step" data-anim data-delay="0">
              <div className="n">01</div>
              <div>
                <AxioIcon name="research" size={20} className="section__icon" aria-hidden="true" style={{ marginBottom: "0.5rem" }} />
                <h3>Analyze &amp; Scope</h3>
                <p>We map your user journeys, data requirements, and operational constraints before writing any code.</p>
              </div>
            </div>
            <div className="step" data-anim data-delay="60">
              <div className="n">02</div>
              <div>
                <AxioIcon name="system-architecture" size={20} className="section__icon" aria-hidden="true" style={{ marginBottom: "0.5rem" }} />
                <h3>Architect</h3>
                <p>Designing database schemas, API contracts, security policies, and component hierarchies for long-term maintainability.</p>
              </div>
            </div>
            <div className="step" data-anim data-delay="120">
              <div className="n">03</div>
              <div>
                <AxioIcon name="software-engineering" size={20} className="section__icon" aria-hidden="true" style={{ marginBottom: "0.5rem" }} />
                <h3>Build &amp; Test</h3>
                <p>TypeScript-first development with strict typing, automated linting, Core Web Vitals checks, and cross-device testing.</p>
              </div>
            </div>
            <div className="step" data-anim data-delay="180">
              <div className="n">04</div>
              <div>
                <AxioIcon name="deployment" size={20} className="section__icon" aria-hidden="true" style={{ marginBottom: "0.5rem" }} />
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
              <div className="eyebrow" data-anim>Technology Stack</div>
              <h2 className="kin-h" data-anim>Proven, high-performance stack</h2>
              <p className="lead" data-anim>
                Proven technologies. Long-term maintainability. No fragile abstractions.
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
                <span className="dt-cat"><span className="icon-label"><AxioIcon name="core-web-vitals" size={12} aria-hidden="true" />Performance</span></span>
                <h3 style={{ marginBottom: "1rem" }}>Fixing Core Web Vitals in Next.js Apps</h3>
                <span className="dt-cta"><span className="icon-label">Read guide <AxioIcon name="arrow-right" size={12} aria-hidden="true" /></span></span>
              </div>
            </Link>
            <Link className="glass card art-card" href="/blog/how-much-does-a-website-cost" data-anim data-delay="70">
              <div className="rv zoom ar-16"><img className="ph" src="/assets/img/ph-ai.webp" alt="Architecture" width={1600} height={1000} /></div>
              <div className="ac-body">
                <span className="dt-cat"><span className="icon-label"><AxioIcon name="roi" size={12} aria-hidden="true" />Pricing</span></span>
                <h3 style={{ marginBottom: "1rem" }}>The real cost of website development in 2026</h3>
                <span className="dt-cta"><span className="icon-label">Read guide <AxioIcon name="arrow-right" size={12} aria-hidden="true" /></span></span>
              </div>
            </Link>
            <Link className="glass card art-card" href="/blog/website-security-checklist-small-business" data-anim data-delay="140">
              <div className="rv zoom ar-16"><img className="ph" src="/assets/img/ph-social.webp" alt="Security" width={1600} height={1000} /></div>
              <div className="ac-body">
                <span className="dt-cat"><span className="icon-label"><AxioIcon name="security" size={12} aria-hidden="true" />Security</span></span>
                <h3 style={{ marginBottom: "1rem" }}>Website security checklist for small businesses</h3>
                <span className="dt-cta"><span className="icon-label">Read guide <AxioIcon name="arrow-right" size={12} aria-hidden="true" /></span></span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
