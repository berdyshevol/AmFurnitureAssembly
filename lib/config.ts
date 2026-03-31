export const baseUrl = 'https://amfurnitureassembly.com'

export const siteConfig = {
  name: "Andrii Mohylov Furniture Assembly",
  shortName: "AM Furniture Assembly",
  phone: "(940) 222-0263",
  phoneTel: "tel:+19402220263",
  smsTel: "sms:+19402220263",
  email: "andrimohilev@gmail.com",
  location: "Dallas-Fort Worth",
  hours: {
    weekdays: "Mon - Fri: 8am - 7pm",
    saturday: "Sat: 9am - 5pm",
    sunday: "Sun: By appointment",
  },
  thumbtackUrl:
    "https://www.thumbtack.com/tx/denton/mobile-auto-detailing-services/am-furniture-assembly/service/554676627122528261",
  startingPrice: "$40",
  payment: ["Apple Pay", "Cash", "Check", "Zelle"],
} as const;

export const aboutPageContent = {
  hero: {
    title: "AM Furniture Assembly | Dallas-Fort Worth, Texas",
  },
  intro:
    "Welcome to AM Furniture Assembly, the premier furniture assembly service in Dallas-Fort Worth, Texas. If you are searching for professional furniture assembly Dallas, IKEA furniture assembly Fort Worth, or wardrobe assembly near me, you've come to the right place.",
  founderStory:
    "My name is Andrii, and I founded AM Furniture Assembly after moving to Texas in 2024. I bring over seven years of professional furniture assembly experience from Kyiv, Germany, and other European countries. Since arriving in the U.S., I have been proudly serving the Dallas-Fort Worth area, helping homeowners and businesses enjoy stress-free furniture assembly, safe installation, and perfectly functional furniture.",
  services: {
    heading: "Our Furniture Assembly Services",
    description:
      "At AM Furniture Assembly, we specialize in:",
    items: [
      "IKEA furniture assembly Dallas-Fort Worth",
      "Wardrobe and cabinet assembly Fort Worth",
      "Bed frames, dressers, and chairs assembly",
      "Kitchen and modular furniture installation Dallas",
      "Office furniture assembly Dallas-Fort Worth",
      "Professional furniture installation without scratches",
    ],
    footer:
      "We use all professional tools and equipment to ensure that every piece of furniture is assembled according to the manufacturer's instructions, installed securely, and ready to use immediately.",
  },
  whyChoose: {
    heading: "Why Choose AM Furniture Assembly in Dallas-Fort Worth",
    intro:
      "We understand the stress and challenges of furniture assembly. Many people worry about scratched floors, damaged walls, or incorrectly assembled furniture. That's why our team guarantees:",
    guarantees: [
      "Stress-free furniture assembly in Dallas-Fort Worth",
      "Safe handling with no scratches on floors or walls",
      "Accurate installation following every instruction",
      "Professional, reliable, and friendly service",
      "Fast and efficient assembly for all types of furniture",
    ],
    footer:
      "Our clients trust us for IKEA furniture assembly Dallas, wardrobe installation Fort Worth, and professional furniture assembly Texas because we provide precision, care, and attention to every detail.",
  },
  ourStory: {
    heading: "Our Story",
    paragraphs: [
      "Furniture assembly is more than just work—it's a passion. Before moving to Texas, I spent seven years assembling furniture in Kyiv, Germany, and across Europe, mastering techniques for all types of furniture. From complex wardrobes to delicate chairs, I learned the best practices for safe and accurate assembly.",
      "In 2024, I brought this experience to Texas and founded AM Furniture Assembly to serve the Dallas-Fort Worth community. Today, we continue the tradition of European-quality furniture assembly, combining skill, professionalism, and care to ensure every project is completed flawlessly.",
    ],
  },
  ourPromise: {
    heading: "Our Promise",
    paragraphs: [
      "When you hire AM Furniture Assembly, you're not just hiring someone to put furniture together—you're hiring peace of mind. We ensure that every piece of furniture is assembled correctly, installed securely, and handled with care. Our goal is for you to enjoy your furniture without stress, scratches, or frustration.",
      "Whether it's a single item or a full home set, we provide fast, reliable, and professional furniture assembly in Dallas-Fort Worth. Our team is equipped with all necessary tools to complete any project safely and efficiently.",
    ],
  },
  cta: "If you are looking for furniture assembly Dallas, IKEA furniture assembly Fort Worth, or wardrobe installation Texas, contact AM Furniture Assembly today. Let us make your furniture perfectly assembled, safe, and ready to use, with no scratches, no stress, and complete satisfaction.",
} as const;

/**
 * CTA button labels — each slot maps to a specific button instance on the site.
 * Swap any value to one of: "Get a Free Quote", "Check Availability", "Book Your Assembly Now"
 */
export const ctaLabels = {
  navbarDesktop: 'Get a Free Quote',
  navbarMobile: 'Get a Free Quote',
  heroCarousel: 'Check Availability',
  homePhotoDivider: 'Book Your Assembly Now',
  ctaHome: 'Get a Free Quote',
  ctaAbout: 'Check Availability',
  ctaServices: 'Book Your Assembly Now',
  ctaPricing: 'Check Availability',
  ctaTestimonials: 'Book Your Assembly Now',
} as const;

export type CtaSlot = keyof typeof ctaLabels;

