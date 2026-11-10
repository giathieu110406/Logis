---
trigger: always_on
description: Quy tắc an toàn khi thao tác với tệp tin và hệ thống tệp (File Safety & Integrity Guidelines)
---

# File Safety & Integrity Guidelines

Tài liệu này quy định các nguyên tắc và rào chắn an toàn bắt buộc khi AI Agent thao tác với tệp tin và hệ thống tệp (file system).

---

## 1. Kiểm soát Xóa Tệp tin (File Deletion Restrictions)

- **Tuyệt đối không tự ý xóa**: Không được tự động xóa bất kỳ tệp hoặc thư mục nào nếu không có yêu cầu hoặc xác nhận rõ ràng từ người dùng.
- **Minh bạch danh sách xóa**: Khi đề xuất xóa tệp, phải liệt kê chính xác đường dẫn của từng tệp cần xóa, lý do xóa, và chờ người dùng duyệt.
- **Danh mục tệp cấm xóa (Protected/Forbidden)**:
  - Thư mục quản lý phiên bản: `.git/`, `.svn/`
  - Tệp khóa và cấu hình phụ thuộc: `package.json`, `package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`, `Cargo.lock`, `go.mod`, `go.sum`
  - Tệp cấu hình gốc: `tsconfig.json`, `.gitignore`, `docker-compose.yml`, `Dockerfile`, `Makefile`
  - Tệp biến môi trường: `.env`, `.env.*`

---

## 2. Kỷ luật Ghi đè & Sửa đổi (Overwriting & Content Preservation)

- **Ưu tiên sửa đổi từng phần (Surgical Replacement)**:
  - Luôn sử dụng các công cụ thay thế khối mã có chủ đích (line-level / block-level edit).
  - **Tránh ghi đè toàn bộ (No Blind Overwrite)** đối với các tệp nguồn đang hoạt động để ngăn chặn mất code ngoài ý muốn.
- **Chỉ ghi đè khi được cho phép**: Chỉ sử dụng thao tác overwrite khi tạo tệp hoàn toàn mới hoặc khi người dùng yêu cầu viết lại từ đầu (rewrite from scratch).
- **Bảo toàn định dạng & Encoding**:
  - Giữ nguyên chuẩn encoding **UTF-8**.
  - Tôn trọng kiểu thụt dòng (tabs vs spaces, 2 spaces vs 4 spaces) và quy chuẩn xuống dòng (LF vs CRLF) hiện hữu của từng tệp.

---

## 3. Vị trí Tạo Tệp & Quản lý Tệp Tạm (File Locations & Cleanliness)

- **Không tạo tệp rác ở Root**: Tránh tạo các script chạy thử nghiệm, tệp log, hoặc tệp tạm trực tiếp tại thư mục gốc của dự án.
- **Khu vực tệp tạm (Scratch space)**: Mọi script debug dùng một lần hoặc dữ liệu kiểm thử ngắn hạn phải đặt trong thư mục tạm (`scratch/`, `tmp/` hoặc thư mục do IDE chỉ định).
- **Đặt đúng cấu trúc**: Tệp mới phải tuân thủ đúng cấu trúc module, thư mục và namespace hiện tại của codebase.

---

## 4. Bảo vệ Dữ liệu Nhạy cảm & Kiểm soát .gitignore

- **Tự động đối chiếu `.gitignore`**:
  - Khi tạo tệp cấu hình mẫu (ví dụ `.env.example`), đảm bảo không chứa secrets thực tế.
  - Tệp cache, tệp sinh tự động (build artifacts, dist, coverage, log) phải luôn được kiểm tra và bổ sung vào `.gitignore`.
- **Cấm can thiệp tệp nhị phân bằng công cụ văn bản**:
  - Không cố gắng đọc hoặc chỉnh sửa các tệp nhị phân (ảnh, video, audio, compiled binaries, `.sqlite`, dump database lớn) bằng các công cụ chỉnh sửa văn bản thông thường để tránh làm hỏng cấu trúc tệp hoặc gây tràn context.
