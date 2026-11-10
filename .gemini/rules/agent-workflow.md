# Autonomous Agent Workflow & Lifecycle Discipline

Tài liệu này quy chuẩn hóa vòng đời phát triển phần mềm (SDLC) theo cơ chế **tương tác từng lượt (Turn-by-turn Interaction)**, kết hợp tính linh hoạt: tối giản cho bài toán đơn giản, bài bản cho bài toán phức tạp.

---

## NGUYÊN TẮC BẤT KHẢ XÂM PHẠM: TƯƠNG TÁC TỪNG BƯỚC (STEP-BY-STEP GATE)

> [!CRITICAL]
> **CẤM CHẠY GỘP GIAI ĐOẠN (NO MULTI-STAGE RUSH)**:
> 1. Khi người dùng gửi prompt mở đầu: **CHỈ ĐƯỢC PHÉP phản hồi, trao đổi và đặt câu hỏi làm rõ**. TUYỆT ĐỐI KHÔNG TỰ Ý viết plan, viết code hay tự chạy công cụ thực thi trong lượt đầu tiên.
> 2. **PHỎNG VẤN LINH HOẠT (1 HOẶC NHIỀU CÂU HỎI)**: Mỗi lượt phỏng vấn có thể hỏi 1 hoặc nhiều câu hỏi liên quan (qua trao đổi hoặc công cụ `ask_question`), sau đó **BẮT BUỘC DỪNG LẠI** chờ người dùng trả lời. Không bắt buộc phải ép cứng đúng 1 câu, nhưng phải dừng lại theo từng lượt tương tác.
> 3. Phải trải qua quá trình đánh giá, hỏi - đáp qua lại nhiều lượt cho đến khi người dùng **CHÍNH THỨC CHỐT THIẾT KẾ (DESIGN APPROVAL)**.
> 4. **PHÂN LUỒNG THỰC THI (SMART ROUTING)**:
>    - **Tác vụ Đơn giản / Bounded**: BỎ QUA `writing-plans`, tiến hành triển khai code ngay để tránh rườm rà, quan liêu hóa quy trình.
>    - **Tác vụ Phức tạp / Architectural**: Mới cần lập kế hoạch qua `writing-plans`, xin duyệt kế hoạch rồi mới thực thi.

---

## 1. Giai đoạn Mở Đầu & Hội Thoại (`using-superpowers` + `ponytail`)
- Khi tiếp nhận prompt mở đầu từ người dùng:
  - Vận hành ngầm tư duy **`using-superpowers`** (kiểm tra quy trình, cấm làm ẩu) và **`ponytail`** (YAGNI, hướng tới giải pháp tối giản nhất, ưu tiên Native/Standard Library).
  - Phản hồi và trao đổi góc nhìn kỹ thuật ban đầu với người dùng súc tích, logic.

## 2. Giai đoạn Phỏng Vấn & Làm Rõ (`brainstorming` + `grill-me`)
- Phân loại bài toán:
  - **Spike**: Thử nghiệm tính khả thi.
  - **Bounded (Đơn giản / Vừa)**: Thay đổi nhỏ trong code có sẵn (fix bug, thêm flag, sửa 1 vài file, chỉnh endpoint/UI).
  - **Architectural (Phức tạp / Lớn)**: Tính năng mới quy mô lớn, tái cấu trúc hệ thống, ảnh hưởng $\ge 3$ module.
- Tiến hành phỏng vấn theo phong cách **`grill-me`**:
  - Đào sâu các nhánh quyết định (design tree).
  - **Linh hoạt đặt 1 hoặc nhiều câu hỏi/lần** (tập trung vào các vấn đề cốt lõi, có thể nhóm các câu hỏi liên quan lại với nhau), ưu tiên dùng `ask_question` kèm gợi ý cụ thể.
  - Sau mỗi đợt câu hỏi, **DỪNG LẠI và CHỜ** người dùng phản hồi. Lặp lại cho đến khi làm rõ toàn bộ yêu cầu.
- **Hard Approval Gate 1 (Chốt Thiết kế)**:
  - Tóm tắt phương án ngắn gọn ngay trong chat và hỏi xin xác nhận chốt.
  - **DỪNG LẠI CHỜ DUYỆT**: Phải được người dùng đồng ý mới chuyển sang bước tiếp theo.

## 3. Cân Nhắc Độ Phức Tạp & Đề Xuất `/boost`
- Nếu bài toán thuộc dạng Architectural phức tạp (ảnh hưởng $\ge 3$ module, thay đổi schema dữ liệu, RCA bug đa tầng):
  - Chủ động đề xuất: *"Hệ thống này phức tạp, tôi đề xuất kích hoạt `/boost` để tư duy đa chiều và phân bổ subagents. Bạn có đồng ý không?"*
  - **DỪNG LẠI** chờ người dùng đồng ý mới kích hoạt.

## 4. Giai đoạn Lập Kế Hoạch (`writing-plans`) – *Chỉ Dành Cho Bài Toán Phức Tạp*
- **Đối với Tác vụ Đơn giản / Bounded**:
  - **TUYỆT ĐỐI BỎ QUA `writing-plans`**. Không tạo file plan, không chia task hình thức để tránh làm phức tạp hóa vấn đề. Sau khi chốt ở Bước 2, chuyển thẳng sang viết code (Bước 5).
- **Đối với Tác vụ Phức tạp / Architectural**:
  - AI kích hoạt `writing-plans` để chia nhỏ task 2–5 phút kèm tiêu chí kiểm chứng.
  - **Hard Approval Gate 2**: Trình bày kế hoạch và **DỪNG LẠI** xin phê duyệt trước khi code.

## 5. Giai đoạn Thực Thi Code & Kiểm Chứng Trình Duyệt

- **Triển khai code**:
  - Với tác vụ đơn giản: Triển khai code trực tiếp, sửa đổi tối thiểu (Surgical Edits), chạy test/build kiểm chứng (`verification-before-completion`).
  - Với tác vụ phức tạp: Chạy tự hành theo `executing-plans` (hoặc `/goal` nếu người dùng yêu cầu), tuân thủ TDD.
- **Quy tắc chọn công cụ điều khiển trình duyệt (Browser Tooling Matrix)**:
  - **Chọn `chrome-devtools-mcp` khi**:
    1. Trọng tâm là Web Performance: Core Web Vitals, phân tích render bottleneck, chạy audit Lighthouse.
    2. Debug layout sâu, CSS lồng nhau, kiểm tra computed styles của frontend.
    3. Cần thao tác trực tiếp trên cửa sổ Google Chrome cá nhân đang mở sẵn tài khoản/phiên đăng nhập của người dùng.
  - **Chọn `playwright-cli` (hoặc Playwright MCP) trong TẤT CẢ các trường hợp còn lại**:
    1. Kiểm thử chức năng, xác minh nghiệp vụ E2E sau khi code.
    2. Tự động hóa workflow (điền form, click, crawl, kiểm tra element qua snapshot/ref) với độ ổn định cao, tiết kiệm token.
    3. Giả lập môi trường mạng (mock API response, chặn asset nặng, giả lập offline).
    4. Yêu cầu kiểm thử đa trình duyệt (Chromium, Firefox, WebKit).
    5. Duy trì **persistent daemon session** để test nhanh qua các lượt chạy mà không làm phiền cửa sổ Chrome cá nhân.

