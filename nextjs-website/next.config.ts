import type { NextConfig } from "next";
import redirectsGenerated from "./lib/redirects.generated.json";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...redirectsGenerated,
      // Nested static-site aliases
      { source: "/blog/index.html", destination: "/blog", permanent: true },
      { source: "/industries/:slug.html", destination: "/industries/:slug", permanent: true },
      { source: "/locations/:slug.html", destination: "/locations/:slug", permanent: true },
      { source: "/blog/:slug.html", destination: "/blog/:slug", permanent: true },
      // Stale covered-renderer URLs (removed) — send users back to portfolio
      { source: "/renderer", destination: "/portfolio", permanent: false },
      { source: "/renderer/:path*", destination: "/portfolio", permanent: false },
      
      // Redirects for restructured service pages
      { source: "/services/product-engineering", destination: "/services/digital-products", permanent: true },
      { source: "/services/saas-development", destination: "/services/platforms", permanent: true },
      { source: "/services/enterprise-software", destination: "/services/business-systems", permanent: true },
      { source: "/services/web-applications", destination: "/services/websites", permanent: true },
      { source: "/services/api-backend", destination: "/services/software-infrastructure", permanent: true },
      { source: "/services/cloud-infrastructure", destination: "/services/software-infrastructure", permanent: true },
      { source: "/services/ui-engineering", destination: "/services/digital-products", permanent: true },
      { source: "/services/system-modernization", destination: "/services/business-systems", permanent: true },
    ];
  },
};

export default nextConfig;
