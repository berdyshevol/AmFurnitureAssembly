export type PhotoCategory = 'beds' | 'wardrobes' | 'shelves' | 'outdoor' | 'other'

export interface GalleryPhoto {
  src: string
  alt: string
  category: PhotoCategory
  featured?: boolean
}

export const categories: { label: string; value: PhotoCategory | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Beds', value: 'beds' },
  { label: 'Wardrobes & Dressers', value: 'wardrobes' },
  { label: 'Shelves & Storage', value: 'shelves' },
  { label: 'Outdoor', value: 'outdoor' },
  { label: 'Other', value: 'other' },
]

export const galleryPhotos: GalleryPhoto[] = [
  // ── Beds ──────────────────────────────────────────────────────────────
  {
    src: '/photos/IMG_1646.jpeg',
    alt: 'Black metal bed frame with X-pattern design',
    category: 'beds',
  },
  {
    src: '/photos/IMG_2684.jpeg',
    alt: 'Gray upholstered platform bed frame',
    category: 'beds',
  },
  {
    src: '/photos/IMG_2708.jpeg',
    alt: 'Dark wood bed with white bedding',
    category: 'beds',
  },
  {
    src: '/photos/IMG_2733.jpeg',
    alt: 'Light wooden bed frame in bright room',
    category: 'beds',
    featured: true,
  },
  {
    src: '/photos/IMG_2734.jpeg',
    alt: 'Light wood bed base with storage drawers',
    category: 'beds',
  },
  {
    src: '/photos/IMG_2735.jpeg',
    alt: 'Bed frame with integrated storage compartments',
    category: 'beds',
  },
  {
    src: '/photos/IMG_2736.jpeg',
    alt: 'Integrated bedroom system with wardrobe',
    category: 'beds',
  },
  {
    src: '/photos/IMG_2274.jpeg',
    alt: 'Black metal bed frame with vertical bar design',
    category: 'beds',
  },

  // ── Wardrobes & Dressers ──────────────────────────────────────────────
  {
    src: '/photos/IMG_2663.jpeg',
    alt: 'Tall wooden wardrobe with light wood finish',
    category: 'wardrobes',
    featured: true,
  },
  {
    src: '/photos/IMG_2670.jpeg',
    alt: 'Tall wooden dresser with 12 drawers',
    category: 'wardrobes',
  },
  {
    src: '/photos/IMG_2709.jpeg',
    alt: 'Dark brown wooden dresser with gold handles',
    category: 'wardrobes',
  },
  {
    src: '/photos/IMG_2745.jpeg',
    alt: 'Green sage cabinet with decorative panel doors',
    category: 'wardrobes',
  },
  {
    src: '/photos/IMG_2787.jpeg',
    alt: 'Dark wood chest of drawers with brass hardware',
    category: 'wardrobes',
  },
  {
    src: '/photos/IMG_2313.jpeg',
    alt: 'Gray wooden desk with slatted drawer fronts',
    category: 'other',
  },
  {
    src: '/photos/IMG_2373.jpeg',
    alt: 'Light wood tall chest of drawers',
    category: 'wardrobes',
  },
  {
    src: '/photos/IMG_2447.jpeg',
    alt: 'Small black cabinet with rattan woven doors',
    category: 'wardrobes',
  },

  // ── Shelves & Storage ─────────────────────────────────────────────────
  {
    src: '/photos/IMG_2672.jpeg',
    alt: 'Black metal dining table with chairs',
    category: 'other',
  },
  {
    src: '/photos/IMG_2705.jpeg',
    alt: 'Dark brown TV stand with slatted front design',
    category: 'other',
  },
  {
    src: '/photos/IMG_2729.jpeg',
    alt: 'White modular shelving system with compartments',
    category: 'shelves',
    featured: true,
  },
  {
    src: '/photos/IMG_2762.jpeg',
    alt: 'Dark brown cabinet with slatted front and open compartment',
    category: 'wardrobes',
  },
  {
    src: '/photos/IMG_2772.jpeg',
    alt: 'Large black wardrobe with slatted doors and brass handles',
    category: 'wardrobes',
  },
  {
    src: '/photos/IMG_2364.jpeg',
    alt: 'Industrial metal and wood open shelving unit',
    category: 'shelves',
  },
  {
    src: '/photos/IMG_2365.jpeg',
    alt: 'Wood and metal shelving system with cabinet',
    category: 'shelves',
  },

  // ── Outdoor ───────────────────────────────────────────────────────────
  {
    src: '/photos/IMG_2763.jpeg',
    alt: 'Green-painted outdoor structure with picnic table',
    category: 'outdoor',
    featured: true,
  },
  {
    src: '/photos/IMG_2768.jpeg',
    alt: 'Outdoor furniture detail with maker\'s plate',
    category: 'outdoor',
  },
  {
    src: '/photos/IMG_2769.jpeg',
    alt: 'Outdoor play structure with green rubber components',
    category: 'outdoor',
  },
  {
    src: '/photos/IMG_2770.jpeg',
    alt: 'Large green slide integrated into wooden structure',
    category: 'outdoor',
  },
  {
    src: '/photos/IMG_2775.jpeg',
    alt: 'Small wooden shed with black and white finish',
    category: 'outdoor',
  },
  {
    src: '/photos/outdoor.jpeg',
    alt: 'Custom outdoor furniture piece',
    category: 'outdoor',
  },
  {
    src: '/photos/outdoor2.jpeg',
    alt: 'Custom outdoor furniture design',
    category: 'outdoor',
  },

  // ── Other ─────────────────────────────────────────────────────────────
  {
    src: '/photos/4671844090193262260.jpeg',
    alt: 'Black office desk setup with glass tops',
    category: 'other',
  },
  {
    src: '/photos/IMG_1641.jpeg',
    alt: 'Yellow and navy blue children\'s bed frame',
    category: 'beds',
  },
  {
    src: '/photos/IMG_2669.jpeg',
    alt: 'Pair of wooden nightstands with two drawers',
    category: 'other',
  },
  {
    src: '/photos/IMG_2686.jpeg',
    alt: 'Two dark brown minimalist nightstands',
    category: 'other',
  },
  {
    src: '/photos/IMG_2784.jpeg',
    alt: 'White vanity mirror with bulb lighting',
    category: 'other',
    featured: true,
  },
  {
    src: '/photos/IMG_2785.jpeg',
    alt: 'Modern curved white upholstered armchair',
    category: 'other',
  },
  {
    src: '/photos/IMG_2301.jpeg',
    alt: 'Kitchen island sideboard with white cabinet and wood countertop',
    category: 'other',
  },
  {
    src: '/photos/IMG_2448.jpeg',
    alt: 'Black leather Eames-style lounge chair with ottoman',
    category: 'other',
  },
]
