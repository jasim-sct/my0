export type Service = {
  slug: string;
  name: string;
  pillar: string;
  from: string;
  blurb: string;
};

export const services: Service[] = [
  { slug: "product-engineering", name: "Product Engineering", pillar: "Engineering", from: "Custom Scope", blurb: "End-to-end product development." },
  { slug: "saas-development", name: "SaaS Development", pillar: "Engineering", from: "Custom Scope", blurb: "Multi-tenant scalable SaaS platforms." },
  { slug: "enterprise-software", name: "Enterprise Software", pillar: "Engineering", from: "Custom Scope", blurb: "Business systems built for operations." },
  { slug: "web-applications", name: "Web Applications", pillar: "Engineering", from: "Custom Scope", blurb: "Modern, performant web experiences." },
  { slug: "api-backend", name: "API & Backend Engineering", pillar: "Infrastructure", from: "Custom Scope", blurb: "Secure, scalable backend systems." },
  { slug: "cloud-infrastructure", name: "Cloud & Infrastructure", pillar: "Infrastructure", from: "Custom Scope", blurb: "Deployment and scalability." },
  { slug: "ui-engineering", name: "UI Engineering", pillar: "Infrastructure", from: "Custom Scope", blurb: "Reusable interfaces and systems." },
  { slug: "system-modernization", name: "System Modernization", pillar: "Infrastructure", from: "Custom Scope", blurb: "Modernizing legacy architectures." }
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
