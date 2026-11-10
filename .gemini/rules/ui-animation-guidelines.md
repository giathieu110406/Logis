# UI & Animation Architecture Guidelines

Tài liệu này quy định các thư viện, nguồn tham chiếu và chuẩn thiết kế UI/hiệu ứng bắt buộc cho dự án web.

---

## 1. Nguồn tham chiếu UI & Animation bắt buộc (Mandatory Repositories)

Mọi thành phần giao diện (UI) và hiệu ứng (animations/transitions) trên web cần ưu tiên tham khảo, áp dụng mẫu và tư duy thiết kế từ 2 repository sau:

1. **Pretext**:
   - **Repository**: `https://github.com/chenglou/pretext.git`
   - **Đặc trưng & Ứng dụng**: Thư viện/thuật toán tính toán layout văn bản, typography, pre-layouting cực nhanh và mượt mà, tối ưu hóa text rendering, canvas/DOM layout calculation không gây reflow/layout thrashing. Áp dụng cho các thành phần soạn thảo, hiển thị LaTeX, MarkItDown, typography, text container và card hiển thị.

2. **Animate UI**:
   - **Repository**: `https://github.com/imskyleen/animate-ui.git`
   - **Đặc trưng & Ứng dụng**: Bộ sưu tập các component hiệu ứng cao cấp, modern micro-interactions (bấm nút morph, text splitting, sliding numbers, spotlight card, hover reveal, spring transitions mượt mà trên nền Framer Motion / Motion). Áp dụng làm chuẩn cho các nút bấm hành động (CTA), modal, card studio, toolbar, chuyển cảnh hero section và badge thông số.

---

## 2. Tính linh hoạt trong việc mở rộng thư viện (Extensibility)

- Ngoài 2 repository cốt lõi ở trên, được phép chủ động tích hợp hoặc phối hợp thêm các thư viện animation/UI hiện đại khác khi cần thiết, bao gồm nhưng không giới hạn:
  - **Motion (framer-motion)**: Animation state, layout morph, exit/enter animations (hiện đã cài đặt sẵn trong dự án).
  - **Tailwind CSS & Tailwind Utilities**: Styling nhanh, responsive, glassmorphism.
  - **Lucide Icons**: Bộ icon hiện đại, tối giản.
  - **Canvas / WebGL / SVG Custom Shaders**: Cho các hiệu ứng background hạt, grid, geometry tương tác nếu cần.

---

## 3. Quy chuẩn áp dụng vào Codebase

- **Modular Components**: Các UI component hiệu ứng theo phong cách `animate-ui` hoặc `pretext` phải được tổ chức tách bạch trong thư mục `src/components/ui/` (ví dụ: `SpotlightCard.tsx`, `CopyMorphButton.tsx`, `SlidingNumber.tsx`, `SplittingText.tsx`...).
- **Hiệu năng cao (60fps+)**: Ưu tiên GPU-accelerated properties (`transform`, `opacity`), tránh gây giật lag (jank) hoặc ép trình duyệt tính toán lại layout (reflow) không cần thiết.
- **Tôn trọng Accessible & Reduced Motion**: Luôn cân nhắc hỗ trợ người dùng giảm thiểu hiệu ứng chuyển động nếu cần.
