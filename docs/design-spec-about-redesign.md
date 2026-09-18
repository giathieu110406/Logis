# Design specification — Về LogisQuest

## Goal
- Audience: người mới biết đến LogisQuest, sinh viên/người làm logistics và nhóm mua board game cho học hoặc chơi cùng nhau.
- Primary action: xem cách chơi hoặc khám phá bộ thẻ sau khi hiểu giá trị của trò chơi.
- Visual direction: **Sunlit Maritime Editorial** — nền trời xanh rất nhạt, mực xanh hải quân, cam hàng hải, thẻ trắng bo mềm và hình ảnh sản phẩm như những ghi chép trên hải trình.

## Scope and constraints
- Preserve: header, footer, logo, điều hướng `data-nav`, ngôn ngữ Việt, bảng màu sáng hải cảng và toàn bộ tương tác sẵn có ngoài `#aboutView`.
- Change: thay hai khối văn bản dài và hai ảnh lỗi bằng một câu chuyện sản phẩm có nhịp, nội dung ngắn, rõ và hướng hành động.
- Required content and interactions: giới thiệu giá trị; mô hình “chơi để hiểu”; 3 lợi ích; lộ trình học bằng chơi; đối tượng phù hợp; CTA `Cách chơi` và `Thẻ bài` dùng `data-nav` hiện có.
- Desktop viewport: 1440 × 900.
- Mobile viewport: 390 × 844.

## Page composition
1. Header: giữ nguyên, cố định ngữ cảnh thương hiệu và điều hướng.
2. Hero: nhãn “Board game chiến thuật logistics”, tiêu đề “Biến logistics thành một hành trình đáng nhớ”, mô tả 2 câu, hai CTA và ảnh board game/các thẻ bài nổi chồng.
3. Proof strip: ba chỉ số định tính “11 Incoterms 2020 / 1 bàn cờ chung / vô vàn quyết định”, không bịa số liệu bán hàng hoặc người chơi.
4. `Từ lớp học đến bàn chơi`: khối 2 cột có ảnh bàn cờ và ba bước “Quan sát – Quyết định – Phản chiếu”, diễn giải cách học bằng chơi.
5. `Mỗi lượt chơi là một bài toán`: 3 thẻ có biểu tượng CSS cho tuyến vận tải, phối hợp nguồn lực và rủi ro thực tế.
6. `Dành cho ai?`: hai thẻ ngắn cho nhóm học/đào tạo và nhóm bạn/gia đình; kết thúc bằng CTA sang Cách chơi và Thẻ bài.
7. Footer: giữ nguyên.

## Design tokens
- Color: `#F5FBFF` nền; `#FFFFFF` surface; `#073B64` primary; `#0EA5E9` secondary; `#F59E0B` accent; `#10263D` text; `#5B7186` muted.
- Typography: giữ font dự án; heading dùng serif/editorial sẵn có nếu đã tải, body dùng sans-serif hiện có. Hero 56–72px desktop / 38–46px mobile; body 17–19px, line-height 1.65.
- Spacing and grid: max-width 1180px; gutter 24px desktop / 18px mobile; nhịp section 96px desktop / 64px mobile.
- Shape: bán kính 24px card, 999px badge/button; viền `rgba(14,165,233,.18)`; bóng rất nhẹ thay cho khối tối.

## Responsive rules
- Desktop: hero 2 cột 54/46; 3 proof items cùng hàng; card benefit 3 cột.
- Tablet: hero và câu chuyện chuyển 1 cột; proof giữ 3 cột nếu còn đủ chỗ.
- Mobile: một cột; CTA xếp dọc; ảnh hero cao tối đa 300px; proof chuyển 1 cột với đường chia mảnh; font và khoảng cách giảm nhưng giữ hierarchy.

## Acceptance criteria
- Không còn ảnh bị lỗi trong `#aboutView`.
- Người xem hiểu LogisQuest là gì, học được gì và bước tiếp theo trong một màn hình rưỡi đầu.
- CTA điều hướng được qua cơ chế `data-nav` hiện có.
- Có ảnh kiểm chứng ở 1440px và 390px; không che khuất chữ, không có chữ/nút được bake vào ảnh.
