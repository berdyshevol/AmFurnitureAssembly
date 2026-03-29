'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const slides = [
  {
    src: '/photos/banner1.png',
    alt: 'Instant Assembly Magic — modern furniture assembled effortlessly from the box',
  },
  {
    src: '/photos/banner2.png',
    alt: 'Professional Furniture Assembly — save more with bundle deals: 10% off 1-3 items, 15% off 4-6 items, 20% off 7+ items',
  },
  {
    src: '/photos/banner3.png',
    alt: 'We Are Putting Things Together — same or next day furniture assembly available, call (940) 222-0263',
  },
]

const AUTOPLAY_MS = 5500

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, AUTOPLAY_MS)
  }, [])

  const goTo = useCallback(
    (index: number) => {
      setCurrent(index)
      resetTimer()
    },
    [resetTimer],
  )

  useEffect(() => {
    resetTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [resetTimer])

  return (
    <section className="relative overflow-hidden bg-[#f5f0eb]">
      {/* Warm ambient grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle decorative circles */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#d4c5b0]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#c9b99a]/15 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* ── Text column ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative z-20 text-center lg:text-left"
          >
            <span className="inline-block rounded-full bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary/70 mb-5">
              Denton, TX &middot; Same-Day Service
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-light leading-[1.1] text-primary tracking-tight">
              Expert{' '}
              <span className="font-bold">Furniture&nbsp;Assembly</span>
              <br className="hidden sm:block" />
              {' '}You Can Trust
            </h1>

            <p className="mt-6 text-lg text-secondary leading-relaxed max-w-lg mx-auto lg:mx-0">
              Professional furniture assembly service in Denton,&nbsp;TX.
              We handle everything from beds and wardrobes to outdoor
              structures&nbsp;— so you don&apos;t have&nbsp;to.
            </p>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-[var(--radius-button)] bg-primary px-7 py-3.5 text-sm font-medium text-white transition-all hover:opacity-90 hover:shadow-lg hover:shadow-primary/20"
              >
                Get a Free Quote &rarr;
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center rounded-[var(--radius-button)] border border-primary/15 bg-white/60 backdrop-blur-sm px-7 py-3.5 text-sm font-medium text-primary transition-all hover:bg-white hover:shadow-md"
              >
                View Our Work &rarr;
              </Link>
            </div>
          </motion.div>

          {/* ── Carousel column ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="relative z-20 flex flex-col items-center"
          >
            {/* Carousel frame — all slides stacked, crossfade via opacity */}
            <div className="relative w-full max-w-[480px] mx-auto aspect-[3/4] rounded-[20px] overflow-hidden shadow-2xl shadow-black/10 ring-1 ring-black/[0.04]">
              {slides.map((slide, i) => (
                <div
                  key={slide.src}
                  className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                  style={{
                    opacity: i === current ? 1 : 0,
                    zIndex: i === current ? 1 : 0,
                  }}
                  aria-hidden={i !== current}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 480px"
                    className="object-cover"
                    priority
                  />
                </div>
              ))}

              {/* Soft vignette edges */}
              <div className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-black/[0.06]" />
            </div>

            {/* Navigation dots */}
            <div className="mt-6 flex items-center gap-2.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="group relative flex h-8 w-8 items-center justify-center"
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      i === current
                        ? 'h-2.5 w-2.5 bg-primary scale-100'
                        : 'h-2 w-2 bg-primary/25 group-hover:bg-primary/50'
                    }`}
                  />
                  {i === current && (
                    <motion.span
                      layoutId="activeDot"
                      className="absolute inset-1.5 rounded-full border-[1.5px] border-primary/30"
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
