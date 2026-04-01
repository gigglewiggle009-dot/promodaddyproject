"use client";

import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const comparisonData = [
  {
    factor: "Transparent Reporting",
    promodaddy: "Weekly keyword ranking updates + monthly full report",
    others: "Monthly, often vague, no ranking data",
  },
  {
    factor: "Custom Strategy",
    promodaddy: "Built specifically for your business + industry",
    others: "Same template for every client",
  },
  {
    factor: "India Market Expertise",
    promodaddy: "Deep knowledge of Indian search behavior + market",
    others: "Generic global strategies applied to India",
  },
  {
    factor: "Local SEO Strength",
    promodaddy: "Kota, Jaipur, Mumbai — we rank local businesses",
    others: "Limited local expertise",
  },
  {
    factor: "Content Included",
    promodaddy: "Blog writing included in Growth + Pro plans",
    others: "Content charged separately",
  },
  {
    factor: "Technical SEO",
    promodaddy: "Full audit + implementation included",
    others: "Audit only — fixes extra charge",
  },
  {
    factor: "No Lock-in",
    promodaddy: "Month-to-month — cancel with 30 days notice",
    others: "6-12 month contracts mandatory",
  },
  {
    factor: "Pricing",
    promodaddy: "From Rs.8,000/month — fully transparent",
    others: "Hidden charges revealed after signing",
  },
  {
    factor: "E-E-A-T Focus",
    promodaddy: "Named team, real case studies, verified results",
    others: "Anonymous agency, vague testimonials",
  },
  {
    factor: "Celebrity Experience",
    promodaddy: "Sonu Sood, Mohammad Shami — proven at national scale",
    others: "No notable client work",
  },
];

export const SeoWhyChoose = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 text-white md:py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.10),_transparent_75%)]" />

      <SharedLayout>
        <div className="relative z-10">
          {/* Heading */}
          <div className="mx-auto mb-10 max-w-5xl text-center md:mb-14">
            <h2 className="text-2xl font-bold leading-snug sm:text-3xl md:text-4xl lg:text-5xl">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Promodaddy Digital
              </span>{" "}
              for SEO in India?
            </h2>
          </div>

          {/* Same table for desktop + mobile */}
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_0_30px_rgba(139,92,246,0.06)]">
            <div className="min-w-[980px]">
              {/* Header */}
              <div className="grid grid-cols-12 border-b border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-semibold">
                <div className="col-span-3 text-white">Factor</div>

                <div className="col-span-5 flex items-center gap-2 text-white">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                    Promodaddy Digital
                  </span>
                  <CheckCircle2 size={18} className="text-purple-300" />
                </div>

                <div className="col-span-4 flex items-center gap-2 text-white">
                  <span className="text-gray-300">Other Agencies</span>
                  <XCircle size={18} className="text-red-400" />
                </div>
              </div>

              {/* Rows */}
              {comparisonData.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 items-start border-b border-white/5 px-5 py-5 transition duration-300 last:border-b-0 hover:bg-white/[0.03]"
                >
                  {/* Factor */}
                  <div className="col-span-3 pr-4 text-base font-semibold text-white">
                    {item.factor}
                  </div>

                  {/* Promodaddy */}
                  <div className="col-span-5 pr-4">
                    <div className="flex items-start gap-3 text-sm leading-7 text-gray-300">
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-purple-300"
                      />
                      <span>{item.promodaddy}</span>
                    </div>
                  </div>

                  {/* Others */}
                  <div className="col-span-4">
                    <div className="flex items-start gap-3 text-sm leading-7 text-gray-400">
                      <XCircle
                        size={18}
                        className="mt-1 shrink-0 text-red-400"
                      />
                      <span>{item.others}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile hint */}
          <p className="mt-4 text-center text-xs text-gray-500 md:hidden">
            Swipe horizontally to view the full comparison table
          </p>
        </div>
      </SharedLayout>
    </section>
  );
};

export default SeoWhyChoose;