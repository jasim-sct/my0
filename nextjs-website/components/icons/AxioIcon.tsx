/**
 * Axio Future — AxioIcon
 * Central dispatch component for the proprietary semantic SVG icon system.
 * Renders the correct SVG based on `name`, applies size, stroke, animation, and aria attributes.
 */

import React from "react";
import { AxioIconProps } from "./types";

// ─── Brand ────────────────────────────────────────────────────────────────────
import {
  BrandMarkIcon,
  FutureTechIcon,
  EngineeringIntelligenceIcon,
  DigitalTransformationIcon,
  ConnectedSystemsIcon,
  SystemArchitectureIcon,
  PrecisionIcon,
  EvolutionIcon,
  ContinuousImprovementIcon,
  TechEcosystemIcon,
} from "./svgs/brandIcons";

// ─── Tech ─────────────────────────────────────────────────────────────────────
import {
  SoftwareEngineeringIcon,
  FullStackIcon,
  FrontendIcon,
  BackendIcon,
  WebAppsIcon,
  MobileAppsIcon,
  ApiIcon,
  MicroservicesIcon,
  CloudIcon,
  DatabaseIcon,
  DataIcon,
  ServerIcon,
  InfrastructureIcon,
  DevopsIcon,
  CicdIcon,
  DeploymentIcon,
  MonitoringIcon,
  ScalabilityIcon,
  PerformanceIcon,
  SecurityIcon,
  AuthenticationIcon,
  AuthorizationIcon,
  IntegrationIcon,
  AutomationIcon,
  TestingIcon,
  DebuggingIcon,
  CodeQualityIcon,
  VersionControlIcon,
  DocumentationIcon,
  PlatformsIcon,
} from "./svgs/techIcons";

// ─── SEO ──────────────────────────────────────────────────────────────────────
import {
  SeoIcon,
  SearchIcon,
  SearchVisibilityIcon,
  OrganicTrafficIcon,
  SearchRankingIcon,
  SearchIndexingIcon,
  CrawlingIcon,
  SemanticSeoIcon,
  StructuredDataIcon,
  SchemaIcon,
  MetadataIcon,
  SitemapIcon,
  RobotsIcon,
  KeywordsIcon,
  ContentDiscoveryIcon,
  ContentRelevanceIcon,
  SearchIntentIcon,
  InternalLinkingIcon,
  BacklinksIcon,
  PageAuthorityIcon,
  DomainAuthorityIcon,
  TechnicalSeoIcon,
  CoreWebVitalsIcon,
  PageSpeedIcon,
  MobileSeoIcon,
  AccessibilityIcon,
  SearchAnalyticsIcon,
  ConversionIcon,
  CtrIcon,
  EngagementIcon,
  DiscoverabilityIcon,
  EngineVisibilityIcon,
  AiSearchIcon,
  AeoIcon,
  EntityUnderstandingIcon,
  KnowledgeGraphIcon,
  ContentStructureIcon,
} from "./svgs/seoIcons";

// ─── Content ──────────────────────────────────────────────────────────────────
import {
  ContentIcon,
  ArticlesIcon,
  CaseStudiesIcon,
  KnowledgeIcon,
  InsightsIcon,
  ResearchIcon,
  ResourcesIcon,
  BlogIcon,
  IndustryInfoIcon,
  TechnicalExplanationIcon,
  ContentHierarchyIcon,
  HeadingStructureIcon,
  InfoArchitectureIcon,
  SemanticRelationshipsIcon,
  UserIntentIcon,
  WhitepaperIcon,
  BenchmarkIcon,
  GuideIcon,
} from "./svgs/contentIcons";

// ─── Interaction ──────────────────────────────────────────────────────────────
import {
  ViewIcon,
  PreviewIcon,
  ExploreIcon,
  DiscoverIcon,
  ReadIcon,
  LearnIcon,
  ExpandIcon,
  CollapseIcon,
  OpenIcon,
  CloseIcon,
  NavigateIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ScrollIcon,
  MoreIcon,
  MenuIcon,
  FilterIcon,
  SortIcon,
  CopyIcon,
  ExternalLinkIcon,
  ShareIcon,
  DownloadIcon,
  OpenProjectIcon,
  ViewCaseStudyIcon,
  ViewArchitectureIcon,
  ViewDetailsIcon,
  CompareIcon,
  TimelineIcon,
  PlayIcon,
  PauseIcon,
} from "./svgs/interactionIcons";

// ─── Business ─────────────────────────────────────────────────────────────────
import {
  BusinessIcon,
  StrategyIcon,
  ConsultationIcon,
  PartnershipIcon,
  DeliveryIcon,
  ReliabilityIcon,
  TrustIcon,
  TransparencyIcon,
  EnterpriseIcon,
  StartupIcon,
  SmbIcon,
  GrowthIcon,
  RoiIcon,
  EfficiencyIcon,
  ProcessIcon,
  WorkflowIcon,
  SupportIcon,
  MaintenanceIcon,
  LongtermPartnershipIcon,
} from "./svgs/businessIcons";

