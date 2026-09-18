"use client";

import { useState } from "react";
import Link from "next/link";
import { AxioIcon } from "@/components/icons";
import type { AxioIconName } from "@/components/icons";

type NodeDetail = {
  id: string;
  idx: string;
  icon: AxioIconName;
  title: string;
  tag: string;
  summary: string;
  tech: string;
  protocols: string;
  resilience: string;
  latencyTarget: string;
};

type Mode = {
  id: string;
  icon: AxioIconName;
  label: string;
  lead: string;
  nodes: NodeDetail[];
};

const MODES: Mode[] = [
  {
    id: "architecture",
    icon: "system-architecture",
    label: "System Architecture",
    lead: "A decoupled, five-tier architecture ensuring clean separation between user interaction, security gates, domain rules, data storage, and edge servers.",
    nodes: [
      {
        id: "ui",
        idx: "01",
        icon: "frontend",
        title: "Frontend Layer",
        tag: "Next.js · React · TypeScript",
        summary: "Prerendered Server Components paired with isolated client hydration for interactive states. Strictly typed props and zero unused CSS.",
        tech: "TypeScript, Next.js",
        protocols: "HTTPS, DOM, WCAG 2.1 AA",
        resilience: "Graceful offline degradation",
        latencyTarget: "< 800ms LCP",
      },
      {
        id: "gateway",
        idx: "02",
        icon: "security",
        title: "API Gateway & Guard",
        tag: "Edge Routing · Rate Limiting",
        summary: "Ingress proxy enforcing TLS termination, IP rate limits, and upfront JSON payload validation.",
        tech: "Nginx, Edge Middleware, Zod",
        protocols: "REST, JSON, JWT Bearer",
        resilience: "Automatic 429 rate limit backoff",
        latencyTarget: "< 15ms validation overhead",
      },
      {
        id: "domain",
        idx: "03",
        icon: "backend",
        title: "Domain Services",
        tag: "Node.js · Express · NestJS",
        summary: "Stateless logic executing domain validation, authorization, and event dispatching to background queues.",
        tech: "Node.js, Express/NestJS",
        protocols: "Typed Internal RPC, Event Bus",
        resilience: "Idempotency prevents duplicate side-effects",
        latencyTarget: "< 45ms logic execution",
      },
      {
        id: "data",
        idx: "04",
        icon: "database",
        title: "Data & Caching Tier",
        tag: "PostgreSQL · Redis",
        summary: "Normalized relational storage augmented with Redis for hot in-memory session caches.",
        tech: "PostgreSQL 16, Redis, PgBouncer",
        protocols: "PostgreSQL Protocol, RESP",
        resilience: "Point-in-time recovery, automated replicas",
        latencyTarget: "< 25ms indexed query",
      },
      {
        id: "infra",
        idx: "05",
        icon: "infrastructure",
        title: "Infrastructure & Edge",
        tag: "Docker · Nginx · CDN",
        summary: "Multi-stage containers deployed across high-availability hosts behind automated TLS and CDN caching.",
        tech: "Docker, Linux, CDN",
        protocols: "TLS 1.3, HTTP/2, HSTS",
        resilience: "Zero-downtime rolling updates",
        latencyTarget: "99.9% uptime baseline",
      },
    ],
  },
  {
    id: "dataflow",
    icon: "data",
    label: "Data Flow Lifecycle",
    lead: "Tracing the end-to-end journey of a single business transaction from client action to guaranteed database commit and verified response.",
    nodes: [
      {
        id: "df-event",
        idx: "01",
        icon: "engagement",
        title: "User Event Trigger",
        tag: "Input · Form · Click",
        summary: "Client validates fields instantly and shows optimistic UI state without blocking.",
        tech: "React State, Synthetic Events",
        protocols: "Internal DOM Event",
        resilience: "Input debouncing",
        latencyTarget: "< 16ms frame response",
      },
      {
        id: "df-guard",
        idx: "02",
        icon: "authentication",
        title: "Schema & Auth Guard",
        tag: "Gateway Validation",
        summary: "Gateway validates session authenticity and tests payload against strict schemas.",
        tech: "JWT, Zod Schema Parser",
        protocols: "HTTPS POST",
        resilience: "Immediate 400 rejection",
        latencyTarget: "< 10ms security check",
      },
      {
        id: "df-proc",
        idx: "03",
        icon: "automation",
        title: "Business Processing",
        tag: "Domain Logic",
        summary: "Service verifies entity state, checks business rules, and calculates changes.",
        tech: "Domain Services",
        protocols: "Typed interfaces",
        resilience: "Circuit-breaking fallback",
        latencyTarget: "< 35ms rule execution",
      },
      {
        id: "df-commit",
        idx: "04",
        icon: "database",
        title: "Atomic DB Commit",
        tag: "ACID Transaction",
        summary: "State mutation runs inside an isolated SQL transaction with audit logging.",
        tech: "PostgreSQL ACID block",
        protocols: "TCP Socket",
        resilience: "Automatic rollback on violation",
        latencyTarget: "< 18ms disk write",
      },
      {
        id: "df-resp",
        idx: "05",
        icon: "api",
        title: "Verified Response",
        tag: "Typed JSON Result",
        summary: "Client reconciles optimistic UI and confirms operation to user.",
        tech: "Client Store Reconciler",
        protocols: "HTTP 200 OK",
        resilience: "Client rollback on drop",
        latencyTarget: "< 120ms roundtrip",
      },
    ],
  },
  {
    id: "scaling",
    icon: "scalability",
    label: "Evolution & Scaling",
    lead: "Demonstrating how Axio Future designs systems to scale smoothly from day-one simplicity to high-volume distributed platforms without code rewrites.",
    nodes: [
      {
        id: "sc-one",
        idx: "Stage 01",
        icon: "deployment",
        title: "Modular Monolith",
        tag: "Day 1 Baseline",
        summary: "Prerendered pages, consolidated service, and single instance database for maximum velocity.",
        tech: "Next.js, Node.js, PostgreSQL",
        protocols: "Single Docker host",
        resilience: "Daily automated backups",
        latencyTarget: "Handles 10k+ requests/day",
      },
      {
        id: "sc-two",
        idx: "Stage 02",
        icon: "cloud",
        title: "Service Boundaries",
        tag: "Growth Stage",
        summary: "Adding Redis caching for hot data and PgBouncer for database connection pooling.",
        tech: "Redis, PgBouncer, Dedicated APIs",
        protocols: "Decoupled internal routing",
        resilience: "Shielded connection pools",
        latencyTarget: "Handles 100k+ requests/day",
      },
      {
        id: "sc-three",
        idx: "Stage 03",
        icon: "cicd",
        title: "Event-Driven Queues",
        tag: "Scale Stage",
        summary: "Offloading intensive tasks to asynchronous background workers backed by Redis.",
        tech: "BullMQ, Worker Fleet",
        protocols: "AMQP / Pub-Sub",
        resilience: "Exponential backoff retries",
        latencyTarget: "Zero user-facing blocking",
      },
      {
        id: "sc-four",
        idx: "Stage 04",
        icon: "platforms",
        title: "Distributed Platform",
        tag: "Enterprise Stage",
        summary: "Multi-region caching, read-replica clusters, and auto-scaling stateless application containers.",
        tech: "Kubernetes, Multi-region CDN",
        protocols: "Edge Anycast, Read/Write Split",
        resilience: "Automated replica failover",
        latencyTarget: "Millions of transactions",
      },
    ],
  },
];

