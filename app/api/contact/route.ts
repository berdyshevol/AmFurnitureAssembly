import { siteConfig } from '@/lib/config'

const MAX_FIELD_LENGTH = 2000

function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function field(form: FormData, name: string): string {
  const value = form.get(name)
  return typeof value === 'string' ? value.trim().slice(0, MAX_FIELD_LENGTH) : ''
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
  const service = field(form, 'service')
  const message = field(form, 'message')

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10) {
    return Response.json({ ok: false }, { status: 400 })
  }

  const lines = [
    `🛠 <b>New request — ${escapeHtml(siteConfig.shortName)}</b>`,
    '',
    `<b>Name:</b> ${escapeHtml(name)}`,
    `<b>Email:</b> ${escapeHtml(email)}`,
    phone ? `<b>Phone:</b> ${escapeHtml(phone)}` : null,
    service ? `<b>Service:</b> ${escapeHtml(service)}` : null,
    '',
    escapeHtml(message),
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

  return Response.json({ ok: true })
}
