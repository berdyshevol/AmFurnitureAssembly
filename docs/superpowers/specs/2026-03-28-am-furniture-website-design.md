# AM Furniture Assembly — Website Design Spec

## Overview

A professional, modern website for **Andrii Mohylov Furniture Assembly** — a furniture assembly service business in the US market. The site should drive conversions (free quote requests) while showcasing quality craftsmanship through a photo gallery.

**Reference site:** stellamarisgc.com — elements to emulate: clean card-based service layout, prominent CTA buttons, professional imagery as hero backgrounds. Elements to avoid: Webflow boilerplate, cluttered footer, generic stock-photo feel.

## Brand

- **Name:** Andrii Mohylov — Furniture Assembly
- **Logo:** `public/logo-cropped.jpg` — AM monogram in house shape + text. White background.
- **Service:** Furniture assembly (IKEA, Wayfair, Amazon, all brands)
- **Market:** US, English-language site
- **Location:** Denton, TX (serves Denton area)
- **Thumbtack profile:** 30 five-star reviews, hired 38 times, 1 year in business, background checked
- **Starting price:** $40
- **Bundle deals:** 2-3 items 10% off, 4+ items 15% off
- **Payment:** Apple Pay, Cash, Check, Zelle
- **Contact info (owner to confirm before launch):**
  - Phone: (placeholder)
  - Email: (placeholder)
  - Location: Denton, TX
  - Hours: (owner to confirm)

## Tech Stack

- **Framework:** Next.js 14+ (App Router, SSG)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (smooth scroll reveals)
- **MDX:** `next-mdx-remote` for blog post rendering
- **Lightbox:** `yet-another-react-lightbox` for gallery full-screen viewer
- **Forms:** Formspree (free tier, 50 submissions/month). If limit is hit, form shows a fallback message with direct phone/email contact info.
- **Deployment:** Vercel (free tier)
- **Images:** next/image for automatic optimization (WebP, responsive, lazy loading)

## Architecture

**Fully static (SSG)** — all pages pre-rendered at build time.

- Gallery photos stored in `/public/photos/`
- Blog/FAQ as MDX files in `/content/blog/`
- Contact form via Formspree (no backend)
- Logo in `/public/logo-cropped.jpg`

