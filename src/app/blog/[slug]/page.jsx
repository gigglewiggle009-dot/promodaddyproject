import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { client, urlFor } from "@/lib/sanity";
import { SharedLayout } from "@/components/SharedComponent";

async function getPost(slug) {
  return await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{
      title,
      mainImage,
      content,
      excerpt,
      category,
      publishedAt,
      metaTitle,
      metaDescription
    }`,
    { slug }
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

export default async function BlogSlugPage({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="relative overflow-hidden bg-[#0b0b0b] pb-20 pt-32 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.12),_transparent_45%)]" />

      <SharedLayout>
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
            <Link
              href="/blog"
              className="text-sm font-medium text-purple-400 transition hover:text-purple-300"
            >
              ← Back to Blog
            </Link>
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            Digital Marketing Blog
          </p>

          <h1 className="mb-5 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            {post.title}
          </h1>

          <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-white/50">
            <span>{post.category || "Marketing Insights"}</span>

            {post.publishedAt && (
              <>
                <span>•</span>
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </>
            )}

            <span>•</span>
            <span>By Promodaddy Digital</span>
          </div>

          {post.mainImage && (
            <div className="mb-10 overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={urlFor(post.mainImage).width(1400).height(800).url()}
                alt={post.title}
                width={1400}
                height={800}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          )}

          {post.excerpt && (
            <div className="mb-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-base leading-8 text-white/75">
                {post.excerpt}
              </p>
            </div>
          )}

          <div className="mb-10 rounded-2xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 p-5">
            <p className="text-sm font-medium leading-relaxed text-white sm:text-base">
              Looking to grow your business through SEO, Google Ads, Meta Ads, or social media marketing?
              Promodaddy Digital helps brands turn traffic into leads and leads into real business growth.
            </p>
          </div>

          <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-white/80 prose-strong:text-white prose-a:text-purple-400 prose-li:text-white/80">
            <PortableText value={post.content} />
          </article>

          <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
              Need Help Growing Your Business Online?
            </h2>

            <p className="mx-auto mb-6 max-w-2xl text-white/70">
              Get expert support for SEO, Google Ads, Meta Ads, website development,
              and complete digital marketing strategy tailored to your business goals.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 px-6 py-3 font-semibold text-white transition hover:scale-[1.02]"
              >
                Get Free Consultation
              </Link>

              <Link
                href="/services"
                className="rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-purple-400 hover:text-purple-300"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </SharedLayout>
    </main>
  );
}