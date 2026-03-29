import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: `${post.title} | AM Furniture Assembly`,
    description: post.excerpt,
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm font-medium text-secondary transition-colors hover:text-primary"
      >
        &larr; Back to Blog
      </Link>

      <article className="mt-8">
        <header>
          <time
            dateTime={post.date}
            className="text-sm font-medium uppercase tracking-wide text-secondary"
          >
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {post.title}
          </h1>
        </header>

        <div className="prose-custom mt-10">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  )
}
