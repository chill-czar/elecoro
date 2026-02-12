"use client";
import React from "react";
import dynamic from "next/dynamic";
import windmillAnimation from "../assets/lottie/windmill.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const CTASection = () => {
  return (
    <section className="bg-light-gray w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="bg-dark-indigo relative overflow-hidden rounded-2xl p-6 sm:p-10 lg:p-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
                Stay updated with our <br className="hidden sm:block" />
                <span className="text-neon-green">latest news</span>
              </h2>
              <p className="mb-8 max-w-lg text-base leading-relaxed font-light text-white/80 sm:text-lg">
                Join our newsletter to get weekly updates on electrical tenders,
                supply chain insights, and platform announcements delivered
                straight to your inbox.
              </p>

              <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="focus:ring-neon-green w-full flex-1 rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-white transition-all placeholder:text-white/50 focus:border-transparent focus:ring-2 focus:outline-none"
                />
                <button
                  type="button"
                  className="bg-neon-green text-dark-indigo hover:bg-neon-green/90 w-full rounded-lg px-8 py-3 font-bold whitespace-nowrap transition-all hover:scale-105 active:scale-95 sm:w-auto"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Right Content */}
            <div className="relative order-first flex items-center justify-center lg:order-last">
              <div className="relative w-full max-w-[200px] sm:max-w-[280px] lg:max-w-[400px]">
                {/* Optional glow effect */}
                <div className="bg-neon-green/20 absolute top-1/2 left-1/2 h-50 w-50 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl filter sm:h-60 sm:w-60"></div>

                <Lottie
                  animationData={windmillAnimation}
                  loop={true}
                  className="relative z-10 w-full drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Decorative background elements */}
          <div className="pointer-events-none absolute top-0 right-0 h-full w-1/3 bg-linear-to-l from-white/5 to-transparent"></div>
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/5 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
