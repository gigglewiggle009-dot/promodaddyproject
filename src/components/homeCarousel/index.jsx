import React from "react";
import Slider from "react-slick";
import { homeBannerData } from "@/constant";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { arrow } from "@/assets";

const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <img
      src={arrow.src}
      className={`${className} block absolute !h-10 !w-10  lg:mr-16 md:mr-12 mr-10 2xl:mt-4 !border-solid !border-2 !border-white z-[999] rounded-sm !p-1 2x:p-4`}
      onClick={onClick}
      alt="Next Arrow"
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <img
      src={arrow.src}
      className={`${className} custom-arrow next-arrow block absolute !h-10 !w-10  lg:mr-16 md:mr-12 mr-10 2xl:mt-4 !border-solid !border-2 !border-white z-[999] rounded-sm !p-1 2x:p-4 !-rotate-180 !left-[20px]`}
      onClick={onClick}
      alt="Next Arrow"
    />
  );
};

export const HomeCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // dotsClass: "slick-dots ",
    nextArrow: <SampleNextArrow dir={true} />,
    prevArrow: <SamplePrevArrow dir={false} />,
  };

  return (
    <section className="bg-primaryBlack">
      <div className="w-11/12 mx-auto">
        <div className="bg-white ">
          <div>
            <Slider {...settings}>
              {homeBannerData.map((item, index) => {
                return (
                  <div key={index} className="w-full h-full">
                    <img
                      className="w-full h-full object-cover"
                      src={item.BannerImage}
                      alt=""
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
