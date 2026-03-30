# Pricing Page Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a `/pricing` page displaying flat-rate per-item assembly prices with a Bundle & Save banner and SVG icons.

**Architecture:** Single new page (`app/pricing/page.tsx`) with data extracted to `lib/pricing-data.ts`. Uses existing components (ScrollReveal, CTASection). Navigation and sitemap updated to include the new route.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, Framer Motion

**Spec:** `docs/superpowers/specs/2026-03-29-pricing-page-design.md`

**Approved mockup:** `.superpowers/brainstorm/35120-1774832418/pricing-detailed-v2.html`

---

## Chunk 1: Data Layer & Navigation

### Task 1: Create pricing data file

**Files:**
- Create: `lib/pricing-data.ts`

- [ ] **Step 1: Create `lib/pricing-data.ts` with types, pricing items, and bundle tiers**

```typescript
import type { ReactNode } from 'react'

export interface PricingItem {
  name: string
  price: string
  fromPrice?: boolean
  icon: ReactNode
  isLargeProject?: boolean
  pcsNote?: string
}

export interface BundleTier {
  discount: string
  label: string
  highlighted?: boolean
}

export const bundleTiers: BundleTier[] = [
  { discount: '10%', label: '1 – 3 items' },
  { discount: '15%', label: '4 – 6 items', highlighted: true },
  { discount: '20%', label: '7+ items' },
]
```

Then add the `pricingItems` array with all 13 items. Each item's `icon` field is a JSX `<svg>` element. Copy the exact SVG paths from the approved mockup at `.superpowers/brainstorm/35120-1774832418/pricing-detailed-v2.html`.

The items in order:

| name | price | fromPrice | isLargeProject | pcsNote |
|------|-------|-----------|----------------|---------|
| Chair | 40 | — | — | — |
| Nightstand | 50 | — | — | — |
| Coffee Table | 50 | — | — | — |
| Shelves | 50 – 100 | — | — | — |
| Desk | 65 – 100 | — | — | — |
| Bed Frame | 75 – 120 | — | — | — |
| TV Stand | 75 – 120 | — | — | — |
| Dresser | 85 – 120 | — | — | — |
| Vanity | 120 | — | — | — |
| Storage Cabinet | 120 – 150 | — | — | — |
| Patio Set | 95 | true | — | (4 pcs) |
| Shed | 350 | true | true | — |
| Playground | 350 | true | true | — |

**IMPORTANT:** The `price` field stores the number/range WITHOUT a dollar sign (e.g., `"40"`, `"50 – 100"`). The `$` prefix is added in the template: `${item.price}`.

Each SVG element should use: `viewBox="0 0 48 48"`, `className="w-12 h-12"`, `stroke="currentColor"`, `strokeWidth={1.5}`, `fill="none"`, `strokeLinecap="round"`, `strokeLinejoin="round"`.

- [ ] **Step 2: Verify the file compiles**

Run: `npx tsc --noEmit lib/pricing-data.tsx 2>&1 || echo "Check for errors"`

**IMPORTANT:** This file must be `lib/pricing-data.tsx` (not `.ts`) because it contains JSX SVG elements.

- [ ] **Step 3: Commit**

```bash
git add lib/pricing-data.tsx
git commit -m "feat: add pricing data with items, bundle tiers, and SVG icons"
```

---

### Task 2: Add Pricing to navigation

**Files:**
- Modify: `components/Navbar.tsx:8-16` — add entry to `navLinks` array
- Modify: `components/Footer.tsx:5-10` — add entry to `quickLinks` array
- Modify: `app/sitemap.ts:16-58` — add `/pricing` route entry

- [ ] **Step 1: Add Pricing link to Navbar after Services**

In `components/Navbar.tsx`, insert into the `navLinks` array after the Services entry (line 11):

```typescript
{ href: '/pricing', label: 'Pricing' },
```

The array should read: Home, About, Services, **Pricing**, Gallery, Testimonials, Blog, Contact.

- [ ] **Step 2: Add Pricing link to Footer after Services**

