import React from "react";

const SolutionsCTA = () => {
  return (
    <section className="w-full bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="bg-dark-indigo relative flex flex-col items-center justify-center rounded-2xl px-4 py-20 text-center sm:px-6 lg:px-8">
          {/* Headline */}
          <h2 className="mb-10 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Ready to unify your electrical project workflow?
          </h2>

          {/* Button */}
          <button className="text-dark-indigo mb-8 rounded-md bg-[#D0F450] px-8 py-4 text-sm font-black tracking-wider uppercase shadow-[0_0_20px_rgba(208,244,80,0.3)] transition-transform hover:scale-105 active:scale-95">
            Explore Elecoro Platform
          </button>

          {/* Footer Text */}
          <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase">
            Version 2.4.0 — Unified Industry Protocol
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionsCTA;
