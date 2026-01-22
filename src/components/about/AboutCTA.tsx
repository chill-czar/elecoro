import React from "react";

const AboutCTA = () => {
  return (
    <section className="w-full bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="bg-dark-indigo relative overflow-hidden rounded-xl px-6 py-24 text-center shadow-2xl sm:px-12 md:px-24">
          {/* Background gradient effect - optional subtle glow */}
          <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[100px]"></div>

          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Standardize Your Operations
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-indigo-100/80">
            Join the digital infrastructure of the global electrical industry.
            Request a secure consultation with our institutional partners team.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="bg-neon-green text-dark-indigo w-full rounded-sm px-8 py-4 text-xs font-black tracking-widest uppercase transition-transform hover:scale-105 sm:w-auto">
              Join the Ecosystem
            </button>
            <button className="w-full rounded-sm border border-white/20 px-8 py-4 text-xs font-black tracking-widest text-white uppercase transition-colors hover:bg-white/10 sm:w-auto">
              Technical Specs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
