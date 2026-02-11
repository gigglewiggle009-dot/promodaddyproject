'use client'
import React from "react";
import classNames from "classnames";
import Image from "next/image";
import CustomCarousel from "../SharedComponent/customCarousel";

import BgInfluencer from "@/assets/svg/bgInfluencer.svg";
import { useRouter } from "next/navigation";
import { A, B, C, D, E, F, G, H, Influencer1, Influencer2, Influencer3, Influencer4, Influencer5, Influencer6, Influencer7, Influencer8, HothurFoundation } from "@/assets";
import {motion} from "framer-motion"

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
    name: "Srinivas BV ",
    desc: "National President of NSUI"
  },
  {
    image: C,
    name: "Ashok Chandna ",
    desc: "Sports Minister of Rajasthan and MLA of Hindoli Rajasthan"
  },
 
  {
    image: E,
    name: "Mahima Chaudhary",
    desc: "Film Actress"
  },

  {
    image: HothurFoundation,
    name: "Hothur Foundation",
  },

  {
    image: F,
    name: "Our Team Work",
    desc: ""
  },
  {
    image: H,
    name: "Shashikant Senthil",
    desc: "Indian InterMember of the Lok Sabha National Chairman of the War Room, Congress"
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
  const { locale } = useRouter();
  return (
    <div className="relative py-32 bg-black tablet:py-100">
      <BgInfluencer className="absolute top-0 left-0 z-10 w-full h-full" />
      <p className="relative z-20 font-serif text-3xl font-semibold text-center mb:16 md:mb-32 md:text-7xl leading-67">Our Happy Client</p>
      <div className="relative z-20 mx-4">
        <CustomCarousel direction={locale === "he" ? "rtl" : "ltr"} loop={true}>
          {userData.map((item, index) => (
            <motion.div
            initial={{opacity:0,y:200}}
            whileInView={{opacity:1,y:0}}
            transition={{
              delay:0.2,
            }}
              className={classNames("overflow-hidden", {
                "mt-11": index % 2 !== 0,
              })}
              key={index}
            >
              <img src={item.image.src} alt="img" className="w-[250px] h-[390px] rounded-2xl object-fill" />
              <h1 className="py-2 font-serif text-4xl font-semibold text-gray-500">{item.name}</h1>
              <p className="text-2xl font-semibold text-blue-gray-400 w-[300px]">{item.desc}</p>
            </motion.div>
          ))}
        </CustomCarousel>
      </div>
    </div>
  );
};

export default UserRecommend;
