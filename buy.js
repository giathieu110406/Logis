function initBuyPage() {
  console.log('Buy Page script initialized with animated components');

  // ── 1. MOBILE MENU TOGGLE ──
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileNav = document.getElementById('mobileNav');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileToggle.classList.toggle('active');
      mobileNav.classList.toggle('active');
    });
  }

  // ── 2. PRODUCT GALLERY THUMBNAIL SWITCHER ──
  const mainProductImg = document.getElementById('mainProductImg');
  const thumbBtns = document.querySelectorAll('.thumb-btn');

  thumbBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      thumbBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const newImgSrc = btn.getAttribute('data-img');
      if (mainProductImg && newImgSrc) {
        mainProductImg.style.opacity = '0.4';
        setTimeout(() => {
          mainProductImg.src = newImgSrc;
          mainProductImg.style.opacity = '1';
        }, 150);
      }
    });
  });

  // ── 3. QUANTITY PICKER & PRICE CALCULATOR ──
  const qtyInput = document.getElementById('qtyInput');
  const btnMinus = document.getElementById('btnMinus');
  const btnPlus = document.getElementById('btnPlus');
  const btnBuyNow = document.getElementById('btnBuyNow');
  const btnBuyNowText = document.getElementById('btnBuyNowText');
  const summaryQty = document.getElementById('summaryQty');
  const summarySubtotal = document.getElementById('summarySubtotal');
  const summaryTotal = document.getElementById('summaryTotal');

  const UNIT_PRICE = 340000;

  function updateQuantityAndPrice(newQty) {
    if (!qtyInput) return;
    let qty = parseInt(newQty) || 1;
    if (qty < 1) qty = 1;
    if (qty > 99) qty = 99;

    qtyInput.value = qty;
    const totalPrice = qty * UNIT_PRICE;
    const formattedPrice = totalPrice.toLocaleString('vi-VN') + ' ₫';

    if (btnBuyNowText) {
      btnBuyNowText.textContent = `MUA NGAY (${formattedPrice})`;
    } else if (btnBuyNow) {
      btnBuyNow.setAttribute('aria-label', `MUA NGAY (${formattedPrice})`);
    }

    if (summaryQty) summaryQty.textContent = qty;
    if (summarySubtotal) summarySubtotal.textContent = formattedPrice;
    if (summaryTotal) summaryTotal.textContent = formattedPrice;
  }

  if (btnMinus) {
    btnMinus.addEventListener('click', (e) => {
      e.preventDefault();
      const currentVal = parseInt(qtyInput.value) || 1;
      updateQuantityAndPrice(currentVal - 1);
    });
  }

  if (btnPlus) {
    btnPlus.addEventListener('click', (e) => {
      e.preventDefault();
      const currentVal = parseInt(qtyInput.value) || 1;
      updateQuantityAndPrice(currentVal + 1);
    });
  }

  // ── 4. ACCORDIONS (PRODUCT INFO & FAQS) ──
  const accordionHeaders = document.querySelectorAll('.accordion-header, .faq-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const targetId = header.getAttribute('data-target');
      const targetContent = document.getElementById(targetId);

      const isOpen = header.classList.contains('active');

      if (isOpen) {
        header.classList.remove('active');
        if (targetContent) targetContent.classList.remove('active');
      } else {
        header.classList.add('active');
        if (targetContent) targetContent.classList.add('active');
      }
    });
  });

  // Open first FAQ by default
  const firstFaqHeader = document.querySelector('.faq-header');
  if (firstFaqHeader) {
    firstFaqHeader.classList.add('active');
    const firstFaqContent = document.getElementById('faq1');
    if (firstFaqContent) firstFaqContent.classList.add('active');
  }

  // ── 5. ADD TO CART BUTTON ANIMATION (NAVBAR / SIDEBAR) ──
  const cartButtons = document.querySelectorAll('.nav-cart-btn[data-cart-button]');
  cartButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (btn.classList.contains('is-animating')) return;

      btn.classList.add('is-animating');
      setTimeout(() => {
        btn.classList.remove('is-animating');
        if (window.location.pathname.includes('buy.html')) {
          const heroSection = document.querySelector('.product-hero-section');
          if (heroSection) heroSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.href = 'buy.html';
        }
      }, 1800);
    });
  });

  // ── 6. DELIVERY TRUCK BUTTON & CHECKOUT MODAL ──
  const checkoutModal = document.getElementById('checkoutModal');
  const checkoutClose = document.getElementById('checkoutClose');
  const btnContactFB = document.getElementById('btnContactFB');
  const checkoutForm = document.getElementById('checkoutForm');
  const checkoutSuccessMsg = document.getElementById('checkoutSuccessMsg');
  const btnCloseSuccess = document.getElementById('btnCloseSuccess');

  if (btnBuyNow) {
    btnBuyNow.addEventListener('click', (e) => {
      e.preventDefault();
      if (btnBuyNow.classList.contains('is-animating')) return;

      // Play Truck Delivery animation
      btnBuyNow.classList.add('is-animating');

      // Open Modal after truck sequence
      setTimeout(() => {
        if (checkoutModal) checkoutModal.classList.add('active');
      }, 3500);

      // Reset button state after full animation cycle
      setTimeout(() => {
        btnBuyNow.classList.remove('is-animating');
      }, 8000);
    });
  }

  if (btnContactFB) {
    btnContactFB.addEventListener('click', (e) => {
      e.preventDefault();
      window.open('https://facebook.com', '_blank');
    });
  }

  if (checkoutClose && checkoutModal) {
    checkoutClose.addEventListener('click', () => {
      checkoutModal.classList.remove('active');
    });
  }

  if (checkoutModal) {
    checkoutModal.addEventListener('click', (e) => {
      if (e.target === checkoutModal) {
        checkoutModal.classList.remove('active');
      }
    });
  }

  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      checkoutForm.style.display = 'none';
      if (checkoutSuccessMsg) {
        checkoutSuccessMsg.style.display = 'block';
      }
    });
  }

  if (btnCloseSuccess && checkoutModal) {
    btnCloseSuccess.addEventListener('click', () => {
      checkoutModal.classList.remove('active');
      setTimeout(() => {
        if (checkoutForm) checkoutForm.style.display = 'block';
        if (checkoutSuccessMsg) checkoutSuccessMsg.style.display = 'none';
      }, 300);
    });
  }

  // ── 7. REVIEWS PAGINATION ──
  const pageBtns = document.querySelectorAll('.page-num-btn');
  pageBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      pageBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBuyPage);
} else {
  initBuyPage();
}
