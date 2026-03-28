"use client";

import React, { useEffect, useRef, useState } from "react";
import { SharedLayout } from "@/components/SharedComponent";

const CountUp = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(progress * end);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [started, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const StatsSectionKota = () => {
  const stats = [
    { number: 80, suffix: "+", label: "SEO Optimized Websites" },
    { number: 40, suffix: "+", label: "Brand & Logo Designs" },
    { number: 500, suffix: "+", label: "Satisfied Clients" },
    { number: 400000, suffix: "+", label: "Social Media Followers" },
  ];

  return (
    <section className="relative bg-[#050816] py-14 sm:py-16 md:py-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.12),_transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.10),_transparent_35%)] pointer-events-none" />

      <SharedLayout>
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-5 sm:p-6 md:p-8 shadow-[0_0_25px_rgba(139,92,246,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-[0_0_35px_rgba(99,102,241,0.18)]"
            >
              {/* Card glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

              <h3 className="relative text-2xl sm:text-3xl md:text-4xl font-bold text-white transition duration-300 group-hover:text-purple-300">
                <CountUp end={item.number} suffix={item.suffix} />
              </h3>

              <p className="relative mt-2 sm:mt-3 text-xs sm:text-sm md:text-base font-medium text-gray-300 group-hover:text-white transition duration-300 leading-relaxed">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </SharedLayout>
    </section>
  );
};