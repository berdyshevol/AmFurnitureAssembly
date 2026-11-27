import { siteConfig } from '@/lib/config'

const MAX_FIELD_LENGTH = 2000

function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function field(form: FormData, name: string): string {
  const value = form.get(name)
  return typeof value === 'string' ? value.trim().slice(0, MAX_FIELD_LENGTH) : ''
}

/**
 * Appends the lead as a row to a Google Sheet via an Apps Script web app.
 * Skipped until LEADS_SHEET_WEBHOOK_URL is set; a failure never blocks the lead.
 */
async function logLeadToSheet(row: Record<string, string>) {
  const url = process.env.LEADS_SHEET_WEBHOOK_URL
  if (!url) return
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(row),
    })
    if (!res.ok) console.error('Lead sheet append failed', res.status)
  } catch (err) {
    console.error('Lead sheet append failed', err)
  }
}

/** Forwards a contact-form lead to the owner's Telegram chat. */
export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!token || !chatId) {
    console.error('Telegram is not configured: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is missing')
    return Response.json({ ok: false }, { status: 500 })
  }

  let form: FormData
  try {
    form = await request.formData()
  } catch {
    return Response.json({ ok: false }, { status: 400 })
  }

  // Honeypot: real visitors never see or fill this field.
  if (field(form, '_gotcha')) {
    return Response.json({ ok: true })
  }

  const name = field(form, 'name')
  const email = field(form, 'email')
  const phone = field(form, 'phone')
  const city = field(form, 'city')
  const service = field(form, 'service')
  const message = field(form, 'message')
  const leadSource = field(form, 'lead_source')
  const leadReferrer = field(form, 'lead_referrer')
  const leadUtm = field(form, 'lead_utm')
  const leadLanding = field(form, 'lead_landing')

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10) {
    return Response.json({ ok: false }, { status: 400 })
  }

  const lines = [
    `🛠 <b>New request — ${escapeHtml(siteConfig.shortName)}</b>`,
    '',
    `<b>Name:</b> ${escapeHtml(name)}`,
    `<b>Email:</b> ${escapeHtml(email)}`,
    phone ? `<b>Phone:</b> ${escapeHtml(phone)}` : null,
    city ? `<b>City / ZIP:</b> ${escapeHtml(city)}` : null,
    service ? `<b>Service:</b> ${escapeHtml(service)}` : null,
    '',
    escapeHtml(message),
    '',
    `<b>Source (auto):</b> ${escapeHtml(leadSource || 'Unknown')}`,
    leadReferrer ? `<b>Referrer:</b> ${escapeHtml(leadReferrer)}` : null,
    leadUtm ? `<b>UTM:</b> ${escapeHtml(leadUtm)}` : null,
    leadLanding ? `<b>Landing page:</b> ${escapeHtml(leadLanding)}` : null,
  ].filter((line) => line !== null)

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: lines.join('\n'),
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    }),
  })

  if (!res.ok) {
    console.error('Telegram sendMessage failed', res.status, await res.text())
    return Response.json({ ok: false }, { status: 502 })
  }

  await logLeadToSheet({
    date: new Date().toISOString(),
    name,
    email,
    phone,
    city,
    service,
    message,
    source: leadSource || 'Unknown',
    referrer: leadReferrer,
    utm: leadUtm,
    landing: leadLanding,
  })

  return Response.json({ ok: true })
}
