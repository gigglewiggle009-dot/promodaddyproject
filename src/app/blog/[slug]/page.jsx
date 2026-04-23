import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { client, urlFor } from "@/lib/sanity";
import { SharedLayout } from "@/components/SharedComponent";

export const dynamic = "force-dynamic";
export const revalidate = 0;

async function getPost(slug) {
  return client.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      mainImage,
      content,
      excerpt,
      category,
      publishedAt,
      metaTitle,
      metaDescription
    }`,
    { slug },
    { cache: "no-store" }
  );
}

async function getRelatedBlogs(currentSlug, category) {
  if (!category) return [];

  return client.fetch(
    `*[_type == "blog" && defined(slug.current) && slug.current != $slug && category == $category] | order(publishedAt desc)[0...3]{
      _id,
      title,
      slug,
      mainImage,
      excerpt,
      category,
      publishedAt
    }`,
    { slug: currentSlug, category },
    { cache: "no-store" }
  );
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: "Blog Not Found | Promodaddy Digital",
      description: "The requested blog could not be found.",
    };
  }

  return {
    title: post.metaTitle || `${post.title} | Promodaddy Digital`,
    description:
      post.metaDescription ||
      post.excerpt ||
      "Read the latest digital marketing insights from Promodaddy Digital.",
  };
}

const portableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="mt-10 mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-10 mb-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-3 text-xl font-semibold leading-tight text-white sm:text-2xl">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mb-5 text-base leading-8 text-white/80 sm:text-lg">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-purple-500 pl-4 italic text-white/75">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 ml-5 list-disc space-y-2 text-base leading-8 text-white/80 sm:text-lg">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 ml-5 list-decimal space-y-2 text-base leading-8 text-white/80 sm:text-lg">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-white/90">{children}</em>,
    link: ({ children, value }) => {
      const rel = !value?.href?.startsWith("/") ? "noreferrer noopener" : undefined;
      return (
        <a
          href={value?.href}
          rel={rel}
          target={!value?.href?.startsWith("/") ? "_blank" : "_self"}
          className="font-medium text-purple-400 underline underline-offset-4 transition hover:text-purple-300"
        >
          {children}
        </a>
      );
    },
  },
};

export default async function BlogSlugPage({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const relatedBlogs = await getRelatedBlogs(params.slug, post.category);

  return (
    <main className="relative overflow-hidden bg-[#0b0b0b] pb-20 pt-32 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.12),_transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.08),_transparent_35%)]" />

      <SharedLayout>
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-sm font-medium text-purple-400 transition hover:text-purple-300"
            >
              ← Back to Blog
            </Link>
          </div>

          <div className="mb-8">
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-white/50 sm:text-sm">
              {post.category && (
                <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-purple-300">
                  {post.category}
                </span>
              )}

              {post.publishedAt && (
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              )}
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
                {post.excerpt}
              </p>
            )}
          </div>

          {post.mainImage && (
            <div className="mb-10 overflow-hidden rounded-3xl border border-white/10">
              <Image
                src={urlFor(post.mainImage).width(1400).height(800).url()}
                alt={post.title}
                width={1400}
                height={800}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          )}

          <div className="mb-10 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 p-6 sm:p-7">
            <p className="text-sm font-medium leading-7 text-white sm:text-base">
              Want better SEO, Google Ads, Meta Ads, and social media results for your business?
              Promodaddy Digital helps brands turn traffic into leads and leads into measurable growth.
            </p>
          </div>

          <article className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 md:p-10">
            <PortableText
              value={post.content}
              components={portableTextComponents}
            />
          </article>

          {relatedBlogs?.length > 0 && (
            <section className="mt-16">
              <div className="mb-8">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
                  Related Articles
                </p>
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Read more insights like this
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedBlogs.map((blog) => (
                  <Link
                    key={blog._id}
                    href={`/blog/${blog.slug.current}`}
                    className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition duration-300 hover:-translate-y-1 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                  >
                    {blog.mainImage && (
                      <div className="overflow-hidden">
                        <Image
                          src={urlFor(blog.mainImage).width(800).height(500).url()}
                          alt={blog.title}
                          width={800}
                          height={500}
                          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}

                    <div className="p-5">
                      <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-white/50">
                        {blog.category && (
                          <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-purple-300">
                            {blog.category}
                          </span>
                        )}
                      </div>

                      <h3 className="line-clamp-2 text-lg font-semibold leading-relaxed transition group-hover:text-purple-400">
                        {blog.title}
                      </h3>

                      <p className="mt-3 line-clamp-3 text-sm leading-7 text-white/65">
                        {blog.excerpt ||
                          "Read this article for more digital marketing insights and growth strategies."}
                      </p>

                      <p className="mt-4 text-sm font-medium text-gray-400 transition group-hover:text-white">
                        Read article →
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className="mt-16">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center md:p-12">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
                Let’s Grow
              </p>

              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Need help growing your business online?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70">
                Get expert support for SEO, Google Ads, Meta Ads, website development,
                and complete digital marketing strategy tailored to your business goals.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 px-7 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
                >
                  Get Free Consultation
                </Link>

                <Link
                  href="/services"
                  className="rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white/85 transition hover:border-purple-400 hover:text-white"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </section>
        </div>
      </SharedLayout>
    </main>
  );
}