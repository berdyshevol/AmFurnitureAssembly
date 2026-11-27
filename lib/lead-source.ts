/**
 * First-touch attribution: remembers where a visitor first came from so a later
 * contact-form lead can say "came from ChatGPT" etc. Browser-only.
 */

const STORAGE_KEY = 'am_first_touch'
const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000

export interface FirstTouch {
  referrer: string
  utmSource: string
  utmMedium: string
  utmCampaign: string
  landing: string
  at: number
}

/** Ordered: the first pattern that matches the referrer host or utm_source wins. */
const SOURCE_PATTERNS: [RegExp, string][] = [
  [/chatgpt|openai/, 'ChatGPT'],
  [/perplexity/, 'Perplexity'],
  [/claude|anthropic/, 'Claude'],
  [/copilot/, 'Copilot'],
  [/gemini|bard/, 'Gemini'],
  [/thumbtack/, 'Thumbtack'],
  [/yelp/, 'Yelp'],
  [/facebook|fb\.|instagram/, 'Facebook/Instagram'],
  [/nextdoor/, 'Nextdoor'],
  [/angi|homeadvisor/, 'Angi'],
  [/gbp|google\.com\/maps|maps\.google/, 'Google Business Profile'],
  [/google/, 'Google'],
  [/bing/, 'Bing'],
  [/duckduckgo/, 'DuckDuckGo'],
  [/brave/, 'Brave'],
]

function read(): FirstTouch | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const touch = JSON.parse(raw) as FirstTouch
    return Date.now() - touch.at < MAX_AGE_MS ? touch : null
  } catch {
    return null
  }
}

/** Saves the current visit as the first touch unless a fresh one is already stored. */
export function captureFirstTouch(): void {
  if (read()) return
  const params = new URLSearchParams(window.location.search)
  let referrer = ''
  try {
    const ref = new URL(document.referrer)
    if (ref.host !== window.location.host) referrer = ref.host + ref.pathname
  } catch {
    // no or invalid referrer: direct visit or an app that strips it
  }
  const touch: FirstTouch = {
    referrer,
    utmSource: params.get('utm_source') ?? '',
    utmMedium: params.get('utm_medium') ?? '',
    utmCampaign: params.get('utm_campaign') ?? '',
    landing: window.location.pathname,
    at: Date.now(),
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(touch))
  } catch {
    // storage blocked (private mode): attribution is best-effort
  }
}

/** Human-readable source, e.g. "ChatGPT", "Google", "Direct", or the referrer host. */
export function classifySource(touch: FirstTouch | null): string {
  if (!touch) return 'Unknown'
  const haystack = `${touch.utmSource} ${touch.referrer}`.toLowerCase()
  for (const [pattern, label] of SOURCE_PATTERNS) {
    if (pattern.test(haystack)) return label
  }
  if (touch.utmSource) return touch.utmSource
  if (touch.referrer) return touch.referrer.split('/')[0]
  return 'Direct'
}

/** Adds the stored first touch to a lead's form data (fields prefixed with lead_). */
export function appendLeadSource(form: FormData): string {
  const touch = read()
  const source = classifySource(touch)
  form.set('lead_source', source)
  if (touch) {
    form.set('lead_referrer', touch.referrer)
    form.set(
      'lead_utm',
      [touch.utmSource, touch.utmMedium, touch.utmCampaign].filter(Boolean).join(' / '),
    )
    form.set('lead_landing', touch.landing)
  }
  return source
}
