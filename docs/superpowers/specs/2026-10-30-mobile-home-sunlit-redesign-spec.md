# Mobile Home "Sunlit Harbor" Redesign — Audit & Design Spec

- **Ngày:** 2026-10-30
- **Phạm vi:** Trang chủ (`#homeView`) + header + footer + quick-buy bar, **chỉ viewport ≤ 700px**. Desktop/tablet (> 700px) giữ nguyên 100%.
- **Thiết bị kiểm thử:** 390×844 (iPhone 12–15), 360×780 (Android nhỏ), 440×956 (iPhone Pro Max).
- **Ràng buộc tuyệt đối từ người dùng:** KHÔNG dùng nền/bề mặt tối, KHÔNG dùng xanh navy ở bất kỳ đâu (nền, chữ, viền, shadow, text-shadow).
- **Ảnh chụp hiện trạng (390×844):** `C:\Users\Giath\.gemini\antigravity\brain\99b33e25-a9c2-4eeb-bf64-0295427230b0\scratch\m0.png` … `m8.png`, `mobile-home.png` (khung Mobile View).

---

## 1. Audit hiện trạng (đo bằng Playwright, 390×844)

| # | Khu vực | Vấn đề quan sát | Bằng chứng đo được |
|---|---------|-----------------|--------------------|
| A1 | Toàn trang | `scroll-snap-type: y mandatory` + mọi section bị ép `height/max-height: 100svh` → nội dung bị **cắt cụt** (Khối 2, Khối 3 mất đoạn cuối, bị quick-buy bar đè), Khối 1 & Khối 5 lại **thừa khoảng trống** lớn. Cuộn bị "giật", không dừng giữa chừng được. | `mobile-home.css:7-37`; mọi section đo được `height = 844` |
| A2 | Màu sắc | Nhiều bề mặt navy/tối: CTA card `rgba(3,43,84,.9)`, `#buy` `rgb(0,86,179)`, `.home-cta-banner-full` `rgb(5,47,104)`, footer `#021a36` + `.bg-footer-main` `rgb(5,63,143)`, ribbon badge gradient `#03447A→#0284C7`, nút header "Mua Ngay" `rgb(24,28,40)`, icon hamburger `#0F172A`, tiêu đề `rgb(3,43,84)` / `rgb(14,53,102)` / `rgb(12,35,64)`, text-shadow hero `#063c76`, `#07265c`. | `getComputedStyle` |
| A3 | Typography | Khối 1 dùng serif **Cormorant Garamond** "LOGISQUEST" (lạc tông với Montserrat toàn trang) và lặp lại logo đã có ở hero. Trang có **2 thẻ `<h1>`** (hero + Khối 1). Tiêu đề 4 khối dùng 4 cỡ/kiểu khác nhau (16.5px, 20–25px, 18–22px, 17px). | `index.html` dòng `<h1 class="showcase-main-headline">` |
| A4 | Khối 1 | Mô tả bị `-webkit-line-clamp: 3` → kết thúc bằng "tái..." (mất thông tin). Ảnh carousel nhỏ (290px) giữa nền trời trống. | `mobile-home.css:178-188` |
| A5 | Khối 2/3 | Ribbon navy, chữ 12.8px quá nhỏ, đoạn văn bị cắt; ảnh và chữ bị ép trong 36svh. | ảnh `m2.png`, `m3.png` |
| A6 | Khối 4 (4 trụ cột) | Ảnh mặt sau thẻ là **dọc 682×1024** nhưng bị `rotate(-90deg)` để nhét vào khung ngang 3:2 → hack, chỉ thấy 1 thẻ/lần, phải vuốt. Copy "Nhấp vào từng thẻ" mang tính desktop. Dots `rgba(56,189,248,.4)` gần như vô hình trên nền trời. | `mobile-home.css:379-415`, `naturalWidth/Height` |
| A7 | Khối 5 (video) | Biển gỗ + huy chương xanh đậm nặng nề; tiêu đề chữ trắng phát sáng trên nền xanh nhạt → contrast kém; 40% màn hình trống. | ảnh `m5.png` |
| A8 | CTA `#buy` | Card navy; nút phụ "XEM HƯỚNG DẪN CHƠI" chữ `rgb(2,82,205)` trên nền navy → **gần như không đọc được**; nhãn tính năng **9px**; không hiển thị giá (giá chỉ có ở quick-buy). | `mobile-home.css:572-619` |
| A9 | Footer | Navy, dài ~1044px, danh sách link căn giữa từng dòng, viền xanh đậm 2 bên do padding lộ nền `#021a36`. | ảnh `m7.png`, `m8.png` |
| A10 | Header | Nút "Mua Ngay" đen bóng lạc tông; hamburger 3 vạch mảnh màu navy; trùng CTA "Mua ngay" ngay dưới hero. | `getComputedStyle(.nav-delivery-btn)` |
| A11 | Hero | CTA vàng nhỏ (44px), chữ `#07265c` (navy); không có thông tin nhanh (số người chơi, thời lượng) – người dùng phải cuộn 3 màn mới biết. | `mobile-home.css:109-124` |
| A12 | Code chết | `initPillarsCarousel()` + `.pillar-carousel-dot*` chỉ phục vụ carousel Khối 4 → sẽ thừa khi đổi sang lưới. | `mobile-redesign.js`, `mobile-home.css:419-438` |

