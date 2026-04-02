"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Share2 } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";
import SocialMediaImg from "@/assets/socialmediaservices.png";

export const SocialMediaHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] text-white pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.16),_transparent_38%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.10),_transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(91,39,247,0.04),transparent_25%,transparent_75%,rgba(91,39,247,0.03))]" />

      <SharedLayout>
        <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="max-w-[590px]">
            {/* Breadcrumb */}
            <div className="mb-5 flex flex-wrap items-center gap-2 text-sm text-gray-400">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <ChevronRight size={16} className="text-gray-600" />
              <Link href="/services" className="transition hover:text-white">
                Services
              </Link>
              <ChevronRight size={16} className="text-gray-600" />
              <span className="text-purple-300">Social Media Marketing</span>
            </div>

            {/* Badge */}
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-purple-500/30 bg-white/[0.03] px-4 py-2 text-sm font-medium text-purple-300 shadow-[0_0_24px_rgba(91,39,247,0.10)]">
              <Share2 size={16} />
              Social Media Marketing Services India
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-[64px]">
              Social Media Marketing Services in India{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Build Your Brand,
              </span>{" "}
              Grow Your Audience, Generate Leads
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-[540px] text-base leading-8 text-gray-300 sm:text-lg">
              India has 450+ million social media users spending hours daily.
              Promodaddy Digital helps businesses convert that attention into
              real growth through content strategy, reels, paid ads, and
              community management so your brand grows every single day.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-w-[220px] items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(91,39,247,0.25)] transition duration-300 hover:-translate-y-0.5 hover:from-purple-500 hover:to-indigo-500"
              >
                Get Free Consultation
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/project"
                className="inline-flex min-w-[190px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-purple-500/40 hover:bg-white/[0.05]"
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px]">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-[120px]" />
              <div className="absolute right-6 top-6 h-[140px] w-[140px] rounded-full bg-indigo-500/15 blur-[80px]" />

              {/* Image wrapper */}
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-3 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
                <Image
                  src={SocialMediaImg}
                  alt="Social Media Marketing Services"
                  priority
                  className="h-auto w-full rounded-[20px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};