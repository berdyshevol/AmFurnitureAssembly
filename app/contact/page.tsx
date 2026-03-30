import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Contact Us | AM Furniture Assembly',
  description:
    'Get a free quote for furniture assembly in Denton, TX. Contact AM Furniture Assembly by phone, email, or our online form.',
}

export default function ContactPage() {
  return (
    <>
      {/* ── Mobile-only: simplified call/text ── */}
      <div className="md:hidden">
        {/* Dark hero header */}
        <section className="bg-primary px-6 py-16 text-center text-white">
          <p className="text-xs uppercase tracking-[0.2em] opacity-70">
            {siteConfig.shortName}
          </p>
          <h1 className="mt-3 text-3xl font-light leading-tight">
            Ready to <span className="font-bold">Start?</span>
          </h1>
          <p className="mt-2 text-sm opacity-60">One tap away</p>
        </section>

        {/* Content: phone + buttons */}
        <section className="px-6 py-10 text-center">
          <p className="text-3xl font-bold text-primary">
            {siteConfig.phone}
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={siteConfig.phoneTel}
              className="block w-full rounded-[var(--radius-button)] bg-primary px-6 py-4 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Call Now
            </a>
            <a
              href={siteConfig.smsTel}
              className="block w-full rounded-[var(--radius-button)] border-2 border-primary px-6 py-4 text-center text-sm font-semibold text-primary transition-opacity hover:opacity-80"
            >
              Send a Text
            </a>
          </div>

          <div className="mt-8 space-y-1 text-xs text-secondary">
            <p>{siteConfig.hours.weekdays}</p>
            <p>{siteConfig.hours.saturday}</p>
            <p>{siteConfig.hours.sunday}</p>
            <p className="mt-2">{siteConfig.location}</p>
          </div>
        </section>
      </div>

      {/* ── Desktop/tablet: existing layout ── */}
      <div className="hidden md:block">
      {/* Hero */}
      <section className="bg-background py-20 px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-light text-primary leading-tight">
            Get a <span className="font-bold">Free Quote</span>
          </h1>
          <p className="mt-4 text-lg text-secondary">
            Tell us about your project and we&apos;ll get back to you with a
            free estimate
          </p>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-5xl flex flex-col lg:flex-row gap-10">
          {/* Left — Form */}
          <div className="lg:w-2/3">
            <ContactForm />
          </div>

          {/* Right — Info Card */}
          <div className="lg:w-1/3">
            <div className="rounded-[var(--radius-card)] bg-[#f8f9fa] p-6 sm:p-8">
              {/* Contact Info */}
              <h3 className="text-lg font-bold text-primary">Contact Info</h3>

              <ul className="mt-4 space-y-4 text-sm text-secondary">
                <li className="flex items-start gap-3">
                  {/* Phone icon */}
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  <a
                    href={siteConfig.phoneTel}
                    className="hover:text-primary transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  {/* Email icon */}
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-primary transition-colors break-all"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  {/* Location icon */}
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <span>{siteConfig.location}</span>
                </li>
              </ul>

              {/* Business Hours */}
              <h3 className="mt-8 text-lg font-bold text-primary">
                Business Hours
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-secondary">
                <li className="flex justify-between">
                  <span>Mon &ndash; Fri</span>
                  <span>8am &ndash; 7pm</span>
                </li>
                <li className="flex justify-between">
                  <span>Sat</span>
                  <span>9am &ndash; 5pm</span>
                </li>
                <li className="flex justify-between">
                  <span>Sun</span>
                  <span>By appointment</span>
                </li>
              </ul>

              {/* Payment Methods */}
              <h3 className="mt-8 text-lg font-bold text-primary">
                Payment Methods
              </h3>
              <p className="mt-4 text-sm text-secondary">
                {siteConfig.payment.join(', ')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call CTA */}
      <section className="py-12 px-4 text-center">
        <p className="text-secondary">
          Prefer to call? Reach us directly
        </p>
        <a
          href={siteConfig.phoneTel}
          className="mt-3 inline-block text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
        >
          {siteConfig.phone}
        </a>
      </section>
      </div>
    </>
  )
}
