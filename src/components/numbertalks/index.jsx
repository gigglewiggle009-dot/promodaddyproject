'use client'
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";


const countSections = [
  { label: "Years of Experience", count: 7, desc: "crafting engaging content and building thriving online communities. I drive results through innovative campaigns and data-driven strategies." },
  { label: "Successful Projects", count: 1000, desc: "With a proven track record of 50+ successful social media projects, we know how to turn engagement into growth." },
  { label: "Satisfied Customers", count: 300, desc: "Over 30 happy clients are thriving thanks to our social media magic! See how we can elevate our brand too." },
];

const NumberTalks = () => {
  const [counterOn, setCounterOn] = useState(false);


  return (
    <section className="py-8 bg-black ">
      <div className="w-11/12 mx-auto">
        <div className="py-8 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-3">
            {countSections.map((section, index) => (
              <ScrollTrigger
                key={index}
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <div className={`lg:h-[300px] flex flex-col justify-center text-xl font-semibold ${index !== countSections.length - 1 ? 'border-e-2 border-e-blue-500' : ''} shadow-xl`}>
                  <div className="text-blue-500 font-Inter  text-2xl xl:text-[42px]  font-bold lg:mb-4 mb-2 px-8  ">
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={section.count}
                        duration={2}
                        delay={1}
                      />
                    )}
                    &nbsp;+
                  </div>
                  <div className="px-8 py-4 text-xl text-gray-700 xl:text-4xl font-Inter lg:text-3xl md:text-sm whitespace-nowrap text-start">
                    {section.label}
                  </div>
                  <div className="px-8">
                    {section.desc}
                  </div>
                </div>
              </ScrollTrigger>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumberTalks;
