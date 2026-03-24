"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const stats = [
  { value: "80+", label: "SEO Optimized Websites" },
  { value: "500+", label: "Satisfied Clients" },
  { value: "8+", label: "Years Experience" },
  { value: "5.0", label: "Google Rating" },
];

export const KotaHeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-full w-[45%] bg-[radial-gradient(circle_at_center,rgba(91,39,247,0.18),transparent_65%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.98),rgba(0,0,0,0.94),rgba(12,10,20,0.88))]" />
      </div>

      <div className="relative py-20 sm:py-16 md:py-20 lg:py-24">
        <SharedLayout>
          {/* Top label */}
          <div className="mb-8 flex items-center gap-4">
            <span className="h-[2px] w-12 bg-[#5b27f7] sm:w-14" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#5b27f7] sm:text-xs sm:tracking-[0.38em]">
              Digital Marketing Agency in Kota
            </p>
          </div>

          {/* Heading + content */}
          <div className="max-w-[920px]">
            <h1 className="font-roobert text-4xl font-extrabold leading-[1] tracking-tight sm:text-5xl md:text-6xl lg:text-[88px]">
              Best Digital Marketing
              <br />
              <span className="text-[#5b27f7]">Agency in Kota</span>
            </h1>

            <p className="mt-6 max-w-[760px] font-assistant text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              Trusted by businesses across Kota to grow visibility, generate
              quality leads, and build a stronger digital presence with
              result-driven marketing strategies.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row">
              <Link
                href="/service-ads"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-none bg-[#5b27f7] px-6 text-sm font-semibold text-white transition hover:opacity-90 sm:h-16 sm:px-8 sm:text-lg"
              >
                Get Free Consultation
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>

              <a
                href="tel:+918690522210"
                className="inline-flex h-14 items-center justify-center gap-3 border border-white/15 px-6 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5 sm:h-16 sm:px-8 sm:text-lg"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                Call Now
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-14 border-t border-white/10 sm:mt-16" />

          {/* Stats */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 pt-8 sm:pt-10 md:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label}>
                <h3 className="font-roobert text-3xl font-bold text-[#5b27f7] sm:text-4xl lg:text-[52px]">
                  {item.value}
                </h3>
                <p className="mt-2 font-assistant text-sm text-white/55 sm:mt-3 sm:text-base">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </SharedLayout>
      </div>
    </section>
  );
};