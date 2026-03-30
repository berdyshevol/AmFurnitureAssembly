import type { Metadata } from 'next'
import Image from 'next/image'
import { galleryPhotos, categories, type PhotoCategory } from '@/lib/gallery-data'
import GalleryGrid from '@/components/GalleryGrid'
import { pageMetadata, pageHeroes } from '@/lib/config'

export const metadata: Metadata = pageMetadata.gallery

const validCategories = categories.map((c) => c.value)

export default async function GalleryPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category: categoryParam } = await searchParams
  const initialCategory = validCategories.includes(categoryParam as PhotoCategory | 'all')
    ? (categoryParam as PhotoCategory | 'all')
    : 'all'
  return (
    <>
      {/* Hero */}
      <section className="relative h-[340px] sm:h-[420px] flex items-center justify-center overflow-hidden">
        <Image
          src={pageHeroes.gallery.src}
          alt={pageHeroes.gallery.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-light text-white leading-tight">
            Our <span className="font-bold">Work</span>
          </h1>
          <p className="mt-4 text-lg text-white/80">
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
