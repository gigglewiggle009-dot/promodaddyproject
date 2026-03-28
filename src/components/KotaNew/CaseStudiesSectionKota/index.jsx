"use client";
import React from "react";
import { SharedLayout } from "@/components/SharedComponent";
import { Target, BadgeIndianRupee, MapPinned } from "lucide-react";

const caseStudies = [
  {
    icon: <BadgeIndianRupee className="w-5 h-5" />,
    clientType: "Coaching Institute, Kota",
    challenge: "Low admissions, zero online visibility",
    result: "47 admission leads in 30 days",
    extra: "Approx. ₹340 CPL",
    accent: "from-orange-400 to-pink-500",
    line: "w-[78%]",
  },
  {
    icon: <Target className="w-5 h-5" />,
    clientType: "Real Estate Developer, Kota",
    challenge: "No qualified property inquiries online",
    result: "62 property inquiries in 45 days",
    extra: "Via Meta + Google",
    accent: "from-pink-500 to-purple-500",
    line: "w-[84%]",
  },
  {
    icon: <MapPinned className="w-5 h-5" />,
    clientType: "Local Clinic, Kota",
    challenge: "Not ranking on Google Maps",
    result: "Top 3 on Google Maps in 60 days",
    extra: "Through GMB + Local SEO",
    accent: "from-blue-400 to-cyan-400",
    line: "w-[72%]",
  },
];

export const CaseStudiesSectionKota = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 sm:py-20 lg:py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.10),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.08),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(236,72,153,0.08),transparent_35%)]" />

      <SharedLayout>
        <div className="grid grid-cols-1 xl:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-start">
          {/* LEFT */}
          <div>
            <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 mb-6">
              Case Studies
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6">
              Real Results
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                We Have Delivered
              </span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-8 max-w-2xl mb-8">
              Most agencies talk in promises. We prefer showing outcomes. These
              sample case studies represent measurable growth we help businesses
              in Kota achieve through focused digital marketing.
            </p>

            <p className="text-sm sm:text-base leading-7 text-gray-400 max-w-2xl mb-8">
              Client names are intentionally hidden for privacy. Once approved,
              exact business names and final campaign numbers can be updated
              here.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-orange-400 shrink-0" />
                <p className="text-gray-200">Approximate data for now</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-purple-400 shrink-0" />
                <p className="text-gray-200">No client names displayed</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-pink-400 shrink-0" />
                <p className="text-gray-200">Focused on lead quality</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-400 shrink-0" />
                <p className="text-gray-200">Built for trust and proof</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-5">
            {caseStudies.map((item, index) => (
              <div
                key={index}
                className="group rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-5 sm:p-6 lg:p-7 shadow-[0_10px_40px_rgba(0,0,0,0.25)] hover:bg-white/[0.06] transition duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/90 shrink-0">
                    {item.icon}
                  </div>

                  <div className="flex-1 pt-4">
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className={`h-full ${item.line} bg-gradient-to-r ${item.accent} rounded-full`}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                  <div className="flex-1">
                    <p className="text-white text-2xl sm:text-[30px] font-semibold leading-tight mb-3">
                      {item.clientType}
                    </p>

                    <p className="text-gray-400 text-sm sm:text-base leading-7 mb-4">
                      <span className="text-white font-semibold">
                        Challenge:
                      </span>{" "}
                      {item.challenge}
                    </p>

                    <p
                      className={`text-3xl sm:text-4xl font-bold leading-tight bg-gradient-to-r ${item.accent} bg-clip-text text-transparent`}
                    >
                      {item.result}
                    </p>

                    <p className="text-gray-300 mt-2 text-sm sm:text-base">
                      {item.extra}
                    </p>
                  </div>

                  <div className="lg:pl-4">
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80">
                      Approx. Results
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-center">
                <p className="text-lg font-bold text-green-400">30-60 Days</p>
                <p className="text-sm text-gray-400">Result Window</p>
              </div>
              <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-center">
                <p className="text-lg font-bold text-blue-400">Local Focus</p>
                <p className="text-sm text-gray-400">Kota Businesses</p>
              </div>
              <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-center">
                <p className="text-lg font-bold text-orange-400">Privacy Safe</p>
                <p className="text-sm text-gray-400">No Names Shown</p>
              </div>
            </div>
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};