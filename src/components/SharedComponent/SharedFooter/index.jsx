import { logo } from "@/assets";
import { GoArrowUpRight } from "react-icons/go";
import {
  MdOutlineDoubleArrow,
  MdOutlineMailOutline,
  MdLocationOn,
} from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { RedLine } from "..";
import { footerTitle } from "@/constant";

export const SharedFooter = () => {
  return (
    <footer className="bg-primaryBlack" aria-labelledby="footer-brand-heading">
      <div className="w-11/12 px-2 py-10 mx-auto">
        <div className="flex flex-col lg:flex-row gap-7">
          {/* Brand / Newsletter */}
          <div className="lg:w-[30%]">
            <h2
              id="footer-brand-heading"
              className="text-3xl font-bold text-primaryWhite"
            >
              PromoDaddy Digital
            </h2>

            <div>
              <div className="w-[80px] h-[80px] mt-8">
                <img src={logo.src} className="w-full h-full" alt="PromoDaddy Digital logo" />
              </div>

              <div className="relative mt-5">
                <GoArrowUpRight className="absolute w-8 h-8 text-black top-2 right-1" />
                <input
                  type="email"
                  placeholder="Your email here"
                  className="w-full px-3 py-3 text-lg text-black rounded-lg outline-none"
                  aria-label="Email address"
                />
              </div>

              <p className="mt-4 text-sm leading-5 text-primaryWhite">
                By signing up to receive emails from PromoDaddy Digital, you
                agree to our Privacy Policy. We treat your info responsibly.
              </p>
            </div>
          </div>

          {/* Footer Links + Contact */}
          <div className="lg:w-[70%]">
            <div className="grid w-full gap-5 mx-auto md:grid-cols-2 lg:grid-cols-3">
              {/* Link One */}
              <section aria-labelledby="footer-links-one-heading">
                <h3
                  id="footer-links-one-heading"
                  className="font-bold text-primaryWhite text-22 leading-30"
                >
                  {footerTitle?.linkOne.title}
                </h3>

                <div className="mt-0 mb-8">
                  <RedLine />
                </div>

                <nav aria-label={footerTitle?.linkOne.title}>
                  <ul className="space-y-2 list-none p-0 m-0">
                    {footerTitle?.linkOne.content.map((content) => (
                      <li key={content.name}>
                        <Link
                          href={content.link}
                          className="block text-base transition-all duration-300 ease-in-out w-fit"
                        >
                          <span className="relative inline-block group">
                            <span className="flex items-center gap-x-2 bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-1">
                              <MdOutlineDoubleArrow aria-hidden="true" />
                              <span>{content.name}</span>
                            </span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </section>

              {/* Link Two */}
              <section aria-labelledby="footer-links-two-heading">
                <h3
                  id="footer-links-two-heading"
                  className="font-bold text-primaryWhite text-22 leading-30"
                >
                  {footerTitle?.linkTwo.title}
                </h3>

                <div className="mt-0 mb-8">
                  <RedLine />
                </div>

                <nav aria-label={footerTitle?.linkTwo.title}>
                  <ul className="space-y-2 list-none p-0 m-0">
                    {footerTitle?.linkTwo.content.map((content) => {
                      if (content.type === "heading") {
                        return (
                          <li key={content.name}>
                            <p className="mt-4 font-semibold text-white">
                              {content.name}
                            </p>
                          </li>
                        );
                      }

                      return (
                        <li key={content.name}>
                          <Link
                            href={content.link}
                            className="block text-base transition-all duration-300 ease-in-out w-fit"
                          >
                            <span className="relative inline-block group">
                              <span className="flex items-center gap-x-2 bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-1">
                                <MdOutlineDoubleArrow aria-hidden="true" />
                                <span>{content.name}</span>
                              </span>
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </section>

              {/* Contact */}
              <section aria-labelledby="footer-contact-heading">
                <div className="text-primaryWhite">
                  <h3
                    id="footer-contact-heading"
                    className="font-bold text-primaryWhite text-22 leading-30"
                  >
                    Contact
                  </h3>

                  <div className="mt-0 mb-8">
                    <RedLine />
                  </div>

                  <address className="not-italic space-y-4">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <MdLocationOn className="text-[22px] mt-1 text-purple-400 shrink-0" />
                      <p className="leading-7 text-white/90">
                        Plot No. 26, Mahaveer Nagar Vistar Yojana, Kota,
                        Rajasthan - 324005, India
                      </p>
                    </div>

                    {/* Phone */}
                    <a
                      className="flex items-center gap-3 text-white/90 hover:text-purple-400 transition duration-300"
                      href="tel:+919602089182"
                    >
                      <BiSolidPhoneCall className="text-[20px] text-purple-400 shrink-0" />
                      <span>+91 9602089182, 8690522210</span>
                    </a>

                    {/* Gmail */}
                    <a
                      className="flex items-center gap-3 text-white/90 hover:text-purple-400 transition duration-300"
                      href="mailto:promodaddydigital@gmail.com"
                    >
                      <MdOutlineMailOutline className="text-[20px] text-purple-400 shrink-0" />
                      <span>promodaddydigital@gmail.com</span>
                    </a>

                    {/* Info Mail */}
                    <a
                      className="flex items-center gap-3 text-white/90 hover:text-purple-400 transition duration-300"
                      href="mailto:info@promodaddy.in"
                    >
                      <MdOutlineMailOutline className="text-[20px] text-purple-400 shrink-0" />
                      <span>info@promodaddy.in</span>
                    </a>

                    {/* Social Media */}
                    <div className="flex items-center gap-4 pt-2">
                      <a
                        href="https://www.facebook.com/promodaddydigital"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="PromoDaddy Digital on Facebook"
                        className="w-11 h-11 flex items-center justify-center rounded-full bg-[#1877F2] text-white shadow-md hover:scale-110 transition duration-300"
                      >
                        <FaFacebookF className="text-[16px]" />
                      </a>

                      <a
                        href="https://www.instagram.com/promodaddy_digital__?igsh=MTFtaWh5ZmtzYWFyYQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="PromoDaddy Digital on Instagram"
                        className="w-11 h-11 flex items-center justify-center rounded-full text-white shadow-md hover:scale-110 transition duration-300"
                        style={{
                          background:
                            "linear-gradient(135deg, #f9ce34, #ee2a7b, #6228d7)",
                        }}
                      >
                        <FaInstagram className="text-[17px]" />
                      </a>
                    </div>
                  </address>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto border-t py-7 border-brown">
        <p className="font-light text-center text-14 text-primaryWhite">
          © 2026 PromoDaddy Digital. All rights reserved.
        </p>
      </div>
    </footer>
  );
};