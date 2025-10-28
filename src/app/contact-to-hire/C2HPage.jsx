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
  FaBolt,
  FaBriefcase,
  FaHourglassHalf,
  FaProjectDiagram,
  FaExchangeAlt,
  FaGlobe,
  FaFilter,
} from "react-icons/fa";
import FAQAccordion from "../components/FAQAccordion";
import PopupForm from "../components/PopupForm";
import {
  Award,
  ArrowRight,
  TrendingUp,
  Clock,
  CheckCircle2,
  Users,
  Briefcase, // New icon for Contract-to-Hire theme
} from "lucide-react";
import { SiGooglegemini } from "react-icons/si";

// Mock implementation for external components/hooks (Replace with your actual imports)
const useMousePosition = () => ({ x: 0, y: 0 });

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

// SEO Additions - FAQ Section for C2H
const faqs = [
  {
    q: "1. What is Contact-to-Hire (C2H)?",
    a: "C2H is a staffing model where candidates work on a contract basis for a specific period before being considered for full-time employment.",
  },
  {
    q: "2. How is C2H different from permanent hiring?",
    a: "C2H allows you to assess a candidate’s fit in real project environments before extending a permanent offer, minimizing hiring risks.",
  },
  {
    q: "3. What are the benefits of using C2H staffing?",
    a: "It offers flexibility, faster hiring, reduced risk, and a cost-effective path to building full-time teams.",
  },
  {
    q: "4. What roles can be hired through C2H?",
    a: "From IT developers and analysts to business and support staff — SkillzRevo Talent provides C2H solutions across multiple domains.",
  },
  {
    q: "5. How long is the typical contract period?",
    a: "Contract durations generally range from 3 to 12 months, customizable based on your business needs.",
  },
  {
    q: "6. Who manages payroll and compliance during the contract period?",
    a: "SkillzRevo Talent handles payroll, HR compliance, and administration, ensuring a seamless experience for both clients and candidates.",
  },
  {
    q: "7. Can I convert a C2H candidate to full-time earlier than planned?",
    a: "Yes. You can convert high-performing candidates at any time based on mutual agreement.",
  },
];

// Section 3 – Key Highlights
const highlights = [
  {
    icon: <FaHourglassHalf />,
    title: "Flexible Hiring Durations",
    description: "Contract periods from 3 to 12 months, tailored to your project needs.",
  },
  {
    icon: <FaSearch />,
    title: "Evaluate Before You Hire",
    description: "Assess real-world performance and cultural fit before making a permanent offer.",
  },
  {
    icon: <FaUsers />,
    title: "Curated Candidate Pool",
    description: "Access our pre-vetted professionals ready for deployment across every domain.",
  },
  {
    icon: <FaHandshake />,
    title: "End-to-End Staffing Management",
    description: "We handle everything from sourcing and screening to compliance and payroll.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Zero Hiring Risk",
    description: "Gain full flexibility to onboard and retain only the highest-performing talent.",
  },
  {
    icon: <FaRocket />,
    title: "Faster Onboarding",
    description: "Achieve quick mobilization of skilled, ready-to-deploy professionals.",
  },
];

// Section 4 – How It Works (Workflow)
const processSteps = [
  {
    icon: FaClipboardCheck,
    title: "1. Requirement Gathering",
    description: "We work with you to understand roles, required duration, and essential skill levels.",
  },
  {
    icon: FaFilter,
    title: "2. Candidate Shortlisting",
    description: "We present you with a list of pre-screened and verified professionals from our talent pool.",
  },
  {
    icon: FaBriefcase,
    title: "3. Contractual Onboarding",
    description: "Selected talent is deployed under the SkillzRevo Talent payroll, ready to start work.",
  },
  {
    icon: FaChartLine,
    title: "4. Performance Evaluation",
    description: "You conduct an on-the-job assessment of the candidate during the contract period.",
  },
  {
    icon: FaExchangeAlt,
    title: "5. Conversion to Full-Time",
    description: "You have the option to seamlessly absorb top performers into your permanent team.",
  },
];

