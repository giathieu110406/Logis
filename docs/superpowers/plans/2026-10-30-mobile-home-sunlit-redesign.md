# Mobile Home "Sunlit Harbor" Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Trình bày lại toàn bộ trang chủ trên điện thoại (≤ 700px) theo hệ "Sunlit Harbor" sáng, bỏ hoàn toàn màu tối/navy, bỏ scroll-snap 100svh gây cắt nội dung, thống nhất typography và tăng khả năng chuyển đổi (giá, CTA rõ ràng).

**Architecture:** Toàn bộ thay đổi giao diện nằm trong khối `@media (max-width: 700px)` của `mobile-home.css` (file chỉ chứa CSS mobile, desktop không bị ảnh hưởng). HTML chỉ thêm 2 phần tử mobile-only (chip thông tin hero, dòng giá CTA), đổi 1 thẻ `<h1>`→`<h2>` và 1 từ copy. JS chỉ xóa code carousel Khối 4 không còn dùng. Kiểm chứng bằng một script audit chạy trong trình duyệt (Playwright MCP) đo computed style — đóng vai trò "test" cho TDD.

**Tech Stack:** HTML tĩnh, CSS thuần, vanilla JS, GSAP 3.12 (CDN, không đụng), dev server `npx serve` cổng 3000, Playwright MCP để audit/screenshot.

**Spec:** `docs/superpowers/specs/2026-10-30-mobile-home-sunlit-redesign-spec.md` (đọc mục 1 Audit, 2.1 Tokens, 2.3 Bố cục trước khi làm).

## Global Constraints

- Breakpoint mobile duy nhất: `@media (max-width: 700px)`; bổ sung `@media (max-width: 360px)` đã có. KHÔNG sửa `styles.css`, KHÔNG sửa CSS ngoài media query trừ dòng 2-3 của `mobile-home.css` (rule ẩn phần tử mobile-only trên desktop).
- CẤM màu tối/navy: bề mặt phải có HSL `L ≥ 0.55`; mọi màu (chữ, nền, viền, shadow, text-shadow) với alpha ≥ 0.3, saturation > 0.2, hue 190–250 và `L < 0.25`, hoặc hue 205–250 và `L < 0.35` là LỖI. Check `noNavy` và `lightSurfaces` của audit là nguồn sự thật.
- Chỉ dùng token `--lq-*` khai báo ở Task 2; không hardcode màu mới ngoài bảng token (trừ `#FFFFFF` và `rgba(2,132,199,.x)` / `rgba(249,115,22,.x)` cho shadow alpha ≤ 0.25).
- Font duy nhất: `'Montserrat', sans-serif`. Cỡ chữ tối thiểu 12px. Thân bài 15px/1.6.
- Encoding UTF-8, giữ CRLF của `index.html` và kiểu thụt lề 2 space hiện có. `mobile-home.css` dùng LF.
- Không thêm dependency, không tạo file ở root. File hỗ trợ nằm trong `docs/mobile-home-2026-10-30/`.
- **Đường dẫn Windows:** thư mục dự án chứa "Tài liệu" dạng Unicode NFD. Khi dùng công cụ sửa file bằng đường dẫn tuyệt đối, phải copy đúng đường dẫn từ `(Get-Location).Path` trong terminal; nếu công cụ báo "file does not exist" thì sửa qua terminal tại cwd dự án. Không tạo thư mục "Tài liệu" mới.
- Dev server phải đang chạy: `cmd.exe /c "npm run dev"` (PowerShell chặn `npm.ps1`), URL `http://localhost:3000`.
- Commit theo Conventional Commits, tiếng Anh. KHÔNG `git push`.

---

## File Structure

| File | Hành động | Trách nhiệm |
|------|-----------|-------------|
| `docs/mobile-home-2026-10-30/audit.js` | Create | Hàm `window.__mobileAudit(opts)` và `window.__desktopSnapshot()` — "test suite" đo computed style |
| `docs/mobile-home-2026-10-30/desktop-baseline.json` | Create | Snapshot desktop 1440×900 trước khi sửa để chứng minh không hồi quy |
| `mobile-home.css` | Modify (gần như toàn bộ khối media) | Toàn bộ giao diện mobile trang chủ, header, footer |
| `mobile-redesign.css` | Modify (khối quick-buy) | Nút quick-buy 44px |
| `mobile-redesign.js` | Modify | Xóa `initPillarsCarousel` |
| `index.html` | Modify (5 điểm nhỏ) | Cache-bust CSS/JS, chip hero, `<h1>`→`<h2>`, copy Khối 4, dòng giá CTA |

---

## Cách chạy audit (dùng lại ở mọi task)

Gọi Playwright MCP tool `browser_run_code_unsafe` với `code` sau. Thay `SCOPE` bằng `null` (toàn trang) hoặc một selector (ví dụ `'#block2-gameplay'`), thay `W`,`H` bằng viewport (mặc định `390`,`844`):

```js
async (page) => {
  const cdp = await page.context().newCDPSession(page);
  await cdp.send('Network.setCacheDisabled', { cacheDisabled: true });
  await page.setViewportSize({ width: W, height: H });
  await page.goto('http://localhost:3000/?t=' + Date.now(), { waitUntil: 'load' });
  await page.waitForTimeout(1200);
  await page.addScriptTag({ url: 'http://localhost:3000/docs/mobile-home-2026-10-30/audit.js?t=' + Date.now() });
  return await page.evaluate((o) => window.__mobileAudit(o), { scope: SCOPE });
}
```

Kết quả dạng `{ pass, viewport, scope, checks: { tênCheck: { ok, detail } } }`. Mỗi task ghi rõ những check nào phải chuyển `ok: false → true`.

## Cách chụp ảnh từng khối (dùng lại ở mọi task)

```js
async (page) => {
  const cdp = await page.context().newCDPSession(page);
  await cdp.send('Network.setCacheDisabled', { cacheDisabled: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3000/?t=' + Date.now(), { waitUntil: 'load' });
  await page.waitForTimeout(1200);
  const dir = 'C:/Users/Giath/.gemini/antigravity/brain/99b33e25-a9c2-4eeb-bf64-0295427230b0/scratch/after/';
  const ids = ['hero', 'block1-showcase', 'block2-gameplay', 'block3-scale', 'block4-pillars', 'block5-guide', 'buy', 'bgFooter'];
  for (const id of ids) {
    const loc = page.locator('#' + id);
    await loc.scrollIntoViewIfNeeded();
    await page.waitForTimeout(700);
    await loc.screenshot({ path: dir + id + '.png' });
  }
  await page.locator('.main-header').screenshot({ path: dir + 'header.png' });
  return 'saved';
}
```

Sau khi chụp, mở ảnh tương ứng bằng công cụ đọc file và so với mô tả "Kỳ vọng hình ảnh" của task.

---

### Task 1: Audit harness, desktop baseline, cache-bust

**Files:**
- Create: `docs/mobile-home-2026-10-30/audit.js`
- Create: `docs/mobile-home-2026-10-30/desktop-baseline.json`
- Modify: `index.html:28-29` (link CSS), `index.html:2070` (script `mobile-redesign.js`)

**Interfaces:**
- Produces: `window.__mobileAudit({ scope: string|null }) → { pass: boolean, viewport: string, scope: string, checks: Record<string, { ok: boolean, detail: any }> }` với các check: `noSnap`, `noHorizontalOverflow`, `sectionsNotClipped`, `singleH1`, `noNavy`, `lightSurfaces`, `minFontSize`, `tapTargets`, `heroFacts`, `pillarsGrid`, `noCarouselDots`, `ctaPrice`.
- Produces: `window.__desktopSnapshot() → Array<[selector, width, height, display, backgroundColor, color, fontSize, fontFamily] | [selector, 'missing']>`.

- [ ] **Step 1: Tạo `docs/mobile-home-2026-10-30/audit.js`**

```js
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
      var img = c.querySelector('.fandeck-card-img');
      return c.getBoundingClientRect().width >= 140 && img && getComputedStyle(img).transform === 'none';
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
```

- [ ] **Step 2: Chụp desktop baseline (trước mọi thay đổi CSS)**

Chạy `browser_run_code_unsafe`:

```js
async (page) => {
  const cdp = await page.context().newCDPSession(page);
  await cdp.send('Network.setCacheDisabled', { cacheDisabled: true });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/?t=' + Date.now(), { waitUntil: 'load' });
  await page.waitForTimeout(1500);
  await page.addScriptTag({ url: 'http://localhost:3000/docs/mobile-home-2026-10-30/audit.js?t=' + Date.now() });
  return JSON.stringify(await page.evaluate(() => window.__desktopSnapshot()), null, 2);
}
```

