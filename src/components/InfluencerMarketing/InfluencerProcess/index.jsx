import { Search, ListChecks, PenTool, Radio, BarChart3 } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const steps = [
  {
    icon: Search,
    title: "Brand & Audience Study",
    desc: "We understand your business, product, target audience, location, budget and campaign objective before touching any creator list.",
  },
  {
    icon: ListChecks,
    title: "Influencer Shortlisting",
    desc: "We shortlist creators based on niche, audience quality, engagement, content style, location fit and brand relevance.",
  },
  {
    icon: PenTool,
    title: "Content Planning",
    desc: "We define campaign message, reel ideas, talking points, offer, CTA, deliverables and posting timeline.",
  },
  {
    icon: Radio,
    title: "Campaign Execution",
    desc: "We coordinate with influencers, manage approvals, track posting and make sure the campaign does not become random internet noise.",
  },
  {
    icon: BarChart3,
    title: "Tracking & Reporting",
    desc: "We measure reach, engagement, clicks, enquiries, content response and campaign learnings for future improvement.",
  },
];

export const InfluencerProcess = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-20 text-white md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.10),_transparent_65%)]" />

      <SharedLayout>
        <div className="relative">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-purple-400">
              Our Process
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              How We Build{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Influencer Campaigns
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg">
              A good influencer campaign needs planning, creator fit, content
              direction and tracking. Otherwise it is just paying someone to
              post and praying to the algorithm, which is not a strategy.
            </p>
          </div>

          <div className="relative mx-auto max-w-5xl">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-purple-400 via-pink-400 to-transparent md:block" />

            <div className="space-y-8">
              {steps.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="relative flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-purple-400/50 hover:bg-white/[0.06] md:ml-16 md:flex-row md:items-start md:p-7"
                  >
                    <div className="absolute -left-[74px] top-7 hidden h-12 w-12 items-center justify-center rounded-full border border-purple-400/50 bg-[#0b0b0b] text-purple-300 md:flex">
                      <Icon size={22} />
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-300 md:hidden">
                      <Icon size={22} />
                    </div>

                    <div className="md:w-24 md:shrink-0">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-400">
                        Step {index + 1}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-400 sm:text-base">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};