import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export default function CTASection() {
  return (
    <section className="bg-primary py-20 px-4">
      <ScrollReveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight">
          Ready to Get Your Furniture{' '}
          <span className="font-bold">Assembled?</span>
        </h2>
        <p className="mt-4 text-white/80 text-lg">
          Book a free consultation today — most projects completed same day
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center rounded-[var(--radius-button)] bg-white px-8 py-3 text-sm font-medium text-primary transition-opacity hover:opacity-90"
        >
          Get a Free Quote &rarr;
        </Link>
      </ScrollReveal>
    </section>
  )
}
