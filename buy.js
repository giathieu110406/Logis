/**
 * LogisQuest Buy Page — buy.js
 *
 * Handles:
 *  1) Sidebar Delivery Button (order-button class)
 *     Phase-1: Add-to-cart shirt animation (~2.45s)
 *     Phase-2: Truck delivery animation (~8s)
 *     → After sequence: redirect to buy.html (if on index.html) or scroll to #btnBuyNow (if on buy.html)
 *
 *  2) Product Hero Add-to-Cart Button (cart-button--buy class)
 *     Phase-1: Shirt-into-cart animation (~2.45s)
 *     → After animation: open checkout modal
 *
 *  3) Scroll progress bar, mobile sidebar, quantity picker,
 *     accordion FAQs, voucher copy, checkout modal, sticky dock.
 */

(function () {
  'use strict';

  /* ============================================================
     CONSTANTS
     ============================================================ */
  const UNIT_PRICE = 340000;
  const CART_ANIM_DURATION = 2450;   // ms — matches CSS --anim-duration / --cart-anim-duration
  const DELIVERY_PHASE2_DURATION = 8000; // ms — truck drive
  const MODAL_OPEN_DELAY = CART_ANIM_DURATION + 200; // open modal just after cart animation finishes

  /* ============================================================
     DOM REFS — fetched once
     ============================================================ */
  const progressBar    = document.getElementById('scrollProgressBar');
  const mobileToggle   = document.getElementById('mobileToggle');
  const mobileNav      = document.getElementById('mobileNav');
  const qtyInput       = document.getElementById('qtyInput');
  const btnMinus       = document.getElementById('btnMinus');
  const btnPlus        = document.getElementById('btnPlus');
  const btnBuyNow      = document.getElementById('btnBuyNow');      // cart-button--buy
  const btnBuyNowLabel = document.getElementById('btnBuyNowText'); // label span inside cart-button--buy
  const dockMinus      = document.getElementById('dockMinus');
  const dockPlus       = document.getElementById('dockPlus');
  const dockQtyVal     = document.getElementById('dockQtyVal');
  const dockPriceText  = document.getElementById('dockPriceText');
  const dockBuyNowBtn  = document.getElementById('dockBuyNowBtn');
  const buyFloatingDock= document.getElementById('buyFloatingDock');
  const voucherCopyBtn = document.getElementById('voucherCopyBtn');
  const btnContactFB   = document.getElementById('btnContactFB');
  const checkoutModal  = document.getElementById('checkoutModal');
  const checkoutClose  = document.getElementById('checkoutClose');
  const checkoutForm   = document.getElementById('checkoutForm');
  const checkoutSuccessMsg = document.getElementById('checkoutSuccessMsg');
  const btnCloseSuccess    = document.getElementById('btnCloseSuccess');
  const liveRegion     = document.getElementById('buy-status');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ============================================================
     UTILITY: Announce to screen reader
     ============================================================ */
  function announce(msg) {
    if (liveRegion) liveRegion.textContent = msg;
  }

  /* ============================================================
     1. SCROLL PROGRESS BAR
     ============================================================ */
  if (progressBar) {
    progressBar.style.transformOrigin = 'left center';
    progressBar.style.transform = 'scaleX(0)';
    window.addEventListener('scroll', function () {
      const scrollTop  = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
      const progress   = docHeight > 0 ? scrollTop / docHeight : 0;
      progressBar.style.transform = 'scaleX(' + Math.min(Math.max(progress, 0), 1) + ')';
    }, { passive: true });
  }

  /* ============================================================
     2. MOBILE SIDEBAR DRAWER
     ============================================================ */
  function openMobileNav() {
    if (!mobileNav || !mobileToggle) return;
    mobileNav.classList.add('active');
    mobileToggle.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    if (!mobileNav || !mobileToggle) return;
    mobileNav.classList.remove('active');
    mobileToggle.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      if (mobileNav.classList.contains('active')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    // Close on any mobile-link click
    mobileNav.querySelectorAll('a.mobile-link').forEach(function (link) {
      link.addEventListener('click', closeMobileNav);
    });

    // Close when clicking outside
    document.addEventListener('click', function (e) {
      if (mobileNav.classList.contains('active') &&
          !mobileNav.contains(e.target) &&
          !mobileToggle.contains(e.target)) {
        closeMobileNav();
      }
    });

    // Escape key closes sidebar
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
        closeMobileNav();
      }
    });
  }

  /* ============================================================
     3. SIDEBAR DELIVERY BUTTONS (.order-button)
        Phase 1: add-to-cart (~2.45s)  →  Phase 2: truck drive (~8s)
        → On buy.html sidebar: scroll to #btnBuyNow & open modal
        → On index.html sidebar: redirect to buy.html after truck
     ============================================================ */
  var deliveryBtns = document.querySelectorAll('.order-button');
  var deliveryTimers = [];

  function resetDeliveryButton(btn) {
    deliveryTimers.forEach(function (t) { clearTimeout(t); });
    deliveryTimers = [];
    btn.classList.remove('is-adding', 'is-animating', 'is-complete');
    btn.removeAttribute('aria-disabled');
    btn.setAttribute('aria-label', 'Mua ngay');
    announce('');
  }

  function startDeliveryPhase2(btn) {
    btn.classList.remove('is-adding');
    btn.classList.add('is-animating');
    announce('Đang giao hàng…');

    // Success label timing matches CSS delay of 5.6s
    var t1 = setTimeout(function () {
      btn.setAttribute('aria-label', 'Đặt hàng thành công');
    }, 5600);

    // After full truck animation, redirect or open modal
    var t2 = setTimeout(function () {
      // On buy.html: open checkout modal directly
      if (checkoutModal) {
        openModal();
      }
      // Reset button
      setTimeout(function () {
        resetDeliveryButton(btn);
      }, 500);
    }, DELIVERY_PHASE2_DURATION);

    deliveryTimers.push(t1, t2);
  }

  function startDeliveryPhase1(btn) {
    if (btn.classList.contains('is-adding')   ||
        btn.classList.contains('is-animating') ||
        btn.classList.contains('is-complete')) return;

    // If sidebar is open when a sidebar delivery btn is clicked, close it first
    if (mobileNav && mobileNav.classList.contains('active')) {
      closeMobileNav();
    }

    btn.setAttribute('aria-disabled', 'true');

    // Reduced motion: skip straight to success
    if (reduceMotion.matches) {
      btn.classList.add('is-complete');
      btn.setAttribute('aria-label', 'Đặt hàng thành công');
      announce('Đặt hàng thành công');
      var t = setTimeout(function () {
        if (checkoutModal) openModal();
        resetDeliveryButton(btn);
      }, 1500);
      deliveryTimers.push(t);
      return;
    }

    btn.classList.add('is-adding');
    announce('Đang thêm vào giỏ…');

    // Phase 1 duration before truck phase
    var t = setTimeout(function () {
      startDeliveryPhase2(btn);
    }, CART_ANIM_DURATION);
    deliveryTimers.push(t);
  }

  deliveryBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      startDeliveryPhase1(btn);
    });
  });

  reduceMotion.addEventListener('change', function () {
    deliveryBtns.forEach(function (btn) {
      resetDeliveryButton(btn);
    });
  });

  /* ============================================================
     4. PRODUCT HERO ADD-TO-CART BUTTON (#btnBuyNow, .cart-button--buy)
        Plays shirt-into-cart animation (~2.45s) then opens checkout modal
     ============================================================ */
  var cartAnimTimers = [];

  function resetCartButton(btn) {
    cartAnimTimers.forEach(function (t) { clearTimeout(t); });
    cartAnimTimers = [];
    btn.classList.remove('is-animating');
    btn.disabled = false;
    btn.setAttribute('aria-label', 'Thêm vào giỏ hàng');
    announce('');
    // Restore original label with current price
    updateQuantityAndPrice(parseInt(qtyInput ? qtyInput.value : '1', 10) || 1);
  }

  function animateCartButton(btn) {
    if (btn.disabled) return;

    btn.disabled = true;
    btn.setAttribute('aria-label', 'Đang thêm vào giỏ…');
    announce('Đang thêm vào giỏ hàng');

    // Replay animation cleanly (force reflow to restart CSS animation)
    btn.classList.remove('is-animating');
    void btn.offsetWidth; // trigger reflow
    btn.classList.add('is-animating');

    var motionDuration = reduceMotion.matches ? 80 : CART_ANIM_DURATION;
    var addedDelay     = reduceMotion.matches ? 30 : 1550;

    var t1 = setTimeout(function () {
      btn.setAttribute('aria-label', 'Đã thêm vào giỏ!');
      announce('Đã thêm vào giỏ hàng!');
    }, addedDelay);

    // After animation, open checkout modal
    var t2 = setTimeout(function () {
      openModal();
      // Reset button slightly after modal opens
      setTimeout(function () {
        resetCartButton(btn);
      }, 400);
    }, motionDuration);

    cartAnimTimers.push(t1, t2);
  }

  if (btnBuyNow) {
    btnBuyNow.addEventListener('click', function () {
      animateCartButton(btnBuyNow);
    });
  }

  reduceMotion.addEventListener('change', function () {
    if (btnBuyNow) resetCartButton(btnBuyNow);
  });

  /* ============================================================
     5. CHECKOUT MODAL — open / close / submit
     ============================================================ */
  function openModal() {
    if (!checkoutModal) return;
    checkoutModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!checkoutModal) return;
    checkoutModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (checkoutClose) {
    checkoutClose.addEventListener('click', closeModal);
  }

  if (checkoutModal) {
    checkoutModal.addEventListener('click', function (e) {
      if (e.target === checkoutModal) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && checkoutModal.classList.contains('active')) closeModal();
    });
  }

  if (checkoutForm) {
    checkoutForm.addEventListener('submit', function (e) {
      e.preventDefault();
      checkoutForm.style.display = 'none';
      if (checkoutSuccessMsg) {
        checkoutSuccessMsg.style.display = 'block';
      }
    });
  }

  if (btnCloseSuccess) {
    btnCloseSuccess.addEventListener('click', function () {
      closeModal();
      setTimeout(function () {
        if (checkoutForm) {
          checkoutForm.style.display = 'block';
          checkoutForm.reset();
        }
        if (checkoutSuccessMsg) checkoutSuccessMsg.style.display = 'none';
      }, 350);
    });
  }

  /* ============================================================
     6. QUANTITY PICKER + LIVE PRICE (hero & dock are synced)
     ============================================================ */
  function formatPrice(total) {
    return total.toLocaleString('vi-VN') + ' ₫';
  }

  function updateQuantityAndPrice(newQty) {
    var qty = parseInt(newQty, 10) || 1;
    if (qty < 1)  qty = 1;
    if (qty > 99) qty = 99;

    if (qtyInput) qtyInput.value = qty;
    if (dockQtyVal) dockQtyVal.textContent = qty;

    var total = qty * UNIT_PRICE;
    var formatted = formatPrice(total);

    // Update hero buy button label (only when not animating)
    if (btnBuyNowLabel && !btnBuyNow.disabled) {
      btnBuyNowLabel.textContent = 'MUA NGAY (' + formatted + ')';
    }

    // Update dock price
    if (dockPriceText) dockPriceText.textContent = formatted;

    // Update checkout summary
    var summaryQty      = document.getElementById('summaryQty');
    var summarySubtotal = document.getElementById('summarySubtotal');
    var summaryTotal    = document.getElementById('summaryTotal');
    if (summaryQty)      summaryQty.textContent      = qty;
    if (summarySubtotal) summarySubtotal.textContent = formatted;
    if (summaryTotal)    summaryTotal.textContent    = formatted;
  }

  // Hero qty buttons
  if (btnMinus) {
    btnMinus.addEventListener('click', function (e) {
      e.preventDefault();
      var cur = parseInt(qtyInput ? qtyInput.value : '1', 10) || 1;
      updateQuantityAndPrice(cur - 1);
    });
  }
  if (btnPlus) {
    btnPlus.addEventListener('click', function (e) {
      e.preventDefault();
      var cur = parseInt(qtyInput ? qtyInput.value : '1', 10) || 1;
      updateQuantityAndPrice(cur + 1);
    });
  }
  if (qtyInput) {
    qtyInput.addEventListener('change', function () {
      updateQuantityAndPrice(this.value);
    });
  }

  // Dock qty buttons
  if (dockMinus) {
    dockMinus.addEventListener('click', function (e) {
      e.preventDefault();
      var cur = parseInt(qtyInput ? qtyInput.value : '1', 10) || 1;
      updateQuantityAndPrice(cur - 1);
    });
  }
  if (dockPlus) {
    dockPlus.addEventListener('click', function (e) {
      e.preventDefault();
      var cur = parseInt(qtyInput ? qtyInput.value : '1', 10) || 1;
      updateQuantityAndPrice(cur + 1);
    });
  }

  // Dock "MUA NGAY" button opens checkout modal directly
  if (dockBuyNowBtn) {
    dockBuyNowBtn.addEventListener('click', function (e) {
      e.preventDefault();
      openModal();
    });
  }

  /* ============================================================
     7. STICKY FLOATING DOCK — show/hide based on hero btn position
     ============================================================ */
  if (buyFloatingDock && btnBuyNow) {
    window.addEventListener('scroll', function () {
      var rect = btnBuyNow.getBoundingClientRect();
      var footer = document.getElementById('bgFooter');
      var footerTop = footer ? footer.getBoundingClientRect().top : Infinity;

      // Show when hero "Mua Ngay" button has scrolled out of view upward
      var isPastBtn     = rect.bottom < 0;
      // Hide when approaching footer
      var isAboveFooter = footerTop > window.innerHeight - 80;

      if (isPastBtn && isAboveFooter) {
        buyFloatingDock.classList.add('visible');
        buyFloatingDock.setAttribute('aria-hidden', 'false');
      } else {
        buyFloatingDock.classList.remove('visible');
        buyFloatingDock.setAttribute('aria-hidden', 'true');
      }
    }, { passive: true });
  }

  /* ============================================================
     8. PRODUCT GALLERY THUMBNAIL SWITCHER
     ============================================================ */
  var mainProductImg = document.getElementById('mainProductImg');
  var thumbBtns = document.querySelectorAll('.buy-thumb-btn');

  thumbBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      thumbBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      var newSrc = btn.getAttribute('data-img');
      if (mainProductImg && newSrc) {
        // GSAP fade if available, else simple opacity transition
        if (typeof gsap !== 'undefined') {
          gsap.to(mainProductImg, {
            opacity: 0.25, scale: 0.97, duration: 0.15,
            onComplete: function () {
              mainProductImg.src = newSrc;
              gsap.to(mainProductImg, { opacity: 1, scale: 1, duration: 0.25, ease: 'power2.out' });
            }
          });
        } else {
          mainProductImg.style.opacity = '0.3';
          setTimeout(function () {
            mainProductImg.src = newSrc;
            mainProductImg.style.opacity = '1';
          }, 150);
        }
      }
    });
  });

  /* ============================================================
     9. PRODUCT IMAGE 3D TILT (mouse parallax)
     ============================================================ */
  var imgFrame = document.getElementById('productImgFrame');
  if (imgFrame && typeof gsap !== 'undefined') {
    imgFrame.addEventListener('mousemove', function (e) {
      var rect = imgFrame.getBoundingClientRect();
      var cx   = rect.width / 2;
      var cy   = rect.height / 2;
      var rx   = ((e.clientY - rect.top  - cy) / cy) * -12;
      var ry   = ((e.clientX - rect.left - cx) / cx) * 12;
      gsap.to(imgFrame, { rotateX: rx, rotateY: ry, transformPerspective: 1000, duration: 0.3, ease: 'power1.out' });
    });
    imgFrame.addEventListener('mouseleave', function () {
      gsap.to(imgFrame, { rotateX: 0, rotateY: 0, duration: 0.6, ease: 'power2.out' });
    });
  }

  /* ============================================================
     10. ACCORDIONS (Product Info & FAQ)
     ============================================================ */
  var accordions = document.querySelectorAll('.accordion-header, .buy-acc-header, .buy-faq-header');
  accordions.forEach(function (header) {
    header.addEventListener('click', function (e) {
      e.preventDefault();
      var targetId = header.getAttribute('data-target');
      var content  = document.getElementById(targetId);
      var isOpen   = header.classList.contains('open');

      if (isOpen) {
        header.classList.remove('open');
        if (content) content.classList.remove('open');
      } else {
        header.classList.add('open');
        if (content) content.classList.add('open');
      }
    });
  });

  // Auto-open first FAQ
  var firstFaq = document.querySelector('.buy-faq-header');
  if (firstFaq) {
    firstFaq.classList.add('open');
    var firstFaqContent = document.getElementById('faq1');
    if (firstFaqContent) firstFaqContent.classList.add('open');
  }

  /* ============================================================
     11. VOUCHER COPY TO CLIPBOARD
     ============================================================ */
  if (voucherCopyBtn) {
    voucherCopyBtn.addEventListener('click', function () {
      var code = voucherCopyBtn.textContent.trim();
      if (!navigator.clipboard) return;
      navigator.clipboard.writeText(code).then(function () {
        var orig = voucherCopyBtn.textContent;
        voucherCopyBtn.textContent = 'ĐÃ COPY!';
        voucherCopyBtn.style.color = '#10B981';
        voucherCopyBtn.style.borderColor = '#10B981';
        setTimeout(function () {
          voucherCopyBtn.textContent = orig;
          voucherCopyBtn.style.color = '';
          voucherCopyBtn.style.borderColor = '';
        }, 1800);
      }).catch(function () {});
    });
  }

  /* ============================================================
     12. FACEBOOK CONTACT BUTTON
     ============================================================ */
  if (btnContactFB) {
    btnContactFB.addEventListener('click', function (e) {
      e.preventDefault();
      window.open('https://facebook.com', '_blank', 'noopener,noreferrer');
    });
  }

  /* ============================================================
     13. REVIEWS PAGINATION
     ============================================================ */
  var pageBtns = document.querySelectorAll('.page-num-btn');
  pageBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      pageBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
    });
  });

  /* ============================================================
     14. GSAP SCROLLTRIGGER ANIMATIONS
     ============================================================ */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Hero — gallery and info columns slide in on load
    gsap.from('.buy-gallery-col', { y: 45, opacity: 0, duration: 0.9, ease: 'power2.out' });
    gsap.from(['.buy-category-tag', '.buy-product-title', '.buy-title-underline',
               '.buy-rating-row', '.buy-price-block', '.buy-voucher-box'],
      { y: 30, opacity: 0, stagger: 0.08, duration: 0.75, ease: 'power2.out', delay: 0.2 });

    // Features Strip
    gsap.from('.buy-feature-card', {
      scrollTrigger: { trigger: '.buy-features-strip', start: 'top 82%' },
      y: 35, opacity: 0, stagger: 0.12, duration: 0.8, ease: 'power2.out'
    });

    // Reviews — rating summary
    gsap.from('.rating-score-box', {
      scrollTrigger: { trigger: '.buy-rating-summary', start: 'top 80%' },
      scale: 0.88, opacity: 0, duration: 0.8, ease: 'back.out(1.4)'
    });

    // Reviews — progress bars animate from 0%
    gsap.from('.progress-bar-fill', {
      scrollTrigger: { trigger: '.rating-bars-box', start: 'top 82%' },
      scaleX: 0, transformOrigin: 'left center', stagger: 0.08, duration: 1.0, ease: 'power2.out'
    });

    // Reviews — cards cascade
    gsap.from('.buy-review-card', {
      scrollTrigger: { trigger: '.buy-review-list', start: 'top 80%' },
      y: 35, opacity: 0, stagger: 0.12, duration: 0.8, ease: 'power2.out'
    });

    // FAQ items
    gsap.from('.buy-faq-item', {
      scrollTrigger: { trigger: '.buy-faq-list', start: 'top 82%' },
      y: 25, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power2.out'
    });

    // Policy cards pop-in
    gsap.from('.buy-policy-card', {
      scrollTrigger: { trigger: '.buy-policies-section', start: 'top 82%' },
      scale: 0.88, y: 25, opacity: 0, stagger: 0.1, duration: 0.75, ease: 'back.out(1.5)'
    });

    // CTA Banner
    gsap.from(['.cta-headline', '.cta-subtext', '.cta-buy-btn'], {
      scrollTrigger: { trigger: '.buy-cta-banner', start: 'top 80%' },
      y: 30, opacity: 0, stagger: 0.12, duration: 0.85, ease: 'power2.out'
    });

    // Footer 3D cards
    gsap.from('.bg-illus-card', {
      scrollTrigger: { trigger: '.bg-footer-hero-cards-area', start: 'top 82%' },
      y: 40, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'back.out(1.3)'
    });
  }

  /* ============================================================
     INIT — run initial state
     ============================================================ */
  updateQuantityAndPrice(1);

})();
