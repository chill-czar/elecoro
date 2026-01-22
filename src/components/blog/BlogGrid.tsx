import React from "react";
import Image from "next/image";

interface BlogPost {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  imageSrc: string; // placeholder text or path
}

const faqs: BlogPost[] = [
  {
    category: "INDUSTRY UPDATES",
    title: "The Impact of New Grid Regulations on Smart Cities",
    excerpt:
      "A deep dive into how changing urban regulations are shaping the future of smart infrastructure development across major metropolitan areas.",
    date: "OCT 24, 2023",
    imageSrc: "/assets/blog-1.jpg", // Placeholder
  },
  {
    category: "PLATFORM ANNOUNCEMENTS",
    title: "Elecoro v2.0: Enhancing Supply Chain Transparency",
    excerpt:
      "Introducing new features designed to streamline communication and tracking across the global electrical supply chain with integrated ledger technology.",
    date: "OCT 20, 2023",
    imageSrc: "/assets/blog-2.jpg", // Placeholder
  },
  {
    category: "TECHNICAL GUIDES",
    title: "Quarterly Analysis: Copper Pricing Trends",
    excerpt:
      "An expert breakdown of the factors influencing copper market volatility and what it means for manufacturers in the coming quarter.",
    date: "OCT 15, 2023",
    imageSrc: "/assets/blog-3.jpg", // Placeholder
  },
  {
    category: "TENDERS & POLICIES",
    title: "Understanding Policy Shifts in Distribution",
    excerpt:
      "Key takeaways from the latest governmental policy updates regarding regional electrical grid expansion and private sector involvement.",
    date: "OCT 12, 2023",
    imageSrc: "/assets/blog-4.jpg", // Placeholder
  },
  {
    category: "TECHNICAL GUIDES",
    title: "Future-Proofing Industrial Assets",
    excerpt:
      "Exploring the technologies and maintenance strategies required to keep industrial systems running efficiently for the next decade.",
    date: "OCT 08, 2023",
    imageSrc: "/assets/blog-5.jpg", // Placeholder
  },
  {
    category: "INDUSTRY UPDATES",
    title: "Global Supply Chain Resilience in 2024",
    excerpt:
      "Strategies for navigating the complexities of international logistics in the electrical components industry amidst geopolitical shifts.",
    date: "OCT 05, 2023",
    imageSrc: "/assets/blog-6.jpg", // Placeholder
  },
];

const BlogGrid = () => {
  return (
    <section className="w-full bg-white px-4 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Filter Bar */}
        <div className="mb-12 flex flex-wrap items-center gap-8 border-b border-gray-100 pb-1">
          <button className="border-dark-indigo text-dark-indigo border-b-2 pb-4 text-sm font-bold">
            All
          </button>
          <button className="pb-4 text-sm font-medium text-gray-400 hover:text-gray-600">
            Industry Updates
          </button>
          <button className="pb-4 text-sm font-medium text-gray-400 hover:text-gray-600">
            Tenders & Policies
          </button>
          <button className="pb-4 text-sm font-medium text-gray-400 hover:text-gray-600">
            Platform Announcements
          </button>
          <button className="pb-4 text-sm font-medium text-gray-400 hover:text-gray-600">
            Technical Guides
          </button>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {faqs.map((post, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg border border-gray-100 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 text-xs font-bold tracking-widest text-gray-400 uppercase">
                {post.category}
              </div>
              <div className="relative mb-6 h-48 w-full overflow-hidden rounded-md bg-gray-200">
                {/* Image placeholder - would be Next.js Image in production */}
                <div className="flex h-full w-full items-center justify-center text-gray-400">
                  <span className="text-xs">Image Provided by user</span>
                </div>
              </div>
              <h3 className="text-dark-indigo mb-3 text-xl leading-tight font-bold">
                {post.title}
              </h3>
              <p className="mb-8 grow text-sm leading-relaxed text-gray-500">
                {post.excerpt}
              </p>
              <div className="mt-auto text-xs font-medium text-gray-400">
                {post.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
