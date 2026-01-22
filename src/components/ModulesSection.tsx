import React from "react";
import { ArrowRight, Box, ShieldCheck, TrendingUp } from "lucide-react";

const ModulesSection = () => {
  return (
    <section className="w-full bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#111111] md:text-4xl">
              Our Offering
            </h2>
            <p className="text-lg leading-relaxed font-light text-gray-500">
              Everything you need to manage the lifecycle of an electrical
              project, from initial tender to final maintenance.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {/* Card 1: Centralized Hub */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 transition-shadow duration-300 hover:shadow-lg">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white">
              {/* Custom Icon for Centralized Hub to match image accurately */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="3" fill="#191052" />
                <circle cx="12" cy="4" r="2" fill="#191052" />
                <circle cx="20" cy="12" r="2" fill="#191052" />
                <circle cx="12" cy="20" r="2" fill="#191052" />
                <circle cx="4" cy="12" r="2" fill="#191052" />
                <path
                  d="M12 7V9"
                  stroke="#191052"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M17 12H15"
                  stroke="#191052"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M12 17V15"
                  stroke="#191052"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M7 12H9"
                  stroke="#191052"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#111111]">
              Centralized Hub
            </h3>
            <p className="text-[15px] leading-relaxed text-gray-500">
              Aggregated project data and supply chain management in a single
              view. No more fragmented spreadsheets.
            </p>
          </div>

          {/* Card 2: Verified Tendering */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 transition-shadow duration-300 hover:shadow-lg">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white">
              <ShieldCheck
                className="text-dark-indigo h-8 w-8"
                strokeWidth={2.5}
              />
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#111111]">
              Verified Tendering
            </h3>
            <p className="text-[15px] leading-relaxed text-gray-500">
              Access a secure directory of government and private sector
              electrical tenders across 40+ countries.
            </p>
          </div>

          {/* Card 3: Predictive Logistics */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 transition-shadow duration-300 hover:shadow-lg">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white">
              <TrendingUp
                className="text-dark-indigo h-8 w-8"
                strokeWidth={2.5}
              />
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#111111]">
              Predictive Logistics
            </h3>
            <p className="text-[15px] leading-relaxed text-gray-500">
              AI-driven forecasts for material availability and pricing surges
              before they hit your bottom line.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
