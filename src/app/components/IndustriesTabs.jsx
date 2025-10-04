"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  ShieldCheck,
  Stethoscope,
  Factory,
  ShoppingBag,
  Wifi,
  BookOpen,
  Flame,
  Truck,
  Rocket,
} from "lucide-react";

const industries = [
  {
    title: "Information Technology & ITES",
    description:
      "Build future-ready teams in full-stack, cloud, DevOps, Cybersecurity, Machine Learning, and advanced software innovation.",
    image: "/images/it-recruitment.jpg",
    icon: Building2,
  },
  {
    title: "Banking & Financial Services",
    description:
      "Empower BFSI institutions with AI-driven analytics, fraud detection, cybersecurity, and automation expertise.",
    image: "/images/contract-staffing.jpg",
    icon: ShieldCheck,
  },
  {
    title: "Healthcare & Life Sciences",
    description:
      "Leverage AI/ML, analytics, and secure digital solutions to improve healthcare delivery and compliance.",
    image: "/images/rpo.jpg",
    icon: Stethoscope,
  },
  {
    title: "Manufacturing & Engineering",
    description:
      "Enable smart factories through automation, predictive maintenance, robotics, and real-time data visualization.",
    image: "/images/industry4.jpg",
    icon: Factory,
  },
  {
    title: "Retail & E-Commerce",
    description:
      "Drive growth with personalization, automation, business intelligence, and customer analytics for competitive advantage.",
    image: "/images/retail.jpg",
    icon: ShoppingBag,
  },
  {
    title: "Telecom & Networking",
    description:
      "Enhance network security, optimize data pipelines, and deploy scalable cloud-based communication solutions effectively.",
    image: "/images/telecomm.jpg",
    icon: Wifi,
  },
  {
    title: "Education & EdTech",
    description:
      "Empower learning with AI-powered tools, digital content, and advanced upskilling programs for educators.",
    image: "/images/edtech.jpg",
    icon: BookOpen,
  },
  {
    title: "Energy, Oil & Gas",
    description:
      "Deliver domain experts for energy transformation, compliance, and safety-critical operations.",
    image: "/images/government.png",
    icon: Flame,
  },
  {
    title: "Logistics & Supply Chain",
    description:
      "Optimize routes, forecast demand, and build BI dashboards for smarter, efficient supply chain management.",
    image: "/images/supply.jpg",
    icon: Truck,
  },
  {
    title: "Startups & Emerging Businesses",
    description:
      "Transform your business with agile digital strategies, flexible staffing, and rapid innovation expertise.",
    image: "/images/fcmg.jpg",
    icon: Rocket,
  },
];

const IndustriesTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const activeIndustry = industries[activeIndex];

  return (
    <section className="py-10 lg:py-20 px-6 lg:px-16 mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#1d8fff] mb-8">
        Industries We Serve
      </h2>

      {/* Accordion for mobile */}
      <div className="block lg:hidden space-y-4">
        {industries.map((industry, index) => {
          const Icon = industry.icon;
          return (
            <div
              key={index}
              className="border rounded-lg shadow-sm bg-white overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-800 hover:bg-blue-50 transition"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-[#1d8fff]" />
                  {industry.title}
                </div>
                <span className="text-xl">
                  {openAccordion === index ? "−" : "+"}
                </span>
              </button>

              {openAccordion === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 pb-4 space-y-3"
                >
                  <p className="text-gray-600">{industry.description}</p>
                  <div className="relative w-full h-48 rounded-lg overflow-hidden shadow">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      {/* Tabs for desktop */}
      <div className="hidden lg:grid grid-cols-4 gap-6 ">
        {/* Left Tabs */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 col-span-1 p-4 flex flex-col gap-2">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left font-medium transition-all ${
                  index === activeIndex
                    ? "bg-[#1d8fff] text-white shadow"
                    : "hover:bg-blue-50 text-gray-700"
                }`}
              >
                <Icon className="min-w-8 min-h-8" />
                {industry.title}
              </button>
            );
          })}
        </div>

        {/* Right Content */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md border border-gray-200 col-span-3 p-6 flex flex-col gap-6 items-center justify-between"
        >
          <div className="flex gap-4 justify-between w-full flex-col">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-4 rounded-md">
                <activeIndustry.icon className="w-10 h-10 text-[#1d8fff]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                {activeIndustry.title}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {activeIndustry.description}
            </p>
          </div>
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md">
            <Image
              src={activeIndustry.image}
              alt={activeIndustry.title}
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesTabs;
