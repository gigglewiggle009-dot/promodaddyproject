import { SharedLayout } from "@/components/SharedComponent";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "We understand your business, target audience, services, competitors and website goals before planning the structure.",
  },
  {
    step: "02",
    title: "Content & Page Flow",
    desc: "We decide what each section should say, where CTAs should appear and how visitors should move through the page.",
  },
  {
    step: "03",
    title: "UI Design Direction",
    desc: "We create a premium visual direction using your brand colors, spacing, typography and conversion-focused layouts.",
  },
  {
    step: "04",
    title: "Development",
    desc: "We build the website with responsive, fast and scalable code using modern technologies.",
  },
  {
    step: "05",
    title: "SEO & Performance Setup",
    desc: "We add proper headings, metadata, schema, speed optimization, image alt text and clean page structure.",
  },
  {
    step: "06",
    title: "Testing, Launch & Support",
    desc: "We test forms, responsiveness, speed, browser compatibility and launch the website with ongoing support.",
  },
];

export const WebsiteDevProcess = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-20 text-white md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(99,102,241,0.12),_transparent_65%)]" />

      <SharedLayout>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Sticky Content */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-3 text-sm font-medium text-purple-400">
              Our Development Process
            </p>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              From Idea to{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                High-Performing Website
              </span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-gray-300 sm:text-base">
              We don’t throw random sections on a page and call it “premium”.
              Every website goes through a clear strategy, design, development,
              SEO and testing process.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm font-semibold text-white">
                Result you get:
              </p>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                A fast, responsive, SEO-ready website designed to convert
                visitors into enquiries, calls, WhatsApp leads or sales.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 sm:block" />

            <div className="space-y-8">
              {processSteps.map((item) => (
                <div
                  key={item.step}
                  className="relative sm:pl-16"
                >
                  <div className="absolute left-0 top-1 hidden h-10 w-10 items-center justify-center rounded-full border border-purple-400/40 bg-[#0b0b0b] text-xs font-bold text-purple-300 sm:flex">
                    {item.step}
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-purple-400/40 hover:bg-white/[0.07]">
                    <span className="mb-3 inline-flex text-xs font-semibold text-purple-300 sm:hidden">
                      Step {item.step}
                    </span>

                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-400">
                      {item.desc}
                    </p>
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