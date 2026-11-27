'use client'

import { useEffect } from 'react'

import { captureFirstTouch } from '@/lib/lead-source'

/** Records where the visitor first came from; renders nothing. */
export default function LeadSourceCapture() {
  useEffect(() => {
    captureFirstTouch()
  }, [])
  return null
}
