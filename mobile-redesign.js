/* LogisQuest - Mobile UX redesign helpers (<= 700px). Elements are CSS-hidden above 700px. */
(function () {
  var mq = window.matchMedia('(max-width: 700px)');
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html) e.innerHTML = html; return e; }

  /* Gameplay: flow carousel dots */
  function initFlow() {
    var tl = document.querySelector('.gp-flow-timeline');
    if (!tl || tl.dataset.mx) return; tl.dataset.mx = '1';
    var steps = Array.prototype.filter.call(tl.children, function (c) { return c.tagName.toLowerCase() !== 'svg'; });
    var dots = el('div', 'gp-flow-dots mx-only');
    steps.forEach(function (s, i) {
      var b = el('button', 'gp-flow-dot'); b.type = 'button'; b.setAttribute('aria-label', 'Bước ' + (i + 1));
      b.addEventListener('click', function () { tl.scrollTo({ left: s.offsetLeft - (tl.clientWidth - s.clientWidth) / 2, behavior: 'smooth' }); });
      dots.appendChild(b);
    });
    tl.parentNode.insertBefore(dots, tl.nextSibling);
    function sync() {
      var mid = tl.scrollLeft + tl.clientWidth / 2, best = 0, bd = 1e9;
      steps.forEach(function (s, i) { var d = Math.abs(s.offsetLeft + s.clientWidth / 2 - mid); if (d < bd) { bd = d; best = i; } });
      Array.prototype.forEach.call(dots.children, function (d, i) { d.classList.toggle('is-active', i === best); });
    }
    tl.addEventListener('scroll', sync, { passive: true }); sync();
  }

  /* Gameplay: incoterms segmented tabs */
  function initIncoterms() {
    var m = document.querySelector('.gp-incoterms-matrix');
    if (!m || m.dataset.mx) return; m.dataset.mx = '1';
    var cards = m.querySelectorAll('.gp-matrix-card');
    var names = ['Nhóm E', 'Nhóm F', 'Nhóm C', 'Nhóm D'];
    var bar = el('div', 'gp-incoterms-tabs mx-only'); bar.setAttribute('role', 'tablist');
    function show(i) {
      Array.prototype.forEach.call(cards, function (c, j) { c.classList.toggle('is-mobile-active', i === j); });
      Array.prototype.forEach.call(bar.children, function (t, j) { t.classList.toggle('is-active', i === j); t.setAttribute('aria-selected', i === j); });
    }
    Array.prototype.forEach.call(cards, function (c, i) {
      var t = el('button', 'gp-incoterms-tab', names[i] || ('Nhóm ' + (i + 1))); t.type = 'button'; t.setAttribute('role', 'tab');
      t.addEventListener('click', function () { show(i); }); bar.appendChild(t);
    });
    m.classList.add('mx-tabbed'); m.parentNode.insertBefore(bar, m); show(0);
  }

  /* Card modal: Quy tắc / Chiến thuật tabs */
  function initModal() {
    var g = document.querySelector('.modal-info-grid');
    if (!g || g.dataset.mx) return; g.dataset.mx = '1';
    var bar = el('div', 'modal-info-tabs mx-only'); bar.setAttribute('role', 'tablist');
    [['rule', 'Quy tắc'], ['strategy', 'Chiến thuật']].forEach(function (p, i) {
      var t = el('button', 'modal-info-tab' + (i ? '' : ' is-active'), p[1]); t.type = 'button'; t.setAttribute('role', 'tab');
      t.addEventListener('click', function () {
        g.dataset.active = p[0];
        Array.prototype.forEach.call(bar.children, function (b) { b.classList.toggle('is-active', b === t); });
      });
      bar.appendChild(t);
    });
    g.dataset.active = 'rule'; g.classList.add('mx-tabbed'); g.parentNode.insertBefore(bar, g);
  }

  /* Home: Mobile enhancements (Block 1 slide captions, Block 3 photo dots, Video cover, Backdrop close) */
  function initHomeMobileEnhancements() {
    /* 1. Mobile Nav Backdrop click to close + sync body.mobile-nav-open */
    var backdrop = document.getElementById('mobileNavBackdrop');
    var mobileToggle = document.getElementById('mobileToggle');
    var mobileNav = document.getElementById('mobileNav');
    if (mobileNav) {
      var syncNavOpenClass = function () {
        document.body.classList.toggle('mobile-nav-open', mobileNav.classList.contains('active'));
      };
      var navObs = new MutationObserver(syncNavOpenClass);
      navObs.observe(mobileNav, { attributes: true, attributeFilter: ['class'] });
      syncNavOpenClass();
    }
    if (backdrop && mobileToggle && mobileNav) {
      backdrop.addEventListener('click', function () {
        if (mobileNav.classList.contains('active')) {
          mobileToggle.click();
        }
      });
    }

    /* 2. Block 1 Slide Caption Sync */
    var b1Track = document.getElementById('block1CarouselTrack');
    var b1Dots = document.getElementById('block1PaginationBar') || document.getElementById('block1PaginationDots');
    var b1Step = document.getElementById('block1CaptionStep');
    var b1Title = document.getElementById('block1CaptionTitle');
    var b1Labels = [
      'Bàn Cờ Hải Trình Thực Tế',
      'Standee & Linh Kiện Nhân Vật',
      'Hệ Thống Thẻ Bài & Tài Nguyên',
      'Trọn Bộ Hộp Game & Bản Đồ Cảng'
    ];
    if (b1Track && b1Step && b1Title) {
      var updateB1Caption = function () {
        var activeDot = b1Dots ? b1Dots.querySelector('.showcase-dot.active') : null;
        var idx = activeDot ? parseInt(activeDot.getAttribute('data-index') || '0', 10) : 0;
        if (isNaN(idx) || idx < 0 || idx >= b1Labels.length) idx = 0;
        b1Step.textContent = '0' + (idx + 1) + ' / 0' + b1Labels.length;
        b1Title.textContent = b1Labels[idx];
      };
      var obs1 = new MutationObserver(updateB1Caption);
      if (b1Dots) obs1.observe(b1Dots, { attributes: true, subtree: true, attributeFilter: ['class'] });
      obs1.observe(b1Track, { attributes: true, attributeFilter: ['style'] });
      b1Track.addEventListener('scroll', updateB1Caption, { passive: true });
      updateB1Caption();
    }

    /* 3. Block 3 Photo Stack Dots Sync */
    var b3Track = document.getElementById('block3PhotoTrack');
    var b3DotsWrap = document.getElementById('block3PhotoDots');
    if (b3Track && b3DotsWrap) {
      var b3Dots = b3DotsWrap.querySelectorAll('.mx-photo-dot');
      var syncB3Dots = function () {
        var topSlide = b3Track.querySelector('.photo-slide[data-pos="0"]') || b3Track.querySelector('.photo-slide.active');
        var slides = Array.prototype.slice.call(b3Track.querySelectorAll('.photo-slide'));
        var idx = topSlide ? slides.indexOf(topSlide) : 0;
        if (idx < 0) idx = 0;
        Array.prototype.forEach.call(b3Dots, function (d, i) {
          d.classList.toggle('is-active', i === idx);
          d.classList.toggle('active', i === idx);
        });
      };
      var obs3 = new MutationObserver(syncB3Dots);
      obs3.observe(b3Track, { attributes: true, subtree: true, attributeFilter: ['data-pos', 'class'] });
      Array.prototype.forEach.call(b3Dots, function (dot) {
        dot.addEventListener('click', function () {
          var targetIdx = parseInt(dot.getAttribute('data-slide') || dot.getAttribute('data-photo-idx') || '0', 10);
          var slides = b3Track.querySelectorAll('.photo-slide');
          if (slides[targetIdx]) slides[targetIdx].click();
        });
      });
      syncB3Dots();
    }

    /* 4. Block 5 Custom Thumbnail Play Cover */
    var videoCoverBtn = document.getElementById('mxVideoCoverBtn');
    var ytIframe = document.getElementById('guideYoutubeIframe');
    if (videoCoverBtn && ytIframe) {
      videoCoverBtn.addEventListener('click', function () {
        videoCoverBtn.classList.add('is-playing');
        var src = ytIframe.getAttribute('src') || '';
        if (src.indexOf('autoplay=1') === -1) {
          ytIframe.setAttribute('src', src + (src.indexOf('?') === -1 ? '?' : '&') + 'autoplay=1');
        }
      });
    }
  }

  /* Buy page: collapsible description */
  function initBuy() {
    var d = document.querySelector('.buy-desc-text');
    if (!d || d.dataset.mx) return; d.dataset.mx = '1';
    var b = el('button', 'buy-desc-toggle mx-only', 'Xem thêm chi tiết ▾'); b.type = 'button';
    d.classList.add('mx-collapsed');
    b.addEventListener('click', function () {
      var c = d.classList.toggle('mx-collapsed'); b.textContent = c ? 'Xem thêm chi tiết ▾' : 'Thu gọn ▴';
    });
    d.parentNode.insertBefore(b, d.nextSibling);
  }

  function init() { initFlow(); initIncoterms(); initModal(); initHomeMobileEnhancements(); initBuy(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

/* ============================================================
   CLOUD WIPE MOTION EFFECT (Hero -> Block 1 Transition)
   ============================================================ */
(function initCloudWipe() {
  if (typeof window === 'undefined') return;
  
  // Inject cloud elements if not already present
  var cloudWrap = document.getElementById('cloudWipeWrapper');
  if (!cloudWrap) {
    cloudWrap = document.createElement('div');
    cloudWrap.id = 'cloudWipeWrapper';
    cloudWrap.className = 'cloud-wipe-wrapper';
    cloudWrap.setAttribute('aria-hidden', 'true');
    cloudWrap.innerHTML = '<div class="cloud-left"></div><div class="cloud-right"></div>';
    document.body.appendChild(cloudWrap);

    var cloudStyle = document.createElement('style');
    cloudStyle.innerHTML = `
      .cloud-wipe-wrapper {
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 998;
        overflow: hidden;
      }
      .cloud-left, .cloud-right {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 65vw;
        background: radial-gradient(circle at center, #FFFFFF 60%, rgba(255,255,255,0.92) 100%);
        box-shadow: 0 0 60px rgba(255, 255, 255, 0.8), 0 0 100px rgba(56, 189, 248, 0.3);
        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
        opacity: 0;
      }
      .cloud-left {
        left: -65vw;
        transform: translateX(0);
      }
      .cloud-right {
        right: -65vw;
        transform: translateX(0);
      }
      .cloud-wipe-active .cloud-left {
        transform: translateX(55vw);
        opacity: 0.95;
      }
      .cloud-wipe-active .cloud-right {
        transform: translateX(-55vw);
        opacity: 0.95;
      }
    `;
    document.head.appendChild(cloudStyle);
  }

  // Scroll listener for Cloud Wipe transition
  var lastScrollY = window.scrollY;
  var wipeTriggered = false;

  window.addEventListener('scroll', function() {
    var scrollY = window.scrollY;
    var hero = document.getElementById('hero');
    if (!hero) return;
    var heroHeight = hero.offsetHeight;

    if (scrollY > heroHeight * 0.25 && scrollY < heroHeight * 0.85) {
      if (!wipeTriggered) {
        wipeTriggered = true;
        cloudWrap.classList.add('cloud-wipe-active');
        setTimeout(function() {
          cloudWrap.classList.remove('cloud-wipe-active');
        }, 650);
      }
    } else {
      wipeTriggered = false;
    }
    lastScrollY = scrollY;
  }, { passive: true });
})();
