const fs = require('fs');
const newCSS = `

/* ============================================================
   BUY PAGE — MARITIME ADVENTURE STYLE (Light Theme)
   Palette: Sky Blue #0EA5E9 + Gold #F59E0B + White #FFFFFF
   Matching exactly with index.html design system
   ============================================================ */

/* ── BUY PAGE BASE ── */
.buy-page-body {
  background-color: var(--bg-primary);
}

/* ── BREADCRUMB ── */
.buy-breadcrumb {
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
  padding-top: var(--header-height);
}
.breadcrumb-container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 500;
}
.bc-link {
  color: var(--color-sky-dark);
  text-decoration: none;
  transition: var(--transition-fast);
}
.bc-link:hover { color: var(--color-sky); }
.bc-sep { color: var(--text-muted); }
.bc-current { color: var(--text-muted); }

/* ── BUY MAIN CONTENT ── */
.buy-main-content {
  background: var(--bg-primary);
}

/* ── PRODUCT HERO SECTION ── */
.buy-product-hero {
  background: linear-gradient(160deg, var(--bg-primary) 0%, var(--color-sky-lightest) 60%, var(--color-sky-light) 100%);
  position: relative;
  padding-top: 40px;
  overflow: hidden;
}
.buy-hero-deco-top {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 60px;
  pointer-events: none;
}
.buy-hero-deco-top svg { width: 100%; height: 100%; }

.buy-hero-container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 24px 24px 60px;
}
.buy-hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}
@media (max-width: 900px) {
  .buy-hero-grid { grid-template-columns: 1fr; gap: 32px; }
}

/* ── GALLERY COL ── */
.buy-gallery-col { display: flex; flex-direction: column; gap: 16px; }

.buy-main-img-frame {
  position: relative;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
}

.buy-badge-freeship {
  position: absolute;
  top: 16px; left: 16px;
  z-index: 5;
  background: linear-gradient(135deg, var(--color-yellow) 0%, #F97316 100%);
  color: #fff;
  font-family: var(--font-body);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  padding: 6px 14px;
  border-radius: 40px;
  box-shadow: 0 4px 14px rgba(245,158,11,0.4);
  text-transform: uppercase;
}

.buy-img-glass-wrap {
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(12px);
  border: 1.5px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  padding: 24px;
  box-shadow: var(--shadow-lg);
  transition: box-shadow var(--transition-normal);
}
.buy-img-glass-wrap:hover { box-shadow: 0 20px 50px rgba(14,165,233,0.2); }

.buy-featured-img {
  width: 100%;
  height: 380px;
  object-fit: contain;
  transition: transform var(--transition-slow);
}
.buy-featured-img:hover { transform: scale(1.03); }

/* THUMBNAILS */
.buy-thumb-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.buy-thumb-btn {
  flex: 0 0 calc(20% - 8px);
  border-radius: var(--border-radius-md);
  border: 2px solid var(--border-color);
  overflow: hidden;
  cursor: pointer;
  padding: 4px;
  background: var(--bg-primary);
  transition: all var(--transition-fast);
}
.buy-thumb-btn img {
  width: 100%;
  height: 60px;
  object-fit: contain;
  display: block;
}
.buy-thumb-btn:hover,
.buy-thumb-btn.active {
  border-color: var(--color-sky);
  box-shadow: 0 0 0 2px rgba(14,165,233,0.25);
}

/* TRUST BADGES */
.buy-trust-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.buy-trust-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 40px;
  padding: 6px 14px;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-muted);
  white-space: nowrap;
}
.trust-icon { font-size: 0.9rem; }

/* ── INFO COL ── */
.buy-info-col { display: flex; flex-direction: column; gap: 20px; }

.buy-category-tag {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-sky-dark);
}
.cat-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--color-sky);
  display: inline-block;
}

.buy-product-title {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.1;
  color: var(--text-primary);
  letter-spacing: 1px;
}
.buy-product-title em {
  font-style: italic;
  color: var(--color-sky-dark);
  display: block;
}

.buy-title-underline {
  height: 3px;
  width: 80px;
  background: linear-gradient(90deg, var(--color-yellow), var(--color-sky));
  border-radius: 2px;
  margin-top: -10px;
}

/* RATING ROW */
.buy-rating-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-size: 0.85rem;
}
.rating-stars-gold { color: #F59E0B; font-size: 1.1rem; letter-spacing: 2px; }
.rating-score { font-weight: 700; color: var(--text-primary); }
.rating-count, .rating-sold { color: var(--text-muted); }

/* PRICING */
.buy-price-block {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.buy-price-current {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-red);
}
.buy-price-original {
  font-size: 1rem;
  color: var(--text-muted);
  text-decoration: line-through;
}
.buy-price-badge {
  background: linear-gradient(135deg, var(--color-red), #F97316);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 20px;
  letter-spacing: 0.5px;
}

/* VOUCHER BOX */
.buy-voucher-box {
  display: flex;
  gap: 0;
  background: linear-gradient(135deg, rgba(14,165,233,0.05) 0%, rgba(245,158,11,0.06) 100%);
  border: 1px dashed var(--border-sky);
  border-radius: var(--border-radius-md);
  overflow: hidden;
}
.voucher-left-accent {
  width: 6px;
  flex-shrink: 0;
  background: linear-gradient(180deg, var(--color-sky), var(--color-yellow));
}
.voucher-content {
  padding: 14px 16px;
  flex: 1;
}
.voucher-header-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--text-primary);
}
.voucher-fire { font-size: 1rem; }
.voucher-desc {
  font-family: var(--font-body);
  font-size: 0.82rem;
  color: var(--text-muted);
  margin: 0;
  line-height: 1.5;
}
.buy-voucher-code {
  display: inline-block;
  background: linear-gradient(135deg, var(--color-sky-lightest), var(--color-sky-light));
  border: 1px solid var(--color-sky);
  color: var(--color-sky-dark);
  font-family: monospace;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 2px 10px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: var(--transition-fast);
}
.buy-voucher-code:hover {
  background: var(--color-sky);
  color: #fff;
}

/* DESC BLOCK */
.buy-desc-block {
  background: var(--bg-primary);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--border-color);
  padding: 20px;
}
.buy-desc-heading {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-body);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--color-sky-dark);
  margin-bottom: 14px;
}
.desc-heading-line {
  width: 24px;
  height: 2px;
  background: var(--color-sky);
  display: inline-block;
  border-radius: 2px;
}
.buy-desc-text {
  font-family: var(--font-body);
  font-size: 0.875rem;
  line-height: 1.7;
  color: var(--text-muted);
}
.buy-desc-text p { margin-bottom: 10px; }
.buy-desc-text .desc-conclusion {
  font-style: italic;
  color: var(--color-sky-dark);
  font-weight: 500;
}
.buy-story-link {
  display: inline-block;
  margin-top: 12px;
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--color-sky);
  text-decoration: none;
  letter-spacing: 0.5px;
  transition: var(--transition-fast);
}
.buy-story-link:hover { color: var(--color-yellow); }

/* ACCORDIONS */
.buy-accordions { display: flex; flex-direction: column; gap: 8px; }
.buy-acc-item {
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  transition: border-color var(--transition-fast);
}
.buy-acc-item:hover { border-color: var(--color-sky); }

.buy-acc-header {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  background: var(--bg-secondary);
  border: none;
  cursor: pointer;
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
  text-align: left;
  transition: background var(--transition-fast);
}
.buy-acc-header:hover { background: var(--color-sky-light); }
.buy-acc-header .acc-icon { margin-left: auto; color: var(--color-sky); transition: transform var(--transition-fast); }
.buy-acc-header.open .acc-icon { transform: rotate(180deg); }
.acc-icon-ship { font-size: 1rem; }

.buy-acc-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease, padding 0.35s ease;
}
.buy-acc-content.open { max-height: 500px; }

.buy-spec-list {
  list-style: none;
  padding: 16px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.buy-spec-list li {
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.5;
  padding-left: 16px;
  position: relative;
}
.buy-spec-list li::before {
  content: "⚓";
  font-size: 0.7rem;
  position: absolute;
  left: 0;
  top: 2px;
}
.spec-key {
  font-weight: 600;
  color: var(--text-primary);
}

/* QUANTITY */
.buy-qty-wrapper {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
.buy-qty-label {
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
}
.buy-qty-picker {
  display: flex;
  align-items: center;
  border: 1.5px solid var(--border-sky);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}
.qty-btn {
  width: 40px; height: 40px;
  background: var(--bg-secondary);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-sky-dark);
  transition: background var(--transition-fast);
}
.qty-btn:hover { background: var(--color-sky-light); }
.qty-input {
  width: 56px; height: 40px;
  border: none;
  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  text-align: center;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 1rem;
  color: var(--text-primary);
  background: var(--bg-primary);
  outline: none;
}
.buy-qty-stock {
  font-family: var(--font-body);
  font-size: 0.8rem;
  color: #16A34A;
  font-weight: 600;
}

/* BUY ACTION BUTTONS */
.buy-action-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.buy-btn-fb {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px 24px;
  border: 1.5px solid #1877F2;
  border-radius: var(--border-radius-sm);
  background: transparent;
  color: #1877F2;
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
  letter-spacing: 0.5px;
}
.buy-btn-fb:hover {
  background: #1877F2;
  color: #fff;
}

/* ── WAVE BOTTOM ── */
.buy-hero-wave-bottom {
  margin-top: -2px;
  pointer-events: none;
}
.buy-hero-wave-bottom svg { width: 100%; display: block; }

/* ── FEATURES STRIP ── */
.buy-features-strip {
  background: var(--bg-secondary);
  padding: 60px 24px;
}
.buy-features-container {
  max-width: var(--container-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
@media (max-width: 900px) {
  .buy-features-container { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 500px) {
  .buy-features-container { grid-template-columns: 1fr; }
}
.buy-feature-card {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  padding: 28px 20px;
  text-align: center;
  transition: all var(--transition-normal);
  cursor: default;
}
.buy-feature-card:hover {
  border-color: var(--color-sky);
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}
.feature-icon-wrap {
  font-size: 2rem;
  margin-bottom: 12px;
  display: block;
}
.buy-feature-card h4 {
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.buy-feature-card p {
  font-family: var(--font-body);
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.5;
}

/* ── SECTION SHARED HEADERS ── */
.buy-section-header { text-align: center; margin-bottom: 40px; }
.buy-section-title {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: 2px;
  margin-bottom: 12px;
}
.buy-section-underline {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--color-yellow), var(--color-sky));
  border-radius: 2px;
  margin: 0 auto 12px;
}
.buy-section-sub {
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--text-muted);
}

/* ── REVIEWS SECTION ── */
.buy-reviews-section {
  background: var(--bg-primary);
  padding: 80px 24px;
}
.buy-reviews-container {
  max-width: var(--container-width);
  margin: 0 auto;
}
.buy-rating-summary {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 40px;
  align-items: center;
  background: var(--bg-secondary);
  border-radius: var(--border-radius-lg);
  padding: 32px;
  margin-bottom: 40px;
  border: 1px solid var(--border-color);
}
@media (max-width: 600px) {
  .buy-rating-summary { grid-template-columns: 1fr; }
}
.rating-score-box { text-align: center; }
.rating-big-num {
  font-family: var(--font-display);
  font-size: 4rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1;
}
.rating-stars-big { color: #F59E0B; font-size: 1.4rem; letter-spacing: 3px; margin: 8px 0; }
.rating-count-text {
  font-family: var(--font-body);
  font-size: 0.8rem;
  color: var(--text-muted);
}
.rating-bars-box { display: flex; flex-direction: column; gap: 10px; }
.bar-row {
  display: grid;
  grid-template-columns: 50px 1fr 40px;
  gap: 10px;
  align-items: center;
}
.star-label { font-family: var(--font-body); font-size: 0.8rem; color: var(--text-muted); }
.progress-bar-bg {
  background: var(--color-sky-light);
  border-radius: 10px;
  height: 8px;
  overflow: hidden;
}
.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-yellow), var(--color-sky));
  border-radius: 10px;
  transition: width 0.8s ease;
}
.bar-pct { font-family: var(--font-body); font-size: 0.75rem; color: var(--text-muted); text-align: right; }

/* REVIEW LIST */
.buy-review-list { display: flex; flex-direction: column; gap: 20px; margin-bottom: 32px; }
.buy-review-card {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  padding: 24px;
  transition: box-shadow var(--transition-fast);
}
.buy-review-card:hover { box-shadow: var(--shadow-md); }
.review-header-row {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
}
.reviewer-avatar {
  width: 42px; height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-sky-dark), var(--color-sky));
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 1rem;
  flex-shrink: 0;
}
.reviewer-meta { flex: 1; }
.reviewer-name { font-family: var(--font-body); font-size: 0.9rem; font-weight: 700; color: var(--text-primary); }
.stars-gold { color: #F59E0B; font-size: 0.85rem; margin-top: 2px; }
.review-time { font-family: var(--font-body); font-size: 0.78rem; color: var(--text-muted); white-space: nowrap; }
.review-text { font-family: var(--font-body); font-size: 0.875rem; color: var(--text-muted); line-height: 1.6; }
.review-text p { margin-bottom: 8px; }
.review-photos { display: flex; gap: 8px; margin-top: 14px; flex-wrap: wrap; }
.review-photos img {
  width: 80px; height: 80px;
  object-fit: cover;
  border-radius: var(--border-radius-sm);
  border: 1.5px solid var(--border-color);
  cursor: pointer;
  transition: border-color var(--transition-fast);
}
.review-photos img:hover { border-color: var(--color-sky); }

/* REVIEW PAGINATION */
.buy-review-pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
}
.page-nav-btn, .page-num-btn {
  width: 38px; height: 38px;
  border-radius: 8px;
  border: 1.5px solid var(--border-color);
  background: var(--bg-primary);
  color: var(--text-muted);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all var(--transition-fast);
}
.page-nav-btn:disabled { opacity: 0.4; cursor: not-allowed; }
.page-num-btn:hover:not(:disabled), .page-num-btn.active {
  background: var(--color-sky);
  border-color: var(--color-sky);
  color: #fff;
}

/* ── FAQ SECTION ── */
.buy-faq-section {
  background: var(--bg-secondary);
  padding: 80px 24px;
}
.buy-faq-container {
  max-width: 760px;
  margin: 0 auto;
}
.buy-faq-list { display: flex; flex-direction: column; gap: 12px; }
.buy-faq-item {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  transition: border-color var(--transition-fast);
}
.buy-faq-item:hover { border-color: var(--color-sky); }
.buy-faq-header {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  text-align: left;
}
.buy-faq-header .acc-icon { margin-left: auto; color: var(--color-sky); transition: transform var(--transition-fast); }
.buy-faq-header.open .acc-icon { transform: rotate(180deg); }
.faq-q-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px; height: 26px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-sky-lightest), var(--color-sky-light));
  border: 1px solid var(--color-sky);
  color: var(--color-sky-dark);
  font-family: var(--font-body);
  font-weight: 800;
  font-size: 0.75rem;
  flex-shrink: 0;
}
.buy-faq-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease;
}
.buy-faq-content.open { max-height: 300px; }
.buy-faq-content p {
  padding: 0 20px 18px;
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.7;
}

/* ── POLICIES SECTION ── */
.buy-policies-section {
  background: var(--bg-primary);
  padding: 80px 24px;
}
.buy-policies-container {
  max-width: var(--container-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
@media (max-width: 900px) {
  .buy-policies-container { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 500px) {
  .buy-policies-container { grid-template-columns: 1fr; }
}
.buy-policy-card {
  text-align: center;
  padding: 32px 20px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  transition: all var(--transition-normal);
}
.buy-policy-card:hover {
  border-color: var(--color-sky);
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  background: var(--bg-primary);
}
.policy-icon-wrap {
  font-size: 2.5rem;
  margin-bottom: 14px;
  display: block;
  filter: drop-shadow(0 2px 8px rgba(14,165,233,0.2));
}
.policy-title {
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
}
.policy-desc {
  font-family: var(--font-body);
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.5;
}

/* ── CTA BANNER ── */
.buy-cta-banner {
  background: linear-gradient(135deg, var(--color-sky-deep) 0%, var(--color-sky) 50%, #0EA5E9 100%);
  padding: 80px 24px;
  position: relative;
  overflow: hidden;
}
.buy-cta-banner::before {
  content: "";
  position: absolute;
  top: -50%; left: -20%;
  width: 500px; height: 500px;
  border-radius: 50%;
  background: rgba(255,255,255,0.05);
  pointer-events: none;
}
.buy-cta-inner {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}
.cta-headline {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
  font-style: italic;
}
.cta-subtext {
  font-family: var(--font-body);
  font-size: 1rem;
  color: rgba(255,255,255,0.85);
  margin-bottom: 32px;
  line-height: 1.6;
}
.cta-buy-btn {
  font-size: 1rem;
  padding: 18px 40px;
  background: linear-gradient(135deg, var(--color-yellow) 0%, #F97316 100%);
  color: #fff;
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(245,158,11,0.5);
  transition: all var(--transition-fast);
}
.cta-buy-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(245,158,11,0.6);
}

/* ── CHECKOUT MODAL UPDATES ── */
.checkout-modal-icon {
  font-size: 2rem;
  margin-bottom: 8px;
}
.modal-title-blue {
  font-family: var(--font-display);
  font-size: 1.6rem;
  color: var(--color-sky-deep);
  letter-spacing: 1px;
  margin-bottom: 6px;
}
.total-price-blue {
  font-size: 1.2rem;
  color: var(--color-sky-dark);
  font-weight: 700;
}

/* ── ACCORDION CONTENT (shared selector used in buy.html) ── */
.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease;
}
.accordion-content.open {
  max-height: 600px;
}

/* FORM UPDATES */
.form-group label {
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-secondary);
  display: block;
  margin-bottom: 6px;
}
.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 10px 14px;
  border: 1.5px solid var(--border-color);
  border-radius: var(--border-radius-sm);
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: var(--text-primary);
  background: var(--bg-primary);
  outline: none;
  transition: border-color var(--transition-fast);
}
.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  border-color: var(--color-sky);
  box-shadow: 0 0 0 3px rgba(14,165,233,0.15);
}
.form-row-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
@media (max-width: 500px) {
  .form-row-grid { grid-template-columns: 1fr; }
}
.checkout-summary-box {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  padding: 16px;
  margin: 16px 0;
}
.summary-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: var(--text-muted);
  border-bottom: 1px solid rgba(14,165,233,0.1);
}
.summary-line:last-child { border-bottom: none; }
.total-line {
  font-weight: 700;
  color: var(--text-primary);
  padding-top: 10px;
  margin-top: 4px;
  font-size: 0.95rem;
}
.text-green { color: #16A34A; }
.btn-submit-order {
  width: 100%;
  padding: 14px;
  font-size: 0.95rem;
  margin-top: 8px;
}
.checkout-success-msg {
  text-align: center;
  padding: 32px;
}
.checkout-success-msg .success-icon { font-size: 3rem; margin-bottom: 12px; }
.checkout-success-msg h3 {
  font-family: var(--font-display);
  font-size: 1.6rem;
  color: var(--color-sky-deep);
  margin-bottom: 12px;
}
.checkout-success-msg p {
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 20px;
}

/* ── CHECKOUT MODAL (BUY PAGE) ── */
.checkout-modal-card {
  max-width: 560px;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: var(--border-radius-lg);
}
.checkout-modal-header {
  text-align: center;
  padding: 24px 24px 12px;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 20px;
}
.checkout-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.modal-sub-text {
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 4px;
}
`;

const cssFile = 'styles.css';
const existing = fs.readFileSync(cssFile, 'utf8');
// Remove any old buy-page CSS that might exist
const startMarker = '/* ============================================================\n   BUY PAGE — MARITIME ADVENTURE STYLE';
const oldIdx = existing.indexOf(startMarker);
let base = oldIdx >= 0 ? existing.substring(0, oldIdx) : existing;
// Trim trailing whitespace and add new CSS
base = base.trimEnd() + '\n' + newCSS;
fs.writeFileSync(cssFile, base, 'utf8');
console.log('CSS appended. New file size:', base.length, 'bytes');
