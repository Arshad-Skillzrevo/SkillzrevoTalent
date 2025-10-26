"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PopupForm from "./PopupForm";

export default function CallToActionSection() {
  return (
    <section className="relative bg-blue-950 py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Looking for your next hire? <br className="hidden md:block" />
            Or your next career move?
          </h2>

          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            Whether you're an employer searching for top talent or a professional
            ready to take the next step in your career, SkillzRevo Talent &
            Staffing connects you with the right opportunities.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
            
            <PopupForm
              ctaTitle="Request Talent"
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
              href="/jobs"
              target="_blank"
              className="px-6 py-3 bg-orange-500 text-white font-medium rounded-sm shadow hover:bg-orange-600 transition"
            >
              Submit Resume
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Background Accents */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-orange-200 rounded-full blur-3xl opacity-40"></div>
    </section>
  );
}
