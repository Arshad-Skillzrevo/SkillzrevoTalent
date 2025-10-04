"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function SkillzRevoFAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 bg-white">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#1d8fff] mb-10  heading-oswald">
        FAQs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`p-4 rounded-md bg-blue-50 shadow-sm border border-blue-100 transition-all`}
          >
            <button
              className="flex justify-between items-center w-full text-left font-medium text-gray-800"
              onClick={() => toggleFAQ(index)}
            >
              <span
                className={`${
                  openIndex === index ? "text-[#1d8fff] font-semibold" : ""
                }`}
              >
                {faq.q}
              </span>
              {openIndex === index ? (
                <FaMinus className="text-[#1d8fff]" />
              ) : (
                <FaPlus className="text-[#1d8fff]" />
              )}
            </button>

            {openIndex === index && (
              <div className="mt-3 text-gray-700 text-sm md:text-base leading-relaxed">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
