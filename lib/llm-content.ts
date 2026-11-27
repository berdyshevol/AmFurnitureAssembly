/**
 * Markdown versions of the site for LLMs and AI agents: /llms.txt and a `.md` copy of every page.
 * Everything is generated from the same data the HTML pages render, so the two never drift apart.
 */
import {
  aboutPageContent,
  baseUrl,
  brands,
  howItWorksSteps,
  navLinks,
  pageMetadata,
  reviewSummary,
  siteConfig,
  stats,
} from '@/lib/config'
import { services } from '@/lib/services-data'
import { bundleTiers, pricingItems, formatPrice } from '@/lib/pricing-data'
import { faqItems } from '@/lib/faq-data'
import { testimonials } from '@/lib/testimonials-data'
import { categories, galleryPhotos } from '@/lib/gallery-data'
import { getAllPosts, getPostBySlug } from '@/lib/blog'

const projectsCount = `${stats[0].value}${stats[0].suffix}`

/** Public markdown URL for a page path, e.g. '/pricing' → '/pricing.md', '/' → '/index.md'. */
export function markdownPath(path: string): string {
  return path === '/' ? '/index.md' : `${path}.md`
}

const absolute = (path: string) => `${baseUrl}${path}`
const mdLink = (label: string, path: string) => `[${label}](${absolute(markdownPath(path))})`
const list = (items: readonly string[]) => items.map((item) => `- ${item}`).join('\n')

function keyFacts(): string {
  return [
    `- **Business:** ${siteConfig.name} (${siteConfig.shortName})`,
    `- **Service area:** ${siteConfig.location}, Texas (based in Denton; serving Dallas, Fort Worth and surrounding cities). Mobile service at the customer's home or office.`,
    `- **Phone / text:** ${siteConfig.phone}`,
    `- **Email:** ${siteConfig.email}`,
    `- **Hours:** ${siteConfig.hours.weekdays}; ${siteConfig.hours.saturday}; ${siteConfig.hours.sunday}`,
    `- **Prices:** from ${siteConfig.startingPrice} per item; bundle discounts ${bundleTiers.map((t) => `${t.discount} for ${t.label}`).join(', ')}`,
    `- **Availability:** same-day and next-day service, subject to availability`,
    `- **Payment:** ${siteConfig.payment.join(', ')}`,
    `- **Reputation:** ${reviewSummary.rating} rating from ${reviewSummary.reviewCount} reviews on Thumbtack, ${projectsCount} projects completed, insured`,
    `- **Brands:** ${brands.join(', ')} and any other flat-pack furniture`,
  ].join('\n')
}

function bookingSection(): string {
  return `## How to book

${howItWorksSteps.map((s) => `${s.number}. **${s.title}.** ${s.description}`).join('\n')}

Call or text ${siteConfig.phone}, email ${siteConfig.email}, or send the form at ${absolute('/contact')}. A quote is free.`
}

function homeMd(): string {
  return `# ${siteConfig.shortName}

> ${pageMetadata.home.description}

${keyFacts()}

## What we assemble

${services.map((s) => `- **${s.title}:** ${s.description}`).join('\n')}

Details: ${mdLink('Services', '/services')}. Prices: ${mdLink('Pricing', '/pricing')}.

## What customers say

${testimonials
  .slice(0, 3)
  .map((t) => `> ${t.text}\n>\n> — ${t.name}, ${t.service}`)
  .join('\n\n')}

More: ${mdLink('Testimonials', '/testimonials')}.

${bookingSection()}`
}

function aboutMd(): string {
  const a = aboutPageContent
  return `# ${a.hero.title}

${a.intro}

${a.founderStory}

## ${a.services.heading}

${a.services.description}

${list(a.services.items)}

${a.services.footer}

## ${a.whyChoose.heading}

${a.whyChoose.intro}

${list(a.whyChoose.guarantees)}

${a.whyChoose.footer}

## ${a.ourStory.heading}

${a.ourStory.paragraphs.join('\n\n')}

## ${a.ourPromise.heading}

${a.ourPromise.paragraphs.join('\n\n')}

${a.cta}`
}

function servicesMd(): string {
  return `# Furniture Assembly Services in ${siteConfig.location}

> ${pageMetadata.services.description}

${services
  .map((s) => `## ${s.title}\n\n${s.description}\n\n${list(s.items)}`)
  .join('\n\n')}

## Brands we assemble

${brands.join(', ')}. If it comes in a box with instructions, we can build it.

${bookingSection()}`
}

function pricingMd(): string {
  return `# Furniture Assembly Pricing

> ${pageMetadata.pricing.description}

Flat-rate prices per item in USD. Ranges depend on the size and complexity of the piece. The final price is confirmed in a free quote before work starts.

| Item | Price |
| --- | --- |
${pricingItems.map((item) => `| ${item.name} | ${formatPrice(item)} |`).join('\n')}

