import React from "react";
import { Eye, Terminal } from "lucide-react";

const AboutVisionMission = () => {
  return (
    <section className="w-full bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Our Vision Card - Dark */}
        <div className="bg-dark-indigo flex flex-col rounded-2xl p-10 sm:p-12">
          <div className="mb-6">
            <Eye className="h-8 w-8 text-[#D0F450]" strokeWidth={2.5} />
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">
            Our Vision
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-gray-300">
            To become the global standard for electrical industry transparency,
            serving as the definitive ledger for infrastructure development
            worldwide.
          </p>
        </div>

        {/* Our Mission Card - Light */}
        <div className="flex flex-col rounded-2xl border border-gray-100 bg-[#F9FAFB] p-10 sm:p-12">
          <div className="mb-6">
            <Terminal className="text-dark-indigo h-8 w-8" strokeWidth={2.5} />
          </div>
          <h2 className="text-dark-indigo mb-4 text-3xl font-bold tracking-tight">
            Our Mission
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-gray-500">
            To empower every stakeholder with tools that eliminate complexity,
            reduce project risk, and accelerate the transition to modern energy
            grids.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutVisionMission;
