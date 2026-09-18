export type Service = {
  slug: string;
  name: string;
  pillar: string;
  from: string;
  blurb: string;
};

export const services: Service[] = [
  {
    slug: "websites",
    name: "Websites",
    pillar: "Engineering",
    from: "From ₹7,999",
    blurb: "Fast, search-optimized websites engineered for businesses that need a credible, high-converting digital presence.",
  },
  {
    slug: "digital-products",
    name: "Digital Products",
    pillar: "Engineering",
    from: "Custom Scope",
    blurb: "Customer-facing portals, interactive tools, and web applications designed around real user workflows.",
  },
  {
    slug: "business-systems",
    name: "Business Systems",
    pillar: "Engineering",
    from: "Custom Scope",
    blurb: "Custom software connecting operations, data, workflows, and people with high reliability.",
  },
  {
    slug: "platforms",
    name: "Platforms",
    pillar: "Infrastructure",
    from: "Custom Scope",
    blurb: "Scalable e-commerce and multi-user systems designed to support transactions, catalogs, and custom rules.",
  },
  {
    slug: "software-infrastructure",
    name: "Software Infrastructure",
    pillar: "Infrastructure",
    from: "Custom Scope",
    blurb: "Backend systems, typed REST APIs, database schemas, and cloud deployment pipelines.",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
