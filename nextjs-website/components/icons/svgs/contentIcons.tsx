/**
 * Axio Future — Content & Discoverability Icons
 * 18 purpose-built SVGs for content types, hierarchy, and semantic structure.
 */

import React from "react";

type SvgProps = React.SVGProps<SVGSVGElement> & { strokeWidth?: number };

/** content: Structured document with rich content zones */
export function ContentIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M14 2V8H20" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="7" y1="12" x2="17" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="7" y1="15" x2="17" y2="15" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="7" y1="18" x2="13" y2="18" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** articles: Article page with headline and columns */
export function ArticlesIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="3" width="18" height="18" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="6" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth={2.2} />
      <line x1="6" y1="11" x2="11" y2="11" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="6" y1="13.5" x2="11" y2="13.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="6" y1="16" x2="11" y2="16" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="13" y="10" width="5" height="7" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** case-studies: Multi-panel case study document with analysis sections */
export function CaseStudiesIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M14 2V8H20" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="7" y="11" width="4" height="5" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="13" y="13" width="4" height="3" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="7" y1="18" x2="17" y2="18" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** knowledge: Open book with knowledge emanating upward */
export function KnowledgeIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M2 6C2 5 2.9 4 4 4L12 6L20 4C21.1 4 22 5 22 6V18C22 19 21.1 20 20 20L12 18L4 20C2.9 20 2 19 2 18V6Z" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="6" x2="12" y2="18" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** insights: Illuminated lightbulb with structured insight rays */
export function InsightsIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M9 18H15" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M10 21H14" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M12 3C8.7 3 6 5.7 6 9C6 11.4 7.4 13.5 9.4 14.6L9 18H15L14.6 14.6C16.6 13.5 18 11.4 18 9C18 5.7 15.3 3 12 3Z" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** research: Scientific beaker with analysis grid */
export function ResearchIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M8 3H16" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M9 3V10L4 20H20L15 10V3" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="5" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="10" cy="18" r="1" fill="currentColor" stroke="none" />
      <circle cx="14" cy="17" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** resources: Folder with organized document stack */
export function ResourcesIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 7C3 5.9 3.9 5 5 5H10L12 7H19C20.1 7 21 7.9 21 9V18C21 19.1 20.1 20 19 20H5C3.9 20 3 19.1 3 18V7Z" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="7" y1="12" x2="17" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="7" y1="15" x2="14" y2="15" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** blog: Blog composition with pen and structured post */
export function BlogIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M20 6L18 4L14 8L10 18L6 20L8 16L18 6Z" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="14" y1="8" x2="16" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="4" y1="21" x2="8" y2="21" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** industry-info: Industry sector building with data indicators */
export function IndustryInfoIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 21H21" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="5" y="10" width="5" height="11" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="14" y="6" width="5" height="15" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M5 10L9 5L11 7L14 6" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** technical-explanation: Code snippet with annotation pointer */
export function TechnicalExplanationIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="4" width="14" height="12" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <polyline points="5,8 7,10 5,12" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="9" y1="12" x2="13" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="16" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M19 8L21 10L19 12" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** content-hierarchy: Indented document structure showing parent-child relations */
export function ContentHierarchyIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth={2} />
      <line x1="6" y1="11" x2="21" y2="11" stroke="currentColor" strokeWidth={1.75} />
      <line x1="9" y1="15.5" x2="21" y2="15.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="9" y1="19.5" x2="21" y2="19.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="3" y1="6" x2="3" y2="11" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="6" y1="11" x2="6" y2="15.5" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** heading-structure: Visual H1 > H2 > H3 document heading progression */
export function HeadingStructureIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="3" y1="5" x2="15" y2="5" stroke="currentColor" strokeWidth={2.5} />
      <line x1="3" y1="9.5" x2="12" y2="9.5" stroke="currentColor" strokeWidth={2} />
      <line x1="3" y1="13.5" x2="10" y2="13.5" stroke="currentColor" strokeWidth={1.75} />
      <line x1="3" y1="17" x2="21" y2="17" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="3" y1="20" x2="19" y2="20" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** info-architecture: Structural information map of site hierarchy */
export function InfoArchitectureIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="9" y="2" width="6" height="4" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="2" y="10" width="6" height="4" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="16" y="10" width="6" height="4" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="9" y="18" width="6" height="4" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="6" x2="12" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="6" x2="5" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="6" x2="19" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="14" x2="12" y2="18" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** semantic-relationships: Semantic web showing entity connections */
export function SemanticRelationshipsIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="4" cy="8" r="2.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="20" cy="8" r="2.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="4" cy="16" r="2.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="20" cy="16" r="2.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="6.2" y1="9.2" x2="9.5" y2="10.6" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="17.8" y1="9.2" x2="14.5" y2="10.6" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="6.2" y1="14.8" x2="9.5" y2="13.4" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="17.8" y1="14.8" x2="14.5" y2="13.4" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** user-intent: User thought process and matching content result */
export function UserIntentIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="7" cy="8" r="3" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M4 21C4 18.2 5.3 16 7 16" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="13" y="4" width="8" height="12" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="15" y1="8" x2="19" y2="8" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="15" y1="11" x2="18" y2="11" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M11 12L13 12" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** whitepaper: Long-form technical document with binding spine */
export function WhitepaperIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M6 2H18C19.1 2 20 2.9 20 4V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V4C4 2.9 4.9 2 6 2Z" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="6" y1="2" x2="6" y2="22" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="8" y1="7" x2="17" y2="7" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="8" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="8" y1="13" x2="17" y2="13" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="8" y1="16" x2="13" y2="16" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** benchmark: Benchmark comparison chart with performance bars */
export function BenchmarkIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="3" y1="21" x2="21" y2="21" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="3" y1="3" x2="3" y2="21" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="5" y="10" width="4" height="11" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="11" y="5" width="4" height="16" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="17" y="13" width="4" height="8" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="3" y1="8" x2="21" y2="8" stroke="currentColor" strokeWidth={strokeWidth} strokeDasharray="2 1.5" />
    </svg>
  );
}

/** guide: Step-by-step instructional guide with numbered path */
export function GuideIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4 20H20" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="6" cy="7" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="18" cy="7" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M8 7H10" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M14 9L16 7" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="6" y1="9" x2="6" y2="20" stroke="currentColor" strokeWidth={strokeWidth} strokeDasharray="2 1.5" />
      <line x1="12" y1="13" x2="12" y2="20" stroke="currentColor" strokeWidth={strokeWidth} strokeDasharray="2 1.5" />
      <line x1="18" y1="9" x2="18" y2="20" stroke="currentColor" strokeWidth={strokeWidth} strokeDasharray="2 1.5" />
    </svg>
  );
}
