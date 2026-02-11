'use client'
import { logo } from "@/assets";
import { navTitle } from "@/constant";
import Link from "next/link";
import { SharedButton } from "..";
import { MobileDrawer } from "@/components/MobileDrawer";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "react-modern-drawer/dist/index.css";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";

const Drawer = dynamic(() => import("react-modern-drawer"), {
  ssr: false,
});

export const SharedHeader = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  // ✅ Auto close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [path]);

  return (
    <header className="py-5 bg-primaryBlack fixed top-0 z-[999] w-full">
      <div className="w-11/12 mx-auto">
        
        {/* Main Flex Container */}
        <div className="flex items-center justify-between w-full">
          
          {/* Logo */}
          <div className="h-[70px] w-[70px]">
            <img src={logo.src} alt="logo" className="w-full h-full" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-[140px]">
            <div className="flex items-center gap-10">
              {navTitle.map((nav, index) => (
                <Link href={nav.link} key={index}>
                  <p
                    className={`w-fit font-bold text-white text-base ${
                      path === nav.link
                        ? "underline decoration-2 underline-offset-8 text-blue-500"
                        : "hover:text-btnColor"
                    }`}
                  >
                    {nav.name}
                  </p>
                </Link>
              ))}
            </div>

          <Link href="/contact">
  <button className="text-white font-bold text-sm bg-primaryBlue px-6 py-2 rounded-xl border-2 border-primaryBlue hover:scale-105 transition-all duration-300">
    WORK WITH US
  </button>
</Link>

          </div>

          {/* Mobile Hamburger */}
          <button
            className="text-white lg:hidden"
            onClick={toggleDrawer}
          >
            <GiHamburgerMenu className="w-8 h-8" />
          </button>
        </div>

        {/* Mobile Drawer */}
        <div className="block lg:hidden">
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            className="!w-[250px] sm:!w-[400px]"
          >
            <MobileDrawer onClose={toggleDrawer} />
          </Drawer>
        </div>

      </div>
    </header>
  );
};
