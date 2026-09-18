import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";

export const metadata: Metadata = {
  title: 'About Axio Future | Engineering Point of View',
  description: 'Why Axio Future exists, what we believe about software engineering, how we architect reliable digital systems, and what we are building toward.',
};

export default function Page() {
  return (
    <SiteShell showCta={true}>
      <main id="main">
        <section className="phero">
          <div className="wrap">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link> / <span aria-current="page">About</span>
            </nav>
            <div className="hero-grid">
              <div>
                <div className="eyebrow" data-anim>
                  About Axio Future
                </div>
                <h1 className="kin-h">Engineering for what comes next.</h1>
              </div>
              <div>
                <p className="lead" data-anim data-delay="120">
                  Axio Future exists to make rigorous software engineering and reliable digital systems accessible to businesses that need their technology to work without fragile abstractions or agency theatre.
                </p>
              </div>
            </div>
            <div className="phero-img">
              <div className="rv ar-21 ">
                <img
                  className="ph "
                  src="/assets/img/ph-office.webp"
                  alt="Axio Future engineering team at work"
                  width="1600"
                  height="1000"
                  sizes="(max-width:900px) 100vw, 1320px"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  style={{ backgroundImage: "url(/assets/img/ph-office-tiny.webp)" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Axio Future exists */}
        <section className="band">
          <div className="wrap">
            <div className="grid g2" style={{ background: "none", gap: "clamp(24px,4vw,56px)", alignItems: "center" }}>
              <div data-anim="left">
                <div className="eyebrow">Why We Exist</div>
                <h2 className="kin-h">The gap between generic websites and bloated custom software</h2>
                <p className="lead">
                  Most businesses face an unfortunate choice when investing in digital technology: pay a marketing agency for an off-the-shelf page-builder that slows down under real traffic, or hire an enterprise software firm with inflated billing and disconnected project management.
                </p>
                <p className="lead">
                  We built Axio Future to close that gap. We engineer fast, clean, and reliable systems using modern software engineering practices, while keeping our commercial offerings straightforward, transparent, and accessible to growing businesses in India and worldwide.
                </p>
              </div>
              <div data-anim="right">
                <div className="rv zoom ar-43 ">
                  <img
                    className="ph "
                    src="/assets/img/ph-meeting.webp"
                    alt="Axio Future software architecture planning"
                    width="1600"
                    height="1000"
                    sizes="(max-width:900px) 92vw, 620px"
                    loading="lazy"
                    decoding="async"
                    style={{ backgroundImage: "url(/assets/img/ph-meeting-tiny.webp)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What we believe */}
        <section>
          <div className="wrap">
            <div className="s-head">
              <div>
                <div className="eyebrow" data-anim>
                  Our Principles
                </div>
                <h2 className="kin-h" data-anim>
                  What we believe about software
                </h2>
              </div>
              <div>
                <p className="lead" data-anim>
                  Technology should reduce operational drag, not introduce new layers of failure.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginTop: "4rem" }}>
              <div data-anim style={{ marginBottom: "5rem" }}>
                <span style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--acc)", display: "block", marginBottom: "1rem" }}>
                  01
                </span>
                <h3 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", margin: "0 0 1.5rem", lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: "25ch" }}>
                  Software is a system, not just an interface
                </h3>
                <p style={{ fontSize: "1.2rem", color: "var(--muted)", margin: 0, maxWidth: "50ch", lineHeight: 1.6 }}>
                  We design data flow, state management, and edge cases before polishing visual styles.
                </p>
              </div>

              <div data-anim style={{ marginBottom: "5rem", display: "flex", justifyContent: "flex-end" }}>
                <div style={{ maxWidth: "600px" }}>
                  <span style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--acc)", display: "block", marginBottom: "1rem" }}>
                    02
                  </span>
                  <h3 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", margin: "0 0 1.5rem", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
                    Performance is a foundational feature
                  </h3>
                  <p style={{ fontSize: "1.1rem", color: "var(--muted)", margin: 0, lineHeight: 1.6 }}>
                    We optimize Core Web Vitals, minimize client bundles, and enforce semantic HTML so applications feel instant.
                  </p>
                </div>
              </div>

              <div data-anim style={{ marginBottom: "2rem" }}>
                <span style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--acc)", display: "block", marginBottom: "1rem" }}>
                  03
                </span>
                <h3 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", margin: "0 0 1rem", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
                  Total transparency over agency mystery
                </h3>
                <p style={{ fontSize: "1.1rem", color: "var(--muted)", margin: 0, maxWidth: "60ch", lineHeight: 1.6 }}>
                  You receive clean, documented source code, direct technical communication, and clear pricing without hidden retainers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How we build */}
        <section className="band-dark">
          <div className="wrap">
            <div className="s-head" style={{ borderColor: "rgba(255,255,255,.16)" }}>
              <div>
                <div className="eyebrow" data-anim>
                  Engineering Practice
                </div>
                <h2 className="kin-h" data-anim>
                  How we build
                </h2>
              </div>
              <div>
                <p className="lead" data-anim>
                  Evidence-based decisions across architecture, data, security, and deployment.
                </p>
              </div>
            </div>

            <div style={{ marginTop: "4rem", display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
              {/* Connecting Line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: "50%",
                  width: "2px",
                  background: "linear-gradient(to bottom, rgba(0,229,255,0.4), rgba(0,229,255,0.1))",
                  transform: "translateX(-50%)",
                  zIndex: 0,
                }}
              ></div>

              <div data-anim style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", textAlign: "center", marginBottom: "3rem", position: "relative", zIndex: 1, background: "var(--surface)", padding: "1.5rem 3rem", borderRadius: "100px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
                <div style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--acc)" }}>
                  Phase 01
                </div>
                <h3 style={{ fontSize: "1.4rem", margin: 0, color: "#fff" }}>Ideation &amp; System Modeling</h3>
              </div>

              <div style={{ width: "20px", height: "20px", borderLeft: "2px solid var(--acc)", borderBottom: "2px solid var(--acc)", transform: "rotate(-45deg)", marginBottom: "3rem", position: "relative", zIndex: 1 }}></div>

              <div data-anim style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", textAlign: "center", marginBottom: "3rem", position: "relative", zIndex: 1, background: "var(--surface)", padding: "1.5rem 3rem", borderRadius: "100px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
                <div style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--acc)" }}>
                  Phase 02
                </div>
                <h3 style={{ fontSize: "1.4rem", margin: 0, color: "#fff" }}>Architecture &amp; API Contracts</h3>
              </div>

              <div style={{ width: "20px", height: "20px", borderLeft: "2px solid var(--acc)", borderBottom: "2px solid var(--acc)", transform: "rotate(-45deg)", marginBottom: "3rem", position: "relative", zIndex: 1 }}></div>

              <div data-anim style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", textAlign: "center", marginBottom: "3rem", position: "relative", zIndex: 1, background: "var(--surface)", padding: "1.5rem 3rem", borderRadius: "100px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
                <div style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--acc)" }}>
                  Phase 03
                </div>
                <h3 style={{ fontSize: "1.4rem", margin: 0, color: "#fff" }}>Implementation &amp; Build</h3>
              </div>

              <div style={{ width: "20px", height: "20px", borderLeft: "2px solid var(--acc)", borderBottom: "2px solid var(--acc)", transform: "rotate(-45deg)", marginBottom: "3rem", position: "relative", zIndex: 1 }}></div>

              <div data-anim style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", textAlign: "center", marginBottom: "3rem", position: "relative", zIndex: 1, background: "var(--surface)", padding: "1.5rem 3rem", borderRadius: "100px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
                <div style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--acc)" }}>
                  Phase 04
                </div>
                <h3 style={{ fontSize: "1.4rem", margin: 0, color: "#fff" }}>Validation &amp; Quality Check</h3>
              </div>

              <div style={{ width: "20px", height: "20px", borderLeft: "2px solid var(--acc)", borderBottom: "2px solid var(--acc)", transform: "rotate(-45deg)", marginBottom: "3rem", position: "relative", zIndex: 1 }}></div>

              <div data-anim style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", textAlign: "center", position: "relative", zIndex: 1, background: "var(--surface)", padding: "1.5rem 3rem", borderRadius: "100px", border: "1px solid var(--acc)", boxShadow: "0 0 20px rgba(0,229,255,0.2)" }}>
                <div style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--acc)" }}>
                  Phase 05
                </div>
                <h3 style={{ fontSize: "1.4rem", margin: 0, color: "#fff" }}>Zero-Downtime Deployment</h3>
              </div>
            </div>
          </div>
        </section>

        {/* What we're building toward */}
        <section>
          <div className="wrap narrow">
            <div className="eyebrow" data-anim>
              The Road Ahead
            </div>
            <h2 className="kin-h" data-anim>
              What we are building toward
            </h2>
            <p className="lead" data-anim>
              Axio Future is an engineering-first technology company. We build commercial websites that help Indian SMBs compete at the highest digital standards, and we continuously engineer internal systems, e-commerce architectures, and automation tools that push what small, focused technical teams can achieve.
            </p>
            <p className="lead" data-anim>
              We do not measure progress in headcount or artificial marketing accolades. We measure it in clean deployments, resilient architectures, and software that remains maintainable years after launch.
            </p>
          </div>
        </section>

        <section id="faq">
          <div className="wrap narrow">
            <div className="center">
              <div className="eyebrow" data-anim>
                FAQ
              </div>
              <h2 data-anim>Common questions</h2>
            </div>
            <div className="faq" style={{ marginTop: "1.8rem" }}>
              <details className="glass" data-anim data-delay="0">
                <summary>What technology stack does Axio Future specialize in?</summary>
                <p>
                  Our core stack includes TypeScript, React, Next.js, Node.js, NestJS, Express.js, PostgreSQL, MongoDB, REST APIs, Nginx, and cloud infrastructure on AWS and Vercel.
                </p>
              </details>
              <details className="glass" data-anim data-delay="40">
                <summary>Who owns the source code upon delivery?</summary>
                <p>
                  You own all custom source code, documentation, and assets unconditionally. We transfer repository access directly to you upon project handover.
                </p>
              </details>
              <details className="glass" data-anim data-delay="80">
                <summary>How do you handle maintenance and hosting?</summary>
                <p>
                  Our website packages include hosting and SSL for the first year. For ongoing maintenance and hosting, we offer transparent renewal packages between ₹2,999 and ₹5,999/year. Custom platforms and high-traffic applications are scoped according to infrastructure requirements.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
