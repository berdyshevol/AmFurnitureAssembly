interface TestimonialCardProps {
  name: string
  rating: number
  text: string
  service?: string
}

export default function TestimonialCard({
  name,
  rating,
  text,
  service,
}: TestimonialCardProps) {
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
        {service && (
          <p className="mt-0.5 text-xs text-secondary">{service}</p>
        )}
      </div>
    </div>
  )
}
