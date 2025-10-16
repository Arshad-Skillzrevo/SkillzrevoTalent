"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaCode,
  FaCloud,
  FaBrain,
  FaTag,
  FaExchangeAlt,
  FaUserGraduate,
  FaCogs,
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
  FaMoneyBillWave, // New Icon for Cost
  FaLock, // New Icon for Attrition/Commitment
  FaChalkboardTeacher, // New Icon for Trainer/Expertise
  FaUserCog, // New Icon for Talent Pool
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
  GraduationCap, // New icon added for training theme
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

// SEO Additions - FAQ Section
const faqs = [
  {
    q: "1. What is the Train-to-Hire Program?",
    a: "The Train-to-Hire Program is a comprehensive workforce development solution where SkillzRevo Talent **sources** high-potential candidates, **trains** them with a client-specific curriculum and project simulations, and then **deploys** them as certified, project-ready professionals directly into your organization.",
  },
  {
    q: "2. How does Train-to-Hire reduce hiring costs and overheads?",
    a: (
      <p>
        It significantly reduces costs by eliminating long, uncertain freshers'
        hiring cycles, minimizing internal training burden, and lowering
        early-stage **attrition**. You only invest in candidates who are already
        trained and committed to your specific roles and technology stack.
      </p>
    ),
  },
  {
    q: "3. Which roles can be trained and deployed through this program?",
    a: "We specialize in high-demand roles, including **Software Developers (Full-Stack, Java, Python)**, **Data Science & AI Associates**, **Cloud/DevOps Engineers**, **Business Analysts**, and specialized **IT & Functional Trainees** aligned with your specific business needs.",
  },
  {
    q: "4. What industries benefit most from this model?",
    a: "Any industry facing critical skill gaps and high demand for specialized entry-level talent benefits, particularly **IT & Software Development**, **BFSI**, **FinTech**, **E-commerce**, **Consulting**, and **Manufacturing**.",
  },
  {
    q: "5. What is the difference between HTD and the Train-Absorb Model?",
    a: "In **Hire-Train-Deploy (HTD)**, SkillzRevo sources and trains the candidates for you. In the **Train-Absorb Model**, you nominate or recruit the candidates, and we provide the customized training and upskilling required for their role deployment.",
  },
  {
    q: "6. How long does the training process typically take?",
    a: "The duration is customized based on the complexity of the required technology stack and roles, typically ranging from **8 to 16 weeks** of intensive, hands-on, project-based learning and certification.",
  },
];

// Section 3 – Key Highlights (Reused structure from 'Differentiators')
const highlights = [
  {
    icon: <FaTag />,
    title: "Client-Specific Training Curriculum",
    description:
      "Tailored to your exact roles, technology stack, and domain requirements.",
  },
  {
    icon: <FaUserCog />,
    title: "Pre-Screened Talent Pool",
    description:
      "High-potential candidates shortlisted using AI-driven assessments and interviews.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Industry-Aligned Trainers",
    description:
      "Training delivered by experts with 10+ years of real-world industry experience.",
  },
  {
    icon: <FaCode />,
    title: "Hands-On, Project-Based Learning",
    description:
      "Real-world simulations, live projects, and hackathons ensure practical readiness.",
  },
  {
    icon: <FaHandshake />,
    title: "Guaranteed Deployment",
    description:
      "Candidates are trained exclusively for your requirements, ensuring commitment and placement.",
  },
  {
    icon: <FaExchangeAlt />,
    title: "Flexible Engagement Models",
    description:
      "Choose from dedicated batches, bulk HTD, or the Train-Absorb model.",
  },
];

// Section 4 – How It Works (Process Workflow) (Reused structure from 'Process Steps')
const processSteps = [
  {
    title: "1. Requirement Analysis",
    description:
      "Understand hiring needs, skill matrix, tech stack, and deployment timelines.",
    icon: FaSearch,
  },
  {
    title: "2. Candidate Sourcing & Screening",
    description:
      "Pan-India outreach, AI testing, and behavior assessments for high-potential candidates.",
    icon: FaUserCog,
  },
  {
    title: "3. Customized Training",
    description:
      "Intensive technical skills, domain knowledge, soft skills, and project simulations.",
    icon: FaChalkboardTeacher,
  },
  {
    title: "4. Assessment & Certification",
    description:
      "Final certification through coding tests, project reviews, and client interviews.",
    icon: FaClipboardCheck,
  },
  {
    title: "5. Deployment & Support",
    description:
      "Smooth onboarding, contract management, and post-hiring integration support.",
    icon: FaRocket,
  },
];

