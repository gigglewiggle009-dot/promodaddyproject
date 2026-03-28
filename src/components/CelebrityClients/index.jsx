"use client";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  SonuSoodCeleb,
  Shami,
  RashidKhan,
  MahimaChaudhary,
  AshokChandna,
} from "@/assets";

export const CelebrityClients = () => {
  const [direction, setDirection] = useState("left");

  const celebrities = [
    {
      img: SonuSoodCeleb.src,
      name: "Sonu Sood",
      role: "Bollywood Actor & Humanitarian",
      service: "Celebrity PR & Social Media Management",
      achievement: "93M+ YouTube Views",
      points: [
        "Global Bollywood Celebrity",
        "Massive Social Media Influence",
        "Recognized Humanitarian",
        "Trusted Public Figure",
      ],
    },
    {
      img: Shami.src,
      name: "Mohammad Shami",
      role: "Indian Cricket Team – Fast Bowler",
      service: "Personal Branding & Digital Presence",
      achievement: "ICC World Cup Star Performer",
      points: [
        "One of India's Top Fast Bowlers",
        "Millions of Cricket Fans",
        "International Sports Icon",
        "Strong Personal Brand",
      ],
    },
    {
      img: RashidKhan.src,
      name: "Rashid Khan",
      role: "International Cricket Superstar",
      service: "Social Media Marketing & Brand Building",
      achievement: "World's Best T20 Spinner",
      points: [
        "Global Cricket League Star",
        "IPL Superstar",
        "Massive International Fanbase",
        "Powerful Sports Brand",
      ],
    },
    {
      img: MahimaChaudhary.src,
      name: "Mahima Chaudhary",
      role: "Bollywood Film Actress",
      service: "Social Media & PR Campaigns",
      achievement: "Bollywood Film Star",
      points: [
        "Popular Bollywood Actress",
        "Film Industry Celebrity",
        "Public Figure & Influencer",
        "Strong Fan Following",
      ],
    },
    {
      img: AshokChandna.src,
      name: "Ashok Chandna",
      role: "Sports Minister – Rajasthan",
      service: "Digital Campaign & Online Reputation",
      achievement: "Government Leader",
      points: [
        "Political Leader Rajasthan",
        "Public Leadership Presence",
        "Strong Regional Influence",
        "Digital Campaign Strategy",
      ],
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Trusted by India's Biggest Celebrity
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-5">
          When celebrities and national-level sportspersons trust Promodaddy
          Digital for their brand — you know you are in the right hands.
        </p>
      </div>

      <div className="relative">
        <button
          onClick={() => setDirection("right")}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/70 border border-white/20 p-2 text-white hover:bg-purple-600 transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => setDirection("left")}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/70 border border-white/20 p-2 text-white hover:bg-purple-600 transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <Marquee speed={60} pauseOnHover autoFill direction={direction}>
          {celebrities.map((celeb, i) => (
            <div
              key={i}
              className="group relative mx-5 w-[260px] rounded-xl border-4 border-purple-500 overflow-hidden shadow-[0_0_25px_rgba(139,92,246,0.6)] hover:shadow-[0_0_45px_rgba(139,92,246,0.9)] transition duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>

              <img
                src={celeb.img}
                alt={celeb.name}
                className="w-full h-[320px] object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-110"
              />

              <div className="bg-[#111] p-4 text-left">
                <p className="text-lg font-semibold">{celeb.name}</p>
                <p className="text-gray-400 text-sm">{celeb.role}</p>
                <p className="text-purple-400 text-xs mt-1 font-semibold uppercase">
                  {celeb.achievement}
                </p>
              </div>

              <div className="absolute inset-0 bg-black/95 opacity-0 group-hover:opacity-100 transition duration-300 p-6 flex flex-col justify-center">
                <p className="text-xl font-bold text-purple-400 mb-2">
                  {celeb.name}
                </p>

                <p className="text-gray-400 text-sm mb-3">{celeb.role}</p>

                <p className="text-sm text-gray-300 mb-4">
                  Service: {celeb.service}
                </p>

                <ul className="space-y-2 text-sm">
                  {celeb.points.map((point, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_#8b5cf6]"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="max-w-3xl mx-auto mt-20 text-center px-6">
        <p className="text-lg text-gray-300 leading-relaxed">
          If India's top cricketers and Bollywood stars trust us with their
          digital presence —
          <span className="text-purple-400 font-semibold">
            {" "}imagine what we can do for your business.
          </span>
        </p>
      </div>
    </section>
  );
};