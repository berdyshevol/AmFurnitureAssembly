export interface PricingItem {
  name: string
  price: string
  fromPrice?: boolean
  icon: string
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
  { name: 'Chair', price: '40', icon: '🪑' },
  { name: 'Nightstand', price: '50', icon: '🛏️' },
  { name: 'Coffee Table', price: '50', icon: '☕' },
  { name: 'Shelves', price: '50 – 100', icon: '📚' },
  { name: 'Desk', price: '65 – 100', icon: '🖥️' },
  { name: 'Bed Frame', price: '75 – 120', icon: '🛌' },
  { name: 'TV Stand', price: '75 – 120', icon: '📺' },
  { name: 'Dresser', price: '85 – 120', icon: '🗄️' },
  { name: 'Vanity', price: '120', icon: '💄' },
  { name: 'Storage Cabinet', price: '120 – 150', icon: '🗃️' },
  { name: 'Patio Set', price: '95', fromPrice: true, pcsNote: '(4 pcs)', icon: '🌿' },
  { name: 'Shed', price: '350', fromPrice: true, isLargeProject: true, icon: '🏠' },
  { name: 'Playground', price: '350', fromPrice: true, isLargeProject: true, icon: '🎪' },
]