export function ArchitectureExplorer() {
  const [activeModeIdx, setActiveModeIdx] = useState(0);
  const [selectedNodeIdx, setSelectedNodeIdx] = useState(0);

  const mode = MODES[activeModeIdx];
  const activeNode = mode.nodes[selectedNodeIdx] || mode.nodes[0];

  const handleModeChange = (idx: number) => {
    setActiveModeIdx(idx);
    setSelectedNodeIdx(0);
  };

  return (
    <section className="band">
      <div className="wrap">
        <div className="s-head">
          <div>
            <div className="eyebrow" data-anim>Interactive Proof</div>
            <h2 className="kin-h" data-anim>System Architecture Explorer</h2>
          </div>
          <div>
            <p className="lead" data-anim>
              Inspect the technical layers, data transitions, and scaling patterns we engineer into real production software.
            </p>
            <Link className="arrow-link" href="/engineering" data-anim>
              Read full engineering standards <span className="gt">&rsaquo;</span>
            </Link>
          </div>
        </div>

        <div className="system-explorer" data-anim>
          {/* Mode Switcher */}
          <div className="ae-modes" role="tablist" aria-label="Architecture exploration modes">
            {MODES.map((m, idx) => {
              const active = idx === activeModeIdx;
              return (
                <button
                  key={m.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  className={`ae-mode-btn ${active ? "is-active" : ""}`}
                  onClick={() => handleModeChange(idx)}
                >
                  {m.label}
                  <AxioIcon name={m.icon} size={14} aria-hidden="true" style={{ opacity: 0.6 }} />
                </button>
              );
            })}
          </div>

          <p style={{ color: "var(--muted)", fontSize: "0.95rem", maxWidth: "800px", marginBottom: "1.5rem" }}>
            {mode.lead} Click on any node below to inspect technical specifications:
          </p>

          {/* Node Pipeline View */}
          <div className="ae-pipeline" role="tablist" aria-label="System nodes">
            {mode.nodes.map((node, idx) => {
              const selected = idx === selectedNodeIdx;
              return (
                <button
                  key={node.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  className={`ae-node-card ${selected ? "is-selected" : ""}`}
                  onClick={() => setSelectedNodeIdx(idx)}
                >
                  <span className="ae-node-idx">{node.idx}</span>
                  <AxioIcon name={node.icon} size={18} aria-hidden="true" style={{ opacity: 0.8, marginBottom: "0.3rem" }} />
                  <div className="ae-node-title">{node.title}</div>
                  <span className="ae-node-tag">{node.tag}</span>
                </button>
              );
            })}
          </div>

          {/* Node Inspector Panel */}
          <div className="ae-inspector" key={`${mode.id}-${activeNode.id}`} style={{ 
            marginTop: "1.5rem", 
            background: "#0c0d10", 
            borderRadius: "12px", 
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)",
            overflow: "hidden"
          }}>
            {/* Dashboard Header */}
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "space-between",
              padding: "1rem 1.5rem", 
              background: "rgba(255,255,255,0.03)", 
              borderBottom: "1px solid rgba(255,255,255,0.05)" 
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                <span style={{ 
                  fontFamily: "var(--font-mono, monospace)", 
                  fontSize: "0.75rem", 
                  color: "var(--acc)", 
                  background: "rgba(0, 229, 255, 0.1)", 
                  padding: "0.2rem 0.5rem", 
                  borderRadius: "4px" 
                }}>
                  NODE_{activeNode.idx}
                </span>
                <h3 style={{ margin: 0, fontSize: "1rem", color: "#fff", fontWeight: 500, letterSpacing: "0.02em" }}>
                  {activeNode.title}
                </h3>
              </div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#0ACF83", boxShadow: "0 0 8px #0ACF83" }} />
                <span style={{ fontSize: "0.7rem", color: "#0ACF83", textTransform: "uppercase", letterSpacing: "0.05em" }}>Online</span>
              </div>
            </div>

            {/* Dashboard Body */}
            <div style={{ display: "grid", gridTemplateColumns: "minmax(250px, 1.5fr) 1fr", gap: "1px", background: "rgba(255,255,255,0.05)" }}>
              {/* Summary Section */}
              <div style={{ background: "#0c0d10", padding: "1.5rem" }}>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                  {activeNode.summary}
                </p>
              </div>

              {/* Specs Grid */}
              <div style={{ background: "#0c0d10", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px dashed rgba(255,255,255,0.1)", paddingBottom: "0.5rem" }}>
                  <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Technology</span>
                  <span style={{ fontSize: "0.85rem", color: "#fff", fontFamily: "var(--font-mono, monospace)" }}>{activeNode.tech}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px dashed rgba(255,255,255,0.1)", paddingBottom: "0.5rem" }}>
                  <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Protocols</span>
                  <span style={{ fontSize: "0.85rem", color: "#fff", fontFamily: "var(--font-mono, monospace)" }}>{activeNode.protocols}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px dashed rgba(255,255,255,0.1)", paddingBottom: "0.5rem" }}>
                  <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Latency Target</span>
                  <span style={{ fontSize: "0.85rem", color: "var(--acc)", fontFamily: "var(--font-mono, monospace)" }}>{activeNode.latencyTarget}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Resilience</span>
                  <span style={{ fontSize: "0.85rem", color: "#fff", fontFamily: "var(--font-mono, monospace)" }}>{activeNode.resilience}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