---

## 2. Định hướng thiết kế: "Sunlit Harbor" (Bến cảng nắng)

Tinh thần: board game gia đình, tươi sáng, nắng biển — trắng/kem làm nền, xanh trời làm chủ đạo, cam nắng làm điểm nhấn hành động. Tất cả section chảy tự nhiên (không snap), mỗi khối có cùng một "khung đọc": **eyebrow pill → tiêu đề → gạch cam → hình → nội dung**.

### 2.1 Design tokens (khai báo trong `mobile-home.css`, scope mobile)

| Token | Giá trị | Dùng cho |
|-------|---------|----------|
| `--lq-white` | `#FFFFFF` | Nền card, nền Khối 2 |
| `--lq-sky-50` | `#F0F9FF` | Nền footer, nền ảnh |
| `--lq-sky-100` | `#E0F2FE` | Gradient nền Khối 1/4/CTA |
| `--lq-sky-200` | `#BAE6FD` | Viền card, viền input |
| `--lq-sky-500` | `#0EA5E9` | Icon, viền nút phụ |
| `--lq-sky-600` | `#0284C7` | Tiêu đề lớn (≥ 22px bold) |
| `--lq-sky-700` | `#0369A1` | Chữ nhỏ màu xanh cần AA (nút phụ, tiêu đề footer) — *ocean blue, không phải navy* |
| `--lq-sun-50` | `#FFF7ED` | Nền Khối 3, nền eyebrow pill |
| `--lq-sun-200` | `#FED7AA` | Viền eyebrow pill, viền card CTA |
| `--lq-sun-400` | `#FB923C` | Gạch tiêu đề, viền nút outline |
| `--lq-sun-500` | `#F97316` | Chữ nhấn, eyebrow text, giá |
| `--lq-sun-600` | `#EA580C` | Gradient nút chính |
| `--lq-sun-700` | `#C2410C` | Điểm cuối gradient nút chính (contrast chữ trắng ≥ 4.5) |
| `--lq-amber-100` | `#FEF3C7` | Nền chip từ khóa, nền badge |
| `--lq-amber-300` | `#FCD34D` | Viền badge, text-shadow "ĐÃ MỞ" |
| `--lq-amber-700` | `#B45309` | Chữ chip từ khóa |
| `--lq-ink` | `#57534E` | Chữ thân bài (stone-600, contrast 7.6:1 trên trắng) |
| `--lq-ink-soft` | `#78716C` | Chữ phụ (≥ 14px) |
| `--lq-radius` | `18px` | Bo góc card |
| `--lq-shadow` | `0 10px 28px rgba(2,132,199,.14)` | Shadow card (alpha thấp, không tối) |

**Quy tắc màu bị cấm (audit tự động kiểm):**
- Bề mặt (section, card, footer, header, quick-buy, pill): độ sáng HSL `L ≥ 0.55`.
- Navy: mọi màu có alpha ≥ 0.3, saturation > 0.2, hue 190–250 và `L < 0.25`, hoặc hue 205–250 và `L < 0.35` → **lỗi**.

