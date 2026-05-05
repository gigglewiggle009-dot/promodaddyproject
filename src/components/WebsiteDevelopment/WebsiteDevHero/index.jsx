import Link from "next/link";
import { SharedLayout } from "@/components/SharedComponent";

export const WebsiteDevHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-20 text-white md:py-28">
      
      {/* Glow Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.15),_transparent_70%)]" />

      <SharedLayout>
        <div className="mx-auto max-w-4xl text-center">

          {/* Tagline */}
          <p className="mb-4 text-sm font-medium text-purple-400 sm:text-base">
            Website Development Company in India
          </p>

          {/* H1 */}
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            High-Converting{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Websites
            </span>{" "}
            That Drive Real Business Growth
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-sm text-gray-300 sm:text-base md:text-lg">
            We design and develop fast, SEO-ready, mobile-first websites that
            don’t just look good — they generate leads, increase conversions,
            and grow your business.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              GET YOUR WEBSITE BUILT
            </Link>

            <Link
              href="/portfolio"
              className="rounded-full border border-gray-600 px-6 py-3 text-sm font-semibold text-white transition hover:border-purple-400"
            >
              VIEW OUR WORK
            </Link>

          </div>

          {/* Trust Line */}
          <p className="mt-8 text-xs text-gray-400 sm:text-sm">
            500+ Websites Delivered • SEO Optimized • Lightning Fast Performance
          </p>

        </div>
      </SharedLayout>
    </section>
  );
};