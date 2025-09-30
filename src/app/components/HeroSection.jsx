"use client";
import { motion } from "framer-motion";
import Link from "next/link";
// import { FaUsers, FaBriefcase, FaGlobe, FaUserTie } from "react-icons/fa";


 import { FaUsers, FaShieldAlt, FaBriefcase, FaBrain, FaClock } from "react-icons/fa";

const stats = [
  {
    value: "48-Hour Turnaround",
    label: "Get pre-screened CVs within 2 days",
    icon: <FaClock className="min-w-8 min-h-8 text-blue-600 mx-auto" />,
  },
  {
    value: "5M+ Candidate Database",
    label: "Access verified talent pool across domains",
    icon: <FaUsers className="min-w-8 min-h-8 text-blue-600 mx-auto" />,
  },
  {
    value: "100% Compliance Guarantee",
    label: "Payroll, statutory, and legal coverage",
    icon: <FaShieldAlt className="min-w-8 min-h-8 text-blue-600 mx-auto" />,
  },
  {
    value: "Customized Hiring Models",
    label: "Flexible to your business needs",
    icon: <FaBriefcase className="min-w-8 min-h-8 text-blue-600 mx-auto" />,
  },
  {
    value: "AI-Powered Talent Matching",
    label: "Improve hiring quality and speed",
    icon: <FaBrain className="min-w-8 min-h-8 text-blue-600 mx-auto" />,
  },
];

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-white py-20">
      <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl max-md:text-center font-bold text-gray-900 leading-9 md:leading-13 tracking-tight">
            Connecting Talent with Opportunity.
            <span className="text-blue-600"> Powering the Future of Work.</span>
          </h1>
          <p className="text-lg text-gray-600 leading-6 max-md:text-center">
            SkillzRevo Talent & Staffing helps businesses hire the right people,
            faster — while empowering professionals to find meaningful careers
            across industries and emerging technologies.
          </p>
          <div className="flex flex-wrap gap-4 pt-4 max-md:items-center max-md:justify-center">
            <Link
              href="/hire-talent"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-sm shadow hover:bg-blue-700 transition"
            >
              Hire Talent (For Employers)
            </Link>
            <Link
              href="/find-jobs"
              className="px-6 py-3 bg-orange-500 text-white font-medium rounded-sm shadow hover:bg-orange-600 transition"
            >
              Find Jobs (For Job Seekers)
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <img
            src="/images/SkillzrevoTalent.jpg"
            alt="Talent and Staffing"
            className="w-full max-w-lg h-full rounded-sm shadow-xl"
          />
        </motion.div>
      </div>

      {/* Stats Block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="container mx-auto px-6 lg:px-16 mt-16"
      >
 

            <div className="grid grid-cols-1 md:grid-cols-5 gap-1 text-center">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-sm shadow hover:shadow-lg transition flex flex-col items-center gap-3"
                >
                  <div className="flex gap-3 items-center">
                    {stat.icon}
                  <h3 className="text-xl text-left font-bold text-blue-600">
                    {stat.value}
                  </h3>
                  </div>
                  <p className="mt-2 text-left text-gray-700">{stat.label}</p>
                </div>
              ))}
            </div>

      </motion.div>
    </section>
  );
}
