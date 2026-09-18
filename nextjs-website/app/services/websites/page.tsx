import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: "Website Development in India | Professional Business Websites | Axio Future",
  description: "Professional, search-friendly website development for businesses in India. Transparent packages from ₹7,999 with 1 year hosting and SSL included.",
};

export default function Page() {
  return (
    <SiteShell showCta={true}>
      <main id="main">
        
<section className="phero">
  <div className="wrap">
    <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/services">Capabilities</Link> / <span aria-current="page">Websites</span></nav>
    <div className="hero-grid">
      <div>
        <div className="eyebrow" data-anim>Primary Commercial Offer</div>
        <h1 className="kin-h">Professional business websites, built properly.</h1>
      </div>
      <div>
        <p className="lead" data-anim data-delay="120">
          We engineer fast, responsive, search-friendly websites for businesses that need a credible and commercially effective digital presence. No generic page-builder bloat, no hidden renewals, and no agency theatre.
        </p>
        <div className="hero-cta" data-anim data-delay="180">
          <a className="btn btn-primary" href="#packages">
            <span>Compare website packages</span>
            <span className="gt">&rsaquo;</span>
          </a>
          <Link className="btn" href="/contact">
            <span>Discuss your project</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

{/* 1. What is it? & 2. What problem does it solve? */}
<section className="band">
  <div className="wrap">
    <div className="grid g2" style={{"background":"none","gap":"clamp(24px,4vw,56px)","alignItems":"center"}}>
      <div data-anim="left">
        <div className="eyebrow">The Challenge</div>
        <h2 className="kin-h">Why most business websites fail to generate results</h2>
        <p className="lead">
          Small and medium businesses in India typically get caught in one of two extremes: paying an expensive agency tens of thousands of rupees for bloated templates that take months to deliver, or using DIY drag-and-drop builders that produce slow, unresponsive pages invisible to Google.
        </p>
        <p className="lead">
          A business website must do two things well: load instantly so prospective customers stay on the page, and present a structured, credible offer that converts visits into direct enquiries.
        </p>
      </div>
      <div data-anim="right">
        <div className="rv zoom ar-43">
          <img className="ph" src="/assets/img/ph-workshop.webp" alt="Website wireframing and performance planning" width="1600" height="1000" loading="lazy" decoding="async" />
        </div>
      </div>
    </div>
  </div>
</section>

{/* 3. What does Axio Future build? & 4. How is it approached? */}
<section>
  <div className="wrap">
    <div className="s-head">
      <div>
        <div className="eyebrow" data-anim>Our Approach</div>
        <h2 className="kin-h" data-anim>Engineered for performance and search visibility</h2>
      </div>
      <div>
        <p className="lead" data-anim>
          We build with semantic HTML5, modern CSS, and Next.js/React. Every page is architected to rank organically and provide a frictionless user experience on mobile devices.
        </p>
      </div>
    </div>
    <div className="grid g3">
      <article className="glass card" data-anim data-delay="0">
        <span className="idx">01</span>
        <h3>Sub-second loading &amp; Core Web Vitals</h3>
        <p>Zero unnecessary third-party scripts or bulky builder runtimes. Fast loading keeps bounce rates low and improves Google Quality Scores.</p>
      </article>
      <article className="glass card" data-anim data-delay="60">
        <span className="idx">02</span>
        <h3>Search-Engine-Friendly Architecture</h3>
        <p>Proper heading hierarchy (H1–H3), structured JSON-LD data, semantic HTML tags, XML sitemaps, and robots.txt configuration out of the box.</p>
      </article>
      <article className="glass card" data-anim data-delay="120">
        <span className="idx">03</span>
        <h3>Mobile-First Responsive Behavior</h3>
        <p>Over 70% of web traffic in India comes from mobile devices. We test every breakpoint to guarantee readable type, responsive grids, and accessible touch targets.</p>
      </article>
    </div>
  </div>
</section>

{/* 5. Technologies & 6. Real Work */}
<section className="band-dark">
  <div className="wrap">
    <div className="grid g2" style={{"background":"none","gap":"clamp(24px,4vw,56px)","alignItems":"center"}}>
      <div>
        <div className="eyebrow" data-anim>Technology &amp; Evidence</div>
        <h2 className="kin-h" data-anim>Proven technology, working demonstrations</h2>
        <p className="lead" data-anim>
          We build using TypeScript, React, Next.js, Node.js, and modern CSS, hosted on high-availability global CDNs with automated SSL.
        </p>
        <p className="lead" data-anim>
          You do not have to imagine the output quality. Explore our live builds to test interactive design, responsive behaviors, and instant load speeds:
        </p>
        <div className="mk-row" data-anim>
          <Link href="/projects/terra" className="mk-chip">Terra &amp; Co (Brand &amp; Commerce) →</Link>
          <Link href="/projects/shop" className="mk-chip">Lumen Commerce Storefront →</Link>
          <Link href="/projects/dashboard" className="mk-chip">Northwind Analytics Dashboard →</Link>
        </div>
      </div>
      <div className="rv ar-43" data-anim>
        <img className="ph" src="/assets/img/ph-desk.webp" alt="Axio Future software workstation" width={1600} height={1000}  />
      </div>
    </div>
  </div>
</section>

{/* 7. Packages & Transparent Pricing */}
<section id="packages">
  <div className="wrap">
    <div className="s-head">
      <div>
        <div className="eyebrow" data-anim>Commercial Offerings</div>
        <h2 className="kin-h" data-anim>Transparent website packages</h2>
      </div>
      <div>
        <p className="lead" data-anim>
          Clear, fixed-price options tailored for Indian small businesses and growing enterprises. No ambiguous ranges, no unexpected surprises.
        </p>
      </div>
    </div>

    <div className="grid g3">
      {/* Starter Website */}
      <article className="glass card plan" data-anim data-delay="0">
        <h3>Starter Website</h3>
        <div className="price">₹7,999</div>
        <p className="note">Accessible digital starting point for local &amp; small businesses</p>
        <ul className="tick">
          <li><strong>1–3 pages</strong> (Home, About/Services, Contact)</li>
          <li>Responsive mobile-first design</li>
          <li>Basic brand customization</li>
          <li>Domain connection setup</li>
          <li>Production hosting on fast CDN</li>
          <li>Automated SSL security certificate</li>
          <li>Standard deployment &amp; go-live</li>
          <li><strong>1 year hosting coverage included</strong></li>
        </ul>
        <Link className="btn btn-full" href="/contact"><span>Choose Starter</span></Link>
      </article>

      {/* Business Website */}
      <article className="glass card plan featured" data-anim data-delay="60">
        <span className="badge">Most chosen</span>
        <h3>Business Website</h3>
        <div className="price">₹14,999</div>
        <p className="note">Primary offering for established businesses wanting leads</p>
        <ul className="tick">
          <li><strong>5–7 pages</strong> (Home, About, Services, Case Studies, Contact)</li>
          <li>Custom visual implementation</li>
          <li>Responsive design across all devices</li>
          <li>Domain connection &amp; DNS configuration</li>
          <li>Basic SEO setup &amp; search-friendly structure</li>
          <li>Google Analytics integration</li>
          <li>Automated SSL security certificate</li>
          <li>Production deployment &amp; optimization</li>
          <li><strong>1 year hosting coverage included</strong></li>
        </ul>
        <Link className="btn btn-primary btn-full" href="/contact"><span>Choose Business</span></Link>
      </article>

      {/* Growth Website */}
      <article className="glass card plan" data-anim data-delay="120">
        <h3>Growth Website</h3>
        <div className="price">₹24,999</div>
        <p className="note">Engineered for businesses actively pursuing organic search</p>
        <ul className="tick">
          <li><strong>Custom design &amp; multiple pages</strong></li>
          <li>Advanced responsive implementation</li>
          <li>SEO-focused site structure &amp; metadata</li>
          <li>XML sitemap &amp; robots.txt configuration</li>
          <li>Structured data (Schema.org) where appropriate</li>
          <li>Performance &amp; Core Web Vitals optimization</li>
          <li>Google Analytics &amp; Google Search Console setup</li>
          <li>Automated SSL security certificate</li>
          <li><strong>1 year hosting coverage included</strong></li>
        </ul>
        <Link className="btn btn-full" href="/contact"><span>Choose Growth</span></Link>
      </article>
    </div>

    {/* Hosting Transparency */}
    <div className="glass card" style={{"marginTop":"2.5rem","padding":"2rem"}} data-anim>
      <div className="eyebrow">Hosting Transparency</div>
      <h3 style={{"margin":"0.5rem 0 1rem"}}>What happens with hosting after the first year?</h3>
      <p className="lead" style={{"marginBottom":"1rem"}}>
        Every website requires high-speed server infrastructure, DNS routing, and SSL certificates to stay accessible online. We do not make hosting a hidden catch:
      </p>
      <div className="grid g2" style={{"background":"none","gap":"1.5rem"}}>
        <div>
          <h4 style={{"marginBottom":"0.35rem"}}>First Year Included</h4>
          <p style={{"color":"var(--txt-dim)","margin":"0"}}>
            All packages (₹7,999 / ₹14,999 / ₹24,999) include your first year of production hosting, SSL certificates, and initial deployment.
          </p>
        </div>
        <div>
          <h4 style={{"marginBottom":"0.35rem"}}>Transparent Annual Renewal: ₹2,999–₹5,999/year</h4>
          <p style={{"color":"var(--txt-dim)","margin":"0"}}>
            Subsequent renewals range from ₹2,999 to ₹5,999 per year depending on site scale and maintenance needs. Custom high-traffic systems are scoped separately.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* FAQ Section */}
<section id="faq">
  <div className="wrap narrow">
    <div className="center">
      <div className="eyebrow" data-anim>FAQ</div>
      <h2 data-anim>Frequently asked questions</h2>
    </div>
    <div className="faq" style={{"marginTop":"1.8rem"}}>
      <details className="glass" data-anim data-delay="0">
        <summary>How long does it take to launch a website?</summary>
        <p>Starter packages typically deploy within 7 to 10 working days. Business and Growth packages take 2 to 3 weeks, including design alignment, content integration, and SEO verification.</p>
      </details>
      <details className="glass" data-anim data-delay="40">
        <summary>Do I own my website and code?</summary>
        <p>Yes. Upon completion and final handover, all custom code, assets, and design files are transferred to you unconditionally. We do not lock you into proprietary hosting.</p>
      </details>
      <details className="glass" data-anim data-delay="80">
        <summary>Can I upgrade from Starter to Business later?</summary>
        <p>Yes. Our codebase is structured modularly. If you start with a 3-page site and need additional service pages or analytics integration later, we can expand your system smoothly.</p>
      </details>
    </div>
  </div>
</section>

      </main>
    </SiteShell>
  );
}
