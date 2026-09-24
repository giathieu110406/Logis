# About LogisQuest Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Tái thiết kế toàn diện giao diện và nội dung phân hệ "Giới thiệu về LogisQuest" (`#aboutView`), thay thế toàn bộ markup và hình ảnh cũ bằng giao diện Sunlit Maritime Light Mode hiện đại từ kết quả thiết kế Stitch, tuyệt đối không dùng màu tối đen.

**Architecture:** Sử dụng HTML5 ngữ nghĩa thay thế hoàn toàn khối `#aboutView` trong `index.html`; chuẩn hóa các lớp CSS Vanilla trong `styles.css` dựa trên hệ thống Design Tokens Sunlit Maritime (nền trắng `#FFFFFF`, sương tuyết `#F0F9FF`, xanh biển nhạt `#EBF5FF`, điểm xuyết xanh ngọc `#0EA5E9` và cam hoàng hôn `#F05A22`); tinh gọn logic tương tác trong `app.js` để hỗ trợ điều hướng, tương tác linh kiện và chỉ số mượt mà.

**Tech Stack:** HTML5 Semantic, Vanilla CSS3 (Custom Properties, Glassmorphism, CSS Grid & Flexbox), Vanilla JavaScript ES6+.

**Spec:** Thiết kế Stitch Screen ID `e155efac591f453cb58a824d825a59d6` ("Giới Thiệu Về LogisQuest (Board Game)" - Project ID: `14334326521163640139`).

---

## Global Constraints

- **TUYỆT ĐỐI KHÔNG DÙNG NỀN TỐI ĐEN**: Toàn bộ background là Light Mode chuẩn biển ngập nắng (`#FFFFFF`, `#F0F9FF`, `#EBF5FF`), màu chữ tương phản cao `#0A2540` / `#131B2E`.
- **KHÔNG DÙNG THƯ VIỆN CSS NGOÀI**: Không nhúng runtime Tailwind hay framework nặng; viết 100% Vanilla CSS tương thích với `styles.css` hiện hành.
- **NGÔN NGỮ NỘI DUNG**: Tiếng Việt chuẩn mực, thuật ngữ logistics giữ song ngữ khi cần thiết (FCL, TEU, Reefer, Hazmat, Demurrage, BAF...).
- **LIÊN KẾT ĐIỀU HƯỚNG NỘI BỘ**: Các nút CTA phải kích hoạt đúng các phân hệ hiện có thông qua `data-nav="gameplay"`, `data-nav="cards"`, và mở modal/chuyển trang đặt mua.

---

### Task 1: Tạo bản đặc tả kỹ thuật thiết kế Stitch (Design Spec)

**Files:**
- Create: `docs/superpowers/specs/2026-09-24-about-logisquest-redesign-spec.md`

**Interfaces:**
- Consumes: Dữ liệu schema từ Stitch screen `e155efac591f453cb58a824d825a59d6`.
- Produces: Danh sách các phân hệ (Sections), copy tiếng Việt, cấu trúc icon vector SVG nội tại, và bảng tra cứu class CSS.

- [ ] **Step 1: Viết tài liệu spec chi tiết**
  Đặc tả 5 phân hệ cốt lõi:
  1. *Hero Vision & Impact Metrics* (Tầm nhìn sứ mệnh & 4 khối chỉ số chiến lược).
  2. *Inside The Box (Bộ Linh Kiện Board Game Tiêu Chuẩn)* (5 linh kiện cờ bàn cao cấp: Bản đồ hải trình, 120+ thẻ bài, Mô hình tàu & Token container 3D, Sổ vận đơn & cước lưu bãi, Xúc xắc gỗ sồi).
  3. *Three Strategic Pillars (Ba Trụ Cột Chiến Thuật)* (Mô phỏng Incoterms 2020, Tối ưu chi phí rủi ro, Giáo dục trực quan).
  4. *Target Explorers (Đối Tượng Trải Nghiệm)* (Sinh viên/Giảng viên, Doanh nghiệp đào tạo, Board Gamer chiến thuật).
  5. *Sunlit CTA Ribbon* (Kêu gọi chuyển đổi sang Cách Chơi & Mua Hàng).

- [ ] **Step 2: Kiểm tra nội dung spec**
  Xác nhận không chứa bất kỳ yêu cầu nền đen hoặc dark mode nào; bảo đảm cấu trúc vector SVG sẵn sàng thay thế ảnh raster tạm.

- [ ] **Step 3: Commit**
  ```bash
  git add docs/superpowers/specs/2026-09-24-about-logisquest-redesign-spec.md
  git commit -m "docs(about): add design specification for about logisquest redesign from stitch"
  ```

---

### Task 2: Tái cấu trúc mã nguồn HTML cho `#aboutView` trong `index.html`

**Files:**
- Modify: `index.html:872-937`

**Interfaces:**
- Consumes: Cấu trúc HTML từ spec ở Task 1.
- Produces: Khối `<div id="aboutView" class="view-section">` mới, chứa các section có ngữ nghĩa (`<section class="about-hero-vision">`, `<section class="about-unboxing">`, `<section class="about-pillars">`, `<section class="about-personas">`, `<section class="about-cta-ribbon">`).

- [ ] **Step 1: Xóa bỏ toàn bộ nội dung HTML cũ của `#aboutView`**
  Loại bỏ các thẻ và hình ảnh cũ (`assets/about/hero-showcase-v2.jpg`, `board-gameplay.jpg`...).

