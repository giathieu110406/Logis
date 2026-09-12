# Landing & Checkout Implementation Architecture

Tài liệu kỹ thuật chi tiết về cách triển khai logic tương tác, cấu trúc dữ liệu và xử lý nghiệp vụ trên 2 trang: Trang chủ (`index.html` + `app.js`) và Trang đặt mua (`buy.html` + `buy.js`).

---

## 1. Kiến trúc Trang Chủ (`index.html` + `app.js`)

### 1.1. Cấu trúc dữ liệu thẻ bài (`CARDS_DATA`)
Mảng dữ liệu trung tâm trong `app.js` chứa thông tin chi tiết của toàn bộ thẻ bài trong board game:
```javascript
{
  id: 'incoterm-fob',
  category: 'incoterm',           // 'incoterm' | 'vehicle' | 'event' | 'market'
  categoryText: 'Thẻ Incoterm',
  title: 'FOB (Free On Board)',
  image: 'assets/The Incoterm/FOB.png',
  effect: 'Mô tả hiệu lực chuyển giao rủi ro trên boong tàu...',
  strategy: 'Mẹo và chiến thuật sử dụng trong ván đấu...'
}
```

### 1.2. Các phân hệ tương tác chính trong `app.js`:
1. **Gallery & Filter Engine**:
   - Lọc thẻ bài theo danh mục (`all`, `incoterm`, `vehicle`, `event`, `market`).
   - Tìm kiếm thời gian thực (`input.search-box`) theo tên thẻ hoặc hiệu ứng.
   - Phân trang hoặc render động theo dạng CSS Grid linh hoạt.
2. **Card Detail Modal**:
   - Bắt sự kiện click vào bất kỳ thẻ bài nào để mở popup phóng to ảnh 3D.
   - Hiển thị đầy đủ thông số kỹ thuật, luật áp dụng và chiến thuật gợi ý.
   - Hỗ trợ đóng modal qua phím `Esc`, click nút đóng hoặc click ra ngoài vùng backdrop.
3. **Maritime Audio Player**:
   - Trình phát âm thanh nền hải trình tự động/bật tắt thủ công (`toggleAudio()`).
   - Lưu trạng thái bật/tắt vào `sessionStorage` để không gây phiền người dùng khi chuyển trang.
4. **Countdown Timer & Floating Bar**:
   - Đồng hồ đếm ngược sự kiện mở bán giới hạn (Early-bird).
   - Thanh điều hướng cố định (Sticky Header) với hiệu ứng bóng mờ khi cuộn trang (`scroll` event listener).

---

## 2. Kiến trúc Trang Mua Hàng & Đặt Hàng (`buy.html` + `buy.js`)

### 2.1. Quản lý số lượng & Tính giá thời gian thực
Trong `buy.js`:
- Giá gốc (`ORIGINAL_PRICE`) và giá ưu đãi (`CURRENT_PRICE`).
- Bộ đếm số lượng (`.buy-qty-picker`): Nút giảm (`-`), ô nhập số lượng, nút tăng (`+`).
- Tự động cập nhật tổng tiền thanh toán hiển thị theo định dạng tiền tệ Việt Nam (`Intl.NumberFormat('vi-VN')`).

### 2.2. Product Gallery & Image Switcher
- Ảnh lớn trung tâm kết hợp danh sách thumbnail các góc nhìn: Hộp game mặt trước, linh kiện bàn cờ, 110 thẻ bài in cán màng, xúc xắc hải trình.
- Click thumbnail sẽ kích hoạt transition đổi ảnh mượt mà kèm class `.active`.

### 2.3. Accordion Thông Số Kỹ Thuật (Specifications & FAQ)
- Xử lý mở/đóng đa tầng: Khi click vào header của một mục, tính toán `scrollHeight` để trượt mở mượt mà và đóng các mục cùng cấp nếu cần.
- Xoay icon mũi tên 180 độ qua CSS transform.

### 2.4. Form Đặt Hàng & Checkout Order Modal
- **Trigger**: Click nút "ĐẶT MUA NGAY" (`.buy-btn-primary`) mở modal form đặt hàng.
- **Validation Form**:
  - Họ và tên người nhận.
  - Số điện thoại (kiểm tra regex định dạng số điện thoại Việt Nam).
  - Địa chỉ nhận hàng chi tiết (Tỉnh/Thành phố, Quận/Huyện, Số nhà).
  - Phương thức thanh toán: COD (Thanh toán khi nhận hàng) hoặc Chuyển khoản QR code.
- **Lưu trữ đơn hàng (Order Persistence)**:
  - Đơn hàng được lưu vào `localStorage` dưới khóa `logisquest_orders` phục vụ tra cứu đơn hàng gần nhất.
  - Hiển thị thông báo đặt hàng thành công (Toast notification) và reset giỏ hàng.

---

## 3. Quy chuẩn & Best Practices khi tiếp tục phát triển

1. **Hiệu năng & Tải trang**:
   - Tiếp tục sử dụng Vanilla JS thuần, không đưa thêm React/Vue/Tailwind nếu không có yêu cầu đặc biệt.
   - Sử dụng lazy loading cho ảnh thẻ bài (`loading="lazy"`).
2. **Quy tắc Mỹ thuật (Aesthetics)**:
   - Duy trì chuẩn **Sunlit Maritime Light Mode**: Tỷ lệ khối 5 là 16:10, không dùng nền tối hoặc nền navy sẫm.
3. **Trích xuất dữ liệu**:
   - Khi cập nhật luật chơi mới, chạy các script node có sẵn như `extract_events.js`, `extract_incoterms.js` để tự động làm mới mảng `CARDS_DATA`.
