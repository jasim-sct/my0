import Script from "next/script";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">Skip to main content</a>
      <a className="skip" href="#footer">Skip to footer</a>
      <div className="curtain"><div className="load-mark"><b>Premium Agency</b><div className="load-bar"><i></i></div></div></div>
      <div className="progress"></div>
      <div className="bg-fx"></div>
      <div className="grid-fx"></div>

      {/* Header & Mega Menu */}
      <header className="nav">
        <div className="wrap nav-in">
          <a className="logo" href="/"><span className="dot"></span>Premium Agency</a>
          <button className="burger" aria-label="Toggle menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
          <nav className="menu" aria-label="Main navigation">
            <div className="has-mega">
              <button className="mega-btn" aria-expanded="false">Services <i>▾</i></button>
              <div className="mega">
                <div className="wrap mega-in">
                  <div className="mm-col">
                    <div className="mm-head"><i>◧</i>Build</div>
                    <p className="mm-blurb">Websites, stores, apps and interfaces that ship and scale.</p>
                    <a href="/website-development.html"><b>Website Development</b><span>From $299 · 7–25 days</span></a>
                    <a href="/ecommerce-development.html"><b>E-Commerce Development</b><span>From $499 · 10–30 days</span></a>
                    <a href="/web-app-development.html"><b>Web App Development</b><span>From $2,400 · 4–12 weeks</span></a>
                    <a href="/ui-ux-design.html"><b>UI/UX Design</b><span>From $899 · 2–5 weeks</span></a>
                  </div>
                  <div className="mm-col">
                    <div className="mm-head"><i>◈</i>Brand</div>
                    <p className="mm-blurb">Identity, print, film and motion that make people stop.</p>
                    <a href="/graphic-design.html"><b>Graphic Design</b><span>From $149 · 4–12 days</span></a>
                    <a href="/brand-identity.html"><b>Brand Identity</b><span>From $899 · 3–6 weeks</span></a>
                    <a href="/video-editing.html"><b>Video Editing</b><span>From $199 · 5–18 days</span></a>
                    <a href="/motion-graphics.html"><b>Motion Graphics & Animation</b><span>From $499 · 2–6 weeks</span></a>
                  </div>
                  <div className="mm-col">
                    <div className="mm-head"><i>◍</i>Grow</div>
                    <p className="mm-blurb">SEO, social, ads and email measured in revenue, not reach.</p>
                    <a href="/seo-services.html"><b>SEO Services</b><span>From $299/mo · results in 4–8 weeks</span></a>
                    <a href="/social-media-management.html"><b>Social Media Management</b><span>From $249/mo · 12–60 posts</span></a>
                    <a href="/paid-ads-management.html"><b>Paid Ads Management</b><span>From $399/mo · ROAS reported weekly</span></a>
                    <a href="/email-marketing.html"><b>Email Marketing</b><span>From $420 · 28% of revenue typical</span></a>
                  </div>
                  <div className="mm-col">
                    <div className="mm-head"><i>✎</i>Words</div>
                    <p className="mm-blurb">Articles, copy, scripts and translation into five languages.</p>
                    <a href="/blog-writing.html"><b>Blog Writing</b><span>From $180 · 4–6 days</span></a>
                    <a href="/copywriting.html"><b>Copywriting</b><span>From $140 · 3–7 days</span></a>
                    <a href="/script-writing.html"><b>Script Writing</b><span>From $180/min · 3–8 days</span></a>
                    <a href="/translation-services.html"><b>Translation & Localisation</b><span>From $0.09/word · 2–5 days</span></a>
                  </div>
                  <div className="mm-col">
                    <div className="mm-head"><i>◎</i>Operate</div>
                    <p className="mm-blurb">Assistants, data, leads and support so you stop doing admin.</p>
                    <a href="/virtual-assistant.html"><b>Virtual Assistant</b><span>From $9/hour · live in 2 weeks</span></a>
                    <a href="/data-entry-scraping.html"><b>Data Entry & Web Scraping</b><span>From $8/hour · 99.4% accuracy target</span></a>
                    <a href="/lead-generation.html"><b>Lead Generation</b><span>From $11/hour · SMTP verified</span></a>
                    <a href="/customer-support.html"><b>Customer Support</b><span>From $10/hour · 24/5 coverage</span></a>
                  </div>
                  <div className="mm-col">
                    <div className="mm-head"><i>⇄</i>Automate</div>
                    <p className="mm-blurb">Chatbots, workflows and AI systems that run without you.</p>
                    <a href="/ai-chatbots.html"><b>AI Chatbots</b><span>From $2,400 · 2–8 weeks</span></a>
                    <a href="/business-automation.html"><b>Business Automation</b><span>From $399 · 1–4 weeks</span></a>
                    <a href="/ai-content-systems.html"><b>AI Content Systems</b><span>From $799 · 2–4 weeks</span></a>
                  </div>
                  <div className="mm-col">
                    <div className="mm-head"><i>◫</i>Frontier</div>
                    <p className="mm-blurb">No-code, Web3 and security — the skills nobody else offers.</p>
                    <a href="/no-code-development.html"><b>No-Code Development</b><span>From $1,200 · 1–10 weeks</span></a>
                    <a href="/blockchain-web3.html"><b>Blockchain & Web3</b><span>From $1,900 · 1–8 weeks</span></a>
                    <a href="/cybersecurity-basics.html"><b>Cybersecurity Basics</b><span>From $1,400 · 5 working days</span></a>
                  </div>
                  <div className="mm-col">
                    <div className="mm-head"><i>▦</i>Marketplace</div>
                    <p className="mm-blurb">Amazon Seller Central, PPC, listings and account health.</p>
                    <a href="/amazon-account-management.html"><b>Amazon Account Management</b><span>From $499/mo · ACoS down 30–55%</span></a>
                  </div>
                </div>
                <div className="mega-foot">
                  <div className="wrap">
                    <a href="/services.html">All 24 services →</a>
                    <a href="/industries.html">By industry →</a>
                    <a href="/locations.html">By location →</a>
                    <a href="/packages.html">Bundled packages →</a>
                  </div>
                </div>
              </div>
            </div>
            <a href="/projects.html">Projects</a>
            <a href="/blog/index.html">Blog</a>
            <a href="/pricing.html">Pricing</a>
            <a href="/about.html">About</a>
            <a className="btn btn-primary" href="/contact.html"><span>Free Audit</span></a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main id="main">
        {/* Hero Section */}
        <section className="hero">
          <div className="wrap">
            <div className="hero-grid">
              <div>
                <div className="eyebrow" data-anim>24 services · 8 markets · one team</div>
                <h1 className="kin-h">Every digital service your business needs.</h1>
              </div>
              <div>
                <p className="lead" data-anim data-delay="120">
                  Websites, brand, marketing, content, operations, AI and emerging tech — delivered by specialists, priced transparently, and reported in revenue rather than impressions.
                </p>
                <div className="hero-cta" data-anim data-delay="180">
                  <a className="btn btn-primary" href="/contact.html"><span>Get a free audit</span><span className="gt">&rsaquo;</span></a>
                  <a className="btn" href="/projects.html"><span>See 10 live builds</span></a>
                </div>
              </div>
            </div>

            <div className="hero-media">
              <div className="rv ar-21">
                <img className="ph" src="/assets/img/ph-hero.webp" alt="Agency strategists reviewing a client growth plan together" width={1600} height={1000} />
              </div>
              <div className="hero-badge" data-anim data-delay="500">
                <b><span data-count="24" data-suffix="">0</span></b>
                <small>services under one roof, from $149 to $2,999 — every price published.</small>
              </div>
            </div>

            <div className="hero-stats">
              <div className="stat" data-anim data-delay="0"><b><span data-count="640" data-suffix="" data-prefix="">0</span></b><small>Projects delivered</small></div>
              <div className="stat" data-anim data-delay="70"><b><span data-count="20" data-suffix="+" data-prefix="">0+</span></b><small>Countries served</small></div>
              <div className="stat" data-anim data-delay="140"><b><span data-count="94" data-suffix="%" data-prefix="">0%</span></b><small>Client retention</small></div>
              <div className="stat" data-anim data-delay="210"><b><span data-count="24" data-suffix="h" data-prefix="">0h</span></b><small>Response time</small></div>
            </div>
          </div>
        </section>

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
                <a className="arrow-link" href="/about.html" data-anim>How we are set up <span className="gt">&rsaquo;</span></a>
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
                <a className="arrow-link" href="/services.html" data-anim>All 24 services <span className="gt">&rsaquo;</span></a>
              </div>
            </div>
            <div className="grid g4">
              <article className="glass card pillar" data-anim data-delay="0">
                <span className="idx">01 / Pillar</span>
                <h3>Build</h3><p>Websites, stores, apps and interfaces that ship and scale.</p>
                <div className="p-links">
                  <a href="/website-development.html" className="pl">Website Development</a>
                  <a href="/ecommerce-development.html" className="pl">E-Commerce Development</a>
                  <a href="/web-app-development.html" className="pl">Web App Development</a>
                  <a href="/ui-ux-design.html" className="pl">UI/UX Design</a>
                </div>
              </article>
              <article className="glass card pillar" data-anim data-delay="70">
                <span className="idx">02 / Pillar</span>
                <h3>Brand</h3><p>Identity, print, film and motion that make people stop.</p>
                <div className="p-links">
                  <a href="/graphic-design.html" className="pl">Graphic Design</a>
                  <a href="/brand-identity.html" className="pl">Brand Identity</a>
                  <a href="/video-editing.html" className="pl">Video Editing</a>
                  <a href="/motion-graphics.html" className="pl">Motion Graphics & Animation</a>
                </div>
              </article>
              <article className="glass card pillar" data-anim data-delay="140">
                <span className="idx">03 / Pillar</span>
                <h3>Grow</h3><p>SEO, social, ads and email measured in revenue, not reach.</p>
                <div className="p-links">
                  <a href="/seo-services.html" className="pl">SEO Services</a>
                  <a href="/social-media-management.html" className="pl">Social Media Management</a>
                  <a href="/paid-ads-management.html" className="pl">Paid Ads Management</a>
                  <a href="/email-marketing.html" className="pl">Email Marketing</a>
                </div>
              </article>
              <article className="glass card pillar" data-anim data-delay="210">
                <span className="idx">04 / Pillar</span>
                <h3>Words</h3><p>Articles, copy, scripts and translation into five languages.</p>
                <div className="p-links">
                  <a href="/blog-writing.html" className="pl">Blog Writing</a>
                  <a href="/copywriting.html" className="pl">Copywriting</a>
                  <a href="/script-writing.html" className="pl">Script Writing</a>
                  <a href="/translation-services.html" className="pl">Translation & Localisation</a>
                </div>
              </article>
              <article className="glass card pillar" data-anim data-delay="0">
                <span className="idx">05 / Pillar</span>
                <h3>Operate</h3><p>Assistants, data, leads and support so you stop doing admin.</p>
                <div className="p-links">
                  <a href="/virtual-assistant.html" className="pl">Virtual Assistant</a>
                  <a href="/data-entry-scraping.html" className="pl">Data Entry & Web Scraping</a>
                  <a href="/lead-generation.html" className="pl">Lead Generation</a>
                  <a href="/customer-support.html" className="pl">Customer Support</a>
                </div>
              </article>
              <article className="glass card pillar" data-anim data-delay="70">
                <span className="idx">06 / Pillar</span>
                <h3>Automate</h3><p>Chatbots, workflows and AI systems that run without you.</p>
                <div className="p-links">
                  <a href="/ai-chatbots.html" className="pl">AI Chatbots</a>
                  <a href="/business-automation.html" className="pl">Business Automation</a>
                  <a href="/ai-content-systems.html" className="pl">AI Content Systems</a>
                </div>
              </article>
              <article className="glass card pillar" data-anim data-delay="140">
                <span className="idx">07 / Pillar</span>
                <h3>Frontier</h3><p>No-code, Web3 and security — the skills nobody else offers.</p>
                <div className="p-links">
                  <a href="/no-code-development.html" className="pl">No-Code Development</a>
                  <a href="/blockchain-web3.html" className="pl">Blockchain & Web3</a>
                  <a href="/cybersecurity-basics.html" className="pl">Cybersecurity Basics</a>
                </div>
              </article>
              <article className="glass card pillar" data-anim data-delay="210">
                <span className="idx">08 / Pillar</span>
                <h3>Marketplace</h3><p>Amazon Seller Central, PPC, listings and account health.</p>
                <div className="p-links">
                  <a href="/amazon-account-management.html" className="pl">Amazon Account Management</a>
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
                <a className="arrow-link" href="/projects.html" data-anim>All ten builds <span className="gt">&rsaquo;</span></a>
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
                <a className="arrow-link" href="/blog/index.html" data-anim>All articles <span className="gt">&rsaquo;</span></a>
              </div>
            </div>
            <div className="grid g3">
              <a className="glass card art-card" href="/blog/how-much-does-a-website-cost.html" data-anim data-delay="0">
                <div className="rv zoom ar-16"><img className="ph" src="/assets/img/ph-ai.webp" alt="Automation systems" width={1600} height={1000} /></div>
                <div className="ac-body">
                  <span className="dt-cat">Pricing</span>
                  <h3>How much does a website cost in 2026? Real numbers, no ranges</h3>
                  <p>Actual website costs in 2026 broken down by type, with what drives the price up and five things agencies quiet on…</p>
                  <span className="dt-cta">Read · 9 min <span className="gt">&rsaquo;</span></span>
                </div>
              </a>
              <a className="glass card art-card" href="/blog/seo-vs-paid-ads-which-first.html" data-anim data-delay="70">
                <div className="rv zoom ar-16"><img className="ph" src="/assets/img/ph-code.webp" alt="Code development" width={1600} height={1000} /></div>
                <div className="ac-body">
                  <span className="dt-cat">Strategy</span>
                  <h3>SEO or paid ads first? The honest answer depends on three numbers</h3>
                  <p>A framework for deciding between SEO and paid ads based on your margin, sales cycle and runway…</p>
                  <span className="dt-cta">Read · 8 min <span className="gt">&rsaquo;</span></span>
                </div>
              </a>
              <a className="glass card art-card" href="/blog/ai-automation-what-actually-works.html" data-anim data-delay="140">
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
                  <a className="mk-chip" href="/locations/united-states.html">United States</a>
                  <a className="mk-chip" href="/locations/united-kingdom.html">United Kingdom</a>
                  <a className="mk-chip" href="/locations/canada.html">Canada</a>
                  <a className="mk-chip" href="/locations/australia.html">Australia</a>
                  <a className="mk-chip" href="/locations/united-arab-emirates.html">United Arab Emirates</a>
                  <a className="mk-chip" href="/locations/saudi-arabia.html">Saudi Arabia</a>
                  <a className="mk-chip" href="/locations/germany.html">Germany</a>
                  <a className="mk-chip" href="/locations/singapore.html">Singapore</a>
                </div>
              </div>
              <div className="rv ar-43" data-anim data-para="14">
                <img className="ph" src="/assets/img/ph-city.webp" alt="Global markets served around the clock" width={1600} height={1000} />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* CTA Final */}
      <section className="cta-final">
        <div className="wrap">
          <div className="cta-band" data-anim="zoom">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Start here</div>
            <h2 className="kin-h">Free audit.<br />24-hour turnaround.</h2>
            <p className="lead center">We look at your site, your ads, your listings or your content and tell you honestly what is leaking.</p>
            <div className="hero-cta" style={{ justifyContent: 'center' }}>
              <a className="btn btn-primary" href="/contact.html"><span>Get my free audit</span><span className="gt">&rsaquo;</span></a>
              <a className="btn" href="https://wa.me/923000000000" rel="noopener"><span>WhatsApp us</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer">
        <div className="wrap">
          <div className="f-top">
            <div className="f-brand">
              <a className="logo" href="/"><span className="dot"></span>Premium Agency</a>
              <p className="lead" style={{ fontSize: '.9rem', marginTop: '.9rem' }}>
                Twenty-four services under one roof, delivered by specialists and reported in revenue.
              </p>
            </div>
            <div className="f-cols">
              <div><h4>Build</h4><ul><li><a href="/website-development.html">Website Development</a></li><li><a href="/ecommerce-development.html">E-Commerce Development</a></li><li><a href="/web-app-development.html">Web App Development</a></li><li><a href="/ui-ux-design.html">UI/UX Design</a></li></ul></div>
              <div><h4>Brand</h4><ul><li><a href="/graphic-design.html">Graphic Design</a></li><li><a href="/brand-identity.html">Brand Identity</a></li><li><a href="/video-editing.html">Video Editing</a></li><li><a href="/motion-graphics.html">Motion Graphics & Animation</a></li></ul></div>
              <div><h4>Grow</h4><ul><li><a href="/seo-services.html">SEO Services</a></li><li><a href="/social-media-management.html">Social Media Management</a></li><li><a href="/paid-ads-management.html">Paid Ads Management</a></li><li><a href="/email-marketing.html">Email Marketing</a></li></ul></div>
              <div><h4>Words</h4><ul><li><a href="/blog-writing.html">Blog Writing</a></li><li><a href="/copywriting.html">Copywriting</a></li><li><a href="/script-writing.html">Script Writing</a></li><li><a href="/translation-services.html">Translation & Localisation</a></li></ul></div>
            </div>
          </div>
          <div className="f-bottom">
            <span>© {new Date().getFullYear()} Premium Freelancing Agency. All rights reserved.</span>
            <span><a href="/privacy-policy.html">Privacy</a> · <a href="/terms.html">Terms</a> · <a href="/sitemap.html">Sitemap</a></span>
          </div>
        </div>
      </footer>

      {/* Interactive Main JS Script */}
      <Script src="/assets/main.js" strategy="afterInteractive" />
    </>
  );
}


