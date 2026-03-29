import type { Metadata } from 'next'
import { galleryPhotos } from '@/lib/gallery-data'
import GalleryGrid from '@/components/GalleryGrid'

export const metadata: Metadata = {
  title: 'Our Work | AM Furniture Assembly',
  description:
    'Browse our portfolio of professionally assembled furniture in Denton, TX. Beds, wardrobes, shelving, outdoor structures, and more.',
}

export default function GalleryPage() {
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
          <GalleryGrid photos={galleryPhotos} showFilter={true} />
        </div>
      </section>
    </>
  )
}
