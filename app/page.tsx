import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import HeroCarousel from '@/components/HeroCarousel'
import StatsBar from '@/components/StatsBar'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import CTASection from '@/components/CTASection'
import { services } from '@/lib/services-data'
import { galleryPhotos, categories } from '@/lib/gallery-data'
import { testimonials } from '@/lib/testimonials-data'

export const metadata: Metadata = {
  title: 'AM Furniture Assembly | Professional Furniture Assembly in Denton, TX',
  description:
    'Expert furniture assembly service in Denton, TX. From IKEA to Wayfair, we assemble all brands with precision and care. Same-day service available.',
}

export default function Home() {
  const heroPhoto = galleryPhotos.find((p) => p.src === '/photos/IMG_2670.jpeg')!
  const featuredPhotos = galleryPhotos.filter(
    (p) => p.featured && p.src !== heroPhoto.src
  )
  const previewPhotos = [
    heroPhoto,
    ...featuredPhotos,
    ...galleryPhotos.filter((p) => !p.featured && p.src !== heroPhoto.src),
  ].slice(0, 6)

  const categoryLabels: Record<string, string> = Object.fromEntries(
    categories.filter((c) => c.value !== 'all').map((c) => [c.value, c.label])
  )

  return (
    <>
      {/* ── Hero Carousel ────────────────────────────────────────────── */}
      <HeroCarousel />

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
                href={`/gallery?category=${service.galleryCategory}`}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Photo Divider ────────────────────────────────────────────── */}
      <section className="relative h-[280px] sm:h-[340px] flex items-center justify-center overflow-hidden">
        <Image
          src="/photos/IMG_2735.jpeg"
          alt="Precision furniture assembly"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight">
              Built with <span className="font-bold">Precision.</span> Every Time.
            </h2>
            <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
              Trusted by homeowners across Denton, TX
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center rounded-[var(--radius-button)] border border-white/30 bg-white/10 backdrop-blur-sm px-7 py-3 text-sm font-medium text-white transition-all hover:bg-white/20"
            >
              Get a Free Quote &rarr;
            </Link>
          </ScrollReveal>
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

          {/* Desktop: 1 large (2col×2row) + 2 right + 3 bottom */}
          {/* Mobile: 2-column uniform grid */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:grid-rows-[1fr_1fr_auto]">
            {previewPhotos.map((photo, i) => (
              <ScrollReveal
                key={photo.src}
                delay={i * 0.1}
                className={
                  i === 0
                    ? 'col-span-2 sm:col-span-2 sm:row-span-2'
                    : ''
                }
              >
                <Link
                  href="/gallery"
                  className={`group relative block overflow-hidden rounded-[var(--radius-card)] ${
                    i === 0 ? 'aspect-square sm:aspect-auto sm:h-full' : 'aspect-[4/3]'
                  }`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={
                      i === 0
                        ? '(max-width: 640px) 100vw, 66vw'
                        : '(max-width: 640px) 50vw, 33vw'
                    }
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute bottom-3 left-3 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {categoryLabels[photo.category] ?? photo.category}
                  </span>
                </Link>
              </ScrollReveal>
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
