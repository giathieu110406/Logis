# LogisQuest

Sunlit Maritime & 3D Toy Board Game: the look of the LogisQuest logistics board game landing site. Bright sky and cream grounds, an orange "sun" call to action, serif display over a friendly sans.

This is a small first system built from the live site's tokens (`--lq-*` in `mobile-home.css`) and the buy page. It has tokens and a cover, no component bundle yet.

## Content fundamentals
- Vietnamese copy, warm and direct: "Mua ngay", "Giao nhanh toàn quốc". Short labels in sentence case; price and trust facts first.
- Never invent numbers. Price, voucher, reviews and policies come from the site.

## Visual foundations
- **Ground**: `cream` for the page, `sky-50` for alternating bands, `white` cards with a `sky-200` hairline.
- **Action**: the primary button is `sun-500` with `ink` text and a `shadow-toy` bottom edge (pressed: the edge collapses). Secondary is a `sky-600` outlined pill.
- **Text**: `ink` for headings and body, `ink-soft` for secondary. Orange as text is `sun-700` only.
- **Type**: `display-*` (Cormorant Garamond) for headings, Plus Jakarta Sans for everything else. Use `text-wrap: balance` on headings and `pretty` on paragraphs.
- **Shape**: `radius-md` cards, `radius-pill` buttons. Spacing on the 8px scale (`space-1`..`space-5`).
- **Depth**: `shadow-soft` at rest, `shadow-lift` for hover and overlays.

## Iconography
Inline stroke SVG, 1.75px stroke, rounded caps, `sky-600`. No emoji.
