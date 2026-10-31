# Kế Hoạch Tối Ưu Hóa Toàn Diện Mục Giới Thiệu (About & Team Views) Trên Mobile View

## 1. Tổng Quan & Mục Tiêu
- **Nhiệm vụ:** Tối ưu hóa toàn diện giao diện Mobile (`<= 700px`) cho toàn bộ mục **Giới Thiệu**, bao gồm cả 2 phân hệ:
  1. **`#aboutView` (Về LogisQuest):** Trang giới thiệu tổng quan, thông số, trọn bộ linh kiện boardgame, 3 trụ cột giá trị và nhóm đối tượng người chơi.
  2. **`#teamView` (Đội Ngũ Sáng Tạo):** Banner tập thể, lời tự bạch, Tầm nhìn & Sứ mệnh, và hệ thống 5 thẻ thành viên tương tác cao cấp.
- **Phong Cách Thiết Kế:** **3D Toy / Sunlit Boardgame Aesthetic** đồng bộ toàn hệ sinh thái LogisQuest:
  - Bảng màu: Xanh đại dương (`#0284C7`), Xanh ngọc (`#06B6D4`), Cam năng động (`#F97316`), Vàng nắng (`#F59E0B`).
  - Hình khối: Bo góc cong mềm mại (16px – 24px), viền sáng nổi (glassmorphism/3D Toy border), bóng đổ đa tầng mịn.
  - Typography: Đồng bộ font hiện đại `Outfit` / `Montserrat`, loại bỏ hoàn toàn các kiểu chữ serif báo chí thô cứng lạc lõng.
- **Ràng Buộc Tuyệt Đối:**
  - Toàn bộ CSS mới chỉ nằm trong `@media (max-width: 700px)` của `mobile-redesign.css`.
  - Giữ nguyên vẹn **100% giao diện Desktop (`> 700px`)**.
  - Không phá vỡ các hàm JavaScript và hành vi chuyển trang `switchView()`.

---

## 2. Danh Sách Lỗi Kỹ Thuật & Giải Pháp Chi Tiết

### A. Phân Hệ 1: `#aboutView` (Về LogisQuest)
1. **Hero Banner & Tiêu Đề:**
   - *Hiện trạng:* Tiêu đề dùng font serif `Noto Serif`, nút CTA màu cam thô ráp.
   - *Giải pháp:* Chuyển tiêu đề sang font `Outfit` 900 đậm chất 3D boardgame, nút CTA chính dạng viên thuốc gradient cam bo tròn 999px có hiệu ứng nổi 3D, nút phụ viền ngọc mờ. Ảnh bàn cờ căn giữa bo viền mềm mại.
2. **Metrics Grid (4 Chỉ Số Thống Kê):**
   - *Hiện trạng:* Số to font serif báo chí (`Georgia, serif 55px`), nền trắng phẳng, thiếu `scroll-margin-top` nên bị header 64px che mép trên khi cuộn tới.
   - *Giải pháp:* Gán `scroll-margin-top: 72px !important;`. Tái cấu trúc 4 thẻ thành **3D Toy Stats Pods** bo góc 18px, nền kính mờ trắng ngọc, icon tròn 3D rực rỡ, con số to font `Outfit` 800 gradient xanh biển, nhãn phụ bên dưới rõ ràng.
3. **Unboxing Kit (Trọn Bộ Linh Kiện):**
   - *Hiện trạng:* Lưới 2 cột card phẳng, viền xám nhạt mờ nhạt.
   - *Giải pháp:* Nâng cấp card linh kiện thành **Toy Collector Cards** với khung ảnh 3D nổi bật, viền xanh dương nhẹ `rgba(2, 132, 199, 0.16)`, badge tiêu đề đậm nét, chữ phụ màu xám navy dịu mắt.
4. **Pillars Grid (3 Trụ Cột Nền Tảng):**
   - *Hiện trạng:* Lỗi chính tả dính chữ `Nền tảng tạo nênLogisQuest`, số thứ tự `01` màu xanh nhạt chìm vào ảnh, bị header che khi cuộn.
   - *Giải pháp:* Sửa lỗi chính tả trong `index.html`. Bổ sung `scroll-margin-top: 72px !important;`. Card 3 trụ cột chuyển thành thẻ bo tròn 20px, số thứ tự `01`, `02`, `03` chuyển thành pill huy hiệu 3D nổi bật ở góc trên.
