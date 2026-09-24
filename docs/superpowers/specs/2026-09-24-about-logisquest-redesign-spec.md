# Đặc Tả Thiết Kế: Tái Thiết Kế Phân Hệ "Giới Thiệu Về LogisQuest" (Sunlit Maritime Light Mode)

## 1. Mục Tiêu & Triết Lý Thiết Kế

- **Định vị:** Tái thiết kế toàn diện khối `#aboutView` trong trang chủ LogisQuest, thay thế hoàn toàn nội dung và hình ảnh cũ.
- **Phong cách mỹ thuật:** **Sunlit Maritime Light Mode** (Khơi nguồn cảm hứng hàng hải ngập tràn ánh nắng biển, trong trẻo, sang trọng và hiện đại).
- **Quy tắc bất biến:** **TUYỆT ĐỐI KHÔNG DÙNG NỀN TỐI ĐEN / DARK MODE**. Mọi bề mặt sử dụng trắng ngọc trai (`#FFFFFF`), xanh tuyết sương (`#F0F9FF`), xanh biển nhạt (`#EBF5FF`), kết hợp các điểm nhấn xanh ngọc (`#0EA5E9`), vàng nắng (`#FFB800`) và cam hoàng hôn (`#F05A22`).
- **Nguồn thiết kế đối chiếu:** Đã sinh trực tiếp từ Google Stitch MCP:
  - **Project ID:** `14334326521163640139`
  - **Screen ID:** `e155efac591f453cb58a824d825a59d6`
  - **Design System:** `Maritime Strategic Precision`

---

## 2. Bảng Mã Màu & Tokens Sử Dụng

| Tên Token | Mã Hex / Giá trị | Ứng dụng trong `#aboutView` |
| :--- | :--- | :--- |
| `Nền chính` | `#FFFFFF` | Nền thẻ card, nền các section chính |
| `Nền phụ / Tint` | `#F0F9FF` & `#EBF5FF` | Nền xen kẽ, gradient chuyển tiếp êm ái |
| `Màu chữ chính` | `#0A2540` / `#131B2E` | Tiêu đề và văn bản đọc rõ nét, tương phản chuẩn WCAG AAA |
| `Màu chữ phụ` | `#475569` | Mô tả chi tiết, chú thích nhỏ |
| `Chủ đạo (Primary)` | `#006591` / `#0EA5E9` | Viền card, huy hiệu tag, icon điểm nhấn |
| `Hành động (CTA)` | `#F05A22` | Nút kêu gọi hành động chính, huy hiệu nổi bật |
| `Viền Kính (Glass Border)`| `rgba(14, 165, 233, 0.15)` | Viền thẻ card glassmorphism |
| `Đổ bóng (Shadow)` | `0 10px 30px -5px rgba(14, 165, 233, 0.08)` | Đổ bóng biển khơi nhẹ nhàng |

---

## 3. Cấu Trúc 5 Phân Hệ Mới

### Phân Hệ 1: Hero Vision & Impact Metrics (Tầm Nhìn & 4 Chỉ Số Đột Phá)
- **Huy hiệu:** `TỔNG QUAN VỀ DỰ ÁN BOARD GAME LOGISTICS ĐẦU TIÊN TẠI VIỆT NAM` (kèm icon la bàn vector).
- **Tiêu đề chính:** *Khởi Sinh Từ Khát Vọng Số Hóa & Thực Nghiệm Chuỗi Cung Ứng*.
- **Đoạn dẫn:** *LogisQuest chuyển hóa những nguyên lý vận tải hàng hải phức tạp, ma trận Incoterms 2020 và bài toán cân đối dòng tiền quốc tế thành trải nghiệm cờ bàn chiến thuật kịch tính và đầy cảm hứng.*
- **Nút hành động:** 
  - Nút 1: *Khám Phá Bộ Cờ (Inside the Box)* (Cuộn nhanh xuống linh kiện).
  - Nút 2: *Xem Thư Viện Thẻ Bài* (`data-nav="cards"`).
- **4 Thẻ Chỉ Số Ấn Tượng (Grid 4 cột):**
  1. **100% Thiết Kế Việt**: Nghiên cứu chuyên sâu bởi đội ngũ chuyên gia Logistics & Gamification Việt Nam.
  2. **11 Điều Khoản Incoterms 2020**: Mô phỏng chuẩn xác từ EXW, FOB, CIF đến DDP theo ấn bản Quốc tế ICC.
  3. **50+ Biến Cố Hàng Hải**: Thách thức bão biển, ách tắc kênh đào Suez, kiểm hóa hải quan & biến động cước tàu.
  4. **2 – 6 Thuyền Trưởng Đấu Trí**: Tranh tài phân luồng vận tải container và tối ưu chu kỳ xoay vòng vốn cảng biển.

