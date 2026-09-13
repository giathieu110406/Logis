# [2026-09-13] Thiết Kế Lại Hero Banner Cách Chơi (Gameplay View)

- **Phân loại**: `Feature` / `Refactor`
- **Trạng thái**: `Done`
- **Tác giả / Người thực hiện**: Agent & Giathieu

## 1. Bối cảnh & Vấn đề (Context / Issue)
- Tái thiết kế toàn bộ khu vực Hero Banner của trang **Cách Chơi (`#gameplayView`)** theo đúng bản mẫu đồ họa cao cấp của LogisQuest: tích hợp ảnh nền 3D gốc cảng biển (`nền hero banner.png`), tối ưu hóa lớp tương phản, typography, thông số trò chơi và thanh tiến trình stepper.

## 2. Thay đổi kỹ thuật (Changes Made)
- **Tài nguyên**: Sao chép ảnh nền gốc vào `assets/gameplay-hero-bg.png`.
- **Giao diện [index.html](file:///c:/Users/Tran%20Gia%20Thieu/.gemini/antigravity-ide/scratch/Logis/index.html)**:
  - Cấu trúc lại khối `#gameplayView > .gp-hero` đạt `height: 100vh` che lấp toàn màn hình khi mở trang.
  - Bổ sung lớp sương làm mờ tương phản `.gp-hero-wash`.
  - Thêm slogan bay bổng nghệ thuật `.gp-floating-quote` ("More Than a Game...").
  - Thêm cột thương hiệu dọc mép phải `.gp-vertical-rail` (`LOGISQUEST • PLAY • LEARN • CONNECT` + mỏ neo).
  - Chuẩn hóa nút CTA: `[▶] BẮT ĐẦU HÀNH TRÌNH [>]` gắn liền với khối chữ bên trái.
  - Loại bỏ hoàn toàn thanh stepper tự chế trong hero, phục hồi thanh trượt tab `.gp-tabs` nguyên bản (Tổng Quan, Hướng Dẫn Chi Tiết, Thành Phần, Thuật Ngữ) ngay dưới Hero.
- **Định dạng [styles.css](file:///c:/Users/Tran%20Gia%20Thieu/.gemini/antigravity-ide/scratch/Logis/styles.css)**:
  - Thiết lập `.gp-hero` với `height: 100vh; min-height: 100vh; align-items: stretch; justify-content: space-between;`.
  - `.gp-hero-copy` được cố định `align-self: flex-start`, căn chỉnh padding & font-size tiêu đề lớn chuẩn thiết kế (không đè lên con tàu và quote).
  - Tọa độ `.gp-floating-quote` cố định tại góc biển phải `left: 48%; top: 17%;`.
  - Thanh thông số `.gp-stats-bar` căn giữa phía dưới với kính mờ glassmorphism.
  - Khôi phục và làm đẹp thanh tabs `.gp-tabs` kính mờ hiện đại ngay bên dưới Hero.

## 3. Kiểm chứng (Verification)
- Đã chạy Dev Server và đo đạc viewport thực tế qua Playwright:
  - Viewport Height = 752px $\rightarrow$ Hero Height = 752.49px (Phủ trọn 100% màn hình khi vừa mở).
  - Tọa độ khối tiêu đề: `left: 70.92px`, không che đè tàu và quote (`left: 668.38px`).
  - Chụp screenshot đối chiếu tại [gameplay-hero-perfect.png](file:///C:/Users/Tran%20Gia%20Thieu/.gemini/antigravity-ide/brain/344d3756-959c-4522-bc04-3449bf3d8a79/gameplay-hero-perfect.png).
  - Kiểm tra thao tác cuộn xuống hiển thị thanh tab và nội dung tại `gameplay-scrolled.png`.