Lưu nguyên chuỗi JSON trả về vào `docs/mobile-home-2026-10-30/desktop-baseline.json`. Expected: mảng 20 phần tử, không có `"missing"`.

- [ ] **Step 3: Chạy audit toàn trang để ghi nhận trạng thái FAIL ban đầu**

Chạy "Cách chạy audit" với `W=390, H=844, SCOPE=null`.
Expected: `pass: false`; ít nhất các check sau `ok: false`: `noSnap` (`"y mandatory"`), `sectionsNotClipped`, `singleH1` (2), `noNavy` (chứa `rgb(3, 43, 84)`, `rgb(24, 28, 40)`), `lightSurfaces` (chứa `#buy`, `bg-footer`), `minFontSize` (chứa `cta-feature-title 9px`), `heroFacts`, `pillarsGrid`, `noCarouselDots`, `ctaPrice`. Nếu một check bất kỳ trong danh sách này báo `ok: true` thì audit sai — sửa audit trước khi đi tiếp.

- [ ] **Step 4: Cache-bust các asset mobile trong `index.html`**

Sửa dòng 28-29:

```html
  <link rel="stylesheet" href="mobile-home.css?v=20261030">
  <link rel="stylesheet" href="mobile-redesign.css?v=20261030">
```

Sửa dòng 2070:

```html
  <script src="mobile-redesign.js?v=20261030"></script>
```

- [ ] **Step 5: Xác nhận trang vẫn tải đủ asset**

Chạy `browser_navigate` tới `http://localhost:3000/` rồi `browser_network_requests`. Expected: `mobile-home.css?v=20261030`, `mobile-redesign.css?v=20261030`, `mobile-redesign.js?v=20261030` đều status 200.

- [ ] **Step 6: Commit**

```bash
git add docs/mobile-home-2026-10-30/audit.js docs/mobile-home-2026-10-30/desktop-baseline.json index.html docs/superpowers/specs/2026-10-30-mobile-home-sunlit-redesign-spec.md docs/superpowers/plans/2026-10-30-mobile-home-sunlit-redesign.md
git commit -m "test: add mobile home audit harness and desktop baseline"
```

> Lưu ý: `index.html` đang có thay đổi chưa commit từ trước (git status ` M index.html`). Trước khi `git add index.html`, chạy `git diff --stat index.html`; nếu diff lớn hơn 3 dòng vừa sửa, dùng `git add -p index.html` và chỉ stage 3 dòng của Step 4.

---

### Task 2: Nền tảng — bỏ scroll-snap, tokens, typography & eyebrow chung

**Files:**
- Modify: `mobile-home.css:1-48` (rule desktop-hide + phần "Scroll & Global View Setup" + rule `footer.bg-footer` trùng lặp)

**Interfaces:**
- Consumes: audit từ Task 1.
- Produces: CSS custom properties `--lq-white, --lq-sky-50, --lq-sky-100, --lq-sky-200, --lq-sky-500, --lq-sky-600, --lq-sky-700, --lq-sun-50, --lq-sun-200, --lq-sun-400, --lq-sun-500, --lq-sun-600, --lq-sun-700, --lq-amber-100, --lq-amber-300, --lq-amber-700, --lq-ink, --lq-ink-soft, --lq-radius, --lq-shadow` khả dụng trên `:root` khi ≤ 700px; class trình bày chung cho tiêu đề, eyebrow, thân bài mà Task 3–9 dựa vào.

- [ ] **Step 1: Chạy audit để xác nhận FAIL**

`SCOPE=null`. Expected: `noSnap.ok=false`, `sectionsNotClipped.ok=false`.

- [ ] **Step 2: Thay `mobile-home.css` từ dòng 1 đến hết rule `footer.bg-footer { ... }` (dòng 48) bằng:**

```css
/* Phone art direction only. Desktop keeps its original composition. */
.home-banner-title-mobile,
.home-mobile-hero-cta,
.home-mobile-hero-facts { display: none; }

@media (max-width: 700px) {
  /* ---------- Sunlit Harbor tokens (spec 2.1) ---------- */
  :root {
    --lq-white: #FFFFFF;
    --lq-sky-50: #F0F9FF;
    --lq-sky-100: #E0F2FE;
    --lq-sky-200: #BAE6FD;
    --lq-sky-500: #0EA5E9;
    --lq-sky-600: #0284C7;
    --lq-sky-700: #0369A1;
    --lq-sun-50: #FFF7ED;
    --lq-sun-200: #FED7AA;
    --lq-sun-400: #FB923C;
    --lq-sun-500: #F97316;
    --lq-sun-600: #EA580C;
    --lq-sun-700: #C2410C;
    --lq-amber-100: #FEF3C7;
    --lq-amber-300: #FCD34D;
    --lq-amber-700: #B45309;
    --lq-ink: #57534E;
    --lq-ink-soft: #78716C;
    --lq-radius: 18px;
    --lq-shadow: 0 10px 28px rgba(2, 132, 199, 0.14);
  }

  /* ---------- Natural document flow (no snap, no 100svh clamps) ---------- */
  html {
    scroll-behavior: smooth;
    scroll-snap-type: none;
  }

  body {
    overflow-x: hidden;
  }

  #homeView {
    overflow: visible;
    height: auto;
    max-height: none;
    color: var(--lq-ink);
    background: var(--lq-white);
  }

  #homeView > section {
    position: relative;
    display: block;
    height: auto;
    min-height: 0;
    max-height: none;
    margin: 0;
    padding: 56px 16px;
    overflow: hidden;
    box-sizing: border-box;
    text-align: center;
    scroll-snap-align: none;
  }

  /* ---------- Shared section heading system ---------- */
  #homeView .showcase-sub-headline,
  #homeView .quychien-gameplay-headline,
  #block4-pillars .pillars-headline-modern,
  #block5-guide .headline-part-top,
  #buy .home-cta-title-line1 {
    display: block;
    margin: 0 0 8px !important;
    font-family: 'Montserrat', sans-serif !important;
    font-style: normal !important;
    font-weight: 900 !important;
    font-size: clamp(22px, 6.2vw, 26px) !important;
    line-height: 1.2 !important;
    letter-spacing: 0 !important;
    color: var(--lq-sky-600) !important;
    text-shadow: none !important;
    -webkit-text-stroke: 0 !important;
    -webkit-text-fill-color: currentColor !important;
    background: none !important;
    text-wrap: balance;
    transform: none !important;
  }

  #homeView .quychien-highlight-cyan {
    display: inline !important;
    white-space: normal !important;
    color: var(--lq-sun-500) !important;
    -webkit-text-fill-color: currentColor !important;
    text-shadow: none !important;
    background: none !important;
  }

  /* Eyebrow pill: ribbon badges (block 2/3) and generated eyebrows share one look */
  #homeView .nautical-ribbon-badge {
    display: inline-flex !important;
    width: auto;
    max-width: 100%;
    margin: 0 auto 12px !important;
    transform: none !important;
    filter: none !important;
  }
  #homeView .nautical-ribbon-badge .ribbon-tail-l,
  #homeView .nautical-ribbon-badge .ribbon-tail-r { display: none !important; }
  #homeView .nautical-ribbon-badge .ribbon-content,
  #block1-showcase .showcase-top-tier::before {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border: 1.5px solid var(--lq-sun-200) !important;
    border-radius: 999px !important;
    background: var(--lq-sun-50) !important;
    box-shadow: none !important;
    color: var(--lq-sun-500) !important;
    font: 800 12px/1.2 'Montserrat', sans-serif !important;
    letter-spacing: 0.08em !important;
    text-shadow: none !important;
    clip-path: none !important;
  }
  #homeView .nautical-ribbon-badge .ribbon-content::before,
  #homeView .nautical-ribbon-badge .ribbon-content::after { display: none !important; }
  #homeView .nautical-ribbon-badge .ribbon-text,
  #homeView .nautical-ribbon-badge .ribbon-icon {
    color: inherit !important;
    font: inherit !important;
    text-shadow: none !important;
  }

  /* Accent rule under headings */
  #homeView .quychien-headline-divider-amber,
  #block4-pillars .quychien-headline-divider {
    width: 48px !important;
    height: 4px !important;
    margin: 4px auto 0 !important;
    border-radius: 2px;
    background: var(--lq-sun-400) !important;
    box-shadow: none !important;
    transform: none !important;
  }

  /* Body copy */
  #homeView .showcase-body-p,
  #homeView .gameplay-p,
  #block4-pillars .home-pillars-container > .text-center p,
  #buy .home-cta-description {
    font-family: 'Montserrat', sans-serif;
    font-size: 15px !important;
    line-height: 1.6 !important;
    color: var(--lq-ink) !important;
    text-shadow: none !important;
  }
```

