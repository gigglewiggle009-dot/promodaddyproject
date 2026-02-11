'use client'
import { logo } from "@/assets";
import { navTitle } from "@/constant";
import Link from "next/link";
import { SharedButton } from "..";
import { MobileDrawer } from "@/components/MobileDrawer";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { usePathname } from "next/navigation";
import styles from "@/components/HomeBanner/style.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";

export const SharedHeader = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="py-5 bg-primaryBlack top-0 z-[999] fixed w-full">
      <div className="w-11/12 mx-auto">
        <div className="flex items-center justify-between">
          <div className="h-[70px] w-[70px]">
            <img src={logo.src} alt="logo" className="w-full h-full" />
          </div>
          <div className="hidden lg:flex items-center gap-[140px] justify-around ">
            <div className="flex items-center gap-10">
              {navTitle.map((nav, index) => (
                <Link href={nav.link} key={index}>
                  <p className={`w-fit font-bold text-white text-base ${path === nav.link ? "underline decoration-2 underline-offset-8 text-blue-500" : "hover:text-btnColor"}`}>
                    {nav.name}
                  </p>
                </Link>
              ))}
            </div>
            <div>
            <Link href={'./contact'}>
            <SharedButton
                text="WORK WITH US"
                className="text-white font-bold text-sm bg-primaryBlue px-4 py-1 rounded-lg *:"
              >
                WORK WITH US
              </SharedButton>
              </Link>
            </div>
          </div>
          <button className="block ml-[250px] text-white lg:hidden" onClick={toggleDrawer}>
          <GiHamburgerMenu className="w-10 h-10" />
          </button>
          <div className="block lg:hidden">
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="right"
              className="!w-[250px] sm:!w-[400px] "
            >
              <MobileDrawer />
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
};
