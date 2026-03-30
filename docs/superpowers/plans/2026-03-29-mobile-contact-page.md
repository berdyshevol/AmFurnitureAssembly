# Mobile Contact Page Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Mobile visitors (< 768px) see a simplified call/text page instead of the contact form.

**Architecture:** CSS-only responsive design using Tailwind `md:hidden` / `hidden md:block` in the existing `page.tsx`. No new files or components.

**Tech Stack:** Next.js, Tailwind CSS, TypeScript

**Spec:** `docs/superpowers/specs/2026-03-29-mobile-contact-page-design.md`

---

## File Structure

| File | Action | Responsibility |
|------|--------|---------------|
| `lib/config.ts` | Modify | Add `smsTel` field to `siteConfig` |
| `app/contact/page.tsx` | Modify | Add mobile-only section, wrap desktop content |

No new files created.

---

## Chunk 1: Implementation

### Task 1: Add smsTel to siteConfig

**Files:**
- Modify: `lib/config.ts:4` (after `phoneTel` line)

- [ ] **Step 1: Add smsTel field**

In `lib/config.ts`, add `smsTel` after the existing `phoneTel` line:

```ts
smsTel: "sms:+19402220263",
```

The full config block for phone fields should read:

```ts
phone: "(940) 222-0263",
phoneTel: "tel:+19402220263",
smsTel: "sms:+19402220263",
```

- [ ] **Step 2: Verify the dev server still compiles**

Run: `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/contact`
Expected: `200`

- [ ] **Step 3: Commit**

```bash
git add lib/config.ts
git commit -m "feat: add smsTel to siteConfig for SMS link support"
```

---

### Task 2: Add mobile-only contact section

**Files:**
- Modify: `app/contact/page.tsx`

- [ ] **Step 1: Add smsTel to the import**

The page already imports `siteConfig` from `@/lib/config`. No import changes needed.

- [ ] **Step 2: Add mobile-only section at the top of the return block**

Inside the `<>` fragment, before the existing hero `<section>`, add a new mobile-only block. This block is visible only below `md` (768px):

```tsx
{/* ── Mobile-only: simplified call/text ── */}
<div className="md:hidden">
  {/* Dark hero header */}
  <section className="bg-primary px-6 py-16 text-center text-white">
    <p className="text-xs uppercase tracking-[0.2em] opacity-70">
      {siteConfig.shortName}
    </p>
    <h1 className="mt-3 text-3xl font-light leading-tight">
      Ready to <span className="font-bold">Start?</span>
    </h1>
    <p className="mt-2 text-sm opacity-60">One tap away</p>
  </section>

  {/* Content: phone + buttons */}
  <section className="px-6 py-10 text-center">
    <p className="text-3xl font-bold text-primary">
      {siteConfig.phone}
    </p>

    <div className="mt-8 space-y-3">
      <a
        href={siteConfig.phoneTel}
        className="block w-full rounded-[var(--radius-button)] bg-primary px-6 py-4 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        Call Now
      </a>
      <a
        href={siteConfig.smsTel}
        className="block w-full rounded-[var(--radius-button)] border-2 border-primary px-6 py-4 text-center text-sm font-semibold text-primary transition-opacity hover:opacity-80"
      >
        Send a Text
      </a>
    </div>

    <div className="mt-8 space-y-1 text-xs text-secondary">
      <p>{siteConfig.hours.weekdays}</p>
      <p>{siteConfig.hours.saturday}</p>
      <p>{siteConfig.hours.sunday}</p>
      <p className="mt-2">{siteConfig.location}</p>
    </div>
  </section>
</div>
```

- [ ] **Step 3: Wrap all existing desktop content in a hidden md:block div**

Wrap the three existing `<section>` elements (hero, two-column layout, call CTA) in:

```tsx
{/* ── Desktop/tablet: existing layout ── */}
<div className="hidden md:block">
  {/* ... existing hero section ... */}
  {/* ... existing two-column section ... */}
  {/* ... existing call CTA section ... */}
</div>
```

The full return structure should be:

```tsx
return (
  <>
    {/* Mobile-only section */}
    <div className="md:hidden">
      ...
    </div>

    {/* Desktop-only section */}
    <div className="hidden md:block">
      ...existing three sections unchanged...
    </div>
  </>
)
```

- [ ] **Step 4: Verify in browser — desktop**

Run: Open `http://localhost:3000/contact` in a desktop-width browser window (> 768px).
Expected: Page looks exactly as before — form, info card, CTA all visible.

- [ ] **Step 5: Verify in browser — mobile**

Run: Open `http://localhost:3000/contact` and resize to < 768px (or use Chrome DevTools mobile emulator).
Expected: Dark hero with "AM Furniture Assembly" / "Ready to Start?" / phone number / Call Now + Send a Text buttons / business hours. No form visible.

- [ ] **Step 6: Test the links**

- Click "Call Now" — should trigger `tel:+19402220263`
- Click "Send a Text" — should trigger `sms:+19402220263`
- Click the phone number text — it's not a link (display only), that's correct

- [ ] **Step 7: Commit**

```bash
git add app/contact/page.tsx
git commit -m "feat: add mobile-optimized contact page with call/text buttons

Mobile visitors (< 768px) see a simplified dark-hero page with
prominent call and SMS buttons. Desktop/tablet layout unchanged."
```
