import type { ReactNode } from 'react'

export interface Service {
  icon: ReactNode
  title: string
  description: string
  items: string[]
  photo: string
  galleryCategory: string
}

const iconProps = {
  viewBox: '0 0 48 48',
  className: 'w-12 h-12',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  fill: 'none' as const,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export const services: Service[] = [
  {
    icon: (
      <svg {...iconProps}>
        <rect x="4" y="14" width="40" height="20" rx="3"/>
        <rect x="6" y="8" width="8" height="6" rx="2"/>
        <rect x="34" y="8" width="8" height="6" rx="2"/>
        <line x1="4" y1="34" x2="4" y2="40"/>
        <line x1="44" y1="34" x2="44" y2="40"/>
        <path d="M8 22h32v4c0 1-1 2-2 2H10c-1 0-2-1-2-2v-4z"/>
      </svg>
    ),
    title: 'Beds & Bedroom',
    description:
      'From simple bed frames to complex bedroom systems with integrated storage, headboards, and adjustable bases.',
    items: [
      'Platform beds',
      'Storage beds',
      'Bunk beds & loft beds',
      'Adjustable bed frames',
      'Headboards & footboards',
      'Bedroom sets',
    ],
    photo: '/photos/IMG_2733.jpeg',
    galleryCategory: 'beds',
  },
  {
    icon: (
      <svg {...iconProps}>
        <rect x="8" y="4" width="32" height="40" rx="2"/>
        <line x1="24" y1="4" x2="24" y2="44"/>
        <line x1="8" y1="24" x2="40" y2="24"/>
        <circle cx="20" cy="14" r="1.5"/>
        <circle cx="28" cy="14" r="1.5"/>
        <circle cx="20" cy="34" r="1.5"/>
        <circle cx="28" cy="34" r="1.5"/>
        <line x1="12" y1="44" x2="12" y2="47"/>
        <line x1="36" y1="44" x2="36" y2="47"/>
      </svg>
    ),
    title: 'Wardrobes & Storage',
    description:
      'Wardrobes, dressers, and closet systems assembled with precision so every drawer glides and every door aligns.',
    items: [
      'Freestanding wardrobes',
      'PAX & custom closet systems',
      'Dressers & chests of drawers',
      'Armoires',
      'Nightstands',
      'Vanities',
    ],
    photo: '/photos/IMG_2663.jpeg',
    galleryCategory: 'wardrobes',
  },
  {
    icon: (
      <svg {...iconProps}>
        <rect x="6" y="6" width="36" height="28" rx="2"/>
        <line x1="6" y1="20" x2="42" y2="20"/>
        <line x1="24" y1="20" x2="24" y2="34"/>
        <circle cx="15" cy="13" r="2"/>
        <circle cx="33" cy="27" r="2"/>
        <line x1="10" y1="34" x2="10" y2="40"/>
        <line x1="38" y1="34" x2="38" y2="40"/>
      </svg>
    ),
    title: 'Living Room',
    description:
      'Shelving units, entertainment centers, and display cabinets that transform your living space.',
    items: [
      'Bookshelves & bookcases',
      'TV stands & media consoles',
      'Display cabinets',
      'Coffee & side tables',
      'Modular shelving systems',
      'Wall-mounted units',
    ],
    photo: '/photos/IMG_2705.jpeg',
    galleryCategory: 'shelves',
  },
  {
    icon: (
      <svg {...iconProps}>
        <rect x="4" y="16" width="40" height="4" rx="1"/>
        <line x1="8" y1="20" x2="8" y2="40"/>
        <line x1="40" y1="20" x2="40" y2="40"/>
        <rect x="28" y="22" width="10" height="14" rx="1"/>
        <line x1="28" y1="29" x2="38" y2="29"/>
        <rect x="10" y="10" width="8" height="6" rx="1"/>
      </svg>
    ),
    title: 'Office Furniture',
    description:
      'Desks, ergonomic chairs, and filing cabinets set up so you can work productively from day one.',
    items: [
      'Standing desks',
      'L-shaped & executive desks',
      'Office chairs',
      'Filing cabinets',
      'Cubicle systems',
      'Conference tables',
    ],
    photo: '/photos/4671844090193262260.jpeg',
    galleryCategory: 'other',
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M4 22L24 6l20 16"/>
        <rect x="8" y="22" width="32" height="20" rx="1"/>
        <rect x="18" y="30" width="12" height="12" rx="1"/>
        <line x1="24" y1="30" x2="24" y2="42"/>
        <rect x="10" y="26" width="6" height="4" rx="1"/>
      </svg>
    ),
    title: 'Outdoor & Garden',
    description:
      'Sheds, play structures, patio furniture, and garden buildings built to withstand the elements.',
    items: [
      'Storage sheds',
      'Playsets & swing sets',
      'Patio furniture sets',
      'Gazebos & pergolas',
      'Outdoor tables & benches',
      'Garden structures',
    ],
    photo: '/photos/IMG_2763.jpeg',
    galleryCategory: 'outdoor',
  },
  {
    icon: (
      <svg {...iconProps}>
        <circle cx="24" cy="20" r="8"/>
        <path d="M16 20h-6M38 20h-6"/>
        <path d="M24 12v-4M24 28v4"/>
        <path d="M18 14l-3-3M30 26l3 3"/>
        <path d="M30 14l3-3M18 26l-3 3"/>
        <line x1="12" y1="36" x2="36" y2="36"/>
        <line x1="16" y1="36" x2="14" y2="42"/>
        <line x1="32" y1="36" x2="34" y2="42"/>
      </svg>
    ),
    title: 'Any Brand',
    description:
      'We assemble furniture from every major retailer and brand. If it comes in a box, we can build it.',
    items: [
      'IKEA',
      'Wayfair',
      'Amazon',
      'West Elm & CB2',
      'Target & Walmart',
      'Pottery Barn & Crate & Barrel',
    ],
    photo: '/photos/IMG_2785.jpeg',
    galleryCategory: 'all',
  },
]