### Project Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout (nav + footer)
│   ├── page.tsx            # Home
│   ├── about/page.tsx      # About
│   ├── services/page.tsx   # Services
│   ├── gallery/page.tsx    # Gallery
│   ├── testimonials/page.tsx # Testimonials
│   ├── blog/page.tsx       # Blog listing + FAQ section
│   ├── blog/[slug]/page.tsx # Individual blog post
│   └── contact/page.tsx    # Contact
├── components/
│   ├── Navbar.tsx          # Sticky nav with logo + burger menu
│   ├── Footer.tsx          # Footer with logo, links, contacts
│   ├── ScrollReveal.tsx    # Framer Motion scroll animation wrapper
│   ├── GalleryGrid.tsx     # Grid gallery with category filter
│   ├── Lightbox.tsx        # yet-another-react-lightbox wrapper
│   ├── ServiceCard.tsx     # Service card component
│   ├── TestimonialCard.tsx # Testimonial card
│   ├── ContactForm.tsx     # Formspree contact form with validation
│   ├── HeroSection.tsx     # Homepage hero
│   ├── StatsBar.tsx        # Stats counter section
│   ├── CTASection.tsx      # Call-to-action section
│   └── FAQAccordion.tsx    # Expandable FAQ items
├── content/
│   └── blog/               # MDX blog posts
├── public/
│   ├── photos/             # Gallery photos (copied from source)
│   └── logo-cropped.jpg    # Logo
├── lib/
│   ├── gallery-data.ts     # Photo metadata, categories, alt text
│   └── blog.ts             # MDX loading with next-mdx-remote
└── tailwind.config.ts
```

## Design System

### Visual Style: Clean & Minimal

- **Background:** White (#ffffff) and light gray (#f8f9fa) alternating sections
- **Text:** Dark (#212529) primary, gray (#6c757d) secondary
- **Accent:** Dark (#212529) for buttons and CTAs — matches logo style
- **Error:** Red (#dc3545) for form validation errors
- **Success:** Green (#198754) for form success messages
- **Border/Dividers:** Light gray (#e9ecef)
- **Focus ring:** 2px solid #4d65ff with 2px offset (keyboard accessibility)
- **Border radius:** 8px buttons, 12px cards, 16px hero images
- **Font:** Inter (Google Fonts) — clean, modern sans-serif
- **White space:** Generous padding (60px horizontal desktop, 80px vertical sections)

### Form Input Styles

- **Default:** 1px solid #dee2e6, 8px border-radius, 12px 16px padding
- **Focus:** 2px solid #212529 border, no outline (custom focus ring)
- **Error:** 2px solid #dc3545, error text below in red
- **Disabled:** opacity 0.6, cursor not-allowed

### Responsive Breakpoints (Tailwind defaults)

- **Mobile:** < 640px — single column, burger menu, stacked sections
- **Tablet:** 640px–1024px — 2 columns for cards, compact nav
- **Desktop:** > 1024px — full layout as in wireframe (3-column cards, side-by-side hero)

### Animation Style: Smooth Scroll Reveals

All animations use Framer Motion's `useInView` hook:

- **Fade up:** Elements slide up 30px and fade in (duration: 0.6s, ease: easeOut)
- **Stagger:** Cards in grids appear with 0.1s delay between each
- **Stats counter:** Numbers count up when scrolled into view
- **Hover:** Cards lift 4px with subtle shadow (`translateY(-4px)`)
- **Page transitions:** Subtle fade between pages (0.3s)
- **Gallery:** Images scale slightly on hover (1.03x)

## Pages

### 1. Home (`/`)

Sections in order (as validated in wireframe):

1. **Hero** — Split layout: left text + CTA buttons, right large photo
   - H1: "Expert **Furniture Assembly** You Can Trust"
   - Subtitle: "Professional furniture assembly service in Denton. We assemble IKEA, Wayfair, Amazon, and all major brands with precision and care."
   - Two buttons: "Get a Free Quote" (primary → /contact), "View Our Work" (secondary → /gallery)
   - Right: Large rounded photo (IMG_2729.jpeg)

2. **Stats Bar** — 4 stats centered horizontally
   - 38+ Projects Completed, 5.0 Thumbtack Rating, 30 Five-Star Reviews, 100% Satisfaction
   - Numbers animate (count up) on scroll

3. **Services Grid** — 6 cards in 3x2 grid
   - Beds & Bedroom, Wardrobes & Storage, Living Room, Office Furniture, Outdoor & Garden, Any Brand
   - Each: icon + title + short description
   - Cards hover-lift effect, link to /services

4. **Gallery Preview** — Asymmetric grid (first image large, rest smaller)
   - 7 photos from different categories
   - "View Full Gallery" link at bottom → /gallery
   - Images hover-scale effect

5. **Testimonials** — 3 real testimonial cards (from Thumbtack)
   - **Emily C.** (Dec 2025): "I can't recommend Andrii enough... He worked efficiently without rushing and clearly knows what he's doing... One thing that really stood out to me was how careful he was with my home and floors... His pricing is more than fair for the quality of work he provides."
   - **Belinda M.** (Oct 2025): "Wow! Such a wonderful experience. Andrii and family were so prompt, diligent, and communicative... Such a lovely and hardworking family business. Very glad we picked them, they've definitely earned returning customers!"
   - **Sekou K.** (Sep 2025): "Andrew did an outstanding job assembling my IKEA bookshelf! ...In over 20 years, I haven't seen anyone as skilled, professional, and thorough... He's truly the best!"

6. **CTA Section** — Dark background (#212529)
   - "Ready to Get Your Furniture **Assembled?**"
   - White "Get a Free Quote" button → /contact

7. **Footer** — 4 columns
   - Logo + tagline
   - Quick Links (Home, Services, Gallery, Contact)
   - Contact info (phone, email, location)
   - Business hours

### 2. About (`/about`)

Sections in order:

1. **Hero** — Full-width photo banner (IMG_2672.jpeg — assembly close-up) with overlay text
   - H1: "About **Andrii Mohylov**"
   - Subtitle: "Your trusted furniture assembly professional"

2. **Story Section** — Two-column layout (text left, photo right)
   - H2: "My Story"
   - 2-3 paragraphs: background in furniture assembly, years of experience, passion for craftsmanship, service area
   - Right: Photo from gallery (IMG_2670.jpeg or owner-provided portrait)

3. **Why Choose Us** — 4 feature cards in 2x2 grid
   - "Experienced Professional" — years of hands-on experience
   - "All Brands Welcome" — IKEA, Wayfair, Amazon, and more
   - "Same-Day Service" — fast response, quick turnaround
   - "Satisfaction Guaranteed" — quality work, clean finish

4. **CTA Section** — same dark CTA as homepage

### 3. Services (`/services`)

Sections in order:

1. **Hero** — H1: "Our **Services**", subtitle about comprehensive assembly

2. **Service Cards** — 6 detailed cards, each with:
   - Photo from gallery (one per category: beds→IMG_2733, wardrobes→IMG_2663, shelves→IMG_2705, office→4671844090193262260, outdoor→IMG_2763, other→IMG_2785)
   - Title, detailed description (3-4 sentences), bullet list of items
   - Full width on mobile, 2 columns on tablet, 3 columns on desktop

3. **How It Works** — 3-step horizontal timeline
   - Step 1: "Book" — Contact us for a free estimate
   - Step 2: "We Arrive" — On-time, fully equipped
   - Step 3: "Done" — Professional assembly, clean workspace

4. **Brands Section** — "We Assemble All Major Brands"
   - Text list: IKEA, Wayfair, Amazon, West Elm, CB2, Target, Pottery Barn, Crate & Barrel

5. **Pricing Note** — Simple text block
   - "Every project is unique. Contact us for a free, no-obligation estimate."

6. **CTA Section** — same dark CTA

### 4. Gallery (`/gallery`)

- Category filter tabs: All, Beds, Wardrobes & Dressers, Shelves & Storage, Outdoor, Other
- Responsive grid: 1 col mobile, 2 col tablet, 3-4 col desktop
- Click to open lightbox (`yet-another-react-lightbox`): full-screen, prev/next arrows, keyboard navigation (arrow keys, Escape to close), swipe on mobile
- Smooth filter transition with Framer Motion `AnimatePresence`

**Photo categorization (validated by user):**

| Category | Photos |
|---|---|
| Beds (7) | IMG_1646, IMG_2684, IMG_2708, IMG_2733, IMG_2734, IMG_2735, IMG_2736 |
| Wardrobes & Dressers (5) | IMG_2663, IMG_2670, IMG_2709, IMG_2745, IMG_2787 |
| Shelves & Storage (5) | IMG_2672, IMG_2705, IMG_2729, IMG_2762, IMG_2772 |
| Outdoor (5) | IMG_2763, IMG_2768, IMG_2769, IMG_2770, IMG_2775 |
| Other (6) | 4671844090193262260, IMG_1641, IMG_2669, IMG_2686, IMG_2784, IMG_2785 |

**Excluded:** IMG_2734 (1) (duplicate), IMG_2731 (hardware close-up), IMG_2739 (TV)

**Photo metadata in `gallery-data.ts`:** Each entry includes filename, category, alt text (descriptive, for accessibility and SEO).

### 5. Testimonials (`/testimonials`)

Sections in order:

1. **Hero** — H1: "What Our Clients **Say**", subtitle: "30 five-star reviews and counting"

2. **Testimonials Grid** — 6 real testimonial cards (from Thumbtack), 2 columns desktop, 1 column mobile
   - Each card: 5-star rating, quote (trimmed to 2-3 key sentences), customer first name + last initial
   - Reviews to include:
     1. **Emily C.** — "I can't recommend Andrii enough... how careful he was with my home and floors... His pricing is more than fair for the quality of work he provides, and I'll absolutely be calling him again."
     2. **Belinda M.** — "Wow! Such a wonderful experience. Andrii and family were so prompt, diligent, and communicative... Such a lovely and hardworking family business."
     3. **Sekou K.** — "In over 20 years, I haven't seen anyone as skilled, professional, and thorough as Andrew... He's truly the best!"
     4. **Crystal P.** — "Andrii and his team were exceptionally communicative, flexible and responsive... They were kind, professional and efficient. 10 out of 10 DEFINITELY recommend!"
     5. **Venkat K.** — "Andrii was fantastic! He helped fix our bed and did an excellent job. What really impressed us was his patience and flexibility when we asked him to accommodate some extra work... He went above and beyond!"
     6. **Abby F.** — "Called him, 15mins later he was here! He did a great job, very professional made sure my floors wouldn't get scratched and even removed a base board so the bookshelf would fit. Looks beautiful!"

3. **Review Links** — "See More Reviews on Thumbtack" with link to Thumbtack profile

4. **CTA Section** — same dark CTA

### 6. Blog/FAQ (`/blog`)

This page has two distinct sections:

**Section 1: Blog Posts**
- Blog post listing as cards: thumbnail image, title, excerpt (2 lines), date
- 3 columns desktop, 2 tablet, 1 mobile
- Click → individual post page (`/blog/[slug]`) rendered from MDX via `next-mdx-remote`
- 3 seed posts:
  - "5 Tips for Preparing Your Space Before Furniture Assembly"
  - "IKEA vs Wayfair: Assembly Differences You Should Know"
  - "Why Professional Assembly Saves You Time and Money"

**Section 2: FAQ (below blog posts)**
- H2: "Frequently Asked Questions"
- Accordion component (`FAQAccordion.tsx`): click to expand/collapse, one open at a time
- 5-6 starter FAQs:
  - "How much does furniture assembly cost?"
  - "How long does assembly take?"
  - "What brands do you assemble?"
  - "Do I need to be home during assembly?"
  - "What if something is damaged during assembly?"
  - "Do you offer same-day service?"

### 7. Contact (`/contact`)

Sections in order:

1. **Hero** — H1: "Get a **Free Quote**"

2. **Contact Form** (Formspree integration)
   - Fields: Name (required), Email (required, email validation), Phone (optional, tel format), Service type (dropdown: Bed Assembly, Wardrobe/Cabinet, Shelving/Storage, Office Furniture, Outdoor/Garden, Other), Message (required, min 10 chars)
   - Submit button: "Send Request"
   - **Validation:** Client-side with HTML5 + custom validation. Show red border + error message below each invalid field on submit attempt.
   - **Success state:** Replace form with green checkmark and message: "Thank you! We'll get back to you within 24 hours."
   - **Error state:** Red banner above form: "Something went wrong. Please try again or call us at (555) 123-4567."
   - **Formspree fallback:** If monthly limit reached, display direct contact info instead of form.

3. **Contact Info** — Sidebar on desktop, below form on mobile
   - Phone (click-to-call `tel:` link)
   - Email (`mailto:` link)
   - Business hours
   - Service area

4. **CTA alternative** — "Prefer to call? Reach us at (555) 123-4567"

Calendly and Google Maps are deferred to a future iteration — not in initial build scope.

## Navigation

### Desktop
- Sticky top bar with logo (left), nav links (center), "Get a Free Quote" button (right)
- Logo: 100px height, cropped version
- Links: Home, About, Services, Gallery, Testimonials, Blog, Contact
- Active page indicator (font-weight: 600 + subtle bottom border)

### Mobile
- Sticky top bar with logo (left), burger icon (right)
- Full-screen overlay menu on burger click
- Smooth slide-in animation from right
- "Get a Free Quote" button prominent at bottom of mobile menu
- Close button (X) in top-right

## Key Conversion Elements

- **Primary CTA:** "Get a Free Quote" button — appears in nav, hero, CTA sections
- **Click-to-call:** Phone number clickable on mobile (`tel:` link) — in nav (mobile), contact page, footer
- **Trust signals:** Stats bar, testimonials, Google Rating mention
- **Social proof:** Testimonial cards, review links

## SEO

- Static generation for all pages (perfect crawlability)
- Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`)
- Meta title/description per page
- Open Graph tags for social sharing
- Alt text on all images (defined in `gallery-data.ts`)
- Structured data: LocalBusiness schema with name, phone, email, address, hours, service type (owner to provide real values before launch)
- Sitemap.xml auto-generated by Next.js

## Verification Plan

1. `npm run dev` — site runs locally without errors
2. All 7 pages render correctly with proper content
3. Navigation works between all pages, active state shows
4. Mobile burger menu opens/closes, all links work
5. Gallery category filtering works (All/Beds/Wardrobes/etc.)
6. Gallery lightbox opens, prev/next works, keyboard nav works, close works
7. Contact form validates fields, submits to Formspree, shows success/error states
8. Responsive: test at 375px (mobile), 768px (tablet), 1440px (desktop)
9. Animations trigger on scroll (fade-up, stagger, counter)
10. All 28 photos load and display correctly
11. Logo displays correctly in nav and footer at all breakpoints
12. Blog post pages render from MDX
13. FAQ accordion expands/collapses
14. `npm run build` succeeds without errors
15. Lighthouse score: >90 Performance, >90 Accessibility, >90 SEO
