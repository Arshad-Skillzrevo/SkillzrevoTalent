"use client";
import { FaSearch, FaUsers, FaClipboardCheck, FaFileContract, FaHandsHelping, FaHandshake } from "react-icons/fa";
// import { Button } from "@/components/ui/button"; // adjust import path based on your project

export default function TalentProcess() {
  const steps = [
    {
      title: "Talent Planning & Discovery",
      description:
        "We begin with deep consultation to understand your business goals, role requirements, and cultural fit criteria.",
      icon: FaSearch,
    },
    {
      title: "Intelligent Talent Sourcing",
      description:
        "Using AI-powered sourcing, social recruiting, internal talent pools, and headhunting, we find candidates who align technically and culturally.",
      icon: FaUsers,
    },
    {
      title: "Assessment & Matching",
      description:
        "Our recruiters conduct multi-level screening, skill tests, and behavioral interviews to ensure only qualified candidates are presented.",
      icon: FaClipboardCheck,
    },
    {
      title: "Onboarding & Compliance",
      description:
        "Once selected, we handle documentation, onboarding, and payroll compliance—ensuring a smooth start for both clients and candidates.",
      icon: FaFileContract,
    },
    {
      title: "Post-Hire Support",
      description:
        "We provide performance tracking, candidate engagement, and feedback loops to support long-term retention and satisfaction.",
      icon: FaHandsHelping,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-tl from-blue-400 via-blue-600 to-blue-400">
      <div className="container max-w-7xl mx-auto flex flex-col md:items-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold md:text-center text-white mb-10">
          Our Talent Acquisition Process
        </h2>

        {/* Timeline / Flow */}
        <div className="relative flex flex-col items-center mb-10 transform skew-y-[-5deg]">
          {/* horizontal line (for desktop) */}
          <div className="absolute top-1/6 left-0 right-0 h-1 bg-blue-200 hidden md:block z-8"></div>

          <div className="md:grid md:grid-cols-5 md:gap-4 w-full z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex md:flex-col max-md:gap-2 skew-y-[5deg] items-center md:text-center relative py-8 hover:-translate-y-2 md:py-0 transition"
              >
                <div className="relative z-10 p-4 rounded-full text-white shadow-lg mb-4 bg-gradient-to-b inset-shadow-sm inset-shadow-white from-blue-500 via-blue-600 to-blue-700">
                  <step.icon className="text-4xl" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  {step.description && (
                    <p className="text-white text-sm">{step.description}</p>
                  )}
                </div>

                {/* vertical line for mobile */}
                {index < steps.length  && (
                  <div className="absolute bottom-0 h-full w-1 bg-blue-200 left-6 md:hidden"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        {/* <Button
          className="border-white border-2 bg-white text-[#1d8fff] hover:bg-transparent hover:text-white px-8 py-5 text-lg rounded shadow-lg transition-all duration-300 ease-in-out refrens-venus-button"
          asChild
          data-url-key="skillzrevo"
          data-form-key="688a164d01b0ea001203d2c9"
        >
          <a href="#">
            Become a Partner <FaHandshake className="inline-block size-6 ml-2" />
          </a>
        </Button> */}
      </div>
    </section>
  );
}
