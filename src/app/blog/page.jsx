import Link from "next/link";
import Image from "next/image";
import { client, urlFor } from "@/lib/sanity";
import { SharedLayout } from "@/components/SharedComponent";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Digital Marketing Blog in India | SEO, Ads & Growth Tips ",
  description:
    "Read the latest SEO tips, Google Ads strategies, social media marketing insights, branding ideas, and digital growth articles from Promodaddy Digital.",
};

async function getBlogs() {
  const data = await client.fetch(`
    *[_type == "blog"] | order(publishedAt desc){
      _id,
      title,
      slug,
      mainImage,
      excerpt,
      category,
      publishedAt
    }
  `);

  // console.log("FINAL BLOGS:", data);
  return data;
}

const blogTopics = [
  "SEO",
  "Google Ads / PPC",
  "Meta Ads",
  "Social Media Marketing",
  "Website Development",
  "Local SEO",
  "Content Marketing",
  "Branding & Growth",
];

const serviceLinks = [
  {
    title: "SEO Services",
    href: "/seo-services",
  },
  {
    title: "Google Ads Management",
    href: "/google-ads-management",
  },
  {
    title: "Social Media Marketing",
    href: "/social-media-marketing-services",
  },
  {
    title: "Meta Ads Services",
    href: "/meta-ads-agency-india",
  },
  {
    title: "Website Development",
    href: "/website-development",
  },
  {
    title: "Local SEO",
    href: "/local-seo",
  },
];

