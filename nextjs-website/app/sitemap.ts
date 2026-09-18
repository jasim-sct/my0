import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { blogPosts } from "@/content/blog";
import { industries } from "@/content/industries";
import { locations } from "@/content/locations";

const base = "https://www.axonfuture.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/pricing",
    "/projects",
    "/contact",
    "/blog",
    "/industries",
    "/locations",
    "/privacy-policy",
    "/terms",
    "/sitemap",
  ];

  const now = new Date();

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path || "/"}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...blogPosts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...industries.map((i) => ({
      url: `${base}/industries/${i.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...locations.map((l) => ({
      url: `${base}/locations/${l.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