(Giữ nguyên phần "/* Header adjustments */" trở đi; Task 3 sẽ thay nó.)

- [ ] **Step 3: Chạy audit toàn trang**

`SCOPE=null`. Expected: `noSnap.ok=true` (`"none"`), `sectionsNotClipped.ok=true`, `noHorizontalOverflow.ok=true`. Các check khác có thể còn FAIL (được xử lý ở task sau). Nếu `sectionsNotClipped` vẫn FAIL, đọc `detail` — section nào còn `height` cố định thì rule cũ theo id (`#block1-showcase { height: 100svh }` …) vẫn đang thắng; giữ nguyên, các task 4–8 sẽ thay các rule đó. Chỉ yêu cầu `noSnap=true` ở bước này.

- [ ] **Step 4: Commit**

```bash
git add mobile-home.css
git commit -m "refactor: replace mobile home snap layout with sunlit token foundation"
```

---

### Task 3: Header + Hero (thêm chip thông tin nhanh)

**Files:**
- Modify: `mobile-home.css` — khối từ `/* Header adjustments */` đến hết rule `#hero .home-mobile-hero-cta { ... }` (trước `/* 1. KHỐI 1`)
- Modify: `index.html` — sau `</div>` đóng `.home-banner-caption` (sau dòng chứa `class="home-mobile-hero-cta"`, khoảng dòng 230-231)

**Interfaces:**
- Consumes: tokens Task 2.
- Produces: `<ul class="home-mobile-hero-facts">` gồm đúng 3 `<li>`; check `heroFacts`.

- [ ] **Step 1: Audit scoped để xác nhận FAIL**

`SCOPE='.main-header'` → Expected `noNavy.ok=false` (detail chứa `nav-delivery-btn ... rgb(24, 28, 40)` và `mobileToggle` span `rgb(15, 23, 42)`), `tapTargets` có thể FAIL với `#mobileToggle`.
`SCOPE='#hero'` → Expected `heroFacts.ok=false`, `noNavy.ok=false` (text-shadow `rgb(6, 60, 118)` / `rgba(7, 38, 92, ...)`, chữ CTA `rgb(7, 38, 92)`).

- [ ] **Step 2: Thêm chip vào `index.html`** — chèn ngay sau dòng `          </div>` đóng `.home-banner-caption` và trước `        </div>` đóng `.home-banner-wrapper`:

```html
          <ul class="home-mobile-hero-facts" aria-label="Thông tin nhanh về LogisQuest">
            <li><span aria-hidden="true">👥</span> 2–5 người</li>
            <li><span aria-hidden="true">⏱</span> 30–45 phút</li>
            <li><span aria-hidden="true">🎓</span> Incoterms 2020</li>
          </ul>
```

- [ ] **Step 3: Thay khối CSS Header + Hero trong `mobile-home.css` bằng:**

```css
  /* ---------- Header ---------- */
  .main-header { width: 100%; max-width: 100%; overflow: hidden; background: var(--lq-white) !important; box-shadow: 0 2px 12px rgba(2, 132, 199, 0.10) !important; }
  .header-container { padding-inline: 12px; gap: 8px; justify-content: space-between; }
  .logo-text { font-size: 1.05rem; }
  .sub-logo { font-size: 0.45rem; letter-spacing: 2px; }
  .header-actions { gap: 8px; margin-left: auto; }
  .header-actions .nav-delivery-btn {
    width: 106px !important;
    height: 40px !important;
    padding: 0 8px !important;
    border: 0 !important;
    border-radius: 999px !important;
    background: linear-gradient(135deg, var(--lq-sun-500), var(--lq-sun-600) 60%, var(--lq-sun-700)) !important;
    box-shadow: 0 4px 12px rgba(249, 115, 22, 0.25) !important;
  }
  .header-actions .nav-delivery-btn .button-label {
    color: var(--lq-white) !important;
    font-size: 0.75rem !important;
    font-weight: 800 !important;
    gap: 4px !important;
  }
  .header-actions .header-cart-icon {
    width: 14px !important;
    height: 14px !important;
  }
  #mobileToggle {
    width: 44px !important;
    height: 44px !important;
    display: inline-flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 0 !important;
    border: 0;
    border-radius: 12px;
    background: var(--lq-sky-50) !important;
  }
  #mobileToggle span {
    width: 22px !important;
    height: 2.5px !important;
    margin: 0 !important;
    border-radius: 2px;
    background: var(--lq-sky-700) !important;
  }

  /* ---------- 0. HERO (keeps 100svh art) ---------- */
  #hero {
    height: 100svh;
    min-height: 100svh;
    margin-top: 0;
    padding: 0;
  }
  #hero .home-banner-img { object-position: center bottom; }
  #hero .home-banner-mobile-logo {
    top: calc(var(--header-height, 60px) + 12px);
    width: clamp(100px, 28vw, 130px);
    height: auto;
  }
  #hero .home-banner-caption {
    top: calc(var(--header-height, 60px) + clamp(82px, 22vw, 110px));
    bottom: auto;
    width: calc(100% - 32px);
    gap: 12px;
  }
  #hero .home-banner-title-svg-wrapper { margin: 0; }
  #hero .game-title-svg { display: none; }
  #hero .home-banner-title-mobile {
    display: block;
    color: var(--lq-white);
    font: italic 900 clamp(30px, 8.8vw, 40px)/1.02 'Montserrat', sans-serif;
    letter-spacing: 0.5px;
    text-shadow: 0 3px 0 var(--lq-sky-500), 0 5px 0 var(--lq-sky-600), 0 8px 16px rgba(2, 132, 199, 0.35);
  }
  #hero .home-banner-sub-capsule {
    width: auto;
    max-width: 100%;
    margin: 0;
    padding: 6px 14px;
    gap: 6px;
    box-sizing: border-box;
    border: 1.5px solid var(--lq-sky-200) !important;
    border-radius: 999px !important;
    background: rgba(255, 255, 255, 0.92) !important;
    box-shadow: 0 4px 14px rgba(2, 132, 199, 0.18) !important;
    clip-path: none !important;
    transform: none !important;
  }
  #hero .home-banner-sub {
    font-size: clamp(12px, 3.4vw, 14px);
    line-height: 1.35;
    color: var(--lq-sky-700) !important;
    font-weight: 700;
    text-shadow: none !important;
  }
  #hero .sub-capsule-arrow { font-size: 12px; color: var(--lq-sun-500) !important; text-shadow: none !important; }
  #hero .home-mobile-hero-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-height: 48px;
    padding: 10px 28px;
    border-radius: 14px;
    box-sizing: border-box;
    background: linear-gradient(135deg, var(--lq-sun-500), var(--lq-sun-600) 60%, var(--lq-sun-700));
    color: var(--lq-white);
    font: 800 15px/1.2 'Montserrat', sans-serif;
    text-decoration: none;
    box-shadow: 0 4px 0 var(--lq-amber-300), 0 10px 20px rgba(249, 115, 22, 0.25);
    pointer-events: auto;
  }
  #hero .home-mobile-hero-facts {
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: max(16px, env(safe-area-inset-bottom));
    z-index: 3;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  #hero .home-mobile-hero-facts li {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 7px 12px;
    border: 1px solid var(--lq-sky-200);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.92);
    box-shadow: 0 4px 12px rgba(2, 132, 199, 0.15);
    color: var(--lq-sky-700);
    font: 700 12px/1.2 'Montserrat', sans-serif;
    white-space: nowrap;
  }
```

- [ ] **Step 4: Audit scoped**

`SCOPE='.main-header'` → Expected `noNavy.ok=true`, `lightSurfaces.ok=true`, `tapTargets.ok=true`.
`SCOPE='#hero'` → Expected `heroFacts.ok=true` (detail `["👥 2–5 người","⏱ 30–45 phút","🎓 Incoterms 2020"]`), `noNavy.ok=true`, `minFontSize.ok=true`, `tapTargets.ok=true`.
Nếu `noNavy` còn báo một selector trong `#hero` (ví dụ `.home-banner-caption` có `::before` nền tối từ `styles.css`), thêm rule `#hero <selector đó> { background: none !important; box-shadow: none !important; }` vào cuối khối Hero và chạy lại.

