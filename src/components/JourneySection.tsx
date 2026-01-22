import React from "react";

const JourneySection = () => {
  const steps = [
    {
      id: 1,
      title: "CONNECT",
      description:
        "Onboard your entire team and existing suppliers into a secure environment.",
      active: true,
    },
    {
      id: 2,
      title: "DISCOVER",
      description:
        "Find vetted partners and active high-value tenders through our global database.",
      active: false,
    },
    {
      id: 3,
      title: "TRANSACT",
      description:
        "Secure bidding and payment workflows that ensure transparency and speed.",
      active: false,
    },
    {
      id: 4,
      title: "GROW",
      description:
        "Scale your operations with automated insights and recurring project pipelines.",
      active: false,
    },
  ];

  return (
    <section className="bg-dark-indigo w-full px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-16 text-2xl font-bold tracking-tight md:text-3xl">
          The Elecoro Journey
        </h2>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-[24px] left-0 z-0 hidden h-px w-full bg-white/20 md:block"></div>

          <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-4">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center">
                {/* Number Circle */}
                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold ${
                    step.active
                      ? "bg-neon-green text-dark-indigo"
                      : "text-dark-indigo bg-white"
                  } shadow-lg`}
                >
                  {step.id}
                </div>

                {/* Content */}
                <h3 className="mb-3 text-lg font-bold tracking-wide uppercase">
                  {step.title}
                </h3>
                <p className="max-w-[240px] px-2 text-sm leading-relaxed font-light text-white/80">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
