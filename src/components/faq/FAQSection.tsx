"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openId, setOpenId] = useState<string | null>("1");

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
  ];

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-dark-indigo mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="max-w-xl text-lg text-gray-500">
            Everything you need to know about the Elecoro platform. Find clear
            answers, platform documentation, and expert guidance.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mb-20 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="overflow-hidden rounded-md border border-gray-200 bg-white transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
              >
                <span className="text-dark-indigo text-base font-bold">
                  {faq.question}
                </span>
                {openId === faq.id ? (
                  <ChevronUp className="text-dark-indigo h-5 w-5" />
                ) : (
                  <ChevronDown className="text-dark-indigo h-5 w-5" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openId === faq.id
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="border-t border-gray-100 px-6 py-5 text-sm leading-relaxed text-gray-500">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Need Help Box */}
        <div className="rounded-lg border border-gray-100 bg-[#FAFAFA] p-8 sm:p-10">
          <h2 className="text-dark-indigo mb-2 text-2xl font-bold">
            Still Need Help?
          </h2>
          <p className="mb-8 text-gray-500">
            If you couldn&apos;t find the answer you were looking for, our dedicated
            support team is available 24/7 to assist you.
          </p>
          <button className="text-dark-indigo rounded-md bg-[#D0F450] px-6 py-3 text-sm font-bold shadow-sm transition-transform hover:scale-105 active:scale-95">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