- [ ] **Step 5: Chụp & kiểm tra hình** — chạy "Cách chụp ảnh", mở `scratch/after/header.png`, `scratch/after/hero.png`.
Kỳ vọng hình ảnh: nút header cam bo tròn chữ trắng; hamburger 3 vạch xanh trên ô xanh nhạt; logo + "HẢI TRÌNH ĐÃ MỞ" trắng viền xanh trời; capsule trắng chữ xanh; nút "Mua ngay →" cam 48px; hàng 3 chip trắng ở đáy ảnh hero không đè lên xe tải chính giữa quá 50% chiều cao chip.

- [ ] **Step 6: Commit**

```bash
git add mobile-home.css index.html
git commit -m "feat: restyle mobile header and hero with sunlit palette and quick facts"
```

---

### Task 4: Khối 1 — Giới thiệu

**Files:**
- Modify: `index.html` — dòng `<h1 class="showcase-main-headline">LOGISQUEST</h1>` (khoảng dòng 299)
- Modify: `mobile-home.css` — khối `/* 1. KHỐI 1: GIỚI THIỆU LOGISQUEST (100svh PORTRAIT) */` đến trước `/* 2. KHỐI 2`

**Interfaces:**
- Consumes: tokens, heading system, eyebrow style cho `#block1-showcase .showcase-top-tier::before` (Task 2).
- Produces: check `singleH1` = true.

- [ ] **Step 1: Xác nhận desktop không phụ thuộc tag `h1`**

Run: `Select-String -Path styles.css,assets/about/about-reference.css -Pattern 'h1\.showcase-main-headline|showcase-top-tier h1|\.home-showcase-section h1'`
Expected: không có kết quả. Nếu có kết quả, dừng lại và báo cáo (đổi tag sẽ làm hỏng desktop).

- [ ] **Step 2: Audit FAIL** — `SCOPE='#block1-showcase'`: Expected `singleH1.ok=false` (2), `noNavy.ok=false` (`showcase-main-headline` `rgb(12, 35, 64)`).

- [ ] **Step 3: Sửa `index.html`**

```html
            <h2 class="showcase-main-headline">LOGISQUEST</h2>
```

- [ ] **Step 4: Thay khối CSS Khối 1 bằng:**

```css
  /* ---------- 1. KHỐI 1: GIỚI THIỆU ---------- */
  #block1-showcase {
    padding: 48px 16px 56px;
    background: linear-gradient(180deg, var(--lq-sky-100) 0%, var(--lq-white) 72%) !important;
  }
  #block1-showcase .home-showcase-bg-layer,
  #block1-showcase .showcase-plane-deco,
  #block1-showcase .showcase-brand-logo-wrap,
  #block1-showcase .showcase-main-headline { display: none !important; }
  #block1-showcase .home-showcase-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0 auto;
  }
  #block1-showcase .showcase-top-tier {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 20px;
  }
  #block1-showcase .showcase-top-tier::before {
    content: "GIỚI THIỆU";
    margin-bottom: 12px;
  }
  #block1-showcase .showcase-main-tier {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    margin: 0;
  }
  #block1-showcase .showcase-gallery-col,
  #block1-showcase .showcase-desc-col { width: 100%; max-width: 420px; margin: 0 auto; padding: 0; }
  #block1-showcase .showcase-glass-card {
    width: 100%;
    margin: 0 auto;
    padding: 10px 10px 12px;
    box-sizing: border-box;
    border: 1px solid var(--lq-sky-200) !important;
    border-radius: var(--lq-radius) !important;
    background: var(--lq-white) !important;
    box-shadow: var(--lq-shadow) !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
  }
  #block1-showcase .showcase-carousel-wrap {
    width: 100%;
    max-height: none;
    aspect-ratio: 4 / 3;
    margin: 0 auto;
    border-radius: 12px;
    background: var(--lq-sky-50);
    box-shadow: none;
  }
  #block1-showcase .showcase-slide-img {
    width: 100%;
    height: 100%;
    max-height: none;
    object-fit: contain;
  }
  #block1-showcase .showcase-pagination-bar { margin-top: 10px; }
  #block1-showcase .showcase-body-p {
    display: block;
    -webkit-line-clamp: unset;
    overflow: visible;
    max-width: 36rem;
    margin: 20px auto 0;
    text-align: left;
  }
  #block1-showcase .showcase-body-p b { color: var(--lq-sky-600); }
  #block1-showcase .showcase-cta-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    min-height: 48px;
    margin-top: 20px;
    padding: 12px 16px;
    box-sizing: border-box;
    border: 2px solid var(--lq-sun-400) !important;
    border-radius: 14px;
    background: var(--lq-white) !important;
    box-shadow: none !important;
    color: var(--lq-sun-600) !important;
    font: 800 14px/1.2 'Montserrat', sans-serif;
    letter-spacing: 0.04em;
    text-shadow: none !important;
  }
```

- [ ] **Step 5: Audit** — `SCOPE='#block1-showcase'`: Expected `singleH1.ok=true`, `noNavy.ok=true`, `lightSurfaces.ok=true`, `minFontSize.ok=true`, `tapTargets.ok=true`, `sectionsNotClipped` không còn liệt kê `block1-showcase`.
Nếu `noNavy` báo `.showcase-dot` (chấm carousel) dùng màu navy, thêm: `#block1-showcase .showcase-dot { background: var(--lq-sky-200) !important; } #block1-showcase .showcase-dot.active { background: var(--lq-sky-500) !important; }` và chạy lại.

- [ ] **Step 6: Chụp `block1-showcase.png`.** Kỳ vọng: pill cam "GIỚI THIỆU", tiêu đề xanh "Hải Trình Thương Mại Thu Nhỏ" (không còn chữ serif "LOGISQUEST"), card trắng chứa ảnh 4:3, mô tả đầy đủ không có "...", nút viền cam.

- [ ] **Step 7: Commit**

```bash
git add mobile-home.css index.html
git commit -m "feat: redesign mobile intro block and keep a single page h1"
```

---

### Task 5: Khối 2 (Lối chơi) + Khối 3 (Quy mô)

**Files:**
- Modify: `mobile-home.css` — từ `/* 2. KHỐI 2: LỐI CHƠI ĐẤU TRÍ (100svh PORTRAIT) */` đến trước `/* 4. KHỐI 4`

**Interfaces:**
- Consumes: heading system, eyebrow, divider, body copy (Task 2).
- Produces: không có interface mới.

- [ ] **Step 1: Audit FAIL** — `SCOPE='#block2-gameplay'` rồi `SCOPE='#block3-scale'`: Expected `noNavy.ok=false` (ribbon gradient `rgb(3, 68, 122)` hoặc tiêu đề `rgb(3, 43, 84)` nếu Task 2 chưa phủ hết) hoặc `sectionsNotClipped` liệt kê 2 block; ghi lại `detail`.

- [ ] **Step 2: Thay khối CSS Khối 2 + Khối 3 bằng:**

```css
  /* ---------- 2 & 3. LỐI CHƠI + QUY MÔ (shared editorial layout) ---------- */
  #block2-gameplay { background: var(--lq-white) !important; }
  #block3-scale { background: var(--lq-sun-50) !important; }
  #block2-gameplay,
  #block3-scale {
    background-image: none !important;
    overflow-x: clip;
  }
  #block2-gameplay::before, #block2-gameplay::after,
  #block3-scale::before, #block3-scale::after { display: none !important; }
  #block2-gameplay .home-quychien-inner,
  #block3-scale .home-quychien-inner {
    width: 100%;
    max-width: 420px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    margin: 0 auto;
    padding: 0;
  }
  #block2-gameplay .home-quychien-text-col,
  #block3-scale .home-quychien-text-col { display: contents; }
  #homeView .nautical-ribbon-badge { order: 1; }
  #homeView .quychien-gameplay-headline { order: 2; }
  #homeView .quychien-headline-divider-amber { order: 2; }
  #block2-gameplay .home-quychien-img-col,
  #block3-scale .home-quychien-img-col {
    order: 3;
    width: 100%;
    max-height: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0 0;
    padding: 0;
  }
  #homeView .boardgame-glow-backdrop,
  #homeView .photo-glow-backdrop { display: none !important; }
  #homeView .quychien-boardgame-cutout-img {
    display: block;
    width: auto;
    max-width: 100%;
    max-height: 260px;
    margin: 0 auto;
    object-fit: contain;
    transform: none !important;
  }
  #homeView .photo-card-wrapper {
    width: 100%;
    max-height: none;
    aspect-ratio: 4 / 3;
    margin: 0 auto;
    overflow: hidden;
    border: 6px solid var(--lq-white) !important;
    border-radius: var(--lq-radius) !important;
    background: var(--lq-white) !important;
    box-shadow: var(--lq-shadow) !important;
    transform: none !important;
  }
  #homeView .quychien-gameplay-paragraphs {
    order: 4;
    display: grid;
    gap: 12px;
    width: 100%;
    max-width: 36rem;
    margin: 20px auto 0;
    text-align: left;
  }
  #homeView .gameplay-p { margin: 0; transform: none !important; }
  #homeView .gameplay-kw {
    padding: 1px 6px;
    border-radius: 6px;
    background: var(--lq-amber-100);
    color: var(--lq-amber-700) !important;
    font-weight: 800;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
  }
  #homeView .nautical-route-transition { display: none; }
```