export const heroSlides = [
  {
    src: '/photos/banner4.png',
    alt: 'Bundle Deal — 10% off 1-3 items, 15% off 4-6 items, 20% off 7 and more',
  },
  {
    src: '/photos/banner5.png',
    alt: 'Special Offers for New Furniture Assembly — Dining Table Set $175, Bedroom Set $150, Living Room Set $175',
  },
  {
    src: '/photos/banner6.png',
    alt: 'We Are Putting Things Together — Sofa Chair up to $75, Side Table up to $45, TV Stands up to $125',
  },
] as const;

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
] as const;

export const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
] as const;

export const stats = [
  { value: 100, suffix: '+', label: 'Projects', decimals: 0 },
  { value: 5.0, suffix: '', label: 'Thumbtack Rating', decimals: 1 },
  { value: 30, suffix: '', label: 'Five-Star Reviews', decimals: 0 },
  { value: 100, suffix: '%', label: 'Satisfaction', decimals: 0 },
] as const;

export const contactFormServiceOptions = [
  'Bed Assembly',
  'Wardrobe/Cabinet',
  'Shelving/Storage',
  'Office Furniture',
  'Outdoor/Garden',
  'Other',
] as const;

export const howItWorksSteps = [
  {
    number: 1,
    title: 'Book',
    description: "Contact us for a free estimate. Tell us what you need assembled and we'll provide a clear quote.",
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
] as const;

export const brands = [
  'IKEA',
  'Wayfair',
  'Amazon',
  'West Elm',
  'CB2',
  'Target',
  'Pottery Barn',
  'Crate & Barrel',
] as const;

export const reviewSummary = {
  rating: '5.0',
  reviewCount: '30',
  priceRange: '$$',
} as const;

export const openGraphConfig = {
  type: 'website' as const,
  locale: 'en_US',
  siteName: 'AM Furniture Assembly',
  image: {
    url: '/photos/IMG_2729.jpeg',
    width: 1200,
    height: 630,
    alt: 'AM Furniture Assembly - Professional Furniture Assembly in Dallas-Fort Worth, TX',
  },
} as const;

export const pageMetadata = {
  layout: {
    title: 'AM Furniture Assembly | Professional Furniture Assembly in Dallas-Fort Worth, TX',
    description:
      'Expert furniture assembly service in Dallas-Fort Worth, TX. We assemble IKEA, Wayfair, Amazon, and all major brands. 30 five-star reviews. Starting at $40. Get a free quote today!',
  },
  home: {
    title: 'AM Furniture Assembly | Professional Furniture Assembly in Dallas-Fort Worth, TX',
    description:
      'Expert furniture assembly service in Dallas-Fort Worth, TX. From IKEA to Wayfair, we assemble all brands with precision and care. Next-day service available.',
  },
  about: {
    title: 'About AM Furniture Assembly | Dallas-Fort Worth, Texas',
    description:
      'Professional furniture assembly in Dallas-Fort Worth, TX. Over 7 years of experience from Europe. IKEA, wardrobe, office furniture assembly.',
  },
  services: {
    title: 'Our Services | AM Furniture Assembly',
    description:
      'Professional furniture assembly services in Dallas-Fort Worth, TX. Beds, wardrobes, shelving, office furniture, outdoor structures, and more. All major brands.',
  },
  pricing: {
    title: 'Pricing | AM Furniture Assembly',
    description:
      'Transparent flat-rate pricing for furniture assembly in Dallas-Fort Worth, TX. Chairs from $40, beds from $75, desks from $65. Bundle discounts up to 20%.',
  },
  gallery: {
    title: 'Our Work | AM Furniture Assembly',
    description:
      'Browse our portfolio of professionally assembled furniture in Dallas-Fort Worth, TX. Beds, wardrobes, shelving, outdoor structures, and more.',
  },
  testimonials: {
    title: 'Testimonials | AM Furniture Assembly',
    description:
      'Read what our customers say about AM Furniture Assembly. 30 five-star reviews on Thumbtack from satisfied clients in Dallas-Fort Worth, TX.',
  },
  contact: {
    title: 'Contact Us | AM Furniture Assembly',
    description:
      'Get a free quote for furniture assembly in Dallas-Fort Worth, TX. Contact AM Furniture Assembly by phone, email, or our online form.',
  },
  blog: {
    title: 'Blog & FAQ | AM Furniture Assembly',
    description:
      'Tips, guides, and frequently asked questions about professional furniture assembly in Dallas-Fort Worth, TX.',
  },
} as const;

export const pageHeroes = {
  about: { src: '/photos/IMG_2672.jpeg', alt: 'Cabinet assembly in progress' },
  services: { src: '/photos/IMG_2705.jpeg', alt: 'White open shelving unit assembled by AM Furniture Assembly' },
  pricing: { src: '/photos/IMG_2447.jpeg', alt: 'Small black cabinet with rattan woven doors' },
  gallery: { src: '/photos/IMG_2763.jpeg', alt: 'Outdoor playground assembly by AM Furniture' },
  testimonials: { src: '/photos/IMG_2301.jpeg', alt: 'Kitchen island sideboard with white cabinet and wood countertop' },
  homeDivider: { src: '/photos/IMG_2621.jpeg', alt: 'Outdoor patio glider bench with cushions' },
} as const;
