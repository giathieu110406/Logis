# Superpowers Agent Guidelines & Workflow Discipline

Hệ thống kỹ năng **Superpowers** đã được kết nối và cấu hình toàn cục trong môi trường Antigravity (`~/.gemini/config/skills/`).

---

## 1. Nguyên tắc Kích hoạt Kỹ năng (Skill Dispatch)

- Trước khi bắt đầu một tác vụ kỹ thuật, luôn kiểm tra xem có kỹ năng phù hợp trong kho Superpowers hay không:
  - **Khởi tạo tính năng mới / Lên ý tưởng**: Kích hoạt `brainstorming` trước khi bước vào giai đoạn planning mode hoặc viết mã.
  - **Lập kế hoạch thực thi**: Sử dụng `writing-plans` để chia nhỏ task thành các checkpoint rõ ràng (2-5 phút/task).
  - **Thực thi kế hoạch**: Dùng `executing-plans` hoặc `subagent-driven-development` để thực hiện tuần tự từng task.
  - **Gỡ lỗi (Debugging)**: Bắt buộc dùng `systematic-debugging` để tìm nguyên nhân gốc rễ (Root Cause Analysis), không đoán mò hay sửa hú họa (no guess-and-check).
  - **Kiểm thử & Phát triển**: Tuân thủ triệt để `test-driven-development` (TDD: Red -> Green -> Refactor).
  - **Hoàn thành tác vụ**: Luôn chạy `verification-before-completion` trước khi kết luận hoàn tất.
  - **Nhánh & Git**: Sử dụng `using-git-worktrees` và `finishing-a-development-branch` khi quản lý nhánh làm việc.

---

## 2. Ánh xạ Công cụ trong Antigravity (Antigravity Tool Mapping)

- **Task Tracking**:
  - Khi kỹ năng yêu cầu tạo checklist hoặc todo, sử dụng **task artifact** (dùng `write_to_file` tạo artifact checklist và cập nhật từng bước với `replace_file_content`).
  - Không nhầm lẫn với `manage_task` (vốn chỉ dùng để điều khiển tiến trình background OS).
- **Subagents**:
  - Khi cần ủy quyền tác vụ song song, kích hoạt subagent hoặc tuân thủ cơ chế của hệ thống Antigravity.
- **Tiêu chuẩn chất lượng**:
  - Kết hợp hài hòa giữa nguyên tắc kỷ luật phần mềm của **Superpowers** và tính tối giản, loại bỏ over-engineering của **Ponytail**.
