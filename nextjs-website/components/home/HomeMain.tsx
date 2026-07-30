import { Hero } from "./Hero";

export function HomeMain() {
  return (
    <main id="main">
        <Hero />

        {/* Marquee Banner */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            <span>WEB DEVELOPMENT</span><span className="d">◆</span><span>E-COMMERCE</span><span className="d">◆</span>
            <span>BRAND IDENTITY</span><span className="d">◆</span><span>SEO</span><span className="d">◆</span>
            <span>PAID ADS</span><span className="d">◆</span><span>AI AUTOMATION</span><span className="d">◆</span>
            <span>MOTION GRAPHICS</span><span className="d">◆</span><span>AMAZON PPC</span><span className="d">◆</span>
            <span>WEB3</span><span className="d">◆</span><span>CYBERSECURITY</span><span className="d">◆</span>
            <span>WEB DEVELOPMENT</span><span className="d">◆</span><span>E-COMMERCE</span><span className="d">◆</span>
            <span>BRAND IDENTITY</span><span className="d">◆</span><span>SEO</span><span className="d">◆</span>
            <span>PAID ADS</span><span className="d">◆</span><span>AI AUTOMATION</span><span className="d">◆</span>
            <span>MOTION GRAPHICS</span><span className="d">◆</span><span>AMAZON PPC</span><span className="d">◆</span>
            <span>WEB3</span><span className="d">◆</span><span>CYBERSECURITY</span><span className="d">◆</span>
          </div>
        </div>

        {/* Manifesto Position Section */}
        <section>
          <div className="wrap">
            <div className="s-head">
              <div>
                <div className="eyebrow" data-anim>Our position</div>
                <p className="manifesto">We are the agency you hire when you are tired of briefing four of them.</p>
              </div>
              <div>
                <p className="lead" data-anim>
                  No handovers between suppliers. The person who designs your brand is in the room when it gets animated, and the writer already knows what the SEO plan is. One contract, one invoice, one team that cannot blame anybody else.
                </p>
                <a className="arrow-link" href="/about" data-anim>How we are set up <span className="gt">&rsaquo;</span></a>
              </div>
            </div>
            <div className="grid g2" style={{ marginTop: '1rem' }}>
              <div className="rv ar-43" data-anim>
                <img className="ph" src="/assets/img/ph-workshop.webp" alt="Discovery workshop with the client team" width={1600} height={1000} />
              </div>
              <div className="rv ar-43" data-anim data-delay="90">
                <img className="ph" src="/assets/img/ph-whiteboard.webp" alt="Mapping a customer journey on the wall" width={1600} height={1000} />
              </div>
            </div>
          </div>
        </section>

        {/* 8 Pillars Services Grid */}
        <section id="services" className="band">
          <div className="wrap">
            <div className="s-head">
              <div>
                <div className="eyebrow" data-anim>Eight pillars</div>
                <h2 className="kin-h" data-anim>Twenty-four services, one accountable team</h2>
              </div>
              <div>
                <p className="lead" data-anim>
                  Every service below is sold standalone with published pricing, and every one links to a live build you can click through before you pay anything.
                </p>
                <a className="arrow-link" href="/services" data-anim>All 24 services <span className="gt">&rsaquo;</span></a>
              </div>
            </div>
            <div className="grid g4">
              <article className="glass card pillar" data-anim data-delay="0">
                <span className="idx">01 / Pillar</span>
                <h3>Build</h3><p>Websites, stores, apps and interfaces that ship and scale.</p>
                <div className="p-links">
                  <a href="/website-development" className="pl">Website Development</a>
                  <a href="/ecommerce-development" className="pl">E-Commerce Development</a>
                  <a href="/web-app-development" className="pl">Web App Development</a>
                  <a href="/ui-ux-design" className="pl">UI/UX Design</a>
                </div>
              </article>
              <article className="glass card pillar" data-anim data-delay="70">
                <span className="idx">02 / Pillar</span>
                <h3>Brand</h3><p>Identity, print, film and motion that make people stop.</p>
                <div className="p-links">
                  <a href="/graphic-design" className="pl">Graphic Design</a>
                  <a href="/brand-identity" className="pl">Brand Identity</a>
                  <a href="/video-editing" className="pl">Video Editing</a>
                  <a href="/motion-graphics" className="pl">Motion Graphics & Animation</a>
                </div>
              </article>
              <article className="glass card pillar" data-anim data-delay="140">
                <span className="idx">03 / Pillar</span>
                <h3>Grow</h3><p>SEO, social, ads and email measured in revenue, not reach.</p>
                <div className="p-links">
                  <a href="/seo-services" className="pl">SEO Services</a>
                  <a href="/social-media-management" className="pl">Social Media Management</a>
                  <a href="/paid-ads-management" className="pl">Paid Ads Management</a>
                  <a href="/email-marketing" className="pl">Email Marketing</a>
                </div>
              </article>
              <article className="glass card pillar" data-anim data-delay="210">
                <span className="idx">04 / Pillar</span>
                <h3>Words</h3><p>Articles, copy, scripts and translation into five languages.</p>
                <div className="p-links">
                  <a href="/blog-writing" className="pl">Blog Writing</a>
                  <a href="/copywriting" className="pl">Copywriting</a>
                  <a href="/script-writing" className="pl">Script Writing</a>
                  <a href="/translation-services" className="pl">Translation & Localisation</a>
                </div>
              </article>
              <article className="glass card pillar" data-anim data-delay="0">
                <span className="idx">05 / Pillar</span>
                <h3>Operate</h3><p>Assistants, data, leads and support so you stop doing admin.</p>
                <div className="p-links">
                  <a href="/virtual-assistant" className="pl">Virtual Assistant</a>
                  <a href="/data-entry-scraping" className="pl">Data Entry & Web Scraping</a>
                  <a href="/lead-generation" className="pl">Lead Generation</a>
                  <a href="/customer-support" className="pl">Customer Support</a>
                </div>
              </article>
              <article className="glass card pillar" data-anim data-delay="70">
                <span className="idx">06 / Pillar</span>
                <h3>Automate</h3><p>Chatbots, workflows and AI systems that run without you.</p>
                <div className="p-links">
                  <a href="/ai-chatbots" className="pl">AI Chatbots</a>
                  <a href="/business-automation" className="pl">Business Automation</a>
                  <a href="/ai-content-systems" className="pl">AI Content Systems</a>
                </div>
              </article>
              <article className="glass card pillar" data-anim data-delay="140">
                <span className="idx">07 / Pillar</span>
                <h3>Frontier</h3><p>No-code, Web3 and security — the skills nobody else offers.</p>
                <div className="p-links">
                  <a href="/no-code-development" className="pl">No-Code Development</a>
                  <a href="/blockchain-web3" className="pl">Blockchain & Web3</a>
                  <a href="/cybersecurity-basics" className="pl">Cybersecurity Basics</a>
                </div>
              </article>
              <article className="glass card pillar" data-anim data-delay="210">
                <span className="idx">08 / Pillar</span>
                <h3>Marketplace</h3><p>Amazon Seller Central, PPC, listings and account health.</p>
                <div className="p-links">
                  <a href="/amazon-account-management" className="pl">Amazon Account Management</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Live Builds Horizontal Slider */}
        <section className="hscroll">
          <div className="wrap">
            <div className="s-head">
              <div>
                <div className="eyebrow" data-anim>Live, not screenshots</div>
                <h2 className="kin-h" data-anim>Ten builds you can use right now</h2>
              </div>
              <div>
                <p className="lead" data-anim>
                  Buy something from a working store. Run an admin panel. Talk to an AI agent. Score your own security. Every one is real software, not a mockup.
                </p>
                <a className="arrow-link" href="/projects" data-anim>All ten builds <span className="gt">&rsaquo;</span></a>
              </div>
            </div>
          </div>
          <div className="hscroll-sticky">
            <div className="wrap hscroll-scroller">
              <div className="hscroll-track">
                <a className="hscroll-panel demo-tile" href="/projects/shop/index.html">
                  <div className="dt-thumb">
                    <img className="ph dt-img" src="/assets/img/pj-shop.webp" alt="Lumen Commerce storefront and cart" width={1600} height={1000} />
                    <span className="proj-live">LIVE</span>
                  </div>
                  <div className="dt-body">
                    <span className="dt-cat">E-Commerce · 11 pages</span>
                    <h3>Lumen Commerce</h3>
                    <p>Catalogue, variants, persistent cart, promo codes, three-step checkout and order tracking — all working.</p>
                    <span className="dt-cta">Open it <span className="gt">&rsaquo;</span></span>
                  </div>
                </a>
                <a className="hscroll-panel demo-tile" href="/projects/flux/index.html">
                  <div className="dt-thumb">
                    <img className="ph dt-img" src="/assets/img/pj-flux.webp" alt="FLUX AI studio interface" width={1600} height={1000} />
                    <span className="proj-live">LIVE</span>
                  </div>
                  <div className="dt-body">
                    <span className="dt-cat">AI Studio · IDE layout</span>
                    <h3>FLUX</h3>
                    <p>Command palette, node-graph canvas, live agent trace with confidence scoring, workflow runner.</p>
                    <span className="dt-cta">Open it <span className="gt">&rsaquo;</span></span>
                  </div>
                </a>
                <a className="hscroll-panel demo-tile" href="/projects/relay/index.html">
                  <div className="dt-thumb">
                    <img className="ph dt-img" src="/assets/img/pj-relay.webp" alt="RELAY operations platform" width={1600} height={1000} />
                    <span className="proj-live">LIVE</span>
                  </div>
                  <div className="dt-body">
                    <span className="dt-cat">Operations · 7 pages</span>
                    <h3>RELAY</h3>
                    <p>Kanban board, scraper pipeline, lead table with CSV export, support chat and a cost calculator.</p>
                    <span className="dt-cta">Open it <span className="gt">&rsaquo;</span></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="band-dark">
          <div className="wrap">
            <div className="s-head" style={{ borderColor: 'rgba(255,255,255,.16)' }}>
              <div>
                <div className="eyebrow" data-anim>Process</div>
                <h2 className="kin-h" data-anim>Four steps, no mystery</h2>
              </div>
              <div>
                <p className="lead" data-anim>You always know what happens next, who is doing it, and what it costs before it starts.</p>
              </div>
            </div>
            <div className="steps" style={{ borderColor: 'rgba(255,255,255,.16)' }}>
              <div className="step" data-anim data-delay="0"><div className="n">01</div><div><h3>Free audit</h3><p>We look at what you have, find what is leaking, and tell you honestly whether you need us.</p></div></div>
              <div className="step" data-anim data-delay="60"><div className="n">02</div><div><h3>Fixed proposal</h3><p>Scope, price and delivery date in writing within 24 hours. No hourly billing on delivery work.</p></div></div>
              <div className="step" data-anim data-delay="120"><div className="n">03</div><div><h3>Build & review</h3><p>Specialists execute with staged reviews. You approve before anything ships.</p></div></div>
              <div className="step" data-anim data-delay="180"><div className="n">04</div><div><h3>Handover & measure</h3><p>Full ownership transfers. We check the numbers at 30 and 90 days.</p></div></div>
            </div>
          </div>
        </section>

        {/* Client Reviews */}
        <section className="band">
          <div className="wrap">
            <div className="s-head">
              <div>
                <div className="eyebrow" data-anim>Results</div>
                <h2 className="kin-h" data-anim>What clients say</h2>
              </div>
              <div>
                <p className="note" data-anim>Reviews are collected after handover. Names and companies shown with permission.</p>
              </div>
            </div>
            <div className="grid g4">
              <article className="glass card" data-anim data-delay="0">
                <div className="stars">★★★★★</div>
                <p className="quote">"Our ACoS dropped from 41% to 18% in ten weeks and monthly Amazon revenue nearly tripled. The reporting is the clearest I've had from any agency."</p>
                <div className="who">
                  <span className="avatar"><img className="ph" src="/assets/img/pf-1.webp" alt="Client portrait" width={400} height={400} /></span>
                  <div><strong>Michael J.</strong><small>FBA Brand Owner · United States</small></div>
                </div>
              </article>
              <article className="glass card" data-anim data-delay="70">
                <div className="stars">★★★★★</div>
                <p className="quote">"They rebuilt our Shopify store and handled technical SEO. Organic traffic is up 240% and page speed went from 34 to 96 on mobile."</p>
                <div className="who">
                  <span className="avatar"><img className="ph" src="/assets/img/pf-2.webp" alt="Client portrait" width={400} height={400} /></span>
                  <div><strong>Sarah A.</strong><small>DTC Founder · United Kingdom</small></div>
                </div>
              </article>
              <article className="glass card" data-anim data-delay="140">
                <div className="stars">★★★★★</div>
                <p className="quote">"They rewrote our pricing page and deleted about half of it. Conversion went up thirty-four percent. I have stopped arguing with them about word counts."</p>
                <div className="who">
                  <span className="avatar"><img className="ph" src="/assets/img/pf-3.webp" alt="Client portrait" width={400} height={400} /></span>
                  <div><strong>Sana D.</strong><small>Head of Growth · SaaS</small></div>
                </div>
              </article>
              <article className="glass card" data-anim data-delay="210">
                <div className="stars">★★★★★</div>
                <p className="quote">"First agency that showed us a number we could take to the board. Organic and paid stopped competing and started feeding each other."</p>
                <div className="who">
                  <span className="avatar"><img className="ph" src="/assets/img/pf-4.webp" alt="Client portrait" width={400} height={400} /></span>
                  <div><strong>Priya N.</strong><small>Head of Growth · Northwind</small></div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Blog Writing Grid */}
        <section>
          <div className="wrap">
            <div className="s-head">
              <div>
                <div className="eyebrow" data-anim>Writing</div>
                <h2 className="kin-h" data-anim>Guides worth your time</h2>
              </div>
              <div>
                <p className="lead" data-anim>We publish what we actually do, including the numbers. No gated PDFs.</p>
                <a className="arrow-link" href="/blog" data-anim>All articles <span className="gt">&rsaquo;</span></a>
              </div>
            </div>
            <div className="grid g3">
              <a className="glass card art-card" href="/blog/how-much-does-a-website-cost" data-anim data-delay="0">
                <div className="rv zoom ar-16"><img className="ph" src="/assets/img/ph-ai.webp" alt="Automation systems" width={1600} height={1000} /></div>
                <div className="ac-body">
                  <span className="dt-cat">Pricing</span>
                  <h3>How much does a website cost in 2026? Real numbers, no ranges</h3>
                  <p>Actual website costs in 2026 broken down by type, with what drives the price up and five things agencies quiet on…</p>
                  <span className="dt-cta">Read · 9 min <span className="gt">&rsaquo;</span></span>
                </div>
              </a>
              <a className="glass card art-card" href="/blog/seo-vs-paid-ads-which-first" data-anim data-delay="70">
                <div className="rv zoom ar-16"><img className="ph" src="/assets/img/ph-code.webp" alt="Code development" width={1600} height={1000} /></div>
                <div className="ac-body">
                  <span className="dt-cat">Strategy</span>
                  <h3>SEO or paid ads first? The honest answer depends on three numbers</h3>
                  <p>A framework for deciding between SEO and paid ads based on your margin, sales cycle and runway…</p>
                  <span className="dt-cta">Read · 8 min <span className="gt">&rsaquo;</span></span>
                </div>
              </a>
              <a className="glass card art-card" href="/blog/ai-automation-what-actually-works" data-anim data-delay="140">
                <div className="rv zoom ar-16"><img className="ph" src="/assets/img/ph-social.webp" alt="AI automation" width={1600} height={1000} /></div>
                <div className="ac-body">
                  <span className="dt-cat">AI</span>
                  <h3>AI automation: what actually works in a small business</h3>
                  <p>Which AI automations return real money in a business under fifty people, and which are expensive theatre…</p>
                  <span className="dt-cta">Read · 9 min <span className="gt">&rsaquo;</span></span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Global Locations Section */}
        <section className="band-dark">
          <div className="wrap">
            <div className="grid g2" style={{ background: 'none', gap: 'clamp(24px,4vw,56px)', alignItems: 'center' }}>
              <div>
                <div className="eyebrow" data-anim>Where we work</div>
                <h2 className="kin-h" data-anim>Eight markets, your business hours</h2>
                <p className="lead" data-anim>Named staff working your time zone, invoicing in your currency, writing in your spelling.</p>
                <div className="mk-row" data-anim>
                  <a className="mk-chip" href="/locations/united-states">United States</a>
                  <a className="mk-chip" href="/locations/united-kingdom">United Kingdom</a>
                  <a className="mk-chip" href="/locations/canada">Canada</a>
                  <a className="mk-chip" href="/locations/australia">Australia</a>
                  <a className="mk-chip" href="/locations/united-arab-emirates">United Arab Emirates</a>
                  <a className="mk-chip" href="/locations/saudi-arabia">Saudi Arabia</a>
                  <a className="mk-chip" href="/locations/germany">Germany</a>
                  <a className="mk-chip" href="/locations/singapore">Singapore</a>
                </div>
              </div>
              <div className="rv ar-43" data-anim data-para="14">
                <img className="ph" src="/assets/img/ph-city.webp" alt="Global markets served around the clock" width={1600} height={1000} />
              </div>
            </div>
          </div>
        </section>
      
    </main>
  );
}
