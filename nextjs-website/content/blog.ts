export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  readMins: number;
  image: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-much-does-a-website-cost",
    title: "How much does a website cost in 2026? Real numbers, no ranges",
    category: "Pricing",
    readMins: 9,
    image: "/assets/img/ph-ai.webp",
    excerpt: "Actual website costs in 2026 broken down by type, with what drives the price up and five things agencies quiet on…",
  },
  {
    slug: "seo-vs-paid-ads-which-first",
    title: "SEO or paid ads first? The honest answer depends on three numbers",
    category: "Strategy",
    readMins: 8,
    image: "/assets/img/ph-code.webp",
    excerpt: "A framework for deciding between SEO and paid ads based on your margin, sales cycle and runway…",
  },
  {
    slug: "ai-automation-what-actually-works",
    title: "AI automation: what actually works in a small business",
    category: "AI",
    readMins: 9,
    image: "/assets/img/ph-social.webp",
    excerpt: "Which AI automations return real money in a business under fifty people, and which are expensive theatre…",
  },
  {
    slug: "why-your-content-is-invisible-to-google",
    title: "Why your best content is invisible to Google",
    category: "SEO",
    readMins: 8,
    image: "/assets/img/ph-ai.webp",
    excerpt: "Why strong writing still fails to rank — and the structural fixes that fix it.",
  },
  {
    slug: "shopify-vs-woocommerce-2026",
    title: "Shopify vs WooCommerce in 2026: the honest comparison",
    category: "E-Commerce",
    readMins: 10,
    image: "/assets/img/ph-code.webp",
    excerpt: "Total cost, speed, plugins and when each platform is the wrong choice.",
  },
  {
    slug: "amazon-acos-reduction-guide",
    title: "How to cut Amazon ACoS by half in 90 days",
    category: "Amazon",
    readMins: 11,
    image: "/assets/img/ph-workshop.webp",
    excerpt: "The PPC and listing changes that consistently drop ACoS without killing volume.",
  },
  {
    slug: "core-web-vitals-fix-guide",
    title: "Core Web Vitals fix guide for small business sites",
    category: "Performance",
    readMins: 8,
    image: "/assets/img/ph-code.webp",
    excerpt: "Practical fixes for LCP, INP and CLS without a full rebuild.",
  },
  {
    slug: "how-to-brief-a-design-agency",
    title: "How to brief a design agency so you get what you meant",
    category: "Process",
    readMins: 7,
    image: "/assets/img/ph-whiteboard.webp",
    excerpt: "A brief template that removes three rounds of revisions.",
  },
  {
    slug: "local-seo-checklist",
    title: "Local SEO checklist for service businesses",
    category: "SEO",
    readMins: 6,
    image: "/assets/img/ph-city.webp",
    excerpt: "GBP, citations, pages and reviews — in the order that matters.",
  },
  {
    slug: "outsourcing-vs-hiring-cost-comparison",
    title: "Outsourcing vs hiring: a real cost comparison",
    category: "Operations",
    readMins: 9,
    image: "/assets/img/ph-workshop.webp",
    excerpt: "Fully loaded costs for VA, content and ads roles versus agency retainers.",
  },
  {
    slug: "website-security-checklist-small-business",
    title: "Website security checklist for small businesses",
    category: "Security",
    readMins: 7,
    image: "/assets/img/ph-code.webp",
    excerpt: "The minimum security bar before you take payments online.",
  },
  {
    slug: "what-a-brand-identity-actually-includes",
    title: "What a brand identity actually includes",
    category: "Brand",
    readMins: 8,
    image: "/assets/img/ph-whiteboard.webp",
    excerpt: "Logo, type, colour, voice and applications — what you should receive.",
  },
];
