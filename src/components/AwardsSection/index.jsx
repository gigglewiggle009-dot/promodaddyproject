"use client";

import React, { useState } from "react";
import { SharedLayout } from "@/components/SharedComponent";

const awards = [
  {
    year: "2024",
    title: "Glamour & Lifestyle Award",
    subtitle: "Best Social Media PR",
  },
  {
    year: "2023",
    title: "93M+ YouTube Views",
    subtitle: "Kyaa Baat Haii 2.0 Campaign",
  },
  {
    year: "2024",
    title: "1600+ Five-Star Reviews",
    subtitle: "Consistent 5.0 Google Rating",
  },
  {
    year: "2016",
    title: "5000+ Projects Delivered",
    subtitle: "Since 2016",
  },
  {
    year: "2024",
    title: "National-Level Celebrity Clients",
    subtitle: "Sonu Sood, Mohammad Shami, Rashid Khan",
  },
  {
    year: "2024",
    title: "India’s #1 Digital Agency from Kota",
    subtitle: "8+ Years Experience",
  },
];

export const AwardsSection = () => {
  const defaultActiveIndex = 1;
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  return (
    <section className="bg-black text-white py-10 sm:py-12 md:py-14 lg:py-16">
      <SharedLayout>
        <div>
          {/* Top label */}
          <p className="text-orange-500 uppercase tracking-[0.22em] text-xs sm:text-sm md:text-base font-medium mb-4">
            Recognition
          </p>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-8 sm:mb-10 md:mb-12">
            Awards & Achievements
          </h2>

          {/* Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-white/10"
            onMouseLeave={() => setActiveIndex(defaultActiveIndex)}
          >
            {awards.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`
                    relative overflow-hidden
                    px-5 sm:px-6 md:px-8 py-6 sm:py-7 md:py-8
                    border-b border-white/10
                    transition-all duration-300 ease-out
                    ${isActive ? "bg-white/[0.03]" : "bg-transparent"}
                    ${isActive ? "-translate-y-1" : "translate-y-0"}
                    ${index % 3 !== 2 ? "lg:border-r lg:border-white/10" : ""}
                    ${index % 2 !== 1 ? "md:border-r md:border-white/10 lg:border-r-0" : ""}
                  `}
                >
                  {/* soft glow */}
                  <div
                    className={`
                      pointer-events-none absolute inset-0
                      transition-opacity duration-300
                      bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.10),transparent_45%)]
                      ${isActive ? "opacity-100" : "opacity-0"}
                    `}
                  />

                  {/* subtle border highlight */}
                  <div
                    className={`
                      pointer-events-none absolute inset-0 border transition-colors duration-300
                      ${isActive ? "border-orange-500/10" : "border-transparent"}
                    `}
                  />

                  {/* orange top line */}
                  <div
                    className={`
                      relative z-10 h-[2px] bg-orange-500 mb-4
                      transition-all duration-300
                      ${isActive ? "w-14" : "w-8 sm:w-10"}
                    `}
                  />

                  {/* year */}
                  <p className="relative z-10 text-orange-500 text-sm md:text-base font-medium mb-3">
                    {item.year}
                  </p>

                  {/* title */}
                  <h3
                    className={`
                      relative z-10 text-lg sm:text-xl md:text-2xl leading-snug font-semibold mb-2
                      transition-colors duration-300
                      ${isActive ? "text-orange-500" : "text-white"}
                    `}
                  >
                    {item.title}
                  </h3>

                  {/* subtitle */}
                  <p
                    className={`
                      relative z-10 text-sm sm:text-base md:text-lg leading-relaxed
                      transition-colors duration-300
                      ${isActive ? "text-white/65" : "text-white/45"}
                    `}
                  >
                    {item.subtitle}
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