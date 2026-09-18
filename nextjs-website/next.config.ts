import type { NextConfig } from "next";
import redirectsGenerated from "./lib/redirects.generated.json";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...redirectsGenerated,
      // Static-site aliases
      { source: "/blog/index.html", destination: "/blog", permanent: true },
      { source: "/industries/:slug.html", destination: "/industries/:slug", permanent: true },
      { source: "/locations/:slug.html", destination: "/locations/:slug", permanent: true },
      { source: "/blog/:slug.html", destination: "/blog/:slug", permanent: true },

      // Portfolio to Projects consolidation
      { source: "/portfolio", destination: "/projects", permanent: true },
      { source: "/portfolio.html", destination: "/projects", permanent: true },
      { source: "/renderer", destination: "/projects", permanent: true },
      { source: "/renderer/:path*", destination: "/projects", permanent: true },
      
      // Redirects for restructured service pages
      { source: "/services/product-engineering", destination: "/services/digital-products", permanent: true },
      { source: "/services/saas-development", destination: "/services/platforms", permanent: true },
      { source: "/services/enterprise-software", destination: "/services/business-systems", permanent: true },
      { source: "/services/web-applications", destination: "/services/websites", permanent: true },
      { source: "/services/api-backend", destination: "/services/software-infrastructure", permanent: true },
      { source: "/services/cloud-infrastructure", destination: "/services/software-infrastructure", permanent: true },
      { source: "/services/ui-engineering", destination: "/services/digital-products", permanent: true },
      { source: "/services/system-modernization", destination: "/services/business-systems", permanent: true },

      // Legacy service and package redirects
      { source: "/web-development", destination: "/services/websites", permanent: true },
      { source: "/web-development.html", destination: "/services/websites", permanent: true },
      { source: "/digital-marketing", destination: "/services/websites", permanent: true },
      { source: "/digital-marketing.html", destination: "/services/websites", permanent: true },
      { source: "/content-video", destination: "/services/digital-products", permanent: true },
      { source: "/content-video.html", destination: "/services/digital-products", permanent: true },
      { source: "/ai-automation", destination: "/services/business-systems", permanent: true },
      { source: "/ai-automation.html", destination: "/services/business-systems", permanent: true },
      { source: "/packages", destination: "/pricing", permanent: true },
      { source: "/packages.html", destination: "/pricing", permanent: true },

      // Blog consolidation and redirect for non-software legacy topics
      { source: "/blog/amazon-acos-reduction-guide", destination: "/services/business-systems", permanent: true },
      { source: "/blog/amazon-acos-reduction-guide.html", destination: "/services/business-systems", permanent: true },
      { source: "/blog/what-a-brand-identity-actually-includes", destination: "/services/digital-products", permanent: true },
      { source: "/blog/what-a-brand-identity-actually-includes.html", destination: "/services/digital-products", permanent: true },
    ];
  },
};

export default nextConfig;

