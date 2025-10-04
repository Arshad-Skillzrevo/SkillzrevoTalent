"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase, Users, Building2, Globe, Workflow, GraduationCap,BookOpen, Search, UsersRound, CheckCircleIcon, ArrowRightIcon } from "lucide-react";

const services = [
  {
    id: 3,
    title: "Permanent Staffing",
    icon: Building2,
    hours: "Reliable Hiring",
    skills: "Full-Time",
    description: [
      "Reliable full-time hiring to strengthen your core team.",
      "Focus on cultural fit and long-term retention.",
      "Access to passive candidates for critical roles.",
    ],
    image: "/images/permanent-staffing.jpg",
    link: "/permanent-staffing",
  },
  {
    id: 2,
    title: "Contractual Staffing",
    icon: Users,
    hours: "Agile Workforce",
    skills: "Project Needs",
    description: [
      "Agile workforce solutions for short-term and project needs.",
      "Rapid deployment of specialized contractors.",
      "Mitigate risks and manage fluctuating resource demands.",
    ],
    image: "/images/contract-staffing.jpg",
    link: "/contract-staffing",
  },
  {
    id: 5,
    title: "Recruitment Process Outsourcing",
    icon: Workflow,
    hours: "End-to-End",
    skills: "Recruitment",
    description: [
      "End-to-end recruitment management to optimize your hiring process.",
      "Reduce costs and improve quality of hire.",
      "Scalable solutions (project-based or full RPO).",
    ],
    image: "/images/rpo.jpg",
    link: "/recruitment-process-outsourcing",
  },
  {
    id: 4,
    title: "Remote Staffing & Offshore Teams",
    icon: Globe,
    hours: "Global Teams",
    skills: "Distributed Workforce",
    description: [
      "Build global, distributed teams with ease and efficiency.",
      "Access specialized talent pools overseas (e.g., India).",
      "We handle payroll, compliance, and infrastructure setup.",
    ],
    image: "/images/remote-staffing.jpg",
    link: "/remote-staffing-offshore-teams",
  },
  {
    id: 1,
    title: "IT Recruitment",
    icon: Briefcase,
    hours: "Top Tech Talent",
    skills: "Emerging Domains",
    description: [
      "Find top tech talent across emerging and niche domains (AI, Cloud, Data).",
      "Specialized recruiters for every technology stack.",
      "Faster time-to-hire for critical tech positions.",
    ],
    image: "/images/it-recruitment.jpg",
    link: "/it-recruitment",
  },
  {
    id: 6,
    title: "Campus & Fresher Hiring",
    icon: GraduationCap,
    hours: "Young Talent",
    skills: "Industry Ready",
    description: [
      "Access industry-ready young talent from top colleges across India.",
      "End-to-end management of campus recruitment drives.",
      "Build a pipeline for your future workforce.",
    ],
    image: "/images/campus-hiring.jpg",
    link: "/campus-fresher-hiring",
  },
  {
    id: 8,
    title: "Leadership/Executive Search",
    icon: Search,
    hours: "Leadership Hiring",
    skills: "CXO & Senior Roles",
    description: [
      "Specialized search to identify and recruit top-level executives and CXO leaders.",
      "Confidential, retained search approach.",
      "Focus on strategic and cultural alignment for senior roles.",
    ],
    image: "/images/executive-search.jpg",
    link: "/executive-search",
  },
  {
    id: 9,
    title: "Bulk Hiring",
    icon: UsersRound,
    hours: "High-Volume",
    skills: "Mass Recruitment",
    description: [
      "Efficient large-scale hiring for rapid business expansion or new projects.",
      "Proven processes for mass recruitment and assessment centers.",
      "Fast turnaround time for high-volume needs.",
    ],
    image: "/images/bulk-hiring.jpg",
    link: "/bulk-hiring",
  },
  {
    id: 7,
    title: "Hire to Train Models",
    icon: BookOpen,
    hours: "Skill Development",
    skills: "Customized Training",
    description: [
      "Hire candidates and equip them with **tailored training programs** before deployment.",
      "Guaranteed project-ready resources from Day 1.",
      "Reduce internal training costs and early attrition.",
    ],
    image: "/images/hire-to-train.jpg",
    link: "/train-to-hire",
  },
];

export default function ServicesCards() {
  return (
 

 <section className="bg-slate-50 font-sans">
      <div className="container mx-auto px-6 py-24 sm:py-32 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Professional <span className="text-blue-600">Services</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide tailored staffing solutions designed to meet your unique organizational needs and drive success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            // This would be your <motion.div> component
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out flex flex-col overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  {service.hours}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <service.icon className="h-6 w-6 mr-3 text-blue-600" />
                  {service.title}
                </h3>
                <ul className="space-y-1 mb-6 text-gray-600 flex-grow">
                  {service.description.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={service.link}
                  className="mt-auto inline-flex items-center justify-center px-6 py-3 bg-[#1d8fff] text-white font-semibold rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300 group"
                >
                  Learn More
                  <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}