// Section 5 – Engagement Models (Reused structure from 'Solutions')
const engagementModels = [
  {
    title: "Hire-Train-Deploy (HTD)",
    description:
      "We source, train, and deploy freshers tailored to your specific technical and cultural needs. Full outsourcing of the early talent pipeline.",
    icon: <FaUsers className="text-4xl" />,
  },
  {
    title: "Train-Absorb Model",
    description:
      "You nominate or recruit the candidates, and we provide the specialized, client-specific training required before you absorb them onto your payroll.",
    icon: <FaUserGraduate className="text-4xl" />,
  },
  {
    title: "Custom Corporate Batches",
    description:
      "Dedicated batches of freshers are trained exclusively for your projects, ensuring 100% alignment with your unique technical environment.",
    icon: <FaBuilding className="text-4xl" />,
  },
];

// Section 7 – Roles We Train & Deploy (Reused structure from 'Roles')
const highValueRoles = [
  {
    category: "Technology & IT Roles",
    icon: <FaCode />,
    positions: [
      "Software Developers (Full-Stack)",
      "QA & Automation Testers",
      "Data Science & AI Associates",
      "Cloud, DevOps & Cybersecurity Engineers",
    ],
  },
  {
    category: "Business & Functional Roles",
    icon: <FaBriefcase />,
    positions: [
      "Business Analysts",
      "Digital Marketing Executives",
      "HR & Operations Trainees",
      "Inside Sales & Support Associates",
    ],
  },
  {
    category: "Data & Analytics Roles",
    icon: <FaDatabase />,
    positions: [
      "BI & Reporting Specialists",
      "Data Visualization Experts",
      "Financial Analysts",
      "Risk & Compliance Trainees",
    ],
  },
  {
    category: "Engineering & Manufacturing",
    icon: <FaIndustry />,
    positions: [
      "Design & CAD Engineers",
      "Process & Quality Control Analysts",
      "Supply Chain Associates",
      "IoT Trainees",
    ],
  },
];

// Section 8 – Industries We Serve (Reused structure from 'Industries')
const industries = [
  { name: "IT & Software Development", icon: <FaCode /> },
  { name: "BFSI & FinTech", icon: <FaBuilding /> },
  { name: "E-commerce & Retail", icon: <FaShoppingCart /> },
  { name: "Healthcare & Pharma", icon: <FaHospital /> },
  { name: "EdTech & Startups", icon: <FaGraduationCap /> },
  { name: "Telecom & Media", icon: <FaCloud /> },
  { name: "Consulting & Analytics Firms", icon: <FaBrain /> },
  { name: "Manufacturing & Engineering", icon: <FaIndustry /> },
];

// Section 9 – Business Benefits (Reused structure from 'Benefits')
const benefits = [
  {
    icon: <FaBolt />,
    title: "Faster Hiring & Deployment",
    description:
      "Build project-ready teams in record time by skipping long training cycles.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Reduced Training Overheads",
    description:
      "Upskilling and infrastructure costs are handled entirely by SkillzRevo.",
  },
  {
    icon: <FaLock />,
    title: "Lower Attrition Rates",
    description:
      "Pre-trained candidates are certified and committed to your organization's success.",
  },
  {
    icon: <FaChartLine />,
    title: "Improved Productivity",
    description:
      "Resources contribute immediately from Day 1 due to pre-job training.",
  },
  {
    icon: <FaUsers />,
    title: "Scalable & Cost-Efficient",
    description:
      "Ramp up specialized teams quickly and optimize your overall talent acquisition costs.",
  },
];

