# LogisQuest Knowledge Base (KI)

Thư mục này chứa toàn bộ tài liệu tri thức (Knowledge Items - KI) chuẩn hóa của dự án **LogisQuest Board Game Platform**.

---

## Cấu trúc thư mục

```
knowledge/
├── metadata.json                                # Metadata nhận diện KI, tiêu đề & tham chiếu nguồn
├── timestamps.json                              # Dấu thời gian quét/đồng bộ của Antigravity
├── README.md                                    # Hướng dẫn tra cứu này
└── artifacts/
    ├── overview.md                              # Tổng quan dự án, tech stack & cấu trúc file
    ├── architecture/
    │   ├── design_system.md                     # Quy chuẩn Sunlit Maritime Light Mode & Design Tokens
    │   └── game_domain_and_rules.md             # Mô hình nghiệp vụ, 11 Incoterms & 4 nhóm thẻ bài
    └── implementation/
        └── landing_and_checkout.md              # Kiến trúc code app.js, buy.js & luồng giỏ hàng/modal
```

---

## Hướng dẫn tra cứu nhanh

- **Cần tìm hiểu về phong cách thiết kế, màu sắc, font chữ, layout?**
  👉 Xem [artifacts/architecture/design_system.md](artifacts/architecture/design_system.md) *(Lưu ý: Không dùng Dark Mode / Navy nền; tỷ lệ Khối 5 là 16:10).*

- **Cần tra cứu luật chơi, danh mục thẻ bài, Incoterms, vòng chơi?**
  👉 Xem [artifacts/architecture/game_domain_and_rules.md](artifacts/architecture/game_domain_and_rules.md).

- **Cần hiểu code xử lý logic trong `app.js` và `buy.js`, quản lý đơn hàng?**
  👉 Xem [artifacts/implementation/landing_and_checkout.md](artifacts/implementation/landing_and_checkout.md).

- **Cần xem cấu trúc file tổng quan và công nghệ sử dụng?**
  👉 Xem [artifacts/overview.md](artifacts/overview.md).
