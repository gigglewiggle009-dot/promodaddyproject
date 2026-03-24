"use client";

import { SharedLayout } from "@/components/SharedComponent";
import { motion } from "framer-motion";

const services = [
  {
    title: "SEO Services",
    desc: "Rank #1 on Google for your target keywords in Kota and beyond.",
  },
  {
    title: "Google Ads / PPC",
    desc: "High-ROI paid campaigns that bring ready-to-buy customers.",
  },
  {
    title: "Meta Ads (Facebook & Instagram)",
    desc: "Social ads that generate leads for your Kota business.",
  },
  {
    title: "YouTube Marketing",
    desc: "Video ads that build brand awareness and drive quality traffic.",
  },
  {
    title: "Social Media Marketing",
    desc: "Consistent, engaging content across all major platforms.",
  },
  {
    title: "Website Development",
    desc: "Fast, SEO-optimized websites that convert visitors to customers.",
  },
  {
    title: "Content Marketing",
    desc: "Blog posts, articles, and content that builds authority.",
  },
  {
    title: "Local SEO & Google Maps",
    desc: "Dominate Google Maps and local search results in Kota.",
  },
  {
    title: "Celebrity PR & Branding",
    desc: "High-impact branding and PR collaborations for stronger visibility.",
  },
  {
    title: "Lead Generation",
    desc: "Fill your pipeline with quality leads using a multi-channel approach.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export const KotaServicesSection = () => {
  return (
    <section className="relative overflow-hidden bg-black py-16 text-white sm:py-20 lg:py-24">
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[#5b27f7]/10 blur-3xl" />
      </div>

      <SharedLayout>
        {/* heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-assistant text-sm uppercase tracking-[0.32em] text-[#5b27f7]">
            Our Services
          </p>

          <h2 className="mt-4 font-roobert text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-[62px]">
            Our Digital Marketing Services
            <br />
            <span className="text-[#5b27f7]">in Kota</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl font-assistant text-base leading-7 text-white/60 sm:text-lg">
            End-to-end digital marketing solutions tailored for businesses in
            Kota that want better visibility, stronger branding, and more leads.
          </p>
        </div>

        {/* cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative overflow-hidden border border-white/10 bg-[#060606] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#5b27f7]/70 hover:bg-[#0b0b12]"
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#5b27f7]/10 blur-2xl" />
              </div>

              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#5b27f7]" />
                  <h3 className="font-roobert text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="font-assistant text-sm leading-7 text-white/60 sm:text-base">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SharedLayout>
    </section>
  );
};