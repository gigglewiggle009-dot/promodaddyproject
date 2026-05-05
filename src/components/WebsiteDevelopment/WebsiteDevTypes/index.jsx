import { SharedLayout } from "@/components/SharedComponent";

const websiteTypes = [
  {
    title: "Business Website",
    desc: "Professional company websites that build trust, explain services clearly and generate qualified enquiries.",
    tag: "Corporate Presence",
  },
  {
    title: "E-commerce Website",
    desc: "Online stores with product pages, cart flow, secure checkout and conversion-focused shopping experience.",
    tag: "Online Selling",
  },
  {
    title: "Landing Pages",
    desc: "High-converting pages built for Google Ads, Meta Ads and lead generation campaigns.",
    tag: "Lead Generation",
  },
  {
    title: "Real Estate Website",
    desc: "Property listing websites with project details, enquiry forms, WhatsApp CTA and location-based pages.",
    tag: "Property Leads",
  },
  {
    title: "Coaching / Education Website",
    desc: "Course-focused websites with admissions enquiry, testimonials, result highlights and student conversion flow.",
    tag: "Admissions",
  },
  {
    title: "Healthcare Website",
    desc: "Trust-focused websites for doctors, clinics and hospitals with services, appointments and patient-friendly pages.",
    tag: "Appointments",
  },
  {
    title: "Hotel & Hospitality Website",
    desc: "Premium hotel websites with rooms, gallery, offers, bookings and local travel-focused presentation.",
    tag: "Bookings",
  },
  {
    title: "Blog / Content Website",
    desc: "SEO-friendly blog websites with CMS integration so your team can publish and manage content easily.",
    tag: "SEO Content",
  },
  {
    title: "Portfolio Website",
    desc: "Creative portfolio websites for personal brands, creators, agencies, photographers and professionals.",
    tag: "Showcase",
  },
  {
    title: "Custom Web Applications",
    desc: "Advanced dashboards, portals, internal tools and scalable custom systems for business operations.",
    tag: "Custom Build",
  },
];

export const WebsiteDevTypes = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-20 text-white md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.14),_transparent_68%)]" />

      <SharedLayout>
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <p className="mb-3 text-sm font-medium text-purple-400">
              Website Solutions
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              10 Types of Websites We Build for{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Real Business Growth
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
              Every website type needs a different structure, content flow and
              conversion strategy. Shocking discovery, apparently one template
              cannot rule them all.
            </p>
          </div>

          {/* Innovative Timeline Rows */}
          <div className="relative">
            <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 md:block" />

            <div className="space-y-5">
              {websiteTypes.map((item, index) => (
                <div
                  key={index}
                  className={`relative md:pl-14 ${
                    index % 2 === 0 ? "md:pr-20" : "md:ml-20"
                  }`}
                >
                  {/* Number Bubble */}
                  <div className="absolute left-0 top-6 hidden h-9 w-9 items-center justify-center rounded-full border border-purple-400/40 bg-[#0b0b0b] text-xs font-bold text-purple-300 md:flex">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-6 transition hover:border-purple-400/40 hover:bg-white/[0.07] sm:px-8">
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 opacity-70" />

                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                      <div className="max-w-2xl">
                        <span className="mb-3 inline-flex rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
                          {item.tag}
                        </span>

                        <h3 className="text-xl font-semibold text-white transition group-hover:text-purple-300">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-gray-400">
                          {item.desc}
                        </p>
                      </div>

                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-indigo-500/20 text-xl font-bold text-purple-200">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};