"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const points = [
  "India has 450+ million social media users – 3rd largest in the world",
  "Average Indian spends 3.5 hours daily on social platforms",
  "67% of Indian consumers discover new brands on Instagram",
  "Reels on Instagram get 2–3x more reach than static posts in India",
  "87% of B2B decision makers in India use LinkedIn for professional research",
  "YouTube is India’s #1 platform for product research before purchase",
];

export const SocialMediaWhyImportant = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-16 text-white sm:py-20 lg:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.10),_transparent_70%)]" />

      <SharedLayout>
        <div className="relative z-10">
          {/* Heading */}
          <div className="max-w-5xl">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Why Social Media Marketing Is{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                    Non-Negotiable
                </span>{" "}
                for Indian Businesses
                </h2>

            <p className="mt-6 max-w-4xl text-base leading-8 text-gray-300 sm:text-lg">
              In 2025, social media is not just a marketing channel, it is where
              your customers spend most of their time. Whether you are a real
              estate developer showcasing a new project, a hotel promoting
              weekend packages, or a local business building brand awareness,
              social media marketing services in India deliver unmatched reach
              at a fraction of traditional advertising cost.
            </p>
          </div>

          {/* Cards */}
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {points.map((point, index) => (
                <div
                key={index}
                className="flex items-start gap-4 rounded-1xl border border-purple-500/20 bg-white/[0.02] p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-white/[0.04] hover:shadow-[0_10px_30px_rgba(139,92,246,0.12)]"
                >
                {/* Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-purple-400/30 bg-purple-500/10">
                    <CheckCircle2 size={18} className="text-purple-400" />
                </div>

                {/* Text */}
                <p className="text-sm leading-7 text-gray-200 sm:text-base">
                    {point}
                </p>
                </div>
            ))}
            </div>

          {/* Bottom card */}
          <div className="mt-12 rounded-1xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm sm:p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Why Choose a{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Social Media Agency
            </span>{" "}
            in India Over Managing It Yourself
            </h3>

            <p className="mt-5 max-w-5xl text-base leading-8 text-gray-300 sm:text-lg">
              Many businesses try to manage social media in-house and struggle
              with consistency, creative quality, and strategy. A dedicated
              social media agency in India brings platform expertise, content
              production, and data-driven strategy that in-house teams cannot
              match. Complete social media management in India means more than
              posting. It includes strategy, graphic design, caption writing,
              hashtag research, community management, paid promotion, and monthly
              analytics, all coordinated for maximum growth.
            </p>
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};