5. **Audience & CTA (Đối Tượng & Kêu Gọi):**
   - *Hiện trạng:* Thẻ đối tượng font serif, card phẳng.
   - *Giải pháp:* Tái thiết 3 card đối tượng với icon bo tròn sắc nét, tiêu đề font `Outfit` hiện đại, padding thoáng đãng. Bổ sung đệm an toàn `margin-bottom: 84px !important;` ở đáy view.

---

### B. Phân Hệ 2: `#teamView` (Đội Ngũ Sáng Tạo)
1. **Team Hero Banner:**
   - *Hiện trạng:* Chiều cao `100vh` trên mobile đẩy nội dung lời tự bạch quá xa.
   - *Giải pháp:* Điều chỉnh trên mobile `height: 52vh; min-height: 380px;`, căn chỉnh overlay gradient đen xanh và tiêu đề cân đối.
2. **Lời Tự Bạch & Tầm Nhìn / Sứ Mệnh:**
   - *Hiện trạng:* Tiêu đề `CHÚNG MÌNH LÀ TEAM LOGISQUEST!` bị header che khi cuộn.
   - *Giải pháp:* Bổ sung `scroll-margin-top: 72px !important;` cho `.team-about-intro` và `.team-vision-mission-wrapper`. Khung tự bạch bo góc 22px với viền xanh ngọc 3D và đổ bóng sâu.
3. **Slider 5 Thành Viên Sáng Tạo (`#editorialTeamSlider`):**
   - *Hiện trạng:*
     - Header che mất tiêu đề tên thành viên.
     - Khối split `100vh` đẩy pagination dots xuống sát mép đáy màn hình khiến người dùng không nhìn thấy.
     - Không có nút chuyển thành viên trực quan (Next/Prev buttons), người dùng không biết cách xem 4 thành viên còn lại.
   - *Giải pháp:*
     - Khống chế chiều cao slider trên mobile khoảng `620px - 660px` hoặc `calc(100vh - 76px)`, căn giữa cân đối.
     - Tách biệt rõ ràng 2 phần: Ảnh thành viên trong khung bo viền tranh màu 3D Toy nổi bật; Khối thông tin gồm Tên thành viên to rõ, Badge chức danh viên thuốc màu cam/xanh nổi, bio text dễ đọc.
     - Nâng cấp thanh điều khiển:
       - Phóng to 5 Dots chỉ số thành viên (dot active dài 28px).
       - Thêm 2 nút chạm mũi tên "‹" và "›" (Touch Capsule Navigators) ở 2 bên hoặc trên thanh controls để người dùng mobile có thể bấm chuyển thành viên ngay lập tức.
     - Bổ sung đệm an toàn đáy `margin-bottom: 84px !important;`.

---

## 3. Lộ Trình Triển Khai (Checklist)

- [ ] **Bước 1:** Sửa lỗi chính tả text dính chữ trong `index.html` (`Nền tảng tạo nênLogisQuest` $\rightarrow$ `Nền tảng tạo nên LogisQuest`).
- [ ] **Bước 2:** Bổ sung markup 2 nút điều hướng mũi tên trong `#editorialTeamSlider` (nếu cần) hoặc hỗ trợ qua CSS/JS.
- [ ] **Bước 3:** Viết toàn bộ CSS tối ưu cho `#aboutView` và `#teamView` trong `mobile-redesign.css` (`@media (max-width: 700px)`).
- [ ] **Bước 4:** Bump version cache trong `index.html` lên `?v=20261031h`.
- [ ] **Bước 5:** Chụp ảnh kiểm chứng Mobile View Simulator cho từng phân hệ (Hero, Metrics, Kit, Pillars, Audience, Team Hero, Team Intro, Team Members 1..5).
- [ ] **Bước 6:** Tự đánh giá khiếm khuyết trên ảnh, lặp lại tinh chỉnh CSS/JS nếu còn bất kỳ tì vết nào.
- [ ] **Bước 7:** Kiểm tra xác minh giao diện Desktop `1440x900` của cả `#aboutView` và `#teamView` đảm bảo 100% nguyên vẹn.
- [ ] **Bước 8:** Cập nhật `walkthrough.md`, tổng kết báo cáo và hoàn tất `/goal`.
