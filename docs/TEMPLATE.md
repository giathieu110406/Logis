# Template Ghi Chép Công Việc & Sửa Chữa (Worklog / Bugfix)

> **Mẹo**: Sao chép template này thành file `docs/logs/YYYY-MM-DD-<ten-viec>.md` khi bắt đầu một phiên làm việc hoặc xử lý sự cố.

---

# [YYYY-MM-DD] <Tiêu đề công việc hoặc lỗi cần xử lý>

- **Phân loại**: `Feature` | `Bugfix` | `Refactor` | `Docs`
- **Trạng thái**: `Done` | `In Progress` | `Blocked`
- **Tác giả / Người thực hiện**: ...

## 1. Bối cảnh & Vấn đề (Context / Issue)
- Mô tả ngắn gọn (1 - 3 dòng) mục tiêu hoặc sự cố cần giải quyết.

## 2. Nguyên nhân gốc (Root Cause - nếu là Bugfix)
- Chỉ ra chính xác dòng code, logic hoặc tương tác gây lỗi.

## 3. Thay đổi kỹ thuật (Changes Made)
- `path/to/file_1.ext`: Mô tả ngắn gọn thay đổi.
- `path/to/file_2.ext`: Mô tả ngắn gọn thay đổi.

## 4. Kiểm chứng (Verification)
- [ ] Xác minh qua Dev Server / Browser: (URL, hành động test)
- [ ] Lệnh kiểm tra / Test suite (nếu có): `npm run test` hoặc lệnh tương ứng
- [ ] Không phát sinh lỗi hồi quy (Regression)

## 5. Ghi chú tồn đọng (Deferred / Ponytail notes)
- Các điểm tối giản có chủ đích hoặc việc để dành sau (nếu có): `# ponytail: ...`
