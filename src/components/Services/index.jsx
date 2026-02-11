"use client";
import { BrandService, ServiceImg } from "@/assets";
import { serviceData } from "@/constant";
import { SharedHeading } from "../SharedComponent";
import { LuCheckCircle } from "react-icons/lu";
import { motion } from 'framer-motion'

export const Services = () => {
  return (
    <div className="overflow-hidden text-white bg-primaryBlack">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-4 items-center">
          <motion.div
           initial={{ y: -200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1,ease:'easeOut' }}
          >
            <img src={BrandService.src} className="lg:w-[450px] w-[330px] md:h-[430px] md:w-[430px]  mx-auto h-full rounded-full " alt="Service" />
          </motion.div>
          <div className="mx-16">
            <motion.div
             initial={{ x: 100, opacity: 0 }}
            animate='animate'
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1,ease:'easeOut' }}
             className="flex flex-col items-start justify-center w-full h-full space-y-8 ">
              <SharedHeading>{serviceData.header}</SharedHeading>
              <div className="text-base font-normal">{serviceData.details}</div>
              <motion.div
              initial={{ x: 100, opacity: 0 }}
            animate='animate'
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1,ease:'easeOut' }}
               className="space-y-5 text-sm text-nowrap">
                {[
                  serviceData.subtext1,
                  serviceData.subtext2,
                  serviceData.subtext3,
                  serviceData.subtext4,
                  serviceData.subtext5,
                  serviceData.subtext6,
                ].map((text, index) => (
                  <div
                    key={index}
                    className="flex items-center font-semibold text-blue-500 gap-7"
                  >
                    <LuCheckCircle className="text-3xl text-green" />
                    <span>{text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
