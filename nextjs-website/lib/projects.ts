import { readdirSync, existsSync } from "fs";
import path from "path";

const PROJECTS_DIR = path.join(process.cwd(), "public", "projects");

export function listProjectSlugs(): string[] {
  if (!existsSync(PROJECTS_DIR)) return [];
  return readdirSync(PROJECTS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) => existsSync(path.join(PROJECTS_DIR, name, "index.html")))
    .sort();
}

export function isKnownProjectSlug(slug: string): boolean {
  if (!slug || slug.includes(".") || slug.includes("/") || slug.includes("\\")) {
    return false;
  }
  return existsSync(path.join(PROJECTS_DIR, slug, "index.html"));
}

/** Static HTML path loaded inside the viewer iframe. */
export function projectIframeSrc(slug: string, page = "index.html"): string {
  const safe = page.replace(/^\/+/, "").replace(/\.\./g, "");
  return `/projects/${slug}/${safe || "index.html"}`;
}
