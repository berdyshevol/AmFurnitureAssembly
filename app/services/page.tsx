import type { Metadata } from 'next'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import CTASection from '@/components/CTASection'
import { services } from '@/lib/services-data'

export const metadata: Metadata = {
  title: 'Our Services | AM Furniture Assembly',
  description:
    'Professional furniture assembly services in Denton, TX. Beds, wardrobes, shelving, office furniture, outdoor structures, and more. All major brands.',
}

const steps = [
  {
    number: 1,
    title: 'Book',
    description: 'Contact us for a free estimate. Tell us what you need assembled and we\'ll provide a clear quote.',
  },
  {
    number: 2,
    title: 'We Arrive',
    description: 'We show up on time, fully equipped with all the tools needed to get the job done right.',
  },
  {
    number: 3,
    title: 'Done',
    description: 'Professional assembly, thorough cleanup, and a workspace left spotless. Enjoy your new furniture.',
  },
]

const brands = [
  'IKEA',
  'Wayfair',
  'Amazon',
  'West Elm',
  'CB2',
  'Target',
  'Pottery Barn',
  'Crate & Barrel',
]

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero Banner ───────────────────────────────────────────────── */}
      <section className="relative h-[340px] sm:h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="/photos/IMG_2705.jpeg"
          alt="White open shelving unit assembled by AM Furniture Assembly"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl font-light text-white leading-tight">
              Our <span className="font-bold">Services</span>
            </h1>
            <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto">
              Comprehensive furniture assembly for homes, offices, and outdoor
              spaces
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Service Cards ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <div className="rounded-[var(--radius-card)] bg-background overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-56 sm:h-64">
                  <Image
                    src={service.photo}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <span className="text-primary">{service.icon}</span>
                    <h3 className="text-xl font-semibold text-primary">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-secondary leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-secondary"
                      >
                        <span className="mt-0.5 text-primary text-xs">&#10003;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────────────── */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center">
            <h2 className="text-3xl sm:text-4xl font-light text-primary">
              How It <span className="font-bold">Works</span>
            </h2>
            <p className="mt-4 text-secondary max-w-2xl mx-auto">
              Three simple steps to perfectly assembled furniture.
            </p>
          </ScrollReveal>

          <div className="mt-14 flex flex-col items-center gap-10 lg:flex-row lg:gap-0">
            {steps.map((step, i) => (
              <div key={step.number} className="flex items-center lg:flex-1">
                <ScrollReveal delay={i * 0.15} className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white">
                    {step.number}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </ScrollReveal>

                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block flex-1 h-px bg-border mx-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brands ────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-primary">
            We Assemble All Major <span className="font-bold">Brands</span>
          </h2>
        </ScrollReveal>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {brands.map((brand, i) => (
            <ScrollReveal key={brand} delay={i * 0.05}>
              <span className="inline-flex items-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white">
                {brand}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Pricing Note ──────────────────────────────────────────────── */}
      <section className="pb-20">
        <ScrollReveal className="mx-auto max-w-2xl px-4 text-center">
          <p className="text-lg text-secondary leading-relaxed">
            Every project is unique. Contact us for a free, no-obligation
            estimate.
          </p>
        </ScrollReveal>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <CTASection slot="ctaServices" />
    </>
  )
}
