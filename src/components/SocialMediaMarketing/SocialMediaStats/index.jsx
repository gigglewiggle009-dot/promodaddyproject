"use client";

import React, { useEffect, useRef, useState } from "react";
import { SharedLayout } from "@/components/SharedComponent";

/* 🔥 Counter Hook */
const useCountUp = (end, duration = 2000, startAnimation) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [startAnimation, end, duration]);

  return count;
};

export const SocialMediaStats = () => {
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  /* 👀 Trigger on scroll */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  /* Counters */
  const users = useCountUp(450, 2000, start);
  const time = useCountUp(35, 2000, start); // for 3.5
  const reach = useCountUp(3, 2000, start);
  const percent = useCountUp(67, 2000, start);

  return (
    <section
      ref={ref}
      className="relative bg-[#0b0b0b] py-12 text-white md:py-14"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <SharedLayout>
        <div className="grid grid-cols-2 gap-y-8 text-center md:grid-cols-4 md:gap-y-0">
          
          {/* 1 */}
          <div className="relative px-4 md:px-6">
            <h3 className="text-2xl font-bold text-purple-400 sm:text-3xl md:text-4xl">
              {users}M+
            </h3>
            <p className="mt-2 text-xs text-gray-400 sm:text-sm md:text-base">
              Social Media Users in India
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block absolute right-[75%] top-1/2 -translate-y-1/2 h-10 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          {/* 2 */}
          <div className="relative px-4 md:px-6">
            <h3 className="text-2xl font-bold text-purple-400 sm:text-3xl md:text-4xl">
              {time / 10} hrs
            </h3>
            <p className="mt-2 text-xs text-gray-400 sm:text-sm md:text-base">
              Avg. Daily Time on Social
            </p>
          </div>

          {/* 3 */}
          <div className="relative px-4 md:px-6">
            <h3 className="text-2xl font-bold text-purple-400 sm:text-3xl md:text-4xl">
              {reach}–{reach + 1}x
            </h3>
            <p className="mt-2 text-xs text-gray-400 sm:text-sm md:text-base">
              More Reach with Reels
            </p>
          </div>

          {/* 4 */}
          <div className="relative px-4 md:px-6">
            <h3 className="text-2xl font-bold text-purple-400 sm:text-3xl md:text-4xl">
              {percent}%
            </h3>
            <p className="mt-2 text-xs text-gray-400 sm:text-sm md:text-base">
              Discover Brands on Instagram
            </p>
          </div>

        </div>
      </SharedLayout>
    </section>
  );
};

export default SocialMediaStats;