import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "AI automation: what actually works in a small business | Axio Future",
  description: "Which AI automations return real money in a business under fifty people, and which are expensive theatre. Based on 34 deployed systems.",
};

export default function Page() {
  return (
    <SiteShell showCta={true}>
      <main id="main">
        <article className="post">
<section className="phero" style={{"paddingBottom":"1.4rem"}}><div className="wrap narrow">
 <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/">Blog</Link> / <span aria-current="page">AI</span></nav>
 <div className="eyebrow" data-anim>AI · 9 min read</div>
 <h1 className="kin-h">AI automation: what actually works in a small business</h1>
 <p className="lead" data-anim data-delay="120" style={{"marginInline":"0"}}>Which AI automations return real money in a business under fifty people, and which are expensive theatre. Based on 34 deployed systems.</p>
 <div className="post-meta" data-anim data-delay="180">
  <span className="avatar">PA</span>
  <div><strong>Axio Future Engineering</strong><small>Published 2026-05-29 · 9 min read</small></div>
 </div>
</div>
<div className="wrap" style={{"marginTop":"2.2rem"}}><div className="rv ar-21 "><img className="ph " src="/assets/img/ph-social.webp" alt="Social platform apps on a phone" width="1600" height="1000" sizes="(max-width:900px) 100vw, 1320px" loading="eager" fetchPriority="high" decoding="async" style={{"backgroundImage":"url(../assets/img/ph-social-tiny.webp)"}} /></div></div>
</section>

<section style={{"paddingTop":"0"}}><div className="wrap narrow">
 <div className="tldr" data-anim>
  <div className="eyebrow">The short version</div>
  <ul className="tick"><li>Support deflection and lead qualification are the two automations that reliably pay for themselves.</li><li>Content generation without a human review gate produces volume nobody reads and Google ignores.</li><li>The cost is almost never the model — it is the integration work and the edge cases.</li><li>About a third of automation requests we receive should not be built, and we say so.</li></ul>
 </div>
 <nav className="toc" data-anim aria-label="Table of contents">
  <div className="eyebrow">On this page</div><ol><li><Link href="/ai-automation-what-actually-works.html#s0">The two that always pay back</Link></li><li><Link href="/ai-automation-what-actually-works.html#s1">The one that usually disappoints</Link></li><li><Link href="/ai-automation-what-actually-works.html#s2">Where the cost actually is</Link></li><li><Link href="/ai-automation-what-actually-works.html#s3">The refusal threshold matters most</Link></li><li><Link href="/ai-automation-what-actually-works.html#s4">When not to automate</Link></li></ol>
 </nav>
 <div className="prose" data-anim><h2 id="s0">The two that always pay back</h2><p>**Support deflection.** A retrieval-grounded bot answering your top forty questions removes 60 to 90 percent of tier-one tickets. The maths is simple: if you handle 400 tickets a month at ten minutes each, that is 67 hours. Deflect 70% and you have recovered 47 hours a month for a system costing under $200 to run.</p><p>**Lead qualification.** A bot that asks four qualifying questions before a human gets involved means your sales time goes to people who can actually buy. One client cut their discovery-call no-show rate by half simply because the bot filtered out people who were never going to purchase.</p><h2 id="s1">The one that usually disappoints</h2><p>Bulk content generation. It is the most requested and the least effective. You can generate two hundred blog posts. Nobody will read them, Google will not rank them, and you now have two hundred thin pages diluting your site.</p><p>AI content works when it drafts and a human edits. It fails when it publishes. The gate is not optional — it is the entire difference between useful and harmful.</p><h2 id="s2">Where the cost actually is</h2><p>Clients expect the model to be expensive. It rarely is. A support agent handling 4,000 conversations a month on a mid-tier model costs about $30.</p><p>The cost is integration and edge cases. Connecting to your helpdesk, handling the case where the customer's order number is malformed, deciding what happens when the API times out. That is where the weeks go, and it is the part that makes the difference between a demo and a system.</p><h2 id="s3">The refusal threshold matters most</h2><p>Every agent we ship has a confidence threshold. Below it, the agent stops generating and escalates with the full transcript attached.</p><p>Clients often want that threshold low so the bot answers more. We push back. A bot that confidently invents a refund policy costs more than a bot that says 'let me get someone'. Set the threshold at 0.72 and tune it with real data, not optimism.</p><h2 id="s4">When not to automate</h2><p>If a process runs twice a month and takes ten minutes, automating it costs more than it saves. We turn down roughly a third of the workflows clients ask for on exactly this basis.</p><p>Automate high-frequency, low-judgement work. Leave low-frequency, high-judgement work alone. The middle ground — moderate frequency, moderate judgement — is where you need an honest conversation about whether a rule beats a model.</p></div>
   <div className="post-cta" data-anim>
   <div className="eyebrow">Next step</div>
   <h3>Need a custom business system built around your workflows?</h3>
   <p className="lead" style={{"marginBottom":"1rem"}}>We build internal operations tools, automated scrapers, and pipeline dashboards that eliminate manual administrative drag.</p>
   <div className="hero-cta">
     <Link className="btn btn-primary" href="/services/business-systems"><span>Explore business systems</span><span className="gt">&rsaquo;</span></Link>
     <Link className="btn" href="/projects/relay"><span>View RELAY Platform</span></Link>
   </div>
  </div>
 </div></section>

<section id="faq"><div className="wrap narrow">
 <div className="center"><div className="eyebrow" data-anim>FAQ</div><h2 data-anim>Related questions</h2></div>
 <div className="faq" style={{"marginTop":"1.8rem"}}><details className="glass" data-anim data-delay="0"><summary>How much does an AI chatbot cost to build?</summary><p>$2,400 for a simple FAQ responder, $6,800 for a retrieval agent trained on your docs, $14,000+ for an action agent that writes to your systems. Model usage is separate and billed to your own provider account.</p></details><details className="glass" data-anim data-delay="40"><summary>Will AI replace my support team?</summary><p>It replaces the repetitive 70%, which lets the same team handle more volume and spend time on the hard cases. Every deployment we have done has changed what the team does, not how many people are on it.</p></details><details className="glass" data-anim data-delay="80"><summary>What is RAG?</summary><p>Retrieval-augmented generation. The bot searches your documents for relevant context, then answers using only that context. It is the difference between a bot that knows your business and one that guesses convincingly.</p></details></div>
</div></section>

<section><div className="wrap">
 <div className="post-nav" data-anim>
  <Link className="glass card mini" href="/blog/shopify-vs-woocommerce-2026"><span className="dt-cat">← Previous</span><h3>Shopify vs WooCommerce in 2026: the honest comparison</h3></Link>
  <Link className="glass card mini" href="/blog/website-security-checklist-small-business" style={{"textAlign":"right"}}><span className="dt-cat">Next →</span><h3>The 12-point security checklist that prevents most breaches</h3></Link>
 </div>
</div></section>

<section className="band"><div className="wrap">
 <div className="s-head"><div><div className="eyebrow" data-anim>Keep reading</div>
  <h2 className="kin-h" data-anim>More guides</h2></div><div></div></div>
 <div className="grid g3"><Link className="glass card art-card" href="/blog/website-security-checklist-small-business" data-anim data-delay="0">
    <div className="rv zoom ar-16 "><img className="ph " src="/assets/img/ph-city.webp" alt="Global markets served around the clock" width="1600" height="1000" sizes="(max-width:1000px) 92vw, 400px" loading="lazy" decoding="async" style={{"backgroundImage":"url(../assets/img/ph-city-tiny.webp)"}} /></div>
    <div className="ac-body"><span className="dt-cat">Security</span><h3>The 12-point security checklist that prevents most breaches</h3>
    <span className="dt-cta">Read · 8 min <span className="gt">&rsaquo;</span></span></div></Link><Link className="glass card art-card" href="/blog/how-to-brief-a-design-agency" data-anim data-delay="70">
    <div className="rv zoom ar-16 "><img className="ph " src="/assets/img/ph-writer.webp" alt="Long-form copy being drafted" width="1600" height="1000" sizes="(max-width:1000px) 92vw, 400px" loading="lazy" decoding="async" style={{"backgroundImage":"url(../assets/img/ph-writer-tiny.webp)"}} /></div>
    <div className="ac-body"><span className="dt-cat">Process</span><h3>How to brief a design agency so you get what you wanted</h3>
    <span className="dt-cta">Read · 7 min <span className="gt">&rsaquo;</span></span></div></Link><Link className="glass card art-card" href="/blog/local-seo-checklist" data-anim data-delay="140">
    <div className="rv zoom ar-16 "><img className="ph " src="/assets/img/ph-writer.webp" alt="Long-form copy being drafted" width="1600" height="1000" sizes="(max-width:1000px) 92vw, 400px" loading="lazy" decoding="async" style={{"backgroundImage":"url(../assets/img/ph-writer-tiny.webp)"}} /></div>
    <div className="ac-body"><span className="dt-cat">SEO</span><h3>Local SEO: the checklist that gets you into the map pack</h3>
    <span className="dt-cta">Read · 8 min <span className="gt">&rsaquo;</span></span></div></Link></div>
</div></section>
</article>
      </main>
    </SiteShell>
  );
}
