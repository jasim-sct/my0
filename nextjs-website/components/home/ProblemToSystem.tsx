import Link from "next/link";

type ProblemMap = {
  problem: string;
  symptom: string;
  impact: string;
  solution: string;
  capabilityName: string;
  capabilityHref: string;
  proofName: string;
  proofHref: string;
};

const PROBLEMS: ProblemMap[] = [
  {
    problem: "Spreadsheets become a business bottleneck",
    symptom: "Teams manage critical customer records, orders, or operational queues in shared Google Sheets with no role controls.",
    impact: "Accidental data overwrites, zero audit history, sluggish sheets under thousands of rows, and manual copy-pasting.",
    solution: "A dedicated internal business system with a relational database, role-based access, automated audit logging, and custom search filters.",
    capabilityName: "Business Systems",
    capabilityHref: "/services/business-systems",
    proofName: "RELAY Operations Platform",
    proofHref: "/projects/relay",
  },
  {
    problem: "Manual, repetitive workflows drain team hours",
    symptom: "Employees spend hours each week re-entering data between tools, chasing status updates, or manually scraping records.",
    impact: "High human error rate, delayed customer responses, and inability to handle higher volume without hiring more staff.",
    solution: "Event-driven background automation connecting data ingestion, status pipelines, automated notifications, and CSV exports.",
    capabilityName: "Business Systems",
    capabilityHref: "/services/business-systems",
    proofName: "RELAY Scraper Pipeline",
    proofHref: "/projects/relay",
  },
  {
    problem: "A business outgrows off-the-shelf page builders",
    symptom: "Website relies on heavy plugins and drag-and-drop builders that produce bloated code, layout shifts, and slow loads on mobile.",
    impact: "Poor Google Core Web Vitals scores, high mobile bounce rates, and lost organic search ranking to faster competitors.",
    solution: "An engineered Next.js website with strict TypeScript, sub-second LCP, zero layout shift, and semantic SEO architecture.",
    capabilityName: "Websites",
    capabilityHref: "/services/websites",
    proofName: "Terra & Co Commerce",
    proofHref: "/projects/terra",
  },
  {
    problem: "Multiple software tools cannot communicate",
    symptom: "Customer data lives in one app, billing in another, and fulfillment in a third, with zero bi-directional sync.",
    impact: "Data silos, inconsistent customer records, duplicate work, and lack of unified operational visibility for management.",
    solution: "A custom software integration layer with typed REST APIs, webhook listeners, idempotency guards, and unified data views.",
    capabilityName: "Software Infrastructure",
    capabilityHref: "/services/software-infrastructure",
    proofName: "Software Infrastructure",
    proofHref: "/services/software-infrastructure",
  },
  {
    problem: "E-commerce requires custom business rules & catalog scale",
    symptom: "Generic storefront templates break down under complex product variants, custom promo engines, or multi-step validation.",
    impact: "Checkout friction, cart abandonment, and inability to implement business-specific discount or bundle logic.",
    solution: "A headless e-commerce platform with persistent cart state, dynamic variant matrices, and streamlined checkout wizards.",
    capabilityName: "Platforms",
    capabilityHref: "/services/platforms",
    proofName: "Lumen Commerce Storefront",
    proofHref: "/projects/shop",
  },
  {
    problem: "Unique company methodology needs to become a digital product",
    symptom: "A consulting firm, SaaS startup, or creator has unique intellectual property currently delivered through manual decks or spreadsheets.",
    impact: "Cannot scale revenue without linear human labor; missed opportunity to offer an interactive, sticky self-serve product.",
    solution: "A customer-facing web application with an interactive interface, workspace canvas, state persistence, and subscription gating.",
    capabilityName: "Digital Products",
    capabilityHref: "/services/digital-products",
    proofName: "FLUX AI Studio",
    proofHref: "/projects/flux",
  },
];

export function ProblemToSystem() {
  return (
    <section className="band">
      <div className="wrap">
        <div className="s-head">
          <div>
            <div className="eyebrow" data-anim>Business Architecture</div>
            <h2 className="kin-h" data-anim>Turning operational problems into systems</h2>
          </div>
          <div>
            <p className="lead" data-anim>
              Software is most effective when it removes a specific, measurable bottleneck in how your business runs. Here is how we map common operational limits to engineered systems.
            </p>
          </div>
        </div>

        <div className="grid g3" style={{ marginTop: "1rem" }}>
          {PROBLEMS.map((item, idx) => (
            <article key={idx} className="glass card p2s-card" data-anim data-delay={idx * 50}>
              <div>
                <span className="p2s-badge">Problem {idx + 1}</span>
                <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>{item.problem}</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--muted)", marginBottom: "0.6rem" }}>
                  <strong>Symptom:</strong> {item.symptom}
                </p>
                <p style={{ fontSize: "0.88rem", color: "var(--muted)", margin: 0 }}>
                  <strong>Operational Impact:</strong> {item.impact}
                </p>
              </div>

              <div className="p2s-sol">
                <div className="p2s-sol-title">Engineered Solution:</div>
                <p style={{ fontSize: "0.9rem", color: "var(--ink)", margin: "0 0 0.8rem" }}>
                  {item.solution}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
                  <Link href={item.capabilityHref} className="pl" style={{ fontSize: "0.82rem" }}>
                    {item.capabilityName} →
                  </Link>
                  <Link href={item.proofHref} className="pl" style={{ fontSize: "0.82rem", color: "var(--muted)" }}>
                    Inspect build ↗
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
