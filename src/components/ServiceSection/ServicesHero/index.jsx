"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const stats = [
  { value: 500, suffix: "+", label: "Satisfied Clients" },
  { value: 80, suffix: "+", label: "SEO Optimized Websites" },
  { value: 150, suffix: "+", label: "Campaigns Delivered" },
  { value: 2, prefix: "Rs.", suffix: "Cr+", label: "Ad Spend Managed" },
];

const Counter = ({ value, prefix = "", suffix = "", start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const duration = 2000;
    const stepTime = 30;
    const increment = value / (duration / stepTime);

    const timer = setInterval(() => {
      startValue += increment;

      if (startValue >= value) {
        startValue = value;
        clearInterval(timer);
      }

      setCount(startValue);
    }, stepTime);

    return () => clearInterval(timer);
  }, [start, value]);

  return (
    <>
      {prefix}
      {Number.isInteger(value) ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </>
  );
};

export const ServicesHero = () => {
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const currentRef = statsRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(currentRef);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] text-white pt-14 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.15),_transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(91,39,247,0.06),transparent_25%,transparent_75%,rgba(91,39,247,0.05))]" />

      <SharedLayout>
        <div className="relative z-10">
          {/* Top badge */}
          <div className="mx-auto mb-6 flex w-fit items-center justify-center rounded-full border border-purple-500/30 bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-purple-300 shadow-[0_0_30px_rgba(91,39,247,0.12)] sm:mb-8">
            Our Services
          </div>

          {/* Main content */}
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Digital Marketing Services That Deliver{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Real Business Results
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-4xl text-sm leading-7 text-gray-300 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
              At Promodaddy Digital, we offer end-to-end digital marketing
              services designed to help Indian businesses rank higher on Google,
              generate quality leads, and build powerful online brands. From SEO
              and Google Ads to social media and website development, every
              service we offer is built around one goal: measurable growth for
              your business.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-w-[230px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(91,39,247,0.25)] transition duration-300 hover:-translate-y-0.5 hover:from-purple-500 hover:to-indigo-500"
              >
                Book Free Strategy Call
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/project"
                className="inline-flex min-w-[230px] items-center justify-center rounded-xl border border-purple-500/40 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-purple-300 transition duration-300 hover:-translate-y-0.5 hover:border-purple-400 hover:bg-white/[0.04] hover:text-white"
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-4 sm:mt-14 lg:grid-cols-4"
          >
            {stats.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-6 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(91,39,247,0.10)] sm:px-6 sm:py-7"
              >
                <h3 className="text-2xl font-bold text-purple-400 sm:text-3xl">
                  <Counter
                    value={item.value}
                    prefix={item.prefix}
                    suffix={item.suffix}
                    start={startCount}
                  />
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-400 sm:text-sm">
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
