"use client";

import { useState } from "react";

type Stage = {
  id: string;
  num: string;
  name: string;
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
    tagline: "Uncovering root operational bottlenecks",
    description:
      "We interrogate the actual business constraint rather than taking superficial feature lists for granted. We map operational drag, manual repetition, and data loss before proposing any technical intervention.",
    activities: [
      "Workflow & stakeholder bottleneck mapping",
      "Current state data audit and failure point analysis",
      "Cost of manual operations vs. software automation ROI",
    ],
    deliverable: "Domain Constraint Specification",
    criteria: "Clear business metrics and unambiguous problem definition",
  },
  {
    id: "model",
    num: "02",
    name: "Model",
    tagline: "Defining core entities and state boundaries",
    description:
      "Every system is only as good as its domain model. We define real-world entities (users, orders, inventory, workflows), relationship cardinalities, and state transitions before visual mockups begin.",
    activities: [
      "Entity-relationship modeling and state machines",
      "Role-based access matrix and tenant boundaries",
      "Data lifecycle and retention rules definition",
    ],
    deliverable: "Normalized Entity & State Transition Matrix",
    criteria: "Zero circular dependencies and deterministic state flow",
  },
  {
    id: "design",
    num: "03",
    name: "Design",
    tagline: "Accessible, high-density interface ergonomics",
    description:
      "We design interfaces that prioritize cognitive clarity, rapid task completion, and responsive accessibility. No decorative filler or oversized fluff—interfaces are engineered for real daily work.",
    activities: [
      "Design tokens (colors, typography, elevation, spacing)",
      "High-density data tables, forms, and keyboard navigation",
      "Responsive viewports across mobile, tablet, and widescreen",
    ],
    deliverable: "Tokenized UI Design System & Component Library",
    criteria: "WCAG 2.1 AA accessibility and sub-3 click task completion",
  },
  {
    id: "architecture",
    num: "04",
    name: "Architecture",
    tagline: "Decoupled layers and explicit contracts",
    description:
      "We establish strict boundaries between user interfaces, API services, background queues, and databases. Typed contracts ensure that any upstream change is caught during compile time, not in production.",
    activities: [
      "Frontend SSR vs. client hydration partitioning",
      "REST / GraphQL schema specifications with strict typing",
      "Caching hierarchies, connection pooling, and queue topology",
    ],
    deliverable: "System Topology & API Interface Contracts",
    criteria: "Complete type safety across all system boundaries",
  },
  {
    id: "engineering",
    num: "05",
    name: "Engineering",
    tagline: "Rigorous implementation without dependency bloat",
    description:
      "We write clean, typed TypeScript and backend code. We avoid massive external runtime libraries for trivial tasks, choosing native web standards, optimized queries, and sub-second execution speeds.",
    activities: [
      "Strict-mode TypeScript implementation across client and server",
      "Database schema migrations with index optimization",
      "Automated unit, integration, and contract test suites",
    ],
    deliverable: "Clean, Documented & Tested Production Source Code",
    criteria: "100% typecheck pass, zero high-severity audit vulnerabilities",
  },
  {
    id: "integration",
    num: "06",
    name: "Integration",
    tagline: "Resilient connections with third-party ecosystems",
    description:
      "Modern businesses depend on external payment gateways, CRMs, email services, and logistics APIs. We engineer robust integration pipelines with idempotency keys, token-bucket rate limits, and fallback queues.",
    activities: [
      "Webhook ingestion pipelines with signature validation",
      "Transactional mutations with idempotency tokens",
      "Circuit breakers and exponential backoff retry policies",
    ],
    deliverable: "Bi-directional Synced Integration Pipelines",
    criteria: "Zero duplicate transactions under network timeouts",
  },
  {
    id: "deployment",
    num: "07",
    name: "Deployment",
    tagline: "Stateless containers and hardened edge delivery",
    description:
      "We package systems into reproducible Docker containers and deploy behind hardened Nginx reverse proxies on fast CDNs. Automated SSL, security headers, and health checks are standard.",
    activities: [
      "Multi-stage Docker builds and automated CI/CD workflows",
      "Nginx reverse proxy configuration with TLS 1.3 and HSTS",
      "Core Web Vitals tuning for sub-second LCP and zero CLS",
    ],
    deliverable: "Zero-Downtime Deployment & Automated Infrastructure",
    criteria: "99.9% uptime baseline, sub-second LCP globally",
  },
  {
    id: "evolution",
    num: "08",
    name: "Evolution",
    tagline: "Monitoring, telemetry, and non-breaking growth",
    description:
      "Software does not stop at launch. We implement structured JSON telemetry, error alerting, and continuous database query tuning so the system scales cleanly alongside growing business volume.",
    activities: [
      "Structured application logging and error rate monitoring",
      "Slow-query telemetry and database index rebalancing",
      "Backward-compatible API versioning and non-breaking updates",
    ],
    deliverable: "Telemetry Dashboard & Long-Term Roadmap",
    criteria: "Proactive alerting before user-facing failure occurs",
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
            <h2 className="kin-h" data-anim>How Axon Future thinks</h2>
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
            className="st-detail-card"
            key={current.id}
          >
            <div className="st-detail-grid">
              <div>
                <span className="st-meta-label">Stage {current.num}</span>
                <h3 style={{ fontSize: "1.4rem", margin: "0.2rem 0 0.4rem", color: "var(--ink)" }}>
                  {current.name}: {current.tagline}
                </h3>
                <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.2rem" }}>
                  {current.description}
                </p>

                <h4 style={{ fontSize: "0.88rem", textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--ink-2)", marginBottom: "0.5rem" }}>
                  Key Engineering Activities
                </h4>
                <ul className="tick" style={{ margin: 0 }}>
                  {current.activities.map((act, i) => (
                    <li key={i}>{act}</li>
                  ))}
                </ul>
              </div>

              <div className="st-meta-box">
                <div className="st-meta-row">
                  <span className="st-meta-label">Primary Deliverable</span>
                  <span className="st-meta-val">{current.deliverable}</span>
                </div>
                <div className="st-meta-row">
                  <span className="st-meta-label">Verification Criteria</span>
                  <span className="st-meta-val">{current.criteria}</span>
                </div>
                <div className="st-meta-row" style={{ marginTop: "1rem", paddingTop: "0.8rem", borderTop: "1px solid var(--rule)" }}>
                  <span className="st-meta-label">Related Capability</span>
                  <span className="st-meta-val" style={{ color: "var(--acc)" }}>
                    {idxToCapability(activeIdx)}
                  </span>
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
