import { siteConfig, baseUrl, reviewSummary } from '@/lib/config'

export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    description: `Professional furniture assembly service in ${siteConfig.location}`,
    url: baseUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: siteConfig.location,
    priceRange: reviewSummary.priceRange,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: reviewSummary.rating,
      reviewCount: reviewSummary.reviewCount,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
