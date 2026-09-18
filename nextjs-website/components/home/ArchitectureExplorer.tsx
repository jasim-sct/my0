"use client";

import { useState } from "react";
import Link from "next/link";

type NodeDetail = {
  id: string;
  idx: string;
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
  label: string;
  lead: string;
  nodes: NodeDetail[];
};

const MODES: Mode[] = [
  {
    id: "architecture",
    label: "System Architecture",
    lead: "A decoupled, five-tier architecture ensuring clean separation between user interaction, security gates, domain rules, data storage, and edge servers.",
    nodes: [
      {
        id: "ui",
        idx: "01",
        title: "Frontend Layer",
        tag: "Next.js · React · TypeScript",
        summary: "Prerendered Server Components for instant HTML paint paired with isolated client hydration for interactive state widgets. Strictly typed props and zero unused CSS.",
        tech: "TypeScript 5, Next.js App Router, CSS Custom Properties",
        protocols: "HTTPS, HTTP/2, Semantic DOM, WCAG 2.1 AA",
        resilience: "Graceful degradation under offline or slow mobile connections",
        latencyTarget: "< 800ms LCP, < 50ms INP",
      },
      {
        id: "gateway",
        idx: "02",
        title: "API Gateway & Guard",
        tag: "Edge Routing · Rate Limiting",
        summary: "Ingress proxy enforcing TLS termination, IP token-bucket rate limits, CORS origin isolation, and upfront JSON payload schema validation before requests reach domain services.",
        tech: "Nginx, Edge Middleware, Schema Validators (Zod)",
        protocols: "REST, JSON, JWT Bearer Auth",
        resilience: "Automatic drop of malformed payloads; 429 rate limit backoff",
        latencyTarget: "< 15ms validation overhead",
      },
      {
        id: "domain",
        idx: "03",
        title: "Domain Services",
        tag: "Node.js · Express · NestJS",
        summary: "Stateless business logic execution executing domain validation, access authorization, transactional orchestration, and event dispatching to background queues.",
        tech: "Node.js, Express/NestJS, TypeScript",
        protocols: "Typed Internal RPC / REST, Event Bus",
        resilience: "Idempotency tokens preventing duplicate transactional side-effects",
        latencyTarget: "< 45ms business logic execution",
      },
      {
        id: "data",
        idx: "04",
        title: "Data & Caching Tier",
        tag: "PostgreSQL · Redis · MongoDB",
        summary: "Normalized relational storage with strict foreign keys and indexed query paths, augmented with Redis for hot in-memory session caches and query results.",
        tech: "PostgreSQL 16, Redis 7, PgBouncer pooling",
        protocols: "PostgreSQL Wire Protocol, Redis RESP",
        resilience: "Point-in-time recovery (PITR), automated snapshot replicas",
        latencyTarget: "< 5ms cached query, < 25ms indexed query",
      },
      {
        id: "infra",
        idx: "05",
        title: "Infrastructure & Edge",
        tag: "Docker · Nginx · CDN",
        summary: "Multi-stage Docker containers deployed across high-availability Linux hosts behind reverse proxies with automated TLS 1.3 encryption and global CDN caching.",
        tech: "Docker, Linux, Nginx, Cloud CDN",
        protocols: "TLS 1.3, HTTP/2, HSTS Preload",
        resilience: "Zero-downtime rolling container updates with health probes",
        latencyTarget: "99.9% uptime baseline globally",
      },
    ],
  },
  {
    id: "dataflow",
    label: "Data Flow Lifecycle",
    lead: "Tracing the end-to-end journey of a single business transaction from client action to guaranteed database commit and verified response.",
    nodes: [
      {
        id: "df-event",
        idx: "01",
        title: "User Event Trigger",
        tag: "Input · Form · Click",
        summary: "User triggers a state mutation (checkout submit, task move, configuration save). Client validates fields instantly and shows optimistic UI state.",
        tech: "Client-side React state, Synthetic Event Dispatcher",
        protocols: "Internal DOM Event, LocalStorage sync",
        resilience: "Input debouncing and disabled duplicate clicks",
        latencyTarget: "< 16ms client frame response",
      },
      {
        id: "df-guard",
        idx: "02",
        title: "Schema & Auth Guard",
        tag: "Gateway Validation",
        summary: "Request arrives at backend. Gateway validates JWT session authenticity, checks user organization permissions, and tests payload against strict Zod schema.",
        tech: "JSON Web Tokens (JWT), Zod Schema Parser",
        protocols: "HTTPS POST, Authorization Header",
        resilience: "Immediate 400 rejection on unverified input with typed error code",
        latencyTarget: "< 10ms security inspection",
      },
      {
        id: "df-proc",
        idx: "03",
        title: "Business Processing",
        tag: "Domain Logic",
        summary: "Service verifies entity state, checks business rules (inventory availability, discount eligibility, quota limits), and calculates final changes.",
        tech: "Domain Services, Business Rule Engine",
        protocols: "Internal typed interfaces",
        resilience: "Circuit-breaking fallback if downstream dependency times out",
        latencyTarget: "< 35ms rule execution",
      },
      {
        id: "df-commit",
        idx: "04",
        title: "Atomic DB Commit",
        tag: "ACID Transaction",
        summary: "State mutation runs inside an isolated SQL transaction. Writes both the entity update and an audit log row before committing write-ahead log.",
        tech: "PostgreSQL ACID Transaction block",
        protocols: "TCP Socket via Connection Pool",
        resilience: "Automatic transaction rollback on any constraint violation",
        latencyTarget: "< 18ms disk write & sync",
      },
      {
        id: "df-resp",
        idx: "05",
        title: "Verified Response",
        tag: "Typed JSON Result",
        summary: "Success response returns with updated resource payload and Cache-Control headers. Client reconciles optimistic UI and confirms operation to user.",
        tech: "HTTP Response, Client Store Reconciler",
        protocols: "HTTP 200 OK, JSON Payload",
        resilience: "Client rollback and clear user alert if network dropped",
        latencyTarget: "< 120ms total roundtrip globally",
      },
    ],
  },
  {
    id: "scaling",
    label: "Evolution & Scaling",
    lead: "Demonstrating how Axon Future designs systems to scale smoothly from day-one simplicity to high-volume distributed platforms without code rewrites.",
    nodes: [
      {
        id: "sc-one",
        idx: "Stage 01",
        title: "Modular Monolith",
        tag: "Day 1 Baseline",
        summary: "Prerendered Next.js pages, consolidated Node.js service, and single PostgreSQL instance. Maximum velocity, zero distributed complexity, sub-second loads.",
        tech: "Next.js, Node.js, PostgreSQL",
        protocols: "Single process / Docker host",
        resilience: "Daily automated database backups, automated container restart",
        latencyTarget: "Handles 1k–50k requests/day effortlessly",
      },
      {
        id: "sc-two",
        idx: "Stage 02",
        title: "Service Boundaries",
        tag: "Growth Stage",
        summary: "Decoupling read-heavy catalog pages from write-heavy transactional APIs. Adding Redis caching for hot data and PgBouncer for database connection pooling.",
        tech: "Redis, PgBouncer, Dedicated API containers",
        protocols: "Decoupled internal routing",
        resilience: "Database shielded from connection exhaustion under peak traffic",
        latencyTarget: "Handles 100k–500k requests/day with sub-50ms cache hits",
      },
      {
        id: "sc-three",
        idx: "Stage 03",
        title: "Event-Driven Queues",
        tag: "Scale Stage",
        summary: "Offloading intensive tasks (email dispatches, report generation, webhooks, scrapers) to asynchronous background workers backed by Redis queues.",
        tech: "BullMQ / Redis, Background Worker Fleet",
        protocols: "AMQP / Redis Pub-Sub",
        resilience: "Failed jobs automatically retry with exponential backoff and DLQ",
        latencyTarget: "Zero user-facing blocking on slow external tasks",
      },
      {
        id: "sc-four",
        idx: "Stage 04",
        title: "Distributed Platform",
        tag: "Enterprise Stage",
        summary: "Multi-region CDN caching, read-replica PostgreSQL clusters, auto-scaling stateless application containers, and comprehensive telemetry alerting.",
        tech: "Kubernetes / Docker Swarm, Multi-region CDN, Read Replicas",
        protocols: "Edge Anycast Routing, Read/Write Split",
        resilience: "Automated failover to replica database within 30 seconds",
        latencyTarget: "Millions of transactions with 99.95% availability",
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
                  <div className="ae-node-title">{node.title}</div>
                  <span className="ae-node-tag">{node.tag}</span>
                </button>
              );
            })}
          </div>

          {/* Node Inspector Panel */}
          <div className="ae-inspector" key={`${mode.id}-${activeNode.id}`}>
            <div className="ae-inspector-grid">
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.3rem" }}>
                  <span className="mk-chip" style={{ background: "var(--paper)", borderColor: "var(--rule)" }}>
                    {activeNode.idx}
                  </span>
                  <h3 style={{ margin: 0, fontSize: "1.25rem", color: "var(--ink)" }}>{activeNode.title}</h3>
                </div>
                <p style={{ color: "var(--muted)", fontSize: "0.92rem", lineHeight: 1.6, margin: "0.5rem 0 1rem" }}>
                  {activeNode.summary}
                </p>

                <div className="ae-spec-grid">
                  <div className="ae-spec-item">
                    <span className="ae-spec-k">Technology</span>
                    <span className="ae-spec-v">{activeNode.tech}</span>
                  </div>
                  <div className="ae-spec-item">
                    <span className="ae-spec-k">Target Latency</span>
                    <span className="ae-spec-v">{activeNode.latencyTarget}</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="ae-spec-item" style={{ marginBottom: "0.8rem" }}>
                  <span className="ae-spec-k">Protocols &amp; Standards</span>
                  <span className="ae-spec-v" style={{ fontWeight: 500, fontSize: "0.82rem" }}>
                    {activeNode.protocols}
                  </span>
                </div>
                <div className="ae-spec-item">
                  <span className="ae-spec-k">Failure Mode &amp; Resilience</span>
                  <span className="ae-spec-v" style={{ fontWeight: 500, fontSize: "0.82rem", color: "var(--muted)" }}>
                    {activeNode.resilience}
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
