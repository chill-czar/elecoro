import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const SupportChannels = () => {
  const channels = [
    {
      title: "Help Documentation",
      description:
        "Browse our comprehensive guides and industry-specific tutorials.",
      action: "ACCESS LIBRARY",
      // Placeholder color for image since actual assets aren't available
      imageColor: "bg-slate-200",
    },
    {
      title: "Support Requests",
      description:
        "Track the status of your existing service tickets and resolutions.",
      action: "VIEW TICKETS",
      imageColor: "bg-gray-300",
    },
    {
      title: "In-App Support",
      description: "Chat with our technical engineering team in real-time.",
      action: "START CHAT",
      imageColor: "bg-slate-100",
    },
  ];

  return (
    <section className="w-full bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header with horizontal line */}
        <div className="mb-12 flex items-center">
          <h2 className="text-dark-indigo text-sm font-black tracking-widest uppercase">
            SUPPORT CHANNELS
          </h2>
          <div className="ml-6 h-px flex-1 bg-gray-100"></div>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {channels.map((channel, index) => (
            <div
              key={index}
              className="group flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white transition-shadow hover:shadow-md"
            >
              {/* Image Placeholder */}
              <div
                className={`aspect-4/3 w-full ${channel.imageColor} relative`}
              >
                {/* In a real scenario, <Image /> would go here. 
                     Using a text placeholder for clarity as per instructions. */}
                <div className="absolute inset-0 flex items-center justify-center text-xs font-medium tracking-widest text-gray-400 uppercase">
                  [Image Placeholder]
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-8">
                <h3 className="text-dark-indigo mb-3 text-lg font-bold">
                  {channel.title}
                </h3>
                <p className="mb-8 flex-1 text-sm leading-relaxed text-gray-500">
                  {channel.description}
                </p>

                {/* Link */}
                <button className="group/btn hover:text-opacity-70 text-dark-indigo flex w-fit items-center gap-2 text-xs font-bold tracking-widest uppercase transition-colors">
                  {channel.action}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportChannels;
