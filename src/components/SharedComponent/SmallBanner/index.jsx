'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from 'framer-motion'


export const SmallBanner = ({ bannerImage, sectionsName, discriptions }) => {
  const param = usePathname();

  return (
    <div className="overflow-hidden">
      <div
        style={{ backgroundImage: `url(${bannerImage})` }}
        className="relative z-10 block bg-center bg-no-repeat bg-cover"
      >
        <div className="bg-gradient h-[482px] px-0">
          <div className="w-11/12 h-full m-auto tablet:w-10/12">
            <div className="absolute inset-0 bg-gradient">
              <motion.div
                initial={{ y: 250 }}
                animate={{ y: -10 }}
                transition={{ delay: 0.4, type: 'spring' }}
                className="absolute inset-0 flex flex-col items-center justify-center space-y-3">
                <h2 className="text-3xl font-extrabold text-center text-white capitalize md:text-4xl xl:text-5xl">
                  {sectionsName}
                </h2>
                <div className="px-6 text-sm text-center text-white md:text-base md:px-12 lg:w-1/3">
                  {discriptions}
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 right-[5%] bg-white px-8 text-black py-3 rounded-t-xl space-x-2 text-base">
            <Link href={'/'}>Home</Link>
            <span>/</span>
            <Link href={param} className="capitalize text-primaryBlue">{sectionsName}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
