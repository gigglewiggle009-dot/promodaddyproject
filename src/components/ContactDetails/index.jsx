"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { SharedLayout } from "@/components/SharedComponent";

const officeAddress =
  "Plot No. 26, Mahaveer Nagar Vistar Yojana, Kota, Rajasthan - 324005, India";

const googleMapsLink =
  "https://www.google.com/maps/search/?api=1&query=Promodaddy%20Digital%2C%20Plot%20No.%2026%2C%20Mahaveer%20Nagar%20Vistar%20Yojana%2C%20Kota%2C%20Rajasthan%20324005%2C%20India";

const googleEmbedMap =
  "https://www.google.com/maps?q=Plot%20No.%2026,%20Mahaveer%20Nagar%20Vistar%20Yojana,%20Kota,%20Rajasthan%20324005,%20India&z=19&output=embed";

const contactDetails = [
  {
    icon: Phone,
    label: "PHONE / WHATSAPP",
    value: "+91 8690522210",
    href: "tel:+918690522210",
  },
  {
    icon: Mail,
    label: "EMAIL",
    value: "info@promodaddy.in",
    href: "mailto:info@promodaddy.in",
  },
  {
    icon: MapPin,
    label: "OFFICE",
    value:
      "Plot No. 26, Mahaveer Nagar Vistar Yojana,\nKota, Rajasthan - 324005",
    href: googleMapsLink,
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

      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

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

                      <a
                        href={item.href}
                        target={item.label === "OFFICE" ? "_blank" : undefined}
                        rel={item.label === "OFFICE" ? "noopener noreferrer" : undefined}
                        className="whitespace-pre-line text-xl font-medium leading-relaxed text-white/95 transition hover:text-[#f47c20]"
                      >
                        {item.value}
                      </a>
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
                      : status.toLowerCase().includes("processing")
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

        {/* LOCATION MAP */}
        <div className="mt-16">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f47c20]">
              Visit Our Office
            </p>

            <h3 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Promodaddy Digital
            </h3>

            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block max-w-3xl text-white/70 leading-relaxed transition hover:text-[#f47c20]"
            >
              {officeAddress}
            </a>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
            <div className="absolute left-4 top-4 z-10 rounded-xl border border-white/10 bg-black/80 px-4 py-3 backdrop-blur-md">
              <p className="text-sm font-semibold text-white">Promodaddy Digital</p>
              <p className="text-xs text-white/70">Kota, Rajasthan</p>
            </div>

            <iframe
              src={googleEmbedMap}
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Promodaddy Digital Location Map"
              className="w-full"
            />
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};