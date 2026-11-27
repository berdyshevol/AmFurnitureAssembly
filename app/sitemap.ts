import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'
import { baseUrl, pageUpdatedAt } from '@/lib/config'

const BASE_URL = baseUrl

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts()

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: pageUpdatedAt['/'],
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: pageUpdatedAt['/services'],
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: pageUpdatedAt['/pricing'],
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: pageUpdatedAt['/gallery'],
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/testimonials`,
      lastModified: pageUpdatedAt['/testimonials'],
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: pageUpdatedAt['/about'],
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: pageUpdatedAt['/contact'],
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: pageUpdatedAt['/blog'],
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogEntries,
  ]
}
