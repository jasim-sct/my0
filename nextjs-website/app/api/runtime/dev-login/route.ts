import { NextResponse } from "next/server";
import { RUNTIME_COOKIE, createRuntimeToken } from "@/lib/runtime-auth";

export const dynamic = "force-dynamic";

/** Local development only. Disabled in production. */
export async function POST() {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ ok: false }, { status: 404 });
  }

  const session = await createRuntimeToken({
    sub: "dev",
    src: "dev-login",
    ttlSec: 60 * 60 * 12,
  });

  const res = NextResponse.json({ ok: true });
  res.cookies.set({
    name: RUNTIME_COOKIE,
    value: session,
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12,
  });
  return res;
}
