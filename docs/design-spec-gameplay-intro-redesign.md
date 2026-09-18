# Design specification

## Goal
- Audience: Người mới biết đến LogisQuest, cần hiểu vòng chơi trong vài phút trước khi đọc luật chi tiết.
- Primary action: Đi theo 4 chặng Chuẩn bị → Lượt chơi → Cập cảng → Ghi điểm và thử chuyển đổi giữa 3 hành động trong lượt.
- Visual direction: “Maritime field guide” sáng, hiện đại; nền xanh băng, card trắng, điểm nhấn cam LogisQuest và đường hải trình xanh nối các phần.

## Scope and constraints
- Preserve: Hero “Cách chơi LogisQuest”, quick stats, footer, toàn bộ nội dung luật, ảnh bàn cờ và 3 ảnh hành động, tương tác chọn hành động, anchor hiện có.
- Change: Chỉ vùng `.gp-content` từ `#gpSetup` đến `#gpIncoterms`; tổ chức lại cấp bậc, nhịp dọc, thẻ nội dung, chỉ dẫn tiến trình và responsive.
- Required content and interactions: 3 bước chuẩn bị; 3 tab hành động; quy trình cập cảng 4 bước; 4 nhóm Incoterms E/F/C/D; lưu ý chiến lược; keyboard focus rõ ràng.
- Desktop viewport: 1440 × 900.
- Mobile viewport: 390 × 844.

## Page composition
1. Header: Giữ nguyên.
2. Hero: Giữ nguyên hoàn toàn, bao gồm stats và stepper đang có.
3. Gameplay introduction: Một dải mở đầu “4 chặng — 1 hải trình” và bốn section nối bởi đường tuyến. Section 1 dùng ảnh bàn cờ lớn + checklist. Section 2 giữ tương tác tab nhưng biến thành một command deck rõ ba vùng. Section 3 là timeline cảng bốn bước. Section 4 là ma trận Incoterms 2 × 2 với trách nhiệm được nhóm dễ quét.
4. Footer: Giữ nguyên.

## Design tokens
- Color: background `#F5FAFE`, surface `#FFFFFF`, primary `#087DB8`, accent `#FF6B00`, text `#0B1F37`, muted text `#5D7187`, route `#8BD7F4`.
- Typography: Tái sử dụng Outfit/Inter hiện có; heading 700–800, body 400–500, line-height 1.55–1.7.
- Spacing and grid: max-width 1180px; desktop gutter 32px, mobile 16px; section rhythm 88px desktop, 56px mobile.
- Shape: radius 24–32px cho section, 14–18px cho item; border xanh 1px; shadow mềm và ngắn.

## Responsive rules
- Desktop: Các section dùng bố cục 2 cột hoặc 3 cột tùy nội dung; trục tuyến nằm bên trái và section marker bám theo nó.
- Tablet: Các vùng tương tác chuyển về một cột; ma trận Incoterms vẫn 2 cột khi đủ chỗ.
- Mobile: Một cột; trục tuyến thu vào cạnh trái; tab hành động thành thanh cuộn ngang; mọi card không tràn viewport.

## Acceptance criteria
- Hero và footer không thay đổi về nội dung hoặc bố cục.
- Người dùng nhận ra bốn chặng và thứ tự của chúng trong lần quét đầu tiên.
- Tab hành động vẫn đổi đúng ảnh, tiêu đề, mô tả và mẹo.
- Nội dung không bị cắt, chồng hoặc tràn ở 1440 × 900 và 390 × 844.
- Không thêm dependency; dùng lại asset và script hiện có.

