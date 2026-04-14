import { sendGAEvent } from '@next/third-parties/google'

export function trackFormSubmission(service?: string) {
  sendGAEvent('event', 'generate_lead', {
    event_category: 'contact',
    event_label: service || 'general',
  })
}

export function trackCTAClick(slot: string) {
  sendGAEvent('event', 'cta_click', {
    event_category: 'engagement',
    event_label: slot,
  })
}