- [ ] **Step 2: Viết mã HTML semantic mới cho 5 phân hệ**
  Nhúng các icon SVG sắc nét (la bàn hải trình, tàu container, đồng hồ cát, chứng từ, huân chương, mũi tên chuyển đổi), các thuộc tính `data-nav` để tích hợp liền mạch với router chuyển tab của trang.

- [ ] **Step 3: Kiểm tra tính hợp lệ cú pháp HTML**
  Đảm bảo các thẻ đóng mở chính xác, không làm ảnh hưởng đến cấu trúc của `#teamView` và `#cardsView` bên dưới.

- [ ] **Step 4: Commit**
  ```bash
  git add index.html
  git commit -m "feat(about): rebuild aboutView semantic html structure in light mode"
  ```

---

### Task 3: Triển khai hệ thống CSS Sunlit Maritime trong `styles.css`

**Files:**
- Modify: `styles.css`

**Interfaces:**
- Consumes: Các class mới của `#aboutView` (`.about-page-sunlit`, `.about-hero-vision`, `.about-metric-card`, `.about-component-card`, `.about-pillar-card`, `.about-persona-card`, `.about-cta-ribbon`).
- Produces: Giao diện thuần CSS Responsive không phụ thuộc Tailwind, hiệu ứng kính mờ glassmorphism, đổ bóng nhẹ tông xanh biển, micro-animations hover mượt mà.

- [ ] **Step 1: Dọn dẹp các lớp CSS cũ của `.about-*`**
  Xóa các quy tắc CSS cũ không còn sử dụng để tránh xung đột class và rác code.

- [ ] **Step 2: Viết các quy tắc CSS mới cho `#aboutView`**
  - Backgrounds: `#FFFFFF`, gradient nhẹ `linear-gradient(180deg, #F0F9FF 0%, #FFFFFF 100%)`, `#EBF5FF`.
  - Borders: `1px solid rgba(14, 165, 233, 0.15)`.
  - Shadows: `0 10px 30px -5px rgba(14, 165, 233, 0.08)`.
  - Typography: Áp dụng font `Cormorant Garamond` cho tiêu đề lớn và `Montserrat` / `Plus Jakarta Sans` cho nội dung.
  - Buttons: Nút chính màu Cam Hoàng Hôn `#F05A22`, nút phụ kính mờ viền xanh `#0EA5E9`.

- [ ] **Step 3: Thiết lập Responsive Breakpoints**
  Tối ưu hóa hiển thị cho màn hình Desktop (>1024px), Tablet (768px - 1023px) và Mobile (<768px).

- [ ] **Step 4: Commit**
  ```bash
  git add styles.css
  git commit -m "feat(about): add sunlit maritime light mode styles for about logisquest"
  ```

---

### Task 4: Cập nhật và tối ưu hóa JavaScript trong `app.js`

**Files:**
- Modify: `app.js:3536-3600` (khu vực `initAboutGameRedesign`)

**Interfaces:**
- Consumes: Khối DOM mới của `#aboutView`.
- Produces: Hàm `initAboutGameRedesign()` tinh gọn, xử lý tương tác click linh kiện Inside the Box (nếu có tab lọc) và liên kết mượt mà với navigation chính.

- [ ] **Step 1: Loại bỏ carousel timer và mã điều khiển slide cũ**
  Xóa logic `aboutCarouselTimer`, `aboutCarouselTrack`, các nút prev/next không còn tồn tại trong layout mới.

- [ ] **Step 2: Cài đặt logic mới cho `initAboutGameRedesign()`**
  - Kích hoạt hiệu ứng hiển thị mượt mà khi người dùng điều hướng vào tab "Giới Thiệu".
  - Gắn sự kiện chuyển đổi trạng thái khi bấm vào các thẻ linh kiện unboxing hoặc thẻ đối tượng người chơi.

- [ ] **Step 3: Kiểm tra console trong trình duyệt**
  Đảm bảo không phát sinh bất kỳ ngoại lệ `null reference` hay lỗi JavaScript nào khi chuyển tab.

- [ ] **Step 4: Commit**
  ```bash
  git add app.js
  git commit -m "refactor(about): modernize initAboutGameRedesign interaction logic"
  ```

---

### Task 5: Kiểm thử hiển thị toàn diện & Hoàn thiện giao diện

**Files:**
- Inspect & Test: `http://localhost:3000` (Dev server đang chạy)

**Interfaces:**
- Consumes: Giao diện hoàn chỉnh của trang sau khi tích hợp.
- Produces: Báo cáo kiểm thử đạt chuẩn UI/UX, không lỗi dark mode, kiểm tra hiển thị trên mobile và desktop.

- [ ] **Step 1: Kiểm tra HTTP status và load trang**
  Gửi request kiểm tra `http://localhost:3000` để đảm bảo tài nguyên tải về với mã HTTP 200.

- [ ] **Step 2: Kiểm tra tương tác chuyển hướng menu**
  Nhấp chọn dropdown "Giới Thiệu -> Về LogisQuest" và kiểm tra hiển thị của `#aboutView`.

- [ ] **Step 3: Rà soát các quy tắc mỹ thuật**
  Xác nhận 100% không có màu đen/tối chiếm ưu thế, typography tiếng Việt không bị lỗi font, các nút CTA hoạt động chuẩn xác.

- [ ] **Step 4: Commit & Verification**
  ```bash
  git status
  git commit -m "chore(about): verify and complete about logisquest redesign"
  ```
