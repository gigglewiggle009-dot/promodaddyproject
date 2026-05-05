import { SharedLayout } from "@/components/SharedComponent";

const normalAgency = [
  "Template-based design",
  "Slow loading pages",
  "No SEO structure",
  "Random section layout",
  "No clear conversion strategy",
];

const promodaddy = [
  "Custom premium UI design",
  "Fast performance (Core Web Vitals optimized)",
  "SEO-ready structure",
  "Strategic content & layout flow",
  "Conversion-focused sections & CTAs",
];

export const WebsiteDevDifference = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-20 text-white md:py-24">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.12),_transparent_70%)]" />

      <SharedLayout>
        <div className="mx-auto max-w-6xl">

          {/* Heading */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-medium text-purple-400">
              What Makes Us Different
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              We Don’t Just Build Websites.{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                We Build Digital Sales Machines
              </span>
            </h2>
          </div>

          {/* Comparison Layout */}
          <div className="grid gap-8 md:grid-cols-2">

            {/* Left - Others */}
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="mb-5 text-sm font-semibold text-gray-400">
                Typical Agencies
              </p>

              <div className="space-y-4">
                {normalAgency.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    
                    {/* Red Dot */}
                    <span className="mt-2 h-2 w-2 rounded-full bg-red-400" />

                    <p className="text-sm text-gray-400">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom Fade */}
              <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-[#0b0b0b] to-transparent" />
            </div>

            {/* Right - Promodaddy */}
            <div className="relative rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-indigo-500/10 p-6">
              <p className="mb-5 text-sm font-semibold text-purple-300">
                Promodaddy Digital
              </p>

              <div className="space-y-4">
                {promodaddy.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    
                    {/* Gradient Dot */}
                    <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400" />

                    <p className="text-sm text-gray-200">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Glow Border Effect */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl border border-purple-400/20" />
            </div>

          </div>

        </div>
      </SharedLayout>
    </section>
  );
};