- [ ] **Step 3: Audit** — chạy lần lượt `SCOPE='#block2-gameplay'`, `SCOPE='#block3-scale'`. Expected cả hai: `noNavy.ok=true`, `lightSurfaces.ok=true`, `minFontSize.ok=true`; `SCOPE=null` → `sectionsNotClipped.detail` không chứa `block2-gameplay`, `block3-scale`.
Nếu `noNavy` vẫn báo `.ribbon-content` hoặc `.ribbon-icon` (emoji ⚓/👥 có `text-shadow` riêng), thêm `#homeView .nautical-ribbon-badge * { text-shadow: none !important; box-shadow: none !important; }` vào khối eyebrow ở Task 2 và chạy lại.

- [ ] **Step 4: Chụp `block2-gameplay.png`, `block3-scale.png`.** Kỳ vọng: pill cam → tiêu đề xanh + dòng cam → gạch cam → ảnh → 2 đoạn văn 15px đầy đủ (đọc được câu cuối "...giành chiến thắng." và "...trên bàn cờ."), từ khóa là chip vàng nhạt; Khối 3 nền kem, ảnh viền trắng.

- [ ] **Step 5: Commit**

```bash
git add mobile-home.css
git commit -m "feat: unify mobile gameplay and player-count blocks in sunlit layout"
```

---

### Task 6: Khối 4 — 4 trụ cột dạng lưới 2×2

**Files:**
- Modify: `mobile-home.css` — từ `/* 4. KHỐI 4: 4 TRỤ CỘT CHIẾN THUẬT ... */` đến trước `/* 5. KHỐI 5` (bao gồm xóa `.pillar-carousel-dots`, `.pillar-carousel-dot`, `.pillar-carousel-dot.is-active`)
- Modify: `index.html` — đoạn `<b style="color: var(--color-sky);">Nhấp vào từng thẻ để lật mở bí mật chiến thuật & chi tiết linh` (khoảng dòng 504)
- Modify: `mobile-redesign.js` — xóa hàm `initPillarsCarousel` và lời gọi trong `init()`

**Interfaces:**
- Consumes: `.pillar-fandeck-card[data-category]` click → `openPillarCategoryModal(cat)` trong `app.js:2298-2304` (KHÔNG sửa, chỉ phải giữ thẻ bấm được).
- Produces: checks `pillarsGrid`, `noCarouselDots`.

- [ ] **Step 1: Audit FAIL** — `SCOPE='#block4-pillars'`: Expected `pillarsGrid.ok=false` (`rows: 1`), `noCarouselDots.ok=false` (4), `noNavy.ok=false` (tiêu đề `rgb(3, 43, 84)` hoặc shadow `rgba(0, 0, 0, 0.35)` không phải navy — chỉ ghi nhận).

- [ ] **Step 2: Xóa carousel JS trong `mobile-redesign.js`**

Xóa toàn bộ khối bắt đầu bằng comment `/* Home: Block 4 Pillars horizontal snap carousel dots */` tới hết `function initPillarsCarousel() { ... }` (dấu `}` đóng ngay trước comment `/* Buy page: collapsible description */`).
Sửa dòng init thành:

```js
  function init() { initFlow(); initIncoterms(); initModal(); initQuickBuy(); initBuy(); }
```

Run: `Select-String -Path mobile-redesign.js,app.js -Pattern 'initPillarsCarousel|pillar-carousel'`
Expected: không có kết quả.

- [ ] **Step 3: Sửa copy trong `index.html`** — thay `Nhấp vào từng thẻ` bằng `Chọn từng thẻ` (giữ nguyên phần còn lại của câu, giữ thẻ `<b>` và xuống dòng hiện có).

- [ ] **Step 4: Thay khối CSS Khối 4 (bao gồm cả các rule `.pillar-carousel-dots*`) bằng:**

```css
  /* ---------- 4. KHỐI 4: 4 TRỤ CỘT (2x2 GRID) ---------- */
  #block4-pillars {
    padding: 56px 16px;
    background: linear-gradient(180deg, var(--lq-sky-50) 0%, var(--lq-sky-100) 100%) !important;
  }
  #block4-pillars .pillars-diorama-bg-layer,
  #block4-pillars .pillar-decor-3d,
  #block4-pillars .fandeck-card-glare { display: none !important; }
  #block4-pillars .home-pillars-container {
    width: 100%;
    max-width: 420px;
    height: auto;
    display: block;
    margin: 0 auto;
    padding: 0;
  }
  #block4-pillars .home-pillars-container > .text-center { margin-bottom: 0 !important; }
  #block4-pillars .home-pillars-container > .text-center::before {
    content: "THẺ BÀI CHIẾN THUẬT";
    display: inline-flex;
    margin-bottom: 12px;
    padding: 6px 14px;
    border: 1.5px solid var(--lq-sun-200);
    border-radius: 999px;
    background: var(--lq-sun-50);
    color: var(--lq-sun-500);
    font: 800 12px/1.2 'Montserrat', sans-serif;
    letter-spacing: 0.08em;
  }
  #block4-pillars .home-pillars-container > .text-center p {
    max-width: 36rem !important;
    margin: 12px auto 0 !important;
  }
  #block4-pillars .home-pillars-container > .text-center p b { color: var(--lq-sun-600) !important; }
  #block4-pillars .pillars-fandeck-wrapper {
    width: 100%;
    margin: 24px 0 0;
    padding: 0;
    display: block;
  }
  #block4-pillars .pillars-fandeck-area {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
    width: 100%;
    max-width: 100%;
    height: auto !important;
    min-height: 0 !important;
    margin: 0 auto;
    padding: 0;
    overflow: visible !important;
    perspective: none !important;
    box-sizing: border-box;
  }
  #block4-pillars .pillar-fandeck-card,
  #block4-pillars .pillar-fandeck-card.card-green-style,
  #block4-pillars .pillar-fandeck-card.card-red-style,
  #block4-pillars .pillar-fandeck-card.card-blue-style,
  #block4-pillars .pillar-fandeck-card.card-yellow-style {
    position: relative !important;
    inset: auto !important;
    flex: none !important;
    width: 100% !important;
    max-width: none !important;
    height: auto !important;
    max-height: none !important;
    aspect-ratio: 2 / 3 !important;
    margin: 0 !important;
    padding: 0;
    overflow: hidden;
    border: 3px solid var(--lq-white) !important;
    border-radius: 14px;
    background: var(--lq-white) !important;
    box-shadow: 0 8px 20px rgba(2, 132, 199, 0.18) !important;
    opacity: 1 !important;
    transform: none !important;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  #block4-pillars .pillar-fandeck-card:active { box-shadow: 0 3px 10px rgba(249, 115, 22, 0.25) !important; }
  #block4-pillars .fandeck-card-img {
    display: block;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    border-radius: 0;
    transform: none !important;
  }
```

Đồng thời trong khối `@media (max-width: 360px)` cuối file, xóa dòng:

```css
  #block4-pillars .pillar-fandeck-card { flex: 0 0 82vw !important; }
```

- [ ] **Step 5: Audit** — `SCOPE='#block4-pillars'`: Expected `pillarsGrid.ok=true` (`{cards:4, rows:2}`), `noCarouselDots.ok=true`, `noNavy.ok=true`, `lightSurfaces.ok=true`, `minFontSize.ok=true`.

- [ ] **Step 6: Kiểm tra click vẫn mở modal** — `browser_navigate` `http://localhost:3000/`, `browser_resize` 390×844, `browser_click` vào phần tử `[data-category="su-kien"]`, rồi `browser_snapshot`. Expected: modal thẻ "Sự Kiện" hiển thị (có nút lật thẻ `#modalFlipActionBtn`). Đóng modal bằng `browser_press_key` `Escape`.

