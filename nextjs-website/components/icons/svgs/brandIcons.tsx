/**
 * Axio Future — Brand & Identity Icons
 * Each icon is a purpose-built SVG expressing a specific engineering/identity concept.
 * viewBox="0 0 24 24" · stroke="currentColor" · fill="none" · strokeLinecap="round" · strokeLinejoin="round"
 */

import React from "react";

type SvgProps = React.SVGProps<SVGSVGElement> & { strokeWidth?: number };

/** brand-mark: Proprietary A-frame with apex node and lateral data bus */
export function BrandMarkIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4 20L12 4L20 20" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="8" y1="15" x2="16" y2="15" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="4" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="4" cy="20" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="20" cy="20" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** future-tech: Forward convergence vector — two parallel trajectories meeting at a focal node */
export function FutureTechIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 7L17 7" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M3 17L17 17" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M17 7L21 12L17 17" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="21" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** engineering-intelligence: Hexagonal core with 3 radiating telemetry vectors */
export function EngineeringIntelligenceIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polygon points="12,3 19.5,7.5 19.5,16.5 12,21 4.5,16.5 4.5,7.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="3" x2="12" y2="7" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="19.5" y1="16.5" x2="16" y2="14.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="4.5" y1="16.5" x2="8" y2="14.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** digital-transformation: Two state frames — wireframe morphing to solid architecture */
export function DigitalTransformationIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="5" width="8" height="14" rx="1" stroke="currentColor" strokeWidth={strokeWidth} strokeDasharray="2 1.5" />
      <rect x="14" y="5" width="8" height="14" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M10 12H14" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M12 10L14 12L12 14" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** connected-systems: Three decentralized nodes bridged by bidirectional channels */
export function ConnectedSystemsIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="4" cy="7" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="20" cy="7" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="20.5" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="5.8" y1="8.8" x2="10.3" y2="10.8" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="18.2" y1="8.8" x2="13.7" y2="10.8" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="14.5" x2="12" y2="18.5" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** system-architecture: Multi-tier architectural foundation with stack layers */
export function SystemArchitectureIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="4" width="18" height="4" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="3" y="10" width="18" height="4" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="3" y="16" width="18" height="4" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="9" y1="8" x2="9" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="15" y1="8" x2="15" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="9" y1="14" x2="9" y2="16" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="15" y1="14" x2="15" y2="16" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** precision: Calibrated engineering crosshairs with vernier micro-alignment ticks */
export function PrecisionIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="3" x2="12" y2="5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="19" x2="12" y2="21" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="3" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="19" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** evolution: Ascending stepped helix with checkpoint nodes */
export function EvolutionIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4 20C4 20 6 16 9 16C12 16 12 12 15 12C18 12 20 8 20 8" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="9" cy="16" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="15" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="20" cy="8" r="1.5" fill="currentColor" stroke="none" />
      <path d="M17 5L20 8L17 11" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** continuous-improvement: Closed-loop adaptive feedback cycle */
export function ContinuousImprovementIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M21 12A9 9 0 0 0 3.5 7.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M3 12A9 9 0 0 0 20.5 16.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M1.5 5L3.5 7.5L6 5.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M22.5 19L20.5 16.5L18 18.5" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** tech-ecosystem: Synchronized orbital rings around a central technology core */
export function TechEcosystemIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <ellipse cx="12" cy="12" rx="9" ry="4" stroke="currentColor" strokeWidth={strokeWidth} />
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)" stroke="currentColor" strokeWidth={strokeWidth} />
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}
