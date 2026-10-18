import { baseUrl } from '@/lib/config'
import { getMarkdownPaths, getPageMarkdown } from '@/lib/llm-content'

// Reached through rewrites in next.config.ts: `/pricing.md`, or `/pricing` with `Accept: text/markdown`.
export const dynamicParams = false

export async function generateStaticParams() {
  return (await getMarkdownPaths()).map((slug) => ({ slug }))
}

export async function GET(_: Request, ctx: RouteContext<'/md/[[...slug]]'>) {
  const { slug = [] } = await ctx.params
  const markdown = await getPageMarkdown(slug)

  if (markdown == null) {
    return new Response(null, { status: 404 })
  }

  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      Vary: 'Accept',
      Link: `<${baseUrl}/${slug.join('/')}>; rel="canonical"`,
    },
  })
}
