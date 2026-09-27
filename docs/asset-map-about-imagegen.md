# Asset map — Giới thiệu LogisQuest (ImageGen)

| Asset | Role | Viewport/crop | Layer and anchor | Transparency | Implementation | Accessibility |
| --- | --- | --- | --- | --- | --- | --- |
| `docs/design-references/about-full-page-target.png` | Bản tham chiếu bố cục cả trang | Dọc desktop, xem toàn trang | Chỉ dùng đối chiếu | No | Không nhúng vào trang | Không áp dụng |
| `assets/about/imagegen/about-hero-visual.png` | Ảnh hero board game logistics | Landscape, object bên phải | Trong cột hero; crop responsive | No | `<img>` với `object-fit: cover` | Alt mô tả bộ board game trên bàn |
| `assets/about/imagegen/about-kit-flatlay.png` | Ảnh bộ linh kiện | Landscape rộng | Ảnh neo ở section bộ linh kiện | No | `<img>` trong figure | Alt mô tả bản đồ, thẻ và mô hình |
| `assets/about/imagegen/about-audience-photo.png` | Nhóm người chơi học qua board game | Landscape | Section đối tượng trải nghiệm | No | `<img>` với crop lấy bàn chơi | Alt mô tả nhóm đang chơi board game |
| `assets/about/imagegen/about-cta-ship.png` | Tàu container và hải trình | Landscape rộng | Bên phải dải CTA, tránh vùng chữ | No | `<img>` trong layout CTA | Decorative |
| Inline SVG / CSS | Biểu tượng cho 3 trụ cột và chỉ số | Vector | Trong các thẻ HTML | Yes | SVG inline | `aria-hidden="true"` |

## Section mockups

- `docs/design-references/about-section-hero.png`
- `docs/design-references/about-section-metrics.png`
- `docs/design-references/about-section-kit.png`
- `docs/design-references/about-section-pillars.png`
- `docs/design-references/about-section-audience.png`
- `docs/design-references/about-section-cta.png`

## Rules
- Bản tham chiếu toàn trang và các ảnh section được giữ trong `assets/about/imagegen/`; chỉ các ảnh minh họa phù hợp mới được dùng trong giao diện.
- Tất cả copy, nhãn, chỉ số, biểu tượng điều khiển và CTA vẫn là HTML/SVG; ảnh không chứa chữ, logo hay nút.
- Dùng crop riêng theo breakpoint khi cần; bảo toàn điểm nhìn chính trên mobile.
- Lưu prompt được chọn và ghi rõ vai trò từng ảnh ở cuối tài liệu sau khi tạo.

## Selected prompt notes

- Full-page target: tall desktop landing-page reference, white/mist-blue maritime palette, navy serif headings, coral CTA, hero/product image and five following content bands.
- Section mockups: generated from the full-page target for hero, metrics, kit, pillars, audience and CTA; these are layout references only and are not embedded as UI screenshots.
- Hero photo: sunlit tabletop logistics strategy game, blue route map, cargo miniatures, cards and dice; no UI or readable text.
- Kit photo: flat-lay of the board, abstract-symbol cards, ship miniatures, containers, rulebook and dice; no webpage elements.
- Audience photo: four Vietnamese young adults playing together in a bright workshop; no signs, logos or UI.
- CTA photo: wide container ship at golden hour, ship anchored right with open pale area left; no branding or writing.
