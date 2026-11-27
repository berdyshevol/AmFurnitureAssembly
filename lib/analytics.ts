import { sendGAEvent } from '@next/third-parties/google'

export function trackFormSubmission(service?: string, leadSource?: string, heardFrom?: string) {
  sendGAEvent('event', 'generate_lead', {
    event_category: 'contact',
    event_label: service || 'general',
    lead_source: leadSource || 'Unknown',
    heard_from: heardFrom || 'not answered',
  })
}

export function trackCTAClick(slot: string) {
  sendGAEvent('event', 'cta_click', {
    event_category: 'engagement',
    event_label: slot,
  })
}

export function trackPhoneClick(slot: string) {
  sendGAEvent('event', 'phone_call_click', {
    event_category: 'contact',
    event_label: slot,
  })
}
