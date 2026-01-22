"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [showGetStarted, setShowGetStarted] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled past roughly 80% of the viewport (assuming Hero is full screen)
      if (pathname === "/") {
        setShowGetStarted(window.scrollY > window.innerHeight * 0.8);
      } else {
        setShowGetStarted(true);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 font-sans backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <div className="flex shrink-0 items-center gap-2">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Elecoro Logo"
                width={140}
                height={32}
                className="h-24 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Navigation - Centered (Hidden on mobile) */}
          <nav className="hidden items-center gap-8 md:flex lg:gap-10">
            {[
              { label: "Solutions", href: "/solutions" },
              { label: "About Us", href: "/about-us" },
              { label: "Support", href: "/support" },
              { label: "FAQ", href: "/faq" },
              { label: "Blog", href: "/blog" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-dark-indigo text-sm font-medium text-gray-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Section */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="#"
              className="text-dark-indigo text-sm font-semibold transition-opacity hover:opacity-80"
            >
              Login
            </a>
            <button
              className={`bg-neon-green text-dark-indigo rounded-md px-5 py-2.5 text-sm font-bold shadow-sm transition-all duration-300 hover:bg-[#cbf040] ${
                showGetStarted
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-2 opacity-0"
              }`}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
