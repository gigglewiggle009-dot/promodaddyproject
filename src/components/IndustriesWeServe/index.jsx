"use client";
import React from "react";
import {
  FaGraduationCap,
  FaHospital,
  FaShoppingCart,
  FaHome,
  FaStar,
  FaUsers,
  FaIndustry,
  FaUtensils,
  FaRocket
} from "react-icons/fa";

export const IndustriesWeServe = () => {

  const industries = [
    { icon: <FaGraduationCap />, title: "Coaching", desc: "Google + YouTube + SEO" },
    { icon: <FaHospital />, title: "Hospitals", desc: "Local SEO + Ads" },
    { icon: <FaShoppingCart />, title: "E-commerce", desc: "Performance + SEO" },
    { icon: <FaHome />, title: "Real Estate", desc: "FB Ads + Funnels" },
    { icon: <FaStar />, title: "Celebrities", desc: "PR + Branding" },
    { icon: <FaUsers />, title: "Political", desc: "Campaigns" },
    { icon: <FaIndustry />, title: "B2B", desc: "Google + LinkedIn" },
    { icon: <FaUtensils />, title: "Food", desc: "Instagram + SEO" },
    { icon: <FaRocket />, title: "Startups", desc: "Full Setup" },
  ];

  const radius = 260;
  const center = 300;

  return (
    <section className="bg-[#0b0b0b] text-white py-15 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.15),_transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          We Grow Businesses Across Every Industry in India
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-20">
          Powerful digital strategies tailored for every industry.
        </p>

        {/* DESKTOP ORBIT */}
        <div className="hidden md:flex justify-center">

          <div className="relative w-[600px] h-[600px]">

            {/* SVG LINES */}
            <svg className="absolute inset-0 w-full h-full">
              {industries.map((_, i) => {
                const angle = (i / industries.length) * 2 * Math.PI;

                const x = Number((center + radius * Math.cos(angle)).toFixed(2));
                const y = Number((center + radius * Math.sin(angle)).toFixed(2));

                return (
                  <line
                    key={i}
                    x1={center}
                    y1={center}
                    x2={x}
                    y2={y}
                    stroke="rgba(255,255,255,0.08)"
                  />
                );
              })}
            </svg>

            {/* CENTER */}
            <div className="absolute left-1/2 top-1/2 w-44 h-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-sm font-semibold shadow-[0_0_80px_rgba(139,92,246,0.7)] z-10">
              Promodaddy Growth Engine
            </div>

            {/* ITEMS */}
            {industries.map((item, i) => {
              const angle = (i / industries.length) * 2 * Math.PI;
              const x = Number((radius * Math.cos(angle)).toFixed(2));
              const y = Number((radius * Math.sin(angle)).toFixed(2));

              return (
                <div
                  key={i}
                  className="absolute group"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
                  }}
                >
                  <div className="bg-[#111] border border-white/10 rounded-xl p-5 w-[180px] text-center transition duration-300 
                  hover:-translate-y-2 hover:scale-110 hover:border-purple-500/40 hover:shadow-purple-500/20 shadow-lg animate-float">

                    <div className="text-purple-400 text-xl mb-2">
                      {item.icon}
                    </div>

                    <h3 className="text-sm font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 text-xs mt-1">
                      {item.desc}
                    </p>

                  </div>
                </div>
              );
            })}

          </div>

        </div>

        {/* MOBILE VERSION (STACK) */}
        <div className="grid grid-cols-2 gap-4 md:hidden mt-10">

          {industries.map((item, i) => (
            <div
              key={i}
              className="bg-[#111] border border-white/10 rounded-xl p-5 text-center hover:scale-105 transition"
            >
              <div className="text-purple-400 text-xl mb-2">
                {item.icon}
              </div>

              <h3 className="text-sm font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-400 text-xs mt-1">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};