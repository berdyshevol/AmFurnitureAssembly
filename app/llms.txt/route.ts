import { getLlmsTxt } from '@/lib/llm-content'

export const dynamic = 'force-static'

export async function GET() {
  return new Response(await getLlmsTxt(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
