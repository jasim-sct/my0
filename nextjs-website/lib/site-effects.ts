/* Port of source assets/main.js — motion layer for marketing pages.
   Called from SiteEffects client component; React owns mount/unmount. */

type Cleanup = () => void;

export function initSiteEffects(): Cleanup {
  const cleanups: Cleanup[] = [];
  const doc = document;
  const root = doc.documentElement;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;
  const wide = innerWidth > 1024;
  const cores = navigator.hardwareConcurrency || 4;
  const mem = (navigator as Navigator & { deviceMemory?: number }).deviceMemory || 4;
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  const saveData = conn?.saveData;
  const weak = cores <= 4 || mem <= 4 || !!saveData;
  let RICH = !reduce && fine && wide && !weak;
  if (!RICH) root.classList.add("lite");

  const tasks: Array<(ts: number) => void> = [];
  let running = false;
  function schedule() {
    if (running || !tasks.length) return;
    running = true;
    requestAnimationFrame(function (ts) {
      running = false;
      for (let i = 0; i < tasks.length; i++) tasks[i](ts);
      schedule();
    });
  }
  function addTask(fn: (ts: number) => void) {
    tasks.push(fn);
    schedule();
  }

  /* loader — cinematic settle */
  function drop() {
    const c = doc.querySelector(".curtain");
    if (c) c.classList.add("hide");
  }
  if (doc.readyState === "complete") setTimeout(drop, 280);
  else {
    const onLoad = () => setTimeout(drop, 280);
    addEventListener("load", onLoad);
    cleanups.push(() => removeEventListener("load", onLoad));
  }
  const dropTimer = setTimeout(drop, 2600);
  cleanups.push(() => clearTimeout(dropTimer));

  /* scroll chrome — lerped progress for silk feel */
  const nav = doc.querySelector("header.nav");
  const bar = doc.querySelector(".progress") as HTMLElement | null;
  const toTop = doc.querySelector(".top");
  let lastY = -1;
  let docH = 0;
  let ticking = false;
  let progressTarget = 0;
  let progressCurrent = 0;
  function measure() {
    docH = doc.documentElement.scrollHeight - innerHeight;
  }
  measure();
  function applyScroll() {
    ticking = false;
    const y = pageYOffset;
    if (y !== lastY) {
      lastY = y;
      if (nav) nav.classList.toggle("stuck", y > 16);
      if (toTop) toTop.classList.toggle("show", y > 520);
      progressTarget = docH > 0 ? y / docH : 0;
    }
  }
  if (bar && RICH) {
    addTask(() => {
      progressCurrent += (progressTarget - progressCurrent) * 0.12;
      if (Math.abs(progressTarget - progressCurrent) < 0.0004) progressCurrent = progressTarget;
      bar.style.transform = "scaleX(" + progressCurrent + ")";
    });
  } else if (bar) {
    const syncBar = () => {
      bar.style.transform = "scaleX(" + (docH > 0 ? pageYOffset / docH : 0) + ")";
    };
    addEventListener("scroll", syncBar, { passive: true });
    cleanups.push(() => removeEventListener("scroll", syncBar));
  }
  const onScrollChrome = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(applyScroll);
    }
  };
  const onResizeChrome = () => {
    measure();
    applyScroll();
  };
  addEventListener("scroll", onScrollChrome, { passive: true });
  addEventListener("resize", onResizeChrome, { passive: true });
  cleanups.push(() => {
    removeEventListener("scroll", onScrollChrome);
    removeEventListener("resize", onResizeChrome);
  });
  applyScroll();

  /* mobile menu */
  const burger = doc.querySelector(".burger");
  const menu = doc.querySelector(".menu");
  if (burger && menu) {
    const onBurger = () => {
      const open = menu.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
      doc.body.style.overflow = open ? "hidden" : "";
    };
    const onMenuClick = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest("a")) {
        burger.classList.remove("open");
        menu.classList.remove("open");
        doc.body.style.overflow = "";
      }
    };
    burger.addEventListener("click", onBurger);
    menu.addEventListener("click", onMenuClick);
    cleanups.push(() => {
      burger.removeEventListener("click", onBurger);
      menu.removeEventListener("click", onMenuClick);
      doc.body.style.overflow = "";
    });
  }

  /* kinetic headline split */
  function measureLines(el: HTMLElement): string[] | null {
    const text = el.textContent;
    if (!text || text.length > 220) return null;
    const words = text.split(/\s+/).filter(Boolean);
    if (words.length < 2) return null;
    const probe = doc.createElement("span");
    probe.style.cssText = "display:inline";
    probe.innerHTML = words.map((w) => '<b style="font-weight:inherit">' + w + "</b>").join(" ");
    const keep = el.innerHTML;
    el.innerHTML = "";
    el.appendChild(probe);
    const bs = probe.querySelectorAll("b");
    const lines: string[] = [];
    let cur: string[] = [];
    let top: number | null = null;
    for (let i = 0; i < bs.length; i++) {
      const t = Math.round(bs[i].getBoundingClientRect().top);
      if (top === null) top = t;
      if (Math.abs(t - top) > 4) {
        lines.push(cur.join(" "));
        cur = [];
        top = t;
      }
      cur.push(bs[i].textContent || "");
    }
    if (cur.length) lines.push(cur.join(" "));
    el.innerHTML = keep;
    return lines.length > 1 ? lines : null;
  }

  function splitLines(el: HTMLElement) {
    if (el.dataset.split) return;
    if (el.querySelector("div,p,ul,img,svg")) return;
    const html = el.innerHTML;
    let parts: string[] | null;
    if (/<br\s*\/?>/i.test(html)) {
      parts = html.split(/<br\s*\/?>/i);
    } else {
      parts = measureLines(el);
      if (!parts) return;
    }
    if (parts.length > 6) return;
    el.dataset.split = "1";
    el.innerHTML = parts
      .map((p) => '<span class="kin"><i>' + p.trim() + "</i></span>")
      .join("");
  }

  const revealables = Array.from(
    doc.querySelectorAll<HTMLElement>("[data-anim],.rv,.rule-draw,.kin-h")
  );

  function doSplits() {
    const hs = doc.querySelectorAll<HTMLElement>(".kin-h");
    for (let i = 0; i < hs.length; i++) splitLines(hs[i]);
  }
  if (doc.fonts?.ready) {
    doc.fonts.ready.then(doSplits);
  } else {
    doSplits();
  }

  let io: IntersectionObserver | null = null;
  if ("IntersectionObserver" in window) {
    io = new IntersectionObserver(
      (en) => {
        for (let i = 0; i < en.length; i++) {
          const e = en[i];
          if (!e.isIntersecting) continue;
          const d = +(e.target.getAttribute("data-delay") || 0);
          if (d) {
            const t = e.target;
            setTimeout(() => t.classList.add("in"), d);
          } else e.target.classList.add("in");
          io?.unobserve(e.target);
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -60px 0px" }
    );
    for (let i = 0; i < revealables.length; i++) io.observe(revealables[i]);
    cleanups.push(() => io?.disconnect());
  } else {
    for (let j = 0; j < revealables.length; j++) revealables[j].classList.add("in");
  }

  const heroTimer = setTimeout(() => {
    const h = doc.querySelectorAll(".hero .kin-h,.phero .kin-h,.hero [data-anim],.phero [data-anim]");
    for (let i = 0; i < h.length; i++) h[i].classList.add("in");
  }, 60);
  cleanups.push(() => clearTimeout(heroTimer));

  /* manifesto word-lighting */
  (function () {
    const blocks = doc.querySelectorAll<HTMLElement>(".manifesto");
    if (!blocks.length) return;
    const sets: Array<{
      el: HTMLElement;
      words: NodeListOf<Element>;
      lit: number;
      top: number;
      h: number;
    }> = [];
    for (let b = 0; b < blocks.length; b++) {
      const el = blocks[b];
      if (!el.querySelector("w")) {
        el.innerHTML = (el.textContent || "")
          .split(/\s+/)
          .filter(Boolean)
          .map((w) => "<w>" + w + "</w>")
          .join(" ");
      }
      sets.push({ el, words: el.querySelectorAll("w"), lit: -1, top: 0, h: 0 });
    }
    function remeasure() {
      for (let i = 0; i < sets.length; i++) {
        const r = sets[i].el.getBoundingClientRect();
        sets[i].top = r.top + pageYOffset;
        sets[i].h = r.height;
      }
    }
    remeasure();
    addEventListener("resize", remeasure, { passive: true });
    cleanups.push(() => removeEventListener("resize", remeasure));
    if (doc.fonts?.ready) doc.fonts.ready.then(remeasure);

    let pending = false;
    function run() {
      pending = false;
      const vh = innerHeight;
      const y = pageYOffset;
      for (let i = 0; i < sets.length; i++) {
        const s = sets[i];
        const start = s.top - vh * 0.78;
        const end = s.top + s.h - vh * 0.32;
        let p = (y - start) / Math.max(1, end - start);
        p = p < 0 ? 0 : p > 1 ? 1 : p;
        const n = Math.round(p * s.words.length);
        if (n === s.lit) continue;
        if (n > s.lit)
          for (let k = s.lit < 0 ? 0 : s.lit; k < n; k++) s.words[k].classList.add("lit");
        else for (let m = s.lit - 1; m >= n; m--) if (s.words[m]) s.words[m].classList.remove("lit");
        s.lit = n;
      }
    }
    const onScroll = () => {
      if (!pending) {
        pending = true;
        requestAnimationFrame(run);
      }
    };
    addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => removeEventListener("scroll", onScroll));
    run();
  })();

  /* horizontal scroll */
  (function () {
    const secs = doc.querySelectorAll<HTMLElement>(".hscroll");
    if (!secs.length) return;
    if (!RICH || innerWidth < 1100) return;
    const list: Array<{
      sec: HTMLElement;
      scroller: HTMLElement;
      track: HTMLElement;
      top: number;
      h: number;
      dist: number;
      last: string;
    }> = [];
    for (let i = 0; i < secs.length; i++) {
      const sec = secs[i];
      const scroller = sec.querySelector<HTMLElement>(".hscroll-scroller");
      const track = sec.querySelector<HTMLElement>(".hscroll-track");
      if (!scroller || !track) continue;
      sec.classList.add("jack");
      list.push({ sec, scroller, track, top: 0, h: 0, dist: 0, last: "" });
    }
    if (!list.length) return;

    function remeasure() {
      for (let i = 0; i < list.length; i++) {
        const o = list[i];
        o.sec.style.height = "";
        const dist = o.track.scrollWidth - o.scroller.clientWidth;
        o.dist = dist > 0 ? dist : 0;
        if (o.dist) o.sec.style.height = o.sec.offsetHeight + o.dist + "px";
        const r = o.sec.getBoundingClientRect();
        o.top = r.top + pageYOffset;
        o.h = o.sec.offsetHeight;
      }
    }
    remeasure();
    addEventListener("resize", remeasure, { passive: true });
    addEventListener("load", remeasure);
    cleanups.push(() => {
      removeEventListener("resize", remeasure);
      removeEventListener("load", remeasure);
    });
    if (doc.fonts?.ready) doc.fonts.ready.then(remeasure);

    let pending = false;
    function run() {
      pending = false;
      const y = pageYOffset;
      for (let i = 0; i < list.length; i++) {
        const o = list[i];
        if (!o.dist) continue;
        let p = (y - o.top) / Math.max(1, o.h - innerHeight);
        p = p < 0 ? 0 : p > 1 ? 1 : p;
        const tx = "translate3d(" + (-p * o.dist).toFixed(1) + "px,0,0)";
        if (tx !== o.last) {
          o.track.style.transform = tx;
          o.last = tx;
        }
      }
    }
    const onScroll = () => {
      if (!pending) {
        pending = true;
        requestAnimationFrame(run);
      }
    };
    addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => removeEventListener("scroll", onScroll));
    run();
  })();

  /* parallax */
  (function () {
    if (!RICH) return;
    const els = doc.querySelectorAll<HTMLElement>("[data-para]");
    if (!els.length) return;
    const items = Array.from(els).map((el) => ({
      el,
      amt: +(el.getAttribute("data-para") || 12),
      top: 0,
      h: 0,
      last: "",
    }));
    function remeasure() {
      for (let i = 0; i < items.length; i++) {
        const r = items[i].el.getBoundingClientRect();
        items[i].top = r.top + pageYOffset;
        items[i].h = r.height;
      }
    }
    remeasure();
    addEventListener("resize", remeasure, { passive: true });
    cleanups.push(() => removeEventListener("resize", remeasure));
    let pending = false;
    function run() {
      pending = false;
      const y = pageYOffset;
      const vh = innerHeight;
      for (let i = 0; i < items.length; i++) {
        const o = items[i];
        if (o.top + o.h < y - 200 || o.top > y + vh + 200) continue;
        const p = (y + vh - o.top) / (vh + o.h);
        const tx = "translate3d(0," + ((p - 0.5) * o.amt * 2).toFixed(1) + "px,0)";
        if (tx !== o.last) {
          o.el.style.transform = tx;
          o.last = tx;
        }
      }
    }
    const onScroll = () => {
      if (!pending) {
        pending = true;
        requestAnimationFrame(run);
      }
    };
    addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => removeEventListener("scroll", onScroll));
    run();
  })();

  /* cursor + magnetic */
  if (RICH) {
    const ring = doc.createElement("div");
    ring.className = "cur";
    const dot = doc.createElement("div");
    dot.className = "cur-dot";
    doc.body.appendChild(ring);
    doc.body.appendChild(dot);
    cleanups.push(() => {
      ring.remove();
      dot.remove();
    });

    let mx = innerWidth / 2;
    let my = innerHeight / 2;
    let rx = mx;
    let ry = my;
    let dotT = "";
    let ringT = "";
    let hoverBtn: HTMLElement | null = null;
    let btnRect: DOMRect | null = null;
    let btnTx = "";

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (hoverBtn && btnRect) {
        btnTx =
          "translate3d(" +
          ((mx - btnRect.left - btnRect.width / 2) * 0.22).toFixed(1) +
          "px," +
          ((my - btnRect.top - btnRect.height / 2) * 0.32).toFixed(1) +
          "px,0)";
      }
      schedule();
    };
    doc.addEventListener("mousemove", onMove, { passive: true });
    cleanups.push(() => doc.removeEventListener("mousemove", onMove));

    addTask(() => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      const nd = "translate3d(" + (mx - 2.5) + "px," + (my - 2.5) + "px,0)";
      const nr = "translate3d(" + (rx - 19).toFixed(1) + "px," + (ry - 19).toFixed(1) + "px,0)";
      if (nd !== dotT) {
        dot.style.transform = nd;
        dotT = nd;
      }
      if (nr !== ringT) {
        ring.style.transform = nr;
        ringT = nr;
      }
      if (hoverBtn && btnTx) hoverBtn.style.transform = btnTx;
    });

    const onOver = (e: Event) => {
      const t = e.target as HTMLElement;
      if (!t.closest) return;
      const b = t.closest(".btn") as HTMLElement | null;
      if (b && b !== hoverBtn) {
        hoverBtn = b;
        btnRect = b.getBoundingClientRect();
      }
      if (t.closest(".demo-tile,.proj-shot,.art-card,.rv.zoom")) ring.className = "cur media";
      else if (t.closest("a,button,summary,input,select,textarea")) ring.className = "cur grow";
    };
    const onOut = (e: MouseEvent) => {
      if (hoverBtn && !hoverBtn.contains(e.relatedTarget as Node)) {
        hoverBtn.style.transform = "";
        hoverBtn = null;
        btnRect = null;
        btnTx = "";
      }
      const rt = e.relatedTarget as HTMLElement | null;
      if (
        !rt ||
        !rt.closest ||
        !rt.closest("a,button,summary,input,select,textarea,.demo-tile,.proj-shot,.art-card")
      ) {
        ring.className = "cur";
      }
    };
    doc.addEventListener("mouseover", onOver, { passive: true });
    doc.addEventListener("mouseout", onOut, { passive: true });
    cleanups.push(() => {
      doc.removeEventListener("mouseover", onOver);
      doc.removeEventListener("mouseout", onOut);
    });

    const onScrollBtn = () => {
      if (hoverBtn) btnRect = hoverBtn.getBoundingClientRect();
    };
    addEventListener("scroll", onScrollBtn, { passive: true });
    cleanups.push(() => removeEventListener("scroll", onScrollBtn));
  }

  /* counters */
  (function () {
    const counters = doc.querySelectorAll("[data-count]");
    if (!counters.length || !("IntersectionObserver" in window)) return;
    const co = new IntersectionObserver(
      (en) => {
        for (let i = 0; i < en.length; i++) {
          if (!en[i].isIntersecting) continue;
          const el = en[i].target as HTMLElement;
          const t = parseFloat(el.getAttribute("data-count") || "0");
          const sfx = el.getAttribute("data-suffix") || "";
          const pfx = el.getAttribute("data-prefix") || "";
          let t0 = 0;
          function tick(ts: number) {
            if (!t0) t0 = ts;
            const p = Math.min((ts - t0) / 1800, 1);
            const v = t * (1 - Math.pow(1 - p, 3));
            el.textContent =
              pfx + (t % 1 ? v.toFixed(1) : Math.round(v).toLocaleString()) + sfx;
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          co.unobserve(el);
        }
      },
      { threshold: 0.35 }
    );
    for (let k = 0; k < counters.length; k++) co.observe(counters[k]);
    cleanups.push(() => co.disconnect());
  })();

  /* pricing tabs */
  (function () {
    const tabs = doc.querySelector(".tier-tabs");
    if (!tabs) return;
    const pill = tabs.querySelector<HTMLElement>(".tier-pill");
    const btns = tabs.querySelectorAll<HTMLElement>("button");
    let base = btns[0] ? btns[0].offsetLeft : 0;
    function movePill(b: HTMLElement) {
      if (!pill) return;
      pill.style.width = b.offsetWidth + "px";
      pill.style.left = base + "px";
      pill.style.transform = "translate3d(" + (b.offsetLeft - base) + "px,0,0)";
    }
    const onClick = (e: Event) => {
      const b = (e.target as HTMLElement).closest("button");
      if (!b || !tabs.contains(b)) return;
      for (let i = 0; i < btns.length; i++) btns[i].classList.remove("on");
      b.classList.add("on");
      movePill(b);
      const id = b.getAttribute("data-pane");
      const panes = doc.querySelectorAll(".pane");
      for (let j = 0; j < panes.length; j++) panes[j].classList.toggle("on", panes[j].id === id);
    };
    tabs.addEventListener("click", onClick);
    cleanups.push(() => tabs.removeEventListener("click", onClick));
    const act = tabs.querySelector<HTMLElement>("button.on") || btns[0];
    if (act) {
      act.classList.add("on");
      setTimeout(() => movePill(act), 60);
    }
    const onResize = () => {
      base = btns[0] ? btns[0].offsetLeft : 0;
      const a = tabs.querySelector<HTMLElement>("button.on");
      if (a) movePill(a);
    };
    addEventListener("resize", onResize, { passive: true });
    cleanups.push(() => removeEventListener("resize", onResize));
  })();

  /* drag rails */
  (function () {
    const rails = doc.querySelectorAll<HTMLElement>(".rail");
    for (let r = 0; r < rails.length; r++) {
      const rail = rails[r];
      let down = false;
      let sx = 0;
      let sl = 0;
      rail.style.cursor = "grab";
      const onDown = (e: MouseEvent) => {
        down = true;
        sx = e.pageX;
        sl = rail.scrollLeft;
        rail.style.cursor = "grabbing";
      };
      const stop = () => {
        down = false;
        rail.style.cursor = "grab";
      };
      const onMove = (e: MouseEvent) => {
        if (!down) return;
        e.preventDefault();
        rail.scrollLeft = sl - (e.pageX - sx) * 1.3;
      };
      rail.addEventListener("mousedown", onDown);
      rail.addEventListener("mouseup", stop);
      rail.addEventListener("mouseleave", stop);
      rail.addEventListener("mousemove", onMove);
      cleanups.push(() => {
        rail.removeEventListener("mousedown", onDown);
        rail.removeEventListener("mouseup", stop);
        rail.removeEventListener("mouseleave", stop);
        rail.removeEventListener("mousemove", onMove);
      });
    }
  })();

  /* mega menu */
  (function () {
    const wrap = doc.querySelector(".has-mega");
    if (!wrap) return;
    const btn = wrap.querySelector(".mega-btn");
    if (!btn) return;
    const onBtn = (e: Event) => {
      e.stopPropagation();
      const open = wrap.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    };
    const onDoc = (e: Event) => {
      if (!wrap.contains(e.target as Node)) {
        wrap.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        wrap.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    };
    btn.addEventListener("click", onBtn);
    doc.addEventListener("click", onDoc);
    doc.addEventListener("keydown", onKey);
    cleanups.push(() => {
      btn.removeEventListener("click", onBtn);
      doc.removeEventListener("click", onDoc);
      doc.removeEventListener("keydown", onKey);
    });
    if (matchMedia("(hover:hover) and (min-width:1081px)").matches) {
      let t: ReturnType<typeof setTimeout>;
      const enter = () => {
        clearTimeout(t);
        wrap.classList.add("open");
      };
      const leave = () => {
        t = setTimeout(() => wrap.classList.remove("open"), 180);
      };
      wrap.addEventListener("mouseenter", enter);
      wrap.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        wrap.removeEventListener("mouseenter", enter);
        wrap.removeEventListener("mouseleave", leave);
      });
    }
  })();

  /* contact form */
  (function () {
    const form = doc.getElementById("quoteForm") as HTMLFormElement | null;
    if (!form) return;
    const onSubmit = (e: Event) => {
      let ok = true;
      const req = form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
        "[required]"
      );
      for (let i = 0; i < req.length; i++) {
        const el = req[i];
        let bad = !el.value.trim();
        if (el instanceof HTMLInputElement && el.type === "email")
          bad = !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value);
        const fld = el.closest(".field");
        if (fld) fld.classList.toggle("err", bad);
        if (bad) ok = false;
      }
      if (!ok) {
        e.preventDefault();
        e.stopImmediatePropagation();
        const first = form.querySelector<HTMLElement>(
          ".field.err input,.field.err select,.field.err textarea"
        );
        if (first) first.focus();
        return;
      }
      if (!form.getAttribute("action")) {
        e.preventDefault();
        const d = new FormData(form);
        const body: string[] = [];
        d.forEach((v, k) => body.push(k.toUpperCase() + ": " + v));
        location.href =
          "mailto:" +
          (form.dataset.email || "hello@screenarts.com") +
          "?subject=" +
          encodeURIComponent("Project enquiry — " + (d.get("service") || "General")) +
          "&body=" +
          encodeURIComponent(body.join("\n"));
        const m = doc.getElementById("formMsg");
        if (m) m.style.display = "block";
      }
    };
    form.addEventListener("submit", onSubmit, true);
    cleanups.push(() => form.removeEventListener("submit", onSubmit, true));
  })();

  /* image ready */
  (function () {
    const imgs = doc.querySelectorAll<HTMLImageElement>("img.ph");
    for (let i = 0; i < imgs.length; i++) {
      const im = imgs[i];
      if (im.complete && im.naturalWidth) {
        im.classList.add("ready");
        continue;
      }
      const onReady = () => im.classList.add("ready");
      im.addEventListener("load", onReady, { once: true });
      im.addEventListener("error", onReady, { once: true });
    }
  })();

  const yr = doc.querySelectorAll("[data-year]");
  const n = new Date().getFullYear();
  for (let y = 0; y < yr.length; y++) yr[y].textContent = String(n);

  /* FPS watchdog */
  if (RICH) {
    let frames = 0;
    let w0 = performance.now();
    let checks = 0;
    let alive = true;
    cleanups.push(() => {
      alive = false;
    });
    (function fps(now: number) {
      if (!alive) return;
      frames++;
      if (now - w0 >= 1000) {
        if (frames < 40) {
          root.classList.add("lite");
          tasks.length = 0;
          const c = doc.querySelector(".cur");
          const d2 = doc.querySelector(".cur-dot");
          if (c) c.remove();
          if (d2) d2.remove();
          RICH = false;
          return;
        }
        frames = 0;
        w0 = now;
        if (++checks >= 4) return;
      }
      requestAnimationFrame(fps);
    })(performance.now());
  }

  return () => {
    for (let i = cleanups.length - 1; i >= 0; i--) cleanups[i]();
    tasks.length = 0;
  };
}
