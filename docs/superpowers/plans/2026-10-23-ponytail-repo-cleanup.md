# Kế Hoạch Dọn Dẹp Toàn Bộ Mã Nguồn (Ponytail Cleanup Plan)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Loại bỏ toàn bộ mã nguồn chết (dead code), thư viện nạp thừa (unused dependencies), vòng lặp polling gây hao tổn tài nguyên và các khối CSS bị ghi đè trùng lặp qua nhiều đợt redesign, đưa dự án về trạng thái tinh gọn (lean), nhẹ và giữ nguyên 100% giao diện hiện tại.

**Architecture:** Sử dụng trực tiếp Native Web APIs (CSS `scroll-behavior: smooth`, `window.scrollTo`, `IntersectionObserver`) thay thế cho các thư viện bổ trợ bên ngoài (Lenis, GSAP ScrollToPlugin, setInterval polling). Dọn dẹp phẫu thuật từng phần (surgical edit) các hàm chết trong JS và các tầng giao diện cũ bị ghi đè trong CSS.

**Tech Stack:** Vanilla JavaScript (ES6+), HTML5, CSS3, GSAP + ScrollTrigger (giữ lại cho animation chính), Playwright (kiểm chứng giao diện).

**Spec:** Ponytail Audit Report 2026-10-23 (`net: -7656 lines, -2 deps possible`).

## Global Constraints

- Không làm thay đổi bất kỳ hành vi hoặc giao diện người dùng hiển thị nào trên cả Desktop (1440px) và Mobile (390px).
- Tuyệt đối không xóa bất kỳ file assets hình ảnh/media nào của dự án.
- Tuân thủ quy chuẩn Surgical Edits: chỉ cắt bỏ đúng phần code chết/trùng lặp, kiểm tra cú pháp sau mỗi bước.
- Mỗi tác vụ kết thúc bằng lệnh kiểm thử và xác nhận hoạt động bình thường trước khi chuyển sang tác vụ kế tiếp.

---

### Task 1: Dọn dẹp JS chết và loại bỏ thư viện thừa trong `app.js` & `buy.js`

**Files:**
- Modify: `app.js`
- Modify: `buy.js`

**Interfaces:**
- Consumes: DOM elements hiện hành trên `index.html` và `buy.html`.
- Produces: `initGameplayAnimations()` hoạt động bình thường cho `#gameplay`, các hàm scroll sử dụng native `window.scrollTo`.

- [x] **Step 1: Xóa các hàm chết trong `app.js`**
  - Xóa `initIntroSlideshow` (dòng 1610-1754, 145 dòng).
  - Xóa `initTacticalBoardgameBlock5` (dòng 3293-3422, 130 dòng).
  - Xóa hàm ghi đè `initGameplayAnimations` tại đuôi file (dòng 3502-3738, 237 dòng) để phục hồi hàm gốc tại dòng 1349.
  - Xóa hàm `initGameplayJourney` (dòng 3739-3825, 87 dòng) và các lệnh gọi hàm này ở cuối file.
  - Xóa event listener của `cardSearch` (dòng 550-559, dòng 2138).

- [x] **Step 2: Thay thế Lenis Smooth Scroll bằng Native Scroll trong `app.js`**
  - Xóa biến `let lenis = null;` và hàm `initSmoothScroll()` (dòng 891-921).
  - Thay thế toàn bộ các lệnh `lenis.scrollTo(...)` bằng `window.scrollTo({ top: ..., behavior: 'smooth' })`.
  - Loại bỏ đăng ký `ScrollToPlugin` trong `initGSAPAnimations`.

- [x] **Step 3: Kiểm tra cú pháp JavaScript**
  - Chạy: `node -c app.js`
  - Chạy: `node -c buy.js`
  - Expected: Exit code 0, không có lỗi cú pháp.

---

### Task 2: Tối ưu hiệu năng `mobile-redesign.js` (Loại bỏ setInterval polling)

**Files:**
- Modify: `mobile-redesign.js`

**Interfaces:**
- Consumes: `#homeView`, `#buy`, `#block1-showcase`.
- Produces: Hiển thị thanh Quick Buy khi cuộn qua hero bằng sự kiện scroll passive hoặc `IntersectionObserver`, loại bỏ hoàn toàn `setInterval(upd, 600)`.

- [x] **Step 1: Viết lại hàm `initQuickBuy` sử dụng scroll event passive**
  - Thay thế `setInterval(upd, 600)` bằng listener sự kiện `window.addEventListener('scroll', upd, { passive: true })` và resize.
  - Đảm bảo thanh quick-buy hiển thị và ẩn mượt mà không gây giật CPU/layout thrashing.

