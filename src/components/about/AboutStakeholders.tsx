import React from "react";

const AboutStakeholders = () => {
  const stakeholders = [
    {
      title: "Manufacturers",
      description:
        "Global inventory synchronization and direct-to-contractor technical data distribution.",
    },
    {
      title: "Engineers & Designers",
      description:
        "Unified specification libraries and real-time compliance validation tools.",
    },
    {
      title: "Contractors",
      description:
        "Streamlined procurement, tender management, and site delivery tracking.",
    },
    {
      title: "Project Owners",
      description:
        "Full lifecycle visibility, asset management, and maintenance audit trails.",
    },
    {
      title: "Distributors",
      description:
        "Automated order processing and intelligent regional stock forecasting.",
    },
    {
      title: "Compliance Bodies",
      description:
        "Verified documentation archives for regulatory and safety certification.",
    },
  ];

  return (
    <section className="w-full bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-dark-indigo mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Institutional Stakeholders
          </h2>
          <p className="max-w-3xl text-lg text-gray-500">
            Connecting the entire value chain through specialized digital
            interfaces.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stakeholders.map((item, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg border border-gray-200 bg-white p-8 transition-shadow hover:shadow-sm"
            >
              <h3 className="text-dark-indigo mb-3 text-lg font-bold">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStakeholders;
