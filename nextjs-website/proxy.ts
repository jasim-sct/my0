import { NextResponse } from "next/server";

/**
 * Project routing proxy:
 * Direct standalone access and iframe embedding are allowed without interruption.
 */
export async function proxy() {
  return NextResponse.next();
}

export const config = {
  matcher: ["/projects/:path+"],
};

