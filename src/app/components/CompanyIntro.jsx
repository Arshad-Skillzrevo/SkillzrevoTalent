"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase, Users, Layers } from "lucide-react"; // optional icons

export default function CompanyIntro() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/images/about-us.jpg" // your image file here
            alt="Company Introduction"
            className="w-full h-full object-cover rounded-sm shadow-xl"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            About <span className="text-[#1d8fff]">SkillzRevo</span> Talent & Staffing
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At SkillzRevo Talent & Staffing, we go beyond traditional recruitment.
            As part of SkillzRevo Solutions Pvt. Ltd., we specialize in building
            agile, scalable, and future-ready workforce solutions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From permanent hiring and contract staffing to RPO and offshore teams,
            our goal is to connect the best talent with the right opportunities.
            Whether you are an employer looking for specialized professionals or a
            candidate ready to take the next step in your career, we are here to
            make it happen.
          </p>

          {/* Optional icons row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-50 rounded-full">
                <Briefcase className="text-[#1d8fff]" />
              </div>
              <span className="text-sm font-medium text-gray-700">
                Permanent Hiring
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-orange-50 rounded-full">
                <Users className="text-orange-500" />
              </div>
              <span className="text-sm font-medium text-gray-700">
                Contract Staffing
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-green-50 rounded-full">
                <Layers className="text-green-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">
                Offshore & RPO Teams
              </span>
            </div>
          </div>

          <Link
            href="/about"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-sm shadow hover:bg-blue-700 transition"
          >
            Learn More About Us →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
