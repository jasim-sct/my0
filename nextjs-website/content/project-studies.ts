export type ProjectStudy = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  concept: string;
  problem: string;
  system: string;
  architecture: string;
  implementation: string;
  technology: string[];
  statusLabel: string;
  currentStatus: string;
  relatedCapability: {
    name: string;
    href: string;
  };
  ctaText: string;
  features: string[];
  stats: { label: string; value: string }[];
};

export const projectStudies: Record<string, ProjectStudy> = {
  shop: {
    slug: "shop",
    name: "Lumen Commerce",
    category: "E-Commerce Architecture & Platform",
    tagline: "Browser-based e-commerce storefront with persistent cart, promo codes, and multi-step checkout.",
    concept: "An architectural exploration of high-performance headless e-commerce frontends operating without heavy third-party platform runtimes.",
    problem: "Small and medium e-commerce stores frequently suffer from bloated plugins, slow page loads on mobile networks, and checkout friction that reduces purchase completion.",
    system: "A multi-page online storefront featuring dynamic category filtering, item variant selection (size, color, specifications), real-time cart persistence surviving page refreshes, promo code discount logic, tax and shipping estimation, and a validated three-step checkout wizard.",
    architecture: "State is maintained through decoupled client-side data stores synchronized with LocalStorage. The cart, product catalog, and checkout steps operate as modular, reusable components with zero external framework overhead.",
    implementation: "Engineered with modern JavaScript and responsive CSS Grid. Implements instant client-side input validation, accessible form controls, dynamic order summary recalculation, and simulated order confirmation tracking.",
    technology: ["TypeScript / JavaScript", "HTML5 & Semantic Forms", "CSS Grid & Flexbox", "LocalStorage State API", "Responsive Viewports"],
    statusLabel: "EXPERIMENTAL BUILD",
    currentStatus: "Functional browser-based interactive demonstration. Simulates full checkout flow and cart persistence entirely in the client without requiring live payment gateway credentials.",
    relatedCapability: {
      name: "Platforms",
      href: "/services/platforms",
    },
    ctaText: "Discuss your platform requirements",
    features: ["11 complete pages", "Persistent cart store", "Promo code validation", "3-step checkout wizard", "Order tracking simulation", "Responsive mobile layout"],
    stats: [
      { label: "Pages", value: "11" },
      { label: "Products", value: "12" },
      { label: "Checkout", value: "3-Step" },
      { label: "Status", value: "Interactive" },
    ],
  },
  flux: {
    slug: "flux",
    name: "FLUX AI Studio",
    category: "Digital Product & Workflow Studio",
    tagline: "Desktop-grade IDE shell interface with ⌘K command palette, interactive node graph, and live agent trace.",
    concept: "Translating complex desktop-grade studio workflows into a responsive web interface driven by keyboard shortcuts and visual node-graph manipulation.",
    problem: "Specialized workflow tools often present users with cluttered, disconnected forms rather than clear visual data flows and quick keyboard-first command controls.",
    system: "An IDE-style workspace featuring a fixed icon rail, tabbed document switcher, global ⌘K command palette with fuzzy filtering, interactive node-graph canvas with draggable connections, live agent trace viewer with confidence scoring, and a prompt compiler tool.",
    architecture: "Event-driven command dispatcher decoupled from canvas rendering. Node coordinates and connection edges are tracked in a centralized state store and rendered via responsive SVG bezier curves.",
    implementation: "Custom keyboard shortcut listeners (⌘K, Esc, Arrow keys), custom SVG curve math for bezier connection paths, simulated asynchronous execution streaming, and a dark-mode tokenized CSS design system.",
    technology: ["React / TypeScript architecture", "SVG Bezier Math", "Command Palette Dispatcher", "CSS Custom Properties", "Interactive Canvas"],
    statusLabel: "EXPERIMENTAL BUILD",
    currentStatus: "Interactive user interface prototype. Verifies complex canvas interactions, keyboard accessibility, and visual workflow tools directly inside standard web browsers.",
    relatedCapability: {
      name: "Digital Products",
      href: "/services/digital-products",
    },
    ctaText: "Discuss your digital product",
    features: ["IDE-style shell layout", "Global ⌘K command palette", "Interactive node graph", "Live agent trace logger", "Workflow runner simulator", "Dark-mode design tokens"],
    stats: [
      { label: "Pages", value: "6" },
      { label: "Interactive Tools", value: "4" },
      { label: "Command Palette", value: "⌘K" },
      { label: "Status", value: "Interactive" },
    ],
  },
  relay: {
    slug: "relay",
    name: "RELAY Platform",
    category: "Business Systems & Operations",
    tagline: "Operational management suite featuring interactive Kanban board, scraper monitoring, and filterable lead table.",
    concept: "Consolidating fragmented administrative and operational workflows into a single, high-efficiency business portal.",
    problem: "Operational teams regularly lose hours daily switching between separate task trackers, manual scrapers, support inboxes, and disconnected spreadsheet tables.",
    system: "An operational command portal featuring an interactive Kanban board with drag-and-status column moves, a real-time data scraper status pipeline with log output, a 12-record filterable lead table with instant CSV export, customer support chat preview, and a team hiring cost estimator.",
    architecture: "Tabular data model with client-side sorting, dual-criteria filtering, and client-side CSV serialization using the Blob API. State machine handles task progression across workflow columns.",
    implementation: "Zero-dependency client-side CSV generator, animated status chip transitions, memory-efficient search filtering, and accessible dialog modals.",
    technology: ["Modern JavaScript", "HTML5 & CSS Grid", "Blob API (CSV Export)", "State Machine Patterns", "Accessible Modals"],
    statusLabel: "EXPERIMENTAL BUILD",
    currentStatus: "Live operational demonstration. Verifies data table filtering, CSV data export, and task management UX entirely in the client.",
    relatedCapability: {
      name: "Business Systems",
      href: "/services/business-systems",
    },
    ctaText: "Discuss your business system",
    features: ["Interactive Kanban board", "Scraper pipeline simulator", "Filterable lead table", "Instant CSV data export", "Support chat widget", "Hiring cost calculator"],
    stats: [
      { label: "Pages", value: "7" },
      { label: "Operational Tools", value: "5" },
      { label: "Data Export", value: "CSV" },
      { label: "Status", value: "Interactive" },
    ],
  },
  dashboard: {
    slug: "dashboard",
    name: "Northwind Analytics",
    category: "Business Systems & Data Visualization",
    tagline: "High-performance admin dashboard with custom hand-drawn SVG charts and 48-record searchable data table.",
    concept: "Demonstrating that lightweight, hand-crafted SVG charts load instantly and render crisper than bloated external chart libraries.",
    problem: "Modern dashboards often bundle megabytes of charting libraries (Recharts, Chart.js, D3) just to display basic metrics, creating laggy interactions on mobile devices.",
    system: "A comprehensive operations admin panel displaying real-time revenue and visitor KPIs, zero-dependency SVG sparklines and bar graphs, a 48-record customer data table with sorting, dual category filters, debounced search, pagination, and complete record CRUD with CSV export.",
    architecture: "Mathematical SVG path generation directly from array data. Client-side pagination and filter state pipeline decoupled from DOM rendering. Dynamic dark/light theme switching.",
    implementation: "Pure vector geometry for crisp rendering at any DPI, lightweight table pagination logic, and complete keyboard focus states for table rows.",
    technology: ["Zero-Dependency SVG", "JavaScript Data Pipeline", "CSS Variables (Dark/Light)", "Responsive Tables", "CSV Serialization"],
    statusLabel: "EXPERIMENTAL BUILD",
    currentStatus: "Working administrative dashboard demonstration. Validates data table performance, sorting algorithms, and charting speed without external dependencies.",
    relatedCapability: {
      name: "Business Systems",
      href: "/services/business-systems",
    },
    ctaText: "Discuss your analytics dashboard",
    features: ["Hand-crafted SVG charts", "48-record customer table", "Multi-column sorting", "Debounced search & filter", "Full CRUD modal states", "Dark & light themes"],
    stats: [
      { label: "Modules", value: "6" },
      { label: "Records", value: "48" },
      { label: "Chart Runtime", value: "0 KB" },
      { label: "Status", value: "Interactive" },
    ],
  },
  terra: {
    slug: "terra",
    name: "Terra & Co",
    category: "Websites & Commerce",
    tagline: "Editorial brand website with multi-category store, custom box configurator, and customer account dashboard.",
    concept: "Combining editorial visual storytelling with transactional e-commerce and interactive custom product configuration.",
    problem: "Brands often struggle to balance aesthetic editorial content with transactional conversion, resulting in fragmented sites that either look good or sell well, but not both.",
    system: "A 10-page organic farm brand site covering an editorial homepage, multi-category shop with checkout, an interactive subscription box builder with dynamic pricing, a customer delivery management dashboard, and a documented design system.",
    architecture: "Modular section layouts, persistent box configurator state, responsive layout tokens, and accessible semantic markup.",
    implementation: "Responsive CSS grid systems, interactive price calculation engine, dynamic delivery schedule preview, and comprehensive component documentation.",
    technology: ["Semantic HTML5", "CSS Grid & Flexbox", "JavaScript State Bindings", "Responsive Typography", "Design System Tokens"],
    statusLabel: "EXPERIMENTAL BUILD",
    currentStatus: "Comprehensive brand and commerce demonstration. Models the complete user journey from brand discovery to subscription customization.",
    relatedCapability: {
      name: "Websites",
      href: "/services/websites",
    },
    ctaText: "Explore website packages",
    features: ["10 complete pages", "Editorial brand layout", "Store with checkout", "Interactive box builder", "Customer account portal", "Documented design system"],
    stats: [
      { label: "Pages", value: "10" },
      { label: "Disciplines", value: "4" },
      { label: "Interactive Tools", value: "2" },
      { label: "Status", value: "Interactive" },
    ],
  },
  volt: {
    slug: "volt",
    name: "VOLT",
    category: "Digital Products & SaaS Platforms",
    tagline: "Neo-brutalist fintech SaaS interface featuring billing toggle, 3-step signup, and invoice CRUD dashboard.",
    concept: "Applying high-contrast neo-brutalist visual design language to serious financial SaaS workflows.",
    problem: "B2B financial software is frequently visually indistinguishable from competitors, missing opportunities for distinctive brand memorability.",
    system: "A fintech web application featuring a pricing matrix with billing interval toggle, three-step validated signup onboarding flow, and an invoice management dashboard with status filters, invoice generation, and CSV export.",
    architecture: "Form validation state machines, stateful invoice list collection, and accessible modal dialog components.",
    implementation: "Hard-edged offset borders and shadows via CSS custom properties, dynamic tax and total calculation, and local record mutations.",
    technology: ["Neo-Brutalist CSS Tokens", "JavaScript State Store", "Form Validation API", "Modal Dialog Systems"],
    statusLabel: "EXPERIMENTAL BUILD",
    currentStatus: "Interactive prototype exploring SaaS onboarding conversion and financial record management interfaces.",
    relatedCapability: {
      name: "Digital Products",
      href: "/services/digital-products",
    },
    ctaText: "Discuss your SaaS application",
    features: ["Neo-brutalist design system", "Pricing with billing toggle", "3-step validated signup", "Invoice CRUD dashboard", "Status filter tags", "CSV export"],
    stats: [
      { label: "Pages", value: "6" },
      { label: "Live Records", value: "34" },
      { label: "Style", value: "Neo-Brutalist" },
      { label: "Status", value: "Interactive" },
    ],
  },
  proto: {
    slug: "proto",
    name: "PROTO",
    category: "Software Infrastructure & Security",
    tagline: "Technical dossier with 12-point security audit scorer, platform matrix, and multi-network gas estimator.",
    concept: "A technical dossier interface built specifically for technical buyers and software architects.",
    problem: "Software audits and architectural evaluations are typically delivered as static PDFs that stakeholders cannot interact with or customize.",
    system: "A technical dossier layout with sticky navigation gutter, interactive 12-point security audit with weighted severity calculation and CSV export, no-code platform selection matrix, and multi-chain gas cost estimator.",
    architecture: "Mathematical risk scoring formula, sticky sidebar scrollspy, and client-side data export.",
    implementation: "Weighted mathematical evaluation engine, dynamic severity rank labeling, and automated findings compilation for CSV download.",
    technology: ["Semantic HTML5", "Sticky Gutter Layout", "Mathematical Scoring Engine", "CSV Serialization"],
    statusLabel: "EXPERIMENTAL BUILD",
    currentStatus: "Interactive technical dossier demonstrating security audit methodology and infrastructure evaluation.",
    relatedCapability: {
      name: "Software Infrastructure",
      href: "/services/software-infrastructure",
    },
    ctaText: "Discuss software infrastructure",
    features: ["Technical dossier layout", "Sticky metadata gutter", "12-point security audit", "Dynamic severity scoring", "Findings CSV export", "Gas cost estimator"],
    stats: [
      { label: "Pages", value: "6" },
      { label: "Audit Points", value: "12" },
      { label: "Export", value: "CSV" },
      { label: "Status", value: "Interactive" },
    ],
  },
  signal: {
    slug: "signal",
    name: "SIGNAL",
    category: "Platforms & Marketing Systems",
    tagline: "Marketing intelligence dashboard with rank tracker, content calendar, and budget forecaster.",
    concept: "Consolidating search visibility metrics, editorial schedules, and campaign performance into a unified platform.",
    problem: "Marketing teams frequently struggle with fragmented data across separate keyword trackers, calendar spreadsheets, and campaign tools.",
    system: "A multi-tool marketing platform with a sortable keyword rank tracker, clickable content planning calendar, multi-channel campaign performance dashboard, and interactive budget ROI forecaster.",
    architecture: "Tabular keyword data with sorting indexes, interactive calendar state grid, and client-side calculation models.",
    implementation: "Event-driven calendar interactions, keyword position change indicators, and dynamic budget estimation formulas.",
    technology: ["JavaScript Data Store", "CSS Grid Calendar", "Dynamic Sorting Engine", "ROI Calculator Math"],
    statusLabel: "EXPERIMENTAL BUILD",
    currentStatus: "Interactive demonstration of integrated marketing analytics and scheduling software.",
    relatedCapability: {
      name: "Platforms",
      href: "/services/platforms",
    },
    ctaText: "Discuss your platform requirements",
    features: ["Keyword rank tracker", "Sortable data table", "Interactive content calendar", "Campaign switcher", "Budget ROI calculator", "CSV export"],
    stats: [
      { label: "Pages", value: "8" },
      { label: "Interactive Tools", value: "4" },
      { label: "Keywords", value: "12" },
      { label: "Status", value: "Interactive" },
    ],
  },
  kinetik: {
    slug: "kinetik",
    name: "KINETIK",
    category: "Websites & Digital Media",
    tagline: "Creative studio website with custom chapter-scrubbing reel player, easing curve lab, and brand handover.",
    concept: "Demonstrating high-performance native browser animation, kinetic typography, and custom media controls.",
    problem: "Third-party embedded video players often introduce tracking scripts, slow page load, and clash with custom brand aesthetics.",
    system: "A studio website featuring kinetic fluid typography, an asymmetric project grid, a custom HTML5 showreel video player with chapter jumping and scrubbing, an interactive easing curve visualizer, and brand guidelines documentation.",
    architecture: "HTML5 Media API integration, cubic-bezier curve visualizer, and responsive kinetic layout tokens.",
    implementation: "Custom media playback controls, timeline scrubbing calculations, and interactive SVG bezier curve visualization.",
    technology: ["HTML5 Video API", "SVG Bezier Math", "Fluid Typography CSS", "Interactive Animation Lab"],
    statusLabel: "EXPERIMENTAL BUILD",
    currentStatus: "Technical demonstration of native browser media controls and kinetic motion systems.",
    relatedCapability: {
      name: "Websites",
      href: "/services/websites",
    },
    ctaText: "Explore website packages",
    features: ["Fluid kinetic typography", "Custom video player", "Chapter navigation", "Interactive easing lab", "Brand guidelines portal", "Asymmetric project grid"],
    stats: [
      { label: "Pages", value: "8" },
      { label: "Reel Chapters", value: "5" },
      { label: "Easing Curves", value: "6" },
      { label: "Status", value: "Interactive" },
    ],
  },
  lede: {
    slug: "lede",
    name: "LEDE & CO",
    category: "Websites & Publishing Systems",
    tagline: "Reading-first editorial website with live readability analyzer, before/after copy teardowns, and RTL typography.",
    concept: "A digital publishing architecture optimized strictly for reading comfort, text analysis, and multilingual typography.",
    problem: "Digital content platforms often prioritize intrusive ads and animations over typographic hierarchy, readability, and multi-language support.",
    system: "An editorial publishing layout featuring distraction-free typography, an in-browser readability scoring analyzer, before-and-after copy comparison sliders with editor reasoning, and native right-to-left (RTL) script rendering.",
    architecture: "Flesch-Kincaid readability scoring implementation in client-side JavaScript, bidirectional CSS typography tokens.",
    implementation: "Real-time syllable counting algorithm, split-view copy comparison, and semantic reading-focused markup.",
    technology: ["Semantic HTML5", "Text Analysis Algorithm", "CSS Logical Properties (RTL)", "Typography Design Tokens"],
    statusLabel: "EXPERIMENTAL BUILD",
    currentStatus: "Reading-first publishing environment demonstrating text analysis and bidirectional typography.",
    relatedCapability: {
      name: "Websites",
      href: "/services/websites",
    },
    ctaText: "Explore website packages",
    features: ["Reading-first layout", "Live readability analyzer", "Before/after rewrite slider", "Formatted screenplays", "Native RTL typesetting", "Rate card specifications"],
    stats: [
      { label: "Pages", value: "7" },
      { label: "Languages", value: "5" },
      { label: "Live Tools", value: "3" },
      { label: "Status", value: "Interactive" },
    ],
  },
};

export function getProjectStudy(slug: string): ProjectStudy | undefined {
  return projectStudies[slug];
}
