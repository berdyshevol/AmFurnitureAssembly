# Mobile Contact Page — Simplified Call/Text Experience

## Summary

Redesign the contact page so that mobile visitors (< 768px) see a simplified, beautiful page focused on calling or texting, while desktop/tablet visitors continue to see the current form-based layout.

## Motivation

Mobile visitors to a furniture assembly service are most likely ready to act — they want to call or text, not fill out a form. The current page shows the same form + info card layout on all screen sizes, which is unnecessarily complex on a small screen. A simplified mobile experience with prominent call/text buttons converts better and respects the user's context.

## Approach

**CSS-only responsive design** using Tailwind `md:hidden` / `hidden md:block` classes. Both mobile and desktop variants render in the same `page.tsx` file. Below the `md` breakpoint (768px), the mobile version is visible; above it, the current desktop layout is visible.

No new components or files are created (except the config change). The existing `ContactForm` component is unchanged — it is simply hidden on mobile via its parent wrapper.

## Breakpoint

- **Mobile**: < 768px (`md:hidden`)
- **Desktop/Tablet**: >= 768px (`hidden md:block`)

## Mobile Layout (< 768px)

### Dark Hero Header
- Full-width section with `bg-primary` (#212529), white text
- Company name in small uppercase with letter-spacing
- Heading: "Ready to **Start?**" (font-light base, font-bold on "Start?")
- Subtitle: "One tap away" in smaller muted text

### White Content Area
- Phone number displayed large and bold, centered — from `siteConfig.phone`
- **"Call Now" button**: full-width, `bg-primary`, white text, wraps an `<a href={siteConfig.phoneTel}>` link
- **"Send a Text" button**: full-width, white background, dark border, wraps an `<a href={siteConfig.smsTel}>` link
- Below buttons: business hours and location in small muted text, sourced from `siteConfig`

### What is hidden on mobile
- The contact form (`ContactForm` component)
- The info card (email, payment methods)
- The bottom "Prefer to call?" CTA section (redundant)

## Desktop Layout (>= 768px)

No changes. The current layout remains exactly as-is:
- Hero section with "Get a Free Quote"
- Two-column layout: form (2/3) + info card (1/3)
- Bottom CTA with phone number

## Config Change

Add `smsTel` to `siteConfig` in `lib/config.ts`:

```ts
smsTel: "sms:+19402220263",
```

## Files Modified

1. **`lib/config.ts`** — add `smsTel` field to `siteConfig`
2. **`app/contact/page.tsx`** — wrap current content in `hidden md:block`, add new mobile-only section with `md:hidden`

## Out of Scope

- No changes to `ContactForm.tsx`
- No changes to other pages
- No JavaScript-based media query detection
- No new components or files
