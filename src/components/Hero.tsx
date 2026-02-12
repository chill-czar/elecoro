import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] w-full flex-col items-center justify-center px-4 pt-16 pb-24 text-center sm:px-6 lg:px-8">
      {/* Background Image */}

      <div className="absolute inset-0 z-0">
        <Image
          src="/Gemini_Generated_Image_2,jpg-Picsart-AiImageEnhancer.jpeg"
          alt="Hero Background"
          fill
          className="object-cover object-center blur-[0.7px] saturate-30"
          priority
        />
        {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(255,255,255,0.6)_100%)]" /> */}

        {/* Vignette Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Badge container - Centered */}
        <div className="mb-8 inline-flex items-center gap-1.5 rounded-full bg-[#F3F0FF] px-3 py-1">
          {/* Dot */}
          <div className="bg-dark-indigo h-1.5 w-1.5 rounded-full"></div>
          <span className="text-dark-indigo text-[10px] font-bold tracking-widest uppercase">
            Module-Based Ecosystem
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="mb-2 max-w-4xl text-4xl leading-[1.15] font-extrabold tracking-tight text-[#111111] sm:text-5xl lg:text-6xl">
          The Unified Ecosystem for the
          <span className="text-dark-indigo block">Electrical Industry</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 max-w-2xl text-lg leading-relaxed font-light text-gray-500 sm:text-xl">
          Connect your entire workflow from procurement to project completion in
          one modular platform. Designed for modern contractors and
          distributors.
        </p>

        {/* CTA Interface */}
        <div className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          {/* Primary Button */}
          <button className="bg-neon-green text-dark-indigo w-full rounded-lg px-8 py-3.5 text-base font-bold shadow-sm transition-colors hover:bg-[#cbf040] sm:w-auto">
            Start Free Trial
          </button>

          {/* Secondary Button */}
          <button className="bg-light-gray flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 px-8 py-3.5 text-base font-bold text-[#111111] shadow-sm transition-colors hover:bg-gray-50 sm:w-auto">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#111111]">
              <svg
                width="8"
                height="10"
                viewBox="0 0 8 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-0.5"
              >
                <path d="M7 5L1 0.669873L1 9.33013L7 5Z" fill="white" />
              </svg>
            </div>
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
