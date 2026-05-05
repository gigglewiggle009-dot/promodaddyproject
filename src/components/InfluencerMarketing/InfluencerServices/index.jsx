import {
  Instagram,
  Youtube,
  Star,
  Users,
  Megaphone,
  ShoppingBag,
  MapPin,
  TrendingUp,
} from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const services = [
  {
    icon: Instagram,
    title: "Instagram Influencer Marketing",
    desc: "Reels, stories, posts and creator-led campaigns designed to build visibility, engagement and enquiries.",
  },
  {
    icon: Youtube,
    title: "YouTube Creator Collaborations",
    desc: "Long-form videos, shorts, reviews, integrations and campaign content with relevant YouTube creators.",
  },
  {
    icon: Star,
    title: "Celebrity Influencer Campaigns",
    desc: "Premium celebrity collaborations for brand trust, product launches, events and high-impact awareness.",
  },
  {
    icon: Users,
    title: "Micro Influencer Campaigns",
    desc: "Local and niche creator campaigns for brands that want targeted reach without burning money for vanity followers.",
  },
  {
    icon: Megaphone,
    title: "Brand Awareness Campaigns",
    desc: "Strategic influencer campaigns to increase recall, social proof and audience trust across digital platforms.",
  },
  {
    icon: ShoppingBag,
    title: "Product Launch Promotions",
    desc: "Creator-led product launch campaigns for beauty, fashion, ecommerce, hospitality, education and lifestyle brands.",
  },
  {
    icon: MapPin,
    title: "Regional Creator Marketing",
    desc: "City-wise and language-based influencer campaigns for local markets, regional audiences and location-focused brands.",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation Campaigns",
    desc: "Influencer campaigns planned with CTA, WhatsApp funnel, landing page or enquiry flow for measurable business response.",
  },
];

export const InfluencerServices = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-20 text-white md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.10),_transparent_60%)]" />

      <SharedLayout>
        <div className="relative">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-purple-400">
              Our Influencer Marketing Services
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Campaigns Built With{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                The Right Creators
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg">
              From Instagram creators to YouTube influencers and celebrity
              campaigns, we help your brand reach people who actually care.
              Strange concept, yes, but useful.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:bg-white/[0.06]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 text-purple-300">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-lg font-semibold leading-snug text-white">
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