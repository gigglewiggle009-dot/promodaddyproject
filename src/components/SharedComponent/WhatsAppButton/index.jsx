"use client";

import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/918690522210?text=Hi%20Promodaddy%20Digital,%20I%20want%20to%20know%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-10 right-2 z-[999] flex h-15 w-15 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 hover:bg-[#1ebe5d]"
    >
      <FaWhatsapp size={40} />
    </a>
  );
};

export default WhatsAppButton;