import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: 'Contact Axio Future | Discuss Your Project',
  description: 'Have something worth building? Let\'s talk. Reach out to Axio Future for websites, digital products, business systems, and software infrastructure.',
};

export default function Page() {
  return (
    <SiteShell showCta={false}>
      <main id="main">
        <section className="phero">
          <div className="wrap">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link> / <span aria-current="page">Contact</span>
            </nav>
            <div className="hero-grid">
              <div>
                <div className="eyebrow" data-anim>Start Here</div>
                <h1 className="kin-h">Have something worth building? Let&apos;s talk.</h1>
              </div>
              <div>
                <p className="lead" data-anim data-delay="120">
                  Tell us what you are trying to build. We review your requirements, architectural complexity, and timeline, then provide straightforward recommendations and transparent pricing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ paddingTop: "1rem" }}>
          <div className="wrap">
            <div className="grid g2" style={{ background: "none", gap: "clamp(24px,4vw,48px)", alignItems: "start" }}>
              <ContactForm />

              <div data-anim="right">
                <div className="rv zoom ar-16">
                  <img
                    className="ph"
                    src="/assets/img/ph-meeting.webp"
                    alt="Axio Future technical consultation"
                    width={1600}
                    height={1000}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="box" style={{ margin: "1.2rem 0 1rem" }}>
                  <h3>What to expect</h3>
                  <ul className="tick" style={{ marginTop: ".6rem" }}>
                    <li>Direct response from an engineer who understands systems</li>
                    <li>Honest evaluation of technical feasibility and scope</li>
                    <li>Transparent pricing with zero hidden charges</li>
                    <li>Full source code and architecture ownership on completion</li>
                  </ul>
                </div>
                <div className="box" style={{ marginBottom: "1rem" }}>
                  <h3>Direct Contact</h3>
                  <ul className="ct-list">
                    <li>
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
                        <path d="M3 6l9 7 9-7" />
                      </svg>
                      <a href="mailto:hello@axiofuture.com">hello@axiofuture.com</a>
                    </li>
                  </ul>
                  <p className="note">Remote-first software company serving businesses in India and worldwide.</p>
                </div>
                <div className="box">
                  <h3>Engineering Focus</h3>
                  <div className="cap-row">
                    <span>Websites (Starter, Business, Growth)</span>
                    <span className="chip ok">Available</span>
                  </div>
                  <div className="cap-row">
                    <span>Digital Products &amp; Web Apps</span>
                    <span className="chip ok">Available</span>
                  </div>
                  <div className="cap-row">
                    <span>Business Systems &amp; Automation</span>
                    <span className="chip ok">Available</span>
                  </div>
                  <div className="cap-row">
                    <span>Platforms &amp; Multi-Tenant SaaS</span>
                    <span className="chip ok">Available</span>
                  </div>
                  <div className="cap-row">
                    <span>Software Infrastructure &amp; APIs</span>
                    <span className="chip ok">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
