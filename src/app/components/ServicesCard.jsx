"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase, Users, Building2, Globe, Workflow, GraduationCap,BookOpen, Search, UsersRound } from "lucide-react";

const services = [
  {
    id: 1,
    title: "IT Recruitment",
    icon: Briefcase,
    hours: "Top Tech Talent",
    skills: "Emerging Domains",
    description: [
      "Find top tech talent across emerging domains",
    ],
    image: "/images/it-recruitment.jpg",
  },
  {
    id: 2,
    title: "Contract Staffing",
    icon: Users,
    hours: "Agile Workforce",
    skills: "Project Needs",
    description: [
      "Agile workforce solutions for short-term and project needs",
    ],
    image: "/images/contract-staffing.jpg",
  },
  {
    id: 3,
    title: "Permanent Staffing",
    icon: Building2,
    hours: "Reliable Hiring",
    skills: "Full-Time",
    description: [
      "Reliable full-time hiring to strengthen your team",
    ],
    image: "/images/permanent-staffing.jpg",
  },
  {
    id: 4,
    title: "Remote Staffing & Offshore Teams",
    icon: Globe,
    hours: "Global Teams",
    skills: "Distributed Workforce",
    description: [
      "Build global, distributed teams with ease",
    ],
    image: "/images/remote-staffing.jpg",
  },
  {
    id: 5,
    title: "RPO (Recruitment Process Outsourcing)",
    icon: Workflow,
    hours: "End-to-End",
    skills: "Recruitment",
    description: [
      "End-to-end recruitment management",
    ],
    image: "/images/rpo.jpg",
  },
  {
    id: 6,
    title: "Campus & Fresher Hiring",
    icon: GraduationCap,
    hours: "Young Talent",
    skills: "Industry Ready",
    description: [
      "Bridge young talent with industry-ready opportunities",
    ],
    image: "/images/campus-hiring.jpg",
  },
  {
    id: 7,
    title: "Hire to Train",
    icon: BookOpen,
    hours: "Skill Development",
    skills: "Customized Training",
    description: [
      "Hire candidates and equip them with tailored training programs before deployment",
    ],
    image: "/images/hire-to-train.jpg",
  },
  {
    id: 8,
    title: "Executive Search",
    icon: Search,
    hours: "Leadership Hiring",
    skills: "CXO & Senior Roles",
    description: [
      "Specialized search to identify and recruit top-level executives and leaders",
    ],
    image: "/images/executive-search.jpg",
  },
  {
    id: 9,
    title: "Bulk Hiring",
    icon: UsersRound,
    hours: "High-Volume",
    skills: "Mass Recruitment",
    description: [
      "Efficient large-scale hiring for rapid business expansion",
    ],
    image: "/images/bulk-hiring.jpg",
  },
];


export default function ServicesCards() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our <span className="text-[#1d8fff]">Services</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Tailored staffing solutions designed to meet unique organizational needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-sm shadow hover:shadow-lg overflow-hidden flex flex-col"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-60 object-cover"
                />
                {/* Small tag */}
                <div className="absolute bottom-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                  {service.hours}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                  <service.icon className="h-5 w-5 text-[#1d8fff]" />
                  <span>{service.title}</span>
                </h3>
                <ul className="space-y-2 mb-4">
                  {service.description.map((point, i) => (
                    <li key={i} className="flex items-start space-x-2 text-gray-700">
                      <span className="text-orange-500 mt-1">✔</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="mt-auto inline-block px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition text-center"
                >
                  Explore All Services →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
