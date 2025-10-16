"use client";
import {
  Award,
  ArrowRight,
  TrendingUp,
  Clock,
  CheckCircle2,
  Users, // New icon added for stats
} from "lucide-react";
import { SiGooglegemini } from "react-icons/si";

// Mock implementation for external components/hooks (Replace with your actual imports)
const useMousePosition = () => ({ x: 0, y: 0 });
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
  FaTag,
  FaUserGraduate, // Icon for Freshers/Graduates
  FaUniversity, // Icon for Campus/Institutions
  FaCogs, // Icon for Process/Automation
  FaTrophy, // Icon for Best Talent
} from "react-icons/fa";
import FAQAccordion from "../components/FAQAccordion";
import React from "react";
import PopupForm from "../components/PopupForm";

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
    q: "1. What is Campus Recruitment?",
    a: "Campus Recruitment is the strategic process of hiring students and recent graduates directly from technical colleges, universities, and training institutes to fill entry-level roles. It’s a proactive way to build a pipeline of future leaders and skilled fresh talent.",
  },
  {
    q: "2. How does SkillzRevo Talent’s freshers hiring work?",
    a: (
      <p>
        We manage the entire lifecycle: **Requirement Analysis**, **Campus Outreach**,
        **Assessments** (coding, aptitude, psychometric), **Interviews**, **Offer Management**,
        and optional **Upskilling/Training**. This ensures a smooth, high-volume hiring
        process for job-ready freshers.
      </p>
    ),
  },
  {
    q: "3. What are the core benefits of outsourcing campus recruitment?",
    a: (
      <ul className="list-disc pl-6">
        <li>**Access** to pre-vetted talent from a pan-India network of colleges.</li>
        <li>**Cost-Effective** hiring vs. traditional recruitment channels.</li>
        <li>**Faster** hiring turnaround and team deployment.</li>
        <li>**Reduced burden** on your internal HR team.</li>
        <li>Improved **Quality of Hire** through advanced assessments.</li>
      </ul>
    ),
  },
  {
    q: "4. Which types of colleges does SkillzRevo partner with?",
    a: "Our network spans a diverse range of institutions, including premium Tier-1 colleges (IITS, NITS), specialized Tier-2 engineering colleges, leading universities, and skill-based Tier-3 institutions across major metropolitan and emerging cities.",
  },
  {
    q: "5. Do you offer support for Management Trainee Programs?",
    a: "Yes. We design and execute structured Management Trainee (MT) and Graduate Trainee (GT) programs, handling the rigorous assessments and selection processes required to identify high-potential candidates for critical future leadership roles.",
  },
  {
    q: "6. How is candidate assessment handled?",
    a: "We use advanced, AI-powered tools for multi-stage assessments, including: aptitude tests, domain-specific coding challenges, and psychometric/cultural fit evaluations to ensure accuracy and reduce human bias.",
  },
  {
    q: "7. Can SkillzRevo Talent help bridge skill gaps for freshers?",
    a: "Absolutely. We offer optional Pre-Placement Training and Upskilling Support, with tailored modules in emerging technologies (AI, Data Science) and essential soft skills (communication, professionalism) to make freshers job-ready from Day 1.",
  },
];


