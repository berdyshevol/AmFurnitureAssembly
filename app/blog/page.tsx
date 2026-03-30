import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { faqItems } from '@/lib/faq-data'
import FAQAccordion from '@/components/FAQAccordion'
import { pageMetadata } from '@/lib/config'

export const metadata: Metadata = pageMetadata.blog

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Blog listing */}
      <section>
        <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Blog &amp; <strong className="text-secondary">FAQ</strong>
        </h1>
        <p className="mt-2 text-secondary">
          Expert tips and answers from our professional assembly team.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-(--radius-card) border border-border bg-white transition-shadow hover:shadow-lg"
            >
              {post.image && (
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="p-5">
                <time
                  dateTime={post.date}
                  className="text-xs font-medium uppercase tracking-wide text-secondary"
                >
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <h3 className="mt-2 text-lg font-semibold leading-snug text-primary group-hover:text-focus">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ section */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 max-w-3xl">
          <FAQAccordion items={faqItems} />
        </div>
      </section>
    </main>
  )
}
