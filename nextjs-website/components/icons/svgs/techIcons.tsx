/**
 * Axio Future — Technology & Engineering Icons
 * 30 purpose-built SVGs for software domains: frontend, backend, API, cloud, database,
 * security, DevOps, automation, performance, testing, and more.
 */

import React from "react";

type SvgProps = React.SVGProps<SVGSVGElement> & { strokeWidth?: number };

/** software-engineering: Clean compiler-bracket system `< />` in an architectural chassis */
export function SoftwareEngineeringIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polyline points="6,8 2,12 6,16" stroke="currentColor" strokeWidth={strokeWidth} />
      <polyline points="18,8 22,12 18,16" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="14" y1="5" x2="10" y2="19" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** full-stack: Layered vertical sandwich — presentation, API transport, database */
export function FullStackIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="4" width="18" height="4" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="5" y="10" width="14" height="4" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="7" y="16" width="10" height="4" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** frontend: High-resolution responsive viewport frame with semantic DOM blocks */
export function FrontendIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="2" y1="8" x2="22" y2="8" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="5" y1="12" x2="13" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="5" y1="14.5" x2="10" y2="14.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="14" y="11" width="5" height="5" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="8" y1="18" x2="16" y2="18" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="20" x2="12" y2="22" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** backend: Deep engine housing with server rack blades and processing telemetry */
export function BackendIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="6" width="18" height="5" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="3" y="13" width="18" height="5" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="7" cy="8.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="7" cy="15.5" r="1" fill="currentColor" stroke="none" />
      <line x1="11" y1="8.5" x2="17" y2="8.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="11" y1="15.5" x2="17" y2="15.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="3" x2="12" y2="6" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="18" x2="12" y2="21" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** web-apps: Browser viewport housing a dynamic component application grid */
export function WebAppsIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="3" width="20" height="16" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="2" y1="7" x2="22" y2="7" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="5" y="10" width="5" height="4" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="12" y="10" width="7" height="2" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="12" y="13.5" width="7" height="1" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="8" y1="19" x2="16" y2="19" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** mobile-apps: Responsive smartphone silhouette with tactile touch target */
export function MobileAppsIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="6" y="2" width="12" height="20" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="6" y1="6" x2="18" y2="6" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="6" y1="18" x2="18" y2="18" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="20.5" r="0.8" fill="currentColor" stroke="none" />
      <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** api: Dual opposing endpoint connectors docking into an interface socket */
export function ApiIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4 7H9L11 12H13L15 7H20" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M4 17H9L11 12H13L15 17H20" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** microservices: Decoupled autonomous hexagonal service modules on message buses */
export function MicroservicesIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polygon points="5,3.5 8.5,3.5 10,6 8.5,8.5 5,8.5 3.5,6" stroke="currentColor" strokeWidth={strokeWidth} />
      <polygon points="15,3.5 18.5,3.5 20,6 18.5,8.5 15,8.5 13.5,6" stroke="currentColor" strokeWidth={strokeWidth} />
      <polygon points="10,14.5 13.5,14.5 15,17 13.5,19.5 10,19.5 8.5,17" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="10" y1="6" x2="13.5" y2="6" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="8.5" y1="8.5" x2="10" y2="14.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="15.5" y1="8.5" x2="13.5" y2="14.5" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** cloud: Clean geometric cloud with integrated storage cylinders */
export function CloudIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M7 16.5a5 5 0 0 1-1-9.9A6 6 0 0 1 18 8.5a4 4 0 0 1-.5 8H7Z" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="9" y1="20" x2="9" y2="22" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="20" x2="12" y2="22" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="15" y1="20" x2="15" y2="22" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** database: Precision cylinder stack with schema dividing lines and query index locator */
export function DatabaseIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M4 6V12" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M20 6V12" stroke="currentColor" strokeWidth={strokeWidth} />
      <ellipse cx="12" cy="12" rx="8" ry="3" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M4 12V18" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M20 12V18" stroke="currentColor" strokeWidth={strokeWidth} />
      <ellipse cx="12" cy="18" rx="8" ry="3" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** data: Structured relational data matrix with highlighted key-column index */
