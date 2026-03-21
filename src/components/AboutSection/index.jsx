"use client";
import TeamImage from "@/assets/team.jpg";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

/* 🔥 COUNTER FUNCTION */
const Counter = ({ target, suffix = "", decimals = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 30);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        start = target;
        clearInterval(timer);
      }

      setCount(start);
    }, 30);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <>
      {decimals > 0
        ? count.toFixed(decimals)
        : Math.floor(count)}
      {suffix}
    </>
  );
};

export const AboutSection = () => {
  return (
    <section className="bg-[#0b0b0b] text-white py-24 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.15),_transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div>

          <p className="text-purple-400 font-medium mb-3">
            Who Are We?
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            We're <br /> Promodaddy Digital — India's Most Trusted Digital Marketing Agency!
          </h2>

          <h3 className="text-xl md:text-2xl font-semibold mb-5 text-gray-200">
            15+ years of marketing experience and AI-powered strategies, we help brands grow faster online. From Kota to clients across India, we deliver digital marketing that generates real leads, real revenue, and real business growth.
          </h3>

          <p className="text-gray-400 leading-relaxed mb-10 max-w-xl">
            We offer end-to-end services including SEO, Social Media Marketing, Paid Ads, Video Production, Celebrity & PR Campaigns, Election Campaigns, and Personal Branding for D2C, B2B, B2C businesses and individual professionals.
            Our services are available in Kota, Jaipur, Delhi, Mumbai and across Pan India, helping businesses build a powerful online presence and achieve consistent growth.
            Our 60+ member expert team works as your growth partner, turning marketing investment into measurable results and scalable success.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6">

            {/* Projects */}
            <div>
              <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 mb-4"></div>
              <h4 className="text-3xl font-bold text-purple-400">
                <Counter target={5000} suffix="+" />
              </h4>
              <p className="text-gray-400 text-sm mt-1">
                Successful Projects
              </p>
            </div>

            {/* Reviews */}
            <div>
              <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 mb-4"></div>
              <h4 className="text-3xl font-bold text-purple-400">
                <Counter target={1600} suffix="+" />
              </h4>
              <p className="text-gray-400 text-sm mt-1">
                Google Reviews
              </p>
            </div>

            {/* Rating */}
            <div>
              <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 mb-4"></div>
              <h4 className="text-3xl font-bold text-purple-400 flex items-center gap-2">
                <Counter target={5} decimals={1} />
                <span className="text-yellow-400">⭐</span>
              </h4>
              <p className="text-gray-400 text-sm mt-1">
                Google Rating
              </p>
            </div>

            {/* Experience */}
            <div>
              <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 mb-4"></div>
              <h4 className="text-3xl font-bold text-purple-400">
                <Counter target={8} suffix="+" />
              </h4>
              <p className="text-gray-400 text-sm mt-1">
                Years Experience
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative group">

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-20 blur-2xl rounded-2xl"></div>

          {/* Image */}
          <div className="relative h-[420px] w-full rounded-2xl overflow-hidden border border-purple-500/30">
            <Image
              src={TeamImage}
              alt="Team"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

        </div>

      </div>

      {/* 🔥 PREMIUM SLIDING SERVICES */}
      <div className="mt-20">

        <Marquee speed={60} pauseOnHover gradient={false}>

          {[
            "SEO Services",
            "Google Ads",
            "Social Media Marketing",
            "Meta Ads",
            "Website Development",
            "YouTube Marketing",
            "Celebrity PR & Branding",
            "Content Marketing",
            "Local SEO",
            "Influencer Marketing",
          ].map((service, i) => (

            <div
              key={i}
              className="group flex items-center text-2xl md:text-3xl font-semibold mx-10 cursor-pointer hover:scale-105 transition duration-300"
            >

              <span
                className="
                text-white 
                transition duration-300
                group-hover:bg-gradient-to-r 
                group-hover:from-purple-400 
                group-hover:via-pink-500 
                group-hover:to-purple-400 
                group-hover:bg-clip-text 
                group-hover:text-transparent
              "
              >
                {service}
              </span>

              <span className="mx-8 text-purple-500 text-xl opacity-60">✦</span>

            </div>

          ))}

        </Marquee>

      </div>

      {/* Scroll Top Button */}
      <button className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-md shadow-lg transition">
        ↑
      </button>

    </section>
  );
};