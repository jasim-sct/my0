/**
 * Axio Future — SEO Visual Language Icons
 * 37 purpose-built SVGs — each SEO concept has a distinct visual metaphor.
 * No generic magnifying-glass clones. Every icon is semantically intentional.
 */

import React from "react";

type SvgProps = React.SVGProps<SVGSVGElement> & { strokeWidth?: number };

/** seo: Search aperture focusing onto an indexed document node */
export function SeoIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="14.5" y1="14.5" x2="19" y2="19" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="6.5" y="8" width="7" height="1" rx="0.5" fill="currentColor" stroke="none" />
      <rect x="6.5" y="10.5" width="5" height="1" rx="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** search: Precision search loupe with optical reticle crosshairs */
export function SearchIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="15.7" y1="15.7" x2="21" y2="21" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="10" y1="6" x2="10" y2="14" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="6" y1="10" x2="14" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** search-visibility: Document rising from obscurity with illuminated visibility beam */
export function SearchVisibilityIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M14 2H6C4.9 2 4 2.9 4 4V14" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M4 14V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M14 2V8H20" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M8 11L12 7L16 11" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="7" x2="12" y2="15" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** organic-traffic: Natural upward surging flow channels into a website entry funnel */
export function OrganicTrafficIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 20C5 15 8 12 12 12C16 12 19 15 21 20" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M7 20C8.5 16.5 10 15 12 15C14 15 15.5 16.5 17 20" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M9 20V4" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M12 20V6" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M15 20V4" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M7 7L9 4L11 7" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** search-ranking: Tiered podium with top #1 position highlighted */
export function SearchRankingIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="9" y="7" width="6" height="14" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="3" y="12" width="6" height="9" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="15" y="14" width="6" height="7" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="11.5" y1="5" x2="11.5" y2="7" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12.5" y1="4" x2="12.5" y2="7" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** search-indexing: Document passing through a laser scanning grid with index entry tab */
export function SearchIndexingIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4 4H14L18 8V20C18 21.1 17.1 22 16 22H4C2.9 22 2 21.1 2 20V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M14 4V8H18" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="20" y1="4" x2="22" y2="4" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="20" y1="8" x2="22" y2="8" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="20" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="20" y1="16" x2="22" y2="16" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="5.5" y1="12" x2="14.5" y2="12" stroke="currentColor" strokeWidth={strokeWidth} strokeDasharray="2 1.5" />
      <line x1="5.5" y1="15" x2="12" y2="15" stroke="currentColor" strokeWidth={strokeWidth} strokeDasharray="2 1.5" />
    </svg>
  );
}

/** crawling: Crawler bot traversing interconnected hyperlinked network nodes */
export function CrawlingIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="5" cy="5" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="19" cy="5" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="5" cy="19" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="19" cy="19" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="7" y1="5" x2="17" y2="5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="5" y1="7" x2="5" y2="17" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="19" y1="7" x2="19" y2="17" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="7" y1="19" x2="17" y2="19" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" fill="currentColor" stroke="none" opacity="0.5" />
      <path d="M9.5 9.5L19 5" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** semantic-seo: Knowledge graph with labeled relational edges between semantic entities */
export function SemanticSeoIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="4" cy="5" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="20" cy="5" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="4" cy="19" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="20" cy="19" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="5.7" y1="6.7" x2="10.4" y2="10.4" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="18.3" y1="6.7" x2="13.6" y2="10.4" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="5.7" y1="17.3" x2="10.4" y2="13.6" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="18.3" y1="17.3" x2="13.6" y2="13.6" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** structured-data: Hierarchical JSON-LD node tree with typed key-value pairs */
export function StructuredDataIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="4" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="6" cy="12" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="18" cy="12" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="6" cy="20" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="18" cy="20" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="6" x2="12" y2="8" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="8" x2="6" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="8" x2="18" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="6" y1="14" x2="6" y2="18" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="18" y1="14" x2="18" y2="18" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** schema: Microdata blueprint with tagged entity properties */
export function SchemaIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="3" width="20" height="18" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M7 7H5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M5 7L5 17" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M7 17H5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M17 7H19" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M19 7L19 17" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M17 17H19" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="8" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="8" y1="13" x2="13" y2="13" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** metadata: Document head zone highlighting meta tags, title, and open-graph properties */
export function MetadataIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="3" width="20" height="18" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="2" y="3" width="20" height="7" rx="1" fill="currentColor" stroke="none" opacity="0.12" />
      <line x1="2" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="5" y1="6" x2="14" y2="6" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="5" y1="8" x2="10" y2="8" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="5" y1="14" x2="19" y2="14" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="5" y1="17" x2="14" y2="17" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** sitemap: Hierarchical tree chart branching from root domain to category and URLs */
