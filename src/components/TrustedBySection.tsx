import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const TrustedBySection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Elecoro has completely revolutionized how we handle procurement. The transparency in bidding has saved us over 15% on material costs this quarter alone.",
      author: "Marcus Thorne",
      role: "Senior Project Manager, Industrial Power",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 2,
      quote: "The predictive analytics module gave us the heads-up we needed before the copper price spike. It's not just a tool, it's a competitive advantage.",
      author: "Elena Rodriguez",
      role: "Principal Consultant, Grid Systems",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  return (
    <section className="w-full bg-[#FAFAFA] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4 tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-500 text-lg font-light">
            Join the thousands of professionals optimizing their electrical workflow.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-10 rounded-2xl border border-gray-200 shadow-sm flex flex-col h-full">
              
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#84CC16] text-[#84CC16]"
                  />
                  // Visual match: Using lime/green shade from image for stars
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1 mb-8">
                <p className="text-[#111111] text-lg italic leading-relaxed font-medium">
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
                  <h4 className="font-bold text-[#111111] text-base">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-500 text-xs">
                    {testimonial.role}
                  </p>
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
