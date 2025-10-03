"use client";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaUsers,
  FaClipboardCheck,
  FaFileContract,
  FaHandsHelping,
} from "react-icons/fa";

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
      <div className="container max-w-7xl mx-auto flex flex-col items-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
        >
          Our Talent Acquisition Process
        </motion.h2>

        {/* Timeline / Flow */}
        <div className="relative w-full md:grid md:grid-cols-5 md:gap-6">
          {/* desktop horizontal line */}
          <div className="absolute top-14 left-0 right-0 h-1 bg-blue-200 hidden md:block"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative flex md:flex-col items-center md:text-center py-10 md:py-0 hover:-translate-y-2 transition-transform duration-300"
              >
                {/* Icon */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full shadow-lg bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 text-white mb-4">
                  <Icon className="text-3xl" />
                </div>

                {/* Text */}
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* mobile vertical line */}
                {index < steps.length - 1 && (
                  <div className="absolute bottom-0 h-full w-1 bg-blue-200 left-8 md:hidden"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
