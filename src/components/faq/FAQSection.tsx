"use client";
import React, { useState, useMemo } from "react";
import {
  ChevronDown,
  ChevronUp,
  Search,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openId, setOpenId] = useState<string | null>("1");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Mock Data - Expanded to demonstrate pagination
  const faqs: FAQItem[] = [
    {
      id: "1",
      question: "How do I reset my account password?",
      answer:
        "You can reset your password by navigating to the Account Settings page and clicking on 'Security'. Follow the prompts to receive a reset link via your registered email address. For security reasons, the link expires after 15 minutes.",
    },
    {
      id: "2",
      question: "What are the requirements for bidding on a tender?",
      answer:
        "Bidding requirements vary by project but typically include verified business credentials, proof of insurance, and specific technical certifications. Check the tender document for exact details.",
    },
    {
      id: "3",
      question: "How can I update my project milestones?",
      answer:
        "Project milestones can be updated directly through the Project Execution module. Navigate to your active projects, select the relevant project, and click 'Update Progress' on the timeline.",
    },
    {
      id: "4",
      question: "Is my payment information secure?",
      answer:
        "Yes, Elecoro uses bank-grade encryption and strictly adheres to PCI-DSS compliance standards. We do not store your raw credit card information on our servers.",
    },
    {
      id: "5",
      question: "What is the typical review period for a bid?",
      answer:
        "Review periods depend on the project scope and the issuer's timeline. typically, preliminary reviews take 3-5 business days, with final awards announced shortly thereafter.",
    },
    // Adding more mock items to test pagination
    {
      id: "6",
      question: "Can I use Elecoro on mobile devices?",
      answer:
        "Yes, Elecoro is fully responsive and accessible on all modern mobile browsers. We also offer a dedicated mobile app for on-site execution teams.",
    },
    {
      id: "7",
      question: "How do I invite team members to my organization?",
      answer:
        "Admins can invite team members via the 'Team Management' tab in settings. Simply enter their email addresses and assign roles.",
    },
    {
      id: "8",
      question: "What currencies does the platform support?",
      answer:
        "We currently support USD, EUR, and GBP for international transactions. Local currency support varies by project region.",
    },
    {
      id: "9",
      question: "Are API integrations available?",
      answer:
        "Yes, our Enterprise tier includes full API access for integrating with your existing ERP or CRM systems.",
    },
    {
      id: "10",
      question: "How do I report a technical bug?",
      answer:
        "You can use the 'Report an Issue' form on our Support page or contact our technical support hotline directly.",
    },
    {
      id: "11",
      question: "Is two-factor authentication mandatory?",
      answer:
        "For security compliance, 2FA is mandatory for all Vendor and Client accounts. It is optional but recommended for Observer roles.",
    },
    {
      id: "12",
      question: "Where are your data centers located?",
      answer:
        "Our primary data centers are located in Virginia, USA, and Frankfurt, Germany, with edge locations worldwide for low-latency access.",
    },
  ];

  const filteredFAQs = useMemo(() => {
    if (!searchQuery) return faqs;
    const lowerQuery = searchQuery.toLowerCase();
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(lowerQuery) ||
        faq.answer.toLowerCase().includes(lowerQuery),
    );
  }, [searchQuery, faqs]);

  const totalPages = Math.ceil(filteredFAQs.length / itemsPerPage);
  const paginatedFAQs = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredFAQs.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredFAQs, currentPage]);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="w-full bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24">
          {/* Left Column: Header & Support Box */}
          <div className="lg:sticky lg:top-32 lg:col-span-4 lg:self-start">
            <div className="mb-12">
              <h1 className="text-dark-indigo mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="text-lg leading-relaxed text-gray-500">
                Everything you need to know about the Elecoro platform. Find
                clear answers, platform documentation, and expert guidance.
              </p>
            </div>

            {/* Still Need Help Box - Moved to left column for desktop layout balance */}
            <div className="rounded-lg border border-gray-100 bg-[#FAFAFA] p-8">
              <h2 className="text-dark-indigo mb-2 text-xl font-bold">
                Still Need Help?
              </h2>
              <p className="mb-6 text-sm text-gray-500">
                If you couldn&apos;t find the answer you were looking for, our
                dedicated support team is available 24/7.
              </p>
              <button className="text-dark-indigo w-full rounded-md bg-[#D0F450] py-3 text-sm font-bold shadow-sm transition-transform hover:scale-105 active:scale-95">
                Contact Support
              </button>
            </div>
          </div>

          {/* Right Column: Search & FAQ List */}
          <div className="lg:col-span-8">
            {/* Search Bar */}
            <div className="sticky top-20 z-10 mb-10 bg-white pt-4 pb-4">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="focus:ring-dark-indigo focus:border-dark-indigo block w-full rounded-md border-gray-200 bg-gray-50 py-4 pr-4 pl-12 text-gray-900 placeholder:text-gray-400 focus:ring-2 sm:text-sm"
                />
              </div>
            </div>

            {/* Accordion List */}
            <div className="mb-12 space-y-4">
              {paginatedFAQs.length > 0 ? (
                paginatedFAQs.map((faq) => (
                  <div
                    key={faq.id}
                    className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-all hover:border-gray-200"
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
                    >
                      <span className="text-dark-indigo pr-8 text-base font-bold">
                        {faq.question}
                      </span>
                      {openId === faq.id ? (
                        <ChevronUp className="text-dark-indigo h-5 w-5 shrink-0" />
                      ) : (
                        <ChevronDown className="text-dark-indigo h-5 w-5 shrink-0" />
                      )}
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openId === faq.id
                          ? "max-h-48 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="border-t border-gray-50 bg-gray-50/50 px-6 py-5 text-sm leading-relaxed text-gray-600">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-12 text-center text-gray-500">
                  <p>No questions found matching your search.</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between border-t border-gray-100 pt-8">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </button>
                <div className="text-sm font-medium text-gray-900">
                  Page <span className="font-bold">{currentPage}</span> of{" "}
                  <span className="font-bold">{totalPages}</span>
                </div>
                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Next
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
