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
import FAQAccordion from "../components/FAQAccordion";
import PopupForm from "../components/PopupForm";
import { FaStar } from "react-icons/fa6";
// import { SiGooglegemini } from "react-icons/si";
import { useState, useEffect } from "react";
// import { motion } from 'framer-motion';
import { SiGooglegemini } from "react-icons/si";
import {
  Award,
  TrendingUp,
  Clock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Head from "next/head";


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

const faqs = [
  {
    q: "1. What is IT recruitment and how does SkillzRevo help with it?",
    a: "IT recruitment involves sourcing, screening, and placing qualified technology professionals for various IT roles. SkillzRevo specializes in identifying top tech talent for startups, enterprises, and global IT firms through a streamlined and customized hiring process.",
  },
  {
    q: "2. What types of IT roles do you recruit for?",
    a: (
      <ul className="list-disc pl-6">
        <li>Software Developers (Frontend, Backend, Full Stack)</li>
        <li>Data Scientists & Data Analysts</li>
        <li>Cloud Engineers & DevOps Professionals</li>
        <li>Cybersecurity Experts</li>
        <li>AI & Machine Learning Engineers</li>
        <li>IT Project Managers</li>
        <li>UI/UX Designers</li>
        <li>QA/Test Engineers</li>
      </ul>
    ),
  },
  {
    q: "3. Do you provide recruitment for both permanent and contract roles?",
    a: "Yes, we offer both permanent hiring and contract staffing solutions depending on your business needs.",
  },
  {
    q: "4. How do you ensure the quality of IT candidates?",
    a: (
      <ul className="list-disc pl-6">
        <li>Technical screening and assessments</li>
        <li>Soft skills and culture fit evaluation</li>
        <li>Background verification</li>
        <li>Client-specific interview rounds</li>
      </ul>
    ),
  },
  {
    q: "5. What industries do you serve with IT recruitment?",
    a: (
      <ul className="list-disc pl-6">
        <li>Information Technology & Services</li>
        <li>BFSI (Banking, Financial Services, and Insurance)</li>
        <li>Healthcare & Pharma</li>
        <li>E-commerce & Retail</li>
        <li>EdTech, FinTech, and more</li>
      </ul>
    ),
  },
  {
    q: "6. Can you help with bulk or campus hiring for tech talent?",
    a: "Yes, SkillzRevo has strong capabilities in bulk hiring and campus recruitment for tech roles, helping organizations build future-ready teams efficiently.",
  },
  {
    q: "7. How fast can you close a position?",
    a: "Our average turnaround time varies based on the role complexity, but typically we can share screened profiles within 24 to 72 hours for most IT positions.",
  },
  {
    q: "8. Do you offer offshore or remote IT staffing services?",
    a: "Absolutely. We provide remote staffing and offshore development team solutions to help businesses scale cost-effectively and access a global talent pool.",
  },
  {
    q: "9. What is your pricing model or recruitment fee structure?",
    a: (
      <p>
        Our pricing is flexible and tailored based on the nature of the hiring
        (permanent/contract), volume, and seniority of roles. Please contact our
        sales team for a customized quote.
      </p>
    ),
  },
  {
    q: "10. How do I get started with SkillzRevo IT Recruitment?",
    a: (
      <p>
        You can simply reach out to us via the contact form, email{" "}
        <a
          href="mailto:staffing@skillzrevo.com"
          className="text-orange-500 underline"
        >
          staffing@skillzrevo.com
        </a>
        , or call us directly. Our team will schedule a consultation to
        understand your hiring needs and propose the best recruitment strategy.
      </p>
    ),
  },
];




const ITRecruitment = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.9]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 15,
        y: (e.clientY / window.innerHeight) * 15,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
    <div className="bg-white text-gray-800 ">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden py-8 md:py-16">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />

        {/* Animated Accent Orbs */}
        <motion.div
          className="absolute top-20 -right-32 w-96 h-96 bg-[#1d8fff]/5 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#ff6900]/5 rounded-full blur-3xl"
          animate={{
            x: -mousePosition.x * 0.5,
            y: -mousePosition.y * 0.5,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
        />

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center  mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-20">
          {/* Left Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1d8fff]/10 to-[#1d8fff]/5 border border-[#1d8fff]/20"
            >
              <Award className="w-4 h-4 text-[#1d8fff]" />
              <span className="text-sm font-semibold text-slate-700">
                Trusted by 500+ Companies
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-4xl lg:text-5xl xl:text-7xl font-bold "
              >
                <span className="text-slate-900">IT Recruitment</span>
                <br />
                <span className="bg-gradient-to-r from-[#1d8fff] to-[#0066cc] bg-clip-text text-transparent">
                  Redefined
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-xl lg:text-xl xl:text-2xl text-slate-600 max-w-xl"
              >
                Connect with top-tier technology talent and build
                high-performing teams that drive innovation.
              </motion.p>
            </div>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {[
                {
                  icon: TrendingUp,
                  label: "98% Success Rate",
                  color: "#1d8fff",
                },
                { icon: Clock, label: "48hr Turnaround", color: "#1d8fff" },
                {
                  icon: CheckCircle2,
                  label: "Vetted Talent",
                  color: "#ff6900",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-2 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-br ${
                      i === 2
                        ? "from-[#ff6900]/10 to-[#ff6900]/5"
                        : "from-[#1d8fff]/10 to-[#1d8fff]/5"
                    }`}
                  >
                    <item.icon
                      className="w-5 h-5"
                      style={{ color: item.color }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <PopupForm
                ctaTitle={
                  <span className="flex items-center justify-center gap-2">
                    Schedule a Consultation <ArrowRight className="w-5 h-5" />
                  </span>
                }
                pageUrl="/it-recruitment"
                className="group px-5 py-3 bg-gradient-to-r from-[#1d8fff] to-[#0066cc] text-white rounded-xl font-semibold shadow-lg shadow-[#1d8fff]/25 hover:shadow-xl hover:shadow-[#1d8fff]/40 transition-all transform hover:scale-[1.02] active:scale-[0.98] duration-200"
                service="IT Recruitment"
              />
              <PopupForm
                ctaTitle="Download Brochure"
                pageUrl="/it-recruitment"
                className="px-5 py-3 bg-gradient-to-l from-[#ff6900] to-orange-400 text-white rounded-xl font-semibold border-2 border-orange-300 hover:border-[#ff6900] hover:text-[#fff] transition-all hover:shadow-[#ff6900]/40 shadow-lg transform hover:scale-[1.02] active:scale-[0.98] duration-200"
                service="IT Recruitment"
              />
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex items-center gap-6 pt-6 border-t border-slate-200"
            >
              {/* <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white"
                />
              ))}
            </div> */}
            <div className="bg-blue-100 rounded-md p-2"><Award className="w-8 h-8 text-[#1d8fff]" /></div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Trusted by Industry Leaders
                </p>
                <p className="text-xs text-slate-500">
                  Join 500+ satisfied clients
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Decorative Background Elements */}
              <div className="absolute -inset-8 bg-gradient-to-br from-[#1d8fff]/10 via-transparent to-[#ff6900]/10 rounded-3xl blur-2xl" />

              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                {/* Image Frame */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-3">
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src="/images/it-recruitment.jpg"
                      alt="IT Recruitment Services"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Stat Cards */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 min-w-[160px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1d8fff] to-[#0066cc] flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">500+</p>
                      <p className="text-xs text-slate-500">Placements</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 min-w-[160px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff6900] to-[#e55a00] flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">48hrs</p>
                      <p className="text-xs text-slate-500">Avg. Time</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Accent Line */}
              <div className="absolute top-1/2 -right-12 w-24 h-1 bg-gradient-to-r from-[#1d8fff] to-transparent rounded-full" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
      </div>

      {/* Introduction */}
      <motion.section
        style={{ opacity: heroOpacity }}
        className="relative h-auto flex items-center  text-white overflow-hidden py-24"
      >
        {/* Background Image/Overlay (Kept for depth) */}
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600')] bg-cover bg-center absolute  z-0">
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-black/40 to-black/20 opacity-100"></div>

        <AnimatedSection className="py-20 px-4 max-w-6xl mx-auto  relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-White">
              Your Trusted IT Recruitment Partner
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed max-w-4xl mx-auto">
              In the fast-evolving technology landscape, hiring the right IT
              talent is critical to maintaining a competitive edge. SkillzRevo
              Talent specializes in end-to-end IT recruitment solutions to help
              you attract, hire, and retain exceptional technology
              professionals.
            </p>
          </div>
        </AnimatedSection>
      </motion.section>

      {/* What is IT Recruitment */}
      <div className="grid md:grid-cols-2 items-center justify-center h-full">
        <div className="bg-blue-50 p-16 flex items-center justify-center h-full">
          <div className="text-center md:text-left ">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="px-5 py-2 rounded-full border border-white/20 bg-gradient-to-br from-[#1d8fff] via-blue-500 to-[#1d8fff] text-white font-bold text-sm tracking-wide shadow-sm shadow-blue-500/30 w-fit mb-4 flex items-center justify-between gap-1"
            >
              <SiGooglegemini /> One of the Best in IT Recruitment
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl xl:text-5xl text-[#1d8fff] font-bold mb-4 ">
                What is IT Recruitment?
              </h2>
              <p className="text-lg lg:text-xl text-gray-500 mb-10 max-w-xl md:max-w-none mx-auto md:mx-0">
                IT Recruitment is the process of identifying, sourcing,
                assessing, and hiring top technology professionals to meet
                organizational requirements.
              </p>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-full"
        >
          <img
            src="/images/it-recruitment.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>



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
                <div className="text-4xl bg-blue-200 p-4 rounded-full w-fit text-[#1d8fff] mb-4">
                  {role.icon}
                </div>
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
            <PopupForm
              ctaTitle="Schedule a Consultation"
              pageUrl="/it-recruitment"
              className="px-8 py-4 bg-white !text-[#1d8fff] rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              service="IT Recruitment"
            />

            <PopupForm
              ctaTitle="Download Brochure"
              pageUrl="/it-recruitment"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#1d8fff] transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
              service="IT Recruitment"
            />
          </div>
        </div>
      </AnimatedSection>
      <FAQAccordion faqs={faqs} />
    </div>
  );
};

export default ITRecruitment;
