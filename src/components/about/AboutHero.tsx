import React from "react";

const AboutHero = () => {
  return (
    <section className="w-full bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="mb-16 border-b border-gray-100 pb-16">
          <h1 className="text-dark-indigo mb-8 max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
            The Infrastructure for Global Electricity.
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            Elecoro is the industry&apos;s first unified digital ecosystem,
            purpose-built to standardize the global electrical supply chain. We
            provide the institutional trust and digital architecture necessary
            to connect manufacturers, engineers, and contractors in a single,
            transparent interface.
          </p>
        </div>

        {/* Bottom Section: Two Columns */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left Column: The Fragmentation */}
          <div>
            <h2 className="mb-6 text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
              The Fragmentation
            </h2>
            <p className="text-dark-indigo mb-8 text-lg leading-relaxed font-bold">
              For decades, the electrical industry has operated through
              fragmented, paper-based systems and disconnected legacy software.
            </p>
            <ul className="space-y-4">
              {[
                "Inefficient manual procurement workflows",
                "Lack of real-time supply chain visibility",
                "Inconsistent data standards across borders",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm font-medium text-gray-500"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: The Infrastructure */}
          <div>
            <h2 className="mb-6 text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
              The Infrastructure
            </h2>
            <p className="text-dark-indigo mb-8 text-lg leading-relaxed font-bold">
              Elecoro bridges these gaps by providing a centralized digital
              backbone that ensures data integrity and project transparency.
            </p>
            <ul className="space-y-4">
              {[
                "Unified data schemas for technical specs",
                "End-to-end digital audit trails",
                "Institutional-grade security and compliance",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm font-medium text-gray-500"
                >
                  <span className="bg-dark-indigo mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
