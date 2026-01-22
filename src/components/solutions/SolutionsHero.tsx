import React from "react";

const SolutionsHero = () => {
  return (
    <section className="w-full bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Top Section: Header */}
        <div className="mb-24">
          <p className="mb-4 text-xs font-bold tracking-widest text-[#9CA3AF] uppercase">
            Platform Overview
          </p>
          <h1 className="text-dark-indigo mb-8 text-6xl font-extrabold tracking-tight sm:text-7xl">
            Solutions
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            A unified electrical industry platform designed for clarity,
            system-level capability, and stakeholder-specific workflows. Elecoro
            synchronizes the entire lifecycle of electrical projects through
            technical integration.
          </p>
        </div>

        {/* Bottom Section: Core Challenges */}
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
          {/* Left Column: Title */}
          <div className="w-full shrink-0 lg:w-64">
            <h2 className="text-dark-indigo border-b border-gray-200 pb-4 text-xs font-black tracking-widest uppercase">
              Core Challenges
            </h2>
          </div>

          {/* Right Column: Content */}
          <div className="flex-1">
            {/* Feature Header */}
            <div className="mb-6 flex items-center gap-3">
              <h3 className="text-dark-indigo text-xl font-bold">
                Industry Fragmentation
              </h3>
            </div>

            {/* Description */}
            <p className="mb-10 max-w-2xl text-[15px] leading-relaxed text-gray-500">
              Addressing industry fragmentation through a centralized ecosystem
              approach. Our framework connects the entire value chain to
              eliminate manual bidding gaps and fragmented data silos that
              currently plague the electrical sector.
            </p>

            {/* List */}
            <ul className="space-y-4">
              {[
                "Decentralized document and procurement storage",
                "Inefficient bidding and estimation protocols",
                "Limited visibility between manufacturers and end-contractors",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-dark-indigo mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm text-white">
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 1L3.5 6.5L1 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-dark-indigo text-sm font-semibold">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;
