import { CheckCircle, XCircle } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const comparisonData = [
  {
    factor: "Creator Selection",
    promodaddy:
      "Influencers selected by niche, audience quality, location, content style and brand fit",
    others: "Random creators selected only by follower count",
  },
  {
    factor: "Campaign Strategy",
    promodaddy:
      "Clear campaign plan with content format, CTA, posting timeline and tracking",
    others: "Basic posting without strong direction",
  },
  {
    factor: "Influencer Types",
    promodaddy:
      "Micro, macro, regional creators, YouTubers and celebrity influencers",
    others: "Limited creator network",
  },
  {
    factor: "Platform Coverage",
    promodaddy:
      "Instagram, YouTube, Reels, Shorts and regional campaigns",
    others: "Mostly Instagram only",
  },
  {
    factor: "Lead Generation",
    promodaddy:
      "Campaigns with WhatsApp, landing page, CTA and enquiry funnel",
    others: "Views and likes only",
  },
  {
    factor: "Reporting",
    promodaddy:
      "Detailed tracking: reach, engagement, clicks, enquiries",
    others: "Basic screenshots or numbers",
  },
  {
    factor: "Local + National Reach",
    promodaddy:
      "City-based + India-wide influencer campaigns",
    others: "Weak local targeting",
  },
];

export const InfluencerWhyUs = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-20 text-white md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.12),_transparent_45%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.08),_transparent_50%)]" />

      <SharedLayout>
        <div className="relative">
          <div className="mx-auto mb-14 max-w-5xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-purple-400">
              Why Choose Promodaddy
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Why Brands Prefer{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Promodaddy Digital
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg">
              Influencer marketing is not about random posts. The difference is
              in strategy, creator selection and real business outcomes.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.03]">
            <table className="w-full min-w-[900px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="px-6 py-5 text-sm font-semibold">Factor</th>

                  <th className="px-6 py-5 text-sm font-semibold text-purple-300">
                    <span className="inline-flex items-center gap-2">
                      Promodaddy Digital
                      <CheckCircle size={18} className="text-purple-400" />
                    </span>
                  </th>

                  <th className="px-6 py-5 text-sm font-semibold text-gray-300">
                    <span className="inline-flex items-center gap-2">
                      Other Agencies
                      <XCircle size={18} className="text-pink-400" />
                    </span>
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparisonData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/10 last:border-b-0 hover:bg-white/[0.04]"
                  >
                    <td className="px-6 py-6 font-semibold">
                      {item.factor}
                    </td>

                    <td className="px-6 py-6 text-gray-100">
                      {item.promodaddy}
                    </td>

                    <td className="px-6 py-6 text-gray-400">
                      {item.others}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};