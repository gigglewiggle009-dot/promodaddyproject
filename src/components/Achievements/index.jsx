"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  FaYoutube,
  FaStar,
  FaRocket,
  FaUsers,
  FaAward,
} from "react-icons/fa";

const Counter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [startCount, setStartCount] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const currentRef = counterRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.unobserve(currentRef);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(currentRef);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startCount) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 30;
    const increment = target / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        start = target;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, stepTime);

    return () => clearInterval(timer);
  }, [startCount, target]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
};

export const Achievements = () => {
  const achievements = [
    {
      icon: FaYoutube,
      title: "93 Million+ YouTube Views",
      desc: "Delivered massive reach for entertainment hit 'Kyaa Baat Haii 2.0' through strategic digital promotion.",
    },
    {
      icon: FaStar,
      title: "1600+ Five-Star Reviews",
      desc: "Maintaining a strong 5.0 rating on Google Maps with consistent client satisfaction.",
    },
    {
      icon: FaUsers,
      title: "National-Level Celebrity Clients",
      desc: "Worked with celebrities including Sonu Sood, Mohammad Shami and Rashid Khan.",
    },
    {
      icon: FaAward,
      title: "Glamour & Lifestyle Award 2024",
      desc: "Outstanding Best Social Media PR Award received by Shubham Gupta.",
    },
    {
      icon: FaRocket,
      title: "5000+ Projects Delivered",
      desc: "Successful digital campaigns, websites, performance ads and branding projects.",
    },
  ];

  const stats = [
    {
      value: 93,
      suffix: "M+",
      label: "YouTube Views",
      textColor: "text-purple-400",
      borderColor: "border-purple-500/30",
      glow: "from-purple-600 to-pink-500",
    },
    {
      value: 1600,
      suffix: "+",
      label: "Five-Star Reviews",
      textColor: "text-blue-400",
      borderColor: "border-blue-500/30",
      glow: "from-blue-500 to-cyan-500",
    },
    {
      value: 5000,
      suffix: "+",
      label: "Projects Delivered",
      textColor: "text-green-400",
      borderColor: "border-green-500/30",
      glow: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      className="bg-[#0b0b0b] text-white py-28 relative overflow-hidden"
      aria-labelledby="achievements-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.15),_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2
            id="achievements-heading"
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Real Results. Real Impact. Across India.
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Our work speaks through measurable results, satisfied clients,
            and industry recognition.
          </p>
        </div>

        {/* Hidden semantic subheading for structure */}
        {/* <h3 className="sr-only">Performance Highlights</h3> */}

        {/* Stats */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 mb-24">
          {stats.map((stat) => (
            <div key={stat.label} className="relative group">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${stat.glow} opacity-20 blur-lg rounded-2xl`}
              />

              <div
                className={`relative bg-[#111] border ${stat.borderColor} rounded-2xl p-10 text-center hover:-translate-y-2 transition duration-300`}
              >
                {/* Number is text, not heading */}
                <p className={`text-5xl font-bold ${stat.textColor}`}>
                  <Counter target={stat.value} suffix={stat.suffix} />
                </p>

                {/* Label is normal text */}
                <p className="text-gray-400 mt-3">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline / Achievements */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500" />

          <div className="space-y-14">
            {achievements.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="flex gap-6 group">
                  <div className="relative z-10 shrink-0">
                    <div className="w-9 h-9 flex items-center justify-center rounded-full bg-purple-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.8)] group-hover:scale-110 transition">
                      <Icon />
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
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom Trust Copy */}
        <div className="text-center mt-24 max-w-3xl mx-auto">
          <p className="text-lg text-gray-300 leading-relaxed">
            From celebrity collaborations to high-performing digital campaigns,
            our results prove why Promodaddy Digital is trusted by businesses
            and public figures across India.
          </p>
        </div>
      </div>
    </section>
  );
};