---

### Phân Hệ 2: Bộ Linh Kiện Cao Cấp (Inside The Box)
- **Tiêu đề:** *Bộ Linh Kiện Board Game Tiêu Chuẩn Quốc Tế*.
- **Mô tả:** *Từng chi tiết được gia công tỉ mỉ bằng chất liệu thân thiện môi trường, hoàn thiện cán màng vân linen sang trọng.*
- **5 Khối Linh Kiện Trưng Bày:**
  1. **Bản Đồ Hải Trình Toàn Cầu (60x80cm)**: Bàn cờ gập 4 lớp chống nước, khắc họa 5 cụm cảng biển quốc tế và các tuyến hàng hải tơ lụa.
  2. **120+ Thẻ Bài Cán Linen Cao Cấp**: Thẻ Sự Kiện Rủi Ro, Thẻ Cảng Biển Mở Rộng, Thẻ Hợp Đồng Vận Tải Quốc Tế in dập nổi sắc nét.
  3. **Đội Tàu & Container 3D Độc Quyền**: Mô hình tàu mẹ FCL và hàng chục khối token container tiêu chuẩn TEU (Hàng bách hóa, Hàng lạnh Reefer, Hàng nguy hiểm Hazmat).
  4. **Sổ Nhật Ký & Bảng Kê Vận Đơn**: Sổ giao dịch tài chính cảng, biểu mẫu tính cước lưu bãi (Demurrage) và kiểm toán thuế xuất nhập khẩu.
  5. **Xúc Xắc Thời Tiết & Gỗ Tự Nhiên**: Bộ xí ngầu hải lưu và con trỏ luồng lạch chế tác từ gỗ sồi tự nhiên tinh xảo.

---

### Phân Hệ 3: Ba Trụ Cột Chiến Thuật (Three Strategic Pillars)
- **Tiêu đề:** *Triết Lý Thiết Kế: Cân Bằng Giữa Học Thuật & Giải Trí Cao Cấp*.
- **3 Thẻ Trụ Cột:**
  - **Trụ Cột 01 - Mô Phỏng Thực Tế Ma Trận Incoterms 2020**: Phân định rõ ràng trách nhiệm phân chia chi phí, điểm chuyển giao rủi ro và trách nhiệm bảo hiểm hàng hải giữa người mua và người bán qua từng nước đi.
  - **Trụ Cột 02 - Đấu Trí Tối Ưu Chi Phí & Kiểm Soát Rủi Ro**: Không đơn thuần dựa vào may rủi; người chơi phải giải quyết bài toán biến động giá dầu (BAF), bãi bỏng container trống và các cú sốc chuỗi cung ứng toàn cầu.
  - **Trụ Cột 03 - Giáo Dục Trực Quan & Khơi Gợi Tinh Thần Đồng Đội**: Cầu nối thực tiễn hoàn hảo cho sinh viên chuyên ngành và doanh nghiệp đào tạo onboarding nhân sự logistics một cách sinh động, gắn kết.

---

### Phân Hệ 4: Đối Tượng Trải Nghiệm Mục Tiêu (Target Explorers)
- **Tiêu đề:** *LogisQuest Dành Cho Ai?*.
- **3 Thẻ Chân Dung Người Chơi:**
  1. **Sinh Viên & Giảng Viên Logistics**: Chuyển hóa lý thuyết khô khan thành phản xạ tình huống thực tế trên giảng đường và phòng lab mô phỏng.
  2. **Doanh Nghiệp & Chuyên Gia Đào Tạo**: Công cụ team building gắn kết, đánh giá tư duy quản trị rủi ro và kỹ năng đàm phán hợp đồng thương mại quốc tế.
  3. **Cộng Đồng Board Game Chiến Thuật**: Trải nghiệm euro-game cơ chế quản lý tài nguyên sâu sắc, tương tác cao với chủ đề hàng hải chân thực.

---

### Phân Hệ 5: Sunlit Call-to-Action Ribbon (Dải Kêu Gọi Hành Động)
- **Tiêu đề:** *Sẵn Sàng Làm Chủ Hải Trình Logistics Toàn Cầu?*
- **Đoạn dẫn:** *Trải nghiệm ngay bộ cờ chiến thuật tiên phong kết hợp hoàn hảo giữa tri thức thương mại quốc tế và niềm vui giải trí đỉnh cao.*
- **Nút hành động:**
  - Nút Cam Hoàng Hôn: **Khám Phá Cách Chơi** (`data-nav="gameplay"`).
  - Nút Viền Xanh Ngọc: **Xem Bảng Giá & Đặt Mua** (`data-nav="home"`, mở modal đặt mua).
