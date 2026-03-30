import type { Metadata } from 'next'
import { galleryPhotos, categories, type PhotoCategory } from '@/lib/gallery-data'
import GalleryGrid from '@/components/GalleryGrid'

export const metadata: Metadata = {
  title: 'Our Work | AM Furniture Assembly',
  description:
    'Browse our portfolio of professionally assembled furniture in Denton, TX. Beds, wardrobes, shelving, outdoor structures, and more.',
}

const validCategories = categories.map((c) => c.value)

export default async function GalleryPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category: categoryParam } = await searchParams
  const initialCategory = validCategories.includes(categoryParam as PhotoCategory | 'all')
    ? (categoryParam as PhotoCategory | 'all')
    : 'all'
  return (
    <>
      {/* Hero */}
      <section className="bg-background py-20 px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-light text-primary leading-tight">
            Our <span className="font-bold">Work</span>
          </h1>
          <p className="mt-4 text-lg text-secondary">
            Browse our portfolio of professionally assembled furniture
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-7xl">
          <GalleryGrid photos={galleryPhotos} showFilter={true} initialCategory={initialCategory} />
        </div>
      </section>
    </>
  )
}
