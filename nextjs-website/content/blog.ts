export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  readMins: number;
  image: string;
  excerpt: string;
  relatedCapability?: {
    name: string;
    href: string;
  };
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-much-does-a-website-cost",
    title: "How much does a website cost in 2026? Real numbers, no ranges",
    category: "Pricing",
    readMins: 9,
    image: "/assets/img/ph-ai.webp",
    excerpt: "Actual website development costs broken down by package tier, with hosting renewal transparency and what actually drives price.",
    relatedCapability: {
      name: "Websites",
      href: "/services/websites",
    },
  },
  {
    slug: "core-web-vitals-fix-guide",
    title: "Core Web Vitals fix guide for modern business websites",
    category: "Performance",
    readMins: 8,
    image: "/assets/img/ph-code.webp",
    excerpt: "Practical engineering fixes for LCP, INP, and CLS layout shifts in React and Next.js applications.",
    relatedCapability: {
      name: "Websites",
      href: "/services/websites",
    },
  },
  {
    slug: "website-security-checklist-small-business",
    title: "Website security checklist for small businesses and web apps",
    category: "Security",
    readMins: 7,
    image: "/assets/img/ph-social.webp",
    excerpt: "Essential security implementations from CSP headers and SSL configuration to input sanitization and secure sessions.",
    relatedCapability: {
      name: "Software Infrastructure",
      href: "/services/software-infrastructure",
    },
  },
  {
    slug: "ai-automation-what-actually-works",
    title: "AI automation: what actually works in a growing business",
    category: "Systems",
    readMins: 9,
    image: "/assets/img/ph-social.webp",
    excerpt: "Which software automations and data pipelines return real ROI without agency hype or fragile no-code chains.",
    relatedCapability: {
      name: "Business Systems",
      href: "/services/business-systems",
    },
  },
  {
    slug: "shopify-vs-woocommerce-2026",
    title: "Shopify vs WooCommerce vs Custom Platforms in 2026",
    category: "E-Commerce",
    readMins: 10,
    image: "/assets/img/ph-code.webp",
    excerpt: "Total cost, speed, maintenance overhead, and the crossover point where custom commerce architecture becomes necessary.",
    relatedCapability: {
      name: "Platforms",
      href: "/services/platforms",
    },
  },
  {
    slug: "why-your-content-is-invisible-to-google",
    title: "Why good content stays invisible without technical SEO structure",
    category: "SEO",
    readMins: 8,
    image: "/assets/img/ph-ai.webp",
    excerpt: "How semantic HTML hierarchy, Schema.org structured data, and clean sitemaps determine organic discovery.",
    relatedCapability: {
      name: "Websites",
      href: "/services/websites",
    },
  },
  {
    slug: "local-seo-checklist",
    title: "Local SEO checklist for Indian and service businesses",
    category: "SEO",
    readMins: 6,
    image: "/assets/img/ph-city.webp",
    excerpt: "Google Business Profile optimization, localized structured data, NAP consistency, and high-converting service pages.",
    relatedCapability: {
      name: "Websites",
      href: "/services/websites",
    },
  },
  {
    slug: "how-to-brief-a-design-agency",
    title: "How to brief a software engineering team so you get what you meant",
    category: "Process",
    readMins: 7,
    image: "/assets/img/ph-whiteboard.webp",
    excerpt: "Structuring technical requirements, user stories, database models, and acceptance criteria to avoid scope bloat.",
    relatedCapability: {
      name: "Digital Products",
      href: "/services/digital-products",
    },
  },
  {
    slug: "outsourcing-vs-hiring-cost-comparison",
    title: "In-house engineering vs dedicated technical partner: real cost breakdown",
    category: "Engineering",
    readMins: 9,
    image: "/assets/img/ph-workshop.webp",
    excerpt: "Comparing fully loaded internal hiring costs against focused technical partner engagements.",
    relatedCapability: {
      name: "Business Systems",
      href: "/services/business-systems",
    },
  },
  {
    slug: "seo-vs-paid-ads-which-first",
    title: "SEO or paid acquisition first? The honest framework for businesses",
    category: "Strategy",
    readMins: 8,
    image: "/assets/img/ph-code.webp",
    excerpt: "A practical framework for deciding between organic search infrastructure and paid ads based on margin and conversion readiness.",
    relatedCapability: {
      name: "Websites",
      href: "/services/websites",
    },
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
