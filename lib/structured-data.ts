import { baseUrl, siteConfig, reviewSummary, openGraphConfig } from '@/lib/config'
import { pricingItems, parsePrice } from '@/lib/pricing-data'
import type { FaqItem } from '@/lib/faq-data'
import type { BlogPostMeta } from '@/lib/blog'

/** Stable id so other schemas can reference the business instead of repeating it. */
export const businessId = `${baseUrl}/#business`

const areaServed = [
  { '@type': 'AdministrativeArea', name: 'Dallas-Fort Worth metroplex, TX' },
  { '@type': 'City', name: 'Dallas, TX' },
  { '@type': 'City', name: 'Fort Worth, TX' },
  { '@type': 'City', name: 'Denton, TX' },
]

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': businessId,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: `Professional furniture assembly service in ${siteConfig.location}, Texas. IKEA, Wayfair, Amazon and all major brands. Same-day and next-day service available.`,
    url: baseUrl,
    logo: `${baseUrl}${openGraphConfig.image.url}`,
    image: `${baseUrl}${openGraphConfig.image.url}`,
    telephone: '+1-940-222-0263',
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Denton',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    areaServed,
    priceRange: reviewSummary.priceRange,
    paymentAccepted: siteConfig.payment.join(', '),
    currenciesAccepted: 'USD',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '17:00',
      },
    ],
    founder: { '@type': 'Person', name: siteConfig.founder },
    sameAs: [siteConfig.thumbtackUrl],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: reviewSummary.rating,
      reviewCount: reviewSummary.reviewCount,
      bestRating: '5',
    },
  }
}

export function pricingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Furniture Assembly',
    serviceType: 'Furniture assembly',
    provider: { '@id': businessId },
    areaServed,
    offers: pricingItems.map((item) => {
      const { min, max } = parsePrice(item)
      return {
        '@type': 'Offer',
        name: `${item.name} Assembly`,
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: min,
          ...(max ? { maxPrice: max } : item.fromPrice ? {} : { price: min }),
        },
      }
    }),
  }
}

export function faqPageSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}

export function blogPostingSchema(post: BlogPostMeta) {
  const url = `${baseUrl}/blog/${post.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url,
    mainEntityOfPage: url,
    ...(post.image ? { image: `${baseUrl}${post.image}` } : {}),
    author: { '@type': 'Person', name: siteConfig.founder },
    publisher: { '@id': businessId },
  }
}
