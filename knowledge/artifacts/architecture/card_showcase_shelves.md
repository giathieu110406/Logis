# Card Showcase Shelves & Dual-Mode Architecture (Thư Viện Thẻ Bài)

Tài liệu thiết kế kiến trúc và giải pháp kỹ thuật chi tiết cho phân hệ **Thư viện Thẻ Bài (Card Showcase Shelves)** của nền tảng LogisQuest.

---

## 1. Tổng Quan Kiến Trúc & Triết Lý Thiết Kế

Phân hệ Thư viện Thẻ Bài được tái thiết kế toàn diện nhằm giải quyết vấn đề danh sách cuộn dọc đơn điệu (36 thẻ bài kéo dài vô tận) và hiện tượng "hộp trong hộp" rối mắt, chuyển sang mô hình **Kệ Trưng Bày Đa Sắc Tầng (Layered Showcase Shelves)** mang tính trải nghiệm bảo tàng số hiện đại.

### 1.1. Bộ Tài Nguyên Thiết Kế Chuẩn Hóa (`assets/shelves-new/`)
Toàn bộ 12 tài nguyên đồ họa chính thức được chuẩn hóa tên file ASCII web-safe:
- **4 Tấm Nền Kệ Trưng Bày (Tỷ lệ 3:1 - 2172 x 724)**:
  - `nen-phuong-tien.png`: Sóng ngọc bích, hoa tiêu la bàn, hải âu và slogan viết tay *"Move the World!"*.
  - `nen-cho.png`: Sóng xanh dương hải cảng, bóng cần cẩu bến bãi container.
  - `nen-incoterm.png`: Sóng vàng hoàng gia, quả địa cầu, đường bay logistics và slogan *"Same Rules, A Bigger World!"*.
  - `nen-su-kien.png`: Sóng đỏ san hô cảnh báo, biển tam giác nguy hiểm và slogan *"Prepare, Adapt, Go Further!"*.
- **4 Mascot 3D Chibi (Độ phân giải cao 1254 x 1254, trong suốt)**:
  - `mascot-phuong-tien.png`: Con tàu container 3D bệ vệ mang cờ LQ và bọt sóng trắng.
  - `mascot-cho.png`: Chibi đội mũ LQ xanh cầm tablet bên cạnh khối container và cần cẩu cảng.
  - `mascot-incoterm.png`: Chibi mũ bảo hộ vàng rạng rỡ cầm bảng Global Trade và kiện hàng.
  - `mascot-su-kien.png`: Chibi lính cứu hỏa mũ đỏ có đèn còi hiệu, loa phóng thanh và bảng Risk Management.
- **4 Tấm Thẻ Tab Backplate (Tỷ lệ 828 x 1280)**:
  - `tab-xanh.png`, `tab-xanh-duong.png`, `tab-vang.png`, `tab-do.png`.

---

## 2. Kiến Trúc Thẻ Bài Lồng Ghép (Layered Tabbed Card)

Cấu trúc mỗi lá bài trên kệ gồm 2 tầng vật lý:
```html
<div class="tabbed-card-item" data-card-title="Tên Thẻ">
  <div class="tabbed-card-frame">
    <!-- Tầng 1: Backplate Tab Màu (phóng to 10% để nổi bật viền và tab gập) -->
    <img src="assets/shelves-new/tab-[color].png" class="card-tab-backdrop">
    
    <!-- Tầng 2: Thẻ Bài Trắng (hạ thấp xuống 28px để lộ đỉnh tab và hoa tiêu) -->
    <div class="card-inner-plate">
      <img src="card-artwork.png" class="card-front-thumb">
    </div>
  </div>
  <div class="tabbed-card-label">Tên Thẻ</div>
</div>
```

### Các Thông Số Tinh Chỉnh Cốt Lõi:
- **`.card-tab-backdrop`**: `transform: scale(1.1); transform-origin: center center;` -> Nở rộng 10% xung quanh thẻ bài.
- **`.card-inner-plate`**: `margin-top: 28px; height: 78%;` trong container có `align-items: flex-start` -> Thẻ trắng hạ thấp xuống vừa vặn, mép dưới ôm sát tab, đỉnh tab và hoa tiêu lộ ra rõ nét.
- **Hover micro-interaction**: Khi rê chuột, thẻ nâng bổng `translateY(-8px) scale(1.04)` và đổ bóng phát sáng màu đại dương.

