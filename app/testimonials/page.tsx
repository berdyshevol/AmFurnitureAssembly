import type { Metadata } from 'next'
import Image from 'next/image'
import { testimonials } from '@/lib/testimonials-data'
import TestimonialCard from '@/components/TestimonialCard'
import ScrollReveal from '@/components/ScrollReveal'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Testimonials | AM Furniture Assembly',
  description:
    'Read what our customers say about AM Furniture Assembly. 30 five-star reviews on Thumbtack from satisfied clients in Denton, TX.',
}

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[340px] sm:h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="/photos/IMG_2736.jpeg"
          alt="Assembled outdoor playground structure"
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
          <p className="text-6xl font-bold text-primary">5.0</p>
          <div
            className="mt-3 text-3xl text-amber-500"
            aria-label="5 out of 5 stars"
          >
            {'★★★★★'}
          </div>
          <p className="mt-3 text-sm text-secondary">30 reviews on Thumbtack</p>
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
          href="https://www.thumbtack.com/tx/denton/mobile-auto-detailing-services/am-furniture-assembly/service/554676627122528261"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-[var(--radius-button)] bg-primary px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          See More Reviews on Thumbtack &rarr;
        </a>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  )
}
