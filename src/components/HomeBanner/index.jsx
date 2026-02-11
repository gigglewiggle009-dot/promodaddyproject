"use client"
import React from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import { SharedButton } from "../SharedComponent";
import { motion } from "framer-motion"
import { HomeCarousel } from "..";
import { A, B, C, D, E, H, M } from "@/assets";
export const HomeBanner = () => {

  return (
    <section id="hero" className={styles.wrapper}>
      {/* <video
        id="video-tag"
        muted
        loop
        autoPlay
        playsInline
        preload="auto"
        width={"100%"}
        className={styles.video}
      // poster="/videos/thumbnail.png"
      >
        <source src="coverVideo.webm" type="video/webm" className={styles.video} />
        <source src="coverVideo.mp4" type="video/mp4" className={styles.video} />
      </video> */}
      <img  className=" md:w-[220px] md:h-[220px] w-[120px] h-[120px]  lg:w-[220px] lg:h-[220px] xl:w-[320px] xl:h-[320px] rounded-[100%] lg:right-36 mx-auto md:right-4 right-12     overflow-hidden absolute  bottom-0" src={D.src} alt="" />
      <img  className=" md:w-[220px] md:h-[220px] w-[120px] h-[120px]   lg:w-[220px] lg:h-[220px] xl:w-[320px] xl:h-[320px] rounded-[100%] lg:left-36 mx-auto md:left-4 left-12   overflow-hidden absolute bottom-0" src={M.src} alt="" />
      <div className={styles.textPosition}>
        <motion.div className={styles.heroTitle}
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
        <div className={styles.heroDescription} >
          <p>{(
            "We specialize in creating immersive and engaging user experiences that captivate your audience and drive meaningful interactions"
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
            ))}</p>
        </div>
        <div className={styles.buttonWrapper}>
          <Link href={`/auth/register`}>
            <motion.div
              initial={{ x: 150, opacity: 0, }}
              animate={{ x: 0, opacity: 1, }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}>
              {/* <SharedButton className={styles.button}>Let&apos;s Start</SharedButton> */}
            </motion.div>
          </Link>
          <Link href={`auth/register`}>
            <motion.div
              initial={{ x: -150, opacity: 0, }}
              animate={{ x: 0, opacity: 1, }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
              className={styles.freeScanButtonBorder}>
              {/* <SharedButton className={styles.freeScanButton}>Our Work</SharedButton> */}
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};
