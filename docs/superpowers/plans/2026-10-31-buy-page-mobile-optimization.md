# Implementation Plan - Tối Ưu Hóa Toàn Diện Mục Mua Hàng (`buy.html`) Trên Mobile View

## 1. Mục Tiêu & Yêu Cầu
- **Đối tượng:** Toàn bộ trang mua hàng `buy.html` (chứa hero gallery, thông tin sản phẩm, mô tả & thông số, đánh giá, câu hỏi thường gặp, chính sách, banner kêu gọi hành động, floating dock và modal thanh toán checkout).
- **Thẩm mỹ:** Chuẩn phong cách **3D Toy / Sunlit Boardgame Aesthetic**:
  - Font: `Outfit` (Headings, badges, buttons, numbers) & `Montserrat` (Body text).
  - Tone màu: Xanh ngọc đại dương (`#0284C7`), Cam cháy rực rỡ (`#FF6B00`), Vàng nắng ấm (`#F59E0B`), Nền trắng sáng & ngọc nhạt (`#F0F9FF`).
  - Bo góc mềm mại: `16px - 24px`.
  - Đổ bóng đa tầng 3D: `0 8px 24px rgba(2, 132, 199, 0.12)`.
  - Nút bấm tactile dạng viên thuốc 3D (pill capsule) với độ nổi và cảm ứng xúc giác tốt.
  - Tối ưu touch targets: tối thiểu 40–44px cho ngón tay cái.
- **Bảo toàn Desktop (`> 700px`):** Đảm bảo 100% nguyên vẹn bố cục màn hình lớn, cô lập toàn bộ quy tắc responsive vào `@media (max-width: 700px)` trong `mobile-redesign.css`.

---

## 2. Danh Sách Các Hạng Mục Cần Triển Khai

### 2.1. Header & Breadcrumb
- Sửa lỗi tràn horizontal của truck animation trong `.header-actions .order-button`.
- Breadcrumb: Tinh gọn khoảng cách `padding-top: 68px; padding-bottom: 8px;`, font chữ 12px, căn giữa hoặc căn trái mượt mà.

### 2.2. Product Hero & Gallery (`.buy-gallery-col`)
- Khung ảnh chính (`.buy-main-img-frame`):
  - Bo góc 22px, viền `1.5px solid rgba(2, 132, 199, 0.15)`.
  - Hiệu ứng ánh sáng nền 3D mềm mại, bóng đổ `0 12px 32px rgba(2, 132, 199, 0.12)`.
  - Huy hiệu Freeship & Giảm giá: Viên thuốc 3D cam/vàng với icon lửa nhấp nháy.
- Dải ảnh thu nhỏ (`.buy-thumb-row`):
  - 5 nút thumbnail xếp ngang dạng carousel/flex cuộn mượt (`overflow-x: auto; gap: 10px; scrollbar-width: none;`).
  - Nút thumbnail bo tròn 14px, viền 2px chuyển đổi active rõ ràng (`#0284C7` + đổ bóng 3D).
- Hàng bảo chứng uy tín (`.buy-trust-row`):
  - Bố cục 3 huy hiệu gọn gàng dạng viên thuốc 3D, nền `#F0F9FF`, viền `#BAE6FD`, chữ `#0284C7`, không bị ngắt dòng luộm thuộm.

### 2.3. Product Info & Pricing (`.buy-info-col`)
- Tag danh mục: Viên thuốc vàng mật ong `#FEF3C7`, chữ `#D97706`.
- Tiêu đề sản phẩm (`.buy-product-title`):
  - Đổi từ font serif cổ điển sang `Outfit`, `font-size: 26px; font-weight: 800; line-height: 1.25; color: #0C4A6E; text-transform: uppercase;`.
- Đánh giá sao (`.buy-rating-row`): Sao vàng rực rỡ, số lượng đánh giá và lượt mua hiển thị sắc nét.
- Khối giá (`.buy-price-block`):
  - Giá hiện tại: `340.000 ₫` font `Outfit`, `font-size: 30px`, màu cam `#FF6B00`.
  - Giá gốc: Gạch ngang xám nhẹ `400.000 ₫`.
  - Huy hiệu tiết kiệm: Viên thuốc `-15% TIẾT KIỆM` nền `#FFEDD5`, chữ `#C2410C`.
- Khối Voucher (`.buy-voucher-box`):
  - Thiết kế kiểu coupon ticket 3D: Bo tròn 16px, viền nét đứt `#0284C7`, nền gradient `#F0F9FF` sang `#FFFBEB`.
  - Nút copy mã `SHIP15` dạng pill tactile dễ bấm.

