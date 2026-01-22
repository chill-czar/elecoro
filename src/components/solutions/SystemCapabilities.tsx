import React from "react";

const SystemCapabilities = () => {
  const capabilities = [
    {
      id: "01",
      title: "Directory",
      description:
        "A comprehensive verified database of electrical manufacturers, contractors, and suppliers. Searchable by region, capability, and certification status.",
    },
    {
      id: "02",
      title: "Tender Management",
      description:
        "Standardized procurement engine for listing and responding to private and public sector electrical contracts with full audit trails.",
    },
    {
      id: "03",
      title: "Bidding & Estimation",
      description:
        "Precision calculation tools for material takeoff and labor estimation, integrated with live market pricing from manufacturers.",
    },
    {
      id: "04",
      title: "Learning Management",
      description:
        "Continuous professional development (CPD) tracking and industry-specific training modules for technical staff and students.",
    },
    {
      id: "05",
      title: "Project Execution",
      description:
        "Real-time collaboration for onsite execution, linking field reports directly back to the tender specifications and budgets.",
    },
  ];

  return (
    <section className="w-full bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="border-dark-indigo/20 mb-12 border-b pb-6">
          <h2 className="text-dark-indigo text-sm font-black tracking-widest uppercase">
            System Capabilities
          </h2>
        </div>

        {/* Capabilities List */}
        <div className="flex flex-col">
          {capabilities.map((item) => (
            <div
              key={item.id}
              className="flex flex-col border-b border-gray-100 py-10 last:border-0 md:flex-row md:items-baseline"
            >
              {/* Module Number */}
              <div className="mb-2 w-full shrink-0 text-[10px] font-bold tracking-widest text-gray-300 uppercase md:mb-0 md:w-32 lg:w-48">
                Module {item.id}
              </div>

              {/* Title */}
              <div className="text-dark-indigo mb-4 w-full shrink-0 text-xl font-bold md:mb-0 md:w-64 lg:w-80">
                {item.title}
              </div>

              {/* Description */}
              <div className="w-full text-[15px] leading-relaxed text-gray-500">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemCapabilities;
