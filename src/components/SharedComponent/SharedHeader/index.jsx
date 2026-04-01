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
    { label: "Social Media Marketing", href: "/social-media-marketing" },
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
    setIsOpen((prevState) => !prevState);
  };

  /* ✅ Close drawer & dropdown on route change */
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [path]);

  return (
    <header className="py-5 bg-primaryBlack fixed top-0 z-[999] w-full">
      <div className="w-11/12 mx-auto">
        {/* MAIN FLEX */}
        <div className="flex items-center justify-between w-full">
          {/* LOGO */}
          <Link href="/" className="block h-[70px] w-[70px]">
            <img
              src={logo.src}
              alt="logo"
              className="w-full h-full cursor-pointer hover:opacity-80 transition"
            />
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden lg:flex items-center gap-[140px]">
            <div className="flex items-center gap-10">
              {navTitle.map((nav, index) => {
                /* ===== SERVICE MENU ===== */
                if (nav.name === "Service") {
                  return (
                    <div
                      key={index}
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <div className="flex items-center gap-2 cursor-pointer">
                        {/* TEXT LINK */}
                        <Link href={nav.link}>
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

                        {/* ARROW */}
                        <button
                          type="button"
                          onClick={() => setServicesOpen((prev) => !prev)}
                          className="text-white hover:text-btnColor transition"
                        >
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-300 ${
                              servicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {/* ================= COMPACT MEGA MENU ================= */}
                      <div
                        className={`absolute left-1/2 top-[calc(100%+10px)] z-[999] w-[660px] -translate-x-1/2 rounded-[18px] border border-black/10 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition-all duration-300 ${
                          servicesOpen
                            ? "visible translate-y-0 opacity-100"
                            : "invisible -translate-y-2 opacity-0"
                        }`}
                      >
                        <div className="grid grid-cols-2">
                          {/* LEFT COLUMN */}
                          <div className="border-r border-gray-200 px-6 py-5">
                            <h3 className="mb-4 text-[15px] font-bold tracking-[0.08em] text-black uppercase">
                              Digital Marketing
                            </h3>

                            <div className="space-y-2.5">
                              {serviceMenu.digitalMarketing.map((item, i) => (
                                <Link key={i} href={item.href}>
                                  <p className="text-[15px] font-medium leading-[1.3] text-black hover:text-btnColor transition cursor-pointer">
                                    {item.label}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* RIGHT COLUMN */}
                          <div className="px-6 py-5">
                            <h3 className="mb-4 text-[15px] font-bold tracking-[0.08em] text-black uppercase">
                              Branding & Growth
                            </h3>

                            <div className="space-y-2.5">
                              {serviceMenu.brandingGrowth.map((item, i) => (
                                <Link key={i} href={item.href}>
                                  <p className="text-[15px] font-medium leading-[1.3] text-black hover:text-btnColor transition cursor-pointer">
                                    {item.label}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                /* ===== NORMAL NAV ITEMS ===== */
                return (
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
                );
              })}
            </div>

            {/* CTA BUTTON */}
            <Link href="/contact">
              <button className="text-white font-bold text-sm bg-primaryBlue px-6 py-2 rounded-xl border-2 border-primaryBlue hover:scale-105 transition-all duration-300">
                WORK WITH US
              </button>
            </Link>
          </div>

          {/* ================= MOBILE ICON ================= */}
          <button
            className="text-white lg:hidden"
            onClick={toggleDrawer}
          >
            <GiHamburgerMenu className="w-8 h-8" />
          </button>
        </div>

        {/* ================= MOBILE DRAWER ================= */}
        <div className="block lg:hidden">
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            className="!w-[290px] sm:!w-[400px]"
          >
            <MobileDrawer
              onClose={toggleDrawer}
              serviceMenu={serviceMenu}
            />
          </Drawer>
        </div>
      </div>
    </header>
  );
};