// ─── Case Study ───────────────────────────────────────────────────────────────
import {
  ProblemIcon,
  ChallengeIcon,
  OpportunityIcon,
  SolutionIcon,
  CaseArchitectureIcon,
  CaseTechIcon,
  ImplementationIcon,
  CaseProcessIcon,
  ResultIcon,
  CasePerformanceIcon,
  CaseScalabilityIcon,
  CaseSecurityIcon,
  OutcomeIcon,
  LessonsIcon,
  FutureImprovementsIcon,
} from "./svgs/caseStudyIcons";

// ─── Icon registry ────────────────────────────────────────────────────────────
// Maps every AxioIconName to its SVG component.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ICON_MAP: Record<string, React.FC<any>> = {
  // Brand
  "brand-mark": BrandMarkIcon,
  "future-tech": FutureTechIcon,
  "engineering-intelligence": EngineeringIntelligenceIcon,
  "digital-transformation": DigitalTransformationIcon,
  "connected-systems": ConnectedSystemsIcon,
  "system-architecture": SystemArchitectureIcon,
  "precision": PrecisionIcon,
  "evolution": EvolutionIcon,
  "continuous-improvement": ContinuousImprovementIcon,
  "tech-ecosystem": TechEcosystemIcon,
  // Tech
  "software-engineering": SoftwareEngineeringIcon,
  "full-stack": FullStackIcon,
  "frontend": FrontendIcon,
  "backend": BackendIcon,
  "web-apps": WebAppsIcon,
  "mobile-apps": MobileAppsIcon,
  "api": ApiIcon,
  "microservices": MicroservicesIcon,
  "cloud": CloudIcon,
  "database": DatabaseIcon,
  "data": DataIcon,
  "server": ServerIcon,
  "infrastructure": InfrastructureIcon,
  "devops": DevopsIcon,
  "cicd": CicdIcon,
  "deployment": DeploymentIcon,
  "monitoring": MonitoringIcon,
  "scalability": ScalabilityIcon,
  "performance": PerformanceIcon,
  "security": SecurityIcon,
  "authentication": AuthenticationIcon,
  "authorization": AuthorizationIcon,
  "integration": IntegrationIcon,
  "automation": AutomationIcon,
  "testing": TestingIcon,
  "debugging": DebuggingIcon,
  "code-quality": CodeQualityIcon,
  "version-control": VersionControlIcon,
  "documentation": DocumentationIcon,
  "platforms": PlatformsIcon,
  // SEO
  "seo": SeoIcon,
  "search": SearchIcon,
  "search-visibility": SearchVisibilityIcon,
  "organic-traffic": OrganicTrafficIcon,
  "search-ranking": SearchRankingIcon,
  "search-indexing": SearchIndexingIcon,
  "crawling": CrawlingIcon,
  "semantic-seo": SemanticSeoIcon,
  "structured-data": StructuredDataIcon,
  "schema": SchemaIcon,
  "metadata": MetadataIcon,
  "sitemap": SitemapIcon,
  "robots": RobotsIcon,
  "keywords": KeywordsIcon,
  "content-discovery": ContentDiscoveryIcon,
  "content-relevance": ContentRelevanceIcon,
  "search-intent": SearchIntentIcon,
  "internal-linking": InternalLinkingIcon,
  "backlinks": BacklinksIcon,
  "page-authority": PageAuthorityIcon,
  "domain-authority": DomainAuthorityIcon,
  "technical-seo": TechnicalSeoIcon,
  "core-web-vitals": CoreWebVitalsIcon,
  "page-speed": PageSpeedIcon,
  "mobile-seo": MobileSeoIcon,
  "accessibility": AccessibilityIcon,
  "search-analytics": SearchAnalyticsIcon,
  "conversion": ConversionIcon,
  "ctr": CtrIcon,
  "engagement": EngagementIcon,
  "discoverability": DiscoverabilityIcon,
  "engine-visibility": EngineVisibilityIcon,
  "ai-search": AiSearchIcon,
  "aeo": AeoIcon,
  "entity-understanding": EntityUnderstandingIcon,
  "knowledge-graph": KnowledgeGraphIcon,
  "content-structure": ContentStructureIcon,
  // Content
  "content": ContentIcon,
  "articles": ArticlesIcon,
  "case-studies": CaseStudiesIcon,
  "knowledge": KnowledgeIcon,
  "insights": InsightsIcon,
  "research": ResearchIcon,
  "resources": ResourcesIcon,
  "blog": BlogIcon,
  "industry-info": IndustryInfoIcon,
  "technical-explanation": TechnicalExplanationIcon,
  "content-hierarchy": ContentHierarchyIcon,
  "heading-structure": HeadingStructureIcon,
  "info-architecture": InfoArchitectureIcon,
  "semantic-relationships": SemanticRelationshipsIcon,
  "user-intent": UserIntentIcon,
  "whitepaper": WhitepaperIcon,
  "benchmark": BenchmarkIcon,
  "guide": GuideIcon,
  // Interaction
  "view": ViewIcon,
  "preview": PreviewIcon,
  "explore": ExploreIcon,
  "discover": DiscoverIcon,
  "read": ReadIcon,
  "learn": LearnIcon,
  "expand": ExpandIcon,
  "collapse": CollapseIcon,
  "open": OpenIcon,
  "close": CloseIcon,
  "navigate": NavigateIcon,
  "arrow-up": ArrowUpIcon,
  "arrow-down": ArrowDownIcon,
  "arrow-left": ArrowLeftIcon,
  "arrow-right": ArrowRightIcon,
  "chevron-up": ChevronUpIcon,
  "chevron-down": ChevronDownIcon,
  "chevron-left": ChevronLeftIcon,
  "chevron-right": ChevronRightIcon,
  "scroll": ScrollIcon,
  "more": MoreIcon,
  "menu": MenuIcon,
  "filter": FilterIcon,
  "sort": SortIcon,
  "copy": CopyIcon,
  "external-link": ExternalLinkIcon,
  "share": ShareIcon,
  "download": DownloadIcon,
  "open-project": OpenProjectIcon,
  "view-case-study": ViewCaseStudyIcon,
  "view-architecture": ViewArchitectureIcon,
  "view-details": ViewDetailsIcon,
  "compare": CompareIcon,
  "timeline": TimelineIcon,
  "play": PlayIcon,
  "pause": PauseIcon,
  // Business
  "business": BusinessIcon,
  "strategy": StrategyIcon,
  "consultation": ConsultationIcon,
  "partnership": PartnershipIcon,
  "delivery": DeliveryIcon,
  "reliability": ReliabilityIcon,
  "trust": TrustIcon,
  "transparency": TransparencyIcon,
  "enterprise": EnterpriseIcon,
  "startup": StartupIcon,
  "smb": SmbIcon,
  "growth": GrowthIcon,
  "roi": RoiIcon,
  "efficiency": EfficiencyIcon,
  "process": ProcessIcon,
  "workflow": WorkflowIcon,
  "support": SupportIcon,
  "maintenance": MaintenanceIcon,
  "longterm-partnership": LongtermPartnershipIcon,
  // Case Study
  "problem": ProblemIcon,
  "challenge": ChallengeIcon,
  "opportunity": OpportunityIcon,
  "solution": SolutionIcon,
  "case-architecture": CaseArchitectureIcon,
  "case-tech": CaseTechIcon,
  "implementation": ImplementationIcon,
  "case-process": CaseProcessIcon,
  "result": ResultIcon,
  "case-performance": CasePerformanceIcon,
  "case-scalability": CaseScalabilityIcon,
  "case-security": CaseSecurityIcon,
  "outcome": OutcomeIcon,
  "lessons": LessonsIcon,
  "future-improvements": FutureImprovementsIcon,
};

