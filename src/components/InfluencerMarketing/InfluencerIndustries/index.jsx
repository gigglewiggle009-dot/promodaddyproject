import {
  Building2,
  Hotel,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Sparkles,
  Landmark,
  CalendarDays,
} from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const industries = [
  {
    icon: Building2,
    title: "Real Estate",
    desc: "Property launch campaigns, site visit promotions, location awareness, builder credibility and project walkthrough content with creators.",
  },
  {
    icon: Hotel,
    title: "Hotels & Hospitality",
    desc: "Room showcase reels, food promotions, travel creators, staycation campaigns, wedding venue visibility and guest experience content.",
  },
  {
    icon: GraduationCap,
    title: "Coaching & Education",
    desc: "Institute promotions, admission campaigns, student testimonials, course awareness and city-focused education influencer campaigns.",
  },
  {
    icon: Sparkles,
    title: "Fashion & Beauty",
    desc: "Product reviews, styling reels, skincare demos, salon promotions, launch campaigns and creator-led trust building.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Doctor awareness, clinic promotions, treatment explainers, patient education campaigns and local healthcare visibility.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & Ecommerce",
    desc: "Product launches, festive offers, unboxing videos, review content, creator coupons and conversion-focused promotions.",
  },
  {
    icon: Landmark,
    title: "Political Campaigns",
    desc: "Regional awareness, public image building, youth connect campaigns, event visibility and local creator-led messaging.",
  },
  {
    icon: CalendarDays,
    title: "Events & Entertainment",
    desc: "Event hype, ticket promotions, celebrity appearances, launch buzz and creator coverage before, during and after the event.",
  },
];

export const InfluencerIndustries = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-20 text-white md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.12),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.10),_transparent_45%)]" />

      <SharedLayout>
        <div className="relative">
          <div className="mb-14 max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-purple-400">
              Industries We Serve
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Influencer Campaigns for{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Real Business Categories
              </span>
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg">
              We do not use the same influencer plan for every business. A real
              estate campaign, hotel promotion and beauty launch need different
              creators, content formats and CTAs. Shocking, apparently.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]">
            {industries.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group border-b border-white/10 px-5 py-6 transition hover:bg-white/[0.04] last:border-b-0 sm:px-7 md:px-8"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-8">
                    <div className="flex items-center gap-4 md:w-[280px] md:shrink-0">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-300 transition group-hover:bg-purple-500/20">
                        <Icon size={24} />
                      </div>

                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>

                    <div className="hidden min-h-12 w-px bg-gradient-to-b from-purple-400/60 via-pink-400/30 to-transparent md:block" />

                    <p className="max-w-3xl text-sm leading-relaxed text-gray-400 sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};