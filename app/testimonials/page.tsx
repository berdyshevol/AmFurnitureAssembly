import type { Metadata } from 'next'
import Image from 'next/image'
import { testimonials } from '@/lib/testimonials-data'
import TestimonialCard from '@/components/TestimonialCard'
import ScrollReveal from '@/components/ScrollReveal'
import CTASection from '@/components/CTASection'
import { pageMetadata, pageHeroes, siteConfig, reviewSummary } from '@/lib/config'

export const metadata: Metadata = pageMetadata.testimonials

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[340px] sm:h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src={pageHeroes.testimonials.src}
          alt={pageHeroes.testimonials.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-light text-white leading-tight">
            What Our Clients <span className="font-bold">Say</span>
          </h1>
          <p className="mt-4 text-lg text-white/80">
            30 five-star reviews and counting
          </p>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-12 px-4 text-center">
        <div className="mx-auto max-w-md">
          <p className="text-6xl font-bold text-primary">{reviewSummary.rating}</p>
          <div
            className="mt-3 text-3xl text-amber-500"
            aria-label={`${reviewSummary.rating} out of 5 stars`}
          >
            {'★★★★★'}
          </div>
          <p className="mt-3 text-sm text-secondary">{reviewSummary.reviewCount} reviews on Thumbtack</p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <TestimonialCard
                name={t.name}
                rating={t.rating}
                text={t.text}
                service={t.service}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Thumbtack Link */}
      <section className="py-12 px-4 text-center">
        <a
          href={siteConfig.thumbtackUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-[var(--radius-button)] bg-primary px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          See More Reviews on Thumbtack &rarr;
        </a>
      </section>

      {/* CTA */}
      <CTASection slot="ctaTestimonials" />
    </>
  )
}