---

## 3. Cơ Chế Cuộn Ngang (Horizontal Smooth Scroll)

Thay vì chuyển đổi gián đoạn theo trang/tab, toàn bộ thẻ bài của danh mục được render vào một thanh trượt liên tục:
- **CSS**:
  - `overflow-x: auto; scroll-behavior: smooth;`
  - `scroll-snap-type: x mandatory; scrollbar-width: none;`
  - `.shelf-cards-track-wrapper`: có `padding: 0 38px;` dành khoảng trống cố định cho 2 nút mũi tên tròn ở 2 đầu ngoài cùng, ngăn tuyệt đối việc nút bấm che đè lên thẻ bài.
- **JavaScript Interaction**:
  - Cặp nút `<` và `>` kích hoạt `track.scrollBy({ left: ±track.clientWidth * 0.72, behavior: 'smooth' })`.
  - Thanh chấm tròn (pagination dots): Lắng nghe sự kiện `scroll` trên track, tự động tính toán tỷ lệ cuộn để cập nhật class `.active` đồng bộ, đồng thời hỗ trợ click vào dot để `scrollTo` nhanh đến phân đoạn mong muốn.

---

## 4. Kỹ Thuật Căn Chỉnh Thị Giác Mascot (Visual Bottom-Touch Alignment)

### Phát Hiện Khoảng Trống Trong Suốt (Transparent Padding)
Phân tích dữ liệu pixel Canvas nhị phân cho thấy tệp ảnh PNG gốc có khoảng đệm trong suốt ở chân:
1. `mascot-phuong-tien.png`: 114px (~9.1% chiều cao).
2. `mascot-cho.png`: 67px (~5.3% chiều cao).
3. `mascot-incoterm.png`: 52px (~4.1% chiều cao).
4. `mascot-su-kien.png`: 36px (~2.9% chiều cao).

### Bù Trừ Tọa Độ Để Đáy Thị Giác Chạm Đúng Viền Đáy Khối:
- **Khối 1 (Phương Tiện)**: `width: 96%; max-width: 374px; bottom: -60px; left: 68px;` -> Con tàu bệ vệ, chân sóng nước trắng xóa ôm sát mép đáy dưới khối, chữ *"Move the World!"* thoáng đãng.
- **Khối 2 (Thẻ Chợ)**: `width: 96%; max-width: 350px; bottom: -38px; left: 50px;` -> Chân đế cảng và chibi chạm đúng mép đáy dưới khối.
- **Khối 3 (Incoterm)**: `width: 84%; max-width: 300px; bottom: -36px; left: 115px;` -> Đáy thùng carton và giày chibi chạm sát mép đáy dưới khối, slogan *"Same Rules, A Bigger World!"* lộ rõ 100%.
- **Khối 4 (Sự Kiện)**: `width: 88%; max-width: 315px; bottom: -32px; left: 80px;` -> Chân cọc tiêu phản quang chạm sát mép đáy dưới khối, slogan *"Prepare, Adapt, Go Further!"* lộ trọn vẹn.

---

## 5. Cơ Chế Hai Chế Độ (Dual-Mode Switch)

- **Chế độ 1 - Kệ Trưng Bày Mascot Hàng Ngang (Shelves Mode)**:
  - Áp dụng khi ở Tab "Tất Cả" và không có từ khóa tìm kiếm.
  - Hiển thị 4 Kệ Trưng Bày độc lập với chữ ký nghệ thuật ở chân trang: *"Logistics Knowledge — A Brighter Tomorrow"*.
- **Chế độ 2 - Lưới Toàn Cảnh (Full Grid Mode)**:
  - Tự động kích hoạt khi người dùng bấm chọn một nhóm thẻ riêng biệt (Incoterms, Thẻ Chợ, Phương Tiện, Sự Kiện) hoặc nhập tìm kiếm.
  - Hiển thị tiêu đề nhóm, số lượng lá bài, mô tả chiến thuật và nút `[ ← Quay Lại Tất Cả Kệ ]`.
- **Tích hợp Modal 3D**: Bấm vào bất kỳ thẻ bài nào ở cả 2 chế độ đều mở Modal xoay lật 3D mặt trước/sau và thông tin quy tắc cốt lõi, chiến thuật.
