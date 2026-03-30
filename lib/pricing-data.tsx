import type { ReactNode } from 'react'

export interface PricingItem {
  name: string
  price: string
  fromPrice?: boolean
  icon: ReactNode
  isLargeProject?: boolean
  pcsNote?: string
}

export interface BundleTier {
  discount: string
  label: string
  highlighted?: boolean
}

export const bundleTiers: BundleTier[] = [
  { discount: '10%', label: '1 – 3 items' },
  { discount: '15%', label: '4 – 6 items', highlighted: true },
  { discount: '20%', label: '7+ items' },
]

export const pricingItems: PricingItem[] = [
  {
    name: 'Chair',
    price: '40',
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" stroke="currentColor" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 32v8M34 32v8M12 20v12h24V20"/>
        <path d="M8 16c0-2 2-4 4-4h24c2 0 4 2 4 4v4c0 2-2 4-4 4H12c-2 0-4-2-4-4v-4z"/>
        <path d="M16 12V8c0-1 1-2 2-2h12c1 0 2 1 2 2v4"/>
      </svg>
    ),
  },
  {
    name: 'Nightstand',
    price: '50',
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" stroke="currentColor" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="8" width="28" height="32" rx="2"/>
        <line x1="10" y1="24" x2="38" y2="24"/>
        <circle cx="24" cy="16" r="2"/>
        <circle cx="24" cy="32" r="2"/>
        <line x1="14" y1="40" x2="14" y2="44"/>
        <line x1="34" y1="40" x2="34" y2="44"/>
      </svg>
    ),
  },
  {
    name: 'Coffee Table',
    price: '50',
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" stroke="currentColor" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="18" width="36" height="6" rx="2"/>
        <line x1="10" y1="24" x2="10" y2="38"/>
        <line x1="38" y1="24" x2="38" y2="38"/>
        <line x1="6" y1="38" x2="16" y2="38"/>
        <line x1="32" y1="38" x2="42" y2="38"/>
        <ellipse cx="34" cy="14" rx="6" ry="4"/>
        <line x1="34" y1="10" x2="34" y2="8"/>
      </svg>
    ),
  },
  {
    name: 'Shelves',
    price: '50 – 100',
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" stroke="currentColor" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="4" width="32" height="40" rx="1"/>
        <line x1="8" y1="14" x2="40" y2="14"/>
        <line x1="8" y1="24" x2="40" y2="24"/>
        <line x1="8" y1="34" x2="40" y2="34"/>
        <rect x="12" y="16" width="6" height="8" rx="1"/>
        <rect x="22" y="26" width="8" height="8" rx="1"/>
        <rect x="12" y="6" width="10" height="8" rx="1"/>
      </svg>
    ),
  },
  {
    name: 'Desk',
    price: '65 – 100',
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" stroke="currentColor" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="16" width="40" height="4" rx="1"/>
        <line x1="8" y1="20" x2="8" y2="40"/>
        <line x1="40" y1="20" x2="40" y2="40"/>
        <rect x="28" y="22" width="10" height="14" rx="1"/>
        <line x1="28" y1="29" x2="38" y2="29"/>
        <rect x="10" y="10" width="8" height="6" rx="1"/>
      </svg>
    ),
  },
  {
    name: 'Bed Frame',
    price: '75 – 120',
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" stroke="currentColor" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="14" width="40" height="20" rx="3"/>
        <rect x="6" y="8" width="8" height="6" rx="2"/>
        <rect x="34" y="8" width="8" height="6" rx="2"/>
        <line x1="4" y1="34" x2="4" y2="40"/>
        <line x1="44" y1="34" x2="44" y2="40"/>
        <path d="M8 22h32v4c0 1-1 2-2 2H10c-1 0-2-1-2-2v-4z"/>
      </svg>
    ),
  },
  {
    name: 'TV Stand',
    price: '75 – 120',
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" stroke="currentColor" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="22" width="36" height="18" rx="2"/>
        <line x1="6" y1="32" x2="42" y2="32"/>
        <circle cx="16" cy="27" r="2"/>
        <rect x="24" y="25" width="12" height="5" rx="1"/>
        <circle cx="16" cy="37" r="2"/>
        <line x1="10" y1="40" x2="10" y2="44"/>
        <line x1="38" y1="40" x2="38" y2="44"/>
        <rect x="14" y="6" width="20" height="14" rx="1"/>
        <line x1="24" y1="20" x2="24" y2="22"/>
      </svg>
    ),
  },
  {
    name: 'Dresser',
    price: '85 – 120',
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" stroke="currentColor" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="6" width="32" height="36" rx="2"/>
        <line x1="8" y1="16" x2="40" y2="16"/>
        <line x1="8" y1="26" x2="40" y2="26"/>
        <line x1="8" y1="32" x2="40" y2="32"/>
        <circle cx="24" cy="11" r="1.5"/>
        <circle cx="24" cy="21" r="1.5"/>
        <circle cx="24" cy="29" r="1.5"/>
        <circle cx="24" cy="38" r="1.5"/>
        <line x1="12" y1="42" x2="12" y2="46"/>
        <line x1="36" y1="42" x2="36" y2="46"/>
      </svg>
    ),
  },
  {
    name: 'Vanity',
    price: '120',
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" stroke="currentColor" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="24" cy="14" rx="12" ry="10"/>
        <line x1="24" y1="24" x2="24" y2="30"/>
        <rect x="10" y="30" width="28" height="4" rx="1"/>
        <line x1="14" y1="34" x2="14" y2="44"/>
        <line x1="34" y1="34" x2="34" y2="44"/>
        <rect x="10" y="36" width="10" height="8" rx="1"/>
        <circle cx="15" cy="40" r="1"/>
      </svg>
    ),
  },
  {
    name: 'Storage Cabinet',
    price: '120 – 150',
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" stroke="currentColor" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
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
  },
  {
    name: 'Patio Set',
    price: '95',
    fromPrice: true,
    pcsNote: '(4 pcs)',
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" stroke="currentColor" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="10" r="6"/>
        <line x1="24" y1="16" x2="24" y2="28"/>
        <line x1="18" y1="28" x2="30" y2="28"/>
        <path d="M8 32c0-1 1-2 2-2h6c1 0 2 1 2 2v8H8v-8z"/>
        <path d="M30 32c0-1 1-2 2-2h6c1 0 2 1 2 2v8H30v-8z"/>
        <line x1="8" y1="40" x2="8" y2="44"/>
        <line x1="18" y1="40" x2="18" y2="44"/>
        <line x1="30" y1="40" x2="30" y2="44"/>
        <line x1="40" y1="40" x2="40" y2="44"/>
      </svg>
    ),
  },
  {
    name: 'Shed',
    price: '350',
    fromPrice: true,
    isLargeProject: true,
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" stroke="currentColor" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22L24 6l20 16"/>
        <rect x="8" y="22" width="32" height="20" rx="1"/>
        <rect x="18" y="30" width="12" height="12" rx="1"/>
        <line x1="24" y1="30" x2="24" y2="42"/>
        <line x1="8" y1="32" x2="14" y2="32"/>
        <rect x="10" y="26" width="6" height="4" rx="1"/>
      </svg>
    ),
  },
  {
    name: 'Playground',
    price: '350',
    fromPrice: true,
    isLargeProject: true,
    icon: (
      <svg viewBox="0 0 48 48" className="w-12 h-12" stroke="currentColor" strokeWidth={1.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="8" x2="8" y2="40"/>
        <line x1="40" y1="8" x2="40" y2="40"/>
        <line x1="8" y1="8" x2="40" y2="8"/>
        <line x1="4" y1="40" x2="12" y2="40"/>
        <line x1="36" y1="40" x2="44" y2="40"/>
        <path d="M14 14h8v6h-8z"/>
        <line x1="18" y1="20" x2="18" y2="34"/>
        <path d="M14 34l8-4"/>
        <path d="M14 30l8 4"/>
        <line x1="30" y1="12" x2="30" y2="18"/>
        <circle cx="30" cy="22" r="4"/>
        <line x1="30" y1="26" x2="30" y2="36"/>
        <line x1="34" y1="14" x2="34" y2="36"/>
        <path d="M34 36c-4-6-8 0-8 0"/>
      </svg>
    ),
  },
]