- [x] **Step 2: Kiểm tra cú pháp file**
  - Chạy: `node -c mobile-redesign.js`
  - Expected: Exit code 0.

---

### Task 3: Dọn dẹp nạp tài nguyên và mã inline trong `index.html` và `buy.html`

**Files:**
- Modify: `index.html`
- Modify: `buy.html`
- Modify: `serve.json`

**Interfaces:**
- Consumes: Browser document loading pipeline.
- Produces: Giảm số lượng request mạng, loại bỏ CDN thừa, tải font tối ưu.

- [x] **Step 1: Gỡ bỏ nạp `dev-tools.js` và `dev-tools.css` trong `index.html`**
  - Xóa thẻ `<link rel="stylesheet" href="dev-tools.css">` ở `<head>`.
  - Xóa thẻ `<script src="dev-tools.js"></script>` ở cuối `<body>`.

- [x] **Step 2: Gỡ bỏ thư viện `lenis` và `ScrollToPlugin`**
  - Trong `index.html`: Xóa CDN Lenis và CDN ScrollToPlugin.
  - Trong `buy.html`: Xóa CDN ScrollToPlugin.

- [x] **Step 3: Rút gọn Google Fonts trong `index.html`**
  - Thay thẻ font 8 họ bằng link chỉ tải 2 font nhận diện chính: `Montserrat` (weights 400,600,700,800) và `Outfit` (weights 600,700,800,900).

- [x] **Step 4: Chuyển Clean URL sang `serve.json` và xóa script inline**
  - Cập nhật `serve.json` với cấu hình `"cleanUrls": true`.
  - Xóa thẻ `<script>` inline `window.history.replaceState` ở đầu `<head>` của `index.html` và `buy.html`.

- [x] **Step 5: Kiểm tra nạp trang bằng trình duyệt**
  - Khởi động server nội bộ và kiểm tra trang tải sạch sẽ, không báo lỗi 404 hay console error.

---

### Task 4: Dọn dẹp các khối CSS bị ghi đè / trùng lặp trong `styles.css`

**Files:**
- Modify: `styles.css`

**Interfaces:**
- Consumes: Tất cả các class giao diện trên `index.html` và `buy.html`.
- Produces: File `styles.css` thu nhỏ gọn gàng, giữ nguyên 100% định dạng trực quan.

- [x] **Step 1: Xóa khối Buy Page cũ bị ghi đè**
  - Vị trí: Dòng 8140-9209 (`── SECTION 1: PRODUCT HERO SHOWCASE ──` cũ).
  - Khối này đã được thay thế hoàn toàn bởi bản redesign ở dòng 10716-12062.

- [x] **Step 2: Xóa khối Footer trùng lặp cũ**
  - Vị trí: Dòng 7395-8139 (`MAIN FOOTER STYLING`).
  - Khối này đã được viết lại toàn diện và chi tiết hơn ở dòng 14249-14881 (`3-TIER BOARD GAME EXPERIENTIAL FOOTER`).

- [x] **Step 3: Xóa các tầng Gameplay thử nghiệm cũ đã bị thay thế**
  - Vị trí: Dòng 15904-16578 (`GAMEPLAY VIEW — EDITORIAL NUMBERED STEPS`).
  - Vị trí: Dòng 18574-19030 (khối infographic cũ không còn trong HTML).

- [x] **Step 4: Xóa khối Block 5 thử nghiệm cũ**
  - Vị trí: Dòng 15171-15903 (`TACTICAL MARITIME BOARD GAME JOURNEY — KHỐI 5` 16:10 ratio) không còn dùng trong markup hiện tại.

- [x] **Step 5: Kiểm tra hiển thị giao diện qua Playwright**
  - Mở trang chủ và trang đặt mua trên cả 2 độ phân giải Desktop (1440px) và Mobile (390px).
  - So sánh trực quan trước và sau khi dọn CSS để cam kết không mất mát bất kỳ style nào.

---

### Task 5: Kiểm chứng toàn diện (Verification & QA)

- [x] **Step 1: Kiểm tra JavaScript runtime console**
  - Mở console trình duyệt, điều hướng qua các tab: Trang chủ, Cách chơi, Giới thiệu, Đặt mua.
  - Xác nhận không có lỗi TypeError, ReferenceError hay cảnh báo ScrollTrigger.

- [x] **Step 2: Kiểm tra chức năng tương tác**
  - Modal chi tiết thẻ bài: Lật thẻ bài, chuyển tab phân loại, bấm chọn thẻ con.
  - Slider/Carousel: Carousel ảnh cộng đồng khối 3, thanh cuộn kệ thẻ bài.
  - Nút Mua ngay và chuyển hướng giữa các trang.
