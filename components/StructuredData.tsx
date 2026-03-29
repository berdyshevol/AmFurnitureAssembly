import { siteConfig } from '@/lib/config'

export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    description: `Professional furniture assembly service in ${siteConfig.location}`,
    url: 'https://amfurnitureassembly.com',
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: siteConfig.location,
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '30',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
