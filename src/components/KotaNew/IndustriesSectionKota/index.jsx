"use client";

import React, { useEffect, useRef } from "react";
import ecommerceImg from "@/assets/ecommerce.png";
import healthcareImg from "@/assets/healthcare.png";
import realEstateImg from "@/assets/real-estate.png";
import educationImg from "@/assets/education.png";
import hospitalityImg from "@/assets/hospitality.png";
import electionImg from "@/assets/election.png";
import { SharedLayout } from "@/components/SharedComponent";

export const IndustriesSectionKota = () => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  const industries = [
    {
      title: "E-Commerce",
      desc: "Helping online stores increase traffic, conversions, and sales through SEO, Google Ads, and performance marketing.",
      img: ecommerceImg,
    },
    {
      title: "Healthcare",
      desc: "Driving patient inquiries and visibility for clinics, hospitals, and healthcare professionals in Kota.",
      img: healthcareImg,
    },
    {
      title: "Real Estate",
      desc: "Generating high-quality property leads using targeted ads and location-based SEO strategies.",
      img: realEstateImg,
    },
    {
      title: "Education & Coaching",
      desc: "Kota is India's coaching capital. We help coaching institutes get more admissions through Google Ads, YouTube, and local SEO — at the lowest cost per lead.",
      img: educationImg,
      highlight: true,
    },
    {
      title: "Hospitality",
      desc: "Boosting bookings and brand visibility for hotels and restaurants through digital marketing.",
      img: hospitalityImg,
    },
    {
      title: "Political Campaigns",
      desc: "End-to-end digital election campaigns — social media, video content, ground surveys, and targeted ads.",
      img: electionImg,
    },
  ];

  // Duplicate for infinite effect
  const loopData = [...industries, ...industries];

  useEffect(() => {
    const container = scrollRef.current;
    let speed = 0.5;

    const scroll = () => {
      if (!container) return;

      container.scrollLeft += speed;

      // reset scroll for infinite loop
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  // Pause on hover
  const handleMouseEnter = () => {
    cancelAnimationFrame(animationRef.current);
  };

  const handleMouseLeave = () => {
    animationRef.current = requestAnimationFrame(() => {
      const container = scrollRef.current;
      if (!container) return;

      const scroll = () => {
        container.scrollLeft += 0.5;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
        animationRef.current = requestAnimationFrame(scroll);
      };

      scroll();
    });
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#0c0f14] text-white">
      <SharedLayout>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-10 sm:mb-12 text-center">
          Industries We Serve
        </h2>

        <div
          ref={scrollRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
        >
          {loopData.map((item, i) => (
            <div
              key={i}
              className={`min-w-[260px] sm:min-w-[280px] rounded-xl p-5 sm:p-6 text-center shadow-lg transition duration-300 hover:-translate-y-2 ${
                item.highlight
                  ? "bg-gradient-to-br from-purple-700 to-pink-600 border border-purple-400 scale-105"
                  : "bg-black border border-gray-700 hover:shadow-2xl"
              }`}
            >
              {/* IMAGE */}
              <div className="w-full h-[100px] sm:h-[120px] mb-4">
                <img
                  src={item.img.src}
                  alt={`${item.title} Digital Marketing`}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-white">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  item.highlight ? "text-white/90" : "text-gray-400"
                }`}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </SharedLayout>
    </section>
  );
};