import type { MetadataRoute } from 'next'
import { baseUrl } from '@/lib/config'

/**
 * AI search and user-triggered fetchers, listed explicitly so the site stays visible in
 * ChatGPT, Claude and Perplexity answers even if the `*` rule is tightened later.
 */
const aiSearchBots = [
  'OAI-SearchBot',
  'ChatGPT-User',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: aiSearchBots, allow: '/' },
      { userAgent: '*', allow: '/' },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
