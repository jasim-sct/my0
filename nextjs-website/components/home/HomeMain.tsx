import { Hero } from "./Hero";

export function HomeMain() {
  return (
    <main id="main">
        <Hero />

        {/* Marquee Banner */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            <span>PRODUCT ENGINEERING</span><span className="d">◆</span><span>SAAS PLATFORMS</span><span className="d">◆</span>
            <span>ENTERPRISE SOFTWARE</span><span className="d">◆</span><span>API ENGINEERING</span><span className="d">◆</span>
            <span>CLOUD SYSTEMS</span><span className="d">◆</span><span>FULL-STACK DEVELOPMENT</span><span className="d">◆</span>
            <span>SYSTEM MODERNIZATION</span><span className="d">◆</span><span>DIGITAL TRANSFORMATION</span><span className="d">◆</span>
            <span>PRODUCT ENGINEERING</span><span className="d">◆</span><span>SAAS PLATFORMS</span><span className="d">◆</span>
            <span>ENTERPRISE SOFTWARE</span><span className="d">◆</span><span>API ENGINEERING</span><span className="d">◆</span>
            <span>CLOUD SYSTEMS</span><span className="d">◆</span><span>FULL-STACK DEVELOPMENT</span><span className="d">◆</span>
            <span>SYSTEM MODERNIZATION</span><span className="d">◆</span><span>DIGITAL TRANSFORMATION</span><span className="d">◆</span>
          </div>
        </div>

        {/* Manifesto Position Section */}
        <section>
          <div className="wrap">
            <div className="s-head">
              <div>
                <div className="eyebrow" data-anim>Our position</div>
                <p className="manifesto">We are the engineering partner you hire when software needs to actually work at scale.</p>
              </div>
              <div>
                <p className="lead" data-anim>
                  No disconnected teams or bloated overhead. The architect who designs your system is leading the team that builds it. We deliver maintainable, performant, and secure software built for the long term.
                </p>
                <a className="arrow-link" href="/about" data-anim>Our engineering philosophy <span className="gt">&rsaquo;</span></a>
              </div>
            </div>
            <div className="grid g2" style={{ marginTop: '1rem' }}>
              <div className="rv ar-43" data-anim>
                <img className="ph" src="/assets/img/ph-workshop.webp" alt="System architecture planning session" width={1600} height={1000} />
              </div>
              <div className="rv ar-43" data-anim data-delay="90">
                <img className="ph" src="/assets/img/ph-whiteboard.webp" alt="Mapping cloud infrastructure on the wall" width={1600} height={1000} />
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Services Grid */}
        <section id="services" className="band">
          <div className="wrap">
            <div className="s-head">
              <div>
                <div className="eyebrow" data-anim>Capabilities</div>
                <h2 className="kin-h" data-anim>End-to-end software engineering</h2>
              </div>
              <div>
                <p className="lead" data-anim>
                  From concept to production-ready platforms, we provide specialized engineering across the full modern technology stack.
                </p>
                <a className="arrow-link" href="/services" data-anim>View all capabilities <span className="gt">&rsaquo;</span></a>
              </div>
            </div>
            <div className="grid g4">
              <article className="glass card pillar" data-anim data-delay="0">
                <span className="idx">01 / Eng</span>
                <h3>Product Engineering</h3><p>End-to-end development of digital products that scale.</p>
                <div className="p-links">
                  <a href="/services/product-engineering" className="pl">Learn more →</a>
                </div>
              </article>
              <article className="glass card pillar" data-anim data-delay="70">
                <span className="idx">02 / Eng</span>
                <h3>SaaS Development</h3><p>Multi-tenant architectures and recurring revenue platforms.</p>
                <div className="p-links">
                  <a href="/services/saas-development" className="pl">Learn more →</a>
                </div>
              </article>
              <article className="glass card pillar" data-anim data-delay="140">
                <span className="idx">03 / Eng</span>
                <h3>Enterprise Software</h3><p>Secure, compliant systems integrated with core operations.</p>
                <div className="p-links">
                  <a href="/services/enterprise-software" className="pl">Learn more →</a>
                </div>
              </article>
              <article className="glass card pillar" data-anim data-delay="210">
                <span className="idx">04 / Eng</span>
                <h3>Web Applications</h3><p>Fast, interactive web apps built on modern frameworks.</p>
                <div className="p-links">
                  <a href="/services/web-applications" className="pl">Learn more →</a>
                </div>
              </article>
              <article className="glass card pillar" data-anim data-delay="0">
                <span className="idx">05 / Infra</span>
                <h3>API & Backend</h3><p>Robust microservices, APIs, and data architecture.</p>
                <div className="p-links">
                  <a href="/services/api-backend" className="pl">Learn more →</a>
                </div>
              </article>
              <article className="glass card pillar" data-anim data-delay="70">
                <span className="idx">06 / Infra</span>
                <h3>Cloud Systems</h3><p>AWS/GCP deployments, Kubernetes, and CI/CD pipelines.</p>
                <div className="p-links">
                  <a href="/services/cloud-infrastructure" className="pl">Learn more →</a>
                </div>
              </article>
              <article className="glass card pillar" data-anim data-delay="140">
                <span className="idx">07 / Infra</span>
                <h3>UI Engineering</h3><p>Design systems, component libraries, and accessibility.</p>
                <div className="p-links">
                  <a href="/services/ui-engineering" className="pl">Learn more →</a>
                </div>
              </article>
              <article className="glass card pillar" data-anim data-delay="210">
                <span className="idx">08 / Infra</span>
                <h3>Modernization</h3><p>Migrating legacy applications to modern cloud stacks.</p>
                <div className="p-links">
                  <a href="/services/system-modernization" className="pl">Learn more →</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Live Builds Horizontal Slider */}
        <section className="hscroll">
          <div className="wrap">
            <div className="s-head">
              <div>
                <div className="eyebrow" data-anim>Engineering Showcases</div>
                <h2 className="kin-h" data-anim>Production implementations</h2>
              </div>
              <div>
                <p className="lead" data-anim>
                  We don't just show wireframes. Explore these live, fully-functional web applications built to demonstrate our architectural standards and UI engineering quality.
                </p>
                <a className="arrow-link" href="/projects" data-anim>All live showcases <span className="gt">&rsaquo;</span></a>
              </div>
            </div>
          </div>
          <div className="hscroll-sticky">
            <div className="wrap hscroll-scroller">
              <div className="hscroll-track">
                <a className="hscroll-panel demo-tile" href="/projects/shop">
                  <div className="dt-thumb">
                    <img className="ph dt-img" src="/assets/img/pj-shop.webp" alt="Lumen Commerce storefront and cart" width={1600} height={1000} />
                    <span className="proj-live">LIVE</span>
                  </div>
                  <div className="dt-body">
                    <span className="dt-cat">E-Commerce Architecture</span>
                    <h3>Lumen Commerce</h3>
                    <p>Catalogue, variants, persistent cart, promo codes, three-step checkout and order tracking — all working.</p>
                    <span className="dt-cta">Open it <span className="gt">&rsaquo;</span></span>
                  </div>
                </a>
                <a className="hscroll-panel demo-tile" href="/projects/flux">
                  <div className="dt-thumb">
                    <img className="ph dt-img" src="/assets/img/pj-flux.webp" alt="FLUX AI studio interface" width={1600} height={1000} />
                    <span className="proj-live">LIVE</span>
                  </div>
                  <div className="dt-body">
                    <span className="dt-cat">Complex UI · React Flow</span>
                    <h3>FLUX AI Studio</h3>
                    <p>Command palette, node-graph canvas, live agent trace with confidence scoring, workflow runner.</p>
                    <span className="dt-cta">Open it <span className="gt">&rsaquo;</span></span>
                  </div>
                </a>
                <a className="hscroll-panel demo-tile" href="/projects/relay">
                  <div className="dt-thumb">
                    <img className="ph dt-img" src="/assets/img/pj-relay.webp" alt="RELAY operations platform" width={1600} height={1000} />
                    <span className="proj-live">LIVE</span>
                  </div>
                  <div className="dt-body">
                    <span className="dt-cat">SaaS Dashboard</span>
                    <h3>RELAY Platform</h3>
                    <p>Kanban board, scraper pipeline, lead table with CSV export, real-time sync and data visualization.</p>
                    <span className="dt-cta">Open it <span className="gt">&rsaquo;</span></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="band-dark">
          <div className="wrap">
            <div className="s-head" style={{ borderColor: 'rgba(255,255,255,.16)' }}>
              <div>
                <div className="eyebrow" data-anim>Methodology</div>
                <h2 className="kin-h" data-anim>How we ship software</h2>
              </div>
              <div>
                <p className="lead" data-anim>A structured engineering process optimized for rapid delivery, low technical debt, and absolute transparency.</p>
              </div>
            </div>
            <div className="steps" style={{ borderColor: 'rgba(255,255,255,.16)' }}>
              <div className="step" data-anim data-delay="0"><div className="n">01</div><div><h3>Understand</h3><p>We analyze your business logic, data models, and scale requirements before writing a line of code.</p></div></div>
              <div className="step" data-anim data-delay="60"><div className="n">02</div><div><h3>Architect</h3><p>Designing the system infrastructure, API contracts, and database schemas for maximum reliability.</p></div></div>
              <div className="step" data-anim data-delay="120"><div className="n">03</div><div><h3>Build</h3><p>Iterative development with strict code reviews, automated testing, and continuous integration.</p></div></div>
              <div className="step" data-anim data-delay="180"><div className="n">04</div><div><h3>Deploy</h3><p>Zero-downtime deployment to production environments with full observability and monitoring setup.</p></div></div>
            </div>
          </div>
        </section>

        {/* Client Reviews */}
        <section className="band">
          <div className="wrap">
            <div className="s-head">
              <div>
                <div className="eyebrow" data-anim>Outcomes</div>
                <h2 className="kin-h" data-anim>System impact</h2>
              </div>
              <div>
                <p className="note" data-anim>Feedback from CTOs and product leaders on our engineering delivery.</p>
              </div>
            </div>
            <div className="grid g4">
              <article className="glass card" data-anim data-delay="0">
                <div className="stars">★★★★★</div>
                <p className="quote">"Axon Future completely modernized our legacy backend. Response times dropped by 80% and the new microservices architecture is beautifully documented."</p>
                <div className="who">
                  <span className="avatar"><img className="ph" src="/assets/img/pf-1.webp" alt="Client portrait" width={400} height={400} /></span>
                  <div><strong>Michael J.</strong><small>VP Engineering · FinTech</small></div>
                </div>
              </article>
              <article className="glass card" data-anim data-delay="70">
                <div className="stars">★★★★★</div>
                <p className="quote">"The SaaS platform they built for us handles thousands of concurrent users flawlessly. The code quality and automated test coverage gave us total confidence."</p>
                <div className="who">
                  <span className="avatar"><img className="ph" src="/assets/img/pf-2.webp" alt="Client portrait" width={400} height={400} /></span>
                  <div><strong>Sarah A.</strong><small>Founder · SaaS Startup</small></div>
                </div>
              </article>
              <article className="glass card" data-anim data-delay="140">
                <div className="stars">★★★★★</div>
                <p className="quote">"They didn't just build what we asked for; they pushed back on bad architectural decisions and saved us months of future technical debt."</p>
                <div className="who">
                  <span className="avatar"><img className="ph" src="/assets/img/pf-3.webp" alt="Client portrait" width={400} height={400} /></span>
                  <div><strong>Sana D.</strong><small>CTO · Logistics Platform</small></div>
                </div>
              </article>
              <article className="glass card" data-anim data-delay="210">
                <div className="stars">★★★★★</div>
                <p className="quote">"The React design system they delivered accelerated our internal team's velocity by at least 3x. Highly recommend their UI engineering practice."</p>
                <div className="who">
                  <span className="avatar"><img className="ph" src="/assets/img/pf-4.webp" alt="Client portrait" width={400} height={400} /></span>
                  <div><strong>Priya N.</strong><small>Head of Product · HealthTech</small></div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Blog Writing Grid */}
        <section>
          <div className="wrap">
            <div className="s-head">
              <div>
                <div className="eyebrow" data-anim>Engineering Notes</div>
                <h2 className="kin-h" data-anim>Technical insights & guides</h2>
              </div>
              <div>
                <p className="lead" data-anim>Deep dives into system architecture, web performance, and modern development practices.</p>
                <a className="arrow-link" href="/blog" data-anim>All articles <span className="gt">&rsaquo;</span></a>
              </div>
            </div>
            <div className="grid g3">
              <a className="glass card art-card" href="/blog/core-web-vitals-fix-guide" data-anim data-delay="0">
                <div className="rv zoom ar-16"><img className="ph" src="/assets/img/ph-code.webp" alt="Code optimization" width={1600} height={1000} /></div>
                <div className="ac-body">
                  <span className="dt-cat">Performance</span>
                  <h3>Fixing Core Web Vitals in Next.js Apps</h3>
                  <p>A technical guide to eliminating layout shifts and optimizing LCP in React applications for perfect Lighthouse scores.</p>
                  <span className="dt-cta">Read · 9 min <span className="gt">&rsaquo;</span></span>
                </div>
              </a>
              <a className="glass card art-card" href="/blog/how-much-does-a-website-cost" data-anim data-delay="70">
                <div className="rv zoom ar-16"><img className="ph" src="/assets/img/ph-ai.webp" alt="Architecture" width={1600} height={1000} /></div>
                <div className="ac-body">
                  <span className="dt-cat">Architecture</span>
                  <h3>The real cost of custom web application development</h3>
                  <p>Breaking down the engineering hours required for authentication, databases, UI implementation, and infrastructure.</p>
                  <span className="dt-cta">Read · 8 min <span className="gt">&rsaquo;</span></span>
                </div>
              </a>
              <a className="glass card art-card" href="/blog/website-security-checklist-small-business" data-anim data-delay="140">
                <div className="rv zoom ar-16"><img className="ph" src="/assets/img/ph-social.webp" alt="Security" width={1600} height={1000} /></div>
                <div className="ac-body">
                  <span className="dt-cat">Security</span>
                  <h3>Web Application Security Checklist</h3>
                  <p>Essential security implementations from CSP headers to CSRF protection that every production app requires.</p>
                  <span className="dt-cta">Read · 9 min <span className="gt">&rsaquo;</span></span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="band-dark">
          <div className="wrap">
            <div className="grid g2" style={{ background: 'none', gap: 'clamp(24px,4vw,56px)', alignItems: 'center' }}>
              <div>
                <div className="eyebrow" data-anim>Our Stack</div>
                <h2 className="kin-h" data-anim>Modern, proven technologies</h2>
                <p className="lead" data-anim>We build on enterprise-grade frameworks and cloud infrastructure that guarantee security, scalability, and developer experience.</p>
                <div className="mk-row" data-anim>
                  <span className="mk-chip">Next.js / React</span>
                  <span className="mk-chip">TypeScript</span>
                  <span className="mk-chip">Node.js</span>
                  <span className="mk-chip">PostgreSQL</span>
                  <span className="mk-chip">GraphQL / REST</span>
                  <span className="mk-chip">AWS / Vercel</span>
                  <span className="mk-chip">Docker / k8s</span>
                  <span className="mk-chip">Tailwind / SCSS</span>
                </div>
              </div>
              <div className="rv ar-43" data-anim data-para="14">
                <img className="ph" src="/assets/img/ph-desk.webp" alt="Software engineering workstation" width={1600} height={1000} />
              </div>
            </div>
          </div>
        </section>
      
    </main>
  );
}

