import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  RUNTIME_COOKIE,
  RUNTIME_HEADER,
  UNAUTHORIZED_HTML,
  getParentOrigins,
  isRuntimeAuthBypassed,
  verifyRuntimeToken,
} from "@/lib/runtime-auth";

function unauthorized(): NextResponse {
  return new NextResponse(UNAUTHORIZED_HTML, {
    status: 401,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store, no-cache, must-revalidate, private",
      "x-robots-tag": "noindex, nofollow, noarchive",
      "x-content-type-options": "nosniff",
      "referrer-policy": "no-referrer",
    },
  });
}

function fetchSite(request: NextRequest): string {
  return (request.headers.get("sec-fetch-site") || "").toLowerCase();
}

function fetchDest(request: NextRequest): string {
  return (request.headers.get("sec-fetch-dest") || "").toLowerCase();
}

function isDirectAddressBar(request: NextRequest): boolean {
  return fetchSite(request) === "none";
}

function isEmbedded(request: NextRequest): boolean {
  const dest = fetchDest(request);
  return dest === "iframe" || dest === "embed" || dest === "frame";
}

function isTopLevelDocument(request: NextRequest): boolean {
  const dest = fetchDest(request);
  const mode = (request.headers.get("sec-fetch-mode") || "").toLowerCase();
  if (isEmbedded(request)) return false;
  if (dest && dest !== "document") return false;
  if (mode === "navigate" || dest === "document") return true;
  const accept = request.headers.get("accept") || "";
  if (!dest && accept.includes("text/html")) return true;
  return false;
}

/** /projects/flux → App Router iframe viewer (not static HTML). */
function isProjectViewerPath(pathname: string): boolean {
  const rest = pathname.replace(/^\/projects\/?/, "");
  if (!rest || rest.includes("/")) return false;
  return !rest.includes(".");
}

/** /projects/flux/index.html → /projects/flux (clean viewer URL). */
function viewerRedirectForHtml(pathname: string): string | null {
  const m = pathname.match(/^\/projects\/([^/]+)\/index\.html$/i);
  if (!m) return null;
  return `/projects/${m[1]}`;
}

async function hasValidSession(request: NextRequest): Promise<boolean> {
  if (isRuntimeAuthBypassed()) return true;

  const header = request.headers.get(RUNTIME_HEADER);
  const bearer = header?.startsWith("Bearer ") ? header.slice(7).trim() : header?.trim();
  const cookie = request.cookies.get(RUNTIME_COOKIE)?.value;
  const token = bearer || cookie;
  const claims = await verifyRuntimeToken(token);
  return claims !== null;
}

/**
 * - /projects → marketing list (not matched here when only :path+)
 * - /projects/:slug → public Next viewer (iframe shell)
 * - /projects/:slug/** static HTML/assets → iframe-only / session-gated
 */
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/projects/")) {
    return NextResponse.next();
  }

  // Clean viewer route — never treat as static project file
  if (isProjectViewerPath(pathname)) {
    return NextResponse.next();
  }

  if (isRuntimeAuthBypassed()) {
    return NextResponse.next();
  }

  // Top-level open of index.html → clean /projects/:slug viewer
  if (isTopLevelDocument(request)) {
    const clean = viewerRedirectForHtml(pathname);
    if (clean) {
      const url = request.nextUrl.clone();
      url.pathname = clean;
      return NextResponse.redirect(url, 307);
    }
    // Any other project HTML opened as a top-level tab → unauthorized
    if (/\.html?$/i.test(pathname)) {
      return unauthorized();
    }
  }

  // Direct typed URL for assets/html without referrer context
  if (isDirectAddressBar(request) && !isEmbedded(request)) {
    return unauthorized();
  }

  const site = fetchSite(request);
  const sameOrigin = site === "same-origin" || site === "same-site";

  if (sameOrigin || isEmbedded(request)) {
    // Embed from our viewer, or same-origin asset loads
    if (!sameOrigin) {
      const ok = await hasValidSession(request);
      if (!ok) return unauthorized();
    }
    const parents = getParentOrigins();
    const ancestors = ["'self'", ...parents].join(" ");
    const res = NextResponse.next();
    res.headers.set("cache-control", "no-store, private");
    res.headers.set("x-robots-tag", "noindex, nofollow");
    if (isEmbedded(request) || /\.html?$/i.test(pathname)) {
      res.headers.set("content-security-policy", `frame-ancestors ${ancestors}`);
    }
    return res;
  }

  const ok = await hasValidSession(request);
  if (!ok) return unauthorized();

  const res = NextResponse.next();
  res.headers.set("cache-control", "no-store, private");
  res.headers.set("x-robots-tag", "noindex, nofollow");
  return res;
}

export const config = {
  matcher: ["/projects/:path+"],
};
