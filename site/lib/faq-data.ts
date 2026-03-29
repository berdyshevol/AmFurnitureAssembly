export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'How much does furniture assembly cost?',
    answer:
      'Our assembly services start at $40. The final price depends on the complexity of the piece, the number of items, and any special requirements. We provide a clear quote before starting so there are no surprises.',
  },
  {
    question: 'How long does assembly take?',
    answer:
      'Most single items take 1\u20132 hours to assemble. Larger or more complex pieces like wardrobes, bunk beds, or shed installations may take longer. We\u2019ll give you a time estimate when you book.',
  },
  {
    question: 'What brands do you assemble?',
    answer:
      'We assemble furniture from all major brands and retailers including IKEA, Wayfair, Amazon, West Elm, CB2, Target, Pottery Barn, and Crate & Barrel. If it comes in a box with instructions, we can build it.',
  },
  {
    question: 'Do I need to be home during assembly?',
    answer:
      'Yes, we ask that someone be present at the location during the assembly. This ensures we can confirm placement, ask any questions about your preferences, and walk you through the finished piece.',
  },
  {
    question: 'What if something is damaged during assembly?',
    answer:
      'We take full responsibility for our work. In the rare event that something is damaged during assembly, we are covered by insurance and will make it right at no extra cost to you.',
  },
  {
    question: 'Do you offer same-day service?',
    answer:
      'Yes! We offer both same-day and next-day assembly services, subject to availability. Contact us as early as possible and we\u2019ll do our best to fit you in.',
  },
]
