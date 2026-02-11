import { navTitle } from "@/constant";
import Link from "next/link";
import { SharedButton } from "../SharedComponent";
import { logo } from "@/assets";

export const MobileDrawer = ({ onClose }) => {
  return (
    <div className="px-10 pt-10 bg-black h-[1800px]">
      <div className="h-[70px] w-[70px]">
        <img src={logo.src} alt="logo" className="w-full h-full" />
      </div>
      <div className="mt-5 space-y-2">
        {navTitle.map((nav, index) => (
          <Link
            href={nav.link}
            key={index}
            onClick={onClose}
            className="block text-sm font-bold w-fit"
          >
            {nav.name}
          </Link>
        ))}
      </div>
      {/* <div className="mt-5">
        <SharedButton
          text="WORK WITH US"
          className="px-5 py-4 text-sm font-bold text-white rounded-none bg-primaryBlack"
        />
      </div> */}
    </div>
  );
};
