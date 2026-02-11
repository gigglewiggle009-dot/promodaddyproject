import React from "react";

export const SharedTopBanner = ({ bannerImage, sectionsName }) => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bannerImage.src})` }}
        className="relative block h-[50vh] bg-no-repeat bg-cover bg-center before:absolute before:h-full before:w-full before:content-[''] before:bg-bannerLight before:left-0 before:top-0"
      >
        <div className="bg-gradient pt-10 sm:pt-20 pb-10 sm:pb-20 px-4 sm:px-8">
          <div className="w-full sm:w-11/12 lg:w-10/12 mx-auto">
            <div className="relative block text-start z-10">
              <h2 className="text-2xl sm:text-4xl xl:text-6xl text-white leading-tight font-extrabold capitalize">
                {sectionsName}
              </h2>
            </div>
          </div>
          <ul className="absolute bottom-0 px-4 sm:px-8 py-2 mb-0 rounded-t-xl bg-white right-4 sm:right-20">
            <li className="inline-block text-xl font-medium capitalize transition-all duration-[0.5s] ease-[ease]">
              <a
                href="/"
                className="text-red-700 text-base not-italic font-medium leading-8 duration-[0.5s] ease-[ease]"
              >
                Home /
              </a>
            </li>
            <li className="inline-block text-xl font-medium capitalize transition-all duration-[0.5s] ease-[ease] ml-2"></li>
            <li className="inline-block text-blue-700 text-base not-italic font-medium leading-8 transition-all duration-[0.5s] ease-[ease]">
              {sectionsName}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
