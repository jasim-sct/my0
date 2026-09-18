"use client";

import { useState } from "react";
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
  const [activeIdx, setActiveIdx] = useState(0);
  const activeItem = PROBLEMS[activeIdx];

  return (
    <section className="band-dark" style={{ borderTop: "1px solid var(--rule)" }}>
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

        <div className="grid g2" style={{ marginTop: "2rem", gap: "3rem", background: "none" }} data-anim>
          {/* Left: Interactive List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {PROBLEMS.map((item, idx) => (
              <button
                key={idx}
                className={`p2s-btn ${idx === activeIdx ? "is-active" : ""}`}
                onClick={() => setActiveIdx(idx)}
                style={{
                  textAlign: "left",
                  padding: "1.2rem",
                  borderRadius: "8px",
                  background: idx === activeIdx ? "rgba(255,255,255,0.05)" : "transparent",
                  border: idx === activeIdx ? "1px solid rgba(255,255,255,0.1)" : "1px solid transparent",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", color: idx === activeIdx ? "var(--acc)" : "var(--muted)", marginBottom: "0.4rem" }}>
                  {item.badge}
                </div>
                <h3 style={{ fontSize: "1.1rem", margin: 0, color: idx === activeIdx ? "var(--ink)" : "var(--txt-dim)", fontWeight: idx === activeIdx ? 600 : 400 }}>
                  {item.bottleneck}
                </h3>
              </button>
            ))}
          </div>

          {/* Right: Immersive System View */}
          <div className="glass card" style={{ padding: "2.5rem", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            {/* Visual Flowchart Presentation */}
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "48px", height: "48px", borderRadius: "50%", background: "rgba(255,0,0,0.1)", color: "#ff4d4d", marginBottom: "1rem" }}>
                <AxioIcon name="challenge" size={24} aria-hidden="true" />
              </div>
              <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--muted)", margin: "0 0 0.5rem" }}>Business Bottleneck</h4>
              <p style={{ fontSize: "1.2rem", fontWeight: 500, color: "var(--ink)", margin: 0, maxWidth: "40ch", marginInline: "auto" }}>
                "{activeItem.bottleneck}"
              </p>
            </div>

            <div style={{ position: "relative", textAlign: "center", margin: "0 auto 3rem", width: "100%", maxWidth: "300px" }}>
              <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: "1px", background: "linear-gradient(to bottom, rgba(255,255,255,0.1), var(--acc), rgba(255,255,255,0.1))", transform: "translateX(-50%)", zIndex: 0 }} />
              <div style={{ position: "relative", zIndex: 1, padding: "1.5rem 0" }}>
                <div style={{ display: "inline-flex", background: "var(--surface)", border: "1px solid var(--acc)", padding: "0.4rem 1rem", borderRadius: "20px", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--acc)", fontWeight: 600 }}>
                  Engineered Response
                </div>
              </div>
            </div>

            <div style={{ textAlign: "center", background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "12px", padding: "2rem" }}>
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "48px", height: "48px", borderRadius: "50%", background: "rgba(0, 229, 255, 0.1)", color: "var(--acc)", marginBottom: "1rem" }}>
                <AxioIcon name={activeItem.icon} size={24} aria-hidden="true" />
              </div>
              <p style={{ fontSize: "1.1rem", color: "var(--ink)", lineHeight: 1.6, margin: "0 0 1.5rem" }}>
                {activeItem.solution}
              </p>
              
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
                <Link href={activeItem.capabilityHref} className="btn btn-sm" style={{ background: "transparent", border: "1px solid var(--rule)" }}>
                  Capability: {activeItem.capabilityName} <span className="gt">&rsaquo;</span>
                </Link>
                <Link href={activeItem.proofHref} className="btn btn-sm btn-primary">
                  Proof: {activeItem.proofName} <span className="gt">&rsaquo;</span>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
