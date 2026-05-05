import { CheckCircle, Target, TrendingUp, Users } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const points = [
  {
    icon: Target,
    title: "Targeted Creator Selection",
    desc: "We do not randomly select influencers just because they have followers. We match creators with your audience, location, industry and campaign goal.",
  },
  {
    icon: Users,
    title: "Real Audience Reach",
    desc: "We focus on influencers with relevant audiences, better engagement and content quality instead of vanity numbers that look nice and do nothing.",
  },
  {
    icon: TrendingUp,
    title: "Campaigns Built for Results",
    desc: "Every influencer campaign is planned with a clear CTA, content direction and tracking approach so your brand gets measurable value.",
  },
];

export const InfluencerAbout = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-20 text-white md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(139,92,246,0.12),_transparent_45%)]" />

      <SharedLayout>
        <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          {/* Left Content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-purple-400">
              About Influencer Marketing
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Influence Is Powerful Only When{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Strategy Comes First
              </span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-gray-300 sm:text-lg">
              Influencer marketing is not just paying someone to post your
              product. That is how brands burn money and call it “branding”,
              because apparently numbers on a screen are now emotional support.
            </p>

            <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
              At Promodaddy Digital, we plan influencer campaigns that connect
              your business with the right creators, right audience and right
              message. Whether you want awareness, enquiries, sales or product
              visibility, we build campaigns that are practical, trackable and
              brand-safe.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Instagram, YouTube and regional creator campaigns",
                "Micro, macro and celebrity influencer collaborations",
                "Content planning, creator coordination and campaign tracking",
              ].map((item, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle
                    size={20}
                    className="mt-1 shrink-0 text-purple-400"
                  />
                  <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Cards */}
          <div className="space-y-5">
            {points.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-purple-400/50 hover:bg-white/[0.06]"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};