"use client";
import React, { useEffect, useState } from "react";
import {
  FaYoutube,
  FaStar,
  FaRocket,
  FaUsers,
  FaAward,
} from "react-icons/fa";

export const Achievements = () => {

  /* Counter Animation */
  const Counter = ({ target }) => {
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
        setCount(Math.floor(start));
      }, 30);

      return () => clearInterval(timer);
    }, [target]);

    return count;
  };

  const achievements = [
    {
      icon: <FaYoutube />,
      title: "93 Million+ YouTube Views",
      desc: "Delivered massive reach for entertainment hit 'Kyaa Baat Haii 2.0' through strategic digital promotion.",
    },
    {
      icon: <FaStar />,
      title: "1600+ Five-Star Reviews",
      desc: "Maintaining a strong 5.0 rating on Google Maps with consistent client satisfaction.",
    },
    {
      icon: <FaUsers />,
      title: "National-Level Celebrity Clients",
      desc: "Worked with celebrities including Sonu Sood, Mohammad Shami and Rashid Khan.",
    },
    {
      icon: <FaAward />,
      title: "Glamour & Lifestyle Award 2024",
      desc: "Outstanding Best Social Media PR Award received by Shubham Gupta.",
    },
    {
      icon: <FaRocket />,
      title: "5000+ Projects Delivered",
      desc: "Successful digital campaigns, websites, performance ads and branding projects.",
    },
  ];

  return (
    <section className="bg-[#0b0b0b] text-white py-28 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.15),_transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Results. Real Impact. Across India.
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Our work speaks through measurable results, satisfied clients,
            and industry recognition.
          </p>
        </div>


        {/* Premium Stats Grid */}
<div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 mb-24">

  {/* 93M Views */}
  <div className="relative group">

    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-20 blur-xl rounded-2xl"></div>

    <div className="relative bg-[#111] border border-purple-500/30 rounded-2xl p-10 text-center hover:-translate-y-2 transition">

      <h3 className="text-5xl font-bold text-purple-400">
        <Counter target={93}/>M+
      </h3>

      <p className="text-gray-400 mt-3">
        YouTube Views
      </p>

    </div>
  </div>


  {/* Reviews */}
  <div className="relative group">

    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-xl rounded-2xl"></div>

    <div className="relative bg-[#111] border border-blue-500/30 rounded-2xl p-10 text-center hover:-translate-y-2 transition">

      <h3 className="text-5xl font-bold text-blue-400">
        <Counter target={1600}/>+
      </h3>

      <p className="text-gray-400 mt-3">
        5 Star Reviews
      </p>

    </div>
  </div>


  {/* Projects */}
  <div className="relative group">

    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-20 blur-xl rounded-2xl"></div>

    <div className="relative bg-[#111] border border-green-500/30 rounded-2xl p-10 text-center hover:-translate-y-2 transition">

      <h3 className="text-5xl font-bold text-green-400">
        <Counter target={500}/>+
      </h3>

      <p className="text-gray-400 mt-3">
        Projects Delivered
      </p>

    </div>
  </div>

</div>


        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">

          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500"></div>

          <div className="space-y-14">

            {achievements.map((item, i) => (

              <div key={i} className="flex gap-6 group">

                <div className="relative z-10">
                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-purple-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.8)] group-hover:scale-110 transition">
                    {item.icon}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>

            ))}

          </div>

        </div>


        {/* Bottom Trust */}
        <div className="text-center mt-24 max-w-3xl mx-auto">

          <p className="text-lg text-gray-300 leading-relaxed">
            From celebrity collaborations to high-performing digital campaigns —
            our results prove why Promodaddy Digital is trusted by businesses
            and public figures across India.
          </p>

        </div>

      </div>

    </section>
  );
};