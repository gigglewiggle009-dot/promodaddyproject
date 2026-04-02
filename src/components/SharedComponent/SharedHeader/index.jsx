'use client'

import { logo } from "@/assets";
import { navTitle } from "@/constant";
import Link from "next/link";
import { MobileDrawer } from "@/components/MobileDrawer";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "react-modern-drawer/dist/index.css";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { ChevronDown } from "lucide-react";

const Drawer = dynamic(() => import("react-modern-drawer"), {
  ssr: false,
});

/* ================= SERVICE MENU DATA ================= */
const serviceMenu = {
  digitalMarketing: [
    { label: "SEO Services", href: "/seo-services-in-india" },
    { label: "Google Ads / PPC", href: "/google-ads" },
    { label: "Meta Ads", href: "/meta-ads" },
    { label: "Social Media Marketing", href: "/social-media-marketing-india" },
    { label: "YouTube Marketing", href: "/youtube-marketing" },
  ],
  brandingGrowth: [
    { label: "Website Development", href: "/website-development" },
    { label: "Content Marketing", href: "/content-marketing" },
    { label: "Local SEO", href: "/local-seo-services" },
    { label: "Celebrity PR & Branding", href: "/celebrity-pr-branding" },
    { label: "Influencer Marketing", href: "/influencer-marketing" },
  ],
};

export const SharedHeader = () => {
  const path = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [path]);

  return (
    <header
      className="fixed top-0 z-[999] w-full bg-primaryBlack py-5"
      onMouseLeave={() => setServicesOpen(false)}
    >
      <div className="relative mx-auto w-11/12">
        {/* NAV */}
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="h-[70px] w-[70px]">
            <img src={logo.src} alt="logo" className="w-full h-full" />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-[140px]">
            <div className="flex items-center gap-10">
              {navTitle.map((nav, i) => {
                if (nav.name === "Service") {
                  return (
                    <div
                      key={i}
                      onMouseEnter={() => setServicesOpen(true)}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <Link href={nav.link}>
                        <p
                          className={`font-bold ${
                            servicesOpen || path === nav.link
                              ? "text-purple-400"
                              : "text-white hover:text-purple-300"
                          }`}
                        >
                          {nav.name}
                        </p>
                      </Link>

                      <ChevronDown
                        size={18}
                        className={`transition ${
                          servicesOpen ? "rotate-180 text-purple-400" : "text-white"
                        }`}
                      />
                    </div>
                  );
                }

                return (
                  <Link key={i} href={nav.link}>
                    <p className="font-bold text-white hover:text-btnColor">
                      {nav.name}
                    </p>
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <Link href="/contact">
              <button className="bg-primaryBlue text-white px-6 py-2 rounded-xl font-bold hover:scale-105 transition">
                WORK WITH US
              </button>
            </Link>
          </div>

          {/* MOBILE ICON */}
          <button className="text-white lg:hidden" onClick={toggleDrawer}>
            <GiHamburgerMenu className="w-8 h-8" />
          </button>
        </div>

        {/* ================= MEGA MENU ================= */}
        <div
          className={`hidden lg:block absolute left-1/2 top-[calc(100%+14px)] -translate-x-1/2 w-[1000px] z-[999] transition ${
            servicesOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }`}
          onMouseEnter={() => setServicesOpen(true)}
        >
          <div className="bg-white rounded-[18px] shadow-[0_30px_80px_rgba(0,0,0,0.25)] overflow-hidden">
            <div className="grid grid-cols-2">
              
              {/* LEFT */}
              <div className="px-8 py-6 border-r border-gray-200">
                <h3 className="relative mb-5 text-[15px] font-bold uppercase text-black pb-2">
                  Digital Marketing
                  <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-purple-600"></span>
                  <span className="absolute bottom-0 left-10 w-10 h-[3px] bg-purple-300"></span>
                </h3>

                <div className="grid grid-cols-2 gap-2">
                  {serviceMenu.digitalMarketing.map((item, i) => (
                    <Link key={i} href={item.href}>
                      <div className="rounded-lg border border-gray-200 px-3 py-2 bg-white hover:bg-purple-50 hover:border-purple-300 hover:shadow-sm transition cursor-pointer">
                        <p className="text-[14px] font-medium text-black hover:text-purple-700">
                          {item.label}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* RIGHT */}
              <div className="px-8 py-6">
                <h3 className="relative mb-5 text-[15px] font-bold uppercase text-black pb-2">
                  Branding & Growth
                  <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-purple-600"></span>
                  <span className="absolute bottom-0 left-10 w-10 h-[3px] bg-purple-300"></span>
                </h3>

                <div className="grid grid-cols-2 gap-2">
                  {serviceMenu.brandingGrowth.map((item, i) => (
                    <Link key={i} href={item.href}>
                      <div className="rounded-lg border border-gray-200 px-3 py-2 bg-white hover:bg-purple-50 hover:border-purple-300 hover:shadow-sm transition cursor-pointer">
                        <p className="text-[14px] font-medium text-black hover:text-purple-700">
                          {item.label}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* MOBILE DRAWER */}
        <div className="block lg:hidden">
          <Drawer open={isOpen} onClose={toggleDrawer} direction="right">
            <MobileDrawer onClose={toggleDrawer} serviceMenu={serviceMenu} />
          </Drawer>
        </div>
      </div>
    </header>
  );
};