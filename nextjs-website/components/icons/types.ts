/**
 * Axio Future — Semantic SVG Icon System
 * types.ts — Complete icon name union type and component props
 */

// ─── Brand & Identity ──────────────────────────────────────────────────────
export type BrandIconName =
  | "brand-mark"
  | "future-tech"
  | "engineering-intelligence"
  | "digital-transformation"
  | "connected-systems"
  | "system-architecture"
  | "precision"
  | "evolution"
  | "continuous-improvement"
  | "tech-ecosystem";

// ─── Technology & Engineering ──────────────────────────────────────────────
export type TechIconName =
  | "software-engineering"
  | "full-stack"
  | "frontend"
  | "backend"
  | "web-apps"
  | "mobile-apps"
  | "api"
  | "microservices"
  | "cloud"
  | "database"
  | "data"
  | "server"
  | "infrastructure"
  | "devops"
  | "cicd"
  | "deployment"
  | "monitoring"
  | "scalability"
  | "performance"
  | "security"
  | "authentication"
  | "authorization"
  | "integration"
  | "automation"
  | "testing"
  | "debugging"
  | "code-quality"
  | "version-control"
  | "documentation"
  | "platforms";

// ─── SEO Visual System ─────────────────────────────────────────────────────
export type SeoIconName =
  | "seo"
  | "search"
  | "search-visibility"
  | "organic-traffic"
  | "search-ranking"
  | "search-indexing"
  | "crawling"
  | "semantic-seo"
  | "structured-data"
  | "schema"
  | "metadata"
  | "sitemap"
  | "robots"
  | "keywords"
  | "content-discovery"
  | "content-relevance"
  | "search-intent"
  | "internal-linking"
  | "backlinks"
  | "page-authority"
  | "domain-authority"
  | "technical-seo"
  | "core-web-vitals"
  | "page-speed"
  | "mobile-seo"
  | "accessibility"
  | "search-analytics"
  | "conversion"
  | "ctr"
  | "engagement"
  | "discoverability"
  | "engine-visibility"
  | "ai-search"
  | "aeo"
  | "entity-understanding"
  | "knowledge-graph"
  | "content-structure";

// ─── Content & Discoverability ─────────────────────────────────────────────
export type ContentIconName =
  | "content"
  | "articles"
  | "case-studies"
  | "knowledge"
  | "insights"
  | "research"
  | "resources"
  | "blog"
  | "industry-info"
  | "technical-explanation"
  | "content-hierarchy"
  | "heading-structure"
  | "info-architecture"
  | "semantic-relationships"
  | "user-intent"
  | "whitepaper"
  | "benchmark"
  | "guide";

// ─── User Interaction & Navigation ─────────────────────────────────────────
export type InteractionIconName =
  | "view"
  | "preview"
  | "explore"
  | "discover"
  | "read"
  | "learn"
  | "expand"
  | "collapse"
  | "open"
  | "close"
  | "navigate"
  | "arrow-up"
  | "arrow-down"
  | "arrow-left"
  | "arrow-right"
  | "chevron-up"
  | "chevron-down"
  | "chevron-left"
  | "chevron-right"
  | "scroll"
  | "more"
  | "menu"
  | "filter"
  | "sort"
  | "copy"
  | "external-link"
  | "share"
  | "download"
  | "open-project"
  | "view-case-study"
  | "view-architecture"
  | "view-details"
  | "compare"
  | "timeline"
  | "play"
  | "pause";

// ─── Business & Trust ──────────────────────────────────────────────────────
export type BusinessIconName =
  | "business"
  | "strategy"
  | "consultation"
  | "partnership"
  | "delivery"
  | "reliability"
  | "trust"
  | "transparency"
  | "enterprise"
  | "startup"
  | "smb"
  | "growth"
  | "roi"
  | "efficiency"
  | "process"
  | "workflow"
  | "support"
  | "maintenance"
  | "longterm-partnership";

// ─── Case Study & Project Sections ─────────────────────────────────────────
export type CaseStudyIconName =
  | "problem"
  | "challenge"
  | "opportunity"
  | "solution"
  | "case-architecture"
  | "case-tech"
  | "implementation"
  | "case-process"
  | "result"
  | "case-performance"
  | "case-scalability"
  | "case-security"
  | "outcome"
  | "lessons"
  | "future-improvements";

// ─── Full union ─────────────────────────────────────────────────────────────
export type AxioIconName =
  | BrandIconName
  | TechIconName
  | SeoIconName
  | ContentIconName
  | InteractionIconName
  | BusinessIconName
  | CaseStudyIconName;

// ─── Component Props ────────────────────────────────────────────────────────
export interface AxioIconProps {
  name: AxioIconName;
  /** Pixel size for width & height. Default: 20 */
  size?: number | string;
  /** Additional className for styling */
  className?: string;
  /** Stroke width override. Default: 1.75 */
  strokeWidth?: number;
  /** Semantic animation. Only applies where motion adds meaning. */
  animate?: boolean | "scan" | "pulse" | "flow" | "spin";
  /** Accessible label. Required when icon conveys info without adjacent text. */
  "aria-label"?: string;
  /** Hides from assistive technology when icon is purely decorative. */
  "aria-hidden"?: boolean | "true" | "false";
  /** SVG <title> for tooltip/screen reader support */
  title?: string;
  style?: React.CSSProperties;
}
