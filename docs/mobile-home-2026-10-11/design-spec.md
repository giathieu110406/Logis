# Mobile homepage refinement

## Goal and scope
Make LogisQuest readable and visually composed on portrait phones while retaining the current bright maritime 3D style, all copy, product imagery, navigation, card details, video, and purchase flow. Desktop and tablet presentation remain unchanged. The user authorized implementation after the responsive Dev Tool.

## Viewports and composition
- Desktop regression: 1418x696 and preview 1440x900.
- Tablet preview: 768x1024.
- Phone acceptance: 320x740, 360x800, 390x844, 430x932 CSS px.
- Mobile breakpoint: existing 700px.
- Header: retain logo, purchase button, menu; compact spacing at narrow widths.
- Hero: independent logo at top; existing title and subtitle in upper third; a mobile-only purchase CTA using the existing buy.html destination; regenerated portrait harbor backdrop with primary ship in lower half. Target one phone screen excluding header, with room to grow if short screens require it.
- Introduction: compact single column with brand title, unchanged real product carousel, body and existing CTA. Reuse existing mobile intro background.
- Gameplay/community: title then imagery then unchanged paragraphs. Use CSS grid ordering within existing sections without duplicating content. Keep board image contained and photos at their existing 4:3 ratio.
- Pillars: retain four interactive cards in 2x2; reduce excessive top gaps and section minimum heights. Reuse current mobile background.
- Guide: compact title plus playable 16:9 video; remove rigid minimum section height. Reuse mobile artwork.
- CTA/footer: retain mobile product image, existing purchase/support actions and copy; compact spacing and decorative image height.
- Hide the decorative nautical rail on phones; normal vertical scroll remains. Main desktop behavior stays unchanged.

## Tokens and layers
Retain existing fonts, sky/cyan/navy/gold palette. Phone gutters 16px (14px at 320px), section padding 32-40px, body text around 15-16px/1.65, tap targets at least 44px. Raster harbor illustration stays beneath semantic title, logo and actions. Existing logo and product/card assets remain exact.

## Acceptance
No horizontal page overflow or clipped semantic content. Mobile artwork loads; desktop still selects original artwork. Hero title/subtitle/action visible in first phone screen, primary ship unobstructed below. Menu, product carousel, four card detail interactions, video and purchase destinations remain usable. Normal scroll works inside Dev Tool and after closing. No new JS errors. Record browser emulation, not physical-device validation.