### 2.4. Description, Accordions & Quantity
- Hộp mô tả (`.buy-desc-block`): Bo góc 18px, đổ bóng 3D nhẹ, typography thoáng đãng.
- Accordion Thông số & Linh kiện (`.buy-acc-item`):
  - Nút bấm to rõ, bo tròn 14px, nền `#F8FAFC`, icon chevron xoay mượt 180°.
- Bộ chọn số lượng (`.buy-qty-picker`):
  - Hai nút `+` và `-` đạt chuẩn touch target tối thiểu `44px x 44px`, bo góc 12px, cảm ứng xúc giác 3D.
  - Ô số lượng canh giữa, font `Outfit` to rõ.
- Nhóm nút mua (`.buy-action-group`):
  - Nút `#btnBuyNow`: CTA viên thuốc 3D cam rực rỡ `#FF6B00`, bóng đổ `0 6px 20px rgba(255, 107, 0, 0.35)`, chiều cao 52px, chữ to 16px font `Outfit`.
  - Nút Fanpage `#btnContactFB`: Viền xanh `#0284C7`, bo tròn 16px, chiều cao 48px.

### 2.5. Features Strip (`.buy-features-strip`)
- Lưới 4 thẻ tính năng: Bố cục 2x2 cân xứng (`grid-template-columns: repeat(2, 1fr)`).
- Thẻ tính năng: Bo tròn 18px, viền ngọc nhẹ, icon 3D trong vòng tròn màu pastel, tiêu đề font `Outfit` 15px.

### 2.6. Reviews Section (`.buy-reviews-section`)
- Khung tổng quan đánh giá (`.buy-rating-summary`):
  - Xếp dọc trên mobile: Điểm số 5.0 to tròn nổi bật ở trên, 5 thanh tiến trình sao xếp gọn ở dưới.
  - Bo tròn 20px, nền gradient 3D `#F0F9FF` sang trắng.
- 4 Thẻ đánh giá (`.buy-review-card`):
  - Bo góc 18px, viền `1.5px solid rgba(2, 132, 199, 0.1)`, đổ bóng mềm.
  - Avatar, badge xác thực "Đã mua hàng", số sao và nội dung bình luận căn lề ngay ngắn.

### 2.7. FAQ & Policies (`.buy-faq-section`, `.buy-policies-section`)
- 4 Câu hỏi thường gặp: Thiết kế thẻ accordion 3D bo góc 16px, đóng mở mượt.
- 4 Chính sách: Lưới 2x2 cân xứng, bo góc 18px, icon trong khung ngọc, chữ rõ nét.

### 2.8. Bottom CTA Banner (`.buy-cta-banner`)
- Banner bo tròn 22px, nền gradient xanh biển đậm 3D `#0284C7` đến `#0369A1`.
- Nút CTA cam nổi bật, có khoảng đệm an toàn phía dưới (`margin-bottom: 96px`) để không bị floating dock che khuất.

### 2.9. Sticky Floating Quick-Buy Dock (`.buy-floating-dock`)
- Khung dock: Bo góc 20px, hiệu ứng kính mờ glassmorphism `rgba(255, 255, 255, 0.94)`, viền `1.5px solid rgba(2, 132, 199, 0.25)`, đổ bóng sâu `0 10px 30px rgba(2, 132, 199, 0.2)`.
- Các nút tăng/giảm số lượng trên dock: Phóng to touch target lên `36px x 36px`, bo tròn viên sỏi.
- Nút "MUA NGAY": Viên thuốc cam nổi 3D, thao tác mở modal thanh toán tức thì.

### 2.10. Checkout Modal (`#checkoutModal`, `.checkout-modal-card`)
- Khung thẻ modal: Bo góc 24px, `max-height: 85vh`, thanh cuộn êm ái.
- Nút đóng modal: Nút 3D tròn sticky ghim góc trên bên phải, luôn thấy dù cuộn form.
- Các ô input: Bo góc 12px, viền xanh `#BAE6FD`, focus xanh `#0284C7`.
- Nút xác nhận đặt hàng: Nút viên thuốc 3D full-width, màu cam `#FF6B00`, nổi bật.

---

## 3. Quy Trình Kiểm Chứng & Báo Cáo
1. Viết toàn bộ CSS responsive vào khối `@media (max-width: 700px)` trong `mobile-redesign.css`.
2. Kiểm tra `buy.html` và `buy.js` xem có cần bổ sung thuộc tính/class hỗ trợ hay không.
3. Dùng Mobile View Simulator chụp ảnh 8 phân hệ chính trên iPhone (`390 x 844`).
4. Kiểm chứng Desktop View (`1440 x 900`) chụp 4 phân hệ chính để bảo đảm 100% nguyên vẹn.
5. Cập nhật artifact `walkthrough.md` với đầy đủ Carousel hình ảnh và bảng phân tích lỗi/khắc phục.
6. Hoàn tất với `<!-- GOAL_COMPLETE -->`.
