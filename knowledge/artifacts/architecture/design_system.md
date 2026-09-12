# Sunlit Maritime Design System

Quy chuẩn hệ thống thiết kế giao diện (UI) và ngôn ngữ hình ảnh của LogisQuest, được chuẩn hóa từ [design.md](file:///c:/Users/Tran%20Gia%20Thieu/.gemini/antigravity-ide/scratch/Logis/design.md).

---

## 1. Triết lý thiết kế cốt lõi

> ⚠️ **CRITICAL DESIGN RULE**: 
> - **Tuyệt đối TRÁNH giao diện tối màu (Dark Mode)** và tránh để màu Xanh Navy đậm (`#0B2545`, `#071a2f`) chiếm ưu thế nền trang.
> - Toàn bộ giao diện áp dụng phong cách **TƯƠI SÁNG (Sunlit Maritime Light Mode)**: Bầu không khí cảng biển hiện đại ngập tràn ánh nắng tự nhiên, nền trắng kem và xanh biển nhạt (`#EBF5FF` – `#F0F8FF`).
> - Tỷ lệ hiển thị Khối 5 bắt buộc là **16:10**.

---

## 2. Bảng mã màu (Color Tokens)

### 2.1. Màu thương hiệu & Hành động chính (Brand & Action Colors)
| Tên Token | Mã Hex | RGB | Vai trò & Ứng dụng |
| :--- | :--- | :--- | :--- |
| `--color-ocean-deep` | `#0B2545` | `11, 37, 69` | Heading chính, text đậm nét, viền khung nhấn |
| `--color-sky` | `#0099FF` | `0, 153, 255` | Link, icon accent, highlight viền thẻ sáng |
| `--color-orange-cta` | `#F05A22` | `240, 90, 34` | CTA chính (Đặt mua ngay, Tìm hiểu luật), tag giảm giá |
| `--color-yellow-sun` | `#FFB800` | `255, 184, 0` | Huy hiệu (Badge), đánh giá sao, container Incoterms |

### 2.2. Màu danh mục thẻ bài Logistics (Category Accent Colors)
Mỗi nhóm thẻ bài mang một màu nhận diện riêng biệt:
- **Thẻ Phương tiện (Green)**: `#22C55E` / `#16A34A` — Thể hiện sự lưu thông, an toàn, vận hành suôn sẻ.
- **Thẻ Sự kiện rủi ro (Red)**: `#E11D48` / `#DC2626` — Thể hiện bão biển, sự cố cảng, biến động chi phí.
- **Thẻ Chợ giao thương (Blue)**: `#2563EB` / `#1D4ED8` — Thể hiện các giao dịch thương mại, trao đổi hàng hóa.
- **Thẻ Incoterms (Yellow)**: `#FACC15` / `#EAB308` — Thể hiện quy tắc điều khoản thương mại quốc tế.

### 2.3. Nền & Màu trung tính (Backgrounds & Neutrals)
- `--bg-primary`: `#FFFFFF` (Nền thẻ bài, card nội dung).
- `--bg-sky-tint`: `#EBF5FF` đến `#F0F8FF` (Nền các section xen kẽ, gradient chuyển giao giữa các khối).
- `--text-muted`: `#475569` (Văn bản mô tả, font kích cỡ nhỏ).
- `--border-glass`: `rgba(255, 255, 255, 0.6)` kết hợp với `backdrop-filter: blur(12px)`.

---

## 3. Hệ thống Typography

- **Display / Heading Font**: `Montserrat` hoặc `Outfit`, `SVN-Gilroy` (Sans-serif hiện đại, nét đậm, mạnh mẽ).
  - `H1 / Hero Title`: 40px – 52px | Weight: 800 (ExtraBold) | Letter-spacing: -0.5px | Uppercase.
  - `H2 / Section Title`: 28px – 36px | Weight: 800 (ExtraBold) | Text-transform: Uppercase.
  - `Sub-headline`: 18px – 22px | Weight: 500 (Medium).
- **Body Font**: `Inter`, `Roboto`, hoặc `Be Vietnam Pro` (Tối ưu khả năng đọc tiếng Việt có dấu).
  - `Body Regular`: 15px – 16px | Weight: 400 | Line-height: 1.6.
  - `Body Highlight`: 15px – 16px | Weight: 700 | Màu: `#0099FF` hoặc `#0B2545`.
  - `Badge / Label`: 12px – 14px | Weight: 700 | Uppercase | Letter-spacing: 0.5px.

---

## 4. Spacing, Bo góc (Radius) & Đổ bóng (Shadows)

### Border Radius:
- `Small (sm)`: `8px` (Icon container, tag danh mục nhỏ).
- `Medium (md)`: `12px – 16px` (Nút bấm, form input, tabs).
- `Large (lg)`: `24px – 32px` (Card sản phẩm, khung hình ảnh, review card).
- `Pill (full)`: `9999px` (Ruy băng đấu trí, badge trạng thái).

### Shadows:
- `Card Glow`: `0 20px 50px -10px rgba(0, 110, 255, 0.15)`
- `Button Shadow`: `0 8px 24px -4px rgba(240, 90, 34, 0.4)`
- `3D Floating`: `0 15px 35px rgba(11, 37, 69, 0.12)`

---

## 5. Hiệu ứng & Micro-interactions

- **Wave Divider**: Các đường cắt phân đoạn dạng sóng biển SVG lượn sóng (`buy-hero-wave-bottom`) kết nối mượt mà giữa các khối nền trắng và xanh nhạt.
- **Hover Card Lift**: Khi hover vào card tính năng hoặc thẻ bài, card dịch chuyển `transform: translateY(-6px)` kèm theo tăng cường độ đổ bóng.
- **Accordion Animation**: Mở đóng trượt mượt mà (`max-height` transition) kèm icon xoay 180 độ.
