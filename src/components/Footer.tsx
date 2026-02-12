import React from "react";
import { Globe, Share2 } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-light-gray w-full border-t border-gray-100 px-4 pt-20 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Top Section: Grid for Links */}
        <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand Column (Span 2) */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center">
              <Image
                src="/logo.png"
                alt="Elecoro Logo"
                width={140}
                height={24}
                className="-mx-5 h-24 w-auto object-contain object-left"
                priority
              />
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-gray-500">
              The world&apos;s most comprehensive ecosystem for the electrical
              industry, from supply to install.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="mb-6 text-xs font-bold tracking-wider text-[#111111] uppercase">
              Product
            </h4>
            <ul className="space-y-4">
              {["Modules", "Tenders", "Analytics"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-dark-indigo text-sm text-gray-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold tracking-wider text-[#111111] uppercase">
              Solutions
            </h4>
            <ul className="space-y-4">
              {["Contractors", "Suppliers", "Developers"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-dark-indigo text-sm text-gray-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold tracking-wider text-[#111111] uppercase">
              Company
            </h4>
            <ul className="space-y-4">
              {["About Us", "Careers", "Press"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-dark-indigo text-sm text-gray-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold tracking-wider text-[#111111] uppercase">
              Legal
            </h4>
            <ul className="space-y-4">
              {["Privacy", "Terms", "Security"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-dark-indigo text-sm text-gray-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-8 h-px w-full bg-gray-100"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-gray-400">
            © 2024 Elecoro Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Globe className="h-5 w-5 cursor-pointer text-gray-400 hover:text-gray-600" />
            <Share2 className="h-5 w-5 cursor-pointer text-gray-400 hover:text-gray-600" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
