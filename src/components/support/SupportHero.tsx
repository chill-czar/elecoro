import React from "react";
import { UserCircle, FileText, Terminal } from "lucide-react";

const SupportHero = () => {
  const categories = [
    {
      icon: UserCircle,
      title: "ACCOUNT & PROFILE",
      description:
        "Manage your business identity, credentials, and verification status across the platform.",
    },
    {
      icon: FileText,
      title: "TENDERS & BIDDING",
      description:
        "Expert guidance on submission workflows, bid management, and real-time project tracking.",
    },
    {
      icon: Terminal,
      title: "TECHNICAL ISSUES",
      description:
        "Troubleshoot platform performance, API integrations, and secure access management.",
    },
  ];

  return (
    <section className="w-full bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header content */}
        <div className="mb-20">
          <h1 className="text-dark-indigo mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
            Support
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            Reliable service and structured assistance for the unified
            electrical industry platform. We are here to help you navigate
            Elecoro effectively through documentation, direct assistance, and
            technical troubleshooting.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg border border-gray-100 bg-white p-8 transition-shadow hover:shadow-sm"
            >
              <div className="mb-6">
                <item.icon
                  className="text-dark-indigo h-8 w-8"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-dark-indigo mb-3 text-sm font-black tracking-widest uppercase">
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

export default SupportHero;
