'use client'

import { useState } from 'react'

import TestimonialCard from '@/components/TestimonialCard'
import type { Testimonial } from '@/lib/testimonials-data'

const PAGE_SIZE = 12

/**
 * All reviews are in the server HTML (crawlers and AI assistants read them);
 * the button only reveals the hidden ones for people.
 */
export default function ReviewList({ reviews }: { reviews: Testimonial[] }) {
  const [visible, setVisible] = useState(PAGE_SIZE)
  const remaining = reviews.length - visible

  return (
    <>
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((t, i) => (
          <div key={`${t.name}-${t.date}`} hidden={i >= visible}>
            <TestimonialCard
              name={t.name}
              rating={t.rating}
              text={t.text}
              service={t.service}
              date={t.date}
            />
          </div>
        ))}
      </div>
      {remaining > 0 && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="rounded-[var(--radius-button)] border border-primary px-8 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Show more reviews ({remaining} more)
          </button>
        </div>
      )}
    </>
  )
}
