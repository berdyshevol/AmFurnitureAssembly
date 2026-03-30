# Pricing Page — Design Spec

## Overview

A new `/pricing` page for AM Furniture Assembly that displays flat-rate per-item pricing with a prominent Bundle Deal banner. The page follows the existing site design system (Tailwind CSS v4, Framer Motion animations, Inter font, dark primary palette).

## Page Structure

### 1. Hero Banner

- Same pattern as Services/About pages: dark overlay on background image, centered text
- Background image: `/photos/IMG_2705.jpeg` (same as Services page — reuse since it shows assembled furniture)
- Title: "Assembly **Pricing**"
- Subtitle: "Transparent, flat-rate pricing. No hidden fees. Know exactly what you'll pay before we start."
- Height: `h-[340px] sm:h-[420px]`

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

- Reuse existing `CTASection` component with its default hardcoded text (no prop changes needed)
- The default text ("Ready to Get Your Furniture Assembled?" / "Get a Free Quote") is appropriate for this page

## Technical Implementation

### Files to Create

- `app/pricing/page.tsx` — Page component with metadata
- `lib/pricing-data.ts` — Pricing items data array and bundle tiers config

### Files to Modify

- `components/Navbar.tsx` — Add "Pricing" link after "Services" in `navLinks` array
- `components/Footer.tsx` — Add "Pricing" link after "Services" in `quickLinks` array
- `app/sitemap.ts` — Add `/pricing` route

### Data Structure

```typescript
// lib/pricing-data.ts
interface PricingItem {
  name: string
  price: string        // e.g. "$40" or "$50 – $100"
  fromPrice?: boolean  // shows "from" prefix
  icon: React.ReactNode // Inline SVG JSX element
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

- All icons are inline SVG React components defined in `lib/pricing-data.ts` as JSX
- Each `PricingItem.icon` is a `React.ReactNode` (not a string)
- viewBox: `0 0 48 48`, rendered at 48x48px
- Style: stroke-only, stroke-width 1.5, no fill, round line caps/joins
- Color: `currentColor` (inherits from parent, defaults to `#212529`)
- 13 unique hand-drawn SVG icons — actual SVG paths are in the approved mockup at `.superpowers/brainstorm/35120-1774832418/pricing-detailed-v2.html`

### Animations

- Use existing `ScrollReveal` component for section entrance animations
- Price cards: staggered fade-in on scroll (Framer Motion)
- Bundle tiers: hover translateY(-4px) transition

### SEO

- Page title: "Pricing | AM Furniture Assembly"
- Meta description: "Transparent flat-rate pricing for furniture assembly in Denton, TX. Chairs from $40, beds from $75, desks from $65. Bundle discounts up to 20%."
- Add StructuredData component with `Service` schema including `offers` array with `Offer` items for each pricing item (name, price, priceCurrency: "USD")

### Responsive Behavior

Uses standard Tailwind breakpoints (`sm:640px`, `md:768px`, `lg:1024px`):

- **Desktop (lg+)**: 4-column price grid, 3 bundle tiers in row
- **Tablet (sm–lg)**: 3-column price grid, tiers in row
- **Mobile (<sm)**: 2-column price grid, tiers stack vertically

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
