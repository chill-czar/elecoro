import React from "react";

const CTASection = () => {
  return (
    <section className="w-full bg-white px-4 py-12 pb-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="bg-dark-indigo relative overflow-hidden rounded-3xl p-8 md:p-16">
          {/* Background Gradient/Overlay Effect (Subtle overlay as per image hint) */}
          <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 bg-linear-to-l from-white/5 to-transparent"></div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Stay ahead of the market.
            </h2>
            <p className="mb-10 text-lg leading-relaxed font-light text-white/80">
              Get the latest electrical tenders and supply chain insights
              delivered to your inbox every Monday.
            </p>

            <div className="flex max-w-md flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Work email address"
                className="focus:ring-neon-green flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white transition-all placeholder:text-white/50 focus:border-transparent focus:ring-2 focus:outline-none"
              />
              <button className="bg-neon-green text-dark-indigo rounded-lg px-8 py-3 font-bold whitespace-nowrap transition-colors hover:bg-[#cbf040]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
