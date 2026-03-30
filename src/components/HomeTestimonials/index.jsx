"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Babita Dutt",
    time: "3 weeks ago",
    rating: 5,
    review:
      "We were searching for a reliable partner to handle our online campaigns, and Promodaddy Digital exceeded our expectations. They take the time to understand your brand and deliver measurable growth. Truly the best digital marketing agency in India.",
    initial: "B",
    initialBg: "bg-emerald-600",
  },
  {
    id: 2,
    name: "Harsh Gupta",
    time: "1 month ago",
    rating: 5,
    review:
      "One of the best digital marketing companies in Kota I have come across. I was facing issues with my previous agency, but Promodaddy helped me achieve strong results with SEO and paid campaigns.",
    initial: "H",
    initialBg: "bg-yellow-500",
  },
  {
    id: 3,
    name: "Jayesh Garasiya",
    time: "1 month ago",
    rating: 5,
    review:
      "Working with Promodaddy Digital has been a game-changer for our brand. From website optimization to creative graphics, they handle everything perfectly.",
    initial: "J",
    initialBg: "bg-purple-500",
  },
  {
    id: 4,
    name: "Sanjeev Tiwari",
    time: "1 month ago",
    rating: 5,
    review:
      "Promodaddy Digital team was easy to work with and helped improve my website traffic quickly. They also ran a long-term SEO campaign which delivered strong engagement.",
    initial: "S",
    initialBg: "bg-indigo-500",
  },
  {
    id: 5,
    name: "Hariom Nama",
    time: "2 months ago",
    rating: 5,
    review:
      "Local SEO ke liye best experience mila. Promodaddy Digital ne business growth me kaafi help ki.",
    initial: "H",
    initialBg: "bg-orange-500",
  },
  {
    id: 6,
    name: "Vasid Vasid",
    time: "7 months ago",
    rating: 5,
    review:
      "Promodaddy has been a game-changer for our online marketing. Their expertise in Meta Ads and Google Ads helped us generate quality leads and increase ROI significantly.",
    initial: "V",
    initialBg: "bg-slate-500",
  },
  {
  id: 7,
  name: "Mitali Garg",
  time: "1 month ago",
  rating: 4,
  review:
    "My experience with Promodaddy Digital was smooth and professional. They understood my business needs very well. A reliable digital marketing agency in Kota for small businesses.",
  initial: "M",
  initialBg: "bg-green-600",
},
{
  id: 8,
  name: "Satish Nath",
  time: "2 months ago",
  rating: 5,
  review:
    "Promodaddy Digital ke saath kaam karke kaafi accha experience raha. Team creative hai, timely delivery karti hai aur ads + reels dono me proper guidance deti hai. Brand ko professional aur premium look milta hai.",
  initial: "S",
  initialBg: "bg-blue-500",
},
{
  id: 9,
  name: "Hansu Agrawal",
  time: "1 month ago",
  rating: 5,
  review:
    "Promodaddy Digital LLP is undoubtedly the best digital marketing agency in Kota for SEO. Their experts improved our rankings and fixed technical issues. Highly recommended for genuine SEO services in Rajasthan.",
  initial: "H",
  initialBg: "bg-purple-600",
},
{
  id: 10,
  name: "Dushyant Bhaskar",
  time: "1 month ago",
  rating: 5,
  review:
    "Excellent service and very supportive team. They helped us with digital branding from scratch. One of the best experiences with any agency. Highly recommended for business growth.",
  initial: "D",
  initialBg: "bg-indigo-600",
},
];

const GoogleBadge = () => (
  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] text-base font-bold">
    <span className="bg-gradient-to-r from-blue-500 via-red-500 via-yellow-400 to-green-500 bg-clip-text text-transparent">
      G
    </span>
  </div>
);

const TestimonialCard = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111] p-5 font-sans transition hover:border-white/20 hover:-translate-y-1">
      {/* TOP */}
      <div className="mb-4 flex justify-between">
        <div className="flex gap-3">
          <div
            className={`h-11 w-11 flex items-center justify-center rounded-full text-white font-semibold ${item.initialBg}`}
          >
            {item.initial}
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm">
              {item.name}
            </h3>
            <p className="text-white/50 text-xs">{item.time}</p>
          </div>
        </div>

        <GoogleBadge />
      </div>

      {/* STARS */}
      <div className="flex gap-1 mb-3">
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className="text-yellow-400 fill-yellow-400 drop-shadow-[0_0_4px_rgba(250,204,21,0.6)]"
          />
        ))}
      </div>

      {/* TEXT */}
      <p
        className={`text-sm text-white/85 leading-6 ${
          expanded ? "" : "line-clamp-4"
        }`}
      >
        {item.review}
      </p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-3 text-xs text-white/50 hover:text-white"
      >
        {expanded ? "Read less" : "Read more"}
      </button>
    </div>
  );
};

export const HomeTestimonials = () => {
  const scrollRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      if (!hovered && scrollRef.current) {
        const width = 320;

        scrollRef.current.scrollBy({
          left: width,
          behavior: "smooth",
        });

        // loop
        if (
          scrollRef.current.scrollLeft +
            scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth - 10
        ) {
          scrollRef.current.scrollTo({ left: 0 });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [hovered]);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-black py-20 relative font-sans">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.12),_transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] text-white/60 uppercase">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Our success, echoed by our clients
          </h2>

          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Real feedback that reflects the quality and impact of our work.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative">
          {/* LEFT */}
          <button
            onClick={() => scroll("left")}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-[#111] border border-white/10 text-white"
          >
            <ChevronLeft />
          </button>

          {/* RIGHT */}
          <button
            onClick={() => scroll("right")}
            className="hidden lg:flex absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center rounded-full bg-[#111] border border-white/10 text-white"
          >
            <ChevronRight />
          </button>

          <div
            ref={scrollRef}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-2 [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="min-w-[300px] max-w-[300px] sm:min-w-[320px] sm:max-w-[320px] xl:min-w-[calc((100%-60px)/4)]"
              >
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};