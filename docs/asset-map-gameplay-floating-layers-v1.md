# Asset map — Gameplay floating layers v1

| Asset | Role | Viewport/crop | Layer and anchor | Transparency | Implementation | Accessibility |
|---|---|---|---|---|---|---|
| `assets/gameplay-layer-flow.png` | Cảng, tàu và mặt nước của khối 3 | Desktop full-bleed, `cover` | Trên nền trắng trang, dưới tiêu đề/card `#gpFlow` | Yes | `#gpFlow::before` | Decorative |
| `assets/gameplay-layer-incoterms.png` | Mặt nước, skyline và cảng của khối 4 | Desktop full-bleed, `cover` | Trên nền trắng trang, dưới nội dung `#gpIncoterms` | Yes | `#gpIncoterms::before` | Decorative |

Hai asset là ảnh người dùng cung cấp. Các ảnh mẫu Khối 1–4 chỉ là mục tiêu bố cục; không được render làm nền vì chứa text, nội dung và control đã tồn tại trong HTML.
