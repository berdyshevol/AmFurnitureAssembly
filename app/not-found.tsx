import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: `Page Not Found | ${siteConfig.shortName}`,
}

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 sm:py-32 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-secondary">
        404
      </p>
      <h1 className="mt-3 text-3xl sm:text-4xl font-light text-primary">
        Page <span className="font-bold">Not Found</span>
      </h1>
      <p className="mt-4 text-secondary">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
        have been moved or no longer exists.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center rounded-[var(--radius-button)] bg-primary px-7 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-[var(--radius-button)] border border-primary/15 px-7 py-3 text-sm font-medium text-primary transition-colors hover:bg-background"
        >
          Contact Us
        </Link>
      </div>
      <p className="mt-8 text-sm text-secondary">
        Or call us at{' '}
        <a href={siteConfig.phoneTel} className="font-medium text-primary hover:underline">
          {siteConfig.phone}
        </a>
      </p>
    </section>
  )
}
