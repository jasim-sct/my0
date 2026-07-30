import { NextResponse } from "next/server";
import {
  RUNTIME_COOKIE,
  createRuntimeToken,
  verifyRuntimeToken,
} from "@/lib/runtime-auth";

export const dynamic = "force-dynamic";

/**
 * Portal redirects here with a short-lived token.
 * Sets session cookie, then redirects to next (parent should embed /projects in an iframe).
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token") || url.searchParams.get("rt");
  const next = url.searchParams.get("next") || "/";

  const claims = await verifyRuntimeToken(token);
  if (!claims) {
    const { UNAUTHORIZED_HTML } = await import("@/lib/runtime-auth");
    return new NextResponse(UNAUTHORIZED_HTML, {
      status: 401,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-store",
        "x-robots-tag": "noindex, nofollow",
      },
    });
  }

  const session = await createRuntimeToken({
    sub: claims.sub || "portal-user",
    src: claims.src || "exchange",
    ttlSec: 60 * 60 * 8,
  });

  const destPath = next.startsWith("/") && !next.startsWith("//") ? next : "/";

  const dest = new URL(destPath, url.origin);
  const res = NextResponse.redirect(dest, 303);
  const secure = process.env.NODE_ENV === "production";
  res.cookies.set({
    name: RUNTIME_COOKIE,
    value: session,
    httpOnly: true,
    secure,
    sameSite: secure ? "none" : "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
  return res;
}
