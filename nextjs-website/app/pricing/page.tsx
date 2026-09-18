import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Pricing | Axio Future",
  description: "Professional software engineering and website development packages designed for modern businesses. Transparent pricing.",
};

export default function Page() {
  return (
    <SiteShell showCta={true}>
      <main id="main">
        <section className="phero"><div className="wrap">
 <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <span aria-current="page">Pricing</span></nav>
 <div className="hero-grid">
  <div><div className="eyebrow" data-anim>Accessible professional development</div>
   <h1 className="kin-h">Professional websites without unnecessary complexity.</h1></div>
  <div><p className="lead" data-anim data-delay="120">Transparent pricing for engineering outcomes. Every package is built to modern technical standards.</p></div>
 </div>
</div></section>

<section style={{"paddingTop":"1rem"}}><div className="wrap">
 <div className="s-head"><div><div className="eyebrow" data-anim>Website Packages</div>
  <h2 className="kin-h" data-anim>Accessible technology built properly</h2></div><div></div></div>
 <div className="grid g3">
  
  <article className="glass card plan" data-anim data-delay="0">
   <h3>Starter Website</h3><div className="price">₹7,999</div>
   <p className="note">Professional starting point for small businesses</p>
   <ul className="tick">
    <li>1–3 pages</li>
    <li>Responsive design</li>
    <li>Basic customization</li>
    <li>Domain setup</li>
    <li>Basic deployment</li>
    <li>SSL included</li>
    <li>1 year hosting coverage</li>
   </ul>
   <Link className="btn btn-full" href="/contact"><span>Get started</span></Link>
  </article>

  <article className="glass card plan featured" data-anim data-delay="60">
   <span className="badge">Most chosen</span>
   <h3>Business Website</h3><div className="price">₹14,999</div>
   <p className="note">Primary entry-level business offering</p>
   <ul className="tick">
    <li>5–7 pages</li>
    <li>Custom visual implementation</li>
    <li>Responsive design</li>
    <li>Domain setup</li>
    <li>Basic SEO</li>
    <li>Search-engine-friendly structure</li>
    <li>Analytics setup</li>
    <li>SSL included</li>
    <li>1 year hosting coverage</li>
   </ul>
   <Link className="btn btn-primary btn-full" href="/contact"><span>Get started</span></Link>
  </article>

  <article className="glass card plan" data-anim data-delay="120">
   <h3>Growth Website</h3><div className="price">₹24,999</div>
   <p className="note">For businesses focused on long-term digital growth</p>
   <ul className="tick">
    <li>Custom design & Multiple pages</li>
    <li>Advanced responsive behavior</li>
    <li>SEO-focused structure & Metadata</li>
    <li>Performance optimization</li>
    <li>Sitemap & Robots configuration</li>
    <li>Structured data where appropriate</li>
    <li>Analytics & Search Console setup</li>
    <li>SSL included</li>
    <li>1 year hosting coverage</li>
   </ul>
   <Link className="btn btn-full" href="/contact"><span>Get started</span></Link>
  </article>

 </div>
</div></section>

<section className="band"><div className="wrap">
 <div className="s-head"><div><div className="eyebrow" data-anim>Systems & Infrastructure</div>
  <h2 className="kin-h" data-anim>Custom Software Engineering</h2></div><div></div></div>
 <div className="grid g2" data-anim>
   <article className="glass card plan">
     <h3>Custom solutions — Let's discuss your requirements</h3>
     <p className="note">Custom applications, platforms, integrations, and advanced business systems.</p>
     <p>Pricing for custom engineering depends on scope, complexity, required infrastructure, and the scale of the system. We architect solutions based on your specific business logic and data requirements.</p>
     <Link className="btn" href="/contact"><span>Discuss requirements</span></Link>
   </article>
   <article className="glass card plan">
     <h3>Hosting & Maintenance</h3>
     <div className="price">₹2,999–₹5,999<small>/year</small></div>
     <p className="note">After your first year included coverage</p>
     <p>Our standard website packages include hosting and infrastructure for the first year. Subsequent renewals provide continued hosting, security updates, and infrastructure maintenance. Custom high-traffic applications are scoped separately.</p>
   </article>
 </div>
</div></section>

<section id="faq"><div className="wrap narrow">
 <div className="center"><div className="eyebrow" data-anim>FAQ</div><h2 data-anim>Pricing questions</h2></div>
 <div className="faq" style={{"marginTop":"1.8rem"}}>
  <details className="glass" data-anim data-delay="0"><summary>What is included in the first year?</summary><p>All standard website packages include domain setup, SSL, and server infrastructure for the first year. You are purchasing a complete service and outcome, not raw server space.</p></details>
  <details className="glass" data-anim data-delay="40"><summary>What happens after the first year?</summary><p>Your website requires ongoing hosting to remain online. We provide transparent renewal rates (₹2,999–₹5,999/year) which cover hosting, security, and basic maintenance to keep your digital presence active.</p></details>
  <details className="glass" data-anim data-delay="80"><summary>Are there hidden costs?</summary><p>No. We build professional websites without unnecessary complexity. Any advanced infrastructure, premium services, or custom requirements outside the packages will be clearly scoped and quoted before work begins.</p></details>
 </div>
</div></section>
      </main>
    </SiteShell>
  );
}
