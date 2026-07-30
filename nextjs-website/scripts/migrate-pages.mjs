#!/usr/bin/env node
/**
 * Extract marketing page <main> bodies from the Hostinger static site
 * and generate content modules + Next.js app routes.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = "/home/sct/Desktop/websites/moccasin-meerkat-640470.hostingersite.com";
const CONTENT_DIR = path.join(ROOT, "content", "pages");
const APP_DIR = path.join(ROOT, "app");

function rewriteHref(href) {
  if (
    !href ||
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("https://") ||
    href.startsWith("http://") ||
    href.startsWith("//") ||
    href.startsWith("javascript:")
  ) {
    return href;
  }
  if (href.includes("/demos/") || href.startsWith("demos/")) {
    let h = href.replace(/^\.\.\//, "/").replace(/^\.\//, "/");
    if (!h.startsWith("/")) h = "/" + h;
    return h;
  }
  if (href.includes("/projects/") || href.startsWith("projects/")) {
    let h = href.replace(/^\.\.\//, "/").replace(/^\.\//, "/");
    if (!h.startsWith("/")) h = "/" + h;
    return h;
  }
  let h = href.replace(/^\.\.\//, "").replace(/^\.\//, "");
  h = h.replace(/^\/+/, "");
  if (h === "index.html" || h === "") return "/";
  if (h === "blog/index.html" || h === "blog/") return "/blog";
  if (h.endsWith("/index.html")) return "/" + h.replace(/\/index\.html$/, "");
  if (h.endsWith(".html")) return "/" + h.replace(/\.html$/, "");
  if (!h.startsWith("/")) return "/" + h;
  return h;
}

function rewriteHtml(html) {
  return html
    .replace(/\bhref=(["'])([^"']+)\1/gi, (_m, q, href) => `href=${q}${rewriteHref(href)}${q}`)
    .replace(
      /\bsrc=(["'])(?!https?:|\/\/|data:)([^"']+)\1/gi,
      (_m, q, src) => {
        let cleaned = src.replace(/^\.\.\//, "/").replace(/^\.\//, "/");
        if (!cleaned.startsWith("/")) cleaned = "/" + cleaned;
        return `src=${q}${cleaned}${q}`;
      }
    );
}

function extractMeta(html) {
  const title = (html.match(/<title>([^<]*)<\/title>/i) || [, ""])[1].trim();
  const desc =
    (html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i) || [, ""])[1] ||
    (html.match(/content=["']([^"']*)["']\s+name=["']description["']/i) || [, ""])[1] ||
    "";
  return { title, description: desc };
}

function extractMain(html) {
  const m = html.match(/<main\b[^>]*id=["']main["'][^>]*>([\s\S]*?)<\/main>/i);
  if (m) return { body: m[1].trim(), hasMain: true, includeCtaInBody: false };

  // Older/hub pages: content between </header> and <footer> (includes page CTA)
  const h = html.match(/<\/header>([\s\S]*?)<footer\b/i);
  if (!h) throw new Error("No <main id=\"main\"> or header/footer body found");
  return { body: h[1].trim(), hasMain: false, includeCtaInBody: true };
}

function listMarketingHtml(dir, base = "") {
  const out = [];
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const rel = path.join(base, name);
    if (name === "demos" || name === "projects" || name === "assets") continue;
    if (fs.statSync(full).isDirectory()) {
      out.push(...listMarketingHtml(full, rel));
    } else if (name.endsWith(".html") && name !== "index.html" || (base === "blog" && name === "index.html")) {
      // skip root index (home is React); include blog/index.html
      if (rel === "index.html") continue;
      out.push(rel);
    }
  }
  // also pick root non-index html already handled; fix blog index
  return out;
}

function routeFromRel(rel) {
  // blog/index.html -> /blog
  // blog/foo.html -> /blog/foo
  // industries/x.html -> /industries/x
  // about.html -> /about
  let r = rel.replace(/\\/g, "/");
  if (r === "blog/index.html") return "/blog";
  if (r.endsWith("/index.html")) return "/" + r.replace(/\/index\.html$/, "");
  return "/" + r.replace(/\.html$/, "");
}

function appPathFromRoute(route) {
  // /blog -> app/blog/page.tsx
  // /blog/foo -> app/blog/foo/page.tsx
  const parts = route.split("/").filter(Boolean);
  return path.join(APP_DIR, ...parts, "page.tsx");
}

function contentKey(route) {
  return route.replace(/^\//, "").replace(/\//g, "__") || "home";
}

function esc(str) {
  return str.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

function writePageModule(route, title, description, mainHtml, { showCta = true } = {}) {
  const key = contentKey(route);
  const contentFile = path.join(CONTENT_DIR, `${key}.ts`);
  const pageFile = appPathFromRoute(route);

  fs.mkdirSync(path.dirname(contentFile), { recursive: true });
  fs.mkdirSync(path.dirname(pageFile), { recursive: true });

  fs.writeFileSync(
    contentFile,
    `export const title = ${JSON.stringify(title)};\n` +
      `export const description = ${JSON.stringify(description)};\n` +
      `export const mainHtml = \`${esc(mainHtml)}\`;\n` +
      `export const showCta = ${showCta ? "true" : "false"};\n`
  );

  fs.writeFileSync(
    pageFile,
    `import type { Metadata } from "next";\n` +
      `import { SiteShell } from "@/components/site/SiteShell";\n` +
      `import { HtmlContent } from "@/components/site/HtmlContent";\n` +
      `import { title, description, mainHtml, showCta } from "@/content/pages/${key}";\n\n` +
      `export const metadata: Metadata = {\n` +
      `  title,\n` +
      `  description,\n` +
      `};\n\n` +
      `export default function Page() {\n` +
      `  return (\n` +
      `    <SiteShell showCta={showCta}>\n` +
      `      <main id="main">\n` +
      `        <HtmlContent html={mainHtml} />\n` +
      `      </main>\n` +
      `    </SiteShell>\n` +
      `  );\n` +
      `}\n`
  );
}

// Collect files
const files = [];
for (const name of fs.readdirSync(SRC)) {
  const full = path.join(SRC, name);
  if (name === "demos" || name === "projects" || name === "assets") continue;
  if (fs.statSync(full).isDirectory()) {
    for (const sub of fs.readdirSync(full)) {
      if (sub.endsWith(".html")) files.push(path.join(name, sub));
    }
  } else if (name.endsWith(".html") && name !== "index.html") {
    files.push(name);
  }
}

fs.mkdirSync(CONTENT_DIR, { recursive: true });

let ok = 0;
const routes = [];
for (const rel of files.sort()) {
  const full = path.join(SRC, rel);
  const html = fs.readFileSync(full, "utf8");
  try {
    const { title, description } = extractMeta(html);
    const extracted = extractMain(html);
    const main = rewriteHtml(extracted.body);
    const route = routeFromRel(rel);
    // Pages that embed their own CTA before footer should not get FinalCta twice
    writePageModule(route, title, description, main, {
      showCta: !extracted.includeCtaInBody,
    });
    routes.push(route);
    ok++;
  } catch (e) {
    console.error("FAIL", rel, e.message);
  }
}

// redirects list
const redirects = routes.map((r) => ({
  source: r === "/blog" ? "/blog/index.html" : `${r}.html`,
  destination: r,
  permanent: true,
}));
// also blog nested
redirects.push({ source: "/index.html", destination: "/", permanent: true });

fs.writeFileSync(
  path.join(ROOT, "lib", "redirects.generated.json"),
  JSON.stringify(redirects, null, 2)
);

console.log(`Migrated ${ok} pages → content/pages + app routes`);
console.log(`Wrote ${redirects.length} redirects`);
