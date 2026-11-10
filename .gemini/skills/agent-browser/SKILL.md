---
name: agent-browser
description: Fast browser automation CLI for AI agents using a native Rust CDP daemon and compact accessibility tree refs. Use for token-efficient web research, crawling, live smoke testing, and ad-hoc web interaction.
---

# Browser Automation with agent-browser

`agent-browser` là công cụ tự động hóa trình duyệt dòng lệnh tốc độ cao do Vercel Labs phát triển, kết nối trực tiếp với Chrome DevTools Protocol (CDP) qua Rust daemon thường trực.

Công cụ này tối ưu hóa tối đa lượng token tiêu thụ bằng cách trích xuất **Cây Trợ năng (Accessibility Tree)** rút gọn với các định danh `@ref` xác định (`@e1`, `@e2`...), thay vì nạp toàn bộ DOM HTML thô hoặc dùng thị giác máy tính đoán tọa độ.

---

## 1. Phân định Vai trò: `agent-browser` vs `playwright-cli`

* **Sử dụng `agent-browser` khi**:
  * Agent cần tự do duyệt web, đọc tài liệu online (Next.js, Tailwind, Stripe API...) hoặc cào dữ liệu.
  * Smoke test nhanh trên localhost sau khi sửa code (kiểm tra form, button, console error trong 1–2 lượt).
  * Ưu tiên tiết kiệm token ngữ cảnh và tốc độ phản hồi lệnh nhanh nhất.
* **Sử dụng `playwright-cli` khi**:
  * Viết mã kịch bản kiểm thử cố định (`*.spec.ts`) lưu vào codebase phục vụ CI/CD.
  * Kiểm thử đa trình duyệt (WebKit/Safari, Firefox).
  * Giả lập mạng phức tạp (`route`), mock API, hoặc ghi hình video / trace để phân tích hồi quy visual.

---

## 2. Lưu ý Quan trọng trên Windows (PowerShell)

> [!WARNING]
> Trong PowerShell, ký tự `@` là toán tử **splatting**. Bắt buộc phải **bọc `@ref` trong dấu nháy đơn hoặc kép** (ví dụ `'@e1'` hoặc `"@e2"`), hoặc gọi qua `cmd /c "agent-browser ..."` để tránh bị PowerShell nuốt mất tham số.

---

## 3. Quy trình Vòng lặp Cơ bản (The Interaction Loop)

Mỗi chu trình tương tác của Agent gồm 3 bước:
1. **Mở trang**: `cmd /c "agent-browser open https://example.com"`
2. **Chụp cây Accessibility**: `cmd /c "agent-browser snapshot -i"` (Cờ `-i` chỉ lấy các phần tử có thể tương tác, tiết kiệm tối đa token).
3. **Thao tác theo Ref ID**: `cmd /c "agent-browser click @e2"` hoặc `cmd /c "agent-browser fill @e3 \"text\""`

---

## 4. Bảng Lệnh Thông Dụng

### Điều hướng & Mở trang
```bash
cmd /c "agent-browser open https://example.com"
cmd /c "agent-browser back"
cmd /c "agent-browser forward"
cmd /c "agent-browser reload"
cmd /c "agent-browser close"
```

### Snapshot & Khám phá Giao diện
```bash
# Lấy toàn bộ cây accessibility có định danh @ref
cmd /c "agent-browser snapshot"

# Chỉ lấy các phần tử tương tác (Recommended cho AI)
cmd /c "agent-browser snapshot -i"

# Tìm phần tử theo role hoặc text
cmd /c "agent-browser find role button click --name Submit"
cmd /c "agent-browser get text @e1"
```

### Tương tác Phần tử
```bash
# Click nút / link
cmd /c "agent-browser click @e2"
cmd /c "agent-browser dblclick @e2"

# Nhập dữ liệu
cmd /c "agent-browser fill @e3 \"user@example.com\""
cmd /c "agent-browser press Enter"

# Checkbox & Dropdown
cmd /c "agent-browser check @e4"
cmd /c "agent-browser select @e5 \"Option Value\""

# Cuộn & Hover
cmd /c "agent-browser scroll down 300"
cmd /c "agent-browser hover @e6"
```

### Chụp ảnh & Debug
```bash
# Chụp ảnh màn hình
cmd /c "agent-browser screenshot page.png"

# Chụp ảnh kèm nhãn trực quan cho model Vision
cmd /c "agent-browser screenshot --annotate"

# Xem log console của trang
cmd /c "agent-browser console"
cmd /c "agent-browser errors"
```

### Ghép lệnh liên hoàn (Command Chaining)
Vì Rust daemon duy trì phiên trình duyệt ngầm, có thể xâu chuỗi các lệnh bằng `&&`:
```bash
cmd /c "agent-browser open https://example.com && agent-browser snapshot -i"
cmd /c "agent-browser fill @e1 \"admin\" && agent-browser fill @e2 \"pass\" && agent-browser click @e3"
```

---

## 5. Xử lý Lỗi `STALE_REF`
Nếu trang web cập nhật lại DOM (AJAX, chuyển trang, đóng modal), lệnh thao tác có thể trả về lỗi `STALE_REF`.
* **Cách khắc phục**: Chạy lại ngay lệnh `agent-browser snapshot -i` để lấy snapshot mới và cập nhật lại Ref ID tương ứng trước khi thao tác tiếp.
