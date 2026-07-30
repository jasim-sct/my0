import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  RUNTIME_COOKIE,
  isRuntimeAuthBypassed,
  verifyRuntimeToken,
} from "@/lib/runtime-auth";

export const dynamic = "force-dynamic";

export async function GET() {
  if (isRuntimeAuthBypassed()) {
    return NextResponse.json({ ok: true, bypass: true });
  }

  const jar = await cookies();
  const token = jar.get(RUNTIME_COOKIE)?.value;
  const claims = await verifyRuntimeToken(token);
  if (!claims) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  return NextResponse.json({
    ok: true,
    exp: claims.exp,
    sub: claims.sub ?? null,
  });
}
