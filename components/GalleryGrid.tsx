'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { categories, type GalleryPhoto, type PhotoCategory } from '@/lib/gallery-data'

interface GalleryGridProps {
  photos: GalleryPhoto[]
  showFilter?: boolean
  initialCategory?: PhotoCategory | 'all'
}

export default function GalleryGrid({ photos, showFilter = true, initialCategory = 'all' }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<PhotoCategory | 'all'>(initialCategory)
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  const filtered =
    activeCategory === 'all'
      ? photos
      : photos.filter((p) => p.category === activeCategory)

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index)
  }, [])

  const lightboxSlides = filtered.map((photo) => ({
    src: photo.src,
    alt: photo.alt,
  }))

  return (
    <div>
      {/* Filter tabs */}
      {showFilter && (
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setActiveCategory(cat.value)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat.value
                  ? 'bg-primary text-white'
                  : 'bg-background text-secondary hover:text-primary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* Photo grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((photo, index) => (
            <motion.div
              key={photo.src}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <button
                type="button"
                onClick={() => openLightbox(index)}
                className="group relative block w-full overflow-hidden rounded-[var(--radius-card)] aspect-[4/3]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={lightboxSlides}
      />
    </div>
  )
}
