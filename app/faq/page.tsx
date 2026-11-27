import type { Metadata } from 'next'
import Link from 'next/link'

import CTASection from '@/components/CTASection'
import FAQAccordion from '@/components/FAQAccordion'
import JsonLd from '@/components/JsonLd'
import { pageMetadata } from '@/lib/config'
import { faqGroups, faqItems } from '@/lib/faq-data'
import { faqPageSchema } from '@/lib/structured-data'

export const metadata: Metadata = pageMetadata.faq

export default function FaqPage() {
  return (
    <>
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Frequently Asked <strong className="text-secondary">Questions</strong>
        </h1>
        <p className="mt-2 text-secondary">
          Prices, booking and how we work. Can&apos;t find your question?{' '}
          <Link href="/contact" className="font-medium text-primary underline underline-offset-4">
            Ask us
          </Link>
          .
        </p>

        {faqGroups.map((group) => (
          <section key={group.title} className="mt-12">
            <h2 className="text-xl font-semibold text-primary">{group.title}</h2>
            <div className="mt-2">
              <FAQAccordion items={group.items} />
            </div>
          </section>
        ))}
      </main>
      <CTASection />
      <JsonLd data={faqPageSchema(faqItems)} />
    </>
  )
}
