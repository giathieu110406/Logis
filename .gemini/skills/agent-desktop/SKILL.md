---
name: agent-desktop
description: Reliable computer use CLI for AI agents to observe and operate native desktop applications (Windows UI Automation) via accessibility trees. Use for native desktop GUI automation, desktop app testing, and OS-level operations.
---

# Desktop Automation with agent-desktop

`agent-desktop` là công cụ dòng lệnh mã nguồn mở do Vercel Labs phát triển, mang lại năng lực **Computer Use** chuẩn xác cho AI Agent trên hệ điều hành (Windows, macOS, Linux).

Thay vì dùng thị giác máy tính (Vision) chụp màn hình rồi đoán mò tọa độ pixel dễ trượt, `agent-desktop` đọc trực tiếp cây **UI Automation** của Windows, gán định danh tham chiếu xác định (`@ref` dạng `@s8f3k2p9:e1`), cho phép AI click và nhập liệu trực tiếp vào các điều khiển ứng dụng native.

---

## 1. Lưu ý Bắt buộc trên Windows (PowerShell)

> [!WARNING]
> Trên Windows PowerShell, ký tự `@` là toán tử splatting. Bắt buộc phải **bọc `@ref` trong dấu nháy đơn** (`'@s8f3k2p9:e1'`) hoặc gọi thông qua `cmd /c "agent-desktop ..."` để tránh bị mất tham số.

---

## 2. Quy trình Vòng lặp Cơ bản (The Desktop Loop)

Mỗi chu trình tương tác gồm 4 bước:
1. **Tìm & Focus cửa sổ ứng dụng**:
   ```bash
   cmd /c "agent-desktop list-windows"
   cmd /c "agent-desktop focus-window \"Notepad\""
   ```
2. **Chụp cây Accessibility**:
   ```bash
   cmd /c "agent-desktop snapshot --app \"Notepad\" -i --compact"
   ```
3. **Thao tác theo Qualified Ref ID**:
   ```bash
   cmd /c "agent-desktop click @s8f3k2p9:e5"
   cmd /c "agent-desktop type @s8f3k2p9:e2 \"Hello from Antigravity!\""
   ```
4. **Chờ và Xác minh kết quả**:
   ```bash
   cmd /c "agent-desktop wait --element @s8f3k2p9:e9 --predicate actionable --timeout 5000"
   ```

---

## 3. Bảng Lệnh Thường Dùng

### Quản lý Cửa sổ & Tiến trình
```bash
# Liệt kê tất cả cửa sổ GUI đang mở
cmd /c "agent-desktop list-windows"

# Liệt kê ứng dụng đang chạy
cmd /c "agent-desktop list-apps"

# Kích hoạt / Focus cửa sổ lên phía trước
cmd /c "agent-desktop focus-window \"Title or App Name\""

# Khởi chạy một ứng dụng mới và chờ cửa sổ xuất hiện
cmd /c "agent-desktop launch notepad.exe --activate"

# Điều khiển kích thước & vị trí cửa sổ
cmd /c "agent-desktop maximize"
cmd /c "agent-desktop minimize"
cmd /c "agent-desktop restore"
cmd /c "agent-desktop close-app \"Notepad\""
```

### Snapshot & Khám phá Controls
```bash
# Snapshot cây trợ năng dạng thu gọn (Khuyến nghị cho AI)
cmd /c "agent-desktop snapshot --app \"App Name\" -i --compact"

# Tìm kiếm phần tử theo role hoặc text
cmd /c "agent-desktop find --role button --name \"Save\""

# Đọc thuộc tính của một phần tử
cmd /c "agent-desktop get text @s8f3k2p9:e3"
cmd /c "agent-desktop get bounds @s8f3k2p9:e3"
cmd /c "agent-desktop is visible @s8f3k2p9:e3"
```

### Thao tác Controls
```bash
# Click ngữ nghĩa (Semantic press qua UI Automation)
cmd /c "agent-desktop click @s8f3k2p9:e5"

# Click đúp vật lý (cần cờ --headed)
cmd /c "agent-desktop double-click @s8f3k2p9:e5 --headed"

# Nhập văn bản vào trường nhập liệu
cmd /c "agent-desktop type @s8f3k2p9:e2 \"Sample input text\""
cmd /c "agent-desktop clear @s8f3k2p9:e2"

# Bật/tắt Checkbox hoặc Switch
cmd /c "agent-desktop check @s8f3k2p9:e7"
cmd /c "agent-desktop uncheck @s8f3k2p9:e7"
cmd /c "agent-desktop toggle @s8f3k2p9:e7"

# Chọn giá trị trong combobox / dropdown
cmd /c "agent-desktop select @s8f3k2p9:e8 \"Item Name\""

# Gửi tổ hợp phím (Key combos)
cmd /c "agent-desktop press ctrl+s"
cmd /c "agent-desktop press enter"
cmd /c "agent-desktop press escape"
```

### Clipboard & Screenshot
```bash
# Đọc / Ghi clipboard hệ thống
cmd /c "agent-desktop clipboard-get"
cmd /c "agent-desktop clipboard-set \"Text to copy\""

# Chụp ảnh cửa sổ ứng dụng đang focus
cmd /c "agent-desktop screenshot app_window.png"
```

---

## 4. Cơ chế Bảo vệ Trạng thái (`STALE_REF`) & Xử lý Lỗi

* **Cấu trúc Ref ID**: Ref ID của `agent-desktop` có tiền tố chứa Snapshot ID (ví dụ `@s8f3k2p9:e5`). Tiền tố này đảm bảo agent không dùng nhầm ref của snapshot cũ.
* **Lỗi `STALE_REF` hoặc `AMBIGUOUS_TARGET`**: Xảy ra khi ứng dụng chuyển giao diện, mở hộp thoại mới hoặc đóng menu.
  * **Giải pháp**: Ngay khi gặp `STALE_REF`, chụp lại snapshot mới (`agent-desktop snapshot -i --compact`), lấy Ref ID mới và tiếp tục thao tác.

---

## 5. Rào chắn An toàn (Safety Guardrails)

* **Tuyệt đối không tự ý tương tác** với các tiến trình hệ thống nhạy cảm: Windows Security, UAC Prompt (User Account Control), Task Manager, Registry Editor (`regedit`), hoặc các cửa sổ quản trị quyền Administrator.
* Khi thực hiện các thao tác có khả năng làm mất dữ liệu trên app desktop (như Save As đè file, Đóng không lưu, Xóa dữ liệu), phải hỏi xác nhận từ người dùng trước khi click.
