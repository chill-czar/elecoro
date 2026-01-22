import React from "react";
import { MessageSquare, BarChart3, BadgeCheck } from "lucide-react";

const DashboardPreview = () => {
  return (
    <section className="w-full overflow-hidden bg-gray-50 px-4 py-24 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        {/* Browser Window Mockup */}
        <div className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">
          {/* Browser Toolbar */}
          <div className="flex items-center gap-4 border-b border-gray-200 bg-gray-100 px-4 py-3">
            {/* Traffic Lights */}
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full border border-[#E0443E] bg-[#FF5F57]"></div>
              <div className="h-3 w-3 rounded-full border border-[#D89E24] bg-[#FEBC2E]"></div>
              <div className="h-3 w-3 rounded-full border border-[#1AAB29] bg-[#28C840]"></div>
            </div>
            {/* Address Bar */}
            <div className="flex-1 rounded-md border border-gray-200 bg-white px-3 py-1 text-center">
              <span className="text-xs font-medium text-gray-500">
                app.elecoro.io/dashboard
              </span>
            </div>
          </div>

          {/* Browser Content */}
          <div className="relative aspect-16/10 bg-white md:aspect-auto">
            {/* Using the image provided by user */}
            <img
              src="/image.png"
              alt="Elecoro Dashboard Interface"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* Floating Cards - Positioned absolute relative to the container */}

        {/* Card 1: In-app Chat (Left) */}
        <div className="absolute top-1/2 -left-4 z-20 hidden -translate-y-1/2 md:block lg:-left-12">
          <div className="animate-fade-in-up w-64 rounded-xl border border-gray-100 bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#F3F0FF]">
              <MessageSquare className="text-dark-indigo h-5 w-5" />
            </div>
            <h3 className="mb-1 text-sm font-bold text-[#111111]">
              In-app Chat
            </h3>
            <p className="text-xs leading-relaxed text-gray-500">
              Direct line to verified suppliers and team members.
            </p>
          </div>
        </div>

        {/* Card 2: Industry Analytics (Right) */}
        <div className="absolute top-1/2 -right-4 z-20 hidden -translate-y-1/2 md:block lg:-right-12">
          <div className="animate-fade-in-up w-64 rounded-xl border border-gray-100 bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] delay-100">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#F3F0FF]">
              <BarChart3 className="text-dark-indigo h-5 w-5" />
            </div>
            <h3 className="mb-1 text-sm font-bold text-[#111111]">
              Industry Analytics
            </h3>
            <p className="text-xs leading-relaxed text-gray-500">
              Market-wide pricing trends and project tracking.
            </p>
          </div>
        </div>

        {/* Card 3: Global Tender Directory (Bottom) */}
        <div className="absolute -bottom-6 left-1/2 z-20 hidden -translate-x-1/2 md:block">
          <div className="animate-fade-in-up flex w-72 items-start gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] delay-200">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#ECFDF5]">
              <BadgeCheck className="h-5 w-5 text-[#059669]" />
            </div>
            <div>
              <h3 className="mb-1 text-sm font-bold text-[#111111]">
                Global Tender Directory
              </h3>
              <p className="text-xs leading-relaxed text-gray-500">
                240+ Active tenders found today
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
