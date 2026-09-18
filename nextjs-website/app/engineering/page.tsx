import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Engineering Philosophy & Technical Standards | Axio Future",
  description: "How Axio Future approaches software architecture, TypeScript, Next.js, Node.js, PostgreSQL, API contracts, security, and performance optimization.",
};

export default function Page() {
  return (
    <SiteShell showCta={true}>
      <main id="main">
        <section className="phero"><div className="wrap">
 <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <span aria-current="page">Engineering</span></nav>
 <div className="hero-grid">
  <div>
   <div className="eyebrow" data-anim>Technical Authority · System Standards</div>
   <h1 className="kin-h">How we engineer systems.</h1>
  </div>
  <div>
   <p className="lead" data-anim data-delay="120">
    Software is not an aesthetic wrapper over third-party plugins. It is a connected system of state machines, data integrity guarantees, security boundaries, and infrastructure reliability. Here is how and why Axio Future designs, builds, and deploys every technical layer.
   </p>
   <div className="hero-cta" data-anim data-delay="180">
    <Link className="btn btn-primary" href="/projects"><span>Explore working builds</span><span className="gt">&rsaquo;</span></Link>
    <Link className="btn" href="/contact"><span>Discuss technical requirements</span></Link>
   </div>
  </div>
 </div>
</div></section>

{/* Core Engineering Principles */}
<section className="band"><div className="wrap">
 <div className="s-head">
  <div>
   <div className="eyebrow" data-anim>Foundational Principles</div>
   <h2 className="kin-h" data-anim>Architectural tenets we build by</h2>
  </div>
  <div>
   <p className="lead" data-anim>We eliminate fragile abstractions and speculative complexity in favor of clear, maintainable, and observable codebases.</p>
  </div>
 </div>
 <div style={{"display":"flex","flexDirection":"column","gap":"4rem","marginTop":"3rem"}}>
  <div data-anim style={{"display":"grid","gridTemplateColumns":"minmax(80px, auto) 1fr","gap":"2rem","alignItems":"start","borderTop":"2px solid var(--ink)","paddingTop":"1.5rem"}}>
    <span style={{"fontSize":"4rem","fontWeight":"700","color":"var(--ink)","lineHeight":"0.8","letterSpacing":"-0.05em"}}>01</span>
    <div>
      <h3 style={{"fontSize":"1.6rem","margin":"0 0 0.8rem","color":"var(--ink)"}}>Deterministic State</h3>
      <p style={{"color":"var(--muted)","margin":"0","lineHeight":"1.6","fontSize":"1.1rem","maxWidth":"50ch"}}>Shared implicit state causes bugs. We enforce explicit, uni-directional data flow with immutable state updates.</p>
    </div>
  </div>
  <div data-anim style={{"display":"grid","gridTemplateColumns":"minmax(80px, auto) 1fr","gap":"2rem","alignItems":"start","borderTop":"2px solid var(--ink)","paddingTop":"1.5rem"}}>
    <span style={{"fontSize":"4rem","fontWeight":"700","color":"var(--ink)","lineHeight":"0.8","letterSpacing":"-0.05em"}}>02</span>
    <div>
      <h3 style={{"fontSize":"1.6rem","margin":"0 0 0.8rem","color":"var(--ink)"}}>Strict Contracts</h3>
      <p style={{"color":"var(--muted)","margin":"0","lineHeight":"1.6","fontSize":"1.1rem","maxWidth":"50ch"}}>Boundaries between frontend, API, and database are enforced by typed schemas. The build breaks before deployment.</p>
    </div>
  </div>
  <div data-anim style={{"display":"grid","gridTemplateColumns":"minmax(80px, auto) 1fr","gap":"2rem","alignItems":"start","borderTop":"2px solid var(--ink)","paddingTop":"1.5rem"}}>
    <span style={{"fontSize":"4rem","fontWeight":"700","color":"var(--ink)","lineHeight":"0.8","letterSpacing":"-0.05em"}}>03</span>
    <div>
      <h3 style={{"fontSize":"1.6rem","margin":"0 0 0.8rem","color":"var(--ink)"}}>Minimal Weight</h3>
      <p style={{"color":"var(--muted)","margin":"0","lineHeight":"1.6","fontSize":"1.1rem","maxWidth":"50ch"}}>We prioritize native web standards and lean utility abstractions over importing mega-libraries for trivial tasks.</p>
    </div>
  </div>
 </div>
</div></section>

{/* Detailed Stack Breakdown */}
<section><div className="wrap">
 <div className="s-head">
  <div>
   <div className="eyebrow" data-anim>Stack &amp; Decisions</div>
   <h2 className="kin-h" data-anim>Why and how we use each technology</h2>
  </div>
  <div>
   <p className="lead" data-anim>We do not list technologies as marketing badges. We choose tools based on measurable trade-offs in type safety, runtime cost, and long-term maintainability.</p>
  </div>
 </div>

 <div style={{"marginTop":"3rem","display":"flex","flexDirection":"column","gap":"1rem"}}>
  {/* Layer 1: Frontend */}
  <details className="stack-layer" data-anim style={{"background":"var(--surface)","border":"1px solid var(--rule)","borderRadius":"12px","overflow":"hidden","cursor":"pointer"}}>
    <summary style={{"display":"flex","justifyContent":"space-between","alignItems":"center","padding":"1.5rem 2rem","listStyle":"none","fontSize":"1.3rem","fontWeight":"500","color":"var(--ink)"}}>
      <div style={{"display":"flex","alignItems":"center","gap":"1rem"}}>
        <span style={{"display":"flex","alignItems":"center","justifyContent":"center","width":"32px","height":"32px","background":"rgba(0,229,255,0.1)","color":"var(--acc)","borderRadius":"8px","fontSize":"1rem","fontWeight":"700"}}>1</span>
        Frontend Layer: TypeScript &amp; Next.js
      </div>
      <span style={{"color":"var(--acc)","fontSize":"1.5rem"}}>+</span>
    </summary>
    <div style={{"padding":"0 2rem 2rem","borderTop":"1px dashed var(--rule)","marginTop":"-0.5rem","paddingTop":"1.5rem"}}>
      <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(250px, 1fr))","gap":"2rem"}}>
        <div>
          <div style={{"fontSize":"0.8rem","textTransform":"uppercase","letterSpacing":"0.05em","color":"var(--muted)","marginBottom":"0.5rem"}}>Why</div>
          <p style={{"margin":"0","color":"var(--ink)","lineHeight":"1.6"}}>Eliminate runtime null errors and enable safe refactoring. Strict typed props and zero unused CSS.</p>
        </div>
        <div>
          <div style={{"fontSize":"0.8rem","textTransform":"uppercase","letterSpacing":"0.05em","color":"var(--acc)","marginBottom":"0.5rem"}}>Decision</div>
          <p style={{"margin":"0","color":"var(--ink)","lineHeight":"1.6"}}>Use <strong>TypeScript</strong> in strict mode. Use <strong>Next.js App Router</strong> for zero-JS static HTML from hydrated interactive Canvas elements, ensuring sub-second LCP.</p>
        </div>
      </div>
    </div>
  </details>

  {/* Layer 2: Backend */}
  <details className="stack-layer" data-anim style={{"background":"var(--surface)","border":"1px solid var(--rule)","borderRadius":"12px","overflow":"hidden","cursor":"pointer"}}>
    <summary style={{"display":"flex","justifyContent":"space-between","alignItems":"center","padding":"1.5rem 2rem","listStyle":"none","fontSize":"1.3rem","fontWeight":"500","color":"var(--ink)"}}>
      <div style={{"display":"flex","alignItems":"center","gap":"1rem"}}>
        <span style={{"display":"flex","alignItems":"center","justifyContent":"center","width":"32px","height":"32px","background":"rgba(0,229,255,0.1)","color":"var(--acc)","borderRadius":"8px","fontSize":"1rem","fontWeight":"700"}}>2</span>
        Backend &amp; Logic: Node.js
      </div>
      <span style={{"color":"var(--acc)","fontSize":"1.5rem"}}>+</span>
    </summary>
    <div style={{"padding":"0 2rem 2rem","borderTop":"1px dashed var(--rule)","marginTop":"-0.5rem","paddingTop":"1.5rem"}}>
      <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(250px, 1fr))","gap":"2rem"}}>
        <div>
          <div style={{"fontSize":"0.8rem","textTransform":"uppercase","letterSpacing":"0.05em","color":"var(--muted)","marginBottom":"0.5rem"}}>Why</div>
          <p style={{"margin":"0","color":"var(--ink)","lineHeight":"1.6"}}>Ensure resilient handling of concurrent I/O operations and guarantee payload validity before execution.</p>
        </div>
        <div>
          <div style={{"fontSize":"0.8rem","textTransform":"uppercase","letterSpacing":"0.05em","color":"var(--acc)","marginBottom":"0.5rem"}}>Decision</div>
          <p style={{"margin":"0","color":"var(--ink)","lineHeight":"1.6"}}>Engineer asynchronous architectures in <strong>Node.js</strong>. Validate payloads via Zod. Implement idempotency keys for transactional actions.</p>
        </div>
      </div>
    </div>
  </details>

  {/* Layer 3: Data */}
  <details className="stack-layer" data-anim style={{"background":"var(--surface)","border":"1px solid var(--rule)","borderRadius":"12px","overflow":"hidden","cursor":"pointer"}}>
    <summary style={{"display":"flex","justifyContent":"space-between","alignItems":"center","padding":"1.5rem 2rem","listStyle":"none","fontSize":"1.3rem","fontWeight":"500","color":"var(--ink)"}}>
      <div style={{"display":"flex","alignItems":"center","gap":"1rem"}}>
        <span style={{"display":"flex","alignItems":"center","justifyContent":"center","width":"32px","height":"32px","background":"rgba(0,229,255,0.1)","color":"var(--acc)","borderRadius":"8px","fontSize":"1rem","fontWeight":"700"}}>3</span>
        Data Architecture: PostgreSQL
      </div>
      <span style={{"color":"var(--acc)","fontSize":"1.5rem"}}>+</span>
    </summary>
    <div style={{"padding":"0 2rem 2rem","borderTop":"1px dashed var(--rule)","marginTop":"-0.5rem","paddingTop":"1.5rem"}}>
      <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(250px, 1fr))","gap":"2rem"}}>
        <div>
          <div style={{"fontSize":"0.8rem","textTransform":"uppercase","letterSpacing":"0.05em","color":"var(--muted)","marginBottom":"0.5rem"}}>Why</div>
          <p style={{"margin":"0","color":"var(--ink)","lineHeight":"1.6"}}>Financial data and accounts require strict ACID compliance and normalized schemas to prevent corruption.</p>
        </div>
        <div>
          <div style={{"fontSize":"0.8rem","textTransform":"uppercase","letterSpacing":"0.05em","color":"var(--acc)","marginBottom":"0.5rem"}}>Decision</div>
          <p style={{"margin":"0","color":"var(--ink)","lineHeight":"1.6"}}>Model relational data in <strong>PostgreSQL</strong> with strict foreign keys. Unstructured event logs use MongoDB with indexed query paths.</p>
        </div>
      </div>
    </div>
  </details>
  
  {/* Layer 4: Infra */}
  <details className="stack-layer" data-anim style={{"background":"var(--surface)","border":"1px solid var(--rule)","borderRadius":"12px","overflow":"hidden","cursor":"pointer"}}>
    <summary style={{"display":"flex","justifyContent":"space-between","alignItems":"center","padding":"1.5rem 2rem","listStyle":"none","fontSize":"1.3rem","fontWeight":"500","color":"var(--ink)"}}>
      <div style={{"display":"flex","alignItems":"center","gap":"1rem"}}>
        <span style={{"display":"flex","alignItems":"center","justifyContent":"center","width":"32px","height":"32px","background":"rgba(0,229,255,0.1)","color":"var(--acc)","borderRadius":"8px","fontSize":"1rem","fontWeight":"700"}}>4</span>
        Infrastructure: Docker &amp; Edge
      </div>
      <span style={{"color":"var(--acc)","fontSize":"1.5rem"}}>+</span>
    </summary>
    <div style={{"padding":"0 2rem 2rem","borderTop":"1px dashed var(--rule)","marginTop":"-0.5rem","paddingTop":"1.5rem"}}>
      <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(250px, 1fr))","gap":"2rem"}}>
        <div>
          <div style={{"fontSize":"0.8rem","textTransform":"uppercase","letterSpacing":"0.05em","color":"var(--muted)","marginBottom":"0.5rem"}}>Why</div>
          <p style={{"margin":"0","color":"var(--ink)","lineHeight":"1.6"}}>Environments must be reproducible, and the perimeter must be hardened against OWASP Top 10 vulnerabilities.</p>
        </div>
        <div>
          <div style={{"fontSize":"0.8rem","textTransform":"uppercase","letterSpacing":"0.05em","color":"var(--acc)","marginBottom":"0.5rem"}}>Decision</div>
          <p style={{"margin":"0","color":"var(--ink)","lineHeight":"1.6"}}>Containerize with <strong>Docker</strong> behind hardened Nginx proxies. Enforce strict CSP, TLS 1.3, and sanitized inputs globally.</p>
        </div>
      </div>
    </div>
  </details>

 </div>
 <style dangerouslySetInnerHTML={{ __html: `
   details.stack-layer > summary { list-style: none; }
   details.stack-layer > summary::-webkit-details-marker { display: none; }
   details.stack-layer[open] summary span:last-child { transform: rotate(45deg); transition: transform 0.2s ease; }
 `}} />
