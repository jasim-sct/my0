"use client";

import { useState } from "react";
import { AxioIcon } from "@/components/icons";
import type { AxioIconName } from "@/components/icons";

type Stage = {
  id: string;
  num: string;
  name: string;
  icon: AxioIconName;
  tagline: string;
  description: string;
  activities: string[];
  deliverable: string;
  criteria: string;
};

const STAGES: Stage[] = [
  {
    id: "problem",
    num: "01",
    name: "Problem",
    icon: "challenge",
    tagline: "Uncovering root operational bottlenecks",
    description: "We map operational drag and manual repetition before proposing any technical intervention.",
    activities: [],
    deliverable: "Domain Constraint Specification",
    criteria: "",
  },
  {
    id: "model",
    num: "02",
    name: "Model",
    icon: "structured-data",
    tagline: "Defining core entities and state boundaries",
    description: "We define real-world entities, relationship cardinalities, and strict state transitions.",
    activities: [],
    deliverable: "Normalized Entity & State Transition Matrix",
    criteria: "",
  },
  {
    id: "design",
    num: "03",
    name: "Design",
    icon: "frontend",
    tagline: "Accessible, high-density interface ergonomics",
    description: "Interfaces engineered for cognitive clarity, rapid task completion, and responsive accessibility.",
    activities: [],
    deliverable: "Tokenized UI Design System",
    criteria: "",
  },
  {
    id: "architecture",
    num: "04",
    name: "Architecture",
    icon: "system-architecture",
    tagline: "Decoupled layers and explicit contracts",
    description: "Strict typed boundaries between user interfaces, API services, and databases.",
    activities: [],
    deliverable: "System Topology & API Contracts",
    criteria: "",
  },
  {
    id: "engineering",
    num: "05",
    name: "Engineering",
    icon: "software-engineering",
    tagline: "Rigorous implementation without dependency bloat",
    description: "Clean TypeScript and optimized queries avoiding massive external runtime libraries.",
    activities: [],
    deliverable: "Clean, Documented Source Code",
    criteria: "",
  },
  {
    id: "integration",
    num: "06",
    name: "Integration",
    icon: "integration",
    tagline: "Resilient connections with third-party ecosystems",
    description: "Robust integration pipelines with idempotency keys, rate limits, and fallback queues.",
    activities: [],
    deliverable: "Bi-directional Synced Integration Pipelines",
    criteria: "",
  },
  {
    id: "deployment",
    num: "07",
    name: "Deployment",
    icon: "deployment",
    tagline: "Stateless containers and hardened edge delivery",
    description: "Systems packaged into reproducible containers behind automated TLS and global CDN caching.",
    activities: [],
    deliverable: "Zero-Downtime Deployment Automation",
    criteria: "",
  },
  {
    id: "evolution",
    num: "08",
    name: "Evolution",
    icon: "evolution",
    tagline: "Monitoring, telemetry, and non-breaking growth",
    description: "Structured telemetry and continuous tuning so the system scales cleanly alongside business volume.",
    activities: [],
    deliverable: "Telemetry & Long-Term Roadmap",
    criteria: "",
  },
];

export function SystemThinking() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = STAGES[activeIdx];

  return (
    <section className="band-dark">
      <div className="wrap">
        <div className="s-head" style={{ borderColor: "rgba(255,255,255,.16)" }}>
          <div>
            <div className="eyebrow" data-anim>System Methodology</div>
            <h2 className="kin-h" data-anim>How Axio Future thinks</h2>
          </div>
          <div>
            <p className="lead" data-anim>
              We do not start with templates or speculative features. We engineer software as a predictable progression from business problem to resilient digital system.
            </p>
          </div>
        </div>

        <div className="system-explorer" data-anim>
          {/* Step Selector Bar */}
          <div className="st-track" role="tablist" aria-label="System thinking stages">
            {STAGES.map((s, idx) => {
              const active = idx === activeIdx;
              return (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-controls={`stage-panel-${s.id}`}
                  id={`stage-tab-${s.id}`}
                  className={`st-step-btn ${active ? "is-active" : ""}`}
                  onClick={() => setActiveIdx(idx)}
                >
                  <span className="st-num">{s.num}</span>
                  <AxioIcon name={s.icon} size={14} aria-hidden="true" style={{ opacity: 0.7 }} />
                  <span>{s.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Detail Panel */}
          <div
            id={`stage-panel-${current.id}`}
            role="tabpanel"
            aria-labelledby={`stage-tab-${current.id}`}
            className="st-detail-card glass card"
            key={current.id}
            style={{ 
              marginTop: "2rem", 
              padding: 0, 
              overflow: "hidden" 
            }}
          >
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
              gap: 0
            }}>
              
              {/* Dominant Visual Panel */}
              <div style={{ 
                background: "rgba(0,0,0,0.3)", 
                borderRight: "1px solid var(--rule)", 
                padding: "3rem", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                position: "relative",
                minHeight: "300px"
              }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, rgba(0, 229, 255, 0.05) 0%, transparent 70%)" }} />
                
                <div style={{ 
                  position: "relative",
                  width: "120px", 
                  height: "120px", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  borderRadius: "24px",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)"
                }}>
                  <div style={{ position: "absolute", top: "-10px", left: "-10px", right: "-10px", bottom: "-10px", border: "1px dashed rgba(255,255,255,0.1)", borderRadius: "34px", zIndex: 0 }} />
                  <div style={{ position: "relative", zIndex: 1, color: "var(--acc)", filter: "drop-shadow(0 0 12px rgba(0, 229, 255, 0.3))" }}>
                    <AxioIcon name={current.icon} size={48} aria-hidden="true" />
                  </div>
                </div>
                
                <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem", fontSize: "4rem", fontWeight: 700, color: "rgba(255,255,255,0.03)", lineHeight: 1, letterSpacing: "-0.04em", userSelect: "none" }}>
                  {current.num}
                </div>
              </div>

              {/* Text & Data Panel */}
              <div style={{ padding: "3rem" }}>
                <span className="st-meta-label" style={{ display: "inline-block", background: "rgba(255,255,255,0.05)", padding: "0.3rem 0.8rem", borderRadius: "100px", marginBottom: "1.5rem" }}>
                  Phase {current.num}
                </span>
                
                <h3 style={{ fontSize: "1.6rem", margin: "0 0 0.8rem", color: "var(--ink)", fontWeight: 600, letterSpacing: "-0.01em" }}>
                  {current.name}
                </h3>
                
                <div style={{ fontSize: "1.1rem", color: "var(--acc)", fontWeight: 500, marginBottom: "1rem" }}>
                  {current.tagline}
                </div>
                
                <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.6, marginBottom: "2rem", maxWidth: "45ch" }}>
                  {current.description}
                </p>
                
                <div style={{ borderTop: "1px solid var(--rule)", paddingTop: "1.5rem" }}>
                  <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--muted)", marginBottom: "0.5rem" }}>
                    Primary Deliverable
                  </div>
                  <div style={{ fontSize: "0.95rem", color: "var(--ink)", fontWeight: 500, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <AxioIcon name="arrow-right" size={14} aria-hidden="true" style={{ color: "var(--acc)" }} />
                    {current.deliverable}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function idxToCapability(idx: number): string {
  switch (idx) {
    case 0:
    case 1:
      return "Business Systems & Discovery";
    case 2:
      return "Digital Products & UI Architecture";
    case 3:
    case 4:
      return "Software Infrastructure & Backends";
    case 5:
      return "Platforms & Integrations";
    case 6:
      return "Websites & Production Deployments";
    case 7:
    default:
      return "Software Infrastructure & Long-term Support";
  }
}
