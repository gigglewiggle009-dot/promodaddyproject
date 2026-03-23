"use client";

import { SharedLayout } from "@/components/SharedComponent";
import { TrendingUp, Star, Briefcase, BookOpen } from "lucide-react";

const stats = [
  {
    icon: <TrendingUp className="h-5 w-5 text-[#5b27f7]" />,
    value: "500+",
    label: "Businesses Grown",
  },
  {
    icon: <Star className="h-5 w-5 text-[#5b27f7]" />,
    value: "5.0",
    label: "Google Rating",
  },
  {
    icon: <Briefcase className="h-5 w-5 text-[#5b27f7]" />,
    value: "80+",
    label: "SEO Websites",
  },
  {
    icon: <BookOpen className="h-5 w-5 text-[#5b27f7]" />,
    value: "8+",
    label: "Years Experience",
  },
];

export const KotaAboutSection = () => {
  return (
    <section className="bg-black text-white py-16 sm:py-20 lg:py-24">
      <SharedLayout>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          
          {/* LEFT CONTENT */}
          <div>
            {/* label */}
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-12 bg-[#5b27f7]" />
              <p className="text-xs uppercase tracking-[0.35em] text-[#5b27f7]">
                About Us
              </p>
            </div>

            {/* heading */}
            <h2 className="font-roobert text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight">
              Your Digital Growth Partner in Kota
            </h2>

            {/* paragraph */}
            <p className="mt-6 font-assistant text-white/65 leading-7 text-base sm:text-lg">
              Promodaddy Digital is Kota&apos;s leading digital marketing agency.
              We help coaching institutes, hospitals, real estate businesses,
              restaurants, and local brands grow online with data-driven SEO,
              high-ROI Google Ads, and powerful social media marketing.
              <span className="text-[#5b27f7] font-medium">
                {" "}Kota ka apna agency
              </span>{" "}
              — jo samjhe aapka business.
            </p>

            {/* bullet points */}
            <ul className="mt-8 space-y-4">
              {[
                "Strong local Kota market expertise",
                "Customized strategies for your business",
                "Data-driven ROI tracking",
                "Transparent weekly reports",
                "Full-service under one roof",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-white/70">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#5b27f7]" />
                  <span className="font-assistant text-sm sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((item, index) => (
              <div
                key={index}
                className="border border-white/10 p-6 sm:p-7 transition hover:border-[#5b27f7]/50"
              >
                <div className="mb-4">{item.icon}</div>

                <h3 className="font-roobert text-2xl sm:text-3xl font-bold">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm text-white/60">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </SharedLayout>
    </section>
  );
};