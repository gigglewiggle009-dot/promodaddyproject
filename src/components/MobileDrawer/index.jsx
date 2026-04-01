"use client";

import { navTitle } from "@/constant";
import Link from "next/link";
import { logo } from "@/assets";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const MobileDrawer = ({ onClose, serviceMenu }) => {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="px-8 pt-10 pb-8 bg-black h-screen text-white overflow-y-auto">
      {/* Logo */}
      <div className="h-[70px] w-[70px] mb-8">
        <img src={logo.src} alt="logo" className="w-full h-full" />
      </div>

      <div className="space-y-5">
        {navTitle.map((nav, index) => {
          if (nav.name === "Service") {
            return (
              <div key={index}>
                {/* Main Service Row */}
                <button
                  type="button"
                  onClick={() => setServicesOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between text-left text-[16px] font-bold text-white"
                >
                  <span>Service</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    servicesOpen ? "max-h-[1000px] opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="ml-3 border-l border-white/10 pl-4 space-y-5">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40 mb-3">
                        Digital Marketing
                      </p>

                      <div className="space-y-2">
                        {serviceMenu?.digitalMarketing?.map((item, i) => (
                          <Link
                            key={i}
                            href={item.href}
                            onClick={onClose}
                            className="block text-[15px] font-medium text-white/85 hover:text-purple-400 transition"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40 mb-3">
                        Branding & Growth
                      </p>

                      <div className="space-y-2">
                        {serviceMenu?.brandingGrowth?.map((item, i) => (
                          <Link
                            key={i}
                            href={item.href}
                            onClick={onClose}
                            className="block text-[15px] font-medium text-white/85 hover:text-purple-400 transition"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/services"
                      onClick={onClose}
                      className="block pt-1 text-[14px] font-semibold text-purple-400 hover:text-purple-300 transition"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <Link
              href={nav.link}
              key={index}
              onClick={onClose}
              className="block text-[16px] font-bold text-white hover:text-purple-400 transition"
            >
              {nav.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};