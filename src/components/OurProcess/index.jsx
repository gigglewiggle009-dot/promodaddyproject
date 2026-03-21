"use client";

import React from "react";
import { SharedLayout } from "@/components/SharedComponent";

const processSteps = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "Aap call/WhatsApp karo — hum aapka business samjhenge. Zero cost, zero obligation.",
  },
  {
    number: "02",
    title: "Custom Strategy",
    description:
      "Aapke goals, budget aur competition ke hisaab se tailored plan banate hain.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Campaign launch — ads, SEO, content, social media — sab ek saath.",
  },
  {
    number: "04",
    title: "Weekly Updates",
    description:
      "Aap hamesha jante ho kya ho raha hai — no surprises, full transparency.",
  },
  {
    number: "05",
    title: "Growth & Scale",
    description:
      "Jo kaam karta hai use scale karo — consistent compounding growth.",
  },
];

export const OurProcess = () => {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-20 text-white md:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6d28d9]/10 blur-[140px]" />
      </div>

      <SharedLayout>
        <div className="relative z-10 w-full">
          {/* Heading */}
          <div className="mb-16">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#a855f7]">
              Our Process
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              How We Work
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 border-t border-white/10 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group relative min-h-full border-b border-white/10 px-6 py-10 transition-all duration-300 hover:bg-white/[0.02] md:border-b-0 md:border-r md:last:border-r-0 lg:px-8"
              >
                {/* Hover Glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/12 blur-3xl" />
                </div>

                <div className="relative z-10">
                  {/* Step Number */}
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-[#8b5cf6] text-base font-semibold text-[#c4b5fd] transition-all duration-300 group-hover:border-[#a855f7] group-hover:text-white">
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="mb-5 text-2xl font-semibold leading-tight transition-colors duration-300 group-hover:text-[#ede9fe]">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="max-w-[230px] text-base leading-relaxed text-white/55 transition-colors duration-300 group-hover:text-white/70">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};


// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import Process1 from "@/assets/process1.jpg";
// import Process2 from "@/assets/process2.jpg";
// import Process3 from "@/assets/process3.jpg";
// import Process4 from "@/assets/process4.jpg";
// import Process5 from "@/assets/process5.jpg";

// export const OurProcess = () => {

//   const steps = [
//     {
//       step: "01",
//       title: "Free Consultation",
//       desc: "Aap call/WhatsApp karo — hum aapka business samjhenge. Zero cost, zero obligation.",
//       gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
//       glow: "from-purple-500 to-pink-500",
//       image: Process1,
//     },
//     {
//       step: "02",
//       title: "Custom Strategy",
//       desc: "Aapke goals, budget aur competition ke hisaab se tailored plan banate hain.",
//       gradient: "bg-gradient-to-r from-blue-500 to-pink-500",
//       glow: "from-blue-500 to-cyan-500",
//       image: Process2,
//     },
//     {
//       step: "03",
//       title: "Execution",
//       desc: "Campaign launch — ads, SEO, content, social media — sab ek saath.",
//       gradient: "bg-gradient-to-r from-pink-500 to-green-500",
//       glow: "from-purple-500 to-pink-500",
//       image: Process3,
//     },
//     {
//       step: "04",
//       title: "Weekly Updates",
//       desc: "Aap hamesha jante ho kya ho raha hai — no surprises, full transparency.",
//       gradient: "bg-gradient-to-r from-red-500 to-yellow-500",
//       glow: "from-blue-500 to-cyan-500",
//       image: Process4,
//     },
//     {
//       step: "05",
//       title: "Growth & Scale",
//       desc: "Jo kaam karta hai use scale karo — consistent compounding growth.",
//       gradient: "bg-gradient-to-r from-pink-500 to-rose-500",
//       glow: "from-pink-500 to-rose-500",
//       image: Process5,
//     },
//   ];

//   const [visible, setVisible] = useState([]);
//   const refs = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setVisible((prev) =>
//               [...new Set([...prev, entry.target.dataset.index])]
//             );
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     refs.current.forEach((el) => el && observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="bg-[#0b0b0b] text-white py-32 relative overflow-hidden">

//       {/* Background Glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.08),_transparent_70%)]"></div>

//       <div className="max-w-6xl mx-auto px-6 relative z-10">

//         {/* Heading */}
//         <div className="text-center mb-24">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             How We Work — Simple, Transparent, Effective
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             From first call to scaling your business — we follow a clear,
//             proven process that delivers real results.
//           </p>
//         </div>

//         {/* Timeline Line */}
//         <div className="absolute left-1/2 top-[220px] bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 transform -translate-x-1/2 hidden md:block"></div>

//         {/* Steps */}
//         <div className="space-y-24">

//           {steps.map((item, index) => {
//             const isLeft = index % 2 === 0;

//             return (
//               <div
//                 key={index}
//                 ref={(el) => (refs.current[index] = el)}
//                 data-index={index}
//                 className={`grid md:grid-cols-2 items-center gap-10 transition-all duration-700 ${
//                   visible.includes(index.toString())
//                     ? "opacity-100 translate-y-0"
//                     : "opacity-0 translate-y-16"
//                 }`}
//               >

//                 {/* TEXT CARD */}
//                 <div className={`${isLeft ? "md:order-1 text-right pr-6" : "md:order-2 text-left pl-6"}`}>
//                   <div className="relative group">

//                     {/* Glow FIX */}
//                     <div className={`absolute inset-0 bg-gradient-to-r ${item.glow} opacity-30 blur-2xl rounded-2xl`}></div>

//                     {/* Card */}
//                     <div className="relative bg-[#111] border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition">

//                       <div className={`inline-block px-4 py-1 mb-3 text-sm font-semibold rounded-full ${item.gradient}`}>
//                         Step {item.step}
//                       </div>

//                       <h3 className="text-xl font-semibold mb-3">
//                         {item.title}
//                       </h3>

//                       <p className="text-gray-400 text-sm leading-relaxed">
//                         {item.desc}
//                       </p>

//                     </div>
//                   </div>
//                 </div>

//                 {/* IMAGE */}
//                 <div className={`${isLeft ? "md:order-2" : "md:order-1"} flex justify-center`}>
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     width={320}
//                     height={320}
//                     className="rounded-xl object-contain hover:scale-105 transition duration-300"
//                   />
//                 </div>

//               </div>
//             );
//           })}

//         </div>

//       </div>
//     </section>
//   );
// };