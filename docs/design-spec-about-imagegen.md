# Design specification — Giới thiệu LogisQuest

## Goal
- Audience: người lần đầu tìm hiểu LogisQuest, sinh viên/người làm logistics và nhóm muốn học hoặc chơi board game cùng nhau.
- Primary action: khám phá bộ linh kiện, cách chơi và thư viện thẻ qua các điều hướng sẵn có.
- Visual direction: **Sunlit Maritime Editorial** — giao diện sáng như bàn chơi bên cửa sổ cảng biển; ảnh sản phẩm giàu chi tiết, nền trắng ngà/xanh sương, navy làm màu chữ, cam san hô làm điểm gọi hành động.

## Scope and constraints
- Preserve: header/footer toàn trang, nội dung tiếng Việt, các số liệu hiện có trong `#aboutView`, cơ chế điều hướng `data-nav`, và các tương tác ngoài view này.
- Change: làm mới bố cục và hình ảnh của `#aboutView`; hero chia cột để hình bộ cờ hiện diện ngay đầu trang; nhịp giữa các section rõ và gọn hơn.
- Required content and interactions: giới thiệu LogisQuest; 4 thẻ chỉ số hiện có; 5 thành phần bộ cờ; 3 trụ cột trải nghiệm; 3 nhóm người chơi; CTA tới Cách chơi và Thẻ bài; liên kết xuống `#aboutUnboxing`.
- Do not add product claims or statistics beyond the current page copy. Keep readable text, links, buttons, and card content as semantic HTML.
- Desktop viewport: 1440 × 900. Mobile viewport: 390 × 844.

## Page composition
1. Header: dùng header toàn trang đang có.
2. Hero: bố cục 52/48; nhãn dự án, tiêu đề và mô tả bên trái; ảnh board game/logistics bên phải; hai CTA nằm gần phần dẫn. Hình không chứa chữ hoặc logo sinh tự động.
3. Impact metrics: bốn chỉ số trên một dải nền xanh sương, cùng chiều cao, ngăn cách nhẹ; trên mobile xếp lưới 2 cột.
4. Inside the box: tiêu đề biên tập căn trái; ảnh flat-lay lớn làm neo thị giác; năm mô tả linh kiện trình bày trong các thẻ sáng theo lưới, không nhồi chữ.
5. Strategic pillars: nền trắng; ba thẻ có thứ bậc rõ, đánh số nhỏ, biểu tượng vector và checklist rút gọn đúng nội dung hiện có.
6. Target explorers: nền xanh sương; ảnh nhóm người chơi ở một bên và ba thẻ đối tượng ngắn ở bên còn lại/trên lưới.
7. CTA ribbon: dải màu san hô/nắng biển sáng, tàu hàng và đường tuyến làm ảnh phụ ở mép phải; hai CTA giữ điều hướng hiện tại.
8. Footer: dùng footer toàn trang đang có.

## Design tokens
- Color: canvas `#FFFFFF`; mist `#F2F9FC`; pale blue `#E7F4FA`; navy `#0A3150`; text `#17324A`; muted `#5E7384`; sky `#1599C6`; coral `#F05A22`; warm accent `#FFB547`.
- Typography: giữ các font đã tải của dự án; heading `Cormorant Garamond`, body `Plus Jakarta Sans`/fallback hiện có. Heading lớn 46–58px desktop, 34–40px mobile; body 16–18px, line-height 1.6.
- Spacing and grid: container tối đa 1200px; gutter 24px desktop/18px mobile; section padding 88px desktop/56px mobile; khoảng cách thẻ 18–24px.
- Shape: radius 20–28px; viền xanh sương mảnh; bóng mềm màu xanh; nút chính cam san hô.

## Responsive rules
- Desktop: hero hai cột; metrics bốn cột; linh kiện 3 cột; pillars 3 cột; CTA xếp ngang.
- Tablet: hero vẫn hai cột nếu đủ chỗ; grids giảm số cột; ảnh ưu tiên giữ chủ thể.
- Mobile: mọi khối một cột ngoại trừ metrics 2 cột; CTA full-width; ảnh giữ tỷ lệ và không ép chữ đè lên ảnh; không có cuộn ngang.

## Acceptance criteria
- Ảnh sản phẩm chiếm một vùng rõ ràng trong hero và phù hợp với màu sắc, phong cách của trang.
- Đủ năm section và nội dung/CTA hiện có; không tạo nội dung đọc được trong ảnh.
- Navigation `data-nav` và liên kết xuống `#aboutUnboxing` tiếp tục hoạt động.
- Ảnh và chữ xếp gọn tại 1440px và 390px, không clipping hoặc tràn ngang.
- Bản thiết kế tổng thể và ảnh cho từng section được lưu làm tài liệu tham chiếu trước khi bắt đầu sửa mã.
