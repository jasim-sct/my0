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
    ];
  },
};

export default nextConfig;
