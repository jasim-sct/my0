/**
 * Injected into public/projects/** HTML files.
 * Runtime gating removed — direct standalone access and iframe embedding permitted without interruption.
 */
(function () {
  if (typeof document !== "undefined" && document.documentElement) {
    document.documentElement.style.visibility = "";
  }
})();