// Section 5 – Engagement Models
const engagementModels = [
  {
    icon: <FaClock className="text-4xl" />,
    title: "Short-Term C2H",
    description: "Ideal for 3–6 month projects or fulfilling temporary workforce requirements.",
  },
  {
    icon: <FaCalendarAlt className="text-4xl" />,
    title: "Long-Term C2H",
    description: "Designed for roles that are expected to lead to permanent hiring after an evaluation period.",
  },
  {
    icon: <FaProjectDiagram className="text-4xl" />,
    title: "Project-Based C2H",
    description: "Perfect for specific client deliverables, pilot projects, or new initiatives.",
  },
  {
    icon: <FaUsers className="text-4xl" />,
    title: "Dedicated Team C2H",
    description: "Build out entire teams for a project under a flexible C2H engagement model.",
  },
];

// Section 6 – Why Choose SkillzRevo Talent Data
const whyChooseDifferentiators = [
  { icon: <FaBrain />, text: "AI-Driven Screening" },
  { icon: <FaGlobe />, text: "Pan-India Network" },
  { icon: <FaGraduationCap />, text: "SkillzRevo Academy-trained Talent" },
  { icon: <FaShieldAlt />, text: "Compliance & Payroll Management" },
  { icon: <FaHeadset />, text: "Dedicated Account Managers" },
  { icon: <FaExchangeAlt />, text: "Option to Convert Anytime" },
];

const whyChooseBenefits = [
    { icon: <FaRocket />, text: "Faster candidate selection" },
    { icon: <FaUsers />, text: "Wider access to skilled professionals" },
    { icon: <FaCheckCircle />, text: "Pre-assessed, upskilled resources" },
    { icon: <FaHandshake />, text: "Hassle-free staffing process" },
    { icon: <FaProjectDiagram />, text: "Streamlined coordination" },
    { icon: <FaShieldAlt />, text: "Risk-free permanent hiring" },
];


// Section 7 – Roles We Provide under C2H
const highValueRoles = [
  {
    category: "Technology & Engineering",
    icon: <FaCode />,
    positions: [
      "Software Developers",
      "QA Engineers",
      "Cloud & DevOps Specialists",
      "Data Analysts",
      "AI/ML Engineers",
    ],
  },
  {
    category: "Business & Operations",
    icon: <FaBriefcase />,
    positions: [
      "Business Analysts",
      "HR & Recruitment Executives",
      "Operations Associates",
      "Inside Sales Professionals",
      "Marketing Executives",
    ],
  },
];

// Section 8 – Industries We Serve
const industries = [
  { name: "IT & Software", icon: <FaCode /> },
  { name: "BFSI", icon: <FaBuilding /> },
  { name: "E-commerce", icon: <FaShoppingCart /> },
  { name: "Telecom", icon: <FaHeadset /> },
  { name: "Healthcare", icon: <FaHospital /> },
  { name: "Manufacturing", icon: <FaIndustry /> },
  { name: "EdTech", icon: <FaGraduationCap /> },
  { name: "Analytics & Consulting", icon: <FaChartLine /> },
];

// Section 9 – Business Benefits
const benefits = [
  {
    icon: <FaShieldAlt />,
    title: "Reduced Hiring Risks",
    description: "Make informed decisions and convert only proven, high-performing talent.",
  },
  {
    icon: <FaChartLine />,
    title: "Lower Recruitment Costs",
    description: "Optimize your budget by paying only during the contract evaluation period.",
  },
  {
    icon: <FaRocket />,
    title: "Faster Workforce Deployment",
    description: "Onboard skilled professionals within days, not weeks, to meet project deadlines.",
  },
  {
    icon: <FaBolt />,
    title: "Operational Agility",
    description: "Easily scale your teams up or down in response to changing business demands.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Higher Retention Rates",
    description: "Ensure a smooth transition and better fit, leading to greater employee loyalty.",
  },
];

