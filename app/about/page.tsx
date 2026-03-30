import type { Metadata } from 'next'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import CTASection from '@/components/CTASection'
import { aboutPageContent, pageMetadata, pageHeroes } from '@/lib/config'

export const metadata: Metadata = pageMetadata.about

export default function AboutPage() {
  const content = aboutPageContent

  return (
    <>
      {/* ── Hero Banner ───────────────────────────────────────────────── */}
      <section className="relative h-[340px] sm:h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src={pageHeroes.about.src}
          alt={pageHeroes.about.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl font-light text-white leading-tight">
              {content.hero.title}
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Intro + Founder ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <ScrollReveal direction="left">
            <p className="text-secondary leading-relaxed text-lg">
              {content.intro}
            </p>
            <p className="mt-6 text-secondary leading-relaxed">
              {content.founderStory}
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <Image
              src="/photos/about.jpg"
              alt="Andrii Mohylov — founder of AM Furniture Assembly"
              width={600}
              height={750}
              className="rounded-[var(--radius-card)] object-cover w-full"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Our Services ──────────────────────────────────────────────── */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center">
            <h2 className="text-3xl sm:text-4xl font-light text-primary">
              Our Furniture <span className="font-bold">Assembly Services</span>
            </h2>
            <p className="mt-4 text-secondary max-w-2xl mx-auto">
              {content.services.description}
            </p>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {content.services.items.map((item, i) => (
              <ScrollReveal key={item} delay={i * 0.08}>
                <div className="flex items-center gap-3 rounded-[var(--radius-card)] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm">
                    ✓
                  </span>
                  <span className="text-sm text-primary font-medium">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="mt-10 text-center text-secondary max-w-3xl mx-auto leading-relaxed">
              {content.services.footer}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-light text-primary text-center">
            Why Choose <span className="font-bold">AM Furniture Assembly</span>
          </h2>
          <p className="mt-6 text-secondary leading-relaxed max-w-3xl mx-auto text-center">
            {content.whyChoose.intro}
          </p>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
          {content.whyChoose.guarantees.map((item, i) => (
            <ScrollReveal key={item} delay={i * 0.08}>
              <div className="flex items-center gap-3 rounded-[var(--radius-card)] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white text-sm">
                  ✓
                </span>
                <span className="text-sm text-primary font-medium">{item}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="mt-10 text-center text-secondary max-w-3xl mx-auto leading-relaxed">
            {content.whyChoose.footer}
          </p>
        </ScrollReveal>
      </section>

      {/* ── Our Story ─────────────────────────────────────────────────── */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-light text-primary text-center">
              Our <span className="font-bold">Story</span>
            </h2>
          </ScrollReveal>
          <div className="mt-8 max-w-3xl mx-auto space-y-4">
            {content.ourStory.paragraphs.map((p, i) => (
              <ScrollReveal key={i}>
                <p className="text-secondary leading-relaxed">{p}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Promise ───────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-light text-primary text-center">
            Our <span className="font-bold">Promise</span>
          </h2>
        </ScrollReveal>
        <div className="mt-8 max-w-3xl mx-auto space-y-4">
          {content.ourPromise.paragraphs.map((p, i) => (
            <ScrollReveal key={i}>
              <p className="text-secondary leading-relaxed">{p}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <CTASection slot="ctaAbout" />
    </>
  )
}
