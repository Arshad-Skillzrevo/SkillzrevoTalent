"use client";
import { motion } from "framer-motion";
import Link from "next/link";
// import { FaUsers, FaBriefcase, FaGlobe, FaUserTie } from "react-icons/fa";

import {
  FaUsers,
  FaShieldAlt,
  FaBriefcase,
  FaBrain,
  FaClock,
} from "react-icons/fa";
import PopupForm from "./PopupForm";

const stats = [
  {
    value: "48 - Hour Turnaround",
    label: "Get pre-screened CVs within 2 days",
    icon: <FaClock className="min-w-8 min-h-8 text-[#1d8fff] mx-auto" />,
  },
  {
    value: "5M+ Candidates Database",
    label: "Access verified talent pool across domains",
    icon: <FaUsers className="min-w-8 min-h-8 text-[#1d8fff] mx-auto" />,
  },
  {
    value: "100% Compliance Guarantee",
    label: "Payroll, statutory, and legal coverage",
    icon: <FaShieldAlt className="min-w-8 min-h-8 text-[#1d8fff] mx-auto" />,
  },
  {
    value: "Customized Hiring Models",
    label: "Flexible to your business needs",
    icon: <FaBriefcase className="min-w-8 min-h-8 text-[#1d8fff] mx-auto" />,
  },
  {
    value: "AI-Powered Talent Matching",
    label: "Improve hiring quality and speed",
    icon: <FaBrain className="min-w-8 min-h-8 text-[#1d8fff] mx-auto" />,
  },
];

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-blue-400 to-blue-600 py-20 min-h-screen flex flex-col justify-center z-0 overflow-hidden">
      <div className="absolute top-0 left-0 z-0 w-screen opacity-30">
        <img
          src="/images/Skillzrevotalent-hero.jpg"
          alt="Talent and Staffing"
          className="min-w-full h-screen object-cover object-center"
        />
      </div>
      <div className="container mx-auto px-6 lg:px-16 flex justify-center items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 max-w-5xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl text-center font-bold text-[#1d8fff] -skew-1 leading-9 md:leading-13 bg-white px-4 py-2 tracking-tight">
            Connecting Talent with Opportunity.
            <br />
            Powering the Future of Work.
          </h1>
          <p className="text-lg text-gray-100 leading-6 text-center max-w-2xl mx-auto">
            SkillzRevo Talent & Staffing helps businesses hire the right people,
            faster — while empowering professionals to find meaningful careers
            across industries and emerging technologies.
          </p>
          <div className="flex flex-wrap gap-4 pt-4 items-center justify-center z-20">
            {/* <Link
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
            </Link> */}
            <PopupForm
              ctaTitle="Hire Talent (For Employers)"
              pageUrl="skillzrevotalent.com"
              className="px-6 py-3 text-[#1d8fff] bg-white font-semibold rounded-sm hover:bg-gray-100 transition shadow-lg"
            />
            {/* <PopupForm
              ctaTitle="Download Brochure"
              pageUrl="skillzrevotalent.com"
              className="px-8 py-4 bg-[#1d8fff] !text-[#fff] rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              service="RPO"
            /> */}
            <Link
              href="https://skillzrevo.com/work-with-us"
              target="_blank"
              className="px-6 py-3 bg-orange-500 text-white font-medium rounded-sm shadow hover:bg-orange-600 transition"
            >
              Find Jobs (For Job Seekers)
            </Link>
            
          </div>
        </motion.div>

        {/* Right Image */}
        {/* <motion.div
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
        </motion.div> */}
      </div>

      {/* Stats Block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="container mx-auto px-6 lg:px-16 mt-16 z-1"
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-1 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-sm shadow hover:shadow-lg transition flex flex-col items-center gap-3"
            >
              <div className="flex flex-col justify-between gap-2 items-center">
                {stat.icon}
                <h3 className="text-xl  font-bold text-[#1d8fff]">
                  {stat.value}
                </h3>
              </div>
              <p className="mt-2 text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
