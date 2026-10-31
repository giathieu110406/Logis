/* LogisQuest mobile home audit - "Sunlit Harbor" redesign (2026-10-30).
   Usage in a 390x844 page: window.__mobileAudit({ scope: null | '#block2-gameplay' }) */
(function () {
  function visible(el) {
    if (!el.getClientRects().length) return false;
    var cs = getComputedStyle(el);
    return cs.visibility !== 'hidden' && parseFloat(cs.opacity) > 0.05;
  }
  function colors(str) {
    var out = [], re = /rgba?\(([^)]+)\)/g, m;
    while ((m = re.exec(str || ''))) {
      var p = m[1].split(/[\s,\/]+/).filter(Boolean).map(parseFloat);
      out.push({ r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1, raw: m[0] });
    }
    return out;
  }
  function hsl(c) {
    var r = c.r / 255, g = c.g / 255, b = c.b / 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min, l = (max + min) / 2, h = 0;
    if (d) {
      if (max === r) h = ((g - b) / d) % 6;
      else if (max === g) h = (b - r) / d + 2;
      else h = (r - g) / d + 4;
      h = (h * 60 + 360) % 360;
    }
    return { h: h, l: l, s: d ? d / (1 - Math.abs(2 * l - 1)) : 0 };
  }
  function isNavy(c) {
    if (c.a < 0.3) return false;
    var x = hsl(c);
    return x.s > 0.2 && x.h >= 190 && x.h <= 250 && (x.l < 0.25 || (x.h >= 205 && x.l < 0.35));
  }
  function label(el) {
    var cls = typeof el.className === 'string' ? el.className.trim() : '';
    return el.tagName.toLowerCase() + (el.id ? '#' + el.id : '') + (cls ? '.' + cls.split(/\s+/).join('.') : '');
  }
  function hasOwnText(el) {
    for (var n = el.firstChild; n; n = n.nextSibling) if (n.nodeType === 3 && n.textContent.trim()) return true;
    return false;
  }

  window.__mobileAudit = function (opts) {
    opts = opts || {};
    var scopes = opts.scope ? [opts.scope] : ['.main-header', '#homeView', 'footer.bg-footer', '.mx-quickbuy'];
    var SKIP = '.delivery-scene, iframe, svg, picture, img';
    var checks = {};
    function add(name, ok, detail) { checks[name] = { ok: !!ok, detail: detail }; }
    function each(fn) {
      scopes.forEach(function (sel) {
        document.querySelectorAll(sel).forEach(function (root) {
          [root].concat(Array.prototype.slice.call(root.querySelectorAll('*'))).forEach(function (el) {
            if (el.closest(SKIP) || !visible(el)) return;
            fn(el);
          });
        });
      });
    }
    function inScope(el) { return !opts.scope || !!el.closest(opts.scope); }

    // 1. Layout
    add('noSnap', getComputedStyle(document.documentElement).scrollSnapType === 'none',
      getComputedStyle(document.documentElement).scrollSnapType);
    add('noHorizontalOverflow', document.documentElement.scrollWidth <= window.innerWidth,
      document.documentElement.scrollWidth + ' vs ' + window.innerWidth);
    var clipped = [];
    document.querySelectorAll('#homeView > section:not(#hero)').forEach(function (s) {
      if (s.scrollHeight > s.clientHeight + 2) clipped.push(s.id + ' ' + s.scrollHeight + '>' + s.clientHeight);
    });
    add('sectionsNotClipped', clipped.length === 0, clipped);
    add('singleH1', document.querySelectorAll('#homeView h1').length === 1,
      document.querySelectorAll('#homeView h1').length);

    // 2. Colour rules
    var navy = [], small = [];
    each(function (el) {
      var cs = getComputedStyle(el), list = [];
      if (hasOwnText(el)) list.push(['color', cs.color]);
      list.push(['background-color', cs.backgroundColor], ['background-image', cs.backgroundImage],
        ['box-shadow', cs.boxShadow], ['text-shadow', cs.textShadow]);
      if (parseFloat(cs.borderTopWidth) > 0) list.push(['border-color', cs.borderTopColor]);
      ['::before', '::after'].forEach(function (p) {
        var ps = getComputedStyle(el, p);
        if (ps.content && ps.content !== 'none' && ps.content !== 'normal') {
          list.push([p + ' color', ps.color], [p + ' background', ps.backgroundColor + ' ' + ps.backgroundImage]);
        }
      });
      list.forEach(function (pair) {
        colors(pair[1]).forEach(function (c) { if (isNavy(c)) navy.push(label(el) + ' ' + pair[0] + ' ' + c.raw); });
      });
      if (hasOwnText(el) && parseFloat(cs.fontSize) < 12) {
        small.push(label(el) + ' ' + cs.fontSize + ' "' + el.textContent.trim().slice(0, 30) + '"');
      }
    });
    add('noNavy', navy.length === 0, navy.slice(0, 25));
    add('minFontSize', small.length === 0, small.slice(0, 25));

    var SURFACES = ['#homeView > section', '.home-cta-banner-full', '.home-cta-content-left', '.showcase-glass-card',
      '.photo-card-wrapper', 'footer.bg-footer', '.bg-footer-main', '.bg-footer-copyright', '.main-header',
      '.mx-quickbuy', '.nautical-ribbon-badge .ribbon-content', '#block5-guide .badge-wooden-plaque',
      '.bg-news-input', '.home-cta-overlay-gradient', '.pillars-diorama-overlay', '.guide-bg-vignette',
      '.home-mobile-hero-facts li'];
    var dark = [];
    SURFACES.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) {
        if (!visible(el) || !inScope(el)) return;
        var cs = getComputedStyle(el);
        colors(cs.backgroundColor + ' ' + cs.backgroundImage).forEach(function (c) {
          if (c.a >= 0.3 && hsl(c).l < 0.55) dark.push(label(el) + ' ' + c.raw);
        });
      });
    });
    add('lightSurfaces', dark.length === 0, dark.slice(0, 25));

    // 3. Touch targets
    var TAP = [['.home-mobile-hero-cta', 44], ['.showcase-cta-btn', 44], ['#buy .home-cta-btn-primary', 48],
      ['#buy .home-cta-btn-secondary', 44], ['.mx-quickbuy-btn', 44], ['.bg-news-btn', 44],
      ['#mobileToggle', 44], ['.bg-footer-links a', 32]];
    var tiny = [];
    TAP.forEach(function (t) {
      document.querySelectorAll(t[0]).forEach(function (el) {
        if (!visible(el) || !inScope(el)) return;
        var r = el.getBoundingClientRect();
        var size = t[0] === '#mobileToggle' ? Math.min(r.width, r.height) : r.height;
        if (size < t[1] - 0.5) tiny.push(t[0] + ' ' + Math.round(size) + 'px < ' + t[1]);
      });
    });
    add('tapTargets', tiny.length === 0, tiny);

    // 4. Feature-specific
    var facts = Array.prototype.filter.call(document.querySelectorAll('.home-mobile-hero-facts li'), visible);
    add('heroFacts', facts.length === 3, facts.map(function (li) { return li.textContent.trim(); }));
    var cards = Array.prototype.filter.call(document.querySelectorAll('#block4-pillars .pillar-fandeck-card'), visible);
    var tops = {};
    cards.forEach(function (c) { tops[Math.round(c.getBoundingClientRect().top)] = 1; });
    var gridOk = cards.length === 4 && Object.keys(tops).length === 2 && cards.every(function (c) {
      return c.getBoundingClientRect().width >= 140;
    });
    add('pillarsGrid', gridOk, { cards: cards.length, rows: Object.keys(tops).length });
    add('noCarouselDots', document.querySelectorAll('.pillar-carousel-dot').length === 0,
      document.querySelectorAll('.pillar-carousel-dot').length);
    var price = document.querySelector('#buy .home-cta-price');
    add('ctaPrice', !!price && visible(price) && /340\.000/.test(price.textContent), price ? price.textContent.trim() : 'missing');

    var pass = Object.keys(checks).every(function (k) { return checks[k].ok; });
    return { pass: pass, viewport: window.innerWidth + 'x' + window.innerHeight, scope: opts.scope || 'all', checks: checks };
  };

  window.__desktopSnapshot = function () {
    var SEL = ['#hero', '#block1-showcase', '#block2-gameplay', '#block3-scale', '#block4-pillars', '#block5-guide',
      '#buy', '#bgFooter', '.showcase-main-headline', '.showcase-sub-headline', '.showcase-body-p',
      '.quychien-gameplay-headline', '.nautical-ribbon-badge', '.pillars-headline-modern', '.pillar-fandeck-card',
      '.guide-nautical-headline', '.home-cta-content-left', '.home-cta-btn-primary', '.bg-footer-main-container',
      '.nav-delivery-btn'];
    return SEL.map(function (s) {
      var el = document.querySelector(s);
      if (!el) return [s, 'missing'];
      var cs = getComputedStyle(el), r = el.getBoundingClientRect();
      return [s, Math.round(r.width), Math.round(r.height), cs.display, cs.backgroundColor, cs.color, cs.fontSize, cs.fontFamily];
    });
  };
})();
