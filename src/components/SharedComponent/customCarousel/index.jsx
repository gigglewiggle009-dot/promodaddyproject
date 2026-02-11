import React, { ReactNode, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Image from "next/image";
import { arrowLeft, arrowRight } from "@/assets";

const $ = require("jquery");

const OwlCarousel = dynamic(() => import("react-owl-carousel-rtl"), {
  ssr: false,
});



const CustomCarousel = ({ children, direction = "ltr", loop = false, carouselId = "carouselId" }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.$ = window.jQuery = require("jquery");
    }
  }, []);

  return (
    <div>
      <OwlCarousel
        items={2}
        autoWidth
        dotsClass="owl-dots"
        dots={false}
        margin={20}
        rtl={direction === "ltr" ? false : true}
        loop={false}
        autoplay={loop}
        autoplayTimeout={3000}
        autoplayHoverPause={true}
        id={carouselId}
      >
        {children}
      </OwlCarousel>
      {carouselId === "reviewCarousel" && (
        <div className="flex justify-center relative z-30 mt-10 gap-4 ">
          <button className="w-12 h-12 bg-[#5b27f7] rounded-xl flex justify-center items-center" onClick={() => $(`#${carouselId}`).trigger("prev.owl.carousel")}>
            <Image src={arrowLeft.src} alt="arrow" />
          </button>
          <button className="w-12 h-12 bg-[#5b27f7] rounded-xl flex justify-center items-center" onClick={() => $(`#${carouselId}`).trigger("next.owl.carousel")}>
            <Image src={arrowRight.src} alt="arrow" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomCarousel;
