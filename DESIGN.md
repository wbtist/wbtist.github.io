# Design System Strategy: Fire & Ice

## 1. Overview & Creative North Star

This design system embraces the **"Fire & Ice"** aesthetic for a highly professional, visually striking Front-End Developer Portfolio. It moves away from standard cold-developer themes into a dramatic dual-tone warm and cool dark mode, directly inspired by professional split-lighting portrait photography. The goal is to provide a "wow" factor upon first load.

## 2. Colors

The color palette uses extremely deep blacks for maximum contrast against vibrant, neon dual-tone glow.

* **Primary Background:** `#0A0A0B` - Pitch dark indigo-black for absolute depth.
* **Secondary Background:** `#141416` - Slightly elevated surface for cards and panels.
* **Tertiary Background:** `#1E1E20` - Used for input fields, table headers, and deeper nested elements.
* **Accent Primary:** `#FF6B00` (Electric Orange) - The start of our main gradient, signifying energy from the left side.
* **Accent Secondary:** `#00E5FF` (Electric Cyan) - The end of the gradient, providing cool precision from the right.
* **Text Primary:** `#FAFAFB` - Near-white for standard readability.
* **Text Secondary:** `#A1A1AA` - Muted gray/zinc for supporting text and descriptions.

### Surface Hierarchy & Nesting

Treat the UI as a digital canvas with infinite depth.

* **Base:** `--bg-primary`
* **Glass Panels:** Ultra-soft `--glass-bg` `rgba(20, 20, 22, 0.45)`
* **Borders:** "Ghost borders" at `rgba(255, 255, 255, 0.05)` for floating and containment without hard lines.

## 3. Typography

The typography balances bold contemporary headers with highly legible UI text.

* **Display/Headings (Outfit):** Used for all `h1`, `h2`, `h3` tags. Weights 600-800. Tightly kerned for a modern logo-like feel.
* **Body (Inter):** The workhorse font for all paragraphs. Generous line-height (`1.6` to `1.8`) and softer colors (`#A1A1AA`) for perfect readability.

## 4. Elevation & Depth

Elevation is handled via ultra-soft glassmorphism and subtle pulsing glows, rather than harsh shadows.

* **Glassmorphism:** We combine `backdrop-filter: blur(16px)` with a semi-transparent dark fill (`--glass-bg`) and an ultra-thin 1px border.
* **Glow Effects:** Buttons and interactive elements use tight, low-opacity box-shadows matching the accent primary tint (`rgba(255, 81, 47, 0.15)`).

## 5. Components

### Glass Panels

* **Styling:** Soft borders, subtle blurs. They house the main content across the site.
* **Hover State:** Smooth `transform: translateY(-2px)` with an enhanced box-shadow glow.

### Actions & Links

* **Primary Links:** Pill-shaped actions with a delicate gradient background or borders.
* **Hover State:** Increase opacity, glow, and slight upward movement.

### Micro-Animations

* **Reveal:** Elements fade and slide up sequentially on load.
* **Glow Orbs:** Large blurred geometric shapes in the background to provide a sense of atmospheric light.
