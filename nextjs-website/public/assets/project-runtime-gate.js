/**
 * Injected into every public/projects/** HTML file.
 * These pages are meant to run inside the /projects/:slug iframe viewer (or portal).
 */
(function () {
  var UNAUTHORIZED =
    '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow,noarchive"><title>Unauthorized</title><style>html,body{margin:0;min-height:100%;font-family:system-ui,-apple-system,sans-serif;background:#0c0c0d;color:#f2f2f4}main{min-height:100vh;display:grid;place-items:center;padding:2rem;text-align:center}h1{font-size:1.25rem;font-weight:600;margin:0 0 .75rem}p{margin:.35rem 0;color:#a9a9b2;font-size:.95rem;line-height:1.5;max-width:36ch}</style></head><body><main><div><h1>This application is not publicly accessible.</h1><p>Access is restricted to authorized users only.</p><p>Please access this application through the official portal.</p></div></main></body></html>';

  function deny() {
    try {
      document.open();
      document.write(UNAUTHORIZED);
      document.close();
    } catch (e) {
      location.replace("/api/runtime/denied");
    }
  }

  function sameOriginReferrer() {
    try {
      if (!document.referrer) return false;
      return new URL(document.referrer).origin === location.origin;
    } catch (e) {
      return false;
    }
  }

  var inIframe = false;
  try {
    inIframe = window.top !== window.self;
  } catch (e) {
    inIframe = true;
  }

  // Top-level HTML must not render — viewer URL is /projects/:slug
  if (!inIframe) {
    var parts = location.pathname.split("/").filter(Boolean);
    // /projects/flux/index.html → /projects/flux
    if (parts.length >= 2 && parts[0] === "projects") {
      location.replace("/projects/" + parts[1]);
      return;
    }
    deny();
    return;
  }

  // Inside iframe from our viewer (same origin) — allow
  if (sameOriginReferrer()) {
    return;
  }

  var unlocked = false;
  function unlock() {
    if (unlocked) return;
    unlocked = true;
    document.documentElement.style.visibility = "";
  }

  function checkSession() {
    return fetch("/api/runtime/session", {
      credentials: "include",
      cache: "no-store",
    }).then(function (res) {
      if (!res.ok) throw new Error("unauthorized");
      return res.json();
    });
  }

  document.documentElement.style.visibility = "hidden";

  checkSession()
    .then(unlock)
    .catch(function () {
      var timedOut = false;
      var timer = setTimeout(function () {
        timedOut = true;
        if (!unlocked) deny();
      }, 4000);

      window.addEventListener("message", function onMsg(ev) {
        var data = ev && ev.data;
        if (!data || data.type !== "sa-runtime-handshake" || !data.token) return;
        fetch("/api/runtime/handshake", {
          method: "POST",
          credentials: "include",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ token: data.token, sub: data.sub }),
        })
          .then(function (res) {
            if (!res.ok) throw new Error("handshake failed");
            return checkSession();
          })
          .then(function () {
            if (timedOut) return;
            clearTimeout(timer);
            window.removeEventListener("message", onMsg);
            unlock();
          })
          .catch(function () {
            if (!unlocked) deny();
          });
      });
    });
})();
