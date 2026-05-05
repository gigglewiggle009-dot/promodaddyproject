import { SharedLayout } from "@/components/SharedComponent";

const results = [
  { value: "500+", label: "Websites Delivered" },
  { value: "12+", label: "Years Experience" },
  { value: "80+", label: "SEO Optimized Websites" },
  { value: "40+", label: "Brand & Logo Designs" },
  { value: "5.0★", label: "Client Rating" },
];

export const WebsiteDevResults = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-20 text-white md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.12),_transparent_70%)]" />

      <SharedLayout>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-medium text-purple-400">
            Real Proof
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Numbers That Prove{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Experience & Trust
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
            We bring website development, SEO, branding and digital marketing
            experience together to build websites that look premium and generate
            real business value.
          </p>
        </div>
      </SharedLayout>

      {/* Full Width Counter Strip */}
      <div className="relative mt-14 border-y border-white/10 bg-white/[0.03]">
        <SharedLayout>
          <div className="grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5">
            {results.map((item, index) => (
              <div
                key={index}
                className="group relative px-6 py-10 text-center transition hover:bg-white/[0.05]"
              >
                <span className="absolute left-1/2 top-0 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 transition-all duration-300 group-hover:w-20" />

                <h3 className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                  {item.value}
                </h3>

                <p className="mt-3 text-sm text-gray-400">
                  {item.label}
                </p>

                <span className="mt-5 inline-block h-1 w-1 rounded-full bg-purple-400 opacity-70" />
              </div>
            ))}
          </div>
        </SharedLayout>
      </div>
    </section>
  );
};