"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, Youtube } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const stats = [
  {
    value: 10,
    suffix: "M+",
    label: "Views Delivered in 24 Hours",
  },
  {
    value: 3,
    suffix: "+",
    label: "Major Music Labels",
  },
  {
    value: 24,
    suffix: " Hrs",
    label: "Campaign Live to Results",
  },
  {
    value: 500,
    suffix: "+",
    label: "YouTube Campaigns Delivered",
  },
];

const Counter = ({ value, prefix = "", suffix = "", start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const duration = 1800;
    const stepTime = 16;
    const increment = value / (duration / stepTime);

    const timer = setInterval(() => {
      startValue += increment;

      if (startValue >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(startValue));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [start, value]);

  return (
    <>
      {prefix}
      {count}
      {suffix}
    </>
  );
};

export const YouTubeMarketingHero = () => {
  const statsRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const currentRef = statsRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.unobserve(currentRef);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] pb-16 pt-24 text-white md:pb-20 md:pt-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.18),_transparent_35%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.08),_transparent_42%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(99,102,241,0.12),_transparent_45%)]" />
      </div>

      <SharedLayout>
        <div className="relative z-10">
          {/* Breadcrumb */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-2 text-center text-sm text-white/60">
            <Link href="/" className="transition hover:text-purple-300">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="transition hover:text-purple-300">
              Services
            </Link>
            <span>/</span>
            <span className="text-purple-300">YouTube Marketing</span>
          </div>

          {/* Main content */}
          <div className="mx-auto max-w-5xl text-center">
            {/* Top badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-200 backdrop-blur-sm">
              <Youtube className="h-4 w-4 text-pink-400" />
              India’s #1 YouTube Marketing Agency
            </div>

            <h1 className="mx-auto max-w-5xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              YouTube Marketing Agency India
              <span className="mt-2 block bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                10 Million+ Views in 24 Hours.
              </span>
              <span className="mt-2 block">
                India’s Trusted Choice for
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                  {" "}
                  Music Labels, Brands & Films
                </span>
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg italic text-white/75 sm:text-xl">
              Your video deserves to trend, not get buried under mediocre content and bad promotion.
            </p>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-white/70 sm:text-lg">
              Promodaddy Digital is one of India’s most experienced YouTube marketing
              agencies trusted by music labels, production houses, brands, and creators.
              We help launch videos with strong momentum, drive views, boost discoverability,
              and turn campaigns into measurable business and branding results.
            </p>

            <p className="mx-auto mt-4 max-w-3xl text-sm font-medium text-white/55 sm:text-base">
              Based in{" "}
              <span className="text-purple-300">Kota, Rajasthan</span> &{" "}
              <span className="text-pink-300">Mumbai</span> — Serving India and Global Clients.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 px-7 py-4 text-base font-semibold text-white shadow-[0_0_30px_rgba(91,39,247,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(91,39,247,0.30)]"
              >
                Start Your YouTube Campaign - Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/clients"
                className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-base font-semibold text-white transition duration-300 hover:border-purple-500/40 hover:bg-white/[0.05]"
              >
                <Play className="h-5 w-5 text-purple-300" />
                See Our Work
              </Link>
            </div>

            {/* Trusted by */}
            <div className="mt-12">
              <p className="mb-4 text-sm font-semibold text-white/75">
                Trusted by:
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                {[
                  "T-Series",
                  "Zee Music",
                  "Sony Music",
                  "Bollywood Productions",
                ].map((item, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-4 lg:mt-16 lg:grid-cols-4"
          >
            {stats.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-6 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(91,39,247,0.10)] sm:px-6 sm:py-7"
              >
                <h3 className="text-2xl font-bold text-purple-400 sm:text-3xl">
                  <Counter
                    value={item.value}
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