export function SitemapIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="9.5" y="2" width="5" height="4" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="2" y="10" width="5" height="4" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="9.5" y="10" width="5" height="4" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="17" y="10" width="5" height="4" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="2" y="18" width="5" height="4" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="9.5" y="18" width="5" height="4" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="6" x2="12" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="4.5" y1="6" x2="19.5" y2="6" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="4.5" y1="6" x2="4.5" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="19.5" y1="6" x2="19.5" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="4.5" y1="14" x2="4.5" y2="18" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="14" x2="12" y2="18" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** robots: Autonomous indexing crawler with directive file gate */
export function RobotsIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="6" y="10" width="12" height="11" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="9.5" y="3" width="5" height="4" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="7" x2="12" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="9.5" cy="14" r="1.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="14.5" cy="14" r="1.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M9 18H15" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="2" y1="14" x2="6" y2="14" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="18" y1="14" x2="22" y2="14" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** keywords: Semantic keyword tag with hashtag syntax and relevance target */
export function KeywordsIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="5" y1="9" x2="19" y2="9" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="5" y1="15" x2="19" y2="15" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="9" y1="5" x2="7" y2="19" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="15" y1="5" x2="13" y2="19" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** content-discovery: Compass rose pointing towards a discovered content beacon */
export function ContentDiscoveryIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={strokeWidth} />
      <polygon points="12,4 13.5,10.5 12,12 10.5,10.5" fill="currentColor" stroke="none" opacity="0.7" />
      <polygon points="12,20 13.5,13.5 12,12 10.5,13.5" fill="currentColor" stroke="none" opacity="0.3" />
      <polygon points="4,12 10.5,10.5 12,12 10.5,13.5" fill="currentColor" stroke="none" opacity="0.3" />
      <polygon points="20,12 13.5,10.5 12,12 13.5,13.5" fill="currentColor" stroke="none" opacity="0.3" />
    </svg>
  );
}

/** content-relevance: Concentric bullseye with arrow striking exact center of intent match */
export function ContentRelevanceIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="19" y1="5" x2="14" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M17 3L19 5L17 7" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** search-intent: Human intent thought aligning with relevant search response card */
export function SearchIntentIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M8 9C8 6.8 9.8 5 12 5C14.2 5 16 6.8 16 9C16 11.2 14 13 12 14V15" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="17.5" r="0.8" fill="currentColor" stroke="none" />
      <path d="M4 21H20" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** internal-linking: Two document pages bridged by a directional hyperlink anchor */
export function InternalLinkingIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="3" width="8" height="10" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="14" y="11" width="8" height="10" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="4" y1="6" x2="8" y2="6" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="4" y1="8" x2="7" y2="8" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M10 8H14M12 6L14 8L12 10" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** backlinks: External incoming link chain docking into local website boundary */
export function BacklinksIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07L11 5.93" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07L11 18.07" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** page-authority: Credential certificate badge with high authority ranking crest */
export function PageAuthorityIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M8 20H16" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="17" x2="12" y2="20" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M12 7L13.2 10H16.5L13.9 11.9L14.8 15L12 13.2L9.2 15L10.1 11.9L7.5 10H10.8L12 7Z" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** domain-authority: Root domain globe topped with fortress battlement trust crest */
export function DomainAuthorityIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="14" r="7" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="5" y1="14" x2="19" y2="14" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M8.5 14C8.5 10 9.5 7 12 7C14.5 7 15.5 10 15.5 14" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M8 4H10V6H8ZM11 4H13V6H11ZM14 4H16V6H14Z" fill="currentColor" stroke="none" />
      <path d="M8 4V6H16V4" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** technical-seo: Website framework with exposed gears and performance health gauge */
export function TechnicalSeoIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="2" y1="7" x2="22" y2="7" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="8" cy="12" r="2.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="8" cy="12" r="1" fill="currentColor" stroke="none" />
      <line x1="13" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="13" y1="12.5" x2="18" y2="12.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="13" y1="15" x2="16" y2="15" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="8" y1="20" x2="16" y2="20" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="17" x2="12" y2="20" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** core-web-vitals: Three-gauge diagnostic panel representing LCP, INP, and CLS */
export function CoreWebVitalsIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4 14A5 5 0 0 1 9 14" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="6.5" y1="14" x2="5.5" y2="11.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M10 14A5 5 0 0 1 15 14" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12.5" y1="14" x2="13.5" y2="11.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M16 14A5 5 0 0 1 21 14" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="18.5" y1="14" x2="17" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="3" y1="17" x2="21" y2="17" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="4" y1="20" x2="9" y2="20" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="10" y1="20" x2="15" y2="20" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="16" y1="20" x2="21" y2="20" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** page-speed: Webpage frame propelled forward with supersonic streamline vectors */
export function PageSpeedIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="5" y="4" width="14" height="16" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="5" y1="8" x2="19" y2="8" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="1" y1="11" x2="5" y2="11" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="1" y1="14" x2="4" y2="14" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="1" y1="17" x2="3" y2="17" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M12 12L10 16H13L11 20" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** mobile-seo: Smartphone with search result snippet and mobile ranking badge */
export function MobileSeoIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="5" y="2" width="11" height="18" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="5" y1="6" x2="16" y2="6" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="5" y1="16" x2="16" y2="16" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="10.5" cy="18.5" r="0.8" fill="currentColor" stroke="none" />
      <line x1="7" y1="9" x2="14" y2="9" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="7" y1="11" x2="12" y2="11" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="7" y1="13" x2="14" y2="13" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="18.5" cy="4.5" r="2.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="16.8" y1="4.5" x2="20.2" y2="4.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="18.5" y1="2.8" x2="18.5" y2="6.2" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** accessibility: Universal access figure with inclusive geometry in circular boundary */
