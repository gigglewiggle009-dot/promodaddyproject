"use client";

import Image from "next/image";
import { SharedLayout } from "@/components/SharedComponent";

// replace with your real image imports
import ecommerceImg from "@/assets/ecommerce.png";
import healthcareImg from "@/assets/healthcare.png";
import realEstateImg from "@/assets/real-estate.png";
import educationImg from "@/assets/education.png";
import hospitalityImg from "@/assets/hospitality.png";
import retailImg from "@/assets/retail.png";
import jewelleryImg from "@/assets/jewellery.png";
import restaurantImg from "@/assets/restaurant.png";
import electionImg from "@/assets/election.png";

const industries = [
  {
    title: "E-commerce",
    desc: "Helping online stores increase traffic, conversions, and sales through SEO, paid ads, and performance marketing.",
    img: ecommerceImg,
  },
  {
    title: "Healthcare",
    desc: "Driving patient inquiries and visibility for clinics, hospitals, and healthcare professionals.",
    img: healthcareImg,
  },
  {
    title: "Real Estate",
    desc: "Generating high-quality property leads using targeted ads and location-based SEO strategies.",
    img: realEstateImg,
  },
  {
    title: "Education",
    desc: "Supporting coaching institutes and educational brands in Kota with lead-focused digital campaigns.",
    img: educationImg,
  },
  {
    title: "Hospitality",
    desc: "Boosting bookings and brand visibility for hotels and restaurants through digital marketing.",
    img: hospitalityImg,
  },
  {
    title: "Retail",
    desc: "Helping retailers grow footfall and online sales with digital strategies.",
    img: retailImg,
  },
  {
    title: "Jewellery",
    desc: "Helping jewellery brands grow trust and showroom visits through premium campaigns.",
    img: jewelleryImg,
  },
  {
    title: "Restaurants",
    desc: "Increasing bookings and online orders using ads and local SEO.",
    img: restaurantImg,
  },
  {
    title: "Election Campaign",
    desc: "Strategic political digital marketing including voter outreach and branding.",
    img: electionImg,
  },
];

const duplicatedIndustries = [...industries, ...industries];

export const KotaIndustriesSection = () => {
  return (
    <section className="overflow-hidden bg-black py-16 text-white sm:py-20 lg:py-15">
      <SharedLayout>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-assistant text-sm uppercase tracking-[0.3em] text-[#5b27f7]">
            Industries We Serve
          </p>

          <h2 className="mt-4 font-roobert text-3xl font-bold leading-tight sm:text-4xl lg:text-[44px]">
            Industries We Serve in{" "}
            <span className="text-[#5b27f7]">Kota</span>
          </h2>

          <p className="mt-4 font-assistant text-base text-white/60 sm:text-lg">
            Specialized digital marketing solutions for every business sector
          </p>
        </div>
      </SharedLayout>

      <div className="relative mt-12 overflow-hidden">
        <div className="marquee flex w-max items-stretch">
          {duplicatedIndustries.map((item, index) => (
            <div
              key={index}
              className="group mx-3 w-[280px] flex-shrink-0 rounded-xl border border-white/10 bg-[#0c0f14] p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-[#5b27f7] hover:bg-[#5b27f7]/5 sm:w-[320px]"
            >
              <div className="mb-5 flex h-[120px] items-center justify-center overflow-hidden rounded-md">
                <Image
                  src={item.img}
                  alt={`${item.title} Digital Marketing`}
                  className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                />
              </div>

              <h3 className="font-roobert text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 font-assistant text-sm leading-7 text-white/60">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent sm:w-24" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent sm:w-24" />
      </div>

      <style jsx>{`
        .marquee {
          animation: scrollMarquee 35s linear infinite;
          will-change: transform;
        }

        .marquee:hover {
          animation-play-state: paused;
        }

        @keyframes scrollMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};








// "use client";
// import { SharedLayout } from "@/components/SharedComponent";
// import {
//   BookOpen,
//   Hospital,
//   Home,
//   ShoppingCart,
//   Utensils,
//   Gem,
//   Store,
//   Landmark,
// } from "lucide-react";

// const industries = [
//   {
//     icon: <BookOpen />,
//     title: "Coaching Institutes",
//     desc: "IIT-JEE, NEET, and competitive exam coaching centers",
//   },
//   {
//     icon: <Hospital />,
//     title: "Hospitals & Healthcare",
//     desc: "Clinics, hospitals, and healthcare providers in Kota",
//   },
//   {
//     icon: <Home />,
//     title: "Real Estate",
//     desc: "Builders, developers, and property dealers",
//   },
//   {
//     icon: <ShoppingCart />,
//     title: "E-commerce",
//     desc: "Online stores and D2C brands targeting Kota market",
//   },
//   {
//     icon: <Utensils />,
//     title: "Restaurants & Food",
//     desc: "Dhabas, restaurants, cafes, and food delivery brands",
//   },
//   {
//     icon: <Gem />,
//     title: "Jewellery",
//     desc: "Gold, diamond, and silver jewellery showrooms",
//   },
//   {
//     icon: <Store />,
//     title: "Retail",
//     desc: "Fashion, electronics, and general retail stores",
//   },
//   {
//     icon: <Landmark />,
//     title: "Political Campaigns",
//     desc: "Candidate digital presence and voter outreach",
//   },
// ];

// export const KotaIndustriesSection = () => {
//   return (
//     <section className="bg-black text-white py-16 sm:py-20 lg:py-24">
//       <SharedLayout>
//         {/* Heading */}
//         <div className="text-center max-w-3xl mx-auto">
//           <h2 className="font-roobert text-3xl sm:text-4xl lg:text-[44px] font-bold">
//             Industries We Serve in{" "}
//             <span className="text-[#5b27f7]">Kota</span>
//           </h2>

//           <p className="mt-4 text-white/60 font-assistant">
//             Specialized digital marketing for every sector
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {industries.map((item, index) => (
//             <div
//               key={index}
//               className="group border border-white/10 p-6 transition duration-300 hover:border-[#5b27f7]"
//             >
//               {/* Icon */}
//               <div className="mb-4 text-[#5b27f7] transition group-hover:scale-110">
//                 {item.icon}
//               </div>

//               {/* Title */}
//               <h3 className="font-roobert text-lg font-semibold">
//                 {item.title}
//               </h3>

//               {/* Description */}
//               <p className="mt-2 text-sm text-white/60 font-assistant">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </SharedLayout>
//     </section>
//   );
// };