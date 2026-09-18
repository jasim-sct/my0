import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Engineering & Digital Strategy Guides | Axio Future",
  description: "In-depth engineering guides on website development, performance optimization, SEO architecture, security, and digital commerce from Axio Future.",
};

export default function Page() {
  return (
    <SiteShell showCta={true}>
      <main id="main">
        <section className="phero"><div className="wrap">
 <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <span aria-current="page">Blog</span></nav>
 <div className="hero-grid">
  <div><div className="eyebrow" data-anim>Engineering & Strategy</div>
   <h1 className="kin-h">Writing worth your time</h1></div>
  <div><p className="lead" data-anim data-delay="120">Architectural analysis, performance benchmarks, and pragmatic trade-offs for building reliable digital software and web platforms.</p></div>
 </div>
 <div className="mk-row" data-anim data-delay="180">
  <button className="mk-chip fchip on" data-c="all">All</button><button className="mk-chip fchip" data-c="AI">AI</button><button className="mk-chip fchip" data-c="Business">Business</button><button className="mk-chip fchip" data-c="E-Commerce">E-Commerce</button><button className="mk-chip fchip" data-c="Performance">Performance</button><button className="mk-chip fchip" data-c="Pricing">Pricing</button><button className="mk-chip fchip" data-c="Process">Process</button><button className="mk-chip fchip" data-c="SEO">SEO</button><button className="mk-chip fchip" data-c="Security">Security</button><button className="mk-chip fchip" data-c="Strategy">Strategy</button></div>
</div></section>
<section style={{"paddingTop":"2rem"}}><div className="wrap">
 <div className="grid g3" id="artGrid"><Link className="glass card art-card" href="/blog/how-much-does-a-website-cost" data-cat="Pricing" data-anim data-delay="0">
   <div className="rv zoom ar-16 "><img className="ph " src="/assets/img/ph-ai.webp" alt="Website development cost breakdown" width="1600" height="1000" sizes="(max-width:1000px) 92vw, 400px" loading="lazy" decoding="async" style={{"backgroundImage":"url(../assets/img/ph-ai-tiny.webp)"}} /></div>
   <div className="ac-body"><span className="dt-cat">Pricing · 9 min</span><h3>How much does a website cost in 2026? Real numbers, no ranges</h3>
   <span className="dt-cta">Read the guide <span className="gt">&rsaquo;</span></span></div></Link><Link className="glass card art-card" href="/blog/seo-vs-paid-ads-which-first" data-cat="Strategy" data-anim data-delay="70">
   <div className="rv zoom ar-16 "><img className="ph " src="/assets/img/ph-code.webp" alt="Front-end code and strategy" width="1600" height="1000" sizes="(max-width:1000px) 92vw, 400px" loading="lazy" decoding="async" style={{"backgroundImage":"url(../assets/img/ph-code-tiny.webp)"}} /></div>
   <div className="ac-body"><span className="dt-cat">Strategy · 8 min</span><h3>SEO or paid ads first? The honest answer depends on three numbers</h3>
   <span className="dt-cta">Read the guide <span className="gt">&rsaquo;</span></span></div></Link><Link className="glass card art-card" href="/blog/why-your-content-is-invisible-to-google" data-cat="SEO" data-anim data-delay="140">
   <div className="rv zoom ar-16 "><img className="ph " src="/assets/img/ph-analytics.webp" alt="Technical SEO crawl and analytics" width="1600" height="1000" sizes="(max-width:1000px) 92vw, 400px" loading="lazy" decoding="async" style={{"backgroundImage":"url(../assets/img/ph-analytics-tiny.webp)"}} /></div>
   <div className="ac-body"><span className="dt-cat">SEO · 10 min</span><h3>Why your best content is invisible to Google</h3>
   <span className="dt-cta">Read the guide <span className="gt">&rsaquo;</span></span></div></Link><Link className="glass card art-card" href="/blog/shopify-vs-woocommerce-2026" data-cat="E-Commerce" data-anim data-delay="0">
   <div className="rv zoom ar-16 "><img className="ph " src="/assets/img/ph-writer.webp" alt="E-Commerce platform analysis" width="1600" height="1000" sizes="(max-width:1000px) 92vw, 400px" loading="lazy" decoding="async" style={{"backgroundImage":"url(../assets/img/ph-writer-tiny.webp)"}} /></div>
   <div className="ac-body"><span className="dt-cat">E-Commerce · 11 min</span><h3>Shopify vs WooCommerce in 2026: the honest comparison</h3>
   <span className="dt-cta">Read the guide <span className="gt">&rsaquo;</span></span></div></Link><Link className="glass card art-card" href="/blog/ai-automation-what-actually-works" data-cat="AI" data-anim data-delay="70">
   <div className="rv zoom ar-16 "><img className="ph " src="/assets/img/ph-social.webp" alt="System automation and workflow integrations" width="1600" height="1000" sizes="(max-width:1000px) 92vw, 400px" loading="lazy" decoding="async" style={{"backgroundImage":"url(../assets/img/ph-social-tiny.webp)"}} /></div>
   <div className="ac-body"><span className="dt-cat">AI · 9 min</span><h3>AI automation: what actually works in a small business</h3>
   <span className="dt-cta">Read the guide <span className="gt">&rsaquo;</span></span></div></Link><Link className="glass card art-card" href="/blog/website-security-checklist-small-business" data-cat="Security" data-anim data-delay="140">
   <div className="rv zoom ar-16 "><img className="ph " src="/assets/img/ph-city.webp" alt="Web application security protocols" width="1600" height="1000" sizes="(max-width:1000px) 92vw, 400px" loading="lazy" decoding="async" style={{"backgroundImage":"url(../assets/img/ph-city-tiny.webp)"}} /></div>
   <div className="ac-body"><span className="dt-cat">Security · 8 min</span><h3>The 12-point security checklist that prevents most breaches</h3>
   <span className="dt-cta">Read the guide <span className="gt">&rsaquo;</span></span></div></Link><Link className="glass card art-card" href="/blog/how-to-brief-a-design-agency" data-cat="Process" data-anim data-delay="0">
   <div className="rv zoom ar-16 "><img className="ph " src="/assets/img/ph-writer.webp" alt="Engineering specification and scope document" width="1600" height="1000" sizes="(max-width:1000px) 92vw, 400px" loading="lazy" decoding="async" style={{"backgroundImage":"url(../assets/img/ph-writer-tiny.webp)"}} /></div>
   <div className="ac-body"><span className="dt-cat">Process · 7 min</span><h3>How to brief a design agency so you get what you wanted</h3>
   <span className="dt-cta">Read the guide <span className="gt">&rsaquo;</span></span></div></Link><Link className="glass card art-card" href="/blog/local-seo-checklist" data-cat="SEO" data-anim data-delay="70">
   <div className="rv zoom ar-16 "><img className="ph " src="/assets/img/ph-writer.webp" alt="Search discovery analysis" width="1600" height="1000" sizes="(max-width:1000px) 92vw, 400px" loading="lazy" decoding="async" style={{"backgroundImage":"url(../assets/img/ph-writer-tiny.webp)"}} /></div>
   <div className="ac-body"><span className="dt-cat">SEO · 8 min</span><h3>Local SEO: the checklist that gets you into the map pack</h3>
   <span className="dt-cta">Read the guide <span className="gt">&rsaquo;</span></span></div></Link><Link className="glass card art-card" href="/blog/outsourcing-vs-hiring-cost-comparison" data-cat="Business" data-anim data-delay="140">
   <div className="rv zoom ar-16 "><img className="ph " src="/assets/img/ph-security.webp" alt="Product team allocation analysis" width="1600" height="1000" sizes="(max-width:1000px) 92vw, 400px" loading="lazy" decoding="async" style={{"backgroundImage":"url(../assets/img/ph-security-tiny.webp)"}} /></div>
   <div className="ac-body"><span className="dt-cat">Business · 8 min</span><h3>Outsourcing vs hiring: the cost comparison nobody shows you</h3>
   <span className="dt-cta">Read the guide <span className="gt">&rsaquo;</span></span></div></Link><Link className="glass card art-card" href="/blog/core-web-vitals-fix-guide" data-cat="Performance" data-anim data-delay="0">
   <div className="rv zoom ar-16 "><img className="ph " src="/assets/img/ph-ads.webp" alt="Web performance diagnostics" width="1600" height="1000" sizes="(max-width:1000px) 92vw, 400px" loading="lazy" decoding="async" style={{"backgroundImage":"url(../assets/img/ph-ads-tiny.webp)"}} /></div>
   <div className="ac-body"><span className="dt-cat">Performance · 9 min</span><h3>Core Web Vitals: what to fix first when your scores are red</h3>
   <span className="dt-cta">Read the guide <span className="gt">&rsaquo;</span></span></div></Link></div>
</div></section>
<script dangerouslySetInnerHTML={{ __html: `
document.addEventListener('DOMContentLoaded',function(){
 document.querySelectorAll('.fchip').forEach(function(b){
  b.addEventListener('click',function(){
   var c=b.dataset.c;
   document.querySelectorAll('.fchip').forEach(function(x){x.classList.remove('on')});
   b.classList.add('on');
   document.querySelectorAll('#artGrid .art-card').forEach(function(card){
    card.style.display=(c==='all'||card.dataset.cat===c)?'':'none';
   });
  });
 });
});
`}} />
      </main>
    </SiteShell>
  );
}
