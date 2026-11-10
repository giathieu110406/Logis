# CodeGraph Knowledge Graph Guidelines

Tài liệu này hướng dẫn Agent khai thác CodeGraph để tăng tốc độ phân tích mã nguồn và giảm thiểu token/lượt gọi công cụ (tool calls).

---

## 1. Khi repository đã có `.codegraph/` (Indexed Workspace)

- **Ưu tiên gọi trước (Call First)**:
  - Khi cần khảo sát cấu trúc, tìm hiểu kiến trúc ("X hoạt động như thế nào?"), tìm vết luồng dữ liệu/gọi hàm (call paths), hoặc chuẩn bị sửa đổi code: **ưu tiên gọi `codegraph_explore` trước khi dùng `grep_search` hoặc `view_file`**.
  - `codegraph_explore` cung cấp mã nguồn nguyên bản (verbatim source with line numbers), luồng gọi (bao gồm dynamic dispatch), và phạm vi ảnh hưởng (blast radius) chỉ trong một lần gọi.
- **Tin cậy kết quả của CodeGraph**:
  - Không grep lại để xác minh các symbol đã được `codegraph_explore` trả về chính xác từ AST.
  - Xử lý banner cảnh báo: Nếu kết quả có banner `⚠️ Some files referenced below were edited since the last index sync…`, chỉ đọc trực tiếp các tệp đang chờ sync đó.

---

## 2. Khi repository chưa có `.codegraph/` (Unindexed Workspace)

- Sử dụng các công cụ tiêu chuẩn (`grep_search`, `view_file`, `list_dir`).
- Việc khởi tạo index tốn tài nguyên và tạo thư mục cục bộ, do đó **không tự ý chạy `codegraph init`** trừ khi người dùng yêu cầu trực tiếp.
