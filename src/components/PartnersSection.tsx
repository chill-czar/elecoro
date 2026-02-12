import React from "react";

const PartnersSection = () => {
  // Placeholder partners
  const partners = [
    "Global Electric",
    "Future Energy",
    "Grid Systems Inc.",
    "PowerConnect",
    "VoltStream",
    "EcoWatt",
  ];

  return (
    <section className="bg-light-gray w-full border-b border-gray-100 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-8 text-sm font-bold tracking-wider text-gray-400 uppercase">
          Powering the world&apos;s leading infrastructure projects
        </p>

        <div className="grid grid-cols-2 items-center gap-8 opacity-60 grayscale md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-4">
              {/* Text placeholder for logos since no images were provided */}
              <span className="hover:text-dark-indigo cursor-default text-lg font-bold text-gray-400 transition-colors">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