export function DataIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="3" width="20" height="18" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="2" y1="8" x2="22" y2="8" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="2" y1="13" x2="22" y2="13" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="2" y1="18" x2="22" y2="18" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="8" y1="3" x2="8" y2="21" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="14" y1="3" x2="14" y2="21" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** server: Blade server chassis with rack mounting ears and status LEDs */
export function ServerIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="5" width="20" height="5" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="2" y="13" width="20" height="5" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="6.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="6.5" cy="15.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="9.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <line x1="13" y1="7.5" x2="19" y2="7.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="13" y1="15.5" x2="19" y2="15.5" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** infrastructure: Foundation truss columns supporting distributed compute */
export function InfrastructureIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="3" y1="20" x2="21" y2="20" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="6" y1="20" x2="6" y2="7" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="20" x2="12" y2="4" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="18" y1="20" x2="18" y2="7" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M3 7L6 7L12 4L18 7L21 7" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="6" y1="13" x2="12" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="18" y1="13" x2="12" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** devops: Infinity telemetry loop integrating continuous delivery gates */
export function DevopsIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M16 12C16 14.2 14.2 16 12 16C9.8 16 8 14.2 8 12" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M5 5L8 8" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M19 5L16 8" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M5 19L8 16" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M19 19L16 16" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="5" cy="5" r="1.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="19" cy="5" r="1.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="5" cy="19" r="1.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="19" cy="19" r="1.5" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** cicd: Pipeline conduits with sequential automated gate stages */
export function CicdIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="4" y="9" width="4" height="6" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="10" y="9" width="4" height="6" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="16" y="9" width="4" height="6" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <polyline points="7,12 8.5,10.5 10,12" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** deployment: Container vessel lifting smoothly onto edge infrastructure */
export function DeploymentIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 2L19 8H5L12 2Z" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="5" y="8" width="14" height="10" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="3" y1="21" x2="21" y2="21" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="8" y1="15" x2="12" y2="15" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** monitoring: Real-time telemetry oscilloscope waveform with threshold bounds */
export function MonitoringIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <polyline points="5,12 7.5,9 10,12 12,7 14.5,14 17,10 19,12" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="8" y1="20" x2="16" y2="20" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="17" x2="12" y2="20" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** scalability: Expanding volumetric cube with outward elastic vectors */
export function ScalabilityIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="7" y="9" width="10" height="10" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M7 9L4 6" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M17 9L20 6" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M7 19L4 22" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M17 19L20 22" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="4" cy="6" r="1.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="20" cy="6" r="1.5" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** performance: Speed tachometer dial with needle pointing into optimal zone */
export function PerformanceIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 14A9 9 0 0 1 21 14" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="14" x2="16" y2="9" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="14" r="1.5" fill="currentColor" stroke="none" />
      <line x1="6" y1="17" x2="7.2" y2="15.6" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="18" y1="17" x2="16.8" y2="15.6" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="6" x2="12" y2="7.5" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** security: Hardened cryptographic shield with padlock core */
export function SecurityIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 2L3 6V11C3 16 6.5 20.7 12 22C17.5 20.7 21 16 21 11V6L12 2Z" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M12 13.5V16" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** authentication: Identity badge verifying cryptographically signed key token */
export function AuthenticationIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="5" width="14" height="14" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M5 19C5.5 16.5 7.5 15 10 15C11.2 15 12.3 15.4 13.1 16.1" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="17" y1="8" x2="21" y2="8" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="19" y1="6" x2="19" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** authorization: Permission key unlocking hierarchical role-based access matrix */
export function AuthorizationIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="8" cy="11" r="4" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M12 11H21" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M17 9V13" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M21 9V13" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** integration: Interlocking system gears connecting seamlessly */
export function IntegrationIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="8" cy="8" r="4" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="8" cy="8" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" stroke="none" />
      <line x1="11.5" y1="11.5" x2="12.5" y2="12.5" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** automation: Precision cogwheel with autonomous lightning trigger bolt */
export function AutomationIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M14 12a5 5 0 0 1-5 5M14 12a5 5 0 0 0-5-5M14 12l3-7-3 3h-2l3 7-3-3" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M3.5 10.5A8.5 8.5 0 0 1 12 3.5" stroke="currentColor" strokeWidth={strokeWidth} strokeDasharray="2 1.5" />
      <path d="M20.5 13.5A8.5 8.5 0 0 1 12 20.5" stroke="currentColor" strokeWidth={strokeWidth} strokeDasharray="2 1.5" />
    </svg>
  );
}

/** testing: Test beaker / checklist badge with passing validation checkmarks */
export function TestingIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M9 3H6L3 9V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V9L18 3H9Z" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M9 13L11 15L15 12" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** debugging: Software bug trapped inside magnifying inspection reticle */
export function DebuggingIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M9 9L13 13M13 9L9 13" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** code-quality: Source code document stamped with a diamond quality seal */
export function CodeQualityIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M14 2V8H20" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M8 13L10 11L12 13L14 11" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="17" cy="17" r="3" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M15.8 17L16.7 17.9L18.2 16.1" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** version-control: Git branch branching from main trunk and merging back */
export function VersionControlIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="18" cy="9" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="6" y1="8" x2="6" y2="16" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M6 8C6 8 6 11 10 11H18" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** documentation: Technical specification document with structured layout */
export function DocumentationIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M14 2V8H20" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="8" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="8" y1="16" x2="16" y2="16" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="8" y1="10" x2="11" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** platforms: Multi-tenant foundation platform with modular application blocks */
export function PlatformsIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="17" width="20" height="4" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="4" y="11" width="5" height="6" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="11" y="11" width="5" height="6" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="7" y="5" width="10" height="6" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}