In `components/Footer.tsx`, insert into the `quickLinks` array after the Services entry (line 7):

```typescript
{ href: '/pricing', label: 'Pricing' },
```

The array should read: Home, Services, **Pricing**, Gallery, Contact.

- [ ] **Step 3: Add /pricing to sitemap**

In `app/sitemap.ts`, add a new entry after the `/services` entry (after line 28):

```typescript
{
  url: `${BASE_URL}/pricing`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.85,
},
```

- [ ] **Step 4: Commit**

```bash
git add components/Navbar.tsx components/Footer.tsx app/sitemap.ts
git commit -m "feat: add Pricing link to navbar, footer, and sitemap"
```

---

## Chunk 2: Pricing Page Component

### Task 3: Create the pricing page

**Files:**
- Create: `app/pricing/page.tsx`

**Reference:** Read the approved mockup HTML at `.superpowers/brainstorm/35120-1774832418/pricing-detailed-v2.html` for exact structure and styling. Also reference `app/services/page.tsx` for the hero banner pattern used across the site.

**IMPORTANT:** Before writing code, read `node_modules/next/dist/docs/` for any relevant Next.js 16 page conventions or breaking changes. Specifically check metadata API and page component patterns.

- [ ] **Step 1: Create `app/pricing/page.tsx` with metadata**

```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing | AM Furniture Assembly',
  description:
    'Transparent flat-rate pricing for furniture assembly in Denton, TX. Chairs from $40, beds from $75, desks from $65. Bundle discounts up to 20%.',
}
```

- [ ] **Step 2: Add the hero banner section**

Follow the same pattern as `app/services/page.tsx:46-65`:

```tsx
<section className="relative h-[340px] sm:h-[420px] flex items-center justify-center overflow-hidden">
  <Image
    src="/photos/IMG_2705.jpeg"
    alt="Professional furniture assembly workspace"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute inset-0 bg-black/60" />
  <div className="relative z-10 text-center px-4">
    <ScrollReveal>
      <h1 className="text-4xl sm:text-5xl font-light text-white leading-tight">
        Assembly <span className="font-bold">Pricing</span>
      </h1>
      <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto">
        Transparent, flat-rate pricing. No hidden fees. Know exactly what you&apos;ll pay before we start.
      </p>
    </ScrollReveal>
  </div>
</section>
```

- [ ] **Step 3: Add the Bundle & Save banner section**

This is a `'use client'` concern because of hover animations. However, CSS hover transitions work without client components. Use Tailwind classes for the hover effects to keep this a server component.

Import `bundleTiers` from `@/lib/pricing-data` and `Link` from `next/link`.

```tsx
<section className="bg-background py-12 px-4">
  <ScrollReveal>
    <div className="mx-auto max-w-[900px] rounded-[16px] px-8 py-10 text-center text-white"
         style={{ background: 'linear-gradient(135deg, #212529 0%, #3a3f44 40%, #212529 100%)', boxShadow: '0 20px 60px rgba(33,37,41,0.3)' }}>
      <span className="inline-block rounded-full border border-white/20 bg-white/15 px-5 py-1.5 text-xs font-bold uppercase tracking-[2px] mb-5">
        Special Offer
      </span>
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-2">Bundle & Save</h2>
      <p className="text-white/70 mb-9">The more you assemble, the more you save</p>
      <div className="flex justify-center gap-6 flex-wrap">
        {bundleTiers.map((tier) => (
          <Link
            key={tier.discount}
            href="/contact"
            className={`rounded-xl border px-8 py-6 min-w-[160px] transition-all duration-200 hover:-translate-y-1 ${
              tier.highlighted
                ? 'scale-105 border-white/30 bg-white/15'
                : 'border-white/12 bg-white/8 hover:bg-white/15'
            }`}
          >
            <div className={`font-extrabold leading-none ${tier.highlighted ? 'text-[2.6rem]' : 'text-[2.2rem]'}`}>
              {tier.discount}
            </div>
            <div className="mt-2 text-sm text-white/60 font-medium">OFF</div>
            <div className="mt-1 text-sm text-white/85 font-semibold">{tier.label}</div>
          </Link>
        ))}
      </div>
    </div>
  </ScrollReveal>
</section>
```

