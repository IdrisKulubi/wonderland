# Wonderland Design System (WDS) v1.0

## 1. Brand Philosophy
- **Core Concept:** "Organic Tech." The design sits at the intersection of natural purity and industrial precision.
- **The Visual Motif:** The Circle. Everything loops back. No sharp, aggressive edges. We use curves, loops, and rounded corners to symbolize the "Full Circle of Goodness."
- **Keywords:** Lush, Pristine, Automated, Traceable, Nourishing.

---

## 2. Color Palette
> [!NOTE]
> Use the Primary Green for strong branding moments. Use the Cream for backgrounds to avoid the harshness of pure white.

### Primary Brand Colors
| Color Name | Hex Code | Description | Usage |
| :--- | :--- | :--- | :--- |
| **Wonderland Emerald** | `#0D5D46` | Deep, rich, forest green. | Primary Buttons, Headers, Footer backgrounds. |
| **Dairy Cream** | `#F9F7F2` | Warm, off-white. | Main page backgrounds (Alternative to #FFFFFF). |
| **Charcoal Soil** | `#2C2C2C` | Soft black. | Primary text color (Softer than #000000). |

### Division Accents (The Ecosystem)
| Division | Hex Code | Name | Usage |
| :--- | :--- | :--- | :--- |
| **Feeds** | `#E1AD01` | Harvest Gold | Buttons/Highlights in the Feeds section. |
| **Farms** | `#4CAF50` | Fresh Leaf | Icons and Stats in the Farms section. |
| **Academy** | `#008CBA` | Wisdom Blue | Links and UI elements in the Education section. |
| **Products** | `#FF6F61` | Ripe Coral | Call-to-actions for buying food (appetizing). |

---

## 3. Typography
**Font Selection:** A clean, geometric Sans-Serif to convey modernity and trust.
- **Primary Font Family:** 'Inter' or 'Plus Jakarta Sans'
- **H1 (Hero Titles):** Bold, 64px (Desktop), 42px (Mobile). Tight letter spacing (-0.02em).
- **H2 (Section Headers):** Semi-Bold, 48px.
- **H3 (Card Titles):** Medium, 24px.
- **Body Text:** Regular, 16px or 18px. Line height 1.6 for high readability.
- **Captions/Labels:** Uppercase, Wide Spacing (1.5px), 12px.

---

## 4. UI Components & Elements
> [!IMPORTANT]
> **The "No Sharp Edges" Rule:** Everything must have rounded corners.

### Buttons
- **Style:** Pill-shaped (Fully rounded 50px radius).
- **Primary Button:** Emerald Background (`#0D5D46`), White Text. Shadow: `0px 4px 12px rgba(13, 93, 70, 0.3)`.
- **Secondary Button:** Transparent Background, Emerald Border (2px solid), Emerald Text.
- **Hover State:** Lift up 2px, slightly brighter background.

### Cards (Product/Course Display)
- **Border Radius:** 24px (Large, friendly curves).
- **Background:** White (`#FFFFFF`) on top of the Cream page background.
- **Shadow:** Soft drop shadow `0px 8px 24px rgba(0,0,0,0.05)`.
- **Behavior:** On hover, the card scales up by 2% (`transform: scale(1.02)`).

### Inputs (Forms)
- **Background:** Light Grey (`#F0F0F0`).
- **Border:** None (until active).
- **Radius:** 12px.
- **Active State:** Border appears in Division Color (e.g., Gold for Feeds query).

---

## 5. Iconography
- **Style:** Outline Icons with rounded stroke caps.
- **Stroke Weight:** 1.5px or 2px.
- **Library Suggestion:** Phosphor Icons or Heroicons (Rounded).
- **Key Icons needed:**
  - Cow / Livestock
  - Wheat / Grain
  - Milk Drop / Bottle
  - Graduation Cap / Book
  - Microscope / Science
  - Sprout / Leaf

---

## 6. Imagery & Photography Direction
The goal is to look expensive and authentic. Avoid "Stock Photo" clichés.

### The "Wonderland" Look
- **Macro Texture:** Extreme close-ups. The texture of animal feed, the condensation on a milk bottle, the veins of a green leaf. This implies "We pay attention to detail."
- **Human Connection:** When showing people, capture candid moments of work or enjoyment. No looking directly at the camera.
  - *Good:* A farmer's hands inspecting soil.
  - *Good:* A child laughing with a milk moustache.
- **Lighting:** Natural "Golden Hour" light for outdoor shots. Clean, bright "Studio Light" for product shots.

### Gradients & Overlays
To make text readable over images, use a Linear Gradient Overlay:
- **From:** `rgba(13, 93, 70, 0.8)` (Emerald with opacity)
- **To:** `rgba(13, 93, 70, 0.2)`
- **Direction:** Bottom to Top.

---

## 7. Layout & Grid
- **Container Width:** Max-width 1280px (Centered).
- **Grid:** 12-Column Grid (Desktop), 4-Column (Mobile).
- **Spacing (Whitespace):** Generous. Use 80px to 120px of padding between sections to let the design breathe.

---

## 8. Mobile Optimization (Kenya Specific)
- **Touch Targets:** All clickable elements must be at least 44px height.
- **Data Usage:** All images must be compressed (WebP format) for faster loading on 4G networks.
- **Navigation:** Use a "Hamburger Menu" that slides out from the right, covering 80% of the screen, featuring large legible links.