# QUY TẮC QUẢN LÝ TRÌNH DUYỆT & PLAYWRIGHT (BROWSER RULES)

## ⚠️ NGUYÊN TẮC BẮT BUỘC: KHÔNG TỰ Ý ĐÓNG TRÌNH DUYỆT

1. **Tuyệt đối KHÔNG tự động đóng trình duyệt**:
   - Khi sử dụng Playwright CLI, MCP Playwright hoặc Browser Subagent, KHÔNG ĐƯỢC chạy các lệnh đóng như `browser_close`, `playwright-cli close`, `close-all`, `kill-all` trừ khi người dùng yêu cầu trực tiếp bằng văn bản (ví dụ: *"đóng trình duyệt", "close browser", "tắt browser"*).
   - Luôn duy trì phiên trình duyệt (browser session) mở sẵn để người dùng có thể trực tiếp quan sát kết quả trực quan, inspect mã nguồn và kiểm tra trải nghiệm người dùng thực tế.

2. **Quy tắc phiên làm việc**:
   - Khi chuyển hướng hoặc thực hiện kiểm tra các kịch bản mới, sử dụng lại cửa sổ / tab hiện có (`goto`, `navigate`) thay vì đóng đi mở lại.
   - Khi kết thúc phiên kiểm thử hoặc nhiệm vụ, giữ nguyên trạng thái trang cuối cùng và báo cáo đường dẫn/kết quả cho người dùng.
