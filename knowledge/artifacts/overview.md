# LogisQuest Platform Overview

Tài liệu tổng quan về kiến trúc và cấu trúc dự án **LogisQuest Board Game Platform** (package: `quychien-landing`).

---

## 1. Giới thiệu dự án

**LogisQuest** là dự án xây dựng nền tảng web giới thiệu, quảng bá và thương mại điện tử (E-commerce Landing & Order) cho bộ Board Game chiến thuật Logistics và Chuỗi cung ứng quốc tế.

### Mục tiêu cốt lõi:
- **Landing Page chính (`index.html` + `app.js`)**: Giới thiệu thế giới board game, hải trình logistics, trailer/visuals, bộ sưu tập thẻ bài tương tác (Incoterms, Phương tiện, Sự kiện rủi ro, Chợ), review cộng đồng và kích thích chuyển đổi.
- **Trang đặt mua sản phẩm (`buy.html` + `buy.js`)**: Cung cấp giao diện checkout sản phẩm, chọn số lượng, tính toán chi phí, chính sách bảo hành, đánh giá khách hàng (rating summary) và modal form đặt hàng trực tiếp.
- **Hệ thống dữ liệu & Luật chơi**: Tích hợp toàn bộ quy tắc Incoterms 2020, cơ chế đấu trí chuỗi cung ứng, và công cụ trích xuất dữ liệu thẻ bài.

---

## 2. Công nghệ & Stack kỹ thuật

- **Ngôn ngữ cốt lõi**: HTML5 ngữ nghĩa (Semantic HTML), Vanilla JavaScript ES6+.
- **Giao diện & Styling**: Vanilla CSS3 với hệ thống Design Tokens chặt chẽ (`styles.css`, `color-palette.css`). Không dùng thư viện CSS cồng kềnh như Tailwind/Bootstrap nhằm tối đa hóa hiệu năng và khả năng kiểm soát mỹ thuật.
- **Asset pipeline**: SVG vector icons, WebP/PNG 3D renders, âm thanh hiệu ứng hải trình.
- **Dev Server**: `npx -y serve . -l 3000` (được cấu hình trong `package.json`).

---

## 3. Cấu trúc thư mục dự án

```
Logis/
├── .agents/skills/            # Agent Skills chuyên biệt (Playwright, Ponytail...)
├── .codegraph/                # Code intelligence SQLite database (AST index)
├── assets/                    # Thư mục hình ảnh thẻ bài, icons, 3D renders
│   ├── The Chợ/               # Hình ảnh nhóm thẻ Chợ
│   ├── The Incoterm/          # Hình ảnh 11 thẻ Incoterms
│   ├── The Phương Tiện/       # Hình ảnh thẻ phương tiện vận tải
│   └── The Sự Kiện/           # Hình ảnh thẻ sự kiện rủi ro
├── index.html                 # Trang chủ Landing Page chính
├── app.js                     # Logic tương tác, lọc thẻ, modal, countdown trang chủ
├── buy.html                   # Trang mua hàng & chi tiết sản phẩm
├── buy.js                     # Logic giỏ hàng, chọn số lượng, form đặt hàng, review
├── styles.css                 # CSS tổng hợp toàn bộ giao diện
├── serve.json                 # Cấu hình rewrite URL cho server (/buy -> buy.html)
├── design.md                  # Quy chuẩn hệ thống thiết kế (Sunlit Maritime)
├── luat_choi_clean.txt        # Văn bản luật chơi hoàn chỉnh đã làm sạch
├── knowledge/                 # Knowledge Base chuẩn hóa của dự án
└── package.json               # Cấu hình dự án & scripts chạy dev server
```

---

## 4. Mục lục tài liệu chi tiết (Artifacts)

1. [Hệ thống thiết kế (Design System)](design_system.md): Bảng màu Sunlit Maritime, Typography, Spacing, Shadows, Glassmorphism, Micro-animations.
2. [Nghiệp vụ Game & Luật chơi (Game Domain & Rules)](game_domain_and_rules.md): Phân loại thẻ bài, Incoterms, vòng chơi, điều kiện thắng cuộc.
3. [Triển khai Landing & Checkout (Implementation)](landing_and_checkout.md): Chi tiết module trong `app.js`, `buy.js`, quản lý state, modal, storage.
