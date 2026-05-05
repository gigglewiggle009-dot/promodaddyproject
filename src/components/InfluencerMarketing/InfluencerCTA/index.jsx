import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

export const InfluencerCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-20 text-white md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.16),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.08),_transparent_50%)]" />

      <SharedLayout>
        <div className="relative mx-auto max-w-6xl text-center">
          <h2 className="mx-auto max-w-5xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Ready to Grow Your Brand Through{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Influencer Marketing?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg">
            Get a custom influencer marketing plan for your brand. We’ll help
            you choose the right creators, content format, campaign message and
            lead flow instead of just throwing money at followers like society
            apparently agreed was normal.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 px-8 py-4 text-sm font-semibold text-white shadow-[0_0_35px_rgba(139,92,246,0.35)] transition hover:scale-105 sm:text-base"
            >
              Get Free Influencer Strategy →
            </Link>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-purple-400/30 bg-purple-500/10 text-purple-300">
                <Phone size={22} />
              </div>

              <p className="text-sm leading-relaxed text-gray-200 sm:text-base">
                +91 9602089182
                <br />
                +91 8690522210
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-purple-400/30 bg-purple-500/10 text-purple-300">
                <Mail size={22} />
              </div>

              <p className="text-sm leading-relaxed text-gray-200 sm:text-base">
                promodaddydigital@gmail.com
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-purple-400/30 bg-purple-500/10 text-purple-300">
                <MapPin size={22} />
              </div>

              <p className="text-sm leading-relaxed text-gray-200 sm:text-base">
                Mahaveer Nagar Vistar Yojana,
                <br />
                Kota, Rajasthan - 324005
              </p>
            </div>
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};