import { NextResponse } from "next/server";
import { UNAUTHORIZED_HTML } from "@/lib/runtime-auth";

export const dynamic = "force-dynamic";

export async function GET() {
  return new NextResponse(UNAUTHORIZED_HTML, {
    status: 401,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
      "x-robots-tag": "noindex, nofollow",
    },
  });
}
