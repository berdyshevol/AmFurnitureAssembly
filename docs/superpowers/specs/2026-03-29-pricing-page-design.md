# Pricing Page — Design Spec

## Overview

A new `/pricing` page for AM Furniture Assembly that displays flat-rate per-item pricing with a prominent Bundle Deal banner. The page follows the existing site design system (Tailwind CSS v4, Framer Motion animations, Inter font, dark primary palette).

## Page Structure

### 1. Hero Banner

- Same pattern as Services/About pages: dark overlay on background image, centered text
- Title: "Assembly **Pricing**"
- Subtitle: "Transparent, flat-rate pricing. No hidden fees. Know exactly what you'll pay before we start."
- Height: 340px mobile, 420px desktop

### 2. Bundle & Save Banner

- Full-width section with `#f8f9fa` background
- Centered dark gradient card (max-width 900px) with rounded corners (16px)
- Badge: "SPECIAL OFFER" pill
- Title: "Bundle & Save"
- Subtitle: "The more you assemble, the more you save"
- Three tier cards in a row:
  - **10% OFF** — 1–3 items
  - **15% OFF** — 4–6 items (visually highlighted, slightly larger)
  - **20% OFF** — 7+ items
- Each tier is a clickable link to `/contact`
- Hover effect: translateY(-4px)

### 3. Price Grid

- Section title: "Our **Prices**"
- Subtitle: "Flat-rate per item. Price depends on complexity."
- Responsive grid: 4 columns desktop, 3 tablet, 2 mobile
- Each card contains:
  - SVG line icon (48x48, stroke-only, 1.5px weight)
  - Item name
  - Price or price range
- Cards have white background, 1px border, 12px radius, hover lift effect

#### Price List

| Item | Price | Icon Description |
|------|-------|-----------------|
| Chair | $40 | Armchair silhouette |
| Nightstand | $50 | Two-drawer bedside table |
| Coffee Table | $50 | Low table with cup |
| Shelves | $50 – $100 | Bookshelf with items |
| Desk | $65 – $100 | Desk with drawers and monitor |
| Bed Frame | $75 – $120 | Bed with headboards |
| TV Stand | $75 – $120 | Media console with TV above |
| Dresser | $85 – $120 | Tall chest of drawers |
| Vanity | $120 | Mirror on table with drawer |
| Storage Cabinet | $120 – $150 | Double-door cabinet |
| Patio Set (4 pcs) | from $95 | Umbrella table with chairs |
| Shed | from $350 | Small house with roof (highlighted) |
| Playground | from $350 | Swing set structure (highlighted) |

- Shed and Playground cards have grey background (`#f8f9fa`) and 2px border to visually distinguish as large projects
- "from" prefix rendered in smaller grey text

### 4. Note

- Centered text below price grid
- "* Final price depends on the complexity and brand of furniture."
- "Don't see your item? **Contact us** for a free estimate." (link to `/contact`)

### 5. CTA Section

- Reuse existing `CTASection` component
- "Ready to **Get Started?**"
- "Contact us for a free estimate. Same-day and next-day assembly available."
- Button: "Get Free Estimate" → `/contact`

## Technical Implementation

### Files to Create

- `app/pricing/page.tsx` — Page component with metadata
- `lib/pricing-data.ts` — Pricing items data array and bundle tiers config

### Files to Modify

- `components/Navbar.tsx` — Add "Pricing" link to navigation
- `components/Footer.tsx` — Add "Pricing" link to footer nav
- `app/sitemap.ts` — Add `/pricing` route

### Data Structure

```typescript
// lib/pricing-data.ts
interface PricingItem {
  name: string
  price: string        // e.g. "$40" or "$50 – $100"
  fromPrice?: boolean  // shows "from" prefix
  icon: string         // SVG icon identifier
  isLargeProject?: boolean
  pcsNote?: string     // e.g. "(4 pcs)"
}

interface BundleTier {
  discount: string     // "10%"
  label: string        // "1 – 3 items"
  highlighted?: boolean
}
```

### SVG Icons

- All icons are inline SVG, 48x48 viewBox
- Style: stroke-only, stroke-width 1.5, no fill, round line caps/joins
- Color: `#212529` (primary)
- 13 unique icons, one per pricing item

### Animations

- Use existing `ScrollReveal` component for section entrance animations
- Price cards: staggered fade-in on scroll (Framer Motion)
- Bundle tiers: hover translateY(-4px) transition

### SEO

- Page title: "Pricing | AM Furniture Assembly"
- Meta description: "Transparent flat-rate pricing for furniture assembly in Denton, TX. Chairs from $40, beds from $75, desks from $65. Bundle discounts up to 20%."
- Add StructuredData component with Service schema

### Responsive Behavior

- **Desktop (>900px)**: 4-column price grid, 3 bundle tiers in row
- **Tablet (640-900px)**: 3-column price grid, tiers wrap if needed
- **Mobile (<640px)**: 2-column price grid, tiers stack vertically

## Design Tokens (from existing system)

- Primary: `#212529`
- Secondary: `#6c757d`
- Background: `#f8f9fa`
- Border: `#e9ecef`
- Card radius: `12px`
- Hero radius: `16px`
- Button radius: `8px`

## Out of Scope

- Price calculator / estimator
- Online booking integration
- Admin panel for price editing
- Animated price transitions