## Bundle discounts

${bundleTiers.map((t) => `- **${t.discount} off** for ${t.label}`).join('\n')}

## Payment

${siteConfig.payment.join(', ')}.

${bookingSection()}`
}

function galleryMd(): string {
  const counts = categories
    .filter((c) => c.value !== 'all')
    .map((c) => {
      const photos = galleryPhotos.filter((p) => p.category === c.value)
      return `## ${c.label} (${photos.length} photos)\n\n${list(photos.map((p) => p.alt))}`
    })
  return `# Our Work

> ${pageMetadata.gallery.description}

Photos of real projects completed by ${siteConfig.shortName}. View them at ${absolute('/gallery')}.

${counts.join('\n\n')}`
}

function testimonialsMd(): string {
  return `# Customer Reviews

> ${reviewSummary.rating} out of 5 from ${reviewSummary.reviewCount} reviews on Thumbtack: ${siteConfig.thumbtackUrl}

${testimonials
  .map((t) => `## ${t.name} — ${t.service} (${t.rating}/5)\n\n${t.text}`)
  .join('\n\n')}`
}

function contactMd(): string {
  return `# Contact ${siteConfig.shortName}

> ${pageMetadata.contact.description}

- **Phone / text:** ${siteConfig.phone}
- **Email:** ${siteConfig.email}
- **Hours:** ${siteConfig.hours.weekdays}; ${siteConfig.hours.saturday}; ${siteConfig.hours.sunday}
- **Location:** ${siteConfig.location}, Texas (we come to you)

## Quote request form

The form at ${absolute('/contact')} asks for: name (required), email (required), phone, service type, and a message describing the items to assemble (required, at least 10 characters). We reply within 24 hours.`
}

async function blogMd(): Promise<string> {
  const posts = await getAllPosts()
  return `# Blog & FAQ

> ${pageMetadata.blog.description}

## Articles

${posts.map((p) => `- [${p.title}](${absolute(markdownPath(`/blog/${p.slug}`))}) (${p.date}): ${p.excerpt}`).join('\n')}

## Frequently asked questions

${faqItems.map((f) => `### ${f.question}\n\n${f.answer}`).join('\n\n')}`
}

async function blogPostMd(slug: string): Promise<string | null> {
  const post = await getPostBySlug(slug)
  if (!post) return null
  // Post bodies already start with an H1 title.
  return `${post.content}

---

Published ${post.date} by ${siteConfig.shortName}. Original: ${absolute(`/blog/${slug}`)}`
}

const staticPages: Record<string, () => string | Promise<string>> = {
  '': homeMd,
  about: aboutMd,
  services: servicesMd,
  pricing: pricingMd,
  gallery: galleryMd,
  testimonials: testimonialsMd,
  contact: contactMd,
  blog: blogMd,
}

/** Markdown for a page given its path segments ([] for home), or null if there is no such page. */
export async function getPageMarkdown(segments: string[]): Promise<string | null> {
  const key = segments.join('/')
  if (key in staticPages) return staticPages[key]()
  if (segments.length === 2 && segments[0] === 'blog') return blogPostMd(segments[1])
  return null
}

/** All path segment lists that have a markdown version, for static generation. */
export async function getMarkdownPaths(): Promise<string[][]> {
  const posts = await getAllPosts()
  return [
    ...Object.keys(staticPages).map((key) => (key ? key.split('/') : [])),
    ...posts.map((p) => ['blog', p.slug]),
  ]
}

export async function getLlmsTxt(): Promise<string> {
  const posts = await getAllPosts()
  const pageDescriptions: Record<string, string> = {
    '/': 'Overview, key facts and how to book',
    '/services': 'What we assemble, by category',
    '/pricing': 'Price per item and bundle discounts',
    '/about': 'Founder story and experience',
    '/testimonials': 'Customer reviews',
    '/gallery': 'Photos of completed projects',
    '/blog': 'Articles and FAQ',
    '/contact': 'Phone, email, hours and quote form',
  }

  return `# ${siteConfig.shortName}

> ${siteConfig.name} is a professional furniture assembly service in ${siteConfig.location}, Texas. We come to your home or office and assemble IKEA, Wayfair, Amazon and any other flat-pack furniture: beds, wardrobes, dressers, desks, shelving, sheds and playsets. Prices start at ${siteConfig.startingPrice}.

${keyFacts()}

To request a quote, call or text ${siteConfig.phone} or use the form at ${absolute('/contact')}.

## Pages

${navLinks
  .filter((l) => l.href in pageDescriptions)
  .map((l) => `- ${mdLink(l.label, l.href)}: ${pageDescriptions[l.href]}`)
  .join('\n')}

## Optional

${posts.map((p) => `- ${mdLink(p.title, `/blog/${p.slug}`)}: ${p.excerpt}`).join('\n')}
`
}
