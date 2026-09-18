/**
 * Axio Future — Case Study & Project Section Icons
 * 15 purpose-built SVGs to make long-form case studies scannable.
 */

import React from "react";

type SvgProps = React.SVGProps<SVGSVGElement> & { strokeWidth?: number };

/** problem: Fractured system boundary indicating a broken constraint */
export function ProblemIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M12 8V12" stroke="currentColor" strokeWidth={2} />
      <circle cx="12" cy="16" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** challenge: Mountain with steep terrain — represents difficulty to overcome */
export function ChallengeIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 20L9 8L14 14L17 10L21 20H3Z" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** opportunity: Open aperture/window revealing a clear path forward */
export function OpportunityIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="2" x2="12" y2="5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="2" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="19" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="4.9" y1="4.9" x2="7.1" y2="7.1" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="16.9" y1="16.9" x2="19.1" y2="19.1" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="19.1" y1="4.9" x2="16.9" y2="7.1" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="7.1" y1="16.9" x2="4.9" y2="19.1" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** solution: Clean resolution — problem fractured, solution unified */
export function SolutionIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M8 12L10.5 14.5L16 9.5" stroke="currentColor" strokeWidth={2} />
    </svg>
  );
}

/** case-architecture: Tiered system diagram with explicit layer connections */
export function CaseArchitectureIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="3" width="18" height="4" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="3" y="10" width="18" height="4" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="3" y="17" width="18" height="4" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="8" y1="7" x2="8" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="16" y1="7" x2="16" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="14" x2="12" y2="17" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** case-tech: Technology specification badge with stack indicators */
export function CaseTechIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polyline points="6,8 2,12 6,16" stroke="currentColor" strokeWidth={strokeWidth} />
      <polyline points="18,8 22,12 18,16" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="14" y1="5" x2="10" y2="19" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="20.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** implementation: Step progression with active execution indicator */
export function ImplementationIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="6" cy="12" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="18" cy="12" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="5" x2="12" y2="8" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M10 5H14" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** case-process: Cyclical workflow showing iterative process phases */
export function CaseProcessIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M21 12A9 9 0 0 0 3.5 7.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M3 12A9 9 0 0 0 20.5 16.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M1.5 5L3.5 7.5L6 5.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M22.5 19L20.5 16.5L18 18.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** result: Upward trending arrow — final output of the engineering process */
export function ResultIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="3" y1="21" x2="21" y2="21" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="3" y1="3" x2="3" y2="21" stroke="currentColor" strokeWidth={strokeWidth} />
      <polyline points="5,19 9,13 13,16 20,7" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M17 7H21V11" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** case-performance: Tachometer gauge showing optimal performance achieved */
export function CasePerformanceIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 14A9 9 0 0 1 21 14" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="14" x2="8" y2="9" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="14" r="1.5" fill="currentColor" stroke="none" />
      <path d="M6 17L7.2 15.6" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M18 17L16.8 15.6" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M12 6L12 7.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="8" cy="9" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** case-scalability: Expandable cube growing outward from a stable core */
export function CaseScalabilityIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="8" y="8" width="8" height="8" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="8" y1="8" x2="4" y2="4" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="16" y1="8" x2="20" y2="4" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="8" y1="16" x2="4" y2="20" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="16" y1="16" x2="20" y2="20" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M3 3H5V5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M21 3H19V5" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** case-security: Verified shield with cryptographic lock and check */
export function CaseSecurityIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 2L3 6V11C3 16 6.5 20.7 12 22C17.5 20.7 21 16 21 11V6L12 2Z" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M8.5 12L10.5 14L15.5 10" stroke="currentColor" strokeWidth={2} />
    </svg>
  );
}

/** outcome: Star/marker indicating a notable achievement or result */
export function OutcomeIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 2L14.5 9H22L16 13.5L18.5 20.5L12 16L5.5 20.5L8 13.5L2 9H9.5L12 2Z" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** lessons: Document with annotated margin notes */
export function LessonsIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M14 2V8H20" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="8" y1="12" x2="13" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="8" y1="15" x2="13" y2="15" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="8" y1="18" x2="11" y2="18" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="16" y1="11" x2="16" y2="19" stroke="currentColor" strokeWidth={strokeWidth} strokeDasharray="1.5 1.5" />
      <circle cx="16" cy="10.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** future-improvements: Forward-pointing evolution path with open destinations */
export function FutureImprovementsIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="7" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="17" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="7" y1="12" x2="10" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="10" y1="10" x2="10" y2="14" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="10" y1="8.5" x2="14" y2="7" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="10" y1="15.5" x2="14" y2="17" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="14" y1="7" x2="19" y2="5" stroke="currentColor" strokeWidth={strokeWidth} strokeDasharray="2 1.5" />
      <line x1="14" y1="17" x2="19" y2="19" stroke="currentColor" strokeWidth={strokeWidth} strokeDasharray="2 1.5" />
    </svg>
  );
}
