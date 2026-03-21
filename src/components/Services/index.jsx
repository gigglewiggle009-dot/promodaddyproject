"use client";

import React from "react";
import { motion } from "framer-motion";
import { LuCheckCircle2 } from "react-icons/lu";
import { SharedLayout } from "@/components/SharedComponent";
// import BrandService from "@/assets/brand-service.webp"; // optional image

const serviceData = {
  eyebrow: "Our Services",
  header: "We Offer a Wide Range of Brand Services",
  details:
    "At PromoDaddy Digital, we help businesses grow with sharp strategy, creative execution, and performance-focused marketing. From content and campaigns to branding and lead generation, we build digital systems that actually move the business forward.",
  subtext1: "Election Campaign Content",
  subtext2: "Data-Driven Strategies",
  subtext3: "Content That Connects",
  subtext4: "Artist Management Expertise",
  subtext5: "Lead Generation Powerhouse",
  subtext6: "Expertise Across All Channels",
};

const checklist = [
  serviceData.subtext1,
  serviceData.subtext2,
  serviceData.subtext3,
  serviceData.subtext4,
  serviceData.subtext5,
  serviceData.subtext6,
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

export const Services = () => {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-20 text-white md:py-28">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[18%] top-[20%] h-[260px] w-[260px] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute right-[10%] top-[45%] h-[320px] w-[320px] rounded-full bg-fuchsia-600/10 blur-[140px]" />
      </div>

      <SharedLayout>
        <div className="relative z-10 grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] xl:gap-20">
          {/* Left visual side */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-[520px]">
              {/* glow frame */}
              <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-br from-violet-500/20 via-transparent to-fuchsia-500/20 blur-2xl" />

              {/* main visual card */}
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_40px_rgba(139,92,246,0.12)] backdrop-blur-sm">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5">
                    <p className="mb-2 text-sm text-white/50">Strategy</p>
                    <h3 className="text-xl font-semibold text-white">
                      Brand Positioning
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/55">
                      Clear messaging, stronger market presence, and sharper
                      audience targeting.
                    </p>
                  </div>

                  <div className="rounded-[22px] border border-white/10 bg-gradient-to-br from-violet-500/15 to-fuchsia-500/10 p-5">
                    <p className="mb-2 text-sm text-white/50">Performance</p>
                    <h3 className="text-xl font-semibold text-white">
                      Lead Generation
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/60">
                      Campaigns designed to bring quality leads, not vanity
                      metrics.
                    </p>
                  </div>

                  <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5 md:col-span-2">
                    <p className="mb-2 text-sm text-white/50">Execution Layer</p>
                    <h3 className="text-xl font-semibold text-white">
                      Content, Ads, SEO, Social Media, PR
                    </h3>
                    <p className="mt-3 max-w-[90%] text-sm leading-6 text-white/55">
                      An integrated service stack that helps your brand look
                      better, rank better, convert better, and scale faster.
                    </p>
                  </div>
                </div>

                {/* optional image block */}
                {/*
                <div className="mt-4 overflow-hidden rounded-[24px] border border-white/10">
                  <img
                    src={BrandService.src}
                    alt="Brand service"
                    className="h-[320px] w-full object-cover"
                  />
                </div>
                */}
              </div>
            </div>
          </motion.div>

          {/* Right content side */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="w-full"
          >
            <div className="max-w-[720px]">
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-violet-400"
              >
                {serviceData.eyebrow}
              </motion.p>

              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-[780px] text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl xl:text-6xl"
              >
                {serviceData.header}
              </motion.h2>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-6 max-w-[760px] text-base leading-8 text-white/60 md:text-lg"
              >
                {serviceData.details}
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
              >
                {checklist.map((text, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 transition-all duration-300 hover:border-violet-400/40 hover:bg-white/[0.05] hover:shadow-[0_0_24px_rgba(139,92,246,0.12)]"
                  >
                    <div className="mt-0.5 shrink-0 rounded-full border border-violet-400/30 bg-violet-500/10 p-2 text-violet-300 transition-colors duration-300 group-hover:border-violet-300/50 group-hover:text-white">
                      <LuCheckCircle2 className="text-lg" />
                    </div>

                    <span className="text-sm font-medium leading-6 text-white/80 md:text-[15px]">
                      {text}
                    </span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <button className="rounded-full bg-violet-600 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-500 hover:shadow-[0_0_24px_rgba(139,92,246,0.35)]">
                  Work With Us
                </button>

                <button className="rounded-full border border-white/10 bg-white/[0.03] px-7 py-3 text-sm font-semibold text-white/85 transition-all duration-300 hover:border-violet-400/40 hover:bg-white/[0.05]">
                  Explore Services
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </SharedLayout>
    </section>
  );
};
// "use client";
// import { BrandService, ServiceImg } from "@/assets";
// import { serviceData } from "@/constant";
// import { SharedHeading } from "../SharedComponent";
// import { LuCheckCircle } from "react-icons/lu";
// import { motion } from 'framer-motion'

// export const Services = () => {
//   return (
//     <div className="overflow-hidden text-white bg-primaryBlack">
//       <div className="w-full mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-4 items-center">
//           <motion.div
//            initial={{ y: -200, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1,ease:'easeOut' }}
//           >
//             {/* <img src={BrandService.src} className="lg:w-[450px] w-[330px] md:h-[430px] md:w-[430px]  mx-auto h-full rounded-full " alt="Service" /> */}
//           </motion.div>
//           <div className="mx-16">
//             <motion.div
//              initial={{ x: 100, opacity: 0 }}
//             animate='animate'
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 1,ease:'easeOut' }}
//              className="flex flex-col items-start justify-center w-full h-full space-y-8 ">
//               <SharedHeading>{serviceData.header}</SharedHeading>
//               <div className="text-base font-normal">{serviceData.details}</div>
//               <motion.div
//               initial={{ x: 100, opacity: 0 }}
//             animate='animate'
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 1,ease:'easeOut' }}
//                className="space-y-5 text-sm text-nowrap">
//                 {[
//                   serviceData.subtext1,
//                   serviceData.subtext2,
//                   serviceData.subtext3,
//                   serviceData.subtext4,
//                   serviceData.subtext5,
//                   serviceData.subtext6,
//                 ].map((text, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center font-semibold text-blue-500 gap-7"
//                   >
//                     <LuCheckCircle className="text-3xl text-green" />
//                     <span>{text}</span>
//                   </div>
//                 ))}
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
