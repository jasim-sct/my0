export const title = 'The 12-point security checklist that prevents most breaches | Premium Agency';
export const description = 'Small sites are not breached by sophisticated attacks. Here is the weighted checklist we audit against, with severity and point values.';
export const mainHtml = `<article class="post">
<section class="phero" style="padding-bottom:1.4rem"><div class="wrap narrow">
 <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/">Blog</a> / <span aria-current="page">Security</span></nav>
 <div class="eyebrow" data-anim>Security · 8 min read</div>
 <h1 class="kin-h">The 12-point security checklist that prevents most breaches</h1>
 <p class="lead" data-anim data-delay="120" style="margin-inline:0">Small sites are not breached by sophisticated attacks. Here is the weighted checklist we audit against, with severity and point values.</p>
 <div class="post-meta" data-anim data-delay="180">
  <span class="avatar">PA</span>
  <div><strong>Premium Agency editorial</strong><small>Published 2026-05-16 · 8 min read</small></div>
 </div>
</div>
<div class="wrap" style="margin-top:2.2rem"><div class="rv ar-21 "><img class="ph " src="/assets/img/ph-city.webp" alt="Global markets served around the clock" width="1600" height="1000" sizes="(max-width:900px) 100vw, 1320px" loading="eager" fetchpriority="high" decoding="async" style="background-image:url(../assets/img/ph-city-tiny.webp)"></div></div>
</section>

<section style="padding-top:0"><div class="wrap narrow">
 <div class="tldr" data-anim>
  <div class="eyebrow">The short version</div>
  <ul class="tick"><li>Six of the twelve controls are high severity and account for most real incidents.</li><li>Secrets exposed in the client bundle is the single most common finding and the most damaging.</li><li>Unpatched dependencies cause more breaches at small scale than any attack technique.</li><li>Score yourself: under 50 points means significant exposure, over 80 means you are in reasonable shape.</li></ul>
 </div>
 <nav class="toc" data-anim aria-label="Table of contents">
  <div class="eyebrow">On this page</div><ol><li><a href="/website-security-checklist-small-business.html#s0">Why the fundamentals matter more than firewalls</a></li><li><a href="/website-security-checklist-small-business.html#s1">The six high-severity controls</a></li><li><a href="/website-security-checklist-small-business.html#s2">The medium and low ones</a></li><li><a href="/website-security-checklist-small-business.html#s3">Score yourself honestly</a></li><li><a href="/website-security-checklist-small-business.html#s4">What this does not cover</a></li></ol>
 </nav>
 <div class="prose" data-anim><h2 id="s0">Why the fundamentals matter more than firewalls</h2><p>Small sites are not targeted by skilled attackers spending weeks on reconnaissance. They are found by automated scanners looking for known vulnerabilities and exposed credentials.</p><p>That means the defence is boring and effective: patch things, do not leak secrets, and lock the admin door. The exotic stuff matters at enterprise scale; at your scale, the basics are almost everything.</p><h2 id="s1">The six high-severity controls</h2><p>**HTTPS enforced sitewide (12 pts).** HSTS header present, all HTTP traffic redirecting. Not just available — enforced.</p><p>**Security headers set (10 pts).** Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy. Four headers, twenty minutes of work, enormous risk reduction.</p><p>**No secrets in the client bundle (14 pts).** API keys, tokens and connection strings must not appear in shipped JavaScript. This is the most common finding we make and the most damaging. Search your built bundle for 'key' and 'secret' right now.</p><p>**Dependencies patched (11 pts).** No known CVEs above medium in your lockfile. Run npm audit or the equivalent monthly, not annually.</p><p>**Server-side validation (10 pts).** Client-side validation is a user experience feature, not a security control. Everything must be validated again on the server.</p><p>**Admin routes behind auth and 2FA (12 pts).** No unauthenticated admin surface anywhere. Check for forgotten staging environments too.</p><h2 id="s2">The medium and low ones</h2><p>Rate limiting on public endpoints (8), tested backups rather than merely scheduled ones (7), file upload validation by magic bytes not extension (6), DNS records including SPF, DKIM and DMARC (3).</p><p>Then the low-severity pair: error pages that leak no stack traces or framework versions (4), and an access review in the last ninety days removing ex-staff and dead integrations (3).</p><h2 id="s3">Score yourself honestly</h2><p>Total available is 100 points. Under 50 puts you in the profile that most compromised small sites share. Fifty to eighty means partial coverage with expensive gaps. Above eighty is reasonable for a site of this size.</p><p>The scoring is weighted deliberately. Ticking six low-severity boxes does not compensate for leaving secrets in your bundle.</p><h2 id="s4">What this does not cover</h2><p>This is not penetration testing. It is not compliance certification. It will not protect you against a determined targeted attack.</p><p>It covers the fundamentals that account for most real incidents at small scale, and it is the practical layer that should exist before anyone talks to you about SOC 2.</p></div>
 <div class="post-cta" data-anim>
  <h3>Want this done for you?</h3>
  <p class="lead" style="margin-bottom:1rem">We do this work every day across 24 services. Free audit, findings yours either way.</p>
  <a class="btn btn-primary" href="/contact"><span>Get a free audit</span></a>
 </div>
</div></section>

<section id="faq"><div class="wrap narrow">
 <div class="center"><div class="eyebrow" data-anim>FAQ</div><h2 data-anim>Related questions</h2></div>
 <div class="faq" style="margin-top:1.8rem"><details class="glass" data-anim data-delay="0"><summary>How often should I audit?</summary><p>Quarterly for the automated checks — dependencies, headers, TLS. Annually for a full manual review, or after any significant change to authentication or payments.</p></details><details class="glass" data-anim data-delay="40"><summary>Do I need a WAF?</summary><p>Rarely at small scale, and never as a substitute for the basics. A web application firewall in front of an unpatched application with exposed keys is a lock on a door with no walls.</p></details><details class="glass" data-anim data-delay="80"><summary>What is the most common finding?</summary><p>Secrets in the client bundle, by a wide margin. Usually an API key that a developer put in the front-end code to make something work quickly and never removed.</p></details></div>
</div></section>

<section><div class="wrap">
 <div class="post-nav" data-anim>
  <a class="glass card mini" href="/ai-automation-what-actually-works"><span class="dt-cat">← Previous</span><h3>AI automation: what actually works in a small business</h3></a>
  <a class="glass card mini" href="/how-to-brief-a-design-agency" style="text-align:right"><span class="dt-cat">Next →</span><h3>How to brief a design agency so you get what you wanted</h3></a>
 </div>
</div></section>

<section class="band"><div class="wrap">
 <div class="s-head"><div><div class="eyebrow" data-anim>Keep reading</div>
  <h2 class="kin-h" data-anim>More guides</h2></div><div></div></div>
 <div class="grid g3"><a class="glass card art-card" href="/how-to-brief-a-design-agency" data-anim data-delay="0">
    <div class="rv zoom ar-16 "><img class="ph " src="/assets/img/ph-writer.webp" alt="Long-form copy being drafted" width="1600" height="1000" sizes="(max-width:1000px) 92vw, 400px" loading="lazy" decoding="async" style="background-image:url(../assets/img/ph-writer-tiny.webp)"></div>
    <div class="ac-body"><span class="dt-cat">Process</span><h3>How to brief a design agency so you get what you wanted</h3>
    <span class="dt-cta">Read · 7 min <span class="gt">&rsaquo;</span></span></div></a><a class="glass card art-card" href="/local-seo-checklist" data-anim data-delay="70">
    <div class="rv zoom ar-16 "><img class="ph " src="/assets/img/ph-writer.webp" alt="Long-form copy being drafted" width="1600" height="1000" sizes="(max-width:1000px) 92vw, 400px" loading="lazy" decoding="async" style="background-image:url(../assets/img/ph-writer-tiny.webp)"></div>
    <div class="ac-body"><span class="dt-cat">SEO</span><h3>Local SEO: the checklist that gets you into the map pack</h3>
    <span class="dt-cta">Read · 8 min <span class="gt">&rsaquo;</span></span></div></a><a class="glass card art-card" href="/what-a-brand-identity-actually-includes" data-anim data-delay="140">
    <div class="rv zoom ar-16 "><img class="ph " src="/assets/img/ph-data.webp" alt="Data entry and research work in progress" width="1600" height="1000" sizes="(max-width:1000px) 92vw, 400px" loading="lazy" decoding="async" style="background-image:url(../assets/img/ph-data-tiny.webp)"></div>
    <div class="ac-body"><span class="dt-cat">Branding</span><h3>What a brand identity actually includes (and what it does not)</h3>
    <span class="dt-cta">Read · 7 min <span class="gt">&rsaquo;</span></span></div></a></div>
</div></section>
</article>`;
export const showCta = true;