export default async function Page() {
  const blogs = await getBlogs();
  // console.log("BLOGS:", blogs);

  return (
    <main className="relative overflow-hidden bg-[#0b0b0b] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.12),_transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.10),_transparent_35%)]" />

      <section className="relative py-20 md:py-24">
        <SharedLayout>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
              Insights & Growth
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Digital Marketing Blog{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                in India
              </span>
            </h1>

            <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
              Explore practical insights on SEO, Google Ads, Meta Ads, social media marketing,
              branding, website development, and lead generation strategies to grow your business
              with smarter digital marketing.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                SEO Tips
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                Ad Strategies
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                Website Growth
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                Social Media Insights
              </span>
            </div>
          </div>
        </SharedLayout>
      </section>

      <section className="relative pb-10">
        <SharedLayout>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
                Why Read Our Blog
              </p>

              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Useful marketing insights, not recycled internet noise
              </h2>

              <p className="mt-5 text-base leading-8 text-white/70">
                The Promodaddy Digital blog is built for businesses that want practical,
                result-focused marketing knowledge. We cover SEO, Google Ads, Meta Ads,
                branding, social media growth, local SEO, website strategy, and lead generation
                with a strong focus on what actually helps Indian businesses grow online.
              </p>

              <p className="mt-4 text-base leading-8 text-white/70">
                Whether you run a coaching institute, healthcare brand, real estate business,
                e-commerce store, local company, or service-based business, our articles are
                designed to help you understand digital strategy in a simpler and more useful way.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
                Topics We Cover
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {blogTopics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/80"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </SharedLayout>
      </section>

      <section className="relative py-10">
        <SharedLayout>
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
                Latest Articles
              </p>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Explore our latest digital marketing insights
              </h2>
            </div>
          </div>

          {blogs?.length ? (
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog) => (
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
                        className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-white/50">
                      {blog.category && (
                        <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-purple-300">
                          {blog.category}
                        </span>
                      )}

                      {blog.publishedAt && (
                        <span>
                          {new Date(blog.publishedAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      )}
                    </div>

                    <h3 className="line-clamp-2 text-xl font-semibold leading-relaxed transition group-hover:text-purple-400">
                      {blog.title}
                    </h3>

                    <p className="mt-4 line-clamp-3 text-sm leading-7 text-white/65">
                      {blog.excerpt ||
                        "Read this article to explore actionable digital marketing strategies, growth insights, and practical ideas for improving your online presence."}
                    </p>

                    <p className="mt-5 text-sm font-medium text-gray-400 transition group-hover:text-white">
                      Read article →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-12 text-center">
              <h2 className="mb-3 text-2xl font-semibold">No blogs available yet</h2>
              <p className="text-white/70">
                New marketing insights and updates will appear here soon.
              </p>
            </div>
          )}
        </SharedLayout>
      </section>

      <section className="relative py-10">
        <SharedLayout>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
              What You’ll Learn
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Practical knowledge to improve rankings, leads, and brand visibility
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {[
                "How SEO helps businesses rank higher on Google",
                "How Google Ads can generate faster leads and inquiries",
                "How social media content improves engagement and visibility",
                "How website structure affects conversions and user trust",
                "How local SEO supports maps ranking and nearby leads",
                "How branding and content improve long-term business growth",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </SharedLayout>
      </section>

      <section className="relative py-10">
        <SharedLayout>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
                Beyond The Blog
              </p>

              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Need execution, not just information?
              </h2>

              <p className="mt-5 text-base leading-8 text-white/70">
                Reading helps. Execution gets results. If you want expert support for SEO,
                Google Ads, Meta Ads, social media marketing, website development, or local SEO,
                explore our services and find the right growth solution for your business.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {serviceLinks.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 transition duration-300 hover:border-purple-400 hover:bg-white/[0.05]"
                >
                  <h3 className="text-base font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-white/55">Explore service →</p>
                </Link>
              ))}
            </div>
          </div>
        </SharedLayout>
      </section>

      <section className="relative py-16 md:py-20">
        <SharedLayout>
          <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-r from-white/[0.05] to-white/[0.02] p-8 text-center md:p-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
              Let’s Grow
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Want experts to grow your business, not just write about growth?
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/70">
              Get a free consultation from Promodaddy Digital and discover the right SEO,
              paid ads, content, and social media strategy for your business.
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
        </SharedLayout>
      </section>
    </main>
  );
}
// import React from "react";

// export const metadata = {
//   title: "Digital Marketing Blog | SEO & Branding Tips",
//   description:
//     "Explore expert insights on SEO, branding, website development, and digital marketing strategies to grow your business with PromoDaddy.",
// };

// function Page() {
//   return (
//     <div className="bg-black text-white pt-32 pb-20">
//       <div className="max-w-5xl mx-auto px-6">
//         <h1 className="text-4xl font-bold mb-6">
//           PromoDaddy Digital Marketing Blog
//         </h1>

//         <p className="mb-6 text-lg leading-8 text-gray-300">
//           Welcome to the official PromoDaddy blog – your go-to resource for
//           digital marketing strategies, branding insights, SEO techniques, and
//           business growth solutions.
//         </p>

//         <h2 className="text-2xl font-semibold mb-4">
//           What You’ll Learn From Our Blog
//         </h2>

//         <p className="mb-6 leading-8 text-gray-300">
//           Our blog covers practical and actionable insights on SEO, social
//           media marketing, paid advertising, branding strategies, and website
//           development. Whether you are a startup, local business, or growing
//           enterprise, our content is designed to help you build a stronger
//           digital presence and generate consistent leads.
//         </p>

//         <h2 className="text-2xl font-semibold mb-4">
//           SEO & Search Engine Growth
//         </h2>

//         <p className="mb-6 leading-8 text-gray-300">
//           Search Engine Optimization (SEO) is the foundation of long-term
//           online success. In our blog, we share proven SEO techniques including
//           keyword research strategies, on-page optimization tips, technical SEO
//           improvements, and link-building methods that help websites rank
//           higher on Google. We also explain how content marketing and user
//           experience directly impact search rankings and conversions.
//         </p>

//         <h2 className="text-2xl font-semibold mb-4">
//           Social Media & Paid Advertising Strategies
//         </h2>

//         <p className="mb-6 leading-8 text-gray-300">
//           Social media platforms are powerful tools for brand awareness and
//           customer engagement. We publish insights on running high-converting
//           ad campaigns, optimizing Facebook and Instagram ads, improving ad
//           creatives, targeting the right audience, and maximizing return on ad
//           spend (ROAS). Our strategies are focused on measurable performance
//           and real business growth.
//         </p>

//         <h2 className="text-2xl font-semibold mb-4">
//           Branding & Creative Marketing
//         </h2>

//         <p className="mb-6 leading-8 text-gray-300">
//           Strong branding builds trust and recognition. Through our articles,
//           you’ll learn how to develop a compelling brand identity, create
//           engaging content, design impactful marketing materials, and position
//           your business effectively in competitive markets. We focus on
//           creativity combined with strategy to ensure sustainable growth.
//         </p>

//         <h2 className="text-2xl font-semibold mb-4">
//           Website Development & Conversion Optimization
//         </h2>

//         <p className="mb-6 leading-8 text-gray-300">
//           A well-designed website is more than just visuals — it’s a conversion
//           engine. Our blog explains how website speed, user experience,
//           responsive design, landing page structure, and clear call-to-actions
//           impact customer behavior. We share best practices that help transform
//           website visitors into paying customers.
//         </p>

//         <h2 className="text-2xl font-semibold mb-4">
//           Digital Marketing Trends & Growth Strategies
//         </h2>

//         <p className="mb-6 leading-8 text-gray-300">
//           The digital landscape is constantly evolving. From AI-driven
//           marketing tools to advanced analytics and automation, we stay ahead
//           of industry trends so your business remains competitive. Our goal is
//           to simplify complex marketing strategies into easy-to-implement
//           frameworks that drive real results.
//         </p>

//         <h2 className="text-2xl font-semibold mb-4">
//           Why Follow PromoDaddy?
//         </h2>

//         <p className="leading-8 text-gray-300">
//           Our mission is to empower businesses with data-driven digital
//           marketing solutions that deliver measurable growth. Every article we
//           publish is backed by practical experience, performance insights, and
//           strategic thinking. If you’re looking to scale your business online,
//           increase brand visibility, and improve marketing ROI, you’re in the
//           right place.
//         </p>

//         <div className="mt-12 p-8 bg-zinc-900 rounded-2xl border border-zinc-800">
//           <p className="text-center text-lg font-medium">
//             🚀 Blog articles are coming soon. Stay connected for powerful digital
//             marketing insights and actionable growth strategies!
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Page;


// import React from "react";
// import { ComingSoon } from "@/components";

// export const metadata = {
//   title: "Digital Marketing Blog | SEO, Branding & Business Growth Insights – PromoDaddy",
//   description: "Check back soon for the latest updates, insights, and news from PromoDaddy Digital.",
// };

// function Page() {
//   return (
//     <div>
//       <ComingSoon />
//     </div>
//   );
// }

// export default Page;
