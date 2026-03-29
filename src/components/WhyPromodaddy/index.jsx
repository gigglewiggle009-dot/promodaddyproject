"use client";
import React from "react";
import {
  FaChartLine,
  FaStar,
  FaChartPie,
  FaGlobeAsia,
} from "react-icons/fa";

export const WhyPromodaddy = () => {
  const points = [
    {
      icon: FaChartLine,
      title: "Built for Growth - Designed for Results",
      desc: "Everything we do is focused on helping your business grow faster with simple strategies and real results.",
    },
    {
      icon: FaStar,
      title: "Celebrity-Level Expertise",
      desc: "We manage digital presence for celebrities, cricketers, and public figures, and the same expertise powers your brand.",
    },
    {
      icon: FaGlobeAsia,
      title: "India-First Approach",
      desc: "We deeply understand Indian audiences, local markets, and consumer behaviour.",
    },
    {
      icon: FaChartPie,
      title: "Transparent Reporting",
      desc: "Weekly updates and monthly performance reports so you always know your marketing ROI.",
    },
  ];

  const stats = [
    {
      value: "1000+",
      label: "Clients Served",
    },
    {
      value: "12+",
      label: "Years Experience",
    },
    {
      value: "20+",
      label: "Industries Served",
    },
    {
      value: "3M+",
      label: "Leads Generated",
    },
  ];

  return (
    <section
      className="bg-[#0b0b0b] text-white py-28"
      aria-labelledby="why-promodaddy-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2
            id="why-promodaddy-heading"
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Why 500+ Clients Across India Choose Promodaddy
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            We use smart strategy, creative ideas, and performance marketing to
            help your business grow with real results.
          </p>
        </div>

        {/* Hidden semantic subheading */}
        <h3 className="sr-only">Trust Signals and Key Advantages</h3>

        {/* TRUST STATS */}
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center mb-20 list-none p-0 m-0">
          {stats.map((stat) => (
            <li key={stat.label}>
              <div>
                <p className="text-3xl font-bold text-purple-400">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {points.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="relative bg-[#111] p-8 rounded-xl border border-purple-500/20 hover:border-purple-500 transition duration-300 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] group"
              >
                {/* Gradient Top Line */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500" />

                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-500/20 text-purple-400 text-2xl mb-6 group-hover:scale-110 transition">
                  <Icon aria-hidden="true" focusable="false" />
                </div>

                {/* Title */}
                <h4 className="text-xl font-semibold mb-3">{item.title}</h4>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};