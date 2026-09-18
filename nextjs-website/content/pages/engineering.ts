export const title = 'Engineering Philosophy & Technical Standards | Axon Future';
export const description = 'How Axon Future approaches software architecture, TypeScript, Next.js, Node.js, PostgreSQL, API contracts, security, and performance optimization.';

export const mainHtml = `<section class="phero"><div class="wrap">
 <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <span aria-current="page">Engineering</span></nav>
 <div class="hero-grid">
  <div>
   <div class="eyebrow" data-anim>Technical Authority · System Standards</div>
   <h1 class="kin-h">How we engineer systems.</h1>
  </div>
  <div>
   <p class="lead" data-anim data-delay="120">
    Software is not an aesthetic wrapper over third-party plugins. It is a connected system of state machines, data integrity guarantees, security boundaries, and infrastructure reliability. Here is how and why Axon Future designs, builds, and deploys every technical layer.
   </p>
   <div class="hero-cta" data-anim data-delay="180">
    <a class="btn btn-primary" href="/projects"><span>Explore working builds</span><span class="gt">&rsaquo;</span></a>
    <a class="btn" href="/contact"><span>Discuss technical requirements</span></a>
   </div>
  </div>
 </div>
</div></section>

<!-- Core Engineering Principles -->
<section class="band"><div class="wrap">
 <div class="s-head">
  <div>
   <div class="eyebrow" data-anim>Foundational Principles</div>
   <h2 class="kin-h" data-anim>Architectural tenets we build by</h2>
  </div>
  <div>
   <p class="lead" data-anim>We eliminate fragile abstractions and speculative complexity in favor of clear, maintainable, and observable codebases.</p>
  </div>
 </div>
 <div class="grid g3">
  <article class="glass card" data-anim data-delay="0">
   <span class="idx">01 / State</span>
   <h3>Deterministic State Over Hidden Magic</h3>
   <p>Shared implicit state is the root cause of production bugs. We enforce explicit, uni-directional data flow with immutable state updates and validated transitions.</p>
  </article>
  <article class="glass card" data-anim data-delay="60">
   <span class="idx">02 / Boundaries</span>
   <h3>Strict Contracts Between Layers</h3>
   <p>The boundary between frontend, API, and database must be enforced by typed schemas. When an API contract changes, the build breaks before deployment, not in production.</p>
  </article>
  <article class="glass card" data-anim data-delay="120">
   <span class="idx">03 / Weight</span>
   <h3>Minimal Runtime Dependencies</h3>
   <p>We do not import mega-libraries for trivial tasks. We prioritize native web standards, lean utility abstractions, and sub-100KB initial JavaScript payloads.</p>
  </article>
 </div>
</div></section>

<!-- Detailed Stack Breakdown -->
<section><div class="wrap">
 <div class="s-head">
  <div>
   <div class="eyebrow" data-anim>Stack &amp; Decisions</div>
   <h2 class="kin-h" data-anim>Why and how we use each technology</h2>
  </div>
  <div>
   <p class="lead" data-anim>We do not list technologies as marketing badges. We choose tools based on measurable trade-offs in type safety, runtime cost, and long-term maintainability.</p>
  </div>
 </div>

 <div class="grid g2" style="background:none;gap:clamp(20px,3vw,36px)">
  <!-- Frontend & UI -->
  <div class="glass card" style="padding:2.2rem" data-anim>
   <div class="eyebrow">Frontend Systems</div>
   <h3 style="margin:0.5rem 0 0.8rem">TypeScript &amp; Next.js App Router</h3>
   <p>We use <strong>TypeScript</strong> in strict mode across every client application. This eliminates entire classes of runtime null errors and enables instant, self-documenting refactoring as applications grow.</p>
   <p>With <strong>Next.js App Router</strong>, we separate Server Components from Client Components. Static marketing and catalog pages are prerendered as zero-JS HTML, while dynamic forms and interactive canvases hydrate selectively.</p>
   <ul class="tick" style="margin-top:1rem">
    <li>Strict TypeScript configurations with zero <code>any</code> allowances</li>
    <li>Sub-second Largest Contentful Paint (LCP) and zero Cumulative Layout Shift (CLS)</li>
    <li>Semantic HTML elements with keyboard accessibility (WCAG 2.1 AA)</li>
    <li>Native CSS variables and responsive Grid/Flexbox over heavy UI utility runtimes</li>
   </ul>
  </div>

  <!-- Backend & APIs -->
  <div class="glass card" style="padding:2.2rem" data-anim data-delay="60">
   <div class="eyebrow">Backend &amp; Integrations</div>
   <h3 style="margin:0.5rem 0 0.8rem">Node.js, Express &amp; NestJS Services</h3>
   <p>For backend systems, we engineer asynchronous I/O architectures in <strong>Node.js</strong>, leveraging Express for lightweight services and NestJS for domain-driven enterprise business logic.</p>
   <p>Every REST endpoint validates input payloads via schema validation libraries (Zod / Joi) before hitting business controllers. We implement idempotency keys for transactional actions to prevent double-submissions.</p>
   <ul class="tick" style="margin-top:1rem">
    <li>Strict request payload and query validation before business logic execution</li>
    <li>Idempotent transactional mutations for payments and state changes</li>
    <li>Structured JSON logging with request correlation IDs for rapid debugging</li>
    <li>Token-bucket rate limiting and circuit breakers on third-party integrations</li>
   </ul>
  </div>

  <!-- Data & Persistence -->
  <div class="glass card" style="padding:2.2rem" data-anim>
   <div class="eyebrow">Data Architecture</div>
   <h3 style="margin:0.5rem 0 0.8rem">PostgreSQL &amp; MongoDB Workloads</h3>
   <p>We choose databases based on data relational topology rather than fashion. Relational financial data, customer accounts, and order histories are modeled in normalized <strong>PostgreSQL</strong> schemas with strict foreign keys and check constraints.</p>
   <p>Dynamic event logs, unstructured product catalogs, and semi-structured workflow metadata are persisted in <strong>MongoDB</strong> with indexed query paths and document schema validation.</p>
   <ul class="tick" style="margin-top:1rem">
    <li>ACID-compliant transactions for multi-entity business mutations</li>
    <li>Optimized B-tree and GIN indexing for fast filtering on high-volume tables</li>
    <li>Connection pooling via PgBouncer to prevent database thread starvation</li>
    <li>Automated point-in-time recovery (PITR) and encrypted backup snapshots</li>
   </ul>
  </div>

  <!-- Infrastructure & Security -->
  <div class="glass card" style="padding:2.2rem" data-anim data-delay="60">
   <div class="eyebrow">Infrastructure &amp; Security</div>
   <h3 style="margin:0.5rem 0 0.8rem">Nginx, Docker &amp; Edge Delivery</h3>
   <p>Applications are containerized with multi-stage <strong>Docker</strong> builds, ensuring deterministic local development and identical production artifacts. Services run behind hardened <strong>Nginx</strong> reverse proxies.</p>
   <p>We enforce OWASP Top 10 defenses on every deployment: strict Content Security Policy (CSP), HTTP Strict Transport Security (HSTS), rate limiting, and sanitized user inputs.</p>
   <ul class="tick" style="margin-top:1rem">
    <li>Automated Let's Encrypt SSL/TLS certificate renewal with TLS 1.3 encryption</li>
    <li>Security headers: CSP, X-Content-Type-Options, Referrer-Policy, Frame-Options</li>
    <li>Edge CDN caching with granular Cache-Control and stale-while-revalidate headers</li>
    <li>Stateless application containers ready for horizontal scale and zero-downtime rollouts</li>
   </ul>
  </div>
 </div>
</div></section>

<!-- Interactive Proof Connection -->
<section class="band-dark"><div class="wrap">
 <div class="s-head" style="border-color:rgba(255,255,255,.16)">
  <div>
   <div class="eyebrow" data-anim>Verifiable Implementation</div>
   <h2 class="kin-h" data-anim>Engineering proof in selected work</h2>
  </div>
  <div>
   <p class="lead" data-anim>We do not ask clients or technical buyers to take architectural competence on trust. Test the working implementations in our selected work:</p>
  </div>
 </div>

 <div class="grid g3">
  <article class="glass card" data-anim data-delay="0">
   <span class="idx">Proof 01</span>
   <h3>Lumen Commerce</h3>
   <p>Headless e-commerce architecture verifying dynamic category filtering, persistent cart state across browser reloads, promo logic, and a multi-step checkout wizard without third-party platform bloat.</p>
   <div class="hero-cta" style="margin-top:1rem">
    <a class="arrow-link" href="/projects/shop">Inspect architecture &rsaquo;</a>
   </div>
  </article>

  <article class="glass card" data-anim data-delay="60">
   <span class="idx">Proof 02</span>
   <h3>FLUX AI Studio</h3>
   <p>Desktop-grade IDE layout verifying complex browser canvas interactions: ⌘K command dispatcher, SVG bezier curve rendering between node connectors, and asynchronous execution streaming.</p>
   <div class="hero-cta" style="margin-top:1rem">
    <a class="arrow-link" href="/projects/flux">Inspect architecture &rsaquo;</a>
   </div>
  </article>

  <article class="glass card" data-anim data-delay="120">
   <span class="idx">Proof 03</span>
   <h3>RELAY Platform</h3>
   <p>Operational tooling architecture verifying memory-efficient table filtering, client-side CSV serialization using the Blob API, and state machine column transitions on an interactive Kanban board.</p>
   <div class="hero-cta" style="margin-top:1rem">
    <a class="arrow-link" href="/projects/relay">Inspect architecture &rsaquo;</a>
   </div>
  </article>
 </div>
</div></section>

<!-- Methodological Progression -->
<section><div class="wrap narrow">
 <div class="center">
  <div class="eyebrow" data-anim>Engineering Lifecycle</div>
  <h2 class="kin-h" data-anim>From requirement to long-term system</h2>
  <p class="lead" data-anim style="margin-top:0.8rem">Every project follows an evidence-based lifecycle to prevent technical debt before it starts.</p>
 </div>

 <div class="grid g2" style="background:none;gap:1.5rem;margin-top:2.5rem" data-anim>
  <div class="box">
   <h4>01. Discovery &amp; Domain Modeling</h4>
   <p style="color:var(--txt-dim);font-size:0.92rem;margin:0">We analyze your actual business workflows, edge cases, data structures, and user permissions before writing UI code.</p>
  </div>
  <div class="box">
   <h4>02. Interface &amp; Component Architecture</h4>
   <p style="color:var(--txt-dim);font-size:0.92rem;margin:0">We design reusable, accessible component tokens aligned with brand identity and responsive viewports.</p>
  </div>
  <div class="box">
   <h4>03. Schema Contracts &amp; Implementation</h4>
   <p style="color:var(--txt-dim);font-size:0.92rem;margin:0">We establish typed API contracts and database migrations, implementing features iteratively with unit and integration tests.</p>
  </div>
  <div class="box">
   <h4>04. Performance Tuning &amp; Production Hardening</h4>
   <p style="color:var(--txt-dim);font-size:0.92rem;margin:0">We audit Core Web Vitals, apply caching strategies, configure security headers, and execute automated deployment on fast infrastructure.</p>
  </div>
 </div>
</div></section>`;

export const showCta = true;
