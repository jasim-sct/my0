/**
 * Runtime session auth for project HTML (portal / renderer gated).
 * HMAC-SHA256 tokens — Edge-compatible via Web Crypto.
 */

export const RUNTIME_COOKIE = "sa_rt_session";
export const RUNTIME_HEADER = "x-runtime-authorization";

export type RuntimeClaims = {
  v: 1;
  iat: number;
  exp: number;
  sub?: string;
  src?: string;
};

function getSecret(): string {
  const secret = process.env.RUNTIME_AUTH_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("RUNTIME_AUTH_SECRET must be set (min 32 chars)");
  }
  return secret;
}

function b64url(data: ArrayBuffer | Uint8Array | string): string {
  const bytes =
    typeof data === "string"
      ? new TextEncoder().encode(data)
      : data instanceof Uint8Array
        ? data
        : new Uint8Array(data);
  let bin = "";
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]!);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function fromB64url(s: string): Uint8Array {
  const pad = s.length % 4 === 0 ? "" : "=".repeat(4 - (s.length % 4));
  const b64 = s.replace(/-/g, "+").replace(/_/g, "/") + pad;
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

async function hmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

async function sign(payloadB64: string, secret: string): Promise<string> {
  const key = await hmacKey(secret);
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payloadB64));
  return b64url(sig);
}

export async function createRuntimeToken(
  claims: Omit<RuntimeClaims, "v" | "iat" | "exp"> & { ttlSec?: number },
  secret = getSecret()
): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const full: RuntimeClaims = {
    v: 1,
    iat: now,
    exp: now + (claims.ttlSec ?? 60 * 60 * 8),
    sub: claims.sub,
    src: claims.src,
  };
  const payloadB64 = b64url(JSON.stringify(full));
  const sig = await sign(payloadB64, secret);
  return `${payloadB64}.${sig}`;
}

export async function verifyRuntimeToken(
  token: string | undefined | null,
  secret?: string
): Promise<RuntimeClaims | null> {
  if (!token || !token.includes(".")) return null;
  let sec: string;
  try {
    sec = secret ?? getSecret();
  } catch {
    return null;
  }
  const [payloadB64, sig] = token.split(".");
  if (!payloadB64 || !sig) return null;
  const expected = await sign(payloadB64, sec);
  if (expected.length !== sig.length) return null;
  let ok = true;
  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== sig[i]) ok = false;
  }
  if (!ok) return null;
  try {
    const json = new TextDecoder().decode(fromB64url(payloadB64));
    const claims = JSON.parse(json) as RuntimeClaims;
    if (claims.v !== 1) return null;
    if (typeof claims.exp !== "number" || claims.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }
    return claims;
  } catch {
    return null;
  }
}

export function isRuntimeAuthBypassed(): boolean {
  return (
    process.env.NODE_ENV === "development" &&
    process.env.RUNTIME_AUTH_BYPASS === "1"
  );
}

export function getParentOrigins(): string[] {
  const raw = process.env.PARENT_ORIGINS || process.env.PARENT_ORIGIN || "";
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export const UNAUTHORIZED_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow,noarchive">
<title>Unauthorized</title>
<style>
  html,body{margin:0;min-height:100%;font-family:system-ui,-apple-system,sans-serif;background:#0c0c0d;color:#f2f2f4}
  main{min-height:100vh;display:grid;place-items:center;padding:2rem;text-align:center}
  h1{font-size:1.25rem;font-weight:600;margin:0 0 .75rem;letter-spacing:-.02em}
  p{margin:.35rem 0;color:#a9a9b2;font-size:.95rem;line-height:1.5;max-width:36ch}
</style>
</head>
<body>
<main>
  <div>
    <h1>This application is not publicly accessible.</h1>
    <p>Access is restricted to authorized users only.</p>
    <p>Please access this application through the official portal.</p>
  </div>
</main>
</body>
</html>`;