### 2.2 Typography
- Font duy nhất: `Montserrat` (đã load). Bỏ Cormorant Garamond trên mobile.
- Tiêu đề section (H2): 900, `clamp(22px, 6.2vw, 26px)`, line-height 1.2, màu `--lq-sky-600`; phần highlight màu `--lq-sun-500`.
- Eyebrow pill: 800, 12px, letter-spacing .08em, chữ `--lq-sun-500`, nền `--lq-sun-50`, viền `--lq-sun-200`.
- Thân bài: 15px / 1.6, màu `--lq-ink`, căn trái, `max-width: 36rem`.
- Cỡ chữ tối thiểu toàn trang: **12px**.

### 2.3 Bố cục từng khối (≤ 700px)

1. **Header**: nền trắng giữ nguyên; nút "Mua Ngay" → gradient cam, chữ trắng; hamburger 3 vạch dày 2.5px màu `--lq-sky-700`, vùng chạm 44×44.
2. **Hero (100svh, giữ art)**: tiêu đề giữ, text-shadow đổi sang xanh trời; CTA "Mua ngay" cao 48px gradient cam chữ trắng; **thêm hàng 3 chip thông tin** ở đáy hero: "👥 2–5 người", "⏱ 30–45 phút", "🎓 Incoterms 2020" (nền trắng 92%, chữ `--lq-sky-700`).
3. **Khối 1 – Giới thiệu**: nền gradient `--lq-sky-100 → trắng`, ẩn ảnh nền trời trống & máy bay; ẩn chữ "LOGISQUEST" (trùng logo), đổi `<h1>` → `<h2>`; tiêu đề hiển thị = "Hải Trình Thương Mại Thu Nhỏ"; eyebrow "GIỚI THIỆU" (CSS `::before`); carousel full-width 4:3 trong card trắng; mô tả đầy đủ (bỏ line-clamp); nút "Xem chi tiết" dạng outline cam.
4. **Khối 2 – Lối chơi**: nền trắng; ribbon → eyebrow pill; ảnh bàn cờ ≤ 260px; đoạn văn 15px đầy đủ; từ khóa `<b class="gameplay-kw">` thành chip vàng nhạt.
5. **Khối 3 – Quy mô**: nền `--lq-sun-50`; ảnh nhóm chơi 4:3 viền trắng 6px; cùng hệ chữ Khối 2.
6. **Khối 4 – 4 trụ cột**: nền gradient `--lq-sky-50 → --lq-sky-100`, ẩn diorama + 6 decor 3D; **lưới 2×2** thẻ dọc 2:3 (không xoay), viền trắng 3px; copy đổi "Nhấp vào" → "Chọn"; bỏ dots + JS carousel.
7. **Khối 5 – Video**: nền `trắng → --lq-sky-50`; biển gỗ → eyebrow pill (ẩn huy chương/vân gỗ); tiêu đề hệ chuẩn; video 16:9 viền trắng 6px.
8. **CTA `#buy`**: nền gradient `--lq-sky-100 → --lq-sun-50`; ảnh hộp sản phẩm nổi phía trên card trắng (chồng −36px); badge vàng; "ĐÃ MỞ" cam 32px; **thêm dòng giá "Giá chỉ 340.000₫"** (`mx-only`); nút chính gradient cam 52px; nút phụ trắng viền xanh chữ `--lq-sky-700`; 3 tính năng dạng lưới 3 cột, chữ 12px, hiện cả dòng phụ.
9. **Footer**: nền `--lq-sky-50`, viền trên 4px cam; cột "Về LogisQuest" + "Đăng ký" full-width, 2 cột link chia đôi, căn trái; link 14px, cao ≥ 32px; copyright nền `--lq-sky-100` chữ `--lq-sky-700`.
10. **Quick-buy bar**: giữ logic, chỉnh nút cao 44px.

### 2.4 Ngoài phạm vi
- Không thay đổi desktop/tablet, không thay ảnh art, không đổi nội dung marketing (ngoài "Nhấp vào" → "Chọn" và dòng giá mobile).
- Không thêm dependency, không thêm framework test.
