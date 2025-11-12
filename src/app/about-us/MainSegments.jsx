"use client";

import { FaChalkboardTeacher, FaUsersCog, FaHandshake } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
// import CorporateEnquiryForm from "./src/app/corporate-training/CorporateEnquiryForm";

export default function MainSegments() {
  const [isOpen, setIsOpen] = useState(false);

  const segments = [
    {
      title: "Training",
      description:
        "Comprehensive corporate and individual training programs designed to build future-ready skills across AI, Data, Cloud, Cybersecurity, and more.",
      points: [
        "NASSCOM-certified, industry-aligned curriculum",
        "Hands-on, project-driven learning",
        "Flexible delivery: Classroom, Virtual, Blended, Self-paced",
        "Led by industry experts with practical experience",
      ],
      icon: <FaChalkboardTeacher size={32} className="text-blue-500" />,
      bg: "bg-blue-50",
      accent: "bg-blue-500",
      cta: "Request a Training Plan",
      link: "https://www.skillzrevo.com",
    },
    {
      title: "Staffing",
      description:
        "End-to-end staffing solutions that connect organizations with skilled professionals to meet workforce needs efficiently.",
      points: [
        "Specialized in tech and emerging roles",
        "Temporary, contract-to-hire, and full-time staffing",
        "Pre-vetted candidates ready for deployment",
        "Customized workforce solutions for your business",
      ],
      icon: <FaUsersCog size={32} className="text-green-500" />,
      bg: "bg-green-50",
      accent: "bg-green-500",
      cta: "Explore Staffing Solutions",
      link: "https://talent.skillzrevo.com",
    },
    {
      title: "Consulting",
      description:
        "Strategic consulting services to accelerate digital transformation, optimize processes, and drive business innovation.",
      points: [
        "Advisory on AI, Cloud, Cybersecurity, and Automation",
        "Process optimization and digital transformation roadmaps",
        "Tailored solutions aligned with your KPIs",
        "Ongoing support to ensure sustainable growth",
      ],
      icon: <FaHandshake size={32} className="text-orange-500" />,
      bg: "bg-orange-50",
      accent: "bg-orange-500",
      cta: "Consult with Our Experts",
      link: "https://consulting.skillzrevo.com",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-500">
          Core Segments
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Our Main Focus Areas
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          Training | Staffing | Consulting
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {segments.map((seg, idx) => (
          <div
            key={idx}
            className={`${seg.bg} rounded-xl shadow-md p-8 flex flex-col justify-between hover:shadow-lg transition`}
          >
            <div>
              <div
                className={`bg-white w-14 h-14 flex items-center justify-center rounded-full mb-6`}
              >
                {seg.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {seg.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {seg.description}
              </p>
              <ul className="space-y-3 text-gray-700">
                {seg.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-600 min-w-4 min-h-4 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <a
                href={seg.link}
                className={`${seg.accent} block text-white w-full py-3 px-5 rounded-lg font-semibold hover:opacity-90 transition`}
              >
                {seg.cta}
              </a>
            </div>
          </div>
        ))}
      </div>

  
    </section>
  );
}