</div></section>

{/* Interactive Proof Connection */}
<section className="band-dark"><div className="wrap">
 <div className="s-head" style={{"borderColor":"rgba(255,255,255,.16)"}}>
  <div>
   <div className="eyebrow" data-anim>Verifiable Implementation</div>
   <h2 className="kin-h" data-anim>Engineering proof in selected work</h2>
  </div>
  <div>
   <p className="lead" data-anim>We do not ask clients or technical buyers to take architectural competence on trust. Test the working implementations in our selected work:</p>
  </div>
 </div>

 <div style={{"display":"flex","flexDirection":"column","marginTop":"3rem","position":"relative"}} data-anim>
  {/* Connecting line */}
  <div style={{"position":"absolute","left":"16px","top":"0","bottom":"0","width":"2px","background":"rgba(255,255,255,0.1)","zIndex":"0"}}></div>

  <div style={{"display":"grid","gridTemplateColumns":"minmax(180px, 1fr) 2fr auto","gap":"2rem","alignItems":"center","padding":"1.5rem 0","borderBottom":"1px dashed rgba(255,255,255,0.1)","position":"relative","zIndex":"1"}}>
    <div style={{"display":"flex","alignItems":"center","gap":"1rem"}}>
      <div style={{"width":"34px","height":"34px","borderRadius":"50%","background":"var(--acc)","boxShadow":"0 0 10px rgba(0, 229, 255, 0.4)","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"0.75rem","color":"#000","fontWeight":"700"}}>01</div>
      <h3 style={{"margin":"0","fontSize":"1.2rem","color":"#fff"}}>Lumen Commerce</h3>
    </div>
    <div>
      <div style={{"fontSize":"0.75rem","textTransform":"uppercase","letterSpacing":"0.05em","color":"rgba(255,255,255,0.4)","marginBottom":"0.2rem"}}>Verified Result</div>
      <p style={{"margin":"0","color":"rgba(255,255,255,0.8)","fontSize":"0.95rem"}}>Headless e-commerce architecture verifying dynamic filtering and multi-step checkout.</p>
    </div>
    <Link className="btn btn-sm btn-primary" href="/projects/shop">Inspect architecture &rsaquo;</Link>
  </div>

  <div style={{"display":"grid","gridTemplateColumns":"minmax(180px, 1fr) 2fr auto","gap":"2rem","alignItems":"center","padding":"1.5rem 0","borderBottom":"1px dashed rgba(255,255,255,0.1)","position":"relative","zIndex":"1"}}>
    <div style={{"display":"flex","alignItems":"center","gap":"1rem"}}>
      <div style={{"width":"34px","height":"34px","borderRadius":"50%","background":"var(--acc)","boxShadow":"0 0 10px rgba(0, 229, 255, 0.4)","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"0.75rem","color":"#000","fontWeight":"700"}}>02</div>
      <h3 style={{"margin":"0","fontSize":"1.2rem","color":"#fff"}}>FLUX AI Studio</h3>
    </div>
    <div>
      <div style={{"fontSize":"0.75rem","textTransform":"uppercase","letterSpacing":"0.05em","color":"rgba(255,255,255,0.4)","marginBottom":"0.2rem"}}>Verified Result</div>
      <p style={{"margin":"0","color":"rgba(255,255,255,0.8)","fontSize":"0.95rem"}}>Desktop-grade IDE layout verifying complex browser canvas interactions and execution streaming.</p>
    </div>
    <Link className="btn btn-sm btn-primary" href="/projects/flux">Inspect architecture &rsaquo;</Link>
  </div>

  <div style={{"display":"grid","gridTemplateColumns":"minmax(180px, 1fr) 2fr auto","gap":"2rem","alignItems":"center","padding":"1.5rem 0","position":"relative","zIndex":"1"}}>
    <div style={{"display":"flex","alignItems":"center","gap":"1rem"}}>
      <div style={{"width":"34px","height":"34px","borderRadius":"50%","background":"var(--acc)","boxShadow":"0 0 10px rgba(0, 229, 255, 0.4)","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"0.75rem","color":"#000","fontWeight":"700"}}>03</div>
      <h3 style={{"margin":"0","fontSize":"1.2rem","color":"#fff"}}>RELAY Platform</h3>
    </div>
    <div>
      <div style={{"fontSize":"0.75rem","textTransform":"uppercase","letterSpacing":"0.05em","color":"rgba(255,255,255,0.4)","marginBottom":"0.2rem"}}>Verified Result</div>
      <p style={{"margin":"0","color":"rgba(255,255,255,0.8)","fontSize":"0.95rem"}}>Operational tooling architecture verifying memory-efficient table filtering and Kanban state transitions.</p>
    </div>
    <Link className="btn btn-sm btn-primary" href="/projects/relay">Inspect architecture &rsaquo;</Link>
  </div>
 </div>
</div></section>

{/* Methodological Progression */}
<section><div className="wrap narrow">
 <div className="center">
  <div className="eyebrow" data-anim>Engineering Lifecycle</div>
  <h2 className="kin-h" data-anim>From requirement to long-term system</h2>
  <p className="lead" data-anim style={{"marginTop":"0.8rem"}}>Every project follows an evidence-based lifecycle to prevent technical debt before it starts.</p>
 </div>

 <div className="grid g2" style={{"background":"none","gap":"1.5rem","marginTop":"2.5rem"}} data-anim>
  <div className="box">
   <h4>01. Discovery &amp; Domain Modeling</h4>
   <p style={{"color":"var(--txt-dim)","fontSize":"0.92rem","margin":"0"}}>We analyze your actual business workflows, edge cases, data structures, and user permissions before writing UI code.</p>
  </div>
  <div className="box">
   <h4>02. Interface &amp; Component Architecture</h4>
   <p style={{"color":"var(--txt-dim)","fontSize":"0.92rem","margin":"0"}}>We design reusable, accessible component tokens aligned with brand identity and responsive viewports.</p>
  </div>
  <div className="box">
   <h4>03. Schema Contracts &amp; Implementation</h4>
   <p style={{"color":"var(--txt-dim)","fontSize":"0.92rem","margin":"0"}}>We establish typed API contracts and database migrations, implementing features iteratively with unit and integration tests.</p>
  </div>
  <div className="box">
   <h4>04. Performance Tuning &amp; Production Hardening</h4>
   <p style={{"color":"var(--txt-dim)","fontSize":"0.92rem","margin":"0"}}>We audit Core Web Vitals, apply caching strategies, configure security headers, and execute automated deployment on fast infrastructure.</p>
  </div>
 </div>
</div></section>
      </main>
    </SiteShell>
  );
}
