import React from "react";

const AboutCoreCapabilities = () => {
  const capabilities = [
    {
      id: "01",
      title: "Tender Management",
      description:
        "End-to-end digital RFQ/RFP process with automated bid leveling and award tracking.",
    },
    {
      id: "02",
      title: "LMS & Certification",
      description:
        "Integrated learning management for technical training and safety certification verification.",
    },
    {
      id: "03",
      title: "Supply Chain Visibility",
      description:
        "Global tracking of specialized electrical components from factory gate to final installation.",
    },
    {
      id: "04",
      title: "Compliance Ledger",
      description:
        "Immutable record-keeping for technical standards, warranty claims, and safety inspections.",
    },
  ];

  return (
    <section className="w-full bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
          {/* Left Column: Header */}
          <div className="w-full shrink-0 lg:w-64">
            <p className="mb-4 text-xs font-bold tracking-widest text-gray-400 uppercase">
              Platform Modules
            </p>
            <h2 className="text-dark-indigo text-3xl font-extrabold tracking-tight">
              Core Capabilities
            </h2>
          </div>

          {/* Right Column: Grid */}
          <div className="grid flex-1 grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
            {capabilities.map((item) => (
              <div key={item.id} className="border-dark-indigo border-l-2 pl-6">
                <span className="text-dark-indigo mb-2 block text-[10px] font-bold tracking-widest uppercase">
                  Module {item.id}
                </span>
                <h3 className="mb-3 text-lg font-bold text-[#111111]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCoreCapabilities;