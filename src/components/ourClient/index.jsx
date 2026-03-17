'use client';

import React from "react";
import classNames from "classnames";
import Image from "next/image";
import CustomCarousel from "../SharedComponent/customCarousel";

import BgInfluencer from "@/assets/svg/bgInfluencer.svg";
import {
  A, B, C, D, E, F, G, H,
  Influencer1, Influencer2, Influencer3, Influencer4,
  Influencer5, Influencer6, Influencer7, Influencer8,
  HothurFoundation
} from "@/assets";

import { motion } from "framer-motion";

const userData = [
  {
    image: Influencer5,
    name: "Sonu Sood",
    desc: "Indian Actor and Film Producer"
  },
  {
    image: Influencer2,
    name: "Mohammed Shami",
    desc: "Indian Cricketer"
  },
  {
    image: Influencer6,
    name: "Rashid Khan",
    desc: "Afghan Cricketer"
  },
  {
    image: Influencer1,
    name: "The Great Khali",
    desc: "Indian Professional Wrestler"
  },
  {
    image: Influencer3,
    name: "Amit Bhadana",
    desc: "Indian Comedian and Writer"
  },
  {
    image: Influencer4,
    name: "Kulsum Shadab Wahab",
    desc: "Founder of ARA LUMIERE"
  },
  {
    image: Influencer7,
    name: "Ebrahim Mhyn",
    desc: "Social Media Star"
  },
  {
    image: Influencer8,
    name: "Yogesh Lakhani",
    desc: "Film Actor"
  },
  {
    image: B,
    name: "Srinivas BV",
    desc: "National President of NSUI"
  },
  {
    image: C,
    name: "Ashok Chandna",
    desc: "Sports Minister of Rajasthan & MLA"
  },
  {
    image: E,
    name: "Mahima Chaudhary",
    desc: "Film Actress"
  },
  {
    image: HothurFoundation,
    name: "Hothur Foundation",
    desc: ""
  },
  {
    image: F,
    name: "Our Team Work",
    desc: ""
  },
  {
    image: H,
    name: "Shashikant Senthil",
    desc: "Member of Lok Sabha & Congress Leader"
  },
  {
    image: A,
    name: "Mohammed Shami",
    desc: "Indian Cricketer"
  },
  {
    image: G,
    name: "Mohammed Shami",
    desc: "Indian Cricketer"
  },
  {
    image: D,
    name: "Sonu Sood",
    desc: "Film Actor"
  },
];

const UserRecommend = () => {
  return (
    <div className="relative py-32 bg-black overflow-hidden">

      {/* Background */}
      <BgInfluencer className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" />

      {/* Heading */}
      <h2 className="relative z-20 text-center text-3xl md:text-7xl font-serif font-semibold text-white mb-16 md:mb-24">
        Our Happy Clients
      </h2>

      {/* Carousel */}
      <div className="relative z-20 mx-4">
        <CustomCarousel direction="ltr" loop={true}>
          {userData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={classNames("overflow-hidden", {
                "mt-10": index % 2 !== 0,
              })}
            >
              {/* Image */}
              {item?.image && (
                <Image
                  src={item.image}
                  alt={item.name}
                  width={250}
                  height={390}
                  className="rounded-2xl object-cover w-[250px] h-[390px]"
                />
              )}

              {/* Name */}
              <h3 className="py-2 text-xl md:text-2xl font-semibold text-white">
                {item.name}
              </h3>

              {/* Description */}
              {item.desc && (
                <p className="text-sm md:text-base text-gray-400 w-[250px]">
                  {item.desc}
                </p>
              )}
            </motion.div>
          ))}
        </CustomCarousel>
      </div>
    </div>
  );
};

export default UserRecommend;