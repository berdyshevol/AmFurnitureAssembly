import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import StatsBar from '@/components/StatsBar'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import CTASection from '@/components/CTASection'
import { services } from '@/lib/services-data'
import { galleryPhotos } from '@/lib/gallery-data'
import { testimonials } from '@/lib/testimonials-data'

export const metadata: Metadata = {
  title: 'AM Furniture Assembly | Professional Furniture Assembly in Denton, TX',
  description:
    'Expert furniture assembly service in Denton, TX. From IKEA to Wayfair, we assemble all brands with precision and care. Same-day service available.',
}

export default function Home() {
  const featuredPhotos = galleryPhotos.filter((p) => p.featured)
  const previewPhotos = [
    ...featuredPhotos,
    ...galleryPhotos.filter((p) => !p.featured),
  ].slice(0, 7)

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <ScrollReveal direction="left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-primary">
              Expert{' '}
              <span className="font-bold">Furniture Assembly</span>{' '}
              You Can Trust
            </h1>
            <p className="mt-6 text-lg text-secondary leading-relaxed max-w-lg">
              Professional furniture assembly service in Denton, TX. We handle
              everything from beds and wardrobes to outdoor structures — so you
              don&apos;t have to.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-[var(--radius-button)] bg-primary px-7 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Get a Free Quote &rarr;
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center rounded-[var(--radius-button)] border border-border px-7 py-3 text-sm font-medium text-primary transition-colors hover:bg-background"
              >
                View Our Work &rarr;
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <Image
              src="/photos/IMG_2729.jpeg"
              alt="White modular shelving system assembled by AM Furniture Assembly"
              width={800}
              height={600}
              className="rounded-2xl object-cover w-full"
              priority
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────── */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StatsBar />
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-primary">
            What We <span className="font-bold">Assemble</span>
          </h2>
          <p className="mt-4 text-secondary max-w-2xl mx-auto">
            From flat-pack furniture to complex outdoor structures, we build it
            all with precision and care.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Gallery Preview ───────────────────────────────────────────── */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center">
            <h2 className="text-3xl sm:text-4xl font-light text-primary">
              Our Recent <span className="font-bold">Work</span>
            </h2>
            <p className="mt-4 text-secondary max-w-2xl mx-auto">
              Browse some of our latest furniture assembly projects across the
              Denton, TX area.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {previewPhotos.map((photo, i) => (
              <Link
                key={photo.src}
                href="/gallery"
                className={`relative block overflow-hidden rounded-[var(--radius-card)] ${
                  i === 0
                    ? 'col-span-2 row-span-2 aspect-square'
                    : 'aspect-[4/3]'
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={
                    i === 0
                      ? '(max-width: 640px) 100vw, 50vw'
                      : '(max-width: 640px) 50vw, 25vw'
                  }
                  className="object-cover transition-transform duration-300 hover:scale-[1.03]"
                />
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center text-sm font-medium text-primary hover:text-secondary transition-colors"
            >
              View Full Gallery &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials Preview ──────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-primary">
            What Clients <span className="font-bold">Say</span>
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
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

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <CTASection />
    </>
  )
}