- [ ] **Step 7: Chụp `block4-pillars.png`.** Kỳ vọng: pill "THẺ BÀI CHIẾN THUẬT", tiêu đề xanh, mô tả, lưới 2×2 bốn thẻ đứng (Phương Tiện xanh lá, Sự Kiện đỏ, Chợ xanh dương, Incoterm vàng) không bị xoay, không còn dots, không còn decor 3D.

- [ ] **Step 8: Commit**

```bash
git add mobile-home.css mobile-redesign.js index.html
git commit -m "feat: show mobile strategy pillars as a 2x2 card grid"
```

---

### Task 7: Khối 5 — Video hướng dẫn

**Files:**
- Modify: `mobile-home.css` — từ `/* 5. KHỐI 5: HƯỚNG DẪN THỰC CHIẾN (100svh PORTRAIT) */` đến trước `/* 6. KHỐI 6`

**Interfaces:**
- Consumes: heading system (Task 2) áp vào `.headline-part-top`.
- Produces: không có.

- [ ] **Step 1: Audit FAIL** — `SCOPE='#block5-guide'`: Expected `noNavy.ok=false` (medallion/biển gỗ hoặc `headline-part-top rgb(14, 53, 102)`), `lightSurfaces` có thể báo `badge-wooden-plaque` (nâu gỗ L < 0.55).

- [ ] **Step 2: Thay khối CSS Khối 5 bằng:**

```css
  /* ---------- 5. KHỐI 5: VIDEO HƯỚNG DẪN ---------- */
  #block5-guide {
    padding: 56px 16px;
    background: linear-gradient(180deg, var(--lq-white) 0%, var(--lq-sky-50) 100%) !important;
  }
  #block5-guide .guide-bg-layer { display: none !important; }
  #block5-guide .home-guide-container {
    width: 100%;
    max-width: 420px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    margin: 0 auto;
    padding: 0;
  }
  #block5-guide .nautical-boardgame-badge {
    width: auto;
    margin: 0 auto 12px;
    filter: none !important;
    transform: none !important;
  }
  #block5-guide .badge-medallion,
  #block5-guide .plaque-woodgrain-svg,
  #block5-guide .plaque-highlight,
  #block5-guide .plaque-bottom-bevel { display: none !important; }
  #block5-guide .badge-wooden-plaque {
    width: auto !important;
    height: auto !important;
    min-height: 0 !important;
    padding: 6px 14px !important;
    border: 1.5px solid var(--lq-sun-200) !important;
    border-radius: 999px !important;
    background: var(--lq-sun-50) !important;
    box-shadow: none !important;
    clip-path: none !important;
  }
  #block5-guide .badge-wooden-plaque::before,
  #block5-guide .badge-wooden-plaque::after { display: none !important; }
  #block5-guide .plaque-typography {
    position: static !important;
    color: var(--lq-sun-500) !important;
    font: 800 12px/1.2 'Montserrat', sans-serif !important;
    letter-spacing: 0.08em !important;
    text-shadow: none !important;
    -webkit-text-stroke: 0 !important;
  }
  #block5-guide .guide-nautical-headline {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    margin: 0 0 20px;
    text-shadow: none !important;
  }
  #block5-guide .headline-part-bottom {
    color: var(--lq-sun-600) !important;
    font: 800 15px/1.3 'Montserrat', sans-serif !important;
    letter-spacing: 0.02em !important;
    text-shadow: none !important;
    -webkit-text-stroke: 0 !important;
    -webkit-text-fill-color: currentColor !important;
    text-wrap: balance;
  }
  #block5-guide .video-frame {
    position: relative;
    width: 100%;
    max-height: none;
    aspect-ratio: 16 / 9;
    margin: 0 auto;
    overflow: hidden;
    border: 6px solid var(--lq-white);
    border-radius: var(--lq-radius);
    background: var(--lq-sky-50);
    box-shadow: var(--lq-shadow);
  }
  #block5-guide .video-frame__viewport { position: absolute; inset: 0; width: 100%; height: 100%; border-radius: 12px; overflow: hidden; }
  #block5-guide .video-frame__viewport iframe { position: absolute; inset: 0; width: 100%; height: 100%; min-width: 0; min-height: 0; transform: none; }
  #block5-guide .video-frame__3d-overlay { display: none; }
```

- [ ] **Step 3: Audit** — `SCOPE='#block5-guide'`: Expected `noNavy.ok=true`, `lightSurfaces.ok=true`, `minFontSize.ok=true`. (Iframe YouTube bị bỏ qua có chủ đích.)

- [ ] **Step 4: Chụp `block5-guide.png`.** Kỳ vọng: pill cam "HƯỚNG DẪN THỰC CHIẾN" (không còn biển gỗ, không còn huy chương xanh đậm), tiêu đề xanh "HẢI TRÌNH NHẬP CUỘC", dòng cam "CÁCH CHƠI LOGISQUEST TỪ A ĐẾN Z", video 16:9 viền trắng, khoảng trống trên/dưới ≤ 56px.

- [ ] **Step 5: Commit**

```bash
git add mobile-home.css
git commit -m "feat: lighten mobile video guide block"
```

---

### Task 8: CTA `#buy` — card sáng + dòng giá

**Files:**
- Modify: `index.html` — sau `</p>` của `<p class="home-cta-description">` (khoảng dòng 778)
- Modify: `mobile-home.css` — từ `/* 6. KHỐI 6: TIỀN FOOTER / CTA CHECKOUT CARD (100svh PORTRAIT) */` đến trước `/* 7. FOOTER`

**Interfaces:**
- Consumes: `.mx-only` (hiển thị `display:flex` khi ≤ 700px, `display:none` trên desktop — định nghĩa sẵn ở `mobile-redesign.css:2-5`).
- Produces: `<p class="home-cta-price mx-only">`; check `ctaPrice`.

- [ ] **Step 1: Audit FAIL** — `SCOPE='#buy'`: Expected `ctaPrice.ok=false` (`missing`), `lightSurfaces.ok=false` (`section#buy rgb(0, 86, 179)`, `home-cta-banner-full rgb(5, 47, 104)`, `home-cta-content-left rgba(3, 43, 84, 0.9)`), `minFontSize.ok=false` (`cta-feature-title 9px`), `noNavy.ok=false`.

- [ ] **Step 2: Thêm dòng giá vào `index.html`** — ngay sau thẻ `</p>` đóng `.home-cta-description`:

```html
              <p class="home-cta-price mx-only">Giá chỉ <strong>340.000₫</strong></p>
```

- [ ] **Step 3: Thay khối CSS CTA bằng:**

