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
  FaThList, // Centralized Vendor Management
  FaEye, // Transparent Operations
  FaGavel, // Compliance & Governance
  FaTasks, // Performance Tracking & Analytics
  FaComments, // Multi-Vendor Coordination
  FaCompressArrowsAlt, // Scalable Model
  FaClipboardList, // Assessment & Audit
  FaUserPlus, // Vendor Onboarding
  FaFileContract, // Contract & SLA
  FaMoneyCheckAlt, // Consolidated Invoicing
  FaExclamationTriangle, // Vendor Risk Assessment
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
  Briefcase,
  Layers, // Icon for Vendor Management/Structure
  PackageCheck, // Icon for Compliance
  FileSearch, // Icon for Transparency
  ArrowDown,
  UserPlus,
  Gavel,
  CheckCircle,
  ClipboardList,
  BarChart3,
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

// Section 10 - FAQs (Updated Content)
const faqs = [
  {
    q: "1. What is Vendor Management in staffing?",
    a: "Vendor Management is the process of managing multiple staffing vendors to ensure **optimal quality, cost efficiency, and compliance** through centralized governance and performance monitoring.",
  },
  {
    q: "2. How does SkillzRevo’s Vendor Management Service work?",
    a: "We provide an end-to-end service, managing **vendor onboarding, performance tracking, compliance audits, and consolidated reporting** to simplify your external workforce operations.",
  },
  {
    q: "3. What are the key benefits of Vendor Management Solutions?",
    a: "The main benefits include **improved transparency, cost control, compliance assurance, and streamlined communication** across your entire vendor ecosystem.",
  },
  {
    q: "4. Does SkillzRevo use technology for Vendor Management?",
    a: "Yes. We implement **analytics-driven tools and dashboards** to track vendor performance, Service Level Agreements (SLAs), and compliance in real-time, enabling data-driven decisions.",
  },
  {
    q: "5. Which industries can benefit from Vendor Management Services?",
    a: (
      <p>
        Enterprises in **IT & ITES, BFSI, Manufacturing, Telecom, Healthcare,
        and Consulting** sectors significantly benefit from structured vendor management.
      </p>
    ),
  },
  {
    q: "6. Can the Vendor Management model be customized?",
    a: "Absolutely. SkillzRevo Talent tailors solutions based on your **scale, number of vendors, geographical presence, and internal procurement processes** to ensure a perfect fit.",
  },
];


