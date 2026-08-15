import os, sys

html = """<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mua Bo Bai - LogisQuest Board Game</title>
  <meta name="description" content="Trang mua hang chinh thuc Bo Bai Quy Chien — LogisQuest Board Game. Dat mua ngay de nhan uu dai giam 40k va Freeship toan quoc.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,600&family=Montserrat:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Syne:wght@700;800&display=swap" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
  <link rel="icon" type="image/png" href="assets/logo.png">
  <link rel="shortcut icon" type="image/png" href="assets/logo.png">
  <link rel="stylesheet" href="styles.css">
</head>
<body class="buy-page-body">

  <!-- HEADER (identical to index.html) -->
  <header class="main-header" id="header">
    <div class="header-container">
      <a href="index.html" class="logo-area">
        <img src="assets/logo.png" alt="LogisQuest Logo" class="site-logo">
        <span class="logo-text">LOGISQUEST<span class="sub-logo">BOARD GAME</span></span>
      </a>
      <nav class="nav-menu" id="navMenu">
        <a href="index.html#home" class="nav-link">Trang Chu</a>
        <div class="nav-dropdown">
          <a href="index.html#about" class="nav-link dropdown-toggle">Gioi Thieu <span class="dropdown-caret">&#9662;</span></a>
          <div class="dropdown-menu">
            <a href="index.html#about" class="dropdown-item"><span class="dropdown-icon">&#128216;</span> Ve LogisQuest</a>
            <a href="index.html#team" class="dropdown-item"><span class="dropdown-icon">&#128101;</span> Doi Ngu Sang Tao</a>
          </div>
        </div>
        <a href="index.html#gameplay" class="nav-link">Cach Choi</a>
        <a href="index.html#cards" class="nav-link">The Bai</a>
      </nav>
      <div class="header-actions">
        <button class="cart-button nav-cart-btn" data-cart-button type="button" aria-label="Add item to cart" onclick="document.getElementById('btnBuyNow').scrollIntoView({behavior:'smooth',block:'center'}); setTimeout(()=>document.getElementById('btnBuyNow').click(),400);">
          <span class="cart-button__stage" aria-hidden="true">
            <span class="cart-button__label">Mua ngay</span>
            <svg class="cart-button__cart" viewBox="0 0 32 32"><path class="cart-button__basket-fill" d="M9.2 11.2h17.3l-2.1 8.5H11.3z"/><path d="M3.8 6.2h3.5l3.2 14.1a2.1 2.1 0 0 0 2.1 1.7h11.5a2.1 2.1 0 0 0 2-1.5l2.1-8.6H9.1"/><path d="M13.1 26.2h.1M23.4 26.2h.1"/><path class="cart-button__check" d="m14.1 15.7 2.1 2.1 4.3-4.6"/></svg>
          </span>
          <svg class="cart-button__shirt" aria-hidden="true" viewBox="0 0 32 32"><path d="M10.6 5.1 13 3.8c.7 1.5 1.7 2.2 3 2.2s2.3-.7 3-2.2l2.4 1.3 5.2 5-3.9 4-2.1-1.8V28h-9.2V12.3l-2.1 1.8-3.9-4z"/></svg>
        </button>
        <button class="mobile-toggle" id="mobileToggle" aria-label="Toggle Menu"><span></span><span></span><span></span></button>
      </div>
    </div>
  </header>

  <!-- MOBILE NAV -->
  <div class="mobile-nav" id="mobileNav">
    <a href="index.html#home" class="mobile-link">Trang Chu</a>
    <div class="mobile-dropdown-group">
      <span class="mobile-group-title">Gioi Thieu</span>
      <a href="index.html#about" class="mobile-link mobile-sub-link">&#8212; Ve LogisQuest</a>
      <a href="index.html#team" class="mobile-link mobile-sub-link">&#8212; Doi Ngu Sang Tao</a>
    </div>
    <a href="index.html#gameplay" class="mobile-link">Cach Choi</a>
    <a href="index.html#cards" class="mobile-link">The Bai</a>
    <button class="cart-button nav-cart-btn" data-cart-button type="button" aria-label="Add item to cart" style="margin-top:10px;" onclick="document.getElementById('btnBuyNow').scrollIntoView({behavior:'smooth',block:'center'}); setTimeout(()=>document.getElementById('btnBuyNow').click(),400);">
      <span class="cart-button__stage" aria-hidden="true">
        <span class="cart-button__label">Mua ngay</span>
        <svg class="cart-button__cart" viewBox="0 0 32 32"><path class="cart-button__basket-fill" d="M9.2 11.2h17.3l-2.1 8.5H11.3z"/><path d="M3.8 6.2h3.5l3.2 14.1a2.1 2.1 0 0 0 2.1 1.7h11.5a2.1 2.1 0 0 0 2-1.5l2.1-8.6H9.1"/><path d="M13.1 26.2h.1M23.4 26.2h.1"/><path class="cart-button__check" d="m14.1 15.7 2.1 2.1 4.3-4.6"/></svg>
      </span>
      <svg class="cart-button__shirt" aria-hidden="true" viewBox="0 0 32 32"><path d="M10.6 5.1 13 3.8c.7 1.5 1.7 2.2 3 2.2s2.3-.7 3-2.2l2.4 1.3 5.2 5-3.9 4-2.1-1.8V28h-9.2V12.3l-2.1 1.8-3.9-4z"/></svg>
    </button>
  </div>

  <!-- BREADCRUMB -->
  <nav class="buy-breadcrumb" aria-label="Breadcrumb">
    <div class="breadcrumb-container">
      <a href="index.html" class="bc-link">Trang chu</a>
      <span class="bc-sep">&#8250;</span>
      <a href="index.html#cards" class="bc-link">San pham</a>
      <span class="bc-sep">&#8250;</span>
      <span class="bc-current">Bo Bai Quy Chien</span>
    </div>
  </nav>

  <main class="buy-main-content">

    <!-- S1: PRODUCT HERO -->
    <section class="buy-product-hero">
      <div class="buy-hero-deco-top">
        <svg viewBox="0 0 1400 60" preserveAspectRatio="none" fill="none"><path d="M0 30 C 350 55, 700 5, 1050 40, 1400 15 L1400 60 L0 60 Z" fill="rgba(14,165,233,0.06)"/></svg>
      </div>
      <div class="buy-hero-container">
        <div class="buy-hero-grid">
          <!-- GALLERY COL -->
          <div class="buy-gallery-col">
            <div class="buy-main-img-frame">
              <div class="buy-badge-freeship">FREESHIP &amp; GIAM 40K</div>
              <div class="buy-img-glass-wrap">
                <img src="assets/product-box-3d.png" alt="Bo Bai Quy Chien" id="mainProductImg" class="buy-featured-img">
              </div>
            </div>
            <div class="buy-thumb-row" id="thumbnailRow">
              <button class="buy-thumb-btn active" data-img="assets/product-box-3d.png"><img src="assets/product-box-3d.png" alt="Hop 3D"></button>
              <button class="buy-thumb-btn" data-img="assets/hero-card.png"><img src="assets/hero-card.png" alt="The Bai"></button>
              <button class="buy-thumb-btn" data-img="assets/product-workshop.png"><img src="assets/product-workshop.png" alt="HDSD"></button>
              <button class="buy-thumb-btn" data-img="assets/bg-gameplay.png"><img src="assets/bg-gameplay.png" alt="Ban Choi"></button>
              <button class="buy-thumb-btn" data-img="assets/product-box.png"><img src="assets/product-box.png" alt="Hop Game"></button>
            </div>
            <div class="buy-trust-row">
              <div class="buy-trust-badge"><span class="trust-icon">&#128737;</span><span>Chinh hang 100%</span></div>
              <div class="buy-trust-badge"><span class="trust-icon">&#128260;</span><span>Doi tra 7 ngay</span></div>
              <div class="buy-trust-badge"><span class="trust-icon">&#9889;</span><span>Giao trong 24h</span></div>
            </div>
          </div>

          <!-- INFO COL -->
          <div class="buy-info-col">
            <div class="buy-category-tag"><span class="cat-dot"></span>Board Game &middot; Chien Thuat &middot; Van Tai</div>
            <h1 class="buy-product-title">BO BAI<br><em>QUY CHIEN</em></h1>
            <div class="buy-title-underline"></div>
            <div class="buy-rating-row">
              <span class="rating-stars-gold">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span class="rating-score">4.8</span>
              <span class="rating-count">&bull; 11 danh gia</span>
              <span class="rating-sold">| Da ban: <strong>250+</strong></span>
            </div>
            <div class="buy-price-block">
              <span class="buy-price-current" id="buyPriceCurrent">340.000 &#8363;</span>
              <span class="buy-price-original">400.000 &#8363;</span>
              <span class="buy-price-badge">-15%</span>
            </div>
            <div class="buy-voucher-box">
              <div class="voucher-left-accent"></div>
              <div class="voucher-content">
                <div class="voucher-header-row"><span class="voucher-fire">&#128293;</span><strong>Freeship toan quoc &amp; Giam gia mua he 2026</strong></div>
                <p class="voucher-desc">Gia san pham da tu dong giam 40k. Ap dung voucher <code class="buy-voucher-code" id="voucherCopyBtn" title="Click de copy">SHIP15</code> de Freeship toan quoc.</p>
              </div>
            </div>
            <div class="buy-desc-block">
              <h3 class="buy-desc-heading"><span class="desc-heading-line"></span>MO TA SAN PHAM</h3>
              <div class="buy-desc-text">
                <p>Vuc Tham Am Hon mo ra canh cong giua nguoi va quy, noi truyen thuyet dan gian Viet Nam song lai trong hinh hai moi day hien dai va am anh. Moi nhan vat la mot manh linh hon co xua duoc tai sinh, mang theo suc manh va bi an vuot ngoai hieu biet cua con nguoi.</p>
                <p>Tuong truyen ngan nam truoc, Thien Su To da phong an Am Gioi Thu, cuon sach chua hang tram yeu ta cung nhung hinh thuc huyet te bi nguyen rua. Khi phong an tan ra, phap su khap noi do ve, ke tim quyen nang, nguoi cau bao thu, tat ca deu bi cuon vao vong xoay cua bong toi.</p>
                <p class="desc-conclusion">Cuoi cung, chi mot nguoi co the dung giua tro tan, nam trong tay quyen nang tuyet doi. Nhung khi co the dieu khien ca nhan gian lan quy gioi, lieu han con la con nguoi, hay da tro thanh mot phan cua vuc tham?</p>
              </div>
              <a href="index.html#gameplay" class="buy-story-link">Chi tiet loi choi xem tai day &#10141;</a>
            </div>

            <!-- ACCORDIONS -->
            <div class="buy-accordions">
              <div class="buy-acc-item">
                <button class="buy-acc-header accordion-header" data-target="accProductInfo">
                  <span class="acc-icon-ship">&#9875;</span><span>Thong tin san pham</span><span class="acc-icon">&#9662;</span>
                </button>
                <div class="buy-acc-content accordion-content" id="accProductInfo">
                  <ul class="buy-spec-list">
                    <li><span class="spec-key">Kich thuoc hop:</span> 20 x 15 x 5 cm (Chong va dap)</li>
                    <li><span class="spec-key">Chat lieu la bai:</span> Giay boi 350gsm cao cap can mang mo muot tay, chong nuoc nhe</li>
                    <li><span class="spec-key">So luong the:</span> 106 The bai chien thuat in mau sac net</li>
                    <li><span class="spec-key">Phu kien di kem:</span> 1 Xuc xac custom, 20 Token the luc, 1 Sach HDSD in mau</li>
                    <li><span class="spec-key">Do tuoi phu hop:</span> 12+ (Phu hop 2 - 6 nguoi choi)</li>
                  </ul>
                </div>
              </div>
              <div class="buy-acc-item">
                <button class="buy-acc-header accordion-header" data-target="accComponents">
                  <span class="acc-icon-ship">&#127924;</span><span>Thanh phan bo bai</span><span class="acc-icon">&#9662;</span>
                </button>
                <div class="buy-acc-content accordion-content" id="accComponents">
                  <ul class="buy-spec-list">
                    <li>11 The Incoterm hai trinh quoc te</li>
                    <li>35 The Phuong Tien van tai (Tau hang, Xe container, May bay cargo)</li>
                    <li>40 The Su Kien &amp; Rui ro cang bien</li>
                    <li>20 The Cho thuong mai</li>
                    <li>1 Xuc Xac 6 mat huyen bi &amp; 20 Token linh hon</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- QUANTITY -->
            <div class="buy-qty-wrapper">
              <label for="qtyInput" class="buy-qty-label">So luong</label>
              <div class="buy-qty-picker">
                <button type="button" class="qty-btn" id="btnMinus" aria-label="Giam so luong"><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none"><line x1="5" y1="12" x2="19" y2="12"/></svg></button>
                <input type="number" id="qtyInput" class="qty-input" value="1" min="1" max="99" readonly>
                <button type="button" class="qty-btn" id="btnPlus" aria-label="Tang so luong"><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button>
              </div>
              <span class="buy-qty-stock">&#128230; Con hang - Giao trong 24h</span>
            </div>

            <!-- BUY BUTTONS -->
            <div class="buy-action-group">
              <button class="order-button product-delivery-btn" id="btnBuyNow" type="button" aria-label="MUA NGAY">
                <span class="button-label button-label--default" id="btnBuyNowText">MUA NGAY (340.000 &#8363;)</span>
                <span class="button-label button-label--success">DA DAT HANG!<span class="checkmark" aria-hidden="true"></span></span>
                <span class="package" aria-hidden="true"></span>
                <span class="truck" aria-hidden="true">
                  <span class="truck__cargo"></span>
                  <span class="truck__cab"><span class="truck__window"></span></span>
                  <span class="truck__light truck__light--top"></span>
                  <span class="truck__light truck__light--bottom"></span>
                </span>
                <span class="road" aria-hidden="true"></span>
              </button>
              <button class="buy-btn-fb" id="btnContactFB">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M13.86 22v-8.45h2.84l.43-3.3h-3.27V8.14c0-.96.27-1.61 1.64-1.61h1.75V3.58a23.4 23.4 0 0 0-2.55-.13c-2.52 0-4.25 1.54-4.25 4.36v2.44H7.6v3.3h2.85V22h3.41Z"/></svg>
                Nhan tin Preorder qua Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="buy-hero-wave-bottom">
        <svg viewBox="0 0 1400 80" preserveAspectRatio="none" fill="none"><path d="M0 40 C 350 70, 700 10, 1050 55, 1400 25 L1400 80 L0 80 Z" fill="var(--bg-secondary)"/></svg>
      </div>
    </section>

    <!-- S2: FEATURES -->
    <section class="buy-features-strip">
      <div class="buy-features-container">
        <div class="buy-feature-card"><div class="feature-icon-wrap">&#127919;</div><h4>Chien thuat sau sac</h4><p>Ket hop Incoterms 2020 voi gameplay dinh cao, phu hop moi trinh do</p></div>
        <div class="buy-feature-card"><div class="feature-icon-wrap">&#127912;</div><h4>Artwork doc quyen</h4><p>106 the bai voi hinh anh truyen thuyet Viet Nam duoc ve tay hoan toan</p></div>
        <div class="buy-feature-card"><div class="feature-icon-wrap">&#128101;</div><h4>2 - 6 nguoi choi</h4><p>Thiet ke toi uu cho ca nhom nho va gia dinh lon, moi van khoang 60-90 phut</p></div>
        <div class="buy-feature-card"><div class="feature-icon-wrap">&#127942;</div><h4>Chat lieu premium</h4><p>In an 350gsm, can mang mo chong nuoc, hop cung chong va dap</p></div>
      </div>
    </section>

    <!-- S3: REVIEWS -->
    <section class="buy-reviews-section">
      <div class="buy-reviews-container">
        <div class="buy-section-header">
          <h2 class="buy-section-title">DANH GIA SAN PHAM</h2>
          <div class="buy-section-underline"></div>
          <p class="buy-section-sub">Phan hoi thuc te tu nguoi choi</p>
        </div>
        <div class="buy-rating-summary">
          <div class="rating-score-box">
            <div class="rating-big-num">4.8</div>
            <div class="rating-stars-big">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <div class="rating-count-text">11 Danh gia</div>
          </div>
          <div class="rating-bars-box">
            <div class="bar-row"><span class="star-label">5 &#9733;</span><div class="progress-bar-bg"><div class="progress-bar-fill" style="width:85%;"></div></div><span class="bar-pct">85%</span></div>
            <div class="bar-row"><span class="star-label">4 &#9733;</span><div class="progress-bar-bg"><div class="progress-bar-fill" style="width:10%;"></div></div><span class="bar-pct">10%</span></div>
            <div class="bar-row"><span class="star-label">3 &#9733;</span><div class="progress-bar-bg"><div class="progress-bar-fill" style="width:5%;"></div></div><span class="bar-pct">5%</span></div>
            <div class="bar-row"><span class="star-label">2 &#9733;</span><div class="progress-bar-bg"><div class="progress-bar-fill" style="width:0%;"></div></div><span class="bar-pct">0%</span></div>
            <div class="bar-row"><span class="star-label">1 &#9733;</span><div class="progress-bar-bg"><div class="progress-bar-fill" style="width:0%;"></div></div><span class="bar-pct">0%</span></div>
          </div>
        </div>
        <div class="buy-review-list">
          <div class="buy-review-card"><div class="review-header-row"><div class="reviewer-avatar">H</div><div class="reviewer-meta"><strong class="reviewer-name">Ha Phuong</strong><div class="stars-gold">&#9733;&#9733;&#9733;&#9733;&#9733;</div></div><span class="review-time">8 thang truoc</span></div><p class="review-text">Art sieu dep iiiii, san pham moi nen minh mua thu ma ngoai ki vong. The bai so chac tay, minh moi tap tanh choi boardgame ma thay cuon. 2 ngay da nhan duoc hang.</p></div>
          <div class="buy-review-card"><div class="review-header-row"><div class="reviewer-avatar">T</div><div class="reviewer-meta"><strong class="reviewer-name">Trung Nam</strong><div class="stars-gold">&#9733;&#9733;&#9733;&#9733;&#9733;</div></div><span class="review-time">8 thang truoc</span></div><div class="review-text"><p><strong>DIEM CONG:</strong> Art rat dep, cai nay mien che. Gameplay de choi, newbie cung choi hieu duoc.</p><p><strong>DIEM TRU:</strong> Gameplay de nen ban minh me boardgame thay chua du wow =]]]</p></div><div class="review-photos"><img src="assets/product-box-3d.png" alt="Anh thuc te"></div></div>
          <div class="buy-review-card"><div class="review-header-row"><div class="reviewer-avatar">H</div><div class="reviewer-meta"><strong class="reviewer-name">Huy Nguyen</strong><div class="stars-gold">&#9733;&#9733;&#9733;&#9733;&#9733;</div></div><span class="review-time">8 thang truoc</span></div><p class="review-text">Giao hang toc do vch, dong goi can than, on ap lam nhe. Feedback lay voucher :)))</p><div class="review-photos"><img src="assets/hero-card.png" alt="Anh don hang"></div></div>
          <div class="buy-review-card"><div class="review-header-row"><div class="reviewer-avatar">H</div><div class="reviewer-meta"><strong class="reviewer-name">Huu Tai</strong><div class="stars-gold">&#9733;&#9733;&#9733;&#9733;&#9733;</div></div><span class="review-time">8 thang truoc</span></div><p class="review-text">Anh the bai dep vch y, nhin da muon choi. Shop tu van kha ky. Mong shop se ra them ban mo rong.</p></div>
          <div class="buy-review-card"><div class="review-header-row"><div class="reviewer-avatar">T</div><div class="reviewer-meta"><strong class="reviewer-name">Tuan Minh</strong><div class="stars-gold">&#9733;&#9733;&#9733;&#9733;&#9733;</div></div><span class="review-time">8 thang truoc</span></div><p class="review-text">San pham moi nhung shop tu van kha nhiet tinh, san pham thiet ke dep va bat mat. Khi nao choi nhieu se danh gia them.</p></div>
        </div>
        <div class="buy-review-pagination">
          <button class="page-nav-btn" disabled>&lt;</button>
          <button class="page-num-btn active">1</button>
          <button class="page-num-btn">2</button>
          <button class="page-num-btn">3</button>
          <button class="page-nav-btn">&gt;</button>
        </div>
      </div>
    </section>

    <!-- S4: FAQ -->
    <section class="buy-faq-section">
      <div class="buy-faq-container">
        <div class="buy-section-header">
          <h2 class="buy-section-title">CAU HOI THUONG GAP</h2>
          <div class="buy-section-underline"></div>
        </div>
        <div class="buy-faq-list">
          <div class="buy-faq-item"><button class="buy-faq-header accordion-header" data-target="faq1"><span class="faq-q-icon">Q</span><span>San pham co dam bao chat luong khong?</span><span class="acc-icon">&#9662;</span></button><div class="buy-faq-content accordion-content" id="faq1"><p>Tat ca san pham Quy Chien deu duoc in an tren chat lieu giay C350 cao cap, can mang mo chong am moc va nuoc nhe. Hop game boc mang co va boc bong bong chong va dap 100% truoc khi xuat kho.</p></div></div>
          <div class="buy-faq-item"><button class="buy-faq-header accordion-header" data-target="faq2"><span class="faq-q-icon">Q</span><span>Thoi gian giao hang la bao lau?</span><span class="acc-icon">&#9662;</span></button><div class="buy-faq-content accordion-content" id="faq2"><p>Don hang giao trong noi thanh Ha Noi va TP.HCM nhan hang trong 1-2 ngay. Cac tinh thanh khac tren toan quoc nhan hang tu 3-5 ngay lam viec.</p></div></div>
          <div class="buy-faq-item"><button class="buy-faq-header accordion-header" data-target="faq3"><span class="faq-q-icon">Q</span><span>Co ho tro doi tra khong?</span><span class="acc-icon">&#9662;</span></button><div class="buy-faq-content accordion-content" id="faq3"><p>Chung toi ho tro 1 doi 1 hoan toan mien phi trong vong 7 ngay neu san pham gap loi tu nha san xuat hoac hu hong do van chuyen.</p></div></div>
          <div class="buy-faq-item"><button class="buy-faq-header accordion-header" data-target="faq4"><span class="faq-q-icon">Q</span><span>San pham co kem huong dan su dung khong?</span><span class="acc-icon">&#9662;</span></button><div class="buy-faq-content accordion-content" id="faq4"><p>Co! Bo bai di kem Sach huong dan luat choi in mau minh hoa, cung ma QR link video huong dan choi chi tiet chi trong 5 phut.</p></div></div>
        </div>
      </div>
    </section>

    <!-- S5: POLICIES -->
    <section class="buy-policies-section">
      <div class="buy-policies-container">
        <div class="buy-policy-card"><div class="policy-icon-wrap">&#128666;</div><h3 class="policy-title">Giao hang nhanh</h3><p class="policy-desc">Toan quoc 3-7 ngay, noi thanh 1-2 ngay. Freeship voi voucher SHIP15.</p></div>
        <div class="buy-policy-card"><div class="policy-icon-wrap">&#128737;</div><h3 class="policy-title">Dam bao chat luong</h3><p class="policy-desc">Cam ket 100% san pham chinh hang, in an dat tieu chuan xuat khau.</p></div>
        <div class="buy-policy-card"><div class="policy-icon-wrap">&#128230;</div><h3 class="policy-title">Dong goi can than</h3><p class="policy-desc">Boc 2 lop bubble wrap, mang co chong am, hop cung chong va dap.</p></div>
        <div class="buy-policy-card"><div class="policy-icon-wrap">&#128260;</div><h3 class="policy-title">Doi tra 7 ngay</h3><p class="policy-desc">1 doi 1 mien phi neu loi san xuat hoac hu hong trong van chuyen.</p></div>
      </div>
    </section>

    <!-- S6: CTA BANNER -->
    <section class="buy-cta-banner">
      <div class="buy-cta-inner">
        <h2 class="cta-headline">San sang buoc vao hai trinh?</h2>
        <p class="cta-subtext">Dat mua ngay hom nay &#8212; chi con <strong>vai suat</strong> voi gia uu dai mua he 2026!</p>
        <button class="btn btn-primary cta-buy-btn" onclick="document.getElementById('btnBuyNow').scrollIntoView({behavior:'smooth',block:'center'}); setTimeout(()=>document.getElementById('btnBuyNow').click(),400);">
          DAT MUA NGAY &#8212; 340.000 &#8363;
        </button>
      </div>
    </section>

  </main>

  <!-- 3-TIER FOOTER (identical to index.html) -->
  <footer class="bg-footer" id="bgFooter">
    <div class="bg-checker-strip strip-top"><div class="checker-pattern-line"></div></div>
    <div class="bg-footer-hero">
      <div class="bg-footer-hero-container">
        <div class="bg-footer-hero-brand">
          <div class="bg-hero-brand-header">
            <div class="bg-hero-product-combo">
              <img src="assets/product-rising-night.jpg" alt="San pham LogisQuest" class="bg-hero-prod-main">
              <img src="assets/product-box-3d.png" alt="Hop san pham 3D" class="bg-hero-prod-box-3d">
            </div>
            <div class="bg-hero-brand-text">
              <h2 class="bg-hero-title">LOGISQUEST</h2>
              <p class="bg-hero-slogan">PLAY TO LEARN - LEARN TO CONQUER</p>
            </div>
          </div>
        </div>
        <div class="bg-footer-hero-cards-area">
          <div class="bg-illus-card card-red-style"><img src="assets/card-sukien-back.png" alt="The Su Kien" class="bg-card-img-art"></div>
          <div class="bg-illus-card card-blue-style"><img src="assets/card-cho-back.png" alt="The Cho" class="bg-card-img-art"></div>
          <div class="bg-illus-card card-yellow-style"><img src="assets/card-incoterm-back.png" alt="The Incoterms" class="bg-card-img-art"></div>
          <div class="bg-decor-3d-crane"><img src="assets/&#7843;nh cont 3d v&#224; c&#7847;n c&#7849;u.png" alt="Container va can cau 3D" class="bg-3d-crane-img"></div>
          <div class="bg-decor-3d-cont"><img src="assets/&#7843;nh cont 3d x&#7871;p ch&#7891;ng.png" alt="Container 3D xep chong" class="bg-3d-cont-img"></div>
          <div class="bg-decor-3d-boat"><img src="assets/&#7843;nh t&#224;u 3d_g&#243;c 3 ph&#7847;n 4.png" alt="Tau 3D LogisQuest" class="bg-3d-boat-img"></div>
        </div>
      </div>
    </div>
    <div class="bg-checker-strip strip-bottom"><div class="checker-pattern-line"></div></div>
    <div class="bg-footer-main">
      <div class="bg-footer-main-container">
        <div class="bg-footer-col">
          <div class="bg-col-header">
            <div class="bg-col-icon-wrap"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg></div>
            <h3 class="bg-col-title">VE LOGISQUEST</h3>
          </div>
          <div class="bg-title-underline"></div>
          <p class="bg-col-desc">LogisQuest la board game chien thuat mo phong van tai quoc te, giup nguoi choi hoc va van dung Incoterms 2020 mot cach truc quan va thu vi.</p>
          <div class="bg-btn-and-cont-row">
            <a href="index.html#about" class="bg-btn-more">TIM HIEU THEM &rarr;</a>
            <div class="bg-col-single-cont-wrap"><img src="assets/&#7843;nh cont 3d ri&#234;ng l&#7867;.png" alt="Container 3D rieng le" class="bg-col-single-cont-img"></div>
          </div>
        </div>
        <div class="bg-footer-col">
          <div class="bg-col-header">
            <div class="bg-col-icon-wrap"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div>
            <h3 class="bg-col-title">THONG TIN CHUNG</h3>
          </div>
          <div class="bg-title-underline"></div>
          <ul class="bg-footer-links">
            <li><a href="index.html#home"><span class="bg-link-arrow">&#9654;</span> Trang chu</a></li>
            <li><a href="index.html#about"><span class="bg-link-arrow">&#9654;</span> Ve LogisQuest</a></li>
            <li><a href="index.html#team"><span class="bg-link-arrow">&#9654;</span> Doi ngu sang tao</a></li>
            <li><a href="index.html#cards"><span class="bg-link-arrow">&#9654;</span> San pham</a></li>
            <li><a href="index.html#about"><span class="bg-link-arrow">&#9654;</span> Tin tuc</a></li>
          </ul>
        </div>
        <div class="bg-footer-col">
          <div class="bg-col-header">
            <div class="bg-col-icon-wrap"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M4.93 4.93l4.24 4.24"/><path d="M14.83 9.17l4.24-4.24"/><path d="M14.83 14.83l4.24 4.24"/><path d="M9.17 14.83l-4.24 4.24"/></svg></div>
            <h3 class="bg-col-title">HO TRO</h3>
          </div>
          <div class="bg-title-underline"></div>
          <ul class="bg-footer-links">
            <li><a href="index.html#gameplay"><span class="bg-link-arrow">&#9654;</span> Huong dan choi</a></li>
            <li><a href="index.html#gameplay"><span class="bg-link-arrow">&#9654;</span> Cau hoi thuong gap</a></li>
            <li><a href="buy.html"><span class="bg-link-arrow">&#9654;</span> Chinh sach doi tra</a></li>
            <li><a href="index.html#gameplay"><span class="bg-link-arrow">&#9654;</span> Dieu khoan su dung</a></li>
            <li><a href="index.html#team"><span class="bg-link-arrow">&#9654;</span> Lien he</a></li>
          </ul>
        </div>
        <div class="bg-footer-col">
          <div class="bg-col-header">
            <div class="bg-col-icon-wrap"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
            <h3 class="bg-col-title">DANG KY NHAN TIN</h3>
          </div>
          <div class="bg-title-underline"></div>
          <p class="bg-col-desc">Nhan tin tuc moi nhat, meo choi va uu dai dac biet tu LogisQuest.</p>
          <form class="bg-newsletter-form" onsubmit="event.preventDefault(); alert('Cam on ban da dang ky!');">
            <input type="email" placeholder="Nhap email cua ban" required class="bg-news-input">
            <button type="submit" class="bg-news-btn">DANG KY</button>
          </form>
          <div class="bg-social-section">
            <h4 class="bg-social-title">KET NOI VOI CHUNG TOI</h4>
            <nav class="social-links" aria-label="Social media">
              <a class="social-link social-link--facebook" href="https://www.facebook.com/" aria-label="Facebook" data-label="Facebook" target="_blank" rel="noopener noreferrer"><svg class="social-link__logo social-link__logo--facebook" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.86 22v-8.45h2.84l.43-3.3h-3.27V8.14c0-.96.27-1.61 1.64-1.61h1.75V3.58a23.4 23.4 0 0 0-2.55-.13c-2.52 0-4.25 1.54-4.25 4.36v2.44H7.6v3.3h2.85V22h3.41Z"/></svg></a>
              <a class="social-link social-link--twitter" href="https://x.com/" aria-label="Twitter" data-label="Twitter" target="_blank" rel="noopener noreferrer"><svg class="social-link__logo social-link__logo--twitter" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.24 2H21l-6.03 6.89L22.06 22H16.5l-4.35-5.69L7.17 22H4.4l6.45-7.37L4.06 2h5.7l3.93 5.2L18.24 2Zm-.97 17.69h1.53L8.92 4.19H7.28l9.99 15.5Z"/></svg></a>
              <a class="social-link social-link--instagram" href="https://www.instagram.com/" aria-label="Instagram" data-label="Instagram" target="_blank" rel="noopener noreferrer"><svg class="social-link__logo social-link__logo--instagram" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M7.45 2h9.1A5.46 5.46 0 0 1 22 7.45v9.1A5.46 5.46 0 0 1 16.55 22h-9.1A5.46 5.46 0 0 1 2 16.55v-9.1A5.46 5.46 0 0 1 7.45 2Zm0 1.82a3.64 3.64 0 0 0-3.63 3.63v9.1a3.64 3.64 0 0 0 3.63 3.63h9.1a3.64 3.64 0 0 0 3.63-3.63v-9.1a3.64 3.64 0 0 0-3.63-3.63h-9.1Zm9.55 1.36a1.36 1.36 0 1 1 0 2.73 1.36 1.36 0 0 1 0-2.73ZM12 6.86A5.14 5.14 0 1 1 12 17.14 5.14 5.14 0 0 1 12 6.86Zm0 1.82A3.32 3.32 0 1 0 12 15.32 3.32 3.32 0 0 0 12 8.68Z"/></svg></a>
              <a class="social-link social-link--github" href="https://github.com/" aria-label="Github" data-label="Github" target="_blank" rel="noopener noreferrer"><svg class="social-link__logo social-link__logo--github" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.49l-.01-1.92c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.39 9.39 0 0 1 12 6.93a9.3 9.3 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.04.36.32.68.94.68 1.89l-.01 2.82c0 .27.18.59.69.49A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"/></svg></a>
              <a class="social-link social-link--youtube" href="https://www.youtube.com/" aria-label="Youtube" data-label="Youtube" target="_blank" rel="noopener noreferrer"><svg class="social-link__logo social-link__logo--youtube" viewBox="0 0 24 24" aria-hidden="true"><path d="M21.58 7.19a2.83 2.83 0 0 0-1.99-2C17.84 4.72 12 4.72 12 4.72s-5.84 0-7.59.47a2.83 2.83 0 0 0-1.99 2A29.52 29.52 0 0 0 1.95 12c0 1.63.16 3.25.47 4.81a2.83 2.83 0 0 0 1.99 2c1.75.47 7.59.47 7.59.47s5.84 0 7.59-.47a2.83 2.83 0 0 0 1.99-2c.31-1.56.47-3.18.47-4.81 0-1.63-.16-3.25-.47-4.81ZM10 15.12V8.88L15.2 12 10 15.12Z"/></svg></a>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-footer-copyright">
      <svg class="bg-copyright-wave-svg" viewBox="0 0 1400 45" preserveAspectRatio="none"><path d="M0 22 C 350 40, 700 5, 1050 35, 1400 22" stroke="rgba(255,255,255,0.4)" stroke-width="2.5" stroke-dasharray="10 12" fill="none"/></svg>
      <div class="bg-copy-decor decor-left-side"><div class="bg-copy-pin pin-red-graphic"><svg width="22" height="28" viewBox="0 0 24 32" fill="none"><path d="M12 0C5.37 0 0 5.37 0 12c0 9.5 12 20 12 20s12-10.5 12-20c0-6.63-5.37-12-12-12z" fill="#EF4444"/><circle cx="12" cy="12" r="5" fill="#FFFFFF"/></svg></div></div>
      <p class="bg-copyright-title-text">&copy; 2026 LogisQuest. Phat trien boi Doi ngu sang tao Viet Nam.</p>
      <div class="bg-copy-decor decor-right-side"><div class="bg-copy-pin pin-yellow-graphic"><svg width="22" height="28" viewBox="0 0 24 32" fill="none"><path d="M12 0C5.37 0 0 5.37 0 12c0 9.5 12 20 12 20s12-10.5 12-20c0-6.63-5.37-12-12-12z" fill="#FACC15"/><circle cx="12" cy="12" r="5" fill="#0F172A"/></svg></div></div>
    </div>
  </footer>

  <!-- CHECKOUT MODAL -->
  <div class="modal-overlay" id="checkoutModal">
    <div class="modal-content checkout-modal-card">
      <button class="modal-close" id="checkoutClose" aria-label="Dong">&times;</button>
      <div class="checkout-modal-header">
        <div class="checkout-modal-icon">&#128674;</div>
        <h2 class="modal-title-blue">XAC NHAN DAT HANG</h2>
        <p class="modal-sub-text">Nhap thong tin giao hang de hoan tat don hang Bo Bai Quy Chien</p>
      </div>
      <form id="checkoutForm" class="checkout-form">
        <div class="form-group"><label for="custName">Ho va ten *</label><input type="text" id="custName" required placeholder="Vi du: Nguyen Van A"></div>
        <div class="form-group"><label for="custPhone">So dien thoai *</label><input type="tel" id="custPhone" required placeholder="Vi du: 0987654321"></div>
        <div class="form-group"><label for="custAddress">Dia chi nhan hang *</label><textarea id="custAddress" required rows="2" placeholder="So nha, Ten duong, Phuong/Xa, Quan/Huyen, Tinh/TP"></textarea></div>
        <div class="form-row-grid">
          <div class="form-group"><label for="custPayment">Phuong thuc thanh toan</label><select id="custPayment"><option value="cod">Thanh toan khi nhan hang (COD)</option><option value="bank">Chuyen khoan Ngan hang (QR Code)</option><option value="momo">Vi MoMo</option></select></div>
          <div class="form-group"><label for="voucherCode">Ma giam gia</label><input type="text" id="voucherCode" value="SHIP15" placeholder="Nhap ma voucher"></div>
        </div>
        <div class="checkout-summary-box">
          <div class="summary-line"><span>San pham:</span><span>Bo Bai Quy Chien x <strong id="summaryQty">1</strong></span></div>
          <div class="summary-line"><span>Tam tinh:</span><span id="summarySubtotal">340.000 &#8363;</span></div>
          <div class="summary-line text-green"><span>Phi van chuyen:</span><span id="summaryShipping">Mien phi (Freeship SHIP15)</span></div>
          <div class="summary-line total-line"><span>TONG THANH TIEN:</span><strong class="total-price-blue" id="summaryTotal">340.000 &#8363;</strong></div>
        </div>
        <button type="submit" class="btn btn-primary btn-submit-order">HOAN TAT DAT HANG</button>
      </form>
      <div class="checkout-success-msg" id="checkoutSuccessMsg" style="display:none;">
        <div class="success-icon">&#127881;</div>
        <h3>DAT HANG THANH CONG!</h3>
        <p>Cam on ban da ung ho <strong>Bo Bai Quy Chien</strong>. Nhan vien cham soc khach hang se goi dien xac nhan don hang toi ban trong thoi gian som nhat!</p>
        <button class="btn btn-secondary" id="btnCloseSuccess">Dong</button>
      </div>
    </div>
  </div>

  <script src="buy.js"></script>
</body>
</html>"""

with open('buy.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Done writing buy.html - lines:", html.count("\\n") + 1)