```css
  /* ---------- 6. CTA #buy ---------- */
  #buy {
    padding: 40px 16px 56px;
    background: linear-gradient(180deg, var(--lq-sky-100) 0%, var(--lq-sun-50) 100%) !important;
  }
  #buy .home-cta-banner-full {
    position: relative;
    width: 100%;
    height: auto;
    min-height: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    background: transparent !important;
  }
  #buy .home-cta-bg-layer {
    position: relative !important;
    inset: auto !important;
    z-index: 0;
    width: 100%;
    max-width: 420px;
    height: auto !important;
    margin: 0 auto -36px;
    background: none !important;
  }
  #buy .home-cta-bg-picture,
  #buy .home-cta-overlay-gradient { display: none !important; }
  #buy .home-cta-mobile-product {
    display: block !important;
    position: static !important;
    width: 78%;
    max-width: 300px;
    height: auto;
    margin: 0 auto;
    transform: none !important;
    filter: drop-shadow(0 14px 22px rgba(249, 115, 22, 0.22));
  }
  #buy .home-cta-container {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
    padding: 0;
  }
  #buy .home-cta-content-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 44px 18px 20px;
    box-sizing: border-box;
    border: 1.5px solid var(--lq-sun-200) !important;
    border-radius: 22px;
    background: var(--lq-white) !important;
    box-shadow: 0 16px 36px rgba(249, 115, 22, 0.16) !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    text-align: center;
  }
  #buy .home-cta-badge {
    margin: 0;
    padding: 4px 12px;
    border: 1px solid var(--lq-amber-300) !important;
    border-radius: 999px;
    background: var(--lq-amber-100) !important;
    box-shadow: none !important;
    color: var(--lq-amber-700) !important;
    font: 800 12px/1.2 'Montserrat', sans-serif;
    letter-spacing: 0.08em;
  }
  #buy .home-cta-badge span { color: inherit !important; text-shadow: none !important; }
  #buy .home-cta-title-wrap { display: flex; flex-direction: column; align-items: center; margin: 0; }
  #buy .home-cta-title-line1 { margin: 0 !important; }
  #buy .home-cta-yellow-title {
    color: var(--lq-sun-500) !important;
    font: 900 32px/1.05 'Montserrat', sans-serif !important;
    text-shadow: 0 3px 0 var(--lq-amber-300) !important;
    -webkit-text-stroke: 0 !important;
    -webkit-text-fill-color: currentColor !important;
    background: none !important;
  }
  #buy .home-cta-description { max-width: 36rem; margin: 0 auto; }
  #buy .home-cta-price {
    justify-content: center;
    align-items: baseline;
    gap: 6px;
    margin: 0;
    color: var(--lq-ink);
    font: 600 14px/1.2 'Montserrat', sans-serif;
  }
  #buy .home-cta-price strong { color: var(--lq-sun-600); font-size: 24px; font-weight: 900; }
  #buy .home-cta-action-btns {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    margin: 4px 0 0;
  }
  #buy .home-cta-btn-primary {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    min-height: 52px;
    border: 0;
    border-radius: 14px;
    background: linear-gradient(135deg, var(--lq-sun-500) 0%, var(--lq-sun-600) 55%, var(--lq-sun-700) 100%) !important;
    box-shadow: 0 8px 20px rgba(249, 115, 22, 0.25) !important;
    color: var(--lq-white) !important;
    font: 900 16px/1.2 'Montserrat', sans-serif;
    text-decoration: none;
    text-shadow: none !important;
  }
  #buy .home-cta-btn-secondary {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    width: 100%;
    min-height: 48px;
    border: 2px solid var(--lq-sky-500) !important;
    border-radius: 14px;
    background: var(--lq-white) !important;
    box-shadow: none !important;
    color: var(--lq-sky-700) !important;
    font: 800 14px/1.2 'Montserrat', sans-serif;
    text-decoration: none;
    text-shadow: none !important;
  }
  #buy .home-cta-btn-secondary * { color: inherit !important; }
  #buy .home-cta-features-bar {
    display: grid !important;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
    width: 100%;
    margin-top: 4px;
    padding-top: 14px;
    border-top: 1px solid var(--lq-sun-200);
    background: none !important;
    box-shadow: none !important;
  }
  #buy .cta-feature-divider { display: none !important; }
  #buy .cta-feature-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    text-align: center;
    background: none !important;
  }
  #buy .cta-feature-icon {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: var(--lq-sky-50) !important;
    color: var(--lq-sky-500) !important;
    box-shadow: none !important;
  }
  #buy .cta-feature-icon svg { width: 18px; height: 18px; }
  #buy .cta-feature-text { display: flex; flex-direction: column; gap: 2px; }
  #buy .cta-feature-title {
    color: var(--lq-ink) !important;
    font: 800 12px/1.25 'Montserrat', sans-serif;
    white-space: normal;
  }
  #buy .cta-feature-sub {
    display: block;
    color: var(--lq-ink-soft) !important;
    font: 500 12px/1.25 'Montserrat', sans-serif;
  }
```

Trong khối `@media (max-width: 360px)` cuối file giữ nguyên dòng `#buy .home-cta-container { width: calc(100% - 12px); }`.

- [ ] **Step 4: Audit** — `SCOPE='#buy'`: Expected `ctaPrice.ok=true` (`"Giá chỉ 340.000₫"`), `lightSurfaces.ok=true`, `noNavy.ok=true`, `minFontSize.ok=true`, `tapTargets.ok=true`.

- [ ] **Step 5: Kiểm tra desktop không hiện dòng giá** — `browser_resize` 1440×900, `browser_evaluate` với `() => getComputedStyle(document.querySelector('#buy .home-cta-price')).display`. Expected: `"none"`.

- [ ] **Step 6: Chụp `buy.png`.** Kỳ vọng: nền xanh nhạt → kem, ảnh hộp game nổi đè lên mép trên card trắng, badge vàng, "Trận Giao Thương" xanh + "ĐÃ MỞ" cam, mô tả xám ấm, "Giá chỉ 340.000₫", nút cam 52px, nút trắng viền xanh đọc rõ, 3 tính năng chữ ≥ 12px.

- [ ] **Step 7: Commit**

```bash
git add mobile-home.css index.html
git commit -m "feat: rebuild mobile buy section as light card with visible price"
```

---

### Task 9: Footer sáng + quick-buy bar

**Files:**
- Modify: `mobile-home.css` — từ `/* 7. FOOTER TỐI ƯU GỌN GÀNG */` đến trước `.nautical-scroll-rail { display: none !important; }` (giữ dòng rail)
- Modify: `mobile-redesign.css` — rule `.mx-quickbuy-btn { ... }`

**Interfaces:**
- Consumes: tokens.
- Produces: footer sáng áp dụng cho mọi view trên mobile (footer là phần tử chung `#bgFooter` của `body`).

- [ ] **Step 1: Audit FAIL** — `SCOPE='footer.bg-footer'`: Expected `lightSurfaces.ok=false` (`footer#bgFooter rgb(2, 26, 54)`, `bg-footer-main rgb(5, 63, 143)`), `noNavy.ok=false`, `tapTargets.ok=false` (`.bg-footer-links a` < 32).

- [ ] **Step 2: Thay khối CSS footer bằng:**

```css
  /* ---------- 7. FOOTER (light) ---------- */
  footer.bg-footer,
  .bg-footer {
    height: auto !important;
    min-height: 0 !important;
    max-height: none !important;
    overflow: visible !important;
    padding: 32px 16px 24px !important;
    border-top: 4px solid var(--lq-sun-400) !important;
    background: var(--lq-sky-50) !important;
    color: var(--lq-ink) !important;
    scroll-snap-align: none;
  }
  .bg-footer-hero,
  .bg-checker-strip,
  .bg-col-single-cont-wrap,
  .bg-copy-decor,
  .bg-copyright-wave-svg { display: none !important; }
  .bg-footer-main {
    padding: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
  }
  .bg-footer-main-container {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px 16px !important;
    max-width: 440px;
    margin: 0 auto;
    text-align: left;
  }
  .bg-footer-col {
    margin: 0 !important;
    padding: 0 !important;
    border: 0 !important;
    background: none !important;
  }
  .bg-footer-col:first-child,
  .bg-footer-col:last-child { grid-column: 1 / -1; }
  .bg-col-header { justify-content: flex-start; gap: 8px; margin-bottom: 4px; }
  .bg-col-icon-wrap {
    width: 28px;
    height: 28px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: var(--lq-sun-50) !important;
    box-shadow: none !important;
  }
  .bg-col-icon-wrap svg { width: 18px; height: 18px; stroke: var(--lq-sun-500); }
  .bg-col-title {
    margin: 0;
    color: var(--lq-sky-700) !important;
    font: 800 14px/1.3 'Montserrat', sans-serif !important;
    letter-spacing: 0.06em;
    text-shadow: none !important;
  }
  .bg-title-underline {
    width: 28px;
    height: 3px;
    margin: 4px 0 10px !important;
    border-radius: 2px;
    background: var(--lq-sun-400) !important;
  }
  .bg-col-desc {
    max-width: none;
    margin: 0 0 12px;
    color: var(--lq-ink) !important;
    font-size: 14px;
    line-height: 1.55;
  }
  .bg-btn-and-cont-row { justify-content: flex-start; margin: 0; }
  .bg-btn-more {
    display: inline-flex;
    align-items: center;
    min-height: 40px;
    padding: 8px 16px;
    border: 1.5px solid var(--lq-sky-200) !important;
    border-radius: 999px;
    background: var(--lq-white) !important;
    box-shadow: none !important;
    color: var(--lq-sky-700) !important;
    font: 700 13px/1.2 'Montserrat', sans-serif;
  }
  .bg-footer-links {
    display: grid !important;
    gap: 2px !important;
    justify-content: start !important;
    margin: 0 !important;
    padding: 0 !important;
    list-style: none !important;
  }
  .bg-footer-links li a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: 32px;
    color: var(--lq-ink) !important;
    font-size: 14px !important;
    text-shadow: none !important;
  }
  .bg-footer-links li a::before { color: var(--lq-sun-500) !important; }
  .bg-newsletter-form { display: flex; gap: 8px; margin: 0 0 16px; }
  .bg-news-input {
    flex: 1;
    min-width: 0;
    min-height: 44px;
    padding: 0 14px;
    border: 1.5px solid var(--lq-sky-200) !important;
    border-radius: 12px;
    background: var(--lq-white) !important;
    color: var(--lq-ink) !important;
    font-size: 14px;
    box-shadow: none !important;
  }
  .bg-news-input::placeholder { color: var(--lq-ink-soft); }
  .bg-news-btn {
    min-height: 44px;
    padding: 0 16px;
    border: 0;
    border-radius: 12px;
    background: linear-gradient(135deg, var(--lq-sun-500), var(--lq-sun-600) 60%, var(--lq-sun-700)) !important;
    box-shadow: none !important;
    color: var(--lq-white) !important;
    font: 800 13px/1 'Montserrat', sans-serif;
  }
  .bg-social-title {
    margin: 0 0 8px;
    color: var(--lq-sky-700) !important;
    font: 800 12px/1.2 'Montserrat', sans-serif;
    letter-spacing: 0.08em;
    text-align: left;
  }
  .social-links { justify-content: flex-start; gap: 10px; margin-top: 0; }
  .bg-footer-copyright {
    position: relative;
    margin: 24px -16px -24px;
    padding: 14px 16px !important;
    background: var(--lq-sky-100) !important;
    color: var(--lq-sky-700) !important;
    font-size: 12px;
    text-align: center;
  }
  .bg-footer-copyright * { color: inherit !important; text-shadow: none !important; }
```

