import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import CTASection from '@/components/CTASection'
import { bundleTiers, pricingItems } from '@/lib/pricing-data'

export const metadata: Metadata = {
  title: 'Pricing | AM Furniture Assembly',
  description:
    'Transparent flat-rate pricing for furniture assembly in Denton, TX. Chairs from $40, beds from $75, desks from $65. Bundle discounts up to 20%.',
}

export default function PricingPage() {
  return (
    <>
      {/* ── Hero Banner ───────────────────────────────────────────────── */}
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

      {/* ── Bundle & Save ─────────────────────────────────────────────── */}
      <section className="bg-background py-12 px-4">
        <ScrollReveal>
          <div
            className="mx-auto max-w-[900px] rounded-[16px] px-8 py-10 text-center text-white"
            style={{
              background:
                'linear-gradient(135deg, #212529 0%, #3a3f44 40%, #212529 100%)',
              boxShadow: '0 20px 60px rgba(33,37,41,0.3)',
            }}
          >
            <span className="inline-block rounded-full border border-white/20 bg-white/15 px-5 py-1.5 text-xs font-bold uppercase tracking-[2px] mb-5">
              Special Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-2">
              Bundle &amp; Save
            </h2>
            <p className="text-white/70 mb-9">
              The more you assemble, the more you save
            </p>
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
                  <div
                    className={`font-extrabold leading-none ${
                      tier.highlighted ? 'text-[2.6rem]' : 'text-[2.2rem]'
                    }`}
                  >
                    {tier.discount}
                  </div>
                  <div className="mt-2 text-sm text-white/60 font-medium">
                    OFF
                  </div>
                  <div className="mt-1 text-sm text-white/85 font-semibold">
                    {tier.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Price Grid ────────────────────────────────────────────────── */}
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
                <div
                  className={`rounded-[var(--radius-card)] border p-7 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                    item.isLargeProject
                      ? 'bg-background border-2 border-border'
                      : 'bg-white border-border'
                  }`}
                >
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                      {item.icon}
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-primary mb-2">
                    {item.name}
                    {item.pcsNote && (
                      <span className="text-xs font-normal text-secondary">
                        {' '}
                        {item.pcsNote}
                      </span>
                    )}
                  </div>
                  <div className="text-xl font-extrabold text-primary">
                    {item.fromPrice && (
                      <span className="text-xs font-normal text-secondary">
                        from{' '}
                      </span>
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
            <Link
              href="/contact"
              className="font-semibold text-primary hover:underline"
            >
              Contact us
            </Link>{' '}
            for a free estimate.
          </p>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <CTASection />

      {/* ── Structured Data ───────────────────────────────────────────── */}
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
    </>
  )
}
