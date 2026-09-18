# Design specification — Gameplay floating layers v1

## Goal
- Audience: Người chơi cần quét nhanh luật chơi LogisQuest trên desktop.
- Primary action: Đọc lần lượt bốn khối và tiếp tục dùng stepper hoặc ba tab hành động hiện có.
- Visual direction: Giao diện biển sáng theo sáu ảnh tham chiếu; các nhóm thông tin là bề mặt trắng nổi rõ trên nền trắng, dùng xanh biển, navy và cam làm điểm nhấn.

## Scope and constraints
- Preserve: `.gp-hero`, stepper, footer, mọi bản sao luật, asset nội dung hiện có, ID anchor và tương tác tab hành động.
- Change: Chỉ phần `.gp-content` từ `#gpSetup` đến `#gpIncoterms`, desktop từ 1101px trở lên. Bản tinh chỉnh hiện tại dùng gutter 10px, rút ngắn khối 1–2 và áp dụng font hỗ trợ tiếng Việt ổn định.
- Required content and interactions: `#gpSetup`, `#gpActions`, `#gpFlow`, `#gpIncoterms`; các tab `data-action`; các target của stepper.
- Desktop viewport: 1440 × 900 (kiểm tra thực tế ở 1418 × 696 do preview đang mở).
- Mobile viewport: Không thiết kế lại; giữ nguyên các quy tắc responsive hiện có.

## Page composition
1. Hero: Giữ nguyên hoàn toàn.
2. Khối 1: Tiêu đề trên nền thoáng; bên dưới là một lớp card trắng nổi rộng, ảnh bàn cờ lớn bên trái và ba bước trắng nổi bên phải.
3. Khối 2: Tiêu đề trên nền thoáng; dưới đó là panel trắng nổi ba cột gồm danh sách hành động, ảnh và chi tiết/mẹo.
4. Khối 3: Một lớp nền cảng tràn chiều ngang nằm trên nền trắng trang; tiêu đề và bốn card bước trắng nổi ở phía trên lớp minh họa.
5. Khối 4: Một lớp nền cảng tràn chiều ngang nằm trên nền trắng trang; bốn card Incoterms và thanh lưu ý nổi ở phía trên.
6. Footer: Giữ nguyên hoàn toàn.

## Design tokens
- Color: page `#FFFFFF`; surface `#FFFFFF`; navy `#06185D`; ocean blue `#087DF4`; orange `#FF6A00`; soft sky `#EFFAFF`; muted text `#526184`.
- Typography: Dùng Montserrat cho text trong bốn khối và Caveat cho ghi chú viết tay; tiêu đề navy đậm, eyebrow xanh viết hoa, line-height đủ cao để không cắt dấu tiếng Việt.
- Spacing and grid: `.gp-content` desktop có gutter 10px; khối 1–2 dùng nhịp gọn hơn, panel nổi radius 28px và shadow xanh nhạt.
- Shape: Card trắng radius 22–30px; huy hiệu số cam bo 18px; icon / nút hiện có giữ semantic HTML.

## Responsive rules
- Desktop (>=1101px): Áp dụng layout nổi, bề rộng tăng ra hai bên; nền khối 3/4 tràn viewport.
- Tablet and mobile: Không thay đổi quy tắc hiện tại.

## Acceptance criteria
- Hero, footer, nội dung và hành vi các điều khiển không đổi.
- Khối 1–2 lớn hơn rõ rệt so với container cũ 1100px và hiện là bề mặt trắng nổi.
- Khối 3–4 có ảnh nền người dùng cung cấp, tràn hết chiều rộng viewport nhưng không gây tràn ngang.
- Nội dung luôn nằm phía trên lớp ảnh trang trí; ảnh không chặn click hoặc khả năng đọc.
- Tab hành động và stepper tiếp tục hoạt động tại desktop; không thêm dependency.