export function AccessibilityIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none" />
      <path d="M8 10H16" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M12 10V13.5L9 18" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M12 13.5L15 18" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** search-analytics: Line graph trending upward with query impression markers */
export function SearchAnalyticsIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polyline points="3,18 7,12 11,15 15,8 21,6" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="7" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="15" cy="8" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="21" cy="6" r="1.5" fill="currentColor" stroke="none" />
      <line x1="3" y1="21" x2="21" y2="21" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="3" y1="3" x2="3" y2="21" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** conversion: Funnel channeling traffic into a precise action goal point */
export function ConversionIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 5H21L15 12V19L9 21V12L3 5Z" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="19" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M11 19L12 20L13.5 17.5" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** ctr: Cursor pointer striking search result link with ripple activation waves */
export function CtrIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M8 3L8 20L12 16L14 21L16 20L14 15L19 15L8 3Z" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M19 3C20.5 4.5 21 6.5 21 8" stroke="currentColor" strokeWidth={strokeWidth} strokeDasharray="1.5 1.5" />
      <path d="M16 3C17 4 17.5 5.5 17.5 7" stroke="currentColor" strokeWidth={strokeWidth} strokeDasharray="1.5 1.5" />
    </svg>
  );
}

/** engagement: Heartbeat pulse / user engagement waveform with sustained dwell time */
export function EngagementIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="2" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
      <polyline points="5,12 7,7 9,15 11,10 13,14 15,12 19,12" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="19" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** discoverability: Radar beam sweeping through digital airspace detecting entity coordinates */
export function DiscoverabilityIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="3" x2="12" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M12 12L18.4 5.6" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="18" cy="8" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="6" cy="16" r="1" fill="currentColor" stroke="none" opacity="0.5" />
    </svg>
  );
}

/** engine-visibility: Neutral search index with illuminated document spotlight */
export function EngineVisibilityIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="3" y1="14" x2="21" y2="14" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="7" cy="6.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="10" cy="6.5" r="1" fill="currentColor" stroke="none" />
      <path d="M6 11.5H18" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M6 16.5H15" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** ai-search: Neural network lattice reading and synthesizing structured knowledge */
export function AiSearchIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2" y="3" width="14" height="18" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="5" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="5" y1="10" x2="13" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="5" y1="13" x2="10" y2="13" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="19" cy="7" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="19" cy="14" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="19" cy="21" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="19" y1="9" x2="19" y2="12" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="19" y1="16" x2="19" y2="19" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="16" y1="7" x2="17" y2="7" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** aeo: Question prompt bubble directly transforming into structured answer box */
export function AeoIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 5C3 3.9 3.9 3 5 3H11C12.1 3 13 3.9 13 5V8C13 9.1 12.1 10 11 10H8L5 12V10H5C3.9 10 3 9.1 3 8V5Z" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M7 6.5H11" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="12" y="14" width="10" height="6" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="14" y1="16.5" x2="20" y2="16.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="14" y1="18.5" x2="18" y2="18.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M13 12L17 12" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M15 10L17 12L15 14" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** entity-understanding: 3D entity sphere surrounded by semantic contextual attribute orbits */
export function EntityUnderstandingIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** knowledge-graph: Interconnected polygon graph of entities, concepts, and relationships */
export function KnowledgeGraphIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="4" cy="6" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="20" cy="6" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="4" cy="18" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="20" cy="18" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="12" cy="3" r="1.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="5.8" y1="7.3" x2="10.5" y2="10.8" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="18.2" y1="7.3" x2="13.5" y2="10.8" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="5.8" y1="16.7" x2="10.5" y2="13.2" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="18.2" y1="16.7" x2="13.5" y2="13.2" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="6" y1="6" x2="18" y2="6" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="6" y1="18" x2="18" y2="18" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="12" y1="4.5" x2="12" y2="10" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** content-structure: Document layout showing H1, H2, H3 hierarchy bars and structured text blocks */
export function ContentStructureIcon({ strokeWidth = 1.75, ...p }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <line x1="3" y1="5" x2="17" y2="5" stroke="currentColor" strokeWidth={2.5} />
      <line x1="3" y1="9" x2="14" y2="9" stroke="currentColor" strokeWidth={2} />
      <line x1="3" y1="13" x2="11" y2="13" stroke="currentColor" strokeWidth={1.75} />
      <line x1="3" y1="17" x2="21" y2="17" stroke="currentColor" strokeWidth={strokeWidth} />
      <line x1="3" y1="20" x2="19" y2="20" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}