- [ ] **Step 4: Add the price grid section**

Import `pricingItems` from `@/lib/pricing-data`.

```tsx
<section className="py-16 px-4">
  <div className="mx-auto max-w-[1100px]">
    <ScrollReveal>
      <h2 className="text-center text-3xl sm:text-4xl font-light mb-2">
        Our <span className="font-bold">Prices</span>
      </h2>
      <p className="text-center text-secondary mb-12">
        Flat-rate per item. Price depends on complexity.
      </p>
    </ScrollReveal>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {pricingItems.map((item, i) => (
        <ScrollReveal key={item.name} delay={i * 0.05}>
          <div className={`rounded-[var(--radius-card)] border p-7 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
            item.isLargeProject
              ? 'bg-background border-2 border-border'
              : 'bg-white border-border'
          }`}>
            <div className="mb-4 flex justify-center text-primary">
              {item.icon}
            </div>
            <div className="text-sm font-semibold text-primary mb-2">
              {item.name}
              {item.pcsNote && (
                <span className="text-xs font-normal text-secondary"> {item.pcsNote}</span>
              )}
            </div>
            <div className="text-xl font-extrabold text-primary">
              {item.fromPrice && (
                <span className="text-xs font-normal text-secondary">from </span>
              )}
              ${item.price}
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>

    <p className="mt-10 text-center text-sm text-secondary leading-relaxed max-w-[700px] mx-auto">
      * Final price depends on the complexity and brand of furniture.
      <br />
      Don&apos;t see your item?{' '}
      <Link href="/contact" className="font-semibold text-primary hover:underline">
        Contact us
      </Link>{' '}
      for a free estimate.
    </p>
  </div>
</section>
```

- [ ] **Step 5: Add CTA section and pricing-specific StructuredData**

Add `<CTASection />` from `@/components/CTASection`.

For structured data, add an inline `<script type="application/ld+json">` block (do NOT use the existing `StructuredData` component — it renders `LocalBusiness` schema which is not what we need here). Create a `Service` schema with an `offers` array:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Furniture Assembly',
      provider: {
        '@type': 'LocalBusiness',
        name: 'AM Furniture Assembly',
      },
      areaServed: 'Denton, TX',
      offers: pricingItems.map((item) => ({
        '@type': 'Offer',
        name: `${item.name} Assembly`,
        price: item.price.split(' – ')[0],
        priceCurrency: 'USD',
      })),
    }),
  }}
/>
```

- [ ] **Step 6: Verify the page renders**

Run: `npm run dev`

Open http://localhost:3000/pricing in the browser. Verify:
- Hero banner shows with image and text
- Bundle & Save banner displays 3 tiers, middle one larger
- Clicking any tier navigates to /contact
- 13 price cards display in a 4-column grid (desktop)
- SVG icons render correctly
- Hover effects work on cards and tiers
- Note text and CTA section appear at bottom
- Responsive: resize to mobile, verify 2-column grid and stacked tiers

- [ ] **Step 7: Verify navigation links**

- Click "Pricing" in the navbar — navigates to /pricing
- Check footer — "Pricing" link present and works
- Verify active state highlights correctly on the Pricing page

- [ ] **Step 8: Commit**

```bash
git add app/pricing/page.tsx
git commit -m "feat: add pricing page with bundle banner, price grid, and SVG icons"
```

---

### Task 4: Final build verification

- [ ] **Step 1: Run production build**

```bash
npm run build
```

Expected: Build succeeds with no errors. The `/pricing` route appears in the build output.

- [ ] **Step 2: Run linter**

```bash
npm run lint
```

Expected: No new lint errors.

- [ ] **Step 3: Fix any issues found in steps 1-2, then commit fixes if needed**

- [ ] **Step 4: Final commit with all fixes**

Only if there were fixes needed:

```bash
git add -A
git commit -m "fix: resolve build/lint issues in pricing page"
```
