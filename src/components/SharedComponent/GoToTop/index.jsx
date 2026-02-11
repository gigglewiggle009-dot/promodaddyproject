"use client";
import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

export const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-5 right-5 bg-primaryBlue p-3 cursor-pointer  rounded-full text-white z-[99999] ${
        isVisible ? "visible" : "invisible"
      }`}
      onClick={scrollToTop}
    >
      <FaArrowCircleUp className="h-6 w-6" />
    </div>
  );
};

export default GoToTop;
