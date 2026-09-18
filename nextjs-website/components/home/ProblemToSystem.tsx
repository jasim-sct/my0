import Link from "next/link";
import { AxioIcon } from "@/components/icons";
import type { AxioIconName } from "@/components/icons";

type ProblemMap = {
  icon: AxioIconName;
  badge: string;
  bottleneck: string;
  context: string;
  solution: string;
  capabilityName: string;
  capabilityHref: string;
  proofName: string;
  proofHref: string;
};

const PROBLEMS: ProblemMap[] = [
  {
    icon: "database",
    badge: "01 · Operations",
    bottleneck: "When spreadsheets become a business bottleneck",
    context: "Shared sheets lack role controls, atomic updates, and data validation—leading to overwritten customer records, lost inventory updates, and manual copy-pasting.",
    solution: "We replace fragile spreadsheets with centralized relational databases, role-based permissions, and instant audit logging.",
    capabilityName: "Business Systems",
    capabilityHref: "/services/business-systems",
    proofName: "RELAY Platform",
    proofHref: "/projects/relay",
  },
  {
    icon: "automation",
    badge: "02 · Automation",
    bottleneck: "Manual, repetitive workflows drain team hours",
    context: "Hours lost re-entering data across tools, chasing status updates, and manually compiling reports—causing delayed customer responses and high operational error.",
    solution: "Event-driven background pipelines that ingest data, sync third-party tools, and trigger notifications without human intervention.",
    capabilityName: "Business Systems",
    capabilityHref: "/services/business-systems",
    proofName: "RELAY Scraper Pipeline",
    proofHref: "/projects/relay",
  },
  {
    icon: "page-speed",
    badge: "03 · Web Infrastructure",
    bottleneck: "When businesses outgrow off-the-shelf page builders",
    context: "Plugin bloat and heavy drag-and-drop themes cause cumulative layout shifts, sluggish mobile page loads, and declining search visibility.",
    solution: "Engineered Next.js architectures with strict TypeScript, sub-second LCP, zero layout shift, and semantic SEO structure.",
    capabilityName: "Websites",
    capabilityHref: "/services/websites",
    proofName: "Terra & Co Commerce",
    proofHref: "/projects/terra",
  },
  {
    icon: "integration",
    badge: "04 · Integrations",
    bottleneck: "Disconnected software tools operating in silos",
    context: "Customer data in one tool, invoicing in another, fulfillment in a third—resulting in inconsistent customer records and fragmented reporting.",
    solution: "A resilient integration layer with typed REST APIs, webhook listeners, idempotency keys, and unified data pipelines.",
    capabilityName: "Software Infrastructure",
    capabilityHref: "/services/software-infrastructure",
    proofName: "Software Infrastructure",
    proofHref: "/services/software-infrastructure",
  },
  {
    icon: "platforms",
    badge: "05 · E-Commerce",
    bottleneck: "Generic storefronts breaking under custom business rules",
    context: "Off-the-shelf commerce templates struggle with dynamic variant matrices, tiered wholesale pricing, or complex multi-step checkout validation.",
    solution: "Headless e-commerce platforms featuring persistent cart state, custom checkout wizards, and sub-second catalog search.",
    capabilityName: "Platforms",
    capabilityHref: "/services/platforms",
    proofName: "Lumen Commerce",
    proofHref: "/projects/shop",
  },
  {
    icon: "web-apps",
    badge: "06 · Product Architecture",
    bottleneck: "Turning company methodology into a scalable product",
    context: "Valuable proprietary knowledge locked in static slide decks or manual consulting, limiting revenue growth to linear employee hours.",
    solution: "Customer-facing web applications with interactive workspace canvases, state persistence, and self-serve subscriber workflows.",
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
            <div className="eyebrow" data-anim>Operational Bottlenecks</div>
            <h2 className="kin-h" data-anim>Turning business problems into systems</h2>
          </div>
          <div>
            <p className="lead" data-anim>
              Software creates value when it resolves a specific constraint in how your company operates. Here is how we map recurring operational bottlenecks to engineered architectures.
            </p>
          </div>
        </div>

        <div className="grid g3" style={{ marginTop: "1rem" }}>
          {PROBLEMS.map((item, idx) => (
            <article key={idx} className="glass card p2s-card" data-anim data-delay={idx * 50}>
              <div>
                <span className="p2s-badge">
                  <AxioIcon name={item.icon} size={13} aria-hidden="true" style={{ marginRight: "0.35em", opacity: 0.75 }} />
                  {item.badge}
                </span>
                <h3 style={{ fontSize: "1.15rem", marginBottom: "0.6rem", lineHeight: 1.35 }}>{item.bottleneck}</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>
                  {item.context}
                </p>
              </div>

              <div className="p2s-sol">
                <div className="p2s-sol-title">
                  <AxioIcon name="solution" size={14} aria-hidden="true" style={{ marginRight: "0.35em", opacity: 0.7 }} />
                  Engineered Solution:
                </div>
                <p style={{ fontSize: "0.9rem", color: "var(--ink)", lineHeight: 1.55, margin: "0 0 0.8rem" }}>
                  {item.solution}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
                  <Link href={item.capabilityHref} className="pl" style={{ fontSize: "0.82rem" }}>
                    <span className="icon-label">{item.capabilityName} <AxioIcon name="arrow-right" size={11} aria-hidden="true" /></span>
                  </Link>
                  <Link href={item.proofHref} className="pl" style={{ fontSize: "0.82rem", color: "var(--muted)" }}>
                    <span className="icon-label">{item.proofName} <AxioIcon name="external-link" size={11} aria-hidden="true" /></span>
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