- [ ] **Step 3: Sửa `.mx-quickbuy-btn` trong `mobile-redesign.css`** thành:

```css
  .mx-quickbuy-btn {
    flex: none; display: inline-flex; align-items: center; min-height: 44px; box-sizing: border-box;
    padding: 0 20px; border-radius: 12px; text-decoration: none;
    font-size: 13px; font-weight: 800; letter-spacing: .04em; color: #fff;
    background: linear-gradient(135deg, #F97316, #EA580C 60%, #C2410C);
  }
```

- [ ] **Step 4: Audit footer** — `SCOPE='footer.bg-footer'`: Expected `lightSurfaces.ok=true`, `noNavy.ok=true`, `minFontSize.ok=true`, `tapTargets.ok=true`.
Nếu `noNavy` báo `.social-link` (nền/ shadow từ `styles.css:7411-7530`), thêm `.bg-footer .social-link { box-shadow: 0 4px 12px rgba(2, 132, 199, 0.15) !important; }` rồi chạy lại; không đổi màu logo mạng xã hội.

- [ ] **Step 5: Audit quick-buy** — chạy biến thể runner có cuộn tới giữa trang trước khi audit:

```js
async (page) => {
  const cdp = await page.context().newCDPSession(page);
  await cdp.send('Network.setCacheDisabled', { cacheDisabled: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3000/?t=' + Date.now(), { waitUntil: 'load' });
  await page.evaluate(() => document.getElementById('block3-scale').scrollIntoView());
  await page.waitForTimeout(800);
  await page.addScriptTag({ url: 'http://localhost:3000/docs/mobile-home-2026-10-30/audit.js?t=' + Date.now() });
  return await page.evaluate(() => window.__mobileAudit({ scope: '.mx-quickbuy' }));
}
```

Expected: `tapTargets.ok=true`, `noNavy.ok=true`, `lightSurfaces.ok=true`.

- [ ] **Step 6: Chụp `bgFooter.png`.** Kỳ vọng: nền xanh rất nhạt, viền cam trên cùng, "VỀ LOGISQUEST" full-width, "THÔNG TIN CHUNG" và "HỖ TRỢ" chia 2 cột căn trái, form email trắng + nút cam, mạng xã hội căn trái, dải copyright xanh nhạt chữ xanh; không còn viền xanh đậm 2 bên.

- [ ] **Step 7: Commit**

```bash
git add mobile-home.css mobile-redesign.css
git commit -m "feat: switch mobile footer and quick-buy bar to light theme"
```

---

### Task 10: Kiểm chứng toàn trang, đa viewport, chống hồi quy desktop

**Files:**
- Không sửa code (chỉ sửa nếu một check FAIL — sửa đúng khối CSS của task tương ứng).

- [ ] **Step 1: Audit toàn trang 3 viewport** — chạy "Cách chạy audit" với `SCOPE=null` lần lượt `W,H` = `390,844`, `360,780`, `440,956`.
Expected cả 3: `pass: true`, tất cả 12 check `ok: true`.

- [ ] **Step 2: Kiểm tra desktop không đổi** — chạy lại runner ở Task 1 Step 2 (1440×900) và so sánh JSON với `docs/mobile-home-2026-10-30/desktop-baseline.json`.

Run (PowerShell, sau khi lưu kết quả mới vào `C:\Users\Giath\.gemini\antigravity\brain\99b33e25-a9c2-4eeb-bf64-0295427230b0\scratch\desktop-after.json`):

```powershell
Compare-Object (Get-Content docs\mobile-home-2026-10-30\desktop-baseline.json) (Get-Content C:\Users\Giath\.gemini\antigravity\brain\99b33e25-a9c2-4eeb-bf64-0295427230b0\scratch\desktop-after.json)
```

Expected: không có output, hoặc chỉ khác chiều cao `#block4-pillars` ≤ 24px (do đổi copy "Nhấp vào" → "Chọn"). Mọi khác biệt khác (màu, font, display) là hồi quy → sửa trước khi đi tiếp.

- [ ] **Step 3: Tablet không bị ảnh hưởng** — `browser_resize` 768×1024, `browser_navigate` `http://localhost:3000/?t=1`, `browser_take_screenshot`. Expected: header desktop nav đầy đủ, hero SVG title "HẢI TRÌNH ĐÃ MỞ" dạng 3D, không thấy chip thông tin, không thấy dòng giá CTA.

- [ ] **Step 4: Chụp lại toàn bộ khối 390×844** bằng "Cách chụp ảnh từng khối", mở từng ảnh trong `scratch/after/` và đối chiếu với "Kỳ vọng hình ảnh" của Task 3–9. Đồng thời chạy skill mobile-view để kiểm tra trong khung thiết bị:

```powershell
node C:\Users\Giath\.gemini\config\skills\mobile-view\scripts\runner.cjs "http://localhost:3000" "C:\Users\Giath\.gemini\antigravity\brain\99b33e25-a9c2-4eeb-bf64-0295427230b0\scratch\after\mobile-view-frame.png"
```

Expected: ảnh khung iPhone hiển thị hero mới (nút cam, chip thông tin).

- [ ] **Step 5: Kiểm tra tương tác** — ở 390×844:
  1. `browser_click` `#mobileToggle` → `browser_snapshot`: menu mobile `#mobileNav` mở; click lại để đóng.
  2. `browser_click` `.showcase-cta-btn` → chuyển sang view "Về LogisQuest" (`#aboutView` hiển thị); quay lại bằng `browser_click` `[data-nav="home"]` trong menu.
  3. Cuộn tới `#block3-scale` → quick-buy bar hiện (`.mx-quickbuy.is-visible` tồn tại); cuộn tới `#buy` → quick-buy ẩn.
  4. `browser_console_messages` level `error`: chỉ được phép lỗi `ERR_CONNECTION_REFUSED` từ `www.google.com/js/th/...` (YouTube embed, có từ trước), không có lỗi JS mới.

- [ ] **Step 6: Commit cuối (nếu Step 1–5 phải sửa gì)**

```bash
git add mobile-home.css mobile-redesign.css mobile-redesign.js index.html
git commit -m "fix: resolve mobile home audit findings across viewports"
```

---

## Self-Review

1. **Spec coverage:** A1→Task 2; A2→Task 2–9 (+ `noNavy`/`lightSurfaces` toàn trang ở Task 10); A3→Task 2 (heading system) + Task 4 (h1→h2, ẩn serif); A4→Task 4; A5→Task 5; A6→Task 6; A7→Task 7; A8→Task 8; A9→Task 9; A10→Task 3; A11→Task 3; A12→Task 6. Mục 2.3 mục 10 (quick-buy) → Task 9.
2. **Placeholder scan:** không có TBD/TODO; mọi bước sửa code có code đầy đủ; các nhánh "nếu audit báo X" đều kèm rule CSS cụ thể.
3. **Type consistency:** tên check (`noSnap`, `noHorizontalOverflow`, `sectionsNotClipped`, `singleH1`, `noNavy`, `lightSurfaces`, `minFontSize`, `tapTargets`, `heroFacts`, `pillarsGrid`, `noCarouselDots`, `ctaPrice`) khớp giữa `audit.js` và các task; class mới `home-mobile-hero-facts`, `home-cta-price` khớp giữa HTML, CSS và audit; token `--lq-*` dùng ở Task 3–9 đều được khai báo ở Task 2.
