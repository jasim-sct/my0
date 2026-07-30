import { NextResponse } from "next/server";
import {
  RUNTIME_COOKIE,
  createRuntimeToken,
  getParentOrigins,
  verifyRuntimeToken,
} from "@/lib/runtime-auth";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type Body = {
  token?: string;
  sub?: string;
};

function corsHeaders(origin: string | null): HeadersInit {
  const allowed = getParentOrigins();
  const headers: Record<string, string> = {
    "cache-control": "no-store",
    "content-type": "application/json",
  };
  if (origin && (allowed.length === 0 || allowed.includes(origin))) {
    headers["access-control-allow-origin"] = origin;
    headers["access-control-allow-credentials"] = "true";
    headers["access-control-allow-headers"] = "content-type, x-runtime-authorization";
    headers["access-control-allow-methods"] = "POST, OPTIONS";
    headers["vary"] = "Origin";
  }
  return headers;
}

export async function OPTIONS(request: Request) {
  const origin = request.headers.get("origin");
  return new NextResponse(null, { status: 204, headers: corsHeaders(origin) });
}

/**
 * Parent portal calls this with a short-lived signed runtime token.
 * Sets httpOnly session cookie so /projects/** can load inside the renderer iframe.
 */
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const allowed = getParentOrigins();

  if (allowed.length > 0 && origin && !allowed.includes(origin)) {
    return NextResponse.json(
      { ok: false },
      { status: 403, headers: corsHeaders(origin) }
    );
  }

  let body: Body = {};
  try {
    body = (await request.json()) as Body;
  } catch {
    body = {};
  }

  const headerTok = request.headers.get("x-runtime-authorization");
  const bearer = headerTok?.startsWith("Bearer ")
    ? headerTok.slice(7).trim()
    : headerTok?.trim();
  const incoming = body.token || bearer;

  const claims = await verifyRuntimeToken(incoming);
  if (!claims) {
    return NextResponse.json(
      { ok: false },
      { status: 401, headers: corsHeaders(origin) }
    );
  }

  const session = await createRuntimeToken({
    sub: body.sub || claims.sub || "portal-user",
    src: claims.src || origin || "portal",
    ttlSec: 60 * 60 * 8,
  });

  const res = NextResponse.json(
    { ok: true },
    { status: 200, headers: corsHeaders(origin) }
  );

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
