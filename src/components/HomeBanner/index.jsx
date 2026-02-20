"use client"
import React from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { A, B, C, D, E, H, M } from "@/assets";

export const HomeBanner = () => {
  return (
    <section id="hero" className={styles.wrapper}>
      
      {/* Right Image */}
      <img
        className="md:w-[220px] md:h-[220px] w-[120px] h-[120px] lg:w-[220px] lg:h-[220px] xl:w-[320px] xl:h-[320px] rounded-[100%] lg:right-36 mx-auto md:right-4 right-12 overflow-hidden absolute bottom-0"
        src={D.src}
        alt="Creative design showcase"
      />

      {/* Left Image */}
      <img
        className="md:w-[220px] md:h-[220px] w-[120px] h-[120px] lg:w-[220px] lg:h-[220px] xl:w-[320px] xl:h-[320px] rounded-[100%] lg:left-36 mx-auto md:left-4 left-12 overflow-hidden absolute bottom-0"
        src={M.src}
        alt="Digital agency work preview"
      />

      <div className={styles.textPosition}>
        
        {/* Main Heading */}
        <motion.div
          className={styles.heroTitle}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <span className={styles.greyArea}>We Make,</span>
          <span className={styles.gradientArea}> Creative Things Everyday</span>
        </motion.div>

        {/* Description */}
        <div className={styles.heroDescription}>
          <p>
            {(
              "We specialize in creating immersive and engaging user experiences that captivate your audience and drive meaningful interactions."
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
        </div>

        {/* Button Wrapper (Empty – Safe) */}
        <div className={styles.buttonWrapper}></div>

      </div>
    </section>
  );
};