const VendorManagementPage = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.9]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  // Section 3 – Key Highlights (Updated Content)
  const keyHighlights = [
    {
      title: "Centralized Vendor Management",
      description: "One platform to manage all staffing partners.",
      icon: <FaThList className="text-4xl" />,
    },
    {
      title: "Transparent Operations",
      description: "Real-time visibility into vendor performance & workforce data.",
      icon: <FaEye className="text-4xl" />,
    },
    {
      title: "End-to-End Compliance",
      description: "Ensure adherence to legal and policy standards.",
      icon: <FaGavel className="text-4xl" />,
    },
    {
      title: "Performance Tracking & Analytics",
      description: "Data-driven insights for smarter vendor decisions.",
      icon: <FaChartLine className="text-4xl" />,
    },
    {
      title: "Multi-Vendor Coordination",
      description: "Streamlined communication and governance across suppliers.",
      icon: <FaComments className="text-4xl" />,
    },
    {
      title: "Scalable Model",
      description: "Suitable for enterprises with local or global vendor ecosystems.",
      icon: <FaCompressArrowsAlt className="text-4xl" />,
    },
  ];

  // Section 6 – Why Partner with SkillzRevo Talent? (Differentiators/Business Benefits)
  const differentiators = [
    {
      differentiator: "Centralized Vendor Platform",
      benefit: "Simplified multi-vendor management",
      icon: FaDatabase,
    },
    {
      differentiator: "Transparent Processes",
      benefit: "Improved vendor accountability",
      icon: FaEye,
    },
    {
      differentiator: "AI-Driven Analytics",
      benefit: "Smarter decision-making",
      icon: FaBrain,
    },
    {
      differentiator: "End-to-End Compliance",
      benefit: "Reduced legal & operational risk",
      icon: FaShieldAlt,
    },
    {
      differentiator: "Experienced Staffing Experts",
      benefit: "Higher vendor performance standards",
      icon: FaBriefcase,
    },
    {
      differentiator: "Scalable & Customizable Model",
      benefit: "Suitable for enterprises of all sizes",
      icon: FaRocket,
    },
  ];

  // Section 4 – How It Works (Process Workflow)
  const processSteps = [
    {
      title: "1. Assessment & Audit",
      description: "Understand your current vendor landscape, contracts, and gaps.",
      icon: FaClipboardList,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "2. Vendor Onboarding",
      description: "Centralized documentation, validation, and system integration.",
      icon: FaUserPlus,
      color: "from-orange-500 to-orange-700",
    },
    {
      title: "3. Performance Management",
      description: "Define SLAs, KPIs, and track delivery quality.",
      icon: FaTasks,
      color: "from-green-500 to-green-700",
    },
    {
      title: "4. Compliance & Governance",
      description: "Payroll, statutory, and policy adherence monitoring.",
      icon: FaGavel,
      color: "from-red-500 to-red-700",
    },
    {
      title: "5. Continuous Optimization",
      description: "Regular reviews, feedback, and vendor scorecards.",
      icon: FaChartLine,
      color: "from-purple-500 to-purple-700",
    },
  ];

  // Section 5 – Engagement Models (Updated Content/Structure reused from 'Solutions')
  const engagementModels = [
    {
      title: "Full-Service VMS Outsourcing",
      description: "SkillzRevo manages all vendor relationships end-to-end.",
      icon: <FaUsers className="text-4xl" />,
      color: "border-[#1d8fff]",
    },
    {
      title: "Hybrid Model",
      description: "Shared governance between your internal HR/Procurement teams and SkillzRevo.",
      icon: <FaExchangeAlt className="text-4xl" />,
      color: "border-[#fd511f]",
    },
    {
      title: "VMS Consulting",
      description: "Advisory support to optimize your existing vendor operations.",
      icon: <FaHeadset className="text-4xl" />,
      color: "border-green-500",
    },
    {
      title: "Technology-Enabled VMS",
      description: "Implementation of a vendor management system with analytics dashboards and automation.",
      icon: <FaCode className="text-4xl" />,
      color: "border-yellow-500",
    },
  ];

  // Section 7 – Services Covered under Vendor Management
  const servicesCovered = [
    { title: "Vendor Onboarding & Due Diligence", icon: FaUserPlus },
    { title: "Contract & SLA Management", icon: FaFileContract },
    { title: "Compliance Audits (Statutory & Policy)", icon: FaShieldAlt },
    { title: "Performance Evaluation & Rating", icon: FaChartLine },
    { title: "Consolidated Invoicing & Reporting", icon: FaMoneyCheckAlt },
    { title: "Multi-Vendor Coordination & Communication", icon: FaComments },
    { title: "Vendor Risk Assessment", icon: FaExclamationTriangle },
    { title: "Workforce Analytics & Insights", icon: FaDatabase },
  ];

  // Section 8 – Industries We Serve
  const industries = [
    { name: "IT & ITES", icon: <FaCode /> },
    { name: "BFSI & FinTech", icon: <FaBuilding /> },
    { name: "Healthcare", icon: <FaHospital /> },
    { name: "Manufacturing", icon: <FaIndustry /> },
    { name: "Telecom", icon: <FaCloud /> },
    { name: "Retail & E-Commerce", icon: <FaShoppingCart /> },
    { name: "Consulting", icon: <FaBrain /> },
    { name: "Energy & Infrastructure", icon: <FaBolt /> },
  ];

  // Section 9 – Business Benefits
  const businessBenefits = [
    { title: "Streamlined Operations", description: "Manage multiple vendors from a single, unified platform.", icon: FaProjectDiagram },
    { title: "Cost Efficiency", description: "Reduce redundant vendors and optimize billing accuracy.", icon: FaMoneyCheckAlt },
    { title: "Data-Driven Decisions", description: "Evaluate vendor performance with real metrics.", icon: FaDatabase },
    { title: "Compliance Assurance", description: "Ensure every vendor follows legal and policy norms.", icon: FaGavel },
    { title: "Enhanced Vendor Relationships", description: "Build long-term, performance-based partnerships.", icon: FaHandshake },
  ];

  const mousePosition = useMousePosition();
  const vmsKeyBenefits = [
    {
      icon: Layers,
      label: "Centralized Management",
      color: "#1d8fff",
    },
    { icon: PackageCheck, label: "100% Compliance", color: "#ff6900" },
    {
      icon: FileSearch,
      label: "Operational Transparency",
      color: "#1d8fff",
    },
  ]; 

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* Hero Section (Updated Content) */}
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
                Optimized External Workforce Ecosystem
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
                <span className="text-slate-900">Vendor Management</span>
                <br />
                <span className="bg-gradient-to-r from-[#1d8fff] to-[#0066cc] bg-clip-text text-transparent">
                  Streamline Workforce Partnerships
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-xl lg:text-xl xl:text-2xl text-slate-600 max-w-xl"
              >
                Optimize your multi-vendor ecosystem with centralized management, compliance, and performance tracking — all under one roof.
              </motion.p>
            </div>

            {/* Key Benefits (Code 1 Design + Custom VMS Stats) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {vmsKeyBenefits.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-2 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-br ${
                      i === 1
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
                pageUrl="/vendor-management-solutions"
                className="group px-5 py-3 bg-gradient-to-r from-[#1d8fff] to-[#0066cc] text-white rounded-xl font-semibold shadow-lg shadow-[#1d8fff]/25 hover:shadow-xl hover:shadow-[#1d8fff]/40 transition-all transform hover:scale-[1.02] active:scale-[0.98] duration-200"
                service="Vendor Management"
              />
              <PopupForm
                ctaTitle="Download Brochure"
                pageUrl="/vendor-management-solutions"
                className="px-5 py-3 bg-gradient-to-l from-[#ff6900] to-orange-400 text-white rounded-xl font-semibold border-2 border-orange-300 hover:border-[#ff6900] hover:text-[#fff] transition-all hover:shadow-[#ff6900]/40 shadow-lg transform hover:scale-[1.02] active:scale-[0.98] duration-200"
                service="Vendor Management"
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
                <Layers className="w-8 h-8 text-[#1d8fff]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Unified Vendor Performance Analytics
                </p>
                <p className="text-xs text-slate-500">
                  From contracts to invoices, manage everything centrally
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
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600" // Updated image: professional boardroom/vendor coordination
                      alt="Vendor Management System"
                      className="w-full h-full object-cover aspect-video"
                    />
                  </div>
                </div>

                {/* Floating Stat Cards (Code 1 Design + Custom VMS Stats) */}
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
                      <Layers className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">30%</p>
                      <p className="text-xs text-slate-500">Cost Reduction</p>
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
                      <PackageCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">99%</p>
                      <p className="text-xs text-slate-500">Invoice Accuracy</p>
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
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600')] bg-cover bg-center absolute z-0"></div> {/* Using a team collaboration background image */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-black/40 to-black/20 opacity-100"></div>

        <AnimatedSection className="py-20 px-4 max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-White">
              {/* New Content */}
              Simplify Complexity, Achieve Transparency
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed max-w-4xl mx-auto mb-4">
              {/* New Content */}
              In today’s dynamic business environment, relying on multiple staffing vendors and service providers can quickly become **complex and resource-intensive** due to compliance and performance gaps.
            </p>
            <p className="text-xl text-gray-200 mt-4 max-w-4xl mx-auto">
              {/* New Content */}
              At SkillzRevo Talent, our **Vendor Management Solutions (VMS)** provide an end-to-end service to streamline, standardize, and optimize your vendor operations for maximum efficiency and transparency.
            </p>
          </div>
        </AnimatedSection>
      </motion.section>

      {/* ========== SECTION 3: WHAT IS VENDOR MANAGEMENT? (Code 1 Design + New Content) ========== */}
      <div className="grid md:grid-cols-2 items-center justify-center h-full">
        <div className="bg-blue-50 p-16 flex items-center justify-center h-full order-1 md:order-1">
          <div className="text-center md:text-left ">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="px-5 py-2 rounded-full border border-white/20 bg-gradient-to-br from-[#1d8fff] via-blue-500 to-[#1d8fff] text-white font-bold text-sm tracking-wide shadow-sm shadow-blue-500/30 w-fit mb-4 flex items-center justify-between gap-1"
            >
              <SiGooglegemini /> Control Your External Ecosystem
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl xl:text-5xl text-[#1d8fff] font-bold mb-4 ">
                {/* New Content */}
                What is Vendor Management?
              </h2>
              <p className="text-lg lg:text-xl text-gray-500 mb-4 max-w-xl md:max-w-none mx-auto md:mx-0">
                {/* New Content */}
                **Vendor Management** is the process of systematically managing staffing and service vendors to ensure **optimal delivery, cost control, and risk mitigation** across your entire external workforce ecosystem.
              </p>
              <ul className="space-y-3 text-lg text-gray-800">
                <li className="flex items-center gap-3 text-gray-700">
                  <FaCheckCircle className="text-[#ff6900] flex-shrink-0 w-6 h-6" />{" "}
                  **A single point of contact** for multiple vendors.
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <FaCheckCircle className="text-[#ff6900] flex-shrink-0 w-6 h-6" />{" "}
                  **Transparent processes** with measurable performance.
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <FaCheckCircle className="text-[#ff6900] flex-shrink-0 w-6 h-6" />{" "}
                  **Compliance** with all statutory and organizational policies.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-full order-2 md:order-2 p-12 md:p-0 flex items-center justify-center"
        >
          {/* Flow graphic showing VMS steps (Using lucide-react icons) */}
          <div className="bg-white p-6 rounded-xl shadow-2xl border border-gray-200">
            <h3 className="text-2xl font-semibold mb-6 text-center text-[#1d8fff]">
              VMS Flow: Control & Optimization
            </h3>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg w-full justify-center">
                <FaUserPlus className="text-2xl text-[#1d8fff]" />{" "}
                <span className="font-medium text-gray-800">Vendor Onboarding & Vetting</span>
              </div>
              <FaArrowDown className="text-gray-400" />
              <div className="flex items-center gap-3 bg-red-50 p-3 rounded-lg w-full justify-center">
                <FaGavel className="text-2xl text-[#ff6900]" />{" "}
                <span className="font-medium text-gray-800">Compliance & Contract Management</span>
              </div>
              <FaArrowDown className="text-gray-400" />
              <div className="flex items-center gap-3 bg-yellow-50 p-3 rounded-lg w-full justify-center">
                <FaTasks className="text-2xl text-yellow-600" />{" "}
                <span className="font-medium text-gray-800">Performance Monitoring & Rating</span>
              </div>
              <FaArrowDown className="text-gray-400" />
              <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg w-full justify-center">
                <FaChartLine className="text-2xl text-green-600" />{" "}
                <span className="font-medium text-gray-800">Strategic Optimization & Analytics</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

       {/* Section 3 – Key Highlights (Updated Content) */}
      <AnimatedSection className="py-20 px-4 md:px-10 max-w-7xl mx-auto bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          VMS: Key Highlights
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              className="bg-gray-50 p-8 rounded-xl shadow-md border-t-4 border-[#1d8fff] flex flex-col items-start text-left"
            >
              <div className="text-[#1d8fff] bg-blue-100 p-4 rounded-full w-fit mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 flex items-center gap-2">
                {highlight.title}
              </h3>
              <p className="text-gray-700">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
      
      {/* --- */}

      {/* Section 4 – How It Works (Process Workflow) (Updated Content) */}
      <AnimatedSection className="py-20 bg-gradient-to-tr from-[#1d8fff] via-[#1d8fff] to-blue-700">
        <div className="container mx-auto flex flex-col md:items-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold md:text-center text-white mb-16">
            Our End-to-End VMS Workflow
          </h2>

          {/* 5-step visual timeline */}
          <div className="relative flex flex-col md:flex-row justify-center items-stretch md:items-start w-full max-w-6xl">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col items-center md:flex-1 relative pb-12 md:pb-0 px-4 text-center ${index < processSteps.length - 1 ? 'md:border-r md:border-dashed md:border-blue-300' : ''}`}
              >
                {/* Icon Circle */}
                <div className={`relative z-10 p-5 rounded-full text-white shadow-xl mb-4 text-center bg-gradient-to-br ${step.color} transform transition duration-500 hover:scale-105`}>
                    <step.icon className="text-3xl" />
                </div>
                {/* Step Content */}
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-blue-100 text-sm md:text-base px-2">{step.description}</p>
                </div>
                {/* Horizontal Connector (Mobile) */}
                {index < processSteps.length -1 && (
                    <div className="absolute left-1/2 bottom-0 h-10 w-1 bg-blue-300 transform -translate-x-1/2 md:hidden"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      {/* --- */}

      {/* Section 5 – Engagement Models (Updated Content/Structure reused from 'Solutions') */}
      <AnimatedSection className="py-20 px-4 md:px-10 max-w-7xl mx-auto bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Flexible Engagement Models
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagementModels.map((model, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`bg-white p-8 rounded-xl shadow-lg border-t-4 ${model.color} flex flex-col items-start text-left h-full`}
            >
              <div className="text-white bg-[#1d8fff] p-4 rounded-full w-fit mb-4 shadow-md">
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
      
      {/* --- */}

      {/* Section 6 – Why Partner with SkillzRevo Talent? (Updated Content) */}
      <AnimatedSection className="py-20 px-4 bg-[#fd511f] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            The SkillzRevo Talent Advantage
          </h2>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start gap-4 bg-white/10 p-5 rounded-lg border-l-4 border-white/50"
              >
                 <item.icon className="text-4xl mt-1 flex-shrink-0 text-white/90" />
                <div>
                    <p className="text-xl font-semibold mb-1">{item.differentiator}</p>
                    <p className="text-lg text-white/80"><span className="font-bold text-white">Benefit:</span> {item.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      {/* --- */}

      {/* Section 7 – Services Covered under Vendor Management */}
       <AnimatedSection className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Services Covered under Vendor Management
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesCovered.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl bg-blue-100 p-4 rounded-full w-fit text-[#1d8fff] mb-4">{<service.icon />}</div>
                <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      {/* --- */}

      {/* Section 8 – Industries We Serve (Updated Content) */}
      <AnimatedSection className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Industries We Serve
          </h2>
          {/* Industry icons in a grid. */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl text-center flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow border-t-2 border-[#fd511f]"
              >
                <div className="text-4xl mb-3 text-[#1d8fff]">{industry.icon}</div>
                <p className="font-semibold text-gray-800">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      {/* --- */}

      {/* Section 9 – Business Benefits (Updated Content) */}
      <AnimatedSection className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900">
            Realize Tangible Business Benefits
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {businessBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-xl flex flex-col items-center text-center border-b-4 border-[#fd511f] transform transition duration-300 hover:scale-105"
              >
                <div className="text-4xl text-white bg-[#1d8fff] p-4 rounded-full mb-4">{<benefit.icon />}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-sm text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      {/* --- */}

      {/* Section 10 – Call to Action (CTA) (Updated Content) */}
      <AnimatedSection className="py-20 px-4 bg-gradient-to-r from-[#1d8fff] to-[#fd511f] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Simplify Your Workforce Management with SkillzRevo Talent
          </h2>
          <p className="text-xl mb-10 font-light">
            Centralize, monitor, and optimize your entire vendor ecosystem for better efficiency and control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PopupForm
              ctaTitle="Get Started"
              pageUrl="/vendor-management-solutions"
              className="px-8 py-4 bg-white !text-[#1d8fff] rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              service="Vendor Management"
            />
            <PopupForm
              ctaTitle="Download Brochure"
              pageUrl="/vendor-management-solutions"
              className="px-8 py-4 bg-[#ff6900] !text-[#fff] rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              service="Vendor Management"
            />
          </div>
        </div>
      </AnimatedSection>
      <FAQAccordion faqs={faqs} />
    </div>
  );
};

// Dummy FaArrowDown to fulfill the needs for the VMS Flow graphic
const FaArrowDown = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${props.className || ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
);


export default VendorManagementPage;