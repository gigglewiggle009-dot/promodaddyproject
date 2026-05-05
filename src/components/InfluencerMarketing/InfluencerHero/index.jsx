import Link from "next/link";
import { ArrowRight, Users, Video, Star } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

export const InfluencerHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-20 text-white md:py-28">
      {/* Glow Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.20),_transparent_50%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.15),_transparent_45%)]" />

      <SharedLayout>
        <div className="relative mx-auto max-w-5xl text-center">
          
          {/* Tagline */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            Influencer Marketing Agency in India
          </p>

          {/* Main Heading (H1) */}
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Grow Your Brand With{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Influencer Marketing
            </span>
          </h1>

          {/* Subtext */}
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg">
            Collaborate with the right influencers, creators and celebrities to
            build trust, boost reach and generate real business results. No fake
            followers. No random promotions. Just strategy that actually works.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-3 text-sm font-semibold text-white transition hover:scale-105"
            >
              Start Campaign <ArrowRight size={18} />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:border-purple-400 hover:text-purple-400"
            >
              View All Services
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            
            <div className="flex flex-col items-center text-center">
              <Users className="mb-3 text-purple-400" size={28} />
              <h3 className="text-xl font-semibold">500+</h3>
              <p className="text-sm text-gray-400">
                Influencer Collaborations
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Video className="mb-3 text-pink-400" size={28} />
              <h3 className="text-xl font-semibold">93M+</h3>
              <p className="text-sm text-gray-400">
                Video Views Generated
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Star className="mb-3 text-indigo-400" size={28} />
              <h3 className="text-xl font-semibold">5.0 ⭐</h3>
              <p className="text-sm text-gray-400">
                Client Satisfaction
              </p>
            </div>

          </div>
        </div>
      </SharedLayout>
    </section>
  );
};