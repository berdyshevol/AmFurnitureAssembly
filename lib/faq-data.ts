import { siteConfig } from '@/lib/config'
import { bundleTiers, formatPrice, pricingItems } from '@/lib/pricing-data'

export interface FaqItem {
  question: string
  answer: string
}

export interface FaqGroup {
  title: string
  items: FaqItem[]
}

function price(name: string): string {
  const item = pricingItems.find((p) => p.name === name)
  if (!item) throw new Error(`No pricing item named ${name}`)
  return formatPrice(item)
}

const bundles = bundleTiers.map((t) => `${t.discount} off ${t.label}`).join(' and ')
const hours = Object.values(siteConfig.hours).join(', ')

/**
 * Answer-first FAQ: the first sentence is the direct answer (a number or yes/no),
 * so search engines and AI assistants can quote it. Prices come from pricing-data.
 */
export const faqGroups: FaqGroup[] = [
  {
    title: 'Prices',
    items: [
      {
        question: 'How much does furniture assembly cost?',
        answer: `Assembly starts at ${siteConfig.startingPrice} per item. The final price depends on the complexity of the piece, the number of items, and any special requirements. We provide a clear quote before starting so there are no surprises.`,
      },
      {
        question: 'How much does it cost to assemble a bed frame, dresser or desk?',
        answer: `A bed frame costs ${price('Bed Frame')}, a dresser ${price('Dresser')}, and a desk ${price('Desk')}. A chair is ${price('Chair')}, a nightstand ${price('Nightstand')}, and a TV stand ${price('TV Stand')}. The exact price depends on the size of the piece.`,
      },
      {
        question: 'How much does shed or playground assembly cost?',
        answer: `Shed assembly starts ${price('Shed')} and playground assembly starts ${price('Playground')}. Patio sets start ${price('Patio Set')}. We confirm the price after seeing the model.`,
      },
      {
        question: 'Do you give a discount for several items?',
        answer: `Yes: ${bundles}.`,
      },
      {
        question: 'Is there a minimum order?',
        answer: 'No. There is no minimum order; we are happy to assemble a single item.',
      },
      {
        question: 'Do you charge a travel fee?',
        answer: `No. There is no travel fee anywhere in the ${siteConfig.location} area.`,
      },
      {
        question: 'Is the quote free?',
        answer:
          'Yes, quotes are free. Send us the item name, a link or a photo, and we will tell you the price before any work starts.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: `We accept ${siteConfig.payment.join(', ')}.`,
      },
    ],
  },
  {
    title: 'Booking',
    items: [
      {
        question: 'Do you offer same-day service?',
        answer:
          'Yes! We offer both same-day and next-day assembly services, subject to availability. Contact us as early as possible and we’ll do our best to fit you in.',
      },
      {
        question: 'How far in advance should I book?',
        answer:
          'There is no fixed lead time. We are flexible and adjust to your schedule; same-day or next-day visits are often possible.',
      },
      {
        question: 'How do I book?',
        answer: `Call or text ${siteConfig.phone}, or send the form on our contact page — whichever is easiest for you.`,
      },
      {
        question: 'What are your hours?',
        answer: `${hours}.`,
      },
      {
        question: 'Do I need to be home during assembly?',
        answer:
          'Yes, we ask that someone be present at the location during the assembly. This ensures we can confirm placement, ask any questions about your preferences, and walk you through the finished piece.',
      },
    ],
  },
  {
    title: 'The work',
    items: [
      {
        question: 'How long does assembly take?',
        answer:
          'Most single items take 1–2 hours to assemble. Larger or more complex pieces like wardrobes, bunk beds, or shed installations may take longer. We’ll give you a time estimate when you book.',
      },
      {
        question: 'What brands do you assemble?',
        answer:
          'We assemble furniture from all major brands and retailers including IKEA, Wayfair, Amazon, West Elm, CB2, Target, Pottery Barn, and Crate & Barrel. If it comes in a box with instructions, we can build it.',
      },
      {
        question: 'Do you anchor furniture to the wall?',
        answer:
          'Yes, on request. We recommend anchoring dressers, bookcases and tall cabinets in homes with small children.',
      },
      {
        question: 'Do you take away the boxes and packaging?',
        answer:
          'Yes. We take one box away for free; removing a larger amount of packaging costs a small extra fee.',
      },
      {
        question: 'Do you disassemble old furniture?',
        answer:
          'Yes. Disassembling old furniture is an extra service, and the price depends on the piece.',
      },
      {
        question: 'Do you bring your own tools?',
        answer: 'Yes. We bring all the professional tools and equipment needed for the job.',
      },
      {
        question: 'Do you work in upstairs apartments without an elevator?',
        answer: 'Yes, we work in apartments on any floor, including buildings without an elevator.',
      },
      {
        question: 'Do you assemble furniture for offices and businesses?',
        answer:
          'Yes. We assemble furniture for homes, apartments, offices and businesses: desks, chairs, shelving, storage and more.',
      },
      {
        question: 'What if something is damaged during assembly?',
        answer:
          'We take full responsibility for our work. In the rare event that something is damaged during assembly, we are covered by insurance and will make it right at no extra cost to you.',
      },
    ],
  },
  {
    title: 'Service area',
    items: [
      {
        question: 'What areas do you serve?',
        answer: `We serve the whole ${siteConfig.location} area, including Dallas, Fort Worth and Denton, with no travel fee.`,
      },
    ],
  },
]

/** Every question, in page order. */
export const faqItems: FaqItem[] = faqGroups.flatMap((g) => g.items)
