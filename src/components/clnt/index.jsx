// Contact.js
import React from "react";
import { contactData } from "@/constant";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="py-20 bg-primaryBlack">
      <div className="grid w-5/6 mx-auto lg:grid-cols-3 gap-x-8 gap-y-8">
        {contactData.map((item, index) => (
          <div
            className="bg-[#ecefff] cursor-pointer border-primaryBlue h-[208px] transition-all duration-300 ease-in-out group rounded-lg overflow-hidden relative"
            key={index}
          >
            <div className="p-2 font-semibold duration-300 transform xl:p-8 group-hover:p-6 group-hover:space-y-2 space-y-9">
              <img
                className="w-16 h-16 my-2 transition-all duration-300 transform"
                src={item.image.src}
                alt="Contact Image"
              />
              <p className="transition-all duration-300 text-19 text-primaryBlack">
                {item.heading}
              </p>
              <div className="flex-col hidden email-container group-hover:flex">
                {item?.details?.map((d, i) => (
                  <div key={i}>
                    <p href={d} className="text-base font-normal text-black">
                      {d}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
