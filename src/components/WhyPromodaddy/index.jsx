"use client";
import React from "react";
import {
  FaChartLine,
  FaStar,
  FaUsers,
  FaChartPie,
  FaGlobeAsia,
  FaBuilding,
} from "react-icons/fa";

export const WhyPromodaddy = () => {

  const points = [
    {
      icon: <FaChartLine />,
      title: "Built for Growth",
      desc: "Designed for Results Everything we do is focused on helping your business grow faster with simple strategies and real results.",
    },

    {
      icon: <FaStar />,
      title: "Celebrity-Level Expertise",
      desc: "We manage digital presence for celebrities, cricketers, and public figures — the same expertise powers your brand.",
    },

    {
      icon: <FaGlobeAsia />,
      title: "India-First Approach",
      desc: "We deeply understand Indian audiences, local markets, and consumer behaviour.",
    },

    {
      icon: <FaChartPie />,
      title: "Transparent Reporting",
      desc: "Weekly updates and monthly performance reports so you always know your marketing ROI.",
    },

    // {
    //   icon: <FaUsers />,
    //   title: "Full-Service Agency",
    //   desc: "SEO, Google Ads, Social Media, Website Development, PR & Branding — everything under one roof.",
    // },

    // {
    //   icon: <FaBuilding />,
    //   title: "Kota Ka Apna Agency",
    //   desc: "Headquartered in Kota, helping businesses across India scale with powerful digital strategies.",
    // },
  ];

  return (
    <section className="bg-[#0b0b0b] text-white py-28">

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why 500+ Clients Across India Choose Promodaddy
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            We use smart strategy, creative ideas, and performance marketing to help your business grow with real results.
          </p>

        </div>


        {/* TRUST STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center mb-20">

          <div>
            <h3 className="text-3xl font-bold text-purple-400">1000+</h3>
            <p className="text-gray-400 text-sm">Clients Served</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-purple-400">12+</h3>
            <p className="text-gray-400 text-sm">Years Experience</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-purple-400">20+</h3>
            <p className="text-gray-400 text-sm">Industries Served</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-purple-400">3M+</h3>
            <p className="text-gray-400 text-sm">Leads Generated</p>
          </div>

        </div>


        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {points.map((item, i) => (
            <div
              key={i}
              className="relative bg-[#111] p-8 rounded-xl border border-purple-500/20 hover:border-purple-500 transition duration-300 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] group"
            >

              {/* Gradient Top Line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-500/20 text-purple-400 text-2xl mb-6 group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};