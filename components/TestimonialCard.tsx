interface TestimonialCardProps {
  name: string
  rating: number
  text: string
  service?: string
  /** YYYY-MM-DD */
  date?: string
}

export default function TestimonialCard({
  name,
  rating,
  text,
  service,
  date,
}: TestimonialCardProps) {
  const details = [
    service,
    date &&
      new Date(`${date}T12:00:00Z`).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC',
      }),
  ].filter(Boolean)

  return (
    <div className="rounded-[var(--radius-card)] bg-background p-6 sm:p-8">
      {/* Stars */}
      <div className="text-lg text-amber-500" aria-label={`${rating} out of 5 stars`}>
        {'★'.repeat(rating)}
        {'☆'.repeat(5 - rating)}
      </div>

      {/* Quote */}
      <p className="mt-4 text-sm italic text-secondary leading-relaxed">
        &ldquo;{text}&rdquo;
      </p>

      {/* Author */}
      <div className="mt-5">
        <p className="text-sm font-bold text-primary">{name}</p>
        {details.length > 0 && (
          <p className="mt-0.5 text-xs text-secondary">{details.join(' · ')}</p>
        )}
      </div>
    </div>
  )
}
