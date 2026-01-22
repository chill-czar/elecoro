import React from "react";
import {
  Factory,
  Wrench,
  DraftingCompass,
  Building2,
  GraduationCap,
  UserSearch,
} from "lucide-react";

interface WorkflowCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

const WorkflowCard = ({
  icon: Icon,
  title,
  description,
  features,
}: WorkflowCardProps) => (
  <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-8 transition-shadow hover:shadow-lg">
    <div className="mb-6">
      <Icon className="text-dark-indigo h-8 w-8" strokeWidth={1.5} />
    </div>
    <h3 className="text-dark-indigo mb-3 text-xl font-bold">{title}</h3>
    <p className="mb-8 flex-1 text-sm leading-relaxed text-gray-500">
      {description}
    </p>
    <ul className="space-y-3">
      {features.map((feature, idx) => (
        <li
          key={idx}
          className="flex items-center gap-2 text-[11px] font-bold tracking-wider text-gray-500/80 uppercase"
        >
          <span className="bg-dark-indigo h-1 w-1 rounded-full"></span>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const StakeholderWorkflows = () => {
  const workflows = [
    {
      icon: Factory,
      title: "Manufacturers",
      description:
        "Streamline product distribution and catalog management across the entire ecosystem.",
      features: [
        "LIST DIGITAL CATALOGS",
        "TRACK MARKET TRENDS",
        "DIRECT DISTRIBUTOR REACH",
      ],
    },
    {
      icon: Wrench,
      title: "Contractors",
      description:
        "Access a centralized hub for tender management and digital bidding automation.",
      features: [
        "ACCESS GLOBAL TENDERS",
        "AUTOMATED BIDDING",
        "RESOURCE PLANNING",
      ],
    },
    {
      icon: DraftingCompass,
      title: "Engineers",
      description:
        "Maintain technical precision with specification tools and project oversight modules.",
      features: [
        "DESIGN VALIDATION",
        "MATERIAL SELECTION",
        "COMPLIANCE MONITORING",
      ],
    },
    {
      icon: Building2,
      title: "Electrical Companies",
      description:
        "Enterprise-grade management for workforce, inventory, and procurement cycles.",
      features: ["CRM INTEGRATION", "SUPPLY CHAIN SYNC", "ANALYTICS DASHBOARD"],
    },
    {
      icon: GraduationCap,
      title: "Students",
      description:
        "Bridging the gap between education and industry via the Learning Management System.",
      features: [
        "INDUSTRY CERTIFICATIONS",
        "STANDARD PROTOCOLS",
        "CAREER DIRECTORY",
      ],
    },
    {
      icon: UserSearch,
      title: "Consultants",
      description:
        "Expert-led oversight and advisory workflows integrated into the project lifecycle.",
      features: ["PROJECT AUDITING", "FEASIBILITY REPORTS", "CLIENT LIAISON"],
    },
  ];

  return (
    <section className="w-full bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 border-b border-gray-200 pb-4">
          <h2 className="text-dark-indigo text-sm font-black tracking-widest uppercase">
            STAKEHOLDER WORKFLOWS
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workflows.map((workflow, index) => (
            <WorkflowCard
              key={index}
              icon={workflow.icon}
              title={workflow.title}
              description={workflow.description}
              features={workflow.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StakeholderWorkflows;
