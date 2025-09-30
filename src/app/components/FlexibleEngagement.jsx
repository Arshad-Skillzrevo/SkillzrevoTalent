"use client";
import { FaCheckSquare } from "react-icons/fa";

export default function FlexibleEngagement() {
  const services = [
    "On-Demand Hiring (when you need a few)",
    "Project-Based Hiring (short-term teams)",
    "Embedded Recruiters (our recruiter works as yours)",
    "Full-Service RPO",
    "Hybrid & Contract-to-Hire Models",
  ];

  return (
    <div className="bg-[#1d8fff] py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="https://placehold.co/500x500/png"
            alt="Business professionals"
            className="rounded-sm shadow-lg object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-snug">
            FLEXIBLE ENGAGEMENT. <br /> RELIABLE RESULTS.
          </h2>
          <p className="text-sm md:text-base mb-6 max-w-lg">
            We understand every organization has unique talent acquisition
            challenges. That’s why we offer flexible, scalable models to suit
            your hiring needs:
          </p>

          <ul className="space-y-3 mb-6">
            {services.map((service, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaCheckSquare className="text-white text-lg mt-0.5" />
                <span className="text-sm md:text-base">{service}</span>
              </li>
            ))}
          </ul>

          <button className="bg-white text-[#1d8fff] px-6 py-3 font-semibold rounded-sm shadow hover:bg-gray-100 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
