import React from "react";

const StatsSection = () => {
  const stats = [
    { id: 1, value: "$2B+", label: "Project Value Processed" },
    { id: 2, value: "15,000+", label: "Active Contractors" },
    { id: 3, value: "40+", label: "Countries Supported" },
    { id: 4, value: "98%", label: "Tender Placement Rate" },
  ];

  return (
    <section className="bg-light-gray w-full border-y border-gray-100 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 divide-x divide-gray-100 text-center md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center px-4">
              <span className="text-dark-indigo mb-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                {stat.value}
              </span>
              <span className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
