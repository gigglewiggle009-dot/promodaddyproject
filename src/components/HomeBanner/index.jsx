"use client";

import BannerGif from "@/assets/banner-gif-new-one.gif";
import React, { useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { X } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

/* COUNTER */
const Counter = ({ target, suffix = "", decimals = 0 }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 30);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        start = target;
        clearInterval(timer);
      }

      setCount(start);
    }, 30);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </>
  );
};

export const HomeBanner = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const { name, phone, service, message } = formData;

    const whatsappMessage = `Hello Promodaddy Digital,

I want a free consultation.

Name: ${name}
Phone: ${phone}
Service: ${service}
Message: ${message}`;

    const whatsappUrl = `https://wa.me/918690522210?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");

    setIsPopupOpen(false);
    setFormData({
      name: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <>
      <section className="bg-[#0b0b0b] text-white pt-24 pb-12 sm:pt-28 sm:pb-14 md:pt-32 md:pb-16 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.12),_transparent_70%)] pointer-events-none" />

        <SharedLayout>
          {/* HERO */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 xl:gap-16 mb-8">
            {/* LEFT */}
            <div className="w-full max-w-[620px] mx-auto lg:mx-0 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight mb-5">
                Digital Marketing Agency in India Trusted by Bollywood Stars &
                Cricketers
              </h1>

              <p className="text-gray-300 mb-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-[580px] mx-auto lg:mx-0">
                From Kota to the whole of India we deliver results-driven digital
                marketing services that generate real leads, real revenue, and
                scalable growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-5">
                <button
                  onClick={() => setIsPopupOpen(true)}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium w-full sm:w-auto transition duration-300"
                >
                  Get Free Consultation
                </button>

                <a
                  href="https://wa.me/918690522210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/40 hover:border-green-500 text-white hover:text-green-400 px-6 py-3 rounded-lg font-medium w-full sm:w-auto transition duration-300 text-center"
                >
                  WhatsApp Us Now
                </a>
              </div>

              <p className="text-gray-400 text-xs sm:text-sm mb-2">
                📍 Serving: Kota | Jaipur | Delhi | Mumbai | Pan India
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[440px] md:max-w-[460px] lg:max-w-[480px]">
                <Image
                  src={BannerGif}
                  alt="Banner"
                  width={560}
                  height={390}
                  className="object-contain w-full"
                  priority
                />
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <div className="relative text-center px-4 py-3 lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:-translate-y-1/2 lg:after:h-24 lg:after:w-[3px] lg:after:bg-gradient-to-b lg:after:from-purple-500 lg:after:via-pink-500 lg:after:to-purple-500 lg:after:opacity-80">
              <h4 className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                <Counter target={5000} suffix="+" />
              </h4>
              <p className="text-gray-300 text-sm md:text-base">
                Successful Projects
              </p>
            </div>

            <div className="relative text-center px-4 py-3 lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:-translate-y-1/2 lg:after:h-24 lg:after:w-[3px] lg:after:bg-gradient-to-b lg:after:from-purple-500 lg:after:via-pink-500 lg:after:to-purple-500 lg:after:opacity-80">
              <h4 className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                <Counter target={1600} suffix="+" />
              </h4>
              <p className="text-gray-300 text-sm md:text-base">
                Google Reviews
              </p>
            </div>

            <div className="relative text-center px-4 py-3 lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:-translate-y-1/2 lg:after:h-24 lg:after:w-[3px] lg:after:bg-gradient-to-b lg:after:from-purple-500 lg:after:via-pink-500 lg:after:to-purple-500 lg:after:opacity-80">
              <h4 className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                <Counter target={5} decimals={1} />{" "}
                <span className="text-yellow-400">⭐</span>
              </h4>
              <p className="text-gray-300 text-sm md:text-base">
                Google Rating
              </p>
            </div>

            <div className="text-center px-4 py-3">
              <h4 className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                <Counter target={12} suffix="+" />
              </h4>
              <p className="text-gray-300 text-sm md:text-base">
                Years Experience
              </p>
            </div>
          </div>
        </SharedLayout>

        {/* MARQUEE */}
        <div className="border-t border-white/10 pt-5">
          <Marquee speed={60} pauseOnHover gradient={false}>
            {[
              "SEO Services",
              "Google Ads",
              "Social Media Marketing",
              "Meta Ads",
              "Website Development",
              "YouTube Marketing",
              "Celebrity PR",
              "Content Marketing",
              "Local SEO",
              "Influencer Marketing",
            ].map((service, i) => (
              <div
                key={i}
                className="group flex items-center text-xl md:text-2xl font-semibold mx-8 md:mx-10"
              >
                <span className="text-white group-hover:text-purple-300 transition duration-300">
                  {service}
                </span>
                <span className="mx-5 md:mx-6 text-purple-500">✦</span>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* POPUP FORM */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#111111] border border-white/10 shadow-2xl overflow-hidden">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute right-4 top-4 text-white/70 hover:text-white transition"
            >
              <X size={24} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* LEFT */}
              <div className="p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500 mb-3">
                  Free Consultation
                </p>

                <h3 className="text-2xl sm:text-3xl font-bold leading-tight mb-3">
                  Let&apos;s Build Your Brand Growth Engine
                </h3>

                <p className="text-white/70 text-sm sm:text-base mb-6 leading-relaxed">
                  Share your details and our team will connect with you on
                  WhatsApp with the right digital marketing plan.
                </p>

                <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-orange-500"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-orange-500"
                  />

                  <input
                    type="text"
                    name="service"
                    placeholder="Service Needed"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-orange-500"
                  />

                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-orange-500 resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                  >
                    Submit on WhatsApp
                  </button>
                </form>
              </div>

              {/* RIGHT */}
              <div className="hidden md:flex items-center justify-center bg-[#0c0c0c] p-6">
                <div className="w-full max-w-xs rounded-2xl border border-white/10 bg-gradient-to-b from-orange-500/10 to-purple-500/10 p-6">
                  <h4 className="text-xl font-semibold mb-4">
                    Why choose us?
                  </h4>

                  <ul className="space-y-3 text-sm text-white/80">
                    <li>✓ 500+ businesses served</li>
                    <li>✓ Bollywood & cricketer trusted</li>
                    <li>✓ SEO, Ads, Social & Branding</li>
                    <li>✓ Fast WhatsApp response</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// "use client";
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import LaptopFrame from "@/assets/laptop-frame.jpg";
// import PhoneFrame from "@/assets/phone-frame.png";
// import SEO from "@/assets/SEO.png";
// import SonuSoodCeleb from "@/assets/sonusood.jpg";
// import DigitalMarketing from "@/assets/digitalmarketing.png";

// export const HomeBanner = () => {
//   const [active, setActive] = useState(0);

//   const services = [
//     {
//       title: "Digital Marketing",
//       desc: "Grow your brand with performance strategies.",
//       stats: "500+ Campaigns",
//       laptopTitle: "High Converting Strategy",
//       phoneTitle: "Marketing Growth",
//       src: DigitalMarketing.src,
//     },
//     {
//       title: "Celebrity",
//       desc: "Scale your online store revenue.",
//       stats: "300+ Stores",
//       laptopTitle: "Build Next eCommerce Brand",
//       phoneTitle: "Shop Growth",
//       src: SonuSoodCeleb.src,
//     },
//     {
//       title: "SEO Optimization",
//       desc: "Rank higher and get organic traffic.",
//       stats: "1000+ Keywords",
//       laptopTitle: "Rank #1 on Google",
//       phoneTitle: "SEO Growth",
//       src: SEO.src,
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActive((prev) => (prev + 1) % services.length);
//     }, 2500);
//     return () => clearInterval(interval);
//   }, [services.length]);

//   return (
//     <section className="relative bg-black text-white pt-32 pb-30 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

//         {/* LEFT */}
//         <div>

//           {/* 🔥 HIDDEN ON MOBILE */}
//           <div className="mt-6 h-[90px] items-center hidden md:flex">
//             <motion.div
//               key={active}
//               animate={{ opacity: [0, 1], y: [20, 0] }}
//               transition={{ duration: 0.5 }}
//               className="relative px-6 py-3 rounded-xl border-2 border-white text-purple-400 text-2xl font-semibold bg-transparent w-[400px] text-center"
//             >
//               <span className="absolute inset-0 blur-xl opacity-30 bg-purple-500 rounded-xl -z-10"></span>
//               🚀 {services[active].title}
//             </motion.div>
//           </div>

//           <h1 className="mt-6 text-lg md:text-xl text-gray-300 max-w-md">
//             Promodaddy Digital – Trusted digital marketing agency in India offering celebrities & SEO, Google Ads & social media marketing. 160+ happy clients. Free consultation!
//           </h1>

//           {/* BUTTONS */}
//           <div className="flex gap-4 mt-8 flex-wrap">
//             <button className="bg-purple-600 px-6 py-3 rounded-full hover:bg-purple-700 transition">
//               Get Free Consultation
//             </button>

//             <button className="border border-purple-500 px-6 py-3 rounded-full text-purple-400 hover:bg-purple-600 hover:text-white transition">
//               WhatsApp Us Now
//             </button>
//           </div>

//           <p className="text-gray-400 mt-4 max-w-md">
//             {services[active].desc}
//           </p>

//           <div className="text-purple-400 mt-3 font-semibold">
//             {services[active].stats}
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="relative flex justify-center items-center">

//           {/* 💻 LAPTOP (HIDDEN ON MOBILE) */}
//           <motion.img
//             src={LaptopFrame.src}
//             alt="laptop"
//             className="hidden md:block w-[500px] relative z-10"
//             animate={{ y: [0, -10, 0] }}
//             transition={{ duration: 4, repeat: Infinity }}
//           />

//           {/* 💻 LAPTOP SCREEN (HIDDEN ON MOBILE) */}
//           <div
//             key={"laptop-" + services[active].title}
//             className="hidden md:block absolute top-[9%] left-[50%] -translate-x-1/2 z-20 w-[400px] h-[250px]"
//           >
//             <div className="w-full h-full overflow-hidden rounded-md relative bg-white">

//               <motion.img
//                 key={services[active].src}
//                 src={services[active].src}
//                 alt="service"
//                 className="w-full h-full object-cover"
//                 initial={{ opacity: 0, scale: 1.1 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6 }}
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-between p-4">
//                 <div className="text-[10px] px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 w-fit font-semibold">
//                   🚀 TOP SERVICE
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* 📱 PHONE (CENTERED ON MOBILE) */}
//           <motion.img
//             src={PhoneFrame.src}
//             alt="phone"
//             className="w-[150px] md:absolute md:right-[8%] md:bottom-[2%] z-30 mx-auto"
//           />

//           {/* 📱 PHONE SCREEN */}
//           <div
//             key={"phone-" + services[active].title}
//             className="relative md:absolute md:right-[7.5%] md:bottom-[6%] 
//             z-40 w-[142px] h-[265px] mx-auto mt-[-260px]"
//           >
//             <div className="w-full h-full rounded-[18px] overflow-hidden bg-white p-3 flex flex-col justify-between shadow-xl">

//               <div className="text-[10px] px-2 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold w-fit">
//                 {services[active].title}
//               </div>

//               <div className="mt-2">
//                 <h3 className="text-[12px] font-bold text-black">
//                   {services[active].phoneTitle}
//                 </h3>

//                 <p className="text-[10px] text-gray-700 mt-1">
//                   {services[active].desc}
//                 </p>
//               </div>

//               <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] py-1.5 rounded-md text-center">
//                 Get Started
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import LaptopFrame from "@/assets/laptop-frame.jpg";
// import PhoneFrame from "@/assets/phone-frame.png";

// export const HomeBanner = () => {
//   const [active, setActive] = useState(0);

//   const services = [
//     {
//       title: "Digital Marketing",
//       desc: "Grow your brand with performance strategies.",
//       stats: "500+ Campaigns",
//       screenTitle: "Build to Engage Audience",
//       screenDesc: "Run ads, optimize funnels and increase conversions.",
//       mobileTitle: "Marketing Growth",
//       mobileDesc: "Ads + SEO + Social",
//     },
//     {
//       title: "Ecommerce",
//       desc: "Scale your online store revenue.",
//       stats: "300+ Stores",
//       screenTitle: "Build Next eCommerce Brand",
//       screenDesc: "Optimize product pages and boost conversions.",
//       mobileTitle: "Shop Growth",
//       mobileDesc: "Increase sales fast",
//     },
//     {
//       title: "SEO Optimization",
//       desc: "Rank higher and get organic traffic.",
//       stats: "1000+ Keywords",
//       screenTitle: "Rank #1 on Google",
//       screenDesc: "Drive traffic with strong SEO strategies.",
//       mobileTitle: "SEO Growth",
//       mobileDesc: "Traffic + Ranking",
//     },
//   ];

//   // 🔁 Auto rotate
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActive((prev) => (prev + 1) % services.length);
//     }, 3500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bg-black text-white py-24 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

//         {/* LEFT SIDE */}
//         <div>
//           <motion.div
//             className="p-6 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500 max-w-sm"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             <h3 className="text-xl font-semibold">
//               {services[active].title}
//             </h3>

//             <p className="text-gray-300 mt-2">
//               {services[active].desc}
//             </p>

//             <div className="text-purple-400 mt-3 font-semibold">
//               {services[active].stats}
//             </div>
//           </motion.div>

//           <div className="flex gap-4 mt-8 flex-wrap">
//             <button className="bg-purple-600 px-6 py-3 rounded-full hover:bg-purple-700 transition">
//               Get Free Consultation
//             </button>

//             <button className="border border-purple-500 px-6 py-3 rounded-full text-purple-400 hover:bg-purple-600 hover:text-white transition">
//               WhatsApp Us Now
//             </button>
//           </div>

//           <div className="mt-6 text-sm text-gray-400">
//             📍 Serving: Kota | Jaipur | Delhi | Mumbai | Pan India
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="relative flex justify-center items-center">

//           {/* 💻 LAPTOP */}
//           <motion.img
//             src={LaptopFrame.src}
//             alt="laptop"
//             className="w-[500px] relative z-10"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           />

//           {/* 💻 SCREEN (Premium Animated UI) */}
//           <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
//             <div className="w-[325px] h-[200px] mb-[35px] overflow-hidden rounded-sm bg-[#f9fafb]">

//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={active}
//                   initial={{ y: 40, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   exit={{ y: -40, opacity: 0 }}
//                   transition={{ duration: 0.6 }}
//                   className="w-full h-full p-3 flex flex-col justify-between text-black"
//                 >
//                   {/* Browser Top */}
//                   <div className="flex gap-2 mb-2">
//                     <div className="w-2 h-2 bg-red-400 rounded-full"></div>
//                     <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
//                     <div className="w-2 h-2 bg-green-400 rounded-full"></div>
//                   </div>

//                   {/* Content */}
//                   <div className="flex-1">
//                     <span className="text-[10px] bg-purple-500 text-white px-2 py-1 rounded">
//                       {services[active].title}
//                     </span>

//                     <h3 className="text-sm font-semibold mt-2">
//                       {services[active].screenTitle}
//                     </h3>

//                     <p className="text-[11px] text-gray-600 mt-1 leading-tight">
//                       {services[active].screenDesc}
//                     </p>
//                   </div>

//                   {/* Button */}
//                   <button className="bg-purple-600 text-white px-3 py-1.5 rounded text-[11px] w-fit">
//                     Get Started
//                   </button>
//                 </motion.div>
//               </AnimatePresence>

//             </div>
//           </div>

//           {/* 📱 PHONE */}
//           <motion.img
//             src={PhoneFrame.src}
//             alt="phone"
//             className="w-[140px] absolute right-[5%] bottom-[0%] z-20"
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//           />

//           {/* 📱 PHONE SCREEN */}
//           <div className="absolute right-[7%] bottom-[8%] w-[100px] z-30 overflow-hidden rounded-lg bg-white">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={active}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="p-2 h-[180px] flex flex-col justify-between"
//               >
//                 <div>
//                   <h4 className="text-[10px] font-semibold text-black">
//                     {services[active].mobileTitle}
//                   </h4>

//                   <p className="text-[9px] text-gray-500 mt-1">
//                     {services[active].mobileDesc}
//                   </p>
//                 </div>

//                 <div className="bg-purple-600 h-6 rounded text-white text-[9px] flex items-center justify-center">
//                   Start
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };



// "use client";
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// export const HomeBanner = () => {
//   const [active, setActive] = useState(0);

//   const services = [
//     {
//       title: "Digital Marketing",
//       desc: "Grow your brand with performance strategies.",
//       stats: "500+ Campaigns",

//       screenTitle: "Build to Engage Audience",
//       screenDesc: "Run ads, optimize funnels and increase conversions.",

//       mobileTitle: "Marketing Growth",
//       mobileDesc: "Ads + SEO + Social",
//     },
//     {
//       title: "Ecommerce",
//       desc: "Scale your online store revenue.",
//       stats: "300+ Stores",

//       screenTitle: "Build Next eCommerce Brand",
//       screenDesc: "Optimize product pages and boost conversions.",

//       mobileTitle: "Shop Growth",
//       mobileDesc: "Increase sales fast",
//     },
//     {
//       title: "SEO Optimization",
//       desc: "Rank higher and get organic traffic.",
//       stats: "1000+ Keywords",

//       screenTitle: "Rank #1 on Google",
//       screenDesc: "Drive traffic with strong SEO strategies.",

//       mobileTitle: "SEO Growth",
//       mobileDesc: "Traffic + Ranking",
//     },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActive((prev) => (prev + 1) % services.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bg-black text-white py-32 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

//         {/* LEFT SIDE */}
//         <div>
//           <motion.div
//             className="p-6 rounded-xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             <h3 className="text-xl font-semibold">
//               {services[active].title}
//             </h3>

//             <p className="text-gray-300 mt-2">
//               {services[active].desc}
//             </p>

//             <div className="text-purple-400 mt-3 font-semibold">
//               {services[active].stats}
//             </div>
//           </motion.div>

//           <div className="flex gap-4 mt-8 flex-wrap">
//             <button className="bg-purple-600 px-6 py-3 rounded-full hover:bg-purple-700 transition">
//               Get Free Consultation
//             </button>

//             <button className="border border-purple-500 px-6 py-3 rounded-full text-purple-400 hover:bg-purple-600 hover:text-white transition">
//               WhatsApp Us Now
//             </button>
//           </div>

//           <div className="mt-6 text-sm text-gray-400">
//             📍 Serving: Kota | Jaipur | Delhi | Mumbai | Pan India
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="relative flex justify-center items-center">

//           {/* 💻 LAPTOP */}
//           <motion.div
//             className="relative w-[520px] h-[320px] bg-[#111] rounded-xl shadow-2xl border border-gray-800"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//           >
//             {/* SCREEN */}
//             <div className="absolute inset-2 bg-white rounded-md p-4 flex flex-col justify-between">

//               <div>
//                 <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded">
//                   {services[active].title}
//                 </span>

//                 <h3 className="text-black text-lg font-semibold mt-2">
//                   {services[active].screenTitle}
//                 </h3>

//                 <p className="text-gray-600 text-sm mt-1">
//                   {services[active].screenDesc}
//                 </p>
//               </div>

//               <button className="bg-purple-600 text-white px-4 py-2 rounded text-sm w-fit">
//                 Get Started
//               </button>
//             </div>

//             {/* CAMERA DOT */}
//             <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rounded-full"></div>
//           </motion.div>

//           {/* 📱 PHONE */}
//           <motion.div
//             className="absolute right-[5%] bottom-[0%] w-[140px] h-[260px] bg-black rounded-[30px] shadow-xl border border-gray-700 p-2"
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//           >
//             <div className="bg-white h-full rounded-[20px] p-2 flex flex-col justify-between">

//               <div>
//                 <h4 className="text-[10px] font-semibold text-black">
//                   {services[active].mobileTitle}
//                 </h4>

//                 <p className="text-[9px] text-gray-500 mt-1">
//                   {services[active].mobileDesc}
//                 </p>
//               </div>

//               <div className="bg-purple-600 h-6 rounded text-white text-[9px] flex items-center justify-center">
//                 Start
//               </div>
//             </div>

//             {/* NOTCH */}
//             <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-2 bg-black rounded-full"></div>
//           </motion.div>

//         </div>

//       </div>
//     </section>
//   );
// };






// "use client"
// import React from "react";
// import Link from "next/link";
// import styles from "./style.module.scss";
// import { motion } from "framer-motion"
// import { HomeCarousel } from "..";
// import { A, B, C, D, E, H, M } from "@/assets";
// export const HomeBanner = () => {

//   return (
//     <section id="hero" className={styles.wrapper}>
//       {/* <video
//         id="video-tag"
//         muted
//         loop
//         autoPlay
//         playsInline
//         preload="auto"
//         width={"100%"}
//         className={styles.video}
//       // poster="/videos/thumbnail.png"
//       >
//         <source src="coverVideo.webm" type="video/webm" className={styles.video} />
//         <source src="coverVideo.mp4" type="video/mp4" className={styles.video} />
//       </video> */}
//       <img  className=" md:w-[220px] md:h-[220px] w-[120px] h-[120px]  lg:w-[220px] lg:h-[220px] xl:w-[320px] xl:h-[320px] rounded-[100%] lg:right-36 mx-auto md:right-4 right-12     overflow-hidden absolute  bottom-0" src={D.src} alt="" />
//       <img  className=" md:w-[220px] md:h-[220px] w-[120px] h-[120px]   lg:w-[220px] lg:h-[220px] xl:w-[320px] xl:h-[320px] rounded-[100%] lg:left-36 mx-auto md:left-4 left-12   overflow-hidden absolute bottom-0" src={M.src} alt="" />
//       <div className={styles.textPosition}>
//         <motion.div className={styles.heroTitle}
//           initial={{ opacity: 0, scale: 0 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{
//             duration: 1.5,
//             ease: "easeInOut",
//           }}
//         >
//           <span className={styles.greyArea}>We Make,</span>
//           <span className={styles.gradientArea}> Creative Things Everyday</span>
//         </motion.div>
//         <div className={styles.heroDescription} >
//           <p>{(
//             "We specialize in creating immersive and engaging user experiences that captivate your audience and drive meaningful interactions"
//           )
//             .split(" ")
//             .map((el, i) => (
//               <motion.span
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{
//                   duration: 1,
//                   delay: i / 10,
//                 }}
//                 key={i}
//               >
//                 {el}{" "}
//               </motion.span>
//             ))}</p>
//         </div>
//         <div className={styles.buttonWrapper}></div>
//       </div>
//     </section>
//   );
// };