const C2HPage = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.9]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const mousePosition = useMousePosition();

  const c2hKeyBenefits = [
    {
      icon: CheckCircle2,
      label: "Validate Skill & Fit",
      color: "#1d8fff",
    },
    { icon: TrendingUp, label: "90% Conversion Success", color: "#1d8fff" },
    {
      icon: Briefcase,
      label: "Minimize Hiring Risk",
      color: "#ff6900",
    },
  ];

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* Hero Section (Header) */}
      <div className="relative bg-white overflow-hidden py-8 md:py-16">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />

        {/* Animated Accent Orbs (Code 1 Feature) */}
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

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center  mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-20">
          {/* Left Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {/* Trust Badge (Code 1 Feature) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1d8fff]/10 to-[#1d8fff]/5 border border-[#1d8fff]/20"
            >
              <Award className="w-4 h-4 text-[#1d8fff]" />
              <span className="text-sm font-semibold text-slate-700">
                Risk-Free Talent Evaluation
              </span>
            </motion.div>

            {/* Main Heading (New Content) */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-4xl lg:text-5xl xl:text-7xl font-bold "
              >
                <span className="text-slate-900">Contact-to-Hire</span>
                <br />
                <span className="bg-gradient-to-r from-[#1d8fff] to-[#0066cc] bg-clip-text text-transparent">
                  Hire Smart. Convert with Confidence.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-xl lg:text-xl xl:text-2xl text-slate-600 max-w-xl"
              >
                Experience the flexibility of contract staffing with the option to onboard top talent permanently — powered by SkillzRevo Talent.
              </motion.p>
            </div>

            {/* Key Benefits (Code 1 Design + Custom C2H Stats) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {c2hKeyBenefits.map((item, i) => (
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

            {/* CTA Buttons (Code 1 Design + New Page URL/Service) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <PopupForm
                ctaTitle={
                  <span className="flex items-center justify-center gap-2">
                    Get Started <ArrowRight className="w-5 h-5" />
                  </span>
                }
                pageUrl="/contact-to-hire"
                className="group px-5 py-3 bg-gradient-to-r from-[#1d8fff] to-[#0066cc] text-white rounded-xl font-semibold shadow-lg shadow-[#1d8fff]/25 hover:shadow-xl hover:shadow-[#1d8fff]/40 transition-all transform hover:scale-[1.02] active:scale-[0.98] duration-200"
                service="Contact to Hire"
              />
              <PopupForm
                ctaTitle="Download Brochure"
                pageUrl="/contact-to-hire"
                className="px-5 py-3 bg-gradient-to-l from-[#ff6900] to-orange-400 text-white rounded-xl font-semibold border-2 border-orange-300 hover:border-[#ff6900] hover:text-[#fff] transition-all hover:shadow-[#ff6900]/40 shadow-lg transform hover:scale-[1.02] active:scale-[0.98] duration-200"
                service="Contact to Hire"
              />
            </motion.div>

            {/* Trust Indicators (Code 1 Feature) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex items-center gap-6 pt-6 border-t border-slate-200"
            >
              <div className="bg-blue-100 rounded-md p-2">
                <Briefcase className="w-8 h-8 text-[#1d8fff]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Try Before You Commit
                </p>
                <p className="text-xs text-slate-500">
                  Convert the best performers to permanent staff
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image Section (Code 1 Design) */}
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
                {/* Image Frame (Updated Image) */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-3">
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600" // Updated image: professional agreement/handshake/contract
                      alt="Contact to Hire Process"
                      className="w-full h-full object-cover aspect-video"
                    />
                  </div>
                </div>

                {/* Floating Stat Cards (Code 1 Design + Custom C2H Stats) */}
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
                      <p className="text-2xl font-bold text-slate-900">90%</p>
                      <p className="text-xs text-slate-500">Conversion Success</p>
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
                      <p className="text-2xl font-bold text-slate-900">1/3</p>
                      <p className="text-xs text-slate-500">Reduction in Time-to-Hire</p>
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

      {/* ========== SECTION 2: INTRODUCTION (Code 1 Design + New Content) ========== */}
      <motion.section
        style={{ opacity: heroOpacity }}
        className="relative h-auto flex items-center text-white overflow-hidden py-24"
      >
        {/* Background Image/Overlay (Code 1 Feature) */}
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600')] bg-cover bg-center absolute z-0"></div> {/* Using a general professional background image */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-black/40 to-black/20 opacity-100"></div>

        <AnimatedSection className="py-20 px-4 max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-White">
              {/* New Content */}
              Flexibility Meets Quality in Modern Hiring
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed max-w-4xl mx-auto">
              {/* New Content */}
              In a rapidly changing business landscape, organizations seek flexibility without compromising on talent quality. The **Contact-to-Hire (C2H)** model offers the perfect balance — giving employers the opportunity to evaluate professionals in real-world settings before making a full-time commitment.
            </p>
            <p className="text-xl text-gray-200 mt-4 max-w-4xl mx-auto">
              {/* New Content */}
              SkillzRevo Talent’s **C2H solutions** bridge the gap between contract staffing and permanent recruitment. We source, screen, and onboard skilled professionals who can be seamlessly absorbed into your team based on performance and project needs.
            </p>
          </div>
        </AnimatedSection>
      </motion.section>

      {/* ========== SECTION 3: WHAT IS CONTACT-TO-HIRE (C2H)? (Code 1 Design + New Content) ========== */}
      <div className="grid md:grid-cols-2 items-center justify-center h-full">
        <div className="bg-blue-50 p-16 flex items-center justify-center h-full order-1 md:order-1">
          <div className="text-center md:text-left ">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="px-5 py-2 rounded-full border border-white/20 bg-gradient-to-br from-[#1d8fff] via-blue-500 to-[#1d8fff] text-white font-bold text-sm tracking-wide shadow-sm shadow-blue-500/30 w-fit mb-4 flex items-center justify-between gap-1"
            >
              <SiGooglegemini /> Evaluate Before You Commit
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl xl:text-5xl text-[#1d8fff] font-bold mb-4 ">
                {/* New Content */}
                The C2H Advantage
              </h2>
              <p className="text-lg lg:text-xl text-gray-500 mb-4 max-w-xl md:max-w-none mx-auto md:mx-0">
                {/* New Content */}
                **Contact-to-Hire (C2H)** is a hybrid staffing model that combines the agility of temporary staffing with the assurance of long-term hiring success.
              </p>
              <p className="text-lg lg:text-xl text-gray-500 mb-10 max-w-xl md:max-w-none mx-auto md:mx-0 border-l-4 border-[#ff6900] pl-4">
                {/* New Content */}
                It allows organizations to engage professionals on a contract, evaluate their skills and culture fit, and then convert them to permanent roles. This approach reduces hiring risks and speeds up project execution.
              </p>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-full order-2 md:order-2"
        >
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600" // Updated image: a visual representing a process or hybrid solution
            alt="Contract to Hire process"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>

      {/* Section 3 – Key Highlights */}
      <AnimatedSection className="py-20 px-4 md:px-10 max-w-8xl mx-auto bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Our C2H Program Highlights
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#1d8fff] flex flex-col items-center text-center h-full"
            >
              <div className="text-5xl text-[#1d8fff] bg-blue-100 rounded-full p-4 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Section 4 – How It Works (Workflow) - IMPROVED DESIGN */}
      <AnimatedSection className="py-20 bg-gradient-to-tl from-orange-400 via-orange-600 to-orange-400">
        <div className="container mx-auto flex flex-col md:items-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold md:text-center text-white mb-10">
            Our C2H Process Workflow
          </h2>

          {/* Timeline / Flow */}
          <div className="relative flex flex-col items-center mb-10 transform skew-y-[-5deg]">
            {/* horizontal line (for desktop) */}
            <div className="absolute top-1/6 left-0 right-0 h-1 bg-orange-200 hidden md:block z-8"></div>

            <div className="md:grid md:grid-cols-5 md:gap-4 w-full z-10">
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
                  {index < processSteps.length - 1 && (
                    <div className="absolute bottom-0 h-full w-1 bg-blue-200 left-6 md:hidden"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Section 5 – Engagement Models */}
      <AnimatedSection className="py-20 px-4 md:px-10 max-w-8xl mx-auto bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Flexible C2H Engagement Models
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagementModels.map((model, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 p-6 rounded-xl shadow-lg border-l-4 border-[#ff6900] flex flex-col items-start h-full"
            >
              <div className="text-[#ff6900] bg-orange-100 p-3 rounded-full w-fit mb-4">
                {model.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {model.title}
              </h3>
              <p className="text-gray-700">{model.description}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Section 6 – Why Choose SkillzRevo Talent? - IMPROVED DESIGN */}
      <AnimatedSection className="py-20 px-4 bg-[#1d8fff] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Why Partner with SkillzRevo Talent?
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start bg-blue-800/20 p-8 rounded-lg">
            {/* Differentiators Column */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4 border-b-2 border-orange-400 pb-2">Our Differentiators</h3>
              {whyChooseDifferentiators.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="text-xl flex-shrink-0 text-orange-400">{item.icon}</div>
                  <p className="text-lg">{item.text}</p>
                </div>
              ))}
            </div>
            {/* Business Benefits Column */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4 border-b-2 border-orange-400 pb-2">Your Business Benefits</h3>
              {whyChooseBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="text-xl flex-shrink-0 text-orange-400">{benefit.icon}</div>
                  <p className="text-lg">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Section 7 – Roles We Provide under C2H */}
      <AnimatedSection className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Roles We Staff Under C2H
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {highValueRoles.map((role, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-lg border-l-4 border-[#ff6900]">
                <div className="text-4xl bg-orange-100 p-4 rounded-full w-fit text-[#ff6900] mb-4">{role.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {role.category}
                </h3>
                <ul className="space-y-2">
                  {role.positions.map((position, i) => (
                    <li key={i} className="text-gray-700 flex items-start gap-2">
                      <span className="text-[#1d8fff] mt-1">•</span>
                      {position}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Section 8 – Industries We Serve */}
      <AnimatedSection className="py-20 px-4 bg-[#ff6900] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white/10 p-6 rounded-xl text-center flex flex-col items-center justify-center shadow-lg"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <p className="font-semibold">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Section 9 – Business Benefits */}
      <AnimatedSection className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900">
            Measurable Business Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center h-full"
              >
                <div className="text-4xl text-[#1d8fff] mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-md text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Section 10 – Call to Action (CTA) */}
      <AnimatedSection className="py-20 px-4 bg-gradient-to-r from-[#1d8fff] to-[#0062cc] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Build Agile, Risk-Free Teams with SkillzRevo Talent
          </h2>
          <p className="text-xl mb-10">
            Hire top talent on a contract-to-hire basis and convert your best performers into full-time assets with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <PopupForm
              ctaTitle="Schedule a Call"
              pageUrl="/contact-to-hire"
              className="px-8 py-4 bg-white !text-[#1d8fff] rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              service="Contact to Hire"
            />
            <PopupForm
              ctaTitle="Download Brochure"
              pageUrl="/contact-to-hire"
              className="px-8 py-4 bg-[#ff6900] !text-[#fff] rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              service="Contact to Hire"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <FAQAccordion faqs={faqs} />
    </div>
  );
};

export default C2HPage;