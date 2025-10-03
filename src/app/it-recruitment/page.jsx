"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaCode,
  FaCloud,
  FaBrain,
  FaShieldAlt,
  FaDatabase,
  FaCheckCircle,
  FaRocket,
  FaUsers,
  FaChartLine,
  FaClock,
  FaDownload,
  FaCalendarAlt,
  FaSearch,
  FaClipboardCheck,
  FaHandshake,
  FaHeadset,
  FaBuilding,
  FaHospital,
  FaShoppingCart,
  FaGraduationCap,
  FaIndustry,
} from "react-icons/fa";

const AnimatedSection = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ITRecruitmentPage = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.9]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  const solutions = [
    {
      title: "Permanent IT Staffing",
      description:
        "Full-time technology professionals on your payroll. Ideal for strategic and leadership roles.",
      icon: <FaUsers className="text-4xl" />,
    },
    {
      title: "Contract & Project-Based IT Staffing",
      description:
        "Specialists for short-term projects or assignments. Flexible scaling as per project needs.",
      icon: <FaClock className="text-4xl" />,
    },
    {
      title: "Remote & Offshore IT Teams",
      description:
        "Dedicated tech teams in India for global clients. Reduce costs up to 60%.",
      icon: <FaCloud className="text-4xl" />,
    },
    {
      title: "IT Executive Search",
      description:
        "Identify and hire C-level & senior leadership roles in technology.",
      icon: <FaChartLine className="text-4xl" />,
    },
    {
      title: "Recruitment Process Outsourcing (RPO) for IT",
      description:
        "End-to-end IT recruitment function management. Ideal for large-scale IT hiring.",
      icon: <FaRocket className="text-4xl" />,
    },
  ];

  const differentiators = [
    "Access to pre-screened IT talent from our exclusive database",
    "Specialized recruiters with deep domain knowledge",
    "AI-driven talent sourcing for speed & accuracy",
    "Faster time-to-hire — deploy IT talent in days, not weeks",
    "Hiring expertise across legacy, emerging, and niche technologies",
    "Employer branding support to attract premium candidates",
    "Cost-effective hiring without compromising quality",
  ];

  const processSteps = [
    {
      title: "Requirement Analysis",
      description: "Understand technology stack, job roles, skill needs.",
      icon: FaSearch,
    },
    {
      title: "Talent Sourcing",
      description:
        "AI-powered sourcing, job portals, referrals, and proprietary database.",
      icon: FaDatabase,
    },
    {
      title: "Screening & Assessments",
      description:
        "Resume screening, technical tests, coding challenges, and cultural-fit assessments.",
      icon: FaClipboardCheck,
    },
    {
      title: "Interview Coordination",
      description: "Scheduling, candidate preparation, feedback management.",
      icon: FaCalendarAlt,
    },
    {
      title: "Offer Management",
      description: "Salary negotiation, offer rollouts, joining formalities.",
      icon: FaHandshake,
    },
    {
      title: "Post-Hiring Support",
      description: "Ongoing engagement for seamless integration.",
      icon: FaHeadset,
    },
  ];

  const roles = [
    {
      category: "Software Development & Engineering",
      icon: <FaCode />,
      positions: [
        "Full Stack Developers",
        "Frontend & Backend Engineers",
        "Mobile App Developers",
      ],
    },
    {
      category: "Cloud, DevOps & Infrastructure",
      icon: <FaCloud />,
      positions: [
        "Cloud Engineers (AWS, Azure, GCP)",
        "DevOps Specialists",
        "Network Administrators",
      ],
    },
    {
      category: "Data, AI & Emerging Technologies",
      icon: <FaBrain />,
      positions: [
        "Data Scientists",
        "AI/ML Engineers",
        "Generative AI Experts",
      ],
    },
    {
      category: "Cybersecurity & IT Governance",
      icon: <FaShieldAlt />,
      positions: ["Security Analysts", "Ethical Hackers", "SOC Engineers"],
    },
  ];

  const industries = [
    { name: "IT & Software", icon: <FaCode /> },
    { name: "BFSI", icon: <FaBuilding /> },
    { name: "Healthcare", icon: <FaHospital /> },
    { name: "E-commerce", icon: <FaShoppingCart /> },
    { name: "EdTech", icon: <FaGraduationCap /> },
    { name: "Manufacturing", icon: <FaIndustry /> },
  ];

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative h-full py-16 md:py-48 flex items-center justify-center bg-[#1d8fff] text-white"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            IT Recruitment Services to Build High-Performing Tech Teams
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto"
          >
            Hire top IT talent faster, smarter, and cost-effectively.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#1d8fff] rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#1d8fff] transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
              <FaDownload /> Download Brochure
            </button>
          </div>
        </div>
      </motion.section>

      {/* Introduction */}
      <AnimatedSection className="py-20 px-4 max-w-6xl mx-auto bg-white">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Your Trusted IT Recruitment Partner
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            In the fast-evolving technology landscape, hiring the right IT
            talent is critical to maintaining a competitive edge. SkillzRevo
            Talent specializes in end-to-end IT recruitment solutions to help
            you attract, hire, and retain exceptional technology professionals.
          </p>
        </div>
      </AnimatedSection>

      {/* What is IT Recruitment */}
      <AnimatedSection className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              What is IT Recruitment?
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              IT Recruitment is the process of identifying, sourcing, assessing,
              and hiring top technology professionals to meet organizational
              requirements.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600"
              alt="IT Recruitment"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Solutions */}
      <AnimatedSection className="py-20 px-4 md:px-10 max-w-8xl mx-auto bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Our IT Recruitment Solutions
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#ff6900] flex flex-col items-center text-center"
            >
              <div className="text-[#ff6900] bg-orange-100 p-4 rounded-full w-fit mb-4">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {solution.title}
              </h3>
              <p className="text-gray-700">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection className="py-20 px-4 bg-[#1d8fff] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Why Choose SkillzRevo Talent?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white/20 px-4 py-6 rounded-lg"
              >
                <FaCheckCircle className="text-2xl mt-1 flex-shrink-0" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Process */}

      <AnimatedSection className="py-20 bg-gradient-to-tl from-orange-400 via-orange-600 to-orange-400">
        <div className="container  mx-auto flex flex-col md:items-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold md:text-center text-white mb-10">
            Our IT Recruitment Process
          </h2>

          {/* Timeline / Flow */}
          <div className="relative flex flex-col items-center mb-10 transform skew-y-[-5deg]">
            {/* horizontal line (for desktop) */}
            <div className="absolute top-1/6 left-0 right-0 h-1 bg-orange-200 hidden md:block z-8"></div>

            <div className="md:grid md:grid-cols-6 md:gap-4 w-full z-10">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex md:flex-col max-md:gap-2 skew-y-[5deg] items-center md:text-center relative py-8 hover:-translate-y-2 md:py-0 transition"
                >
                  <div className="relative z-10 p-4 rounded-full text-white shadow-lg mb-4 bg-gradient-to-b inset-shadow-sm inset-shadow-white from-orange-500 via-orange-600 to-orange-700">
                    <step.icon className="text-4xl" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    {step.description && (
                      <p className="text-white text-sm">{step.description}</p>
                    )}
                  </div>

                  {/* vertical line for mobile */}
                  {index < processSteps.length && (
                    <div className="absolute bottom-0 h-full w-1 bg-blue-200 left-6 md:hidden"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>



      {/* Roles */}
      <AnimatedSection className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            IT Roles We Hire
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roles.map((role, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl bg-blue-200 p-4 rounded-full w-fit text-[#1d8fff] mb-4">{role.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {role.category}
                </h3>
                <ul className="space-y-2">
                  {role.positions.map((position, i) => (
                    <li
                      key={i}
                      className="text-gray-700 flex items-start gap-2"
                    >
                      <span className="text-[#ff6900] mt-1">•</span>
                      {position}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Industries */}
      <AnimatedSection className="py-20 px-4 bg-[#ff6900] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white/10 p-6 rounded-xl text-center flex flex-col items-center shadow-lg"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <p className="font-semibold">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits */}
      <AnimatedSection className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900">
            Benefits of Partnering with SkillzRevo Talent
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Access pre-vetted, highly skilled IT professionals",
              "Hire across multiple technologies and domains",
              "Reduce hiring timelines by up to 50%",
              "Cut recruitment costs by up to 40%",
              "Build scalable remote & offshore IT teams",
              "Seamless HR, payroll & compliance support",
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4"
              >
                <FaCheckCircle className="text-3xl text-[#1d8fff] flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700 text-left">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 px-4 bg-[#ff6900] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hire Top IT Talent. Build Future-Ready Tech Teams.
          </h2>
          <p className="text-xl mb-10">
            Empower your business with the right technology professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#1d8fff] rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Schedule a Consultation
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#1d8fff] transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
              <FaDownload /> Download Brochure
            </button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ITRecruitmentPage;
