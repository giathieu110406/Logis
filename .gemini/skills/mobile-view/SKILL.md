---
name: mobile-view
description: Use when user wants to simulate, inspect, preview, or test web pages (including localhost and external domains) in mobile and tablet viewports with device frames, responsive resolutions, and mobile user-agent spoofing. Triggered by /mobile-view.
author: Lychee
version: 1.1.0
---

# Mobile View Skill for Antigravity

> [!CRITICAL]
> **QUY TẮC BẮT BUỘC KHI KÍCH HOẠT SKILL NÀY (HOẶC GẶP LỆNH `/mobile-view`):**
> 1. **TUYỆT ĐỐI CẤM** dùng Playwright MCP tools (`browser_navigate`, `browser_resize`, v.v.) hoặc kéo co nhỏ cửa sổ thông thường.
> 2. **BẮT BUỘC CHẠY TRỰC TIẾP SCRIPT RUNNER**: Luôn thực thi thông qua lệnh `node C:\Users\Giath\.gemini\config\skills\mobile-view\scripts\runner.cjs "<URL>" --keep-open` bằng công cụ dòng lệnh (`run_command`).
> 3. **Tự động suy luận URL**:
>    - Nếu người dùng cung cấp URL rõ ràng (ví dụ `http://localhost:3000` hoặc domain cụ thể), sử dụng URL đó.
>    - Nếu người dùng KHÔNG chỉ định URL, hãy kiểm tra dự án hiện tại (các file cấu hình, terminal log hoặc mặc định `http://localhost:3000` / `http://localhost:5173`).
> 4. **Mặc định bật tương tác trực tiếp (`--keep-open`)** trừ khi người dùng nói rõ chỉ cần chụp ảnh headless không mở cửa sổ.

---

## 1. Tính năng cốt lõi

- **Mô phỏng đa thiết bị:** Hỗ trợ iPhone 12/13/14/15/Pro Max, Google Pixel, iPad, Samsung Galaxy cùng khung máy (device bezel) chân thực.
- **Tương thích toàn diện Localhost:** Tự động bypass các rào cản X-Frame-Options, Content-Security-Policy (CSP) và cấp quyền truy cập trực tiếp cho máy chủ nội bộ.
- **Tương tác trực tiếp:** Tự động mở trình duyệt Chromium nạp sẵn Extension Mobile View để người dùng tương tác tay trực tiếp.

---

## 2. Cách Agent thực thi (Execution Protocol)

Khi người dùng gõ `/mobile-view` (kèm hoặc không kèm URL), AI Agent chạy ngay lệnh sau qua `run_command` (với `WaitMsBeforeAsync: 500` hoặc để chạy nền tương tác):

```powershell
node "C:\Users\Giath\.gemini\config\skills\mobile-view\scripts\runner.cjs" "<URL>" --keep-open
```

Ví dụ chạy kiểm tra localhost:
```powershell
node "C:\Users\Giath\.gemini\config\skills\mobile-view\scripts\runner.cjs" "http://localhost:3000" --keep-open
```

---

## 3. Cấu trúc Skill

- `SKILL.md`: Tài liệu hướng dẫn định tuyến và sử dụng cho AI Agent.
- `scripts/runner.cjs`: Script điều khiển Playwright tự động nạp extension Mobile View, điều hướng trang web, inject giả lập di động và chụp ảnh kết quả.
- Thư mục nguồn Extension gốc: `C:\Users\Giath\OneDrive\Tài liệu\Thư mục mới\Antigravity\projects\mobile-view` (liên kết qua junction `C:\Users\Giath\.gemini\antigravity\scratch\mobile-view`).
