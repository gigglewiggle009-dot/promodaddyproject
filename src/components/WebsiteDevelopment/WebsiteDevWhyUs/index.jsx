import { SharedLayout } from "@/components/SharedComponent";
import {
  Search,
  Smartphone,
  Gauge,
  MousePointerClick,
  Sparkles,
  Layers,
} from "lucide-react";

const reasons = [
  {
    icon: Search,
    title: "SEO-Ready Structure",
    desc: "Clean headings, metadata-friendly sections, schema-ready layout and search-friendly page architecture.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    desc: "Smooth responsive experience across mobile, tablet and desktop without layout drama.",
  },
  {
    icon: Gauge,
    title: "Fast Loading Speed",
    desc: "Lightweight sections, optimized code and performance-focused development for better user experience.",
  },
  {
    icon: MousePointerClick,
    title: "Conversion-Focused Layout",
    desc: "Every section guides visitors toward enquiry, WhatsApp, calls or purchase action.",
  },
  {
    icon: Sparkles,
    title: "Custom Premium UI",
    desc: "No boring template look. Your website is designed around your brand, industry and goals.",
  },
  {
    icon: Layers,
    title: "Scalable Development",
    desc: "Built to grow with blogs, landing pages, service pages, CMS and future features.",
  },
];

export const WebsiteDevWhyUs = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-20 text-white md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(236,72,153,0.14),_transparent_65%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-purple-500/10 to-transparent" />

      <SharedLayout>
        <div className="mx-auto max-w-6xl">
          {/* Top Heading */}
          <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-medium text-purple-400">
                Why Choose Promodaddy
              </p>

              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Websites Built for{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                  Performance, Leads & Growth
                </span>
              </h2>
            </div>

            <p className="text-sm leading-7 text-gray-300 sm:text-base">
              A good website is not just about pretty sections and moving
              gradients. We build websites that support your business goals,
              load fast, rank better and help visitors take action.
            </p>
          </div>

          {/* Proof Strip */}
          <div className="mb-12 grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] sm:grid-cols-3">
            <div className="border-b border-white/10 p-6 sm:border-b-0 sm:border-r">
              <h3 className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-4xl font-bold text-transparent">
                500+
              </h3>
              <p className="mt-2 text-sm text-gray-400">Websites Delivered</p>
            </div>

            <div className="border-b border-white/10 p-6 sm:border-b-0 sm:border-r">
              <h3 className="bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-4xl font-bold text-transparent">
                12+
              </h3>
              <p className="mt-2 text-sm text-gray-400">Years Experience</p>
            </div>

            <div className="p-6">
              <h3 className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-4xl font-bold text-transparent">
                5.0★
              </h3>
              <p className="mt-2 text-sm text-gray-400">Client Rating</p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-purple-400/40 hover:bg-white/[0.07]"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-purple-500/10 blur-2xl transition group-hover:bg-pink-500/20" />

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/30 bg-purple-500/10 text-purple-300">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {item.desc}
                  </p>

                  <span className="mt-6 block h-[2px] w-10 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 transition-all duration-300 group-hover:w-24" />
                </div>
              );
            })}
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};