const TrainToHirePage = () => {
  const mousePosition = useMousePosition();
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.9]);

  // Custom stats for Train-to-Hire, styled like Code 1
  const tthKeyBenefits = [
    {
      icon: GraduationCap,
      label: "100% Job-Ready Talent",
      color: "#1d8fff",
    },
    { icon: Clock, label: "50% Faster Deployment", color: "#1d8fff" },
    {
      icon: CheckCircle2,
      label: "Zero Attrition Risk",
      color: "#ff6900",
    },
  ];

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* Hero Section (Header) (Updated Content) */}
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
                Guaranteed Project-Ready Workforce
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
                <span className="text-slate-900">Train-to-Hire</span>
                <br />
                <span className="bg-gradient-to-r from-[#1d8fff] to-[#0066cc] bg-clip-text text-transparent">
                  Build Your Workforce
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-xl lg:text-xl xl:text-2xl text-slate-600 max-w-xl"
              >
                Source, Train & Deploy project-ready professionals tailored to
                your specific business needs.
              </motion.p>
            </div>

            {/* Key Benefits (Code 1 Design + Custom TTH Stats) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {tthKeyBenefits.map((item, i) => (
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
                pageUrl="/train-to-hire"
                className="group px-5 py-3 bg-gradient-to-r from-[#1d8fff] to-[#0066cc] text-white rounded-xl font-semibold shadow-lg shadow-[#1d8fff]/25 hover:shadow-xl hover:shadow-[#1d8fff]/40 transition-all transform hover:scale-[1.02] active:scale-[0.98] duration-200"
                service="Train to Hire"
              />
              <PopupForm
                ctaTitle="Download Brochure"
                pageUrl="/train-to-hire"
                className="px-5 py-3 bg-gradient-to-l from-[#ff6900] to-orange-400 text-white rounded-xl font-semibold border-2 border-orange-300 hover:border-[#ff6900] hover:text-[#fff] transition-all hover:shadow-[#ff6900]/40 shadow-lg transform hover:scale-[1.02] active:scale-[0.98] duration-200"
                service="Train to Hire"
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
                <GraduationCap className="w-8 h-8 text-[#1d8fff]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Client-Specific Upskilling
                </p>
                <p className="text-xs text-slate-500">
                  Reduce onboarding and training costs significantly
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
                      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332" // Updated image: professional training/presentation
                      alt="Train-to-Hire Program"
                      className="w-full h-full object-cover aspect-video"
                    />
                  </div>
                </div>

                {/* Floating Stat Cards (Code 1 Design + Custom TTH Stats) */}
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
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">100%</p>
                      <p className="text-xs text-slate-500">Job-Ready Talent</p>
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
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">50%</p>
                      <p className="text-xs text-slate-500">
                        Faster Deployment
                      </p>
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
        // style={{ opacity: heroOpacity }}
        className="relative h-auto flex items-center text-white overflow-hidden py-24"
      >
        {/* Background Image/Overlay (Code 1 Feature) */}
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1664382953481-141e97ad9825?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170')] bg-cover bg-center absolute z-0"></div>{" "}
        {/* Updated background image for relevance */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-black/40 to-black/20 opacity-100"></div>
        <AnimatedSection className="py-20 px-4 max-w-6xl mx-auto relative z-0">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-White">
              {/* New Content */}
              Closing the Gap Between Talent and Industry Needs
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed max-w-4xl mx-auto">
              {/* New Content */}
              Traditional fresher hiring often results in longer onboarding
              cycles, higher training costs, and rising attrition rates due to
              skill misalignment.
            </p>
            <p className="text-xl text-gray-200 mt-4 max-w-4xl mx-auto">
              {/* New Content */}
              Our{" "}
              <span className="font-bold uppercase text-[#ff6900]">
                Train-to-Hire Program
              </span>{" "}
              is a strategic solution: we source, train, and deploy certified,
              pre-trained candidates aligned with your specific project and
              skill requirements, ensuring they contribute immediately.
            </p>
          </div>
        </AnimatedSection>
      </motion.section>

      {/* ========== SECTION 3: WHAT IS THE TRAIN-TO-HIRE PROGRAM? (Code 1 Design + New Content) ========== */}
      <div className="grid md:grid-cols-2 items-center justify-center h-full">
        <div className="bg-blue-50 p-16 flex items-center justify-center h-full order-1 md:order-1">
          <div className="text-center md:text-left ">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="px-5 py-2 rounded-full border border-white/20 bg-gradient-to-br from-[#1d8fff] via-blue-500 to-[#1d8fff] text-white font-bold text-sm tracking-wide shadow-sm shadow-blue-500/30 w-fit mb-4 flex items-center justify-between gap-1"
            >
              <SiGooglegemini /> End-to-End Skill Development
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl xl:text-5xl text-[#1d8fff] font-bold mb-4 ">
                {/* New Content */}
                Recruitment + Training + Deployment = Job-Readiness
              </h2>
              <p className="text-lg lg:text-xl text-gray-500 mb-4 max-w-xl md:max-w-none mx-auto md:mx-0">
                {/* New Content */}
                The{" "}
                <span className="font-bold text-gray-700">
                  Train-to-Hire Program
                </span>{" "}
                is a hybrid hiring model that consolidates the entire workforce
                development pipeline into one streamlined, efficient solution.
              </p>
              <p className="text-lg lg:text-xl text-gray-500 mb-10 max-w-xl md:max-w-none mx-auto md:mx-0 border-l-4 border-[#ff6900] pl-4">
                {/* New Content */}
                We <span className="font-bold text-gray-700">identify</span> the
                right candidates,{" "}
                <span className="font-bold text-gray-700">upskill</span> them
                with client-specific training, and then{" "}
                <span className="font-bold text-gray-700">deploy</span> them as
                project-ready professionals into your workforce. It's smarter
                than traditional fresher hiring and faster than internal
                training programs.
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
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600" // Updated image: professional working/mentoring
            alt="Train-to-Hire Workflow"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>

      {/* Section 3 – Key Highlights (Updated Content/Structure reused from 'Differentiators') */}
      <AnimatedSection className="py-20 px-4 md:px-10 max-w-8xl mx-auto bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Program Highlights
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#ff6900] flex flex-col justify-between h-full"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl text-[#ff6900] flex-shrink-0 mt-1">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Section 4 – How It Works (Process Workflow) (Updated Content) */}
      <AnimatedSection className="py-20 bg-gradient-to-tl from-blue-400 via-blue-600 to-blue-400">
        <div className="container mx-auto flex flex-col md:items-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold md:text-center text-white mb-15">
            Our 5-Step Train-to-Hire Deployment Process
          </h2>

          {/* Timeline / Flow */}
          <div className="relative flex flex-col items-center mb-10 transform skew-y-[-5deg]">
            {/* horizontal line (for desktop) */}
            <div className="absolute top-1/6 left-0 right-0 h-1 bg-blue-200 hidden md:block z-8"></div>

            <div className="md:grid md:grid-cols-5 md:gap-4 w-full z-10">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex md:flex-col max-md:gap-2 skew-y-[5deg] items-center md:text-center relative py-8 hover:-translate-y-2 md:py-0 transition"
                >
                  <div className="relative z-10 p-4 rounded-full text-white shadow-lg mb-4 bg-gradient-to-b inset-shadow-sm inset-shadow-white from-blue-500 via-blue-600 to-blue-700">
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
                    <div className="absolute bottom-0 h-full w-1 bg-orange-200 left-6 md:hidden"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Section 5 – Engagement Models (Updated Content/Structure reused from 'Solutions') */}
      <AnimatedSection className="py-20 px-4 md:px-10 max-w-8xl mx-auto bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Flexible Engagement Models
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {engagementModels.map((model, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#ff6900] flex flex-col items-center text-center h-full"
            >
              <div className="text-[#ff6900] bg-orange-100 p-4 rounded-full w-fit mb-4">
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

      {/* Section 6 – Why Partner with SkillzRevo Talent? (Updated Content) */}
      <AnimatedSection className="py-20 px-4 bg-[#ff6900] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Differentiators & Business Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Differentiators Column */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4 border-b-2 pb-2">
                Our Key Differentiators
              </h3>
              {[
                "Customized Training Curriculum",
                "AI-Driven Candidate Screening",
                "Expert Industry Trainers (10+ Years)",
                "SkillzRevo Academy: Training in AI, Cloud, Data, Cybersecurity",
                "Pan-India Outreach to diverse graduates",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCogs className="text-xl flex-shrink-0" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
            {/* Business Benefits Column (Mirroring Section 9 for consistency) */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4 border-b-2 pb-2">
                Resulting Business Benefits
              </h3>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  {benefit.icon && (
                    <div className="text-xl flex-shrink-0">{benefit.icon}</div>
                  )}
                  <p className="text-lg">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Section 7 – Roles We Train & Deploy (Updated Content/Structure reused from 'Roles') */}
      <AnimatedSection className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            High-Value Roles We Train & Deploy
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highValueRoles.map((role, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#1d8fff]"
              >
                <div className="text-4xl bg-blue-100 p-4 rounded-full w-fit text-[#1d8fff] mb-4">
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

      {/* Section 8 – Industries We Serve (Updated Content) */}
      <AnimatedSection className="py-20 px-4 bg-[#1d8fff] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Industries We Empower with Trained Talent
          </h2>
          {/* 8 columns for all 8 industries */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
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

      {/* Section 9 – Business Benefits (Updated Content/Structure reused from 'Benefits' as a dedicated section) */}
      <AnimatedSection className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900">
            Achieve Immediate Business Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center h-full"
              >
                <div className="text-4xl text-[#ff6900] mb-3">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-md text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Section 10 – Call to Action (CTA) (Updated Content) */}
      <AnimatedSection className="py-20 px-4 bg-[#ff6900] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Build Your Future Workforce with SkillzRevo Talent
          </h2>
          <p className="text-xl mb-10">
            Hire trained, certified, and project-ready professionals through our
            Train-to-Hire Program and accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PopupForm
              ctaTitle="Get Started"
              pageUrl="/train-to-hire"
              className="px-8 py-4 bg-white !text-[#1d8fff] rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              service="Train to Hire"
            />
            <PopupForm
              ctaTitle="Download Brochure"
              pageUrl="/train-to-hire"
              className="px-8 py-4 bg-[#ff6900] !text-[#fff] rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              service="Train to Hire"
            />
          </div>
        </div>
      </AnimatedSection>
      <FAQAccordion faqs={faqs} />
    </div>
  );
};

export default TrainToHirePage;
