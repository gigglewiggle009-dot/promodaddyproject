"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

export const TrustedClientsKeywords = () => {

  const celebrities = [
    "Sonu Sood",
    "Mohammad Shami",
    "Rashid Khan",
    "Mahima Chaudhary",
    "Ashok Chandna",
  ] || [];

  const industries = [
    "Coaching Institutes",
    "Hospitals & Clinics",
    "E-commerce Brands",
    "Real Estate",
    "Celebrities & Public Figures",
    "Political Campaigns",
    "Manufacturers & B2B",
    "Restaurants & Food",
    "Startups",
  ] || [];

  return (
    <section className="bg-black text-white py-15 relative overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.15),_transparent_70%)]"></div>

      <div className="max-w-10xl mx-auto px-6 relative z-10">

        {/* <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Trusted by India's Biggest Names
        </motion.h2> */}

        {/* Celebrities */}
        <Marquee speed={70} pauseOnHover gradient={false}>
          {celebrities?.map((name, i) => (
            <div
              key={i}
              className="mx-6 px-8 py-4 rounded-full border border-purple-500 text-purple-400 font-semibold text-lg"
            >
              {name}
            </div>
          ))}
        </Marquee>

        {/* Industries */}
        <Marquee speed={60} direction="right" gradient={false} className="mt-10">
          {industries?.map((item, i) => (
            <div
              key={i}
              className="mx-6 px-8 py-4 rounded-full border border-pink-500 text-pink-400 font-semibold text-lg"
            >
              {item}
            </div>
          ))}
        </Marquee>

      </div>

    </section>
  );
};