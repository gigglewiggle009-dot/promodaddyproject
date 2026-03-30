"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, ExternalLink } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

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
    link: "https://share.google/LHARV3uNiTMxN28UZ",
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
    link: "https://share.google/sie6cYrVlhPcGPKYh",
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
    link: "https://share.google/cSD66p5wFTbngPDhi",
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
    link: "https://share.google/XUJdaEOtOp0STFtE0",
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
    link: "https://share.google/26zBqjhrSZpboOZZx",
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
    link: "https://share.google/7Hg2Udlbhk2IFDMjD",
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
    link: "https://share.google/7Hg2Udlbhk2IFDMjD",
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
    link: "https://share.google/uXyB1f3JiPeRBNBkA",
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
    link: "https://share.google/bcj3nhgYesBQY2uZd",
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
    link: "https://share.google/ndsxAdUqK3ym6YcCc",
  },
];

const GoogleBadge = ({ link }) => {
  if (!link) {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] text-base font-bold">
        <span className="bg-gradient-to-r from-blue-500 via-red-500 via-yellow-400 to-green-500 bg-clip-text text-transparent">
          G
        </span>
      </div>
    );
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open this review on Google"
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] text-base font-bold transition hover:bg-white/[0.12]"
      onClick={(e) => e.stopPropagation()}
    >
      <span className="bg-gradient-to-r from-blue-500 via-red-500 via-yellow-400 to-green-500 bg-clip-text text-transparent">
        G
      </span>
    </a>
  );
};

const TestimonialCard = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="h-full rounded-2xl border border-white/10 bg-[#111] p-4 sm:p-5 font-sans transition hover:-translate-y-1 hover:border-white/20">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex min-w-0 gap-3">
          <div
            className={`flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full text-sm sm:text-base font-semibold text-white ${item.initialBg}`}
          >
            {item.initial}
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-sm font-semibold text-white">
              {item.name}
            </h3>
            <p className="text-xs text-white/50">{item.time}</p>
          </div>
        </div>

        <GoogleBadge link={item.link} />
      </div>

      <div className="mb-3 flex gap-1">
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-yellow-400 text-yellow-400 drop-shadow-[0_0_4px_rgba(250,204,21,0.6)]"
          />
        ))}
      </div>

      <p
        className={`text-sm leading-6 text-white/85 ${
          expanded ? "" : "line-clamp-4"
        }`}
      >
        {item.review}
      </p>

      <div className="mt-3 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-white/50 transition hover:text-white"
        >
          {expanded ? "Read less" : "Read more"}
        </button>

        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-purple-400 transition hover:text-purple-300"
          >
            View on Google
            <ExternalLink size={12} />
          </a>
        )}
      </div>
    </div>
  );
};

export const HomeTestimonials = () => {
  const scrollRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hovered && scrollRef.current) {
        const isMobile = window.innerWidth < 640;
        const width = isMobile ? 285 : 320;

        scrollRef.current.scrollBy({
          left: width,
          behavior: "smooth",
        });

        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth - 10
        ) {
          scrollRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [hovered]);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const isMobile = window.innerWidth < 640;
      const width = isMobile ? 285 : 320;

      scrollRef.current.scrollBy({
        left: dir === "left" ? -width : width,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative bg-black py-16 sm:py-20 font-sans overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.12),_transparent_70%)]" />

      <SharedLayout>
        <div className="relative">
          {/* HEADER */}
          <div className="mb-10 sm:mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              Testimonials
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Our success, echoed by our clients
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-white/60 leading-7">
              Real feedback that reflects the quality and impact of our work.
            </p>
          </div>

          {/* MOBILE ARROWS */}
          <div className="mb-5 flex items-center justify-end gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#111] text-white transition hover:bg-[#1a1a1a]"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#111] text-white transition hover:bg-[#1a1a1a]"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* SLIDER */}
          <div className="relative">
            {/* LEFT DESKTOP */}
            <button
              type="button"
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#111] text-white transition hover:bg-[#1a1a1a] lg:flex"
              aria-label="Scroll left"
            >
              <ChevronLeft />
            </button>

            {/* RIGHT DESKTOP */}
            <button
              type="button"
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 z-10 hidden h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#111] text-white transition hover:bg-[#1a1a1a] lg:flex"
              aria-label="Scroll right"
            >
              <ChevronRight />
            </button>

            <div
              ref={scrollRef}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
            >
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="min-w-[280px] max-w-[280px] shrink-0 sm:min-w-[320px] sm:max-w-[320px] xl:min-w-[calc((100%-60px)/4)]"
                >
                  <TestimonialCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};