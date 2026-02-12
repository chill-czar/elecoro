import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const TrustedBySection = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Elecoro has completely revolutionized how we handle procurement. The transparency in bidding has saved us over 15% on material costs this quarter alone.",
      author: "Marcus Thorne",
      role: "Senior Project Manager, Industrial Power",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 2,
      quote:
        "The predictive analytics module gave us the heads-up we needed before the copper price spike. It's not just a tool, it's a competitive advantage.",
      author: "Elena Rodriguez",
      role: "Principal Consultant, Grid Systems",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  return (
    <section className="bg-light-gray w-full px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#111111] md:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg font-light text-gray-500">
            Join the thousands of professionals optimizing their electrical
            workflow.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-10 shadow-sm"
            >
              {/* Stars */}
              <div className="mb-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-[#84CC16] text-[#84CC16]"
                  />
                  // Visual match: Using lime/green shade from image for stars
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mb-8 flex-1">
                <p className="text-lg leading-relaxed font-medium text-[#111111] italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                  unoptimized
                />
                <div>
                  <h4 className="text-base font-bold text-[#111111]">
                    {testimonial.author}
                  </h4>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
