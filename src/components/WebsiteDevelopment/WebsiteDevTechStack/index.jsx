import { SharedLayout } from "@/components/SharedComponent";

const techStack = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "Sanity CMS",
  "Vercel",
  "SEO Optimization",
  "Performance Optimization",
  "Responsive Design",
  "Schema Markup",
  "API Integrations",
  "E-commerce Systems",
  "Custom Dashboards",
];

export const WebsiteDevTechStack = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-20 text-white md:py-24">

      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.12),_transparent_70%)]" />

      <SharedLayout>
        <div className="mx-auto max-w-5xl text-center">

          {/* Heading */}
          <p className="mb-3 text-sm font-medium text-purple-400">
            Technology We Use
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Modern Tech Stack for{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Fast & Scalable Websites
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm text-gray-300 sm:text-base">
            We use reliable and modern technologies to build websites that are
            fast, secure, SEO-ready and easy to scale as your business grows.
          </p>

          {/* Pill Layout */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">

            {techStack.map((tech, index) => (
              <div
                key={index}
                className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm text-gray-300 transition hover:border-purple-400/40 hover:bg-white/[0.07]"
              >
                {tech}
              </div>
            ))}

          </div>

          {/* Bottom Highlight Line */}
          <div className="mx-auto mt-12 h-[2px] w-32 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500" />

        </div>
      </SharedLayout>
    </section>
  );
};