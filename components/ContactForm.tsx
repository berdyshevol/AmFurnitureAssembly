'use client'

import { useState, type FormEvent } from 'react'

import { contactFormServiceOptions } from '@/lib/config'
import { trackFormSubmission } from '@/lib/analytics'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate(form: FormData): Record<string, string> {
    const errs: Record<string, string> = {}
    const name = form.get('name') as string
    const email = form.get('email') as string
    const message = form.get('message') as string

    if (!name || name.trim().length === 0) {
      errs.name = 'Name is required'
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email address'
    }
    if (!message || message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters'
    }

    return errs
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const validationErrors = validate(formData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setStatus('loading')

    try {
      const res = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        trackFormSubmission(formData.get('service') as string)
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-[var(--radius-card)] bg-green-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-success text-2xl text-white">
          &#10003;
        </div>
        <p className="text-lg font-semibold text-primary">Thank you!</p>
        <p className="mt-1 text-sm text-secondary">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {status === 'error' && (
        <div className="rounded-[var(--radius-button)] bg-red-50 border border-error/20 px-4 py-3 text-sm text-error">
          Something went wrong. Please try again or call us.
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-primary mb-1.5">
          Name <span className="text-error">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-[var(--radius-button)] border border-border bg-white px-4 py-2.5 text-sm text-primary placeholder:text-secondary/60 outline-none focus:border-focus focus:ring-2 focus:ring-focus/20 transition-colors"
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-error">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">
          Email <span className="text-error">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-[var(--radius-button)] border border-border bg-white px-4 py-2.5 text-sm text-primary placeholder:text-secondary/60 outline-none focus:border-focus focus:ring-2 focus:ring-focus/20 transition-colors"
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-error">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1.5">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full rounded-[var(--radius-button)] border border-border bg-white px-4 py-2.5 text-sm text-primary placeholder:text-secondary/60 outline-none focus:border-focus focus:ring-2 focus:ring-focus/20 transition-colors"
          placeholder="(555) 123-4567"
        />
      </div>

      {/* Service Type */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-primary mb-1.5">
          Service Type
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-[var(--radius-button)] border border-border bg-white px-4 py-2.5 text-sm text-primary outline-none focus:border-focus focus:ring-2 focus:ring-focus/20 transition-colors"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service...
          </option>
          {contactFormServiceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary mb-1.5">
          Message <span className="text-error">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={5}
          className="w-full rounded-[var(--radius-button)] border border-border bg-white px-4 py-2.5 text-sm text-primary placeholder:text-secondary/60 outline-none focus:border-focus focus:ring-2 focus:ring-focus/20 transition-colors resize-y"
          placeholder="Describe your project..."
        />
        {errors.message && (
          <p className="mt-1 text-xs text-error">{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-[var(--radius-button)] bg-primary px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Send Request'}
      </button>
    </form>
  )
}
