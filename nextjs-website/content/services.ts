export type Service = {
  slug: string;
  name: string;
  pillar: string;
  from: string;
  blurb: string;
};

export const services: Service[] = [
  { slug: "website-development", name: "Website Development", pillar: "Build", from: "From $299 · 7–25 days", blurb: "Sites that ship and scale." },
  { slug: "ecommerce-development", name: "E-Commerce Development", pillar: "Build", from: "From $499 · 10–30 days", blurb: "Stores that convert." },
  { slug: "web-app-development", name: "Web App Development", pillar: "Build", from: "From $2,400 · 4–12 weeks", blurb: "Product-grade apps." },
  { slug: "ui-ux-design", name: "UI/UX Design", pillar: "Build", from: "From $899 · 2–5 weeks", blurb: "Interfaces people finish." },
  { slug: "graphic-design", name: "Graphic Design", pillar: "Brand", from: "From $149 · 4–12 days", blurb: "Print and digital assets." },
  { slug: "brand-identity", name: "Brand Identity", pillar: "Brand", from: "From $899 · 3–6 weeks", blurb: "Systems that hold." },
  { slug: "video-editing", name: "Video Editing", pillar: "Brand", from: "From $199 · 5–18 days", blurb: "Cuts that keep attention." },
  { slug: "motion-graphics", name: "Motion Graphics & Animation", pillar: "Brand", from: "From $499 · 2–6 weeks", blurb: "Motion that sells." },
  { slug: "seo-services", name: "SEO Services", pillar: "Grow", from: "From $299/mo", blurb: "Rankings tied to revenue." },
  { slug: "social-media-management", name: "Social Media Management", pillar: "Grow", from: "From $249/mo", blurb: "Posts with a plan." },
  { slug: "paid-ads-management", name: "Paid Ads Management", pillar: "Grow", from: "From $399/mo", blurb: "ROAS reported weekly." },
  { slug: "email-marketing", name: "Email Marketing", pillar: "Grow", from: "From $420", blurb: "Sequences that sell." },
  { slug: "blog-writing", name: "Blog Writing", pillar: "Words", from: "From $180", blurb: "Articles that rank." },
  { slug: "copywriting", name: "Copywriting", pillar: "Words", from: "From $140", blurb: "Pages that convert." },
  { slug: "script-writing", name: "Script Writing", pillar: "Words", from: "From $180/min", blurb: "Scripts for video and ads." },
  { slug: "translation-services", name: "Translation & Localisation", pillar: "Words", from: "From $0.09/word", blurb: "Five languages, native tone." },
  { slug: "virtual-assistant", name: "Virtual Assistant", pillar: "Operate", from: "From $9/hour", blurb: "Admin off your plate." },
  { slug: "data-entry-scraping", name: "Data Entry & Web Scraping", pillar: "Operate", from: "From $8/hour", blurb: "Clean data at scale." },
  { slug: "lead-generation", name: "Lead Generation", pillar: "Operate", from: "From $11/hour", blurb: "SMTP-verified leads." },
  { slug: "customer-support", name: "Customer Support", pillar: "Operate", from: "From $10/hour", blurb: "24/5 coverage." },
  { slug: "ai-chatbots", name: "AI Chatbots", pillar: "Automate", from: "From $2,400", blurb: "Agents that qualify." },
  { slug: "business-automation", name: "Business Automation", pillar: "Automate", from: "From $399", blurb: "Workflows that run." },
  { slug: "ai-content-systems", name: "AI Content Systems", pillar: "Automate", from: "From $799", blurb: "Content pipelines." },
  { slug: "no-code-development", name: "No-Code Development", pillar: "Frontier", from: "From $1,200", blurb: "Ship without engineers." },
  { slug: "blockchain-web3", name: "Blockchain & Web3", pillar: "Frontier", from: "From $1,900", blurb: "Contracts and dApps." },
  { slug: "cybersecurity-basics", name: "Cybersecurity Basics", pillar: "Frontier", from: "From $1,400", blurb: "Hardening in five days." },
  { slug: "amazon-account-management", name: "Amazon Account Management", pillar: "Marketplace", from: "From $499/mo", blurb: "ACoS down 30–55%." },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
