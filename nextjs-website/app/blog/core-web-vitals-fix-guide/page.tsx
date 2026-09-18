import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Core Web Vitals: what to fix first when your scores are red | Axio Future",
  description: "The four changes that fix most failing Core Web Vitals, ordered by impact per hour of work.",
};

export default function Page() {
  return (
    <SiteShell showCta={true}>
      <main id="main">
        <article className="post">
<section className="phero" style={{"paddingBottom":"1.4rem"}}><div className="wrap narrow">
 <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/">Blog</Link> / <span aria-current="page">Performance</span></nav>
 <div className="eyebrow" data-anim>Performance · 9 min read</div>
 <h1 className="kin-h">Core Web Vitals: what to fix first when your scores are red</h1>
 <p className="lead" data-anim data-delay="120" style={{"marginInline":"0"}}>The four changes that fix most failing Core Web Vitals, ordered by impact per hour of work.</p>
 <div className="post-meta" data-anim data-delay="180">
  <span className="avatar">PA</span>
  <div><strong>Axio Future Engineering</strong><small>Published 2026-03-07 · 9 min read</small></div>
 </div>
</div>
<div className="wrap" style={{"marginTop":"2.2rem"}}><div className="rv ar-21 "><img className="ph " src="/assets/img/ph-ads.webp" alt="Paid campaign performance charts" width="1600" height="1000" sizes="(max-width:900px) 100vw, 1320px" loading="eager" fetchPriority="high" decoding="async" style={{"backgroundImage":"url(../assets/img/ph-ads-tiny.webp)"}} /></div></div>
</section>

<section style={{"paddingTop":"0"}}><div className="wrap narrow">
 <div className="tldr" data-anim>
  <div className="eyebrow">The short version</div>
  <ul className="tick"><li>LCP is almost always an image or a font. Fix the hero image first.</li><li>CLS is almost always missing width and height attributes on images and ads.</li><li>INP is usually a heavy third-party script you can defer or remove.</li><li>Most sites can go from red to green in a day of focused work.</li></ul>
 </div>
 <nav className="toc" data-anim aria-label="Table of contents">
  <div className="eyebrow">On this page</div><ol><li><Link href="/core-web-vitals-fix-guide.html#s0">Do not optimise everything</Link></li><li><Link href="/core-web-vitals-fix-guide.html#s1">LCP: fix the hero image</Link></li><li><Link href="/core-web-vitals-fix-guide.html#s2">CLS: width and height on everything</Link></li><li><Link href="/core-web-vitals-fix-guide.html#s3">INP: the third-party audit</Link></li><li><Link href="/core-web-vitals-fix-guide.html#s4">The measurement trap</Link></li></ol>
 </nav>
 <div className="prose" data-anim><h2 id="s0">Do not optimise everything</h2><p>Performance work has a long tail of diminishing returns. Four changes fix most failing sites, and they take a day. Everything after that takes a week and moves the number by two points.</p><p>Start with what Google actually measures on real users, not what your local Lighthouse run says. Open the Core Web Vitals report in Search Console and work from field data.</p><h2 id="s1">LCP: fix the hero image</h2><p>Largest Contentful Paint is usually your hero image or your headline font. If it is the image, three things fix it.</p><p>Serve it as WebP or AVIF. Set explicit width and height. Add fetchPriority='high' and loading='eager' — and make sure it is not lazy-loaded, which is the single most common self-inflicted LCP problem.</p><p>If it is the font, preload the font file and use font-display: swap. A headline that renders in a fallback face and swaps is far better than one that renders three seconds late.</p><h2 id="s2">CLS: width and height on everything</h2><p>Cumulative Layout Shift happens because the browser does not know how much space to reserve before an asset loads.</p><p>Every img tag needs width and height attributes, even when CSS overrides the actual size. The browser uses the ratio to reserve space.</p><p>Reserve space for ads, embeds and anything injected by JavaScript. A cookie banner that pushes content down after two seconds is a CLS disaster and users hate it independently of the metric.</p><h2 id="s3">INP: the third-party audit</h2><p>Interaction to Next Paint replaced First Input Delay and it is harder to game. It measures how long the page takes to respond when someone actually clicks.</p><p>Open the coverage tab in Chrome DevTools and look at unused JavaScript. Most sites are loading a chat widget, three analytics tools, a heatmap recorder and a personalisation script, and using almost none of them.</p><p>Defer everything non-essential. Load the chat widget on interaction rather than on page load. Question whether you need the heatmap tool running on every session forever.</p><h2 id="s4">The measurement trap</h2><p>Lighthouse on your laptop over office wifi is not what Google measures. It measures field data from real Chrome users, aggregated over 28 days.</p><p>That means two things. First, test on a throttled connection and a mid-range Android. Second, after you deploy a fix, expect to wait several weeks before the field data reflects it. Do not panic and change five more things in week two.</p></div>
   <div className="post-cta" data-anim>
   <div className="eyebrow">Next step</div>
   <h3>Need sub-second web performance for your business?</h3>
   <p className="lead" style={{"marginBottom":"1rem"}}>Axio Future engineers fast, search-friendly websites with optimal Core Web Vitals out of the box. No bloated page-builders.</p>
   <div className="hero-cta">
     <Link className="btn btn-primary" href="/services/websites"><span>Explore website packages</span><span className="gt">&rsaquo;</span></Link>
     <Link className="btn" href="/projects/dashboard"><span>View Northwind Analytics demo</span></Link>
   </div>
  </div>
 </div></section>

<section id="faq"><div className="wrap narrow">
 <div className="center"><div className="eyebrow" data-anim>FAQ</div><h2 data-anim>Related questions</h2></div>
 <div className="faq" style={{"marginTop":"1.8rem"}}><details className="glass" data-anim data-delay="0"><summary>What is a good LCP?</summary><p>Under 2.5 seconds for 75% of visits. Under 1.5 is comfortable. Above 4 seconds is failing and will be affecting rankings and conversion both.</p></details><details className="glass" data-anim data-delay="40"><summary>Do Core Web Vitals actually affect rankings?</summary><p>Yes, as a tiebreaker rather than a primary factor. Content and links decide who is in contention; page experience decides between similar candidates. It affects conversion more than rankings, which is the better reason to fix it.</p></details><details className="glass" data-anim data-delay="80"><summary>Can I fix this on WordPress?</summary><p>Mostly, yes. A caching plugin, an image optimisation plugin and removing three unused plugins fixes most WordPress performance problems. The hard cases are page builders that ship enormous CSS.</p></details></div>
</div></section>

<section><div className="wrap">
 <div className="post-nav" data-anim>
  <Link className="glass card mini" href="/outsourcing-vs-hiring-cost-comparison"><span className="dt-cat">← Previous</span><h3>Outsourcing vs hiring: the cost comparison nobody shows you</h3></Link>
  <Link className="glass card mini" href="/how-much-does-a-website-cost" style={{"textAlign":"right"}}><span className="dt-cat">Next →</span><h3>How much does a website cost in 2026? Real numbers, no ranges</h3></Link>
 </div>
</div></section>

<section className="band"><div className="wrap">
 <div className="s-head"><div><div className="eyebrow" data-anim>Keep reading</div>
  <h2 className="kin-h" data-anim>More guides</h2></div><div></div></div>
 <div className="grid g3"><Link className="glass card art-card" href="/how-much-does-a-website-cost" data-anim data-delay="0">
    <div className="rv zoom ar-16 "><img className="ph " src="/assets/img/ph-ai.webp" alt="Automation and machine intelligence systems" width="1600" height="1000" sizes="(max-width:1000px) 92vw, 400px" loading="lazy" decoding="async" style={{"backgroundImage":"url(../assets/img/ph-ai-tiny.webp)"}} /></div>
    <div className="ac-body"><span className="dt-cat">Pricing</span><h3>How much does a website cost in 2026? Real numbers, no ranges</h3>
    <span className="dt-cta">Read · 9 min <span className="gt">&rsaquo;</span></span></div></Link><Link className="glass card art-card" href="/seo-vs-paid-ads-which-first" data-anim data-delay="70">
    <div className="rv zoom ar-16 "><img className="ph " src="/assets/img/ph-code.webp" alt="Front-end code being written for a client build" width="1600" height="1000" sizes="(max-width:1000px) 92vw, 400px" loading="lazy" decoding="async" style={{"backgroundImage":"url(../assets/img/ph-code-tiny.webp)"}} /></div>
    <div className="ac-body"><span className="dt-cat">Strategy</span><h3>SEO or paid ads first? The honest answer depends on three numbers</h3>
    <span className="dt-cta">Read · 8 min <span className="gt">&rsaquo;</span></span></div></Link><Link className="glass card art-card" href="/why-your-content-is-invisible-to-google" data-anim data-delay="140">
    <div className="rv zoom ar-16 "><img className="ph " src="/assets/img/ph-analytics.webp" alt="Revenue and traffic dashboard on a laptop" width="1600" height="1000" sizes="(max-width:1000px) 92vw, 400px" loading="lazy" decoding="async" style={{"backgroundImage":"url(../assets/img/ph-analytics-tiny.webp)"}} /></div>
    <div className="ac-body"><span className="dt-cat">SEO</span><h3>Why your best content is invisible to Google</h3>
    <span className="dt-cta">Read · 10 min <span className="gt">&rsaquo;</span></span></div></Link></div>
</div></section>
</article>
      </main>
    </SiteShell>
  );
}