const CampusHiringPage = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.9]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  // Section 3 — Our Campus & Freshers Hiring Solutions (Updated Content/Structure reused from 'Solutions')
  const solutions = [
    {
      title: "End-to-End Campus Drives",
      description:
        "Complete management of your campus hiring campaigns, including coordination, logistics, assessments, and offer rollouts.",
      icon: <FaUniversity className="text-4xl" />,
    },
    {
      title: "Bulk Fresher Hiring",
      description:
        "High-volume, rapid recruitment solutions for large-scale entry-level requirements across IT, non-IT, and sales domains.",
      icon: <FaUsers className="text-4xl" />,
    },
    {
      title: "Trainee Programs (GT/MT)",
      description:
        "Structured recruitment and upskilling programs designed to identify and prepare high-potential freshers for critical business and leadership roles.",
      icon: <FaUserGraduate className="text-4xl" />,
    },
    {
      title: "Assessment-Driven Hiring",
      description:
        "Use of AI-powered aptitude, coding, and psychometric tests for accurate, fast, and unbiased candidate shortlisting.",
      icon: <FaClipboardCheck className="text-4xl" />,
    },
    {
      title: "Pre-Placement Upskilling",
      description:
        "Optional tailored training modules to bridge technical and soft skill gaps, ensuring candidates are industry-ready from Day 1.",
      icon: <FaCode className="text-4xl" />,
    },
  ];

  // Section 4 — Why Choose SkillzRevo Talent for Campus & Freshers Hiring? (Updated Content/Structure reused from 'Differentiators')
  const differentiators = [
    "Pan-India Campus Network: Access tier-1, tier-2, and tier-3 colleges for diverse talent.",
    "Vast Fresher Talent Pool: Pre-screened candidates ready for fast deployment across domains.",
    "Customized Hiring Models: Flexible solutions for both high-volume and specialized niche roles.",
    "AI-Driven Screening Tools: Faster, smarter, and unbiased candidate shortlisting and selection.",
    "Domain-Specific Recruiters: Experts familiar with academic curricula in IT, finance, and engineering.",
    "End-to-End Hiring Management: We handle everything from campus engagement to final onboarding.",
    "Reduced Hiring Timelines: Rapid process ensures freshers are deployed in days, not weeks.",
  ];

  // Section 5 — Our Campus Hiring Process Workflow (Updated Content/Structure reused from 'Process Steps')
  const processSteps = [
    {
      title: "1. Requirement Analysis",
      description: "Define fresher hiring volume, roles, skill matrices, and ideal college profiles.",
      icon: FaChartLine,
    },
    {
      title: "2. Campus Outreach & Partnership",
      description:
        "Engage with the targeted colleges, universities, and training institute placement cells.",
      icon: FaUniversity,
    },
    {
      title: "3. Assessments & Screening",
      description:
        "Conduct aptitude, coding tests, and psychometric evaluations to create a shortlist.",
      icon: FaClipboardCheck,
    },
    {
      title: "4. Interviews & Selection",
      description: "Coordinate all rounds: technical, HR, and final interviews with your hiring managers.",
      icon: FaCalendarAlt,
    },
    {
      title: "5. Offer Management & Onboarding",
      description: "Offer rollout, acceptance tracking, documentation, and joining formalities support.",
      icon: FaHandshake,
    },
    {
      title: "6. Training & Transition Support",
      description: "Optional pre-joining upskilling programs to ensure job-readiness from Day 1.",
      icon: FaUserGraduate,
    },
  ];

  // Section 6 — Roles We Hire Through Campus & Fresher Hiring (Updated Content/Structure reused from 'Roles')
  const highValueRoles = [
    {
      category: "IT & Technology Roles",
      icon: <FaCode />,
      positions: [
        "Software Developers",
        "QA & Testing Engineers",
        "Cloud & DevOps Associates",
        "Data Science & AI Trainees",
      ],
    },
    {
      category: "Business & Operations Roles",
      icon: <FaBriefcase />,
      positions: [
        "Business Analysts",
        "Digital Marketing Executives",
        "Inside Sales Associates",
        "HR Trainees & Operations Executives",
      ],
    },
    {
      category: "Finance & Consulting Roles",
      icon: <FaBuilding />,
      positions: [
        "Financial Analysts",
        "Audit & Tax Associates",
        "Management Trainees",
        "Business Development Executives",
      ],
    },
    {
      category: "Creative & Design Roles",
      icon: <FaBrain />,
      positions: [
        "UI/UX Junior Designers",
        "Content Writers",
        "Graphic Design Trainees",
        "Media/Comms Associates",
      ],
    },
  ];

  // Section 7 — Industries We Serve (Updated Content/Structure reused from 'Industries')
  const industries = [
    { name: "IT & Software Development", icon: <FaCode /> },
    { name: "BFSI", icon: <FaBuilding /> },
    { name: "E-commerce & Retail", icon: <FaShoppingCart /> },
    { name: "Healthcare & Pharmaceuticals", icon: <FaHospital /> },
    { name: "EdTech & Startups", icon: <FaGraduationCap /> },
    { name: "Telecom & Media", icon: <FaCloud /> },
    { name: "Consulting & Analytics Firms", icon: <FaBrain /> },
    { name: "Manufacturing & Engineering", icon: <FaIndustry /> },
  ];

  // Section 8 — Benefits of Partnering with SkillzRevo Talent (Updated Content/Structure reused from 'Benefits')
  const benefits = [
    "Access Pre-Vetted Freshers: Get job-ready candidates from a large pool of top institutions.",
    "High-Volume Hiring Capability: Efficiently hire hundreds of freshers in a streamlined drive.",
    "End-to-End Process Management: Complete support from college outreach to successful onboarding.",
    "Faster Hiring Turnaround: Deploy fresh talent and fill entry-level roles in record time.",
    "Upskilling Integration: Optional training programs to bridge academic and industry skill gaps.",
    "Cost-Effective Hiring: Achieve a lower cost-per-hire compared to managing in-house recruitment events.",
  ];
  const campusKeyBenefits = [
    {
      icon: Users,
      label: "10K+ Candidates Assessed",
      color: "#1d8fff",
    },
    { icon: TrendingUp, label: "80% Reduction in Effort", color: "#1d8fff" },
    {
      icon: CheckCircle2,
      label: "Ready-to-Deploy Talent",
      color: "#ff6900",
    },
  ];
  const mousePosition = useMousePosition();

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* Header Section (Hero) (Updated Content) */}
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

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-20">
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
                Partnered with 200+ Institutions
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
                <span className="text-slate-900">Campus & Freshers</span>
                <br />
                <span className="bg-gradient-to-r from-[#1d8fff] to-[#0066cc] bg-clip-text text-transparent">
                  Hiring Solutions
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-xl lg:text-xl xl:text-2xl text-slate-600 max-w-xl"
              >
                Access top talent from leading colleges and universities across India, ready to drive innovation.
              </motion.p>
            </div>

            {/* Key Benefits (Code 1 Design + Custom Campus Stats) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {campusKeyBenefits.map((item, i) => (
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
                pageUrl="/campus-fresher-hiring"
                className="group px-5 py-3 bg-gradient-to-r from-[#1d8fff] to-[#0066cc] text-white rounded-xl font-semibold shadow-lg shadow-[#1d8fff]/25 hover:shadow-xl hover:shadow-[#1d8fff]/40 transition-all transform hover:scale-[1.02] active:scale-[0.98] duration-200"
                service="Campus & Freshers Hiring"
              />
              <PopupForm
                ctaTitle="Download Brochure"
                pageUrl="/campus-fresher-hiring"
                className="px-5 py-3 bg-gradient-to-l from-[#ff6900] to-orange-400 text-white rounded-xl font-semibold border-2 border-orange-300 hover:border-[#ff6900] hover:text-[#fff] transition-all hover:shadow-[#ff6900]/40 shadow-lg transform hover:scale-[1.02] active:scale-[0.98] duration-200"
                service="Campus & Freshers Hiring"
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
                <Award className="w-8 h-8 text-[#1d8fff]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Built for Next-Gen Talent
                </p>
                <p className="text-xs text-slate-500">
                  Ready-to-work graduates, zero training overhead
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
                      src="/images/campus-hiring.jpg" // Updated image: students in a campus setting
                      alt="Campus Freshers Hiring"
                      className="w-full h-full object-cover aspect-video"
                    />
                  </div>
                </div>

                {/* Floating Stat Cards (Code 1 Design + Custom Campus Stats) */}
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
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">10K+</p>
                      <p className="text-xs text-slate-500">Candidates Assessed</p>
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
                      <p className="text-2xl font-bold text-slate-900">95%</p>
                      <p className="text-xs text-slate-500">Successful Placements</p>
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
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600')] bg-cover bg-center absolute z-0"></div> {/* Updated background image for relevance */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-black/40 to-black/20 opacity-100"></div>

        <AnimatedSection className="py-20 px-4 max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-White">
              {/* New Content */}
              Pipelining Future Talent, Today
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed max-w-4xl mx-auto">
              {/* New Content */}
              Finding skilled, job-ready freshers who can seamlessly integrate into your organization is crucial for building a <span className="font-bold uppercase text-[#ff6900]">future-ready, agile workforce.</span>
            </p>
            <p className="text-xl text-gray-200 mt-4 max-w-4xl mx-auto">
              {/* New Content */}
              SkillzRevo Talent specializes in Campus Recruitment and Freshers Hiring Solutions, leveraging a vast network of institutions, advanced hiring tools, and tailored assessment methodologies to ensure you get industry-ready candidates.
            </p>
          </div>
        </AnimatedSection>
      </motion.section>

      {/* ========== SECTION 3: WHAT IS CAMPUS & FRESHERS HIRING? (Code 1 Design + New Content) ========== */}
      <div className="grid md:grid-cols-2 items-center justify-center h-full">
        <div className="bg-blue-50 p-16 flex items-center justify-center h-full order-1 md:order-1">
          <div className="text-center md:text-left ">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="px-5 py-2 rounded-full border border-white/20 bg-gradient-to-br from-[#1d8fff] via-blue-500 to-[#1d8fff] text-white font-bold text-sm tracking-wide shadow-sm shadow-blue-500/30 w-fit mb-4 flex items-center justify-between gap-1"
            >
              <SiGooglegemini /> Strategic Campus Partnership
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl xl:text-5xl text-[#1d8fff] font-bold mb-4 ">
                {/* New Content */}
                The Power of Strategic Campus Recruitment
              </h2>
              <p className="text-lg lg:text-xl text-gray-500 mb-4 max-w-xl md:max-w-none mx-auto md:mx-0">
                {/* New Content */}
                <span className="font-semibold text-gray-700">Campus & Freshers Hiring</span> is the proactive, strategic process of recruiting students and recent graduates directly from colleges, universities, and training institutes to fill entry-level roles efficiently.
              </p>
              <p className="text-lg lg:text-xl text-gray-500 mb-10 max-w-xl md:max-w-none mx-auto md:mx-0 border-l-4 border-[#ff6900] pl-4">
                {/* New Content */}
                We act as your strategic hiring partner, managing the entire campus recruitment lifecycle — from planning and assessments to offer rollouts and onboarding — minimizing administrative effort and maximizing results.
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
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171" // Updated image: students in a classroom/lecture setting
            alt="Campus Recruitment Event"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>

      {/* Section 3 — Our Campus & Freshers Hiring Solutions (Updated Content/Structure reused from 'Solutions') */}
      <AnimatedSection className="py-20 px-4 md:px-10 max-w-8xl mx-auto bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Tailored Fresher Hiring Solutions
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

      {/* Section 4 — Why Choose SkillzRevo Talent for Campus & Freshers Hiring? (Updated Content) */}
      <AnimatedSection className="py-20 px-4 bg-[#1d8fff] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Key Differentiators in Campus Recruitment
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white/20 p-4 rounded-lg"
              >
                <FaCheckCircle className="text-2xl mt-1 flex-shrink-0" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Section 5 — Our Campus Hiring Process Workflow (Updated Content) */}
      <AnimatedSection className="py-20 bg-gradient-to-tl from-orange-400 via-orange-600 to-orange-400">
        <div className="container mx-auto flex flex-col md:items-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold md:text-center text-white mb-10">
            Our 6-Step Campus Hiring Process
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
                  {index < processSteps.length -1 && (
                    <div className="absolute bottom-0 h-full w-1 bg-blue-200 left-6 md:hidden"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Section 6 — Roles We Hire Through Campus & Fresher Hiring (Updated Content/Structure reused from 'Roles') */}
      <AnimatedSection className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Key Roles We Staff Through Campus Recruitment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highValueRoles.map((role, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#ff6900]">
                <div className="text-4xl bg-orange-100 p-4 rounded-full w-fit text-[#ff6900] mb-4">{role.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {role.category}
                </h3>
                <ul className="space-y-2">
                  {role.positions.map((position, i) => (
                    <li
                      key={i}
                      className="text-gray-700 flex items-start gap-2"
                    >
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

      {/* Section 7 — Industries We Serve (Updated Content) */}
      <AnimatedSection className="py-20 px-4 bg-[#ff6900] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Industries Benefiting from Our Fresher Solutions
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

      {/* Section 8 — Benefits of Partnering with SkillzRevo Talent (Updated Content) */}
      <AnimatedSection className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900">
            Measurable Benefits of Our Campus Staffing
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4"
              >
                <FaTrophy className="text-3xl text-[#1d8fff] flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700 text-left">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Section 9 – Call to Action (CTA) (Updated Content) */}
      <AnimatedSection className="py-20 px-4 bg-[#1d8fff] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Build Your Future Workforce with SkillzRevo Talent.
          </h2>
          <p className="text-xl mb-10">
            Hire job-ready freshers from top campuses across India and accelerate your business growth today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <PopupForm
              ctaTitle="Schedule a Consultation"
              pageUrl="/campus-fresher-hiring"
              className="px-8 py-4 bg-white !text-[#1d8fff] rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              service="Campus & Freshers Hiring"
            />
            <PopupForm
              ctaTitle="Download Brochure"
              pageUrl="/campus-fresher-hiring"
              className="px-8 py-4 bg-[#ff6900] !text-[#fff] rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              service="Campus & Freshers Hiring"
            />
            
          </div>
        </div>
      </AnimatedSection>
      <FAQAccordion faqs={faqs} />
    </div>
  );
};

export default CampusHiringPage;