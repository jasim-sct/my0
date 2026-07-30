export const title = 'Core Web Vitals: what to fix first when your scores are red | Premium Agency';
export const description = 'The four changes that fix most failing Core Web Vitals, ordered by impact per hour of work.';
export const mainHtml = `<article class="post">
<section class="phero" style="padding-bottom:1.4rem"><div class="wrap narrow">
 <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/">Blog</a> / <span aria-current="page">Performance</span></nav>
 <div class="eyebrow" data-anim>Performance · 9 min read</div>
 <h1 class="kin-h">Core Web Vitals: what to fix first when your scores are red</h1>
 <p class="lead" data-anim data-delay="120" style="margin-inline:0">The four changes that fix most failing Core Web Vitals, ordered by impact per hour of work.</p>
 <div class="post-meta" data-anim data-delay="180">
  <span class="avatar">PA</span>
  <div><strong>Premium Agency editorial</strong><small>Published 2026-03-07 · 9 min read</small></div>
 </div>
</div>
<div class="wrap" style="margin-top:2.2rem"><div class="rv ar-21 "><img class="ph " src="/assets/img/ph-ads.webp" alt="Paid campaign performance charts" width="1600" height="1000" sizes="(max-width:900px) 100vw, 1320px" loading="eager" fetchpriority="high" decoding="async" style="background-image:url(../assets/img/ph-ads-tiny.webp)"></div></div>
</section>

<section style="padding-top:0"><div class="wrap narrow">
 <div class="tldr" data-anim>
  <div class="eyebrow">The short version</div>
  <ul class="tick"><li>LCP is almost always an image or a font. Fix the hero image first.</li><li>CLS is almost always missing width and height attributes on images and ads.</li><li>INP is usually a heavy third-party script you can defer or remove.</li><li>Most sites can go from red to green in a day of focused work.</li></ul>
 </div>
 <nav class="toc" data-anim aria-label="Table of contents">
  <div class="eyebrow">On this page</div><ol><li><a href="/core-web-vitals-fix-guide.html#s0">Do not optimise everything</a></li><li><a href="/core-web-vitals-fix-guide.html#s1">LCP: fix the hero image</a></li><li><a href="/core-web-vitals-fix-guide.html#s2">CLS: width and height on everything</a></li><li><a href="/core-web-vitals-fix-guide.html#s3">INP: the third-party audit</a></li><li><a href="/core-web-vitals-fix-guide.html#s4">The measurement trap</a></li></ol>
 </nav>
 <div class="prose" data-anim><h2 id="s0">Do not optimise everything</h2><p>Performance work has a long tail of diminishing returns. Four changes fix most failing sites, and they take a day. Everything after that takes a week and moves the number by two points.</p><p>Start with what Google actually measures on real users, not what your local Lighthouse run says. Open the Core Web Vitals report in Search Console and work from field data.</p><h2 id="s1">LCP: fix the hero image</h2><p>Largest Contentful Paint is usually your hero image or your headline font. If it is the image, three things fix it.</p><p>Serve it as WebP or AVIF. Set explicit width and height. Add fetchpriority='high' and loading='eager' — and make sure it is not lazy-loaded, which is the single most common self-inflicted LCP problem.</p><p>If it is the font, preload the font file and use font-display: swap. A headline that renders in a fallback face and swaps is far better than one that renders three seconds late.</p><h2 id="s2">CLS: width and height on everything</h2><p>Cumulative Layout Shift happens because the browser does not know how much space to reserve before an asset loads.</p><p>Every img tag needs width and height attributes, even when CSS overrides the actual size. The browser uses the ratio to reserve space.</p><p>Reserve space for ads, embeds and anything injected by JavaScript. A cookie banner that pushes content down after two seconds is a CLS disaster and users hate it independently of the metric.</p><h2 id="s3">INP: the third-party audit</h2><p>Interaction to Next Paint replaced First Input Delay and it is harder to game. It measures how long the page takes to respond when someone actually clicks.</p><p>Open the coverage tab in Chrome DevTools and look at unused JavaScript. Most sites are loading a chat widget, three analytics tools, a heatmap recorder and a personalisation script, and using almost none of them.</p><p>Defer everything non-essential. Load the chat widget on interaction rather than on page load. Question whether you need the heatmap tool running on every session forever.</p><h2 id="s4">The measurement trap</h2><p>Lighthouse on your laptop over office wifi is not what Google measures. It measures field data from real Chrome users, aggregated over 28 days.</p><p>That means two things. First, test on a throttled connection and a mid-range Android. Second, after you deploy a fix, expect to wait several weeks before the field data reflects it. Do not panic and change five more things in week two.</p></div>
 <div class="post-cta" data-anim>
  <h3>Want this done for you?</h3>
  <p class="lead" style="margin-bottom:1rem">We do this work every day across 24 services. Free audit, findings yours either way.</p>
  <a class="btn btn-primary" href="/contact"><span>Get a free audit</span></a>
 </div>
</div></section>

<section id="faq"><div class="wrap narrow">
 <div class="center"><div class="eyebrow" data-anim>FAQ</div><h2 data-anim>Related questions</h2></div>
 <div class="faq" style="margin-top:1.8rem"><details class="glass" data-anim data-delay="0"><summary>What is a good LCP?</summary><p>Under 2.5 seconds for 75% of visits. Under 1.5 is comfortable. Above 4 seconds is failing and will be affecting rankings and conversion both.</p></details><details class="glass" data-anim data-delay="40"><summary>Do Core Web Vitals actually affect rankings?</summary><p>Yes, as a tiebreaker rather than a primary factor. Content and links decide who is in contention; page experience decides between similar candidates. It affects conversion more than rankings, which is the better reason to fix it.</p></details><details class="glass" data-anim data-delay="80"><summary>Can I fix this on WordPress?</summary><p>Mostly, yes. A caching plugin, an image optimisation plugin and removing three unused plugins fixes most WordPress performance problems. The hard cases are page builders that ship enormous CSS.</p></details></div>
</div></section>

<section><div class="wrap">
 <div class="post-nav" data-anim>
  <a class="glass card mini" href="/outsourcing-vs-hiring-cost-comparison"><span class="dt-cat">← Previous</span><h3>Outsourcing vs hiring: the cost comparison nobody shows you</h3></a>
  <a class="glass card mini" href="/how-much-does-a-website-cost" style="text-align:right"><span class="dt-cat">Next →</span><h3>How much does a website cost in 2026? Real numbers, no ranges</h3></a>
 </div>
</div></section>

<section class="band"><div class="wrap">
 <div class="s-head"><div><div class="eyebrow" data-anim>Keep reading</div>
  <h2 class="kin-h" data-anim>More guides</h2></div><div></div></div>
 <div class="grid g3"><a class="glass card art-card" href="/how-much-does-a-website-cost" data-anim data-delay="0">
    <div class="rv zoom ar-16 "><img class="ph " src="/assets/img/ph-ai.webp" alt="Automation and machine intelligence systems" width="1600" height="1000" sizes="(max-width:1000px) 92vw, 400px" loading="lazy" decoding="async" style="background-image:url(../assets/img/ph-ai-tiny.webp)"></div>
    <div class="ac-body"><span class="dt-cat">Pricing</span><h3>How much does a website cost in 2026? Real numbers, no ranges</h3>
    <span class="dt-cta">Read · 9 min <span class="gt">&rsaquo;</span></span></div></a><a class="glass card art-card" href="/seo-vs-paid-ads-which-first" data-anim data-delay="70">
    <div class="rv zoom ar-16 "><img class="ph " src="/assets/img/ph-code.webp" alt="Front-end code being written for a client build" width="1600" height="1000" sizes="(max-width:1000px) 92vw, 400px" loading="lazy" decoding="async" style="background-image:url(../assets/img/ph-code-tiny.webp)"></div>
    <div class="ac-body"><span class="dt-cat">Strategy</span><h3>SEO or paid ads first? The honest answer depends on three numbers</h3>
    <span class="dt-cta">Read · 8 min <span class="gt">&rsaquo;</span></span></div></a><a class="glass card art-card" href="/why-your-content-is-invisible-to-google" data-anim data-delay="140">
    <div class="rv zoom ar-16 "><img class="ph " src="/assets/img/ph-analytics.webp" alt="Revenue and traffic dashboard on a laptop" width="1600" height="1000" sizes="(max-width:1000px) 92vw, 400px" loading="lazy" decoding="async" style="background-image:url(../assets/img/ph-analytics-tiny.webp)"></div>
    <div class="ac-body"><span class="dt-cat">SEO</span><h3>Why your best content is invisible to Google</h3>
    <span class="dt-cta">Read · 10 min <span class="gt">&rsaquo;</span></span></div></a></div>
</div></section>
</article>`;
export const showCta = true;
