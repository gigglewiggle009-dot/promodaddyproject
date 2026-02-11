import React from "react";
import { BgAutoScan, HothurFoundation } from "@/assets";
import {motion} from "framer-motion"

const LetsCreate = () => {
  return (
    <div className="py-10 bg-black">
      <div className="flex justify-center w-11/12 mx-auto">
        {/* <div className="relative w-full p-4 text-center tablet:p-8">
          <p className="px-5 py-8 font-serif text-3xl font-semibold leading-9 md:text-7xl tablet:leading-3">
           
            {(
            " Let's Create Something Great"
          )
            .split(" ")
            .map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </p>
          <p className="font-medium text-[28px] py-10 font-serif">
            {(
            "We shift you from today's reality to tomorrow's potential,ensuring"
          )
            .split(" ")
            .map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: i / 10,
                }}
                key={i}
              >
                {el}{" "}
              </motion.span>
            ))}
          </p>
          <div className="flex flex-col items-center justify-center font-medium tablet:flex-row text-18">
            <div className="rounded-xl p-[2px]">
              <motion.button
               initial={{opacity:0,scale:0}}
               whileInView={{opacity:1,scale:1,transition:{duration:1}}}
               whileHover={{scale:1.05}}
               whileTap={{scale:0.9}}
               className="p-4 mb-8 font-serif font-bold text-white bg-primaryBlue rounded-xl">
                LET&apos;S TALK WITH US
              </motion.button>
            </div>
          </div>
          <motion.div 
          initial={{y:200,scale:0}}
          whileInView={{y:0,scale:1}}
          transition={{
            duration: 1,
            ease:"easeInOut"
          }}
          className="relative flex justify-center">
            <img
              src={HothurFoundation.src}
              alt="img"
            />
          </motion.div>
          <img
            src={BgAutoScan?.src}
            alt="background"
            className="absolute bottom-0 left-[-1%] lg:left-[7%]"
          />
        </div> */}
      </div>
    </div>
  );
};

export default LetsCreate;
