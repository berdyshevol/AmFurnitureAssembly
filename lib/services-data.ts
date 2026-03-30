export interface Service {
  icon: string
  title: string
  description: string
  items: string[]
  photo: string
  galleryCategory: string
}

export const services: Service[] = [
  {
    icon: '\u{1F6CF}',
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
    icon: '\u{1F5C4}',
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
    icon: '\u{1FA91}',
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
    icon: '\u{1F3E2}',
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
    icon: '\u{1F333}',
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
    icon: '\u{1F527}',
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
