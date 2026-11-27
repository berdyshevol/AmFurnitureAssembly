interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

/**
 * Native <details> keeps every answer in the server HTML, so search engines and
 * AI assistants can read answers that people see only after tapping a question.
 */
export default function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="divide-y divide-border">
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="flex w-full cursor-pointer list-none items-center justify-between py-5 text-left text-base font-medium text-primary transition-colors hover:text-secondary [&::-webkit-details-marker]:hidden">
            <span className="pr-4">{item.question}</span>
            <span className="flex-shrink-0 text-xl text-secondary" aria-hidden="true">
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">{'−'}</span>
            </span>
          </summary>
          <p className="pb-5 text-sm text-secondary leading-relaxed">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}
