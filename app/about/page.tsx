import type { Metadata } from 'next'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'About Andrii Mohylov | AM Furniture Assembly',
  description:
    'Learn about Andrii Mohylov and the story behind AM Furniture Assembly. Experienced, reliable furniture assembly in Denton, TX.',
}

const whyChooseUs = [
  {
    icon: '\u{1F3C6}',
    title: 'Experienced Professional',
    description:
      'With dozens of successful projects under our belt, we bring skill and efficiency to every assembly job.',
  },
  {
    icon: '\u{1F4E6}',
    title: 'All Brands Welcome',
    description:
      'IKEA, Wayfair, Amazon, West Elm — if it comes in a box with instructions, we can build it.',
  },
  {
    icon: '\u26A1',
    title: 'Same-Day Service',
    description:
      'Need it done today? We offer same-day and next-day assembly, subject to availability.',
  },
  {
    icon: '\u2705',
    title: 'Satisfaction Guaranteed',
    description:
      'We stand behind our work. If something isn\'t right, we\'ll make it right at no extra cost.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Hero Banner ───────────────────────────────────────────────── */}
      <section className="relative h-[340px] sm:h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src="/photos/IMG_2672.jpeg"
          alt="Cabinet assembly in progress"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl font-light text-white leading-tight">
              About <span className="font-bold">Andrii Mohylov</span>
            </h1>
            <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto">
              The craftsman behind every perfectly assembled piece
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Story Section ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <ScrollReveal direction="left">
            <h2 className="text-3xl sm:text-4xl font-light text-primary">
              My <span className="font-bold">Story</span>
            </h2>
            <p className="mt-6 text-secondary leading-relaxed">
              My name is Andrii Mohylov, and I founded AM Furniture Assembly
              with a simple belief: everyone deserves furniture that&apos;s built
              right. What started as helping friends and neighbors with their
              flat-pack frustrations quickly grew into a full-time passion.
            </p>
            <p className="mt-4 text-secondary leading-relaxed">
              With years of hands-on experience, I&apos;ve assembled everything
              from simple nightstands to complex wardrobe systems, outdoor sheds,
              and play structures. I treat every home like my own — protecting
              floors, cleaning up after every job, and making sure each piece is
              solid, level, and built to last.
            </p>
            <p className="mt-4 text-secondary leading-relaxed">
              Based in Denton, TX, I proudly serve the surrounding communities
              including Frisco, McKinney, Plano, and the greater DFW area. When
              you hire AM Furniture Assembly, you get me — someone who genuinely
              cares about doing excellent work.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <Image
              src="/photos/IMG_2670.jpeg"
              alt="Tall wooden dresser with 12 drawers assembled by Andrii"
              width={600}
              height={750}
              className="rounded-[var(--radius-card)] object-cover w-full"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────────────── */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center">
            <h2 className="text-3xl sm:text-4xl font-light text-primary">
              Why Choose <span className="font-bold">Us</span>
            </h2>
            <p className="mt-4 text-secondary max-w-2xl mx-auto">
              Here&apos;s what sets AM Furniture Assembly apart from the rest.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {whyChooseUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="rounded-[var(--radius-card)] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-2xl text-white">
                    {item.icon}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <CTASection />
    </>
  )
}
