"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { arrowLeft, arrowRight } from "@/assets";

import "swiper/css";
import "swiper/css/navigation";

const CustomCarousel = ({
  children,
  direction = "ltr",
  loop = false,
  carouselId = "carouselId",
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const itemsArray = React.Children.toArray(children);

  return (
    <div>
      <Swiper
        modules={[Autoplay, Navigation]}
        dir={direction}
        spaceBetween={20}
        slidesPerView={"auto"}
        loop={loop}
        autoplay={
          loop
            ? {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        navigation={
          carouselId === "reviewCarousel"
            ? {
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }
            : false
        }
        onBeforeInit={(swiper) => {
          if (carouselId === "reviewCarousel") {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        className="!overflow-visible"
      >
        {itemsArray.map((child, index) => (
          <SwiperSlide key={index} className="!w-auto">
            {child}
          </SwiperSlide>
        ))}
      </Swiper>

      {carouselId === "reviewCarousel" && (
        <div className="relative z-30 mt-10 flex justify-center gap-4">
          <button
            ref={prevRef}
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5b27f7]"
            aria-label="Previous slide"
          >
            <Image src={arrowLeft.src} alt="Previous" width={20} height={20} />
          </button>

          <button
            ref={nextRef}
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5b27f7]"
            aria-label="Next slide"
          >
            <Image src={arrowRight.src} alt="Next" width={20} height={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomCarousel;