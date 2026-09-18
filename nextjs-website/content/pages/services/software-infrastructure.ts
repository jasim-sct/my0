export const title = 'Software Infrastructure & Backend Engineering | Axon Future';
export const description = 'Robust software infrastructure, typed REST APIs, PostgreSQL database architecture, and secure cloud deployment pipelines engineered by Axon Future.';

export const html = `
<section class="phero">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/services">Capabilities</a> / <span aria-current="page">Software Infrastructure</span></nav>
    <div class="hero-grid">
      <div>
        <div class="eyebrow" data-anim>Capabilities</div>
        <h1 class="kin-h">Backend systems, APIs, and cloud infrastructure.</h1>
      </div>
      <div>
        <p class="lead" data-anim data-delay="120">
          We engineer resilient backend architectures, typed REST APIs, normalized databases, and automated deployment pipelines that keep modern applications fast, secure, and available.
        </p>
        <div class="hero-cta" data-anim data-delay="180">
          <a class="btn btn-primary" href="/contact">
            <span>Discuss infrastructure requirements</span>
            <span class="gt">&rsaquo;</span>
          </a>
          <a class="btn" href="/projects/proto">
            <span>Explore PROTO Dossier</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 1. What is it? & 2. What problem does it solve? -->
<section class="band">
  <div class="wrap">
    <div class="grid g2" style="background:none;gap:clamp(24px,4vw,56px);align-items:center">
      <div data-anim="left">
        <div class="eyebrow">Stability &amp; Scale</div>
        <h2 class="kin-h">The foundations that prevent applications from falling over</h2>
        <p class="lead">
          Visual design and frontend features matter little if the backend suffers from slow database queries, fragile API endpoints, missing rate limits, or manual, error-prone deployment routines.
        </p>
        <p class="lead">
          Infrastructure engineering ensures your data remains consistent, your APIs respond in milliseconds, and your servers withstand traffic spikes with proper security headers and zero-downtime deployments.
        </p>
      </div>
      <div data-anim="right">
        <div class="rv zoom ar-43">
          <img class="ph" src="/assets/img/ph-whiteboard.webp" alt="Mapping cloud infrastructure and database topologies" width={1600} height={1000} loading="lazy" decoding="async">
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 3. What does Axon Future build? & 4. How is it approached? -->
<section>
  <div class="wrap">
    <div class="s-head">
      <div>
        <div class="eyebrow" data-anim>What We Build</div>
        <h2 class="kin-h" data-anim>Core backend engineering and server infrastructure</h2>
      </div>
      <div>
        <p class="lead" data-anim>
          Designed for predictability, observability, and strict security compliance from day one.
        </p>
      </div>
    </div>
    <div class="grid g3">
      <article class="glass card" data-anim data-delay="0">
        <span class="idx">01</span>
        <h3>Typed REST APIs &amp; Microservices</h3>
        <p>Type-safe request validation, input sanitization, rate-limiting, clear status codes, and comprehensive endpoint documentation.</p>
      </article>
      <article class="glass card" data-anim data-delay="60">
        <span class="idx">02</span>
        <h3>Database Architecture &amp; Migrations</h3>
        <p>Normalized relational schemas in PostgreSQL, indexed queries, connection pooling, and automated version-controlled migrations.</p>
      </article>
      <article class="glass card" data-anim data-delay="120">
        <span class="idx">03</span>
        <h3>Security Hardening &amp; CI/CD</h3>
        <p>Nginx reverse proxy setup, SSL certificate lifecycle management, OWASP-aligned CSP headers, and automated continuous deployment.</p>
      </article>
    </div>
  </div>
</section>

<!-- 5. Technologies & 6. Real Work -->
<section class="band-dark">
  <div class="wrap">
    <div class="grid g2" style="background:none;gap:clamp(24px,4vw,56px);align-items:center">
      <div>
        <div class="eyebrow" data-anim>Tech Stack &amp; Dossier</div>
        <h2 class="kin-h" data-anim>Evidence-based infrastructure decisions</h2>
        <p class="lead" data-anim>
          We rely on proven, production-grade tools: TypeScript, Node.js, NestJS, Express, PostgreSQL, MongoDB, Docker, Nginx, and cloud providers including AWS and Vercel.
        </p>
        <p class="lead" data-anim>
          Explore our technical dossier demonstrating security audit scoring and platform architecture evaluation:
        </p>
        <div class="mk-row" data-anim>
          <a href="/projects/proto" class="mk-chip">PROTO Technical Dossier &amp; Security Scorer →</a>
        </div>
      </div>
      <div class="rv ar-43" data-anim>
        <img class="ph" src="/assets/img/ph-desk.webp" alt="Infrastructure engineering console" width={1600} height={1000} />
      </div>
    </div>
  </div>
</section>

<!-- 7. Pricing & Consultation -->
<section class="band">
  <div class="wrap narrow">
    <div class="s-head">
      <div>
        <div class="eyebrow" data-anim>Investment</div>
        <h2 class="kin-h" data-anim>Custom solutions — Let's discuss your requirements</h2>
      </div>
      <div>
        <p class="lead" data-anim>
          Infrastructure projects are scoped around your data volumes, availability SLA requirements, compliance needs, and existing legacy codebases.
        </p>
      </div>
    </div>
    <div class="glass card" style="padding:2rem;" data-anim>
      <h3 style="margin-bottom:0.5rem;">Infrastructure Review</h3>
      <p style="color:var(--txt-dim);margin-bottom:1rem;">
        Contact our team for an initial architectural review of your API contracts, database bottlenecks, or cloud deployment strategy.
      </p>
      <a class="btn btn-primary" href="/contact"><span>Discuss infrastructure requirements</span><span class="gt">&rsaquo;</span></a>
    </div>
  </div>
</section>
`;