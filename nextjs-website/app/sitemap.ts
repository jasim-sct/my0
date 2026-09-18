import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { blogPosts } from "@/content/blog";
import { industries } from "@/content/industries";
import { locations } from "@/content/locations";
import { listProjectSlugs } from "@/lib/projects";

const base = "https://www.axiofuture.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/engineering",
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
  const projectSlugs = listProjectSlugs();

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
      priority: 0.8,
    })),
    ...projectSlugs.map((slug) => ({
      url: `${base}/projects/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...blogPosts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
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
