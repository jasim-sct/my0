export const title = 'Platform Engineering & E-Commerce Architectures | Axio Future';
export const description = 'Scalable e-commerce engines, multi-tenant SaaS platforms, and custom transaction systems engineered for high reliability and scale.';

export const html = `
<section class="phero">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/services">Capabilities</a> / <span aria-current="page">Platforms</span></nav>
    <div class="hero-grid">
      <div>
        <div class="eyebrow" data-anim>Capabilities</div>
        <h1 class="kin-h">Platforms engineered for scale, transactions, and multiple users.</h1>
      </div>
      <div>
        <p class="lead" data-anim data-delay="120">
          We architect scalable e-commerce systems, subscription billing engines, and multi-tenant SaaS platforms built for transaction volume and proprietary business rules.
        </p>
        <div class="hero-cta" data-anim data-delay="180">
          <a class="btn btn-primary" href="/contact">
            <span>Discuss your platform</span>
            <span class="gt">&rsaquo;</span>
          </a>
          <a class="btn" href="/projects/shop">
            <span>Explore Lumen Commerce</span>
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
        <div class="eyebrow">Architectural Limits</div>
        <h2 class="kin-h">Why cookie-cutter platforms limit business growth</h2>
        <p class="lead">
          Generic SaaS platforms or standard e-commerce plugins work initially, but quickly hit hard walls when you need custom checkout validation, tiered B2B pricing, complex multi-variant catalogs, or unique commission split rules.
        </p>
        <p class="lead">
          Platform engineering focuses on the underlying data models and transaction integrity, giving you the flexibility to adapt your software as your business model evolves without rewriting from scratch.
        </p>
      </div>
      <div data-anim="right">
        <div class="rv zoom ar-43">
          <img class="ph" src="/assets/img/ph-workshop.webp" alt="Platform architecture and database modeling" width={1600} height={1000} loading="lazy" decoding="async">
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 3. What does Axio Future build? & 4. How is it approached? -->
<section>
  <div class="wrap">
    <div class="s-head">
      <div>
        <div class="eyebrow" data-anim>What We Build</div>
        <h2 class="kin-h" data-anim>Multi-user software and commerce architectures</h2>
      </div>
      <div>
        <p class="lead" data-anim>
          From high-converting retail stores to multi-tenant software platforms with complex subscription tiers.
        </p>
      </div>
    </div>
    <div class="grid g3">
      <article class="glass card" data-anim data-delay="0">
        <span class="idx">01</span>
        <h3>Custom E-Commerce Engines</h3>
        <p>Product variant matrices, persistent carts surviving browser refreshes, promo code rules, and multi-step validated checkout flows.</p>
      </article>
      <article class="glass card" data-anim data-delay="60">
        <span class="idx">02</span>
        <h3>Multi-Tenant SaaS MVPs</h3>
        <p>Tenant isolation, organization hierarchies, user seat management, automated onboarding, and usage-based feature flags.</p>
      </article>
      <article class="glass card" data-anim data-delay="120">
        <span class="idx">03</span>
        <h3>Billing &amp; Invoicing Engines</h3>
        <p>Subscription management, automated invoice generation, webhook reconciliation, and payment gateway integrations (Stripe, Razorpay, UPI).</p>
      </article>
    </div>
  </div>
</section>

<!-- 5. Technologies & 6. Real Work -->
<section class="band-dark">
  <div class="wrap">
    <div class="grid g2" style="background:none;gap:clamp(24px,4vw,56px);align-items:center">
      <div>
        <div class="eyebrow" data-anim>Evidence &amp; Demonstrations</div>
        <h2 class="kin-h" data-anim>Interactive platform architectures</h2>
        <p class="lead" data-anim>
          We build platforms on Next.js, Node.js, PostgreSQL, Redis, and TypeScript. Test our live interactive platform builds:
        </p>
        <div class="mk-row" data-anim>
          <a href="/projects/shop" class="mk-chip">Lumen Commerce (Complete Store &amp; Checkout) →</a>
          <a href="/projects/volt" class="mk-chip">VOLT (SaaS Invoicing &amp; Billing Toggle) →</a>
        </div>
      </div>
      <div class="rv ar-43" data-anim>
        <img class="ph" src="/assets/img/ph-desk.webp" alt="Platform development environment" width={1600} height={1000} />
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
          Platform development is scoped around your data structures, security requirements, transaction volume, and third-party integrations. We provide transparent architectural milestones and fixed-fee deliverables.
        </p>
      </div>
    </div>
    <div class="glass card" style="padding:2rem;" data-anim>
      <h3 style="margin-bottom:0.5rem;">Start the conversation</h3>
      <p style="color:var(--txt-dim);margin-bottom:1rem;">
        Speak directly with an engineer to assess architectural requirements, payment flow compliance, and technical milestones.
      </p>
      <a class="btn btn-primary" href="/contact"><span>Discuss your platform requirements</span><span class="gt">&rsaquo;</span></a>
    </div>
  </div>
</section>
`;