"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    q: "1. What does SkillzRevo Staffing Solutions offer?",
    a: "SkillzRevo provides end-to-end staffing and workforce solutions including IT Recruitment, Permanent Staffing, Contract Staffing, Remote Staffing & Offshore Teams, Recruitment Process Outsourcing (RPO), and Campus/Fresher Hiring – all tailored to meet the dynamic needs of startups, SMEs, and large enterprises.",
  },
  {
    q: "2. What industries do you serve?",
    a: (
      <ul className="list-disc pl-6">
        <li>Information Technology (IT & ITeS)</li>
        <li>BFSI (Banking & Financial Services)</li>
        <li>Healthcare & Pharma</li>
        <li>EdTech & E-commerce</li>
        <li>Manufacturing & Engineering</li>
        <li>Retail, Logistics, and more</li>
      </ul>
    ),
  },
  {
    q: "3. What makes SkillzRevo different from other staffing agencies?",
    a: (
      <ul className="list-disc pl-6">
        <li>Faster hiring turnaround</li>
        <li>Pre-screened, quality talent</li>
        <li>Flexible engagement models</li>
        <li>Cost-effective solutions</li>
        <li>Post-hiring support and performance monitoring</li>
      </ul>
    ),
  },
  {
    q: "4. Can you support bulk hiring or high-volume staffing needs?",
    a: "Yes. Whether you’re scaling a team quickly, setting up a new process, or launching a new location, we offer bulk hiring, contract staffing, and campus drives to help you onboard talent at scale.",
  },
  {
    q: "5. Do you provide remote or offshore staffing?",
    a: "Absolutely. We specialize in remote staffing and building offshore teams from India and other talent-rich regions, enabling businesses worldwide to scale quickly while saving costs.",
  },
  {
    q: "6. How does your recruitment process work?",
    a: (
      <ul className="list-disc pl-6">
        <li>Client requirement analysis</li>
        <li>Sourcing through multiple channels</li>
        <li>Technical & behavioral screening</li>
        <li>Interview scheduling</li>
        <li>Offer negotiation & onboarding support</li>
        <li>Ongoing performance feedback (if applicable)</li>
      </ul>
    ),
  },
  {
    q: "7. Do you provide staffing for both tech and non-tech roles?",
    a: "Yes. We hire across both technical (IT, engineering, data) and non-technical (sales, HR, operations, customer service) roles based on your business requirements.",
  },
  {
    q: "8. What is the typical turnaround time for closing a position?",
    a: "Our average turnaround time is 24 to 72 hours for most roles. For niche or senior positions, we provide realistic timelines after assessing your requirement.",
  },
  {
    q: "9. What are your engagement and pricing models?",
    a: (
      <>
        <p>We offer flexible engagement models including:</p>
        <ul className="list-disc pl-6">
          <li>Contingency-based hiring (pay after hire)</li>
          <li>Contractual or monthly billing</li>
          <li>Dedicated RPO teams</li>
          <li>Custom retainers for high-volume clients</li>
        </ul>
        <p>Pricing is tailored based on volume, seniority, and hiring timelines.</p>
      </>
    ),
  },
  {
    q: "10. How can I start working with SkillzRevo Staffing Solutions?",
    a: (
      <p>
        You can reach out through the contact form, call our team, or email{" "}
        <a
          href="mailto:staffing@skillzrevo.com"
          className="text-orange-500 underline"
        >
          staffing@skillzrevo.com
        </a>
        . We’ll schedule a quick consultation to understand your staffing needs
        and propose the best-fit solution.
      </p>
    ),
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="py-16 bg-gray-50"
      aria-label="Frequently Asked Questions – SkillzRevo Staffing Solutions"
    >
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1d8fff] mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-sm transition duration-300 border border-gray-200 ${
                openIndex === index ? "bg-[#e6f2ff]" : "bg-[#f0f8ff]"
              }`}
            >
              <button
                className="w-full flex justify-between items-center px-5 py-4 text-left text-lg font-medium text-[#1d8fff] hover:text-orange-500 transition"
                onClick={() => toggleFAQ(index)}
              >
                {faq.q}
                {openIndex === index ? (
                  <FaChevronUp className="text-orange-500 transition-transform duration-300" />
                ) : (
                  <FaChevronDown className="text-[#1d8fff] transition-transform duration-300" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-4 text-gray-700 text-base leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
