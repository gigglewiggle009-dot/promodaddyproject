"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const contactDetails = [
  {
    icon: Phone,
    label: "PHONE / WHATSAPP",
    value: "+91 8690522210",
  },
  {
    icon: Mail,
    label: "EMAIL",
    value: "info@promodaddy.in",
  },
  {
    icon: MapPin,
    label: "OFFICE",
    value:
      "Plot No. 26, Mahaveer Nagar Vistar Yojana,\nKota, Rajasthan - 324005",
  },
];

export const ContactDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWhatsAppSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.phone || !formData.email || !formData.service) {
    setStatus("Please fill all required fields.");
    return;
  }

  try {
    setIsSubmitting(true);
    setStatus("Processing...");

    // ✅ 1. Send data to your API (save/log/email later)
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // ✅ 2. Open WhatsApp
    const text = `New Consultation Request

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}
Message: ${formData.message || "No message provided"}`;

    const phoneNumber = "918770537819";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });

    setStatus("WhatsApp opened successfully!");
  } catch (error) {
    console.error(error);
    setStatus("Something went wrong.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section className="bg-black py-15 text-white md:py-28">
      <SharedLayout>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_620px]">
          <div className="max-w-xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-[#f47c20]">
              Get In Touch
            </p>

            <h2 className="max-w-md text-4xl font-bold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
              Let&apos;s Create
              <br />
              Something Great
            </h2>

            <div className="mt-12 space-y-7">
              {contactDetails.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#f47c20] text-[#f47c20]">
                      <Icon size={20} strokeWidth={2} />
                    </div>

                    <div>
                      <p className="mb-1 text-xs uppercase tracking-[0.22em] text-white/45">
                        {item.label}
                      </p>
                      <p className="whitespace-pre-line text-xl font-medium leading-relaxed text-white/95">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full rounded-md bg-[#f3f3f3] p-6 text-black shadow-[0_10px_40px_rgba(0,0,0,0.25)] sm:p-8 md:p-10">
            <h3 className="mb-8 text-3xl font-bold tracking-tight text-black">
              Get Free Consultation
            </h3>

            <form className="space-y-5" onSubmit={handleWhatsAppSubmit}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-black/80">
                    Full Name <span className="text-[#f47c20]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="h-12 w-full rounded-sm border border-black/10 bg-white px-4 text-sm outline-none transition focus:border-[#f47c20]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-black/80">
                    Phone / WhatsApp <span className="text-[#f47c20]">*</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="h-12 w-full rounded-sm border border-black/10 bg-white px-4 text-sm outline-none transition focus:border-[#f47c20]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-black/80">
                  Email Address <span className="text-[#f47c20]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="h-12 w-full rounded-sm border border-black/10 bg-white px-4 text-sm outline-none transition focus:border-[#f47c20]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-black/80">
                  Service Interested In <span className="text-[#f47c20]">*</span>
                </label>
                <input
                  type="text"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  placeholder="Enter the service you need"
                  className="h-12 w-full rounded-sm border border-black/10 bg-white px-4 text-sm outline-none transition focus:border-[#f47c20]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-black/80">
                  Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirement"
                  className="min-h-[130px] w-full rounded-sm border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#f47c20]"
                />
              </div>

              {status && (
                <p
                  className={`text-sm font-medium ${
                    status.toLowerCase().includes("successfully")
                      ? "text-green-600"
                      : status.toLowerCase().includes("opening")
                      ? "text-blue-600"
                      : "text-red-600"
                  }`}
                >
                  {status}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex h-12 w-full items-center justify-center bg-[#f47c20] px-6 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Opening..." : "Get Free Consultation"}
              </button>
            </form>
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};