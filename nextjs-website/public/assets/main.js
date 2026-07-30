/* Premium Freelancing Agency — motion layer v4 (editorial)
   Reference language: WPP kinetic line-masks + Accenture Song scroll-telling.
   Rules: one shared rAF, only transform/opacity animated, no layout reads in
   move handlers, everything degrades cleanly on weak hardware. */
(function () {
  'use strict';

  var doc = document, root = doc.documentElement;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  var wide = innerWidth > 1024;
  var cores = navigator.hardwareConcurrency || 4;
  var mem = navigator.deviceMemory || 4;
  var saveData = navigator.connection && navigator.connection.saveData;
  var weak = cores <= 4 || mem <= 4 || saveData;
  var RICH = !reduce && fine && wide && !weak;
  if (!RICH) root.classList.add('lite');

  /* ============================ shared rAF ============================ */
  var tasks = [], running = false;
  function schedule() {
    if (running || !tasks.length) return;
    running = true;
    requestAnimationFrame(function (ts) {
      running = false;
      for (var i = 0; i < tasks.length; i++) tasks[i](ts);
      schedule();
    });
  }
  function addTask(fn) { tasks.push(fn); schedule(); }

  /* ============================ loader ============================ */
  function drop() { var c = doc.querySelector('.curtain'); if (c) c.classList.add('hide'); }
  if (doc.readyState === 'complete') setTimeout(drop, 160);
  else addEventListener('load', function () { setTimeout(drop, 160); });
  setTimeout(drop, 2200);

  /* ============================ scroll chrome ============================ */
  var nav = doc.querySelector('header.nav');
  var bar = doc.querySelector('.progress');
  var toTop = doc.querySelector('.top');
  var lastY = -1, docH = 0, ticking = false;
  function measure() { docH = doc.documentElement.scrollHeight - innerHeight; }
  measure();
  function applyScroll() {
    ticking = false;
    var y = pageYOffset;
    if (y === lastY) return;
    lastY = y;
    if (nav) nav.classList.toggle('stuck', y > 16);
    if (toTop) toTop.classList.toggle('show', y > 520);
    if (bar) bar.style.transform = 'scaleX(' + (docH > 0 ? y / docH : 0) + ')';
  }
  addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(applyScroll); }
  }, { passive: true });
  addEventListener('resize', function () { measure(); applyScroll(); }, { passive: true });
  applyScroll();

  /* ============================ mobile menu ============================ */
  var burger = doc.querySelector('.burger'), menu = doc.querySelector('.menu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open);
      doc.body.style.overflow = open ? 'hidden' : '';
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        burger.classList.remove('open'); menu.classList.remove('open');
        doc.body.style.overflow = '';
      }
    });
  }

  /* ============================ kinetic headline split ============================
     Wrap each visual LINE of a heading in a mask so it can slide up — the WPP
     signature. Critically we keep ONE copy in the DOM (WPP renders three, which
     poisons what Google reads). We measure line boxes with Range rects, then
     rebuild using text nodes only. */
  function splitLines(el) {
    if (el.dataset.split) return;
    // only split plain-ish headings: bail if there are block children
    if (el.querySelector('div,p,ul,img,svg')) return;
    var html = el.innerHTML;
    // <br> defines explicit lines; otherwise measure
    var parts;
    if (/<br\s*\/?>/i.test(html)) {
      parts = html.split(/<br\s*\/?>/i);
    } else {
      parts = measureLines(el);
      if (!parts) return;
    }
    if (parts.length > 6) return;
    el.dataset.split = '1';
    el.innerHTML = parts.map(function (p) {
      return '<span class="kin"><i>' + p.trim() + '</i></span>';
    }).join('');
  }

  function measureLines(el) {
    var text = el.textContent;
    if (!text || text.length > 220) return null;
    var words = text.split(/\s+/).filter(Boolean);
    if (words.length < 2) return null;
    // rebuild with per-word spans to find line breaks
    var probe = doc.createElement('span');
    probe.style.cssText = 'display:inline';
    probe.innerHTML = words.map(function (w) { return '<b style="font-weight:inherit">' + w + '</b>'; }).join(' ');
    var keep = el.innerHTML;
    el.innerHTML = '';
    el.appendChild(probe);
    var bs = probe.querySelectorAll('b'), lines = [], cur = [], top = null;
    for (var i = 0; i < bs.length; i++) {
      var t = Math.round(bs[i].getBoundingClientRect().top);
      if (top === null) top = t;
      if (Math.abs(t - top) > 4) { lines.push(cur.join(' ')); cur = []; top = t; }
      cur.push(bs[i].textContent);
    }
    if (cur.length) lines.push(cur.join(' '));
    el.innerHTML = keep;
    return lines.length > 1 ? lines : null;
  }

  /* ============================ reveal observer ============================ */
  var revealables = [];
  function collect() {
    revealables = [].slice.call(doc.querySelectorAll('[data-anim],.rv,.rule-draw,.kin-h'));
  }
  collect();

  // split kinetic headings before observing (batched, after fonts settle)
  function doSplits() {
    var hs = doc.querySelectorAll('.kin-h');
    for (var i = 0; i < hs.length; i++) splitLines(hs[i]);
  }
  if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(doSplits); else doSplits();

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (en) {
      for (var i = 0; i < en.length; i++) {
        var e = en[i];
        if (!e.isIntersecting) continue;
        var d = +(e.target.getAttribute('data-delay') || 0);
        if (d) {
          (function (t, ms) { setTimeout(function () { t.classList.add('in'); }, ms); })(e.target, d);
        } else e.target.classList.add('in');
        io.unobserve(e.target);
      }
    }, { threshold: 0.06, rootMargin: '0px 0px -60px 0px' });
    for (var i = 0; i < revealables.length; i++) io.observe(revealables[i]);
  } else {
    for (var j = 0; j < revealables.length; j++) revealables[j].classList.add('in');
  }

  /* above-the-fold headings fire immediately, no scroll needed */
  setTimeout(function () {
    var h = doc.querySelectorAll('.hero .kin-h,.phero .kin-h,.hero [data-anim],.phero [data-anim]');
    for (var i = 0; i < h.length; i++) h[i].classList.add('in');
  }, 60);

  /* ============================ manifesto word-lighting ============================
     Words illuminate as the block crosses the viewport — Accenture Song's
     scroll-telling, done with a single scroll listener and no per-word rects. */
  (function () {
    var blocks = doc.querySelectorAll('.manifesto');
    if (!blocks.length) return;
    var sets = [];
    for (var b = 0; b < blocks.length; b++) {
      var el = blocks[b];
      if (!el.querySelector('w')) {
        el.innerHTML = el.textContent.split(/\s+/).filter(Boolean)
          .map(function (w) { return '<w>' + w + '</w>'; }).join(' ');
      }
      sets.push({ el: el, words: el.querySelectorAll('w'), lit: -1, top: 0, h: 0 });
    }
    function remeasure() {
      for (var i = 0; i < sets.length; i++) {
        var r = sets[i].el.getBoundingClientRect();
        sets[i].top = r.top + pageYOffset;
        sets[i].h = r.height;
      }
    }
    remeasure();
    addEventListener('resize', remeasure, { passive: true });
    if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(remeasure);

    var pending = false;
    function run() {
      pending = false;
      var vh = innerHeight, y = pageYOffset;
      for (var i = 0; i < sets.length; i++) {
        var s = sets[i];
        // 0 when block top hits 78% of viewport, 1 when block bottom hits 32%
        var start = s.top - vh * 0.78;
        var end = s.top + s.h - vh * 0.32;
        var p = (y - start) / Math.max(1, end - start);
        p = p < 0 ? 0 : p > 1 ? 1 : p;
        var n = Math.round(p * s.words.length);
        if (n === s.lit) continue;
        if (n > s.lit) for (var k = s.lit < 0 ? 0 : s.lit; k < n; k++) s.words[k].classList.add('lit');
        else for (var m = s.lit - 1; m >= n; m--) if (s.words[m]) s.words[m].classList.remove('lit');
        s.lit = n;
      }
    }
    addEventListener('scroll', function () {
      if (!pending) { pending = true; requestAnimationFrame(run); }
    }, { passive: true });
    run();
  })();

  /* ============================ horizontal scroll section ============================
     Pinned panel that scrolls sideways as you scroll down. Only engaged on capable
     desktop hardware — otherwise the section stays a native swipe rail so every
     panel is always reachable. */
  (function () {
    var secs = doc.querySelectorAll('.hscroll');
    if (!secs.length) return;
    if (!RICH || innerWidth < 1100) return;   // native scroll fallback stays in place
    var list = [];
    for (var i = 0; i < secs.length; i++) {
      var sec = secs[i];
      var scroller = sec.querySelector('.hscroll-scroller');
      var track = sec.querySelector('.hscroll-track');
      if (!scroller || !track) continue;
      sec.classList.add('jack');
      list.push({ sec: sec, scroller: scroller, track: track, top: 0, h: 0, dist: 0, last: '' });
    }
    if (!list.length) return;

    function remeasure() {
      for (var i = 0; i < list.length; i++) {
        var o = list[i];
        o.sec.style.height = '';
        var dist = o.track.scrollWidth - o.scroller.clientWidth;
        o.dist = dist > 0 ? dist : 0;
        if (o.dist) o.sec.style.height = (o.sec.offsetHeight + o.dist) + 'px';
        var r = o.sec.getBoundingClientRect();
        o.top = r.top + pageYOffset;
        o.h = o.sec.offsetHeight;
      }
    }
    remeasure();
    addEventListener('resize', remeasure, { passive: true });
    if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(remeasure);
    addEventListener('load', remeasure);

    var pending = false;
    function run() {
      pending = false;
      var y = pageYOffset;
      for (var i = 0; i < list.length; i++) {
        var o = list[i];
        if (!o.dist) continue;
        var p = (y - o.top) / Math.max(1, o.h - innerHeight);
        p = p < 0 ? 0 : p > 1 ? 1 : p;
        var tx = 'translate3d(' + (-p * o.dist).toFixed(1) + 'px,0,0)';
        if (tx !== o.last) { o.track.style.transform = tx; o.last = tx; }
      }
    }
    addEventListener('scroll', function () {
      if (!pending) { pending = true; requestAnimationFrame(run); }
    }, { passive: true });
    run();
  })();

  /* ============================ parallax media ============================
     Gentle drift on tagged images. Transform only, batched. */
  (function () {
    if (!RICH) return;
    var els = doc.querySelectorAll('[data-para]');
    if (!els.length) return;
    var items = [];
    for (var i = 0; i < els.length; i++) items.push({ el: els[i], amt: +(els[i].getAttribute('data-para') || 12), top: 0, h: 0, last: '' });
    function remeasure() {
      for (var i = 0; i < items.length; i++) {
        var r = items[i].el.getBoundingClientRect();
        items[i].top = r.top + pageYOffset; items[i].h = r.height;
      }
    }
    remeasure();
    addEventListener('resize', remeasure, { passive: true });
    var pending = false;
    function run() {
      pending = false;
      var y = pageYOffset, vh = innerHeight;
      for (var i = 0; i < items.length; i++) {
        var o = items[i];
        if (o.top + o.h < y - 200 || o.top > y + vh + 200) continue;
        var p = (y + vh - o.top) / (vh + o.h); // 0..1
        var tx = 'translate3d(0,' + ((p - .5) * o.amt * 2).toFixed(1) + 'px,0)';
        if (tx !== o.last) { o.el.style.transform = tx; o.last = tx; }
      }
    }
    addEventListener('scroll', function () {
      if (!pending) { pending = true; requestAnimationFrame(run); }
    }, { passive: true });
    run();
  })();

  /* ============================ cursor + magnetic ============================
     No 3D card tilt any more — editorial sites don't wobble. Kept: a cursor
     that reacts to context, and magnetic buttons. */
  if (RICH) {
    var ring = doc.createElement('div'); ring.className = 'cur';
    var dot = doc.createElement('div'); dot.className = 'cur-dot';
    doc.body.appendChild(ring); doc.body.appendChild(dot);

    var mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
    var dotT = '', ringT = '';
    var hoverBtn = null, btnRect = null, btnTx = '';

    doc.addEventListener('mousemove', function (e) {
      mx = e.clientX; my = e.clientY;
      if (hoverBtn && btnRect) {
        btnTx = 'translate3d(' + ((mx - btnRect.left - btnRect.width / 2) * .18).toFixed(1) +
                'px,' + ((my - btnRect.top - btnRect.height / 2) * .26).toFixed(1) + 'px,0)';
      }
      schedule();
    }, { passive: true });

    addTask(function () {
      rx += (mx - rx) * .18; ry += (my - ry) * .18;
      var nd = 'translate3d(' + (mx - 2.5) + 'px,' + (my - 2.5) + 'px,0)';
      var nr = 'translate3d(' + (rx - 19).toFixed(1) + 'px,' + (ry - 19).toFixed(1) + 'px,0)';
      if (nd !== dotT) { dot.style.transform = nd; dotT = nd; }
      if (nr !== ringT) { ring.style.transform = nr; ringT = nr; }
      if (hoverBtn && btnTx) hoverBtn.style.transform = btnTx;
    });

    doc.addEventListener('mouseover', function (e) {
      var t = e.target;
      if (!t.closest) return;
      var b = t.closest('.btn');
      if (b && b !== hoverBtn) { hoverBtn = b; btnRect = b.getBoundingClientRect(); }
      if (t.closest('.demo-tile,.proj-shot,.art-card,.rv.zoom')) ring.className = 'cur media';
      else if (t.closest('a,button,summary,input,select,textarea')) ring.className = 'cur grow';
    }, { passive: true });

    doc.addEventListener('mouseout', function (e) {
      if (hoverBtn && !hoverBtn.contains(e.relatedTarget)) {
        hoverBtn.style.transform = ''; hoverBtn = null; btnRect = null; btnTx = '';
      }
      var rt = e.relatedTarget;
      if (!rt || !rt.closest || !rt.closest('a,button,summary,input,select,textarea,.demo-tile,.proj-shot,.art-card')) {
        ring.className = 'cur';
      }
    }, { passive: true });

    addEventListener('scroll', function () {
      if (hoverBtn) btnRect = hoverBtn.getBoundingClientRect();
    }, { passive: true });
  }

  /* ============================ counters ============================ */
  (function () {
    var counters = doc.querySelectorAll('[data-count]');
    if (!counters.length || !('IntersectionObserver' in window)) return;
    var co = new IntersectionObserver(function (en) {
      for (var i = 0; i < en.length; i++) {
        if (!en[i].isIntersecting) continue;
        (function (el) {
          var t = parseFloat(el.getAttribute('data-count'));
          var sfx = el.getAttribute('data-suffix') || '';
          var pfx = el.getAttribute('data-prefix') || '';
          var t0 = 0;
          function tick(ts) {
            if (!t0) t0 = ts;
            var p = Math.min((ts - t0) / 1400, 1);
            var v = t * (1 - Math.pow(1 - p, 3));
            el.textContent = pfx + (t % 1 ? v.toFixed(1) : Math.round(v).toLocaleString()) + sfx;
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        })(en[i].target);
        co.unobserve(en[i].target);
      }
    }, { threshold: .35 });
    for (var k = 0; k < counters.length; k++) co.observe(counters[k]);
  })();

  /* ============================ pricing tabs ============================ */
  (function () {
    var tabs = doc.querySelector('.tier-tabs');
    if (!tabs) return;
    var pill = tabs.querySelector('.tier-pill');
    var btns = tabs.querySelectorAll('button');
    var base = btns[0] ? btns[0].offsetLeft : 0;
    function movePill(b) {
      if (!pill) return;
      pill.style.width = b.offsetWidth + 'px';
      pill.style.left = base + 'px';
      pill.style.transform = 'translate3d(' + (b.offsetLeft - base) + 'px,0,0)';
    }
    tabs.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b) return;
      for (var i = 0; i < btns.length; i++) btns[i].classList.remove('on');
      b.classList.add('on'); movePill(b);
      var id = b.getAttribute('data-pane');
      var panes = doc.querySelectorAll('.pane');
      for (var j = 0; j < panes.length; j++) panes[j].classList.toggle('on', panes[j].id === id);
    });
    var act = tabs.querySelector('button.on') || btns[0];
    if (act) { act.classList.add('on'); setTimeout(function () { movePill(act); }, 60); }
    addEventListener('resize', function () {
      base = btns[0] ? btns[0].offsetLeft : 0;
      var a = tabs.querySelector('button.on'); if (a) movePill(a);
    }, { passive: true });
  })();

  /* ============================ drag rails ============================ */
  (function () {
    var rails = doc.querySelectorAll('.rail');
    for (var r = 0; r < rails.length; r++) {
      (function (rail) {
        var down = false, sx = 0, sl = 0;
        rail.style.cursor = 'grab';
        rail.addEventListener('mousedown', function (e) {
          down = true; sx = e.pageX; sl = rail.scrollLeft; rail.style.cursor = 'grabbing';
        });
        function stop() { down = false; rail.style.cursor = 'grab'; }
        rail.addEventListener('mouseup', stop);
        rail.addEventListener('mouseleave', stop);
        rail.addEventListener('mousemove', function (e) {
          if (!down) return;
          e.preventDefault();
          rail.scrollLeft = sl - (e.pageX - sx) * 1.3;
        });
      })(rails[r]);
    }
  })();

  /* ============================ mega menu ============================ */
  (function () {
    var wrap = doc.querySelector('.has-mega');
    if (!wrap) return;
    var btn = wrap.querySelector('.mega-btn');
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = wrap.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
    });
    doc.addEventListener('click', function (e) {
      if (!wrap.contains(e.target)) { wrap.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
    doc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { wrap.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
    if (matchMedia('(hover:hover) and (min-width:1081px)').matches) {
      var t;
      wrap.addEventListener('mouseenter', function () { clearTimeout(t); wrap.classList.add('open'); });
      wrap.addEventListener('mouseleave', function () {
        t = setTimeout(function () { wrap.classList.remove('open'); }, 180);
      });
    }
    addEventListener('pageshow', function () { wrap.classList.remove('open'); });
  })();

  /* ============================ contact form ============================ */
  (function () {
    var form = doc.getElementById('quoteForm');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      var ok = true;
      var req = form.querySelectorAll('[required]');
      for (var i = 0; i < req.length; i++) {
        var el = req[i], bad = !el.value.trim();
        if (el.type === 'email') bad = !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value);
        var fld = el.closest('.field');
        if (fld) fld.classList.toggle('err', bad);
        if (bad) ok = false;
      }
      if (!ok) {
        e.preventDefault(); e.stopImmediatePropagation();
        var first = form.querySelector('.field.err input,.field.err select,.field.err textarea');
        if (first) first.focus();
        return;
      }
      if (!form.getAttribute('action')) {
        e.preventDefault();
        var d = new FormData(form), body = [];
        d.forEach(function (v, k) { body.push(k.toUpperCase() + ': ' + v); });
        location.href = 'mailto:' + (form.dataset.email || 'hello@example.com') +
          '?subject=' + encodeURIComponent('Project enquiry — ' + (d.get('service') || 'General')) +
          '&body=' + encodeURIComponent(body.join('\n'));
        var m = doc.getElementById('formMsg'); if (m) m.style.display = 'block';
      }
    }, true);
  })();

  /* ============================ image ready ============================ */
  (function () {
    var imgs = doc.querySelectorAll('img.ph');
    for (var i = 0; i < imgs.length; i++) {
      (function (im) {
        if (im.complete && im.naturalWidth) { im.classList.add('ready'); return; }
        im.addEventListener('load', function () { im.classList.add('ready'); }, { once: true });
        im.addEventListener('error', function () { im.classList.add('ready'); }, { once: true });
      })(imgs[i]);
    }
  })();

  var yr = doc.querySelectorAll('[data-year]'), n = new Date().getFullYear();
  for (var y = 0; y < yr.length; y++) yr[y].textContent = n;

  /* ============================ FPS watchdog ============================ */
  if (RICH) {
    var frames = 0, w0 = performance.now(), checks = 0;
    (function fps(now) {
      frames++;
      if (now - w0 >= 1000) {
        if (frames < 40) {
          root.classList.add('lite');
          tasks.length = 0;
          var c = doc.querySelector('.cur'), d2 = doc.querySelector('.cur-dot');
          if (c) c.remove(); if (d2) d2.remove();
          return;
        }
        frames = 0; w0 = now;
        if (++checks >= 4) return;
      }
      requestAnimationFrame(fps);
    })(performance.now());
  }

})();