// ─── Animation class map ──────────────────────────────────────────────────────
const ANIMATE_CLASS: Record<string, string> = {
  "true": "axio-icon--pulse",
  "scan": "axio-icon--scan",
  "pulse": "axio-icon--pulse",
  "flow": "axio-icon--flow",
  "spin": "axio-icon--spin",
};

// ─── Component ────────────────────────────────────────────────────────────────
export function AxioIcon({
  name,
  size = 20,
  className = "",
  strokeWidth = 1.75,
  animate,
  title,
  "aria-label": ariaLabel,
  "aria-hidden": ariaHidden,
  style,
}: AxioIconProps): React.ReactElement | null {
  const IconComponent = ICON_MAP[name];

  if (!IconComponent) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[AxioIcon] Unknown icon name: "${name}". Check AxioIconName type.`);
    }
    return null;
  }

  const animClass = animate !== undefined ? (ANIMATE_CLASS[String(animate)] ?? "") : "";
  const isDecorative = !ariaLabel && !title;

  return (
    <IconComponent
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      className={`axio-icon axio-icon--${name} ${animClass} ${className}`.trim()}
      role={isDecorative ? undefined : "img"}
      aria-label={ariaLabel}
      aria-hidden={isDecorative ? "true" : ariaHidden}
      style={style}
    >
      {title && <title>{title}</title>}
    </IconComponent>
  );
}

export default AxioIcon;
