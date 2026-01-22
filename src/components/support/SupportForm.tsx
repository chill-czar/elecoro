import React from "react";
import { ChevronDown } from "lucide-react";

const SupportForm = () => {
  return (
    <section className="w-full bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-left">
        <div className="rounded-2xl border border-gray-100 bg-[#FAFAFA] p-8 sm:p-12">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-dark-indigo mb-2 text-2xl font-black tracking-tight uppercase">
              Report an Issue
            </h2>
            <p className="text-sm text-gray-500">
              Submit a detailed ticket for technical escalation.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="text-dark-indigo mb-2 block text-[11px] font-bold tracking-widest uppercase"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Summary of the issue"
                className="focus:border-dark-indigo focus:ring-dark-indigo w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-[#111111] placeholder:text-gray-400 focus:ring-1 focus:outline-none"
              />
            </div>

            {/* Platform Module */}
            <div>
              <label
                htmlFor="module"
                className="text-dark-indigo mb-2 block text-[11px] font-bold tracking-widest uppercase"
              >
                Platform Module
              </label>
              <div className="relative">
                <select
                  id="module"
                  className="focus:border-dark-indigo focus:ring-dark-indigo w-full appearance-none rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-[#111111] focus:ring-1 focus:outline-none"
                  defaultValue="Account & Verification"
                >
                  <option>Account & Verification</option>
                  <option>Tender Management</option>
                  <option>Bidding & Estimation</option>
                  <option>Technical Support</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="text-dark-indigo mb-2 block text-[11px] font-bold tracking-widest uppercase"
              >
                Description
              </label>
              <textarea
                id="description"
                rows={5}
                placeholder="Detailed description of the issue..."
                className="focus:border-dark-indigo focus:ring-dark-indigo w-full resize-none rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-[#111111] placeholder:text-gray-400 focus:ring-1 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="text-dark-indigo mt-2 w-full rounded-sm bg-[#D0F450] py-4 text-xs font-black tracking-widest uppercase transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              Submit Issue
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SupportForm;
