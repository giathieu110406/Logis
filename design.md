# LOGISQUEST DESIGN SYSTEM & VISUAL GUIDELINES (`design.md`)

Tài liệu quy chuẩn thiết kế giao diện (UI) và ngôn ngữ hình ảnh (Visual Art / Image Gen) được trích xuất từ bộ nhận diện LogisQuest.

---

> ⚠️ **CRITICAL DESIGN RULE**: Luôn TRÁNH thiết kế tối màu (Dark Mode) và màu Xanh Navy đậm (`#0B2545`, `#071a2f`, `#0c2340`). Toàn bộ giao diện ưu tiên phong cách **TƯƠI SÁNG (Sunlit Maritime Light Mode)** với nền trắng kem, trời xanh biển sáng ngập tràn ánh nắng (#EBF5FF - #F0F8FF). Tỷ lệ hiển thị Khối 5 bắt buộc là **16:10**.

---

## 1. Design System

### 1.1. Color Palette

#### Primary & Brand Colors
| Tên màu | Mã Hex | RGB | Ứng dụng |
| :--- | :--- | :--- | :--- |
| **Ocean Deep Blue** | `#0B2545` | `rgb(11, 37, 69)` | Heading chính, text nhấn mạnh, background header/footer |
| **Sky / Sea Blue** | `#0099FF` | `rgb(0, 153, 255)` | Text link, highlight text, viền border sáng, icon accent |
| **Logistics Orange** | `#F05A22` / `#E65100` | `rgb(240, 90, 34)` | CTA Button chính, discount tag, điểm nhấn chuyển đổi |
| **Sunburst Yellow** | `#FFB800` | `rgb(255, 184, 0)` | Badge "Sẵn sàng chinh phục", container thẻ bài Incoterm |

#### Logistics Category Colors (Container Accents)
| Nhóm | Mã Hex | RGB | Ý nghĩa |
| :--- | :--- | :--- | :--- |
| **Phương tiện (Green)** | `#22C55E` / `#16A34A` | `rgb(34, 197, 94)` | Thẻ phương tiện, container xanh lá |
| **Sự kiện (Red)** | `#E11D48` / `#DC2626` | `rgb(225, 29, 72)` | Thẻ sự kiện rủi ro, container đỏ |
| **Thẻ chợ (Blue)** | `#2563EB` / `#1D4ED8` | `rgb(37, 99, 235)` | Thẻ giao thương chợ, container xanh dương |
| **Incoterms (Yellow)** | `#FACC15` / `#EAB308` | `rgb(250, 204, 21)` | Thẻ quy tắc Incoterm, container vàng |

#### Neutral & Background
| Tên màu | Mã Hex / Alpha | Ứng dụng |
| :--- | :--- | :--- |
| **White / Base** | `#FFFFFF` | Background thẻ card, primary button text |
| **Sky Tint BG** | `#EBF5FF` - `#F0F8FF` | Nền section phụ, gradient chuyển tiếp |
| **Slate Gray (Body)**| `#475569` | Nội dung mô tả, văn bản phụ |
| **Dark Slate Bar** | `rgba(11, 37, 69, 0.85)`| Feature badge bar (hàng icon tính năng) |

---

### 1.2. Typography

* **Display / Heading Font**: `Montserrat` hoặc `Outfit`, `SVN-Gilroy` (Sans-serif hiện đại, nét dày, hình khối vững chắc).
  * **H1 / Hero Title**: 40px – 52px | Weight: 800 (ExtraBold) | Letter-spacing: -0.5px | Uppercase
  * **H2 / Section Title**: 28px – 36px | Weight: 800 (ExtraBold) | Text-transform: Uppercase
  * **Sub-headline / Tagline**: 18px – 22px | Weight: 500 (Medium) / Italic serif nhẹ đối với slogan
* **Body Font**: `Inter` hoặc `Roboto`, `Be Vietnam Pro`
  * **Body Regular**: 15px – 16px | Weight: 400 (Regular) | Line-height: 1.6
  * **Body Bold / Highlight**: 15px – 16px | Weight: 700 (Bold) | Color: `#0099FF` / `#0B2545`
  * **Badge / Label**: 12px – 14px | Weight: 700 (Bold) | Uppercase | Letter-spacing: 0.5px

---

### 1.3. Spacing, Radius & Shadows

* **Border Radius**:
  * `Small (sm)`: 8px (Container icon, tag con)
  * `Medium (md)`: 12px – 16px (Buttons, badges)
  * `Large (lg)`: 24px – 32px (Product cards, photo frame, glassmorphic card)
  * `Pill (full)`: 9999px (Capsule badges như "Sẵn sàng chinh phục?", "Hải trình đấu trí")
* **Box Shadow**:
  * `Card Glow`: `0 20px 50px -10px rgba(0, 110, 255, 0.15)`
  * `Button Shadow`: `0 8px 24px -4px rgba(240, 90, 34, 0.4)`
  * `Glass Border`: `1px solid rgba(255, 255, 255, 0.6)`
  * `3D Floating`: `0 15px 35px rgba(11, 37, 69, 0.12)`

---

## 2. Visual Language & Art Direction

* **Mood & Atmosphere**: Năng động, tươi sáng, phiêu lưu trí tuệ (Smart, Fun, Dynamic Maritime). Bầu không khí cảng biển hiện đại tràn ngập ánh nắng.
* **Texture & Materials**:
  * Mặt sóng biển 3D bán thực tế (stylized ocean waves).
  * Vỏ container kim loại có gân sọc dập nổi (ribbed metal texture).
  * Kính mờ phủ sương nhẹ (Frosted Glassmorphism).
* **Gradients**:
  * *Sky-to-Ocean Gradient*: `linear-gradient(180deg, #1E88E5 0%, #4FC3F7 45%, #E0F2FE 100%)`
  * *CTA Gradient*: `linear-gradient(135deg, #FF6B00 0%, #D9480F 100%)`
  * *Accent Yellow Gradient*: `linear-gradient(135deg, #FFC107 0%, #FFA000 100%)`
* **Lighting Style**: Ánh sáng ban ngày tự nhiên (Golden-hour daylight), highlight bóng đổ mềm, viền phản chiếu ánh kim nhẹ (rim light) trên các mô hình 3D.
* **Composition Rules**:
  * Bố cục đối xứng hoặc 2 cột: Một bên là nội dung chữ + CTA, một bên là Mockup 3D hộp game / linh kiện góc nghiêng Isometric.
  * Phụ kiện trang trí phụ: Cần cẩu cảng biển, tàu container, máy bay chở hàng, đường đứt nét hải trình hàng hải (nautical navigation dash line).

---

## 3. Component Specifications

### 3.1. Buttons
* **Primary Button (CTA)**:
  * Background: `#F05A22` (Gradient cam đậm)
  * Text: White, Bold, Uppercase, Kèm icon `>` hoặc giỏ hàng
  * Padding: `14px 32px` | Radius: `12px` | Shadow cam lan tỏa.
* **Secondary Button**:
  * Background: `#FFFFFF` | Text: `#0B2545` | Border: `1.5px solid #E2E8F0`
  * Icon Play màu xanh biển `▶`.

### 3.2. Badges & Labels
* **Capsule Badge (Ruy băng đấu trí)**:
  * Kiểu dáng hình lục giác dẹt / ruy băng nhọn 2 đầu.
  * Background: `#0B2545` hoặc `#FFB800`
  * Icon mỏ neo `⚓` hoặc biểu tượng nhóm người `👥` 2 bên.

### 3.3. Cards & Containers
* **Container Card (4 Trụ cột)**:
  * Thiết kế mô phỏng mặt bên thùng container logistics: Đường gân dập nổi dọc, viền bo góc đinh tán, góc nghiêng 3D so le nhẹ (-3° đến 3°).
* **Glassmorphic Image Frame**:
  * Nền trắng mờ `rgba(255, 255, 255, 0.75)`, backdrop-filter: `blur(16px)`.
  * Viền trắng phát sáng viền ngoài `1.5px solid rgba(255, 255, 255, 0.8)`.

### 3.4. Feature Bar (Trust Bar)
* Dải banner bo tròn nền Navy bán trong suốt (`rgba(11, 37, 69, 0.85)`).
* Icon nét trắng (Check badge, Gift, Headset 24/7) kết hợp chữ trắng 2 dòng.

---

## 4. Image Generation Prompt Template

Dùng cấu trúc prompt này cho Midjourney / Stable Diffusion / DALL-E / Imagen để tạo visual đồng bộ:

### 4.1. Master Background & Setting Prompt
```text
3D stylized isometric render of a modern bustling sunny maritime trade port, vivid turquoise ocean water with gentle wave textures, cargo container ship docking at industrial harbor with orange harbor cranes, friendly fluffy white clouds in vibrant gradient blue sky, toy-like clean aesthetics, miniature tabletop game diorama style, bright daylight illumination, cheerful and adventurous commercial atmosphere, 8k resolution, Unreal Engine 5 render style --ar 16:9 --v 6.0
```

### 4.2. Board Game & Components Mockup Prompt
```text
Product photography mock-up of a modern logistics strategy boardgame titled "LogisQuest", featuring a colorful game box with cartoon cargo ships, hex market cards, colorful 3D plastic miniature shipping containers (green, red, blue, yellow), wooden boat tokens, dice and fold-out world sea route map board, placed on a clean dock wooden pier overlooking bright ocean, isometric 45 degree angle, soft studio lighting with vibrant rim light, high fidelity --ar 16:9 --v 6.0
```

### 4.3. UI Element (Container Card Assets) Prompt
```text
Clean 3D render of four colored shipping containers (emerald green, scarlet red, royal blue, golden yellow), front perspective view, stylized smooth ribbed metallic texture, embossed bold white typography on surface, isolated on clean light blue gradient background, casual game asset style, crisp edges, soft ambient occlusion --ar 16:9
```
