/** Rewrite static-site hrefs to clean Next.js routes. Keep demos/projects as .html. */

export function rewriteHtmlLinks(html: string): string {
  return html
    .replace(/\bhref=(["'])([^"']+)\1/gi, (_m, q: string, href: string) => {
      const next = rewriteHref(href);
      return `href=${q}${next}${q}`;
    })
    .replace(/\bsrc=(["'])(?!https?:|\/\/|data:|mailto:|tel:)([^"']+)\1/gi, (_m, q: string, src: string) => {
      const cleaned = src.replace(/^\.\.\//, "/").replace(/^\.\//, "/");
      if (cleaned.startsWith("/")) return `src=${q}${cleaned}${q}`;
      if (cleaned.startsWith("assets/")) return `src=${q}/${cleaned}${q}`;
      return `src=${q}/${cleaned}${q}`;
    });
}

export function rewriteHref(href: string): string {
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

  // Preserve block apps as static HTML
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
  if (h.endsWith("/index.html")) {
    return "/" + h.replace(/\/index\.html$/, "");
  }
  if (h.endsWith(".html")) {
    return "/" + h.replace(/\.html$/, "");
  }
  if (!h.startsWith("/")) return "/" + h;
  return h;
}
