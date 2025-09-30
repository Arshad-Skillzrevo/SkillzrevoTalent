"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-white py-20 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Looking for your next hire? <br className="hidden md:block" />
            Or your next career move?
          </h2>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Whether you're an employer searching for top talent or a professional
            ready to take the next step in your career, SkillzRevo Talent &
            Staffing connects you with the right opportunities.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
            <Link
              href="/hire-talent"
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-sm shadow hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              Request Talent
            </Link>
            <Link
              href="/find-jobs"
              className="px-8 py-4 bg-orange-500 text-white font-semibold rounded-sm shadow hover:bg-orange-600 transition flex items-center justify-center gap-2"
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
