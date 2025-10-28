"use client";
// import React from "react";
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
  FaBolt, // New Icon for Agility/Speed
  FaBriefcase, // New Icon for Contract
  FaHourglassHalf, // New Icon for Short-Term
  FaProjectDiagram, // New Icon for Project-Based
  FaExchangeAlt, // New Icon for C2H
} from "react-icons/fa";
import FAQAccordion from "../components/FAQAccordion";
import React from "react";
import PopupForm from "../components/PopupForm";
import { useState, useEffect } from "react";
import { SiGooglegemini } from "react-icons/si";
import {
  Award,
  TrendingUp,
  Clock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

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
    q: "1. What is Contract Staffing and how does SkillzRevo help with it?",
    a: "Contract Staffing involves hiring professionals on a temporary or project basis, who remain on our payroll. SkillzRevo manages the entire lifecycle—sourcing, payroll, and compliance—providing you with a flexible, ready-to-work team.",
  },
  {
    q: "2. What types of contract roles do you staff for?",
    a: (
      <ul className="list-disc pl-6">
        <li>IT Professionals (Developers, Analysts, Engineers)</li>
        <li>Financial & Accounting Specialists</li>
        <li>Sales & Marketing Experts</li>
        <li>HR & Administrative Staff</li>
        <li>Engineering & Manufacturing Technicians</li>
        <li>Healthcare Staff (Non-Clinical)</li>
      </ul>
    ),
  },
  {
    q: "3. Do you offer Contract-to-Hire (C2H) options?",
    a: "Yes, our Contract-to-Hire model allows you to assess a candidate's fit and performance before committing to a permanent position, minimizing your long-term hiring risk.",
  },
  {
    q: "4. How quickly can you provide contract staff?",
    a: "Our quick turnaround is a key differentiator. Thanks to our vast pre-screened talent pool, we can often deploy resources to match your requirements in as little as 24 to 72 hours for most roles.",
  },
  {
    q: "5. How are payroll and compliance handled for contract staff?",
    a: "We manage all administrative aspects, including salary processing, tax deductions, PF, ESI, and compliance with local labor laws. This zero administrative hassle is a major benefit for our clients.",
  },
  {
    q: "6. What are the cost benefits of using Contract Staffing?",
    a: "Contract staffing allows you to avoid long-term payroll liabilities, benefits, and the overhead costs associated with permanent hiring, offering a highly cost-optimized solution, especially for short-term needs.",
  },
  {
    q: "7. Do you support remote or offshore contract staffing?",
    a: "Absolutely. We provide remote and offshore staffing solutions, giving you access to a global talent pool for cost-effective scaling and specialized skills.",
  },
  {
    q: "8. What industries do you serve with Contract Staffing?",
    a: (
      <ul className="list-disc pl-6">
        <li>IT & Software</li>
        <li>BFSI (Banking, Financial Services, and Insurance)</li>
        <li>Healthcare & Pharma</li>
        <li>E-commerce & Retail</li>
        <li>Manufacturing & Engineering</li>
        <li>Telecom & Media</li>
      </ul>
    ),
  },
  {
    q: "9. Is there a minimum contract duration?",
    a: "We offer flexible terms, including short-term contracts typically starting from 3 months, which can be extended based on your project requirements.",
  },
  {
    q: "10. How do I get a proposal for Contract Staffing?",
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
        understand your workforce needs and prepare a customized proposal.
      </p>
    ),
  },
];


const Contract = () => {
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

  // Section 3 - Our Contract Staffing Solutions (Updated)
  const solutions = [
    {
      title: "Short-Term Contract Staffing",
      description:
        "For 3–12 months. Rapid deployment of specialists for startups, SMEs, and enterprises.",
      icon: <FaHourglassHalf className="text-4xl" />,
    },
    {
      title: "Project-Based Staffing",
      description:
        "Dedicated teams deployed for specific assignments with flexible scaling throughout the project lifecycle.",
      icon: <FaProjectDiagram className="text-4xl" />,
    },
    {
      title: "Long-Term Contract Staffing",
      description:
        "Skilled professionals for extended durations at cost-effective rates, providing continuity for ongoing operations.",
      icon: <FaClock className="text-4xl" />,
    },
    {
      title: "Contract-to-Hire (C2H)",
      description:
        "Hire on a trial basis, assessing fit and performance before converting them into permanent roles with confidence.",
      icon: <FaExchangeAlt className="text-4xl" />,
    },
    {
      title: "Offshore/Remote Staffing",
      description:
        "Access global talent for specialized skills or cost-effective scaling without geographical limits.",
      icon: <FaCloud className="text-4xl" />,
    },
  ];

  // Section 4 - Why Choose SkillzRevo Talent? (Updated)
  const differentiators = [
    "Vast Pre-Screened Talent Pool – Immediate availability of vetted candidates",
    "Quick Turnaround – Positions filled in days, not weeks, to ensure project continuity",
    "Specialized Recruiters – Expertise across IT, BFSI, Pharma, and Engineering",
    "Payroll & Compliance – End-to-end management of all administrative burdens",
    "AI-Driven Recruitment – Smart, accurate candidate matching for niche roles",
    "Cost-Effective Solutions – Optimize hiring budgets and avoid long-term overheads",
    "Risk-Free Hiring – Contract-to-hire options available to test fit before permanent placement",
  ];

  // Section 5 - Contract Staffing Process Workflow (Updated)
  const processSteps = [
    {
      title: "Requirement Gathering",
      description: "Understand specific skills, role requirements, and project timelines.",
      icon: FaSearch,
    },
    {
      title: "Talent Sourcing",
      description:
        "Exclusive databases, job portals, referrals, and specialized headhunting.",
      icon: FaUsers,
    },
    {
      title: "Screening & Assessment",
      description:
        "Technical/functional checks, background verification, and cultural fit assessment.",
      icon: FaClipboardCheck,
    },
    {
      title: "Deployment",
      description: "Quick onboarding and transition onto the SkillzRevo Talent payroll.",
      icon: FaRocket, // Changed from FaCalendarAlt
    },
    {
      title: "Payroll & Compliance",
      description: "Management of salaries, PF, ESI, taxes, and benefits.",
      icon: FaBuilding, // Changed from FaHandshake
    },
    {
      title: "Tracking & Reporting",
      description: "Continuous monitoring of attendance, performance, and transparency.",
      icon: FaChartLine, // Changed from FaHeadset
    },
  ];

  // Section 8 - Engagement Models (Updated/Moved to Roles section structure)
  const roles = [
    {
      category: "Managed Services",
      icon: <FaHeadset />,
      positions: [
        "Full-cycle workforce management for large projects.",
        "Outcome-based solutions.",
        "Dedicated program manager.",
      ],
    },
    {
      category: "Dedicated Resource Model",
      icon: <FaUsers />,
      positions: [
        "Exclusive professionals working solely for your projects.",
        "Long-term resource commitment.",
        "Integration into your internal teams.",
      ],
    },
    {
      category: "Fixed-Term Contracts",
      icon: <FaBriefcase />,
      positions: [
        "Temporary workforce for specific durations (e.g., 6 months).",
        "Ideal for capacity augmentation.",
        "Specific skill set fulfillment.",
      ],
    },
    {
      category: "Contract-to-Hire (C2H)",
      icon: <FaExchangeAlt />,
      positions: [
        "Try-before-you-buy model for permanent positions.",
        "Reduced hiring risk.",
        "Seamless transition process.",
      ],
    },
  ];

  // Section 6 - Industries We Serve (Updated)
  const industries = [
    { name: "IT & Software", icon: <FaCode /> },
    { name: "BFSI", icon: <FaBuilding /> },
    { name: "Healthcare & Pharma", icon: <FaHospital /> },
    { name: "Manufacturing & Engineering", icon: <FaIndustry /> },
    { name: "E-commerce & Retail", icon: <FaShoppingCart /> },
    { name: "Telecom & Media", icon: <FaCloud /> }, // Changed from EdTech
    { name: "Startups & EdTech", icon: <FaGraduationCap /> }, // Changed from Manufacturing
    { name: "Consulting & Analytics", icon: <FaBrain /> }, // New Industry
  ];

  // Section 7 - Benefits of Partnering (Updated/Moved to a new list structure)
  const benefits = [
    "Faster Time-to-Hire – Reduce hiring cycles by up to 60%",
    "Zero Administrative Hassles – We handle HR, payroll & compliance, minimizing your overhead",
    "Cost Optimization – Avoid long-term payroll liabilities, benefits, and recruitment costs",
    "Workforce Scalability – Rapidly ramp up or down resource strength as project needs change",
    "Specialized Skills – Quickly fill niche roles that are hard to find in the permanent market",
    "Reduced Risk – Contract-to-hire allows you to mitigate the risk of a bad long-term hire",
  ];

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* Hero Section (Updated Content) */}
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
                <span className="text-slate-900">Contract Staffing</span>
                <br />
                <span className="bg-gradient-to-r from-[#1d8fff] to-[#0066cc] bg-clip-text text-transparent">
                  Made Simple
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-xl lg:text-xl xl:text-2xl text-slate-600 max-w-xl"
              >
                Flexible, scalable, and cost-effective workforce solutions tailored to your short-term and project-based needs.
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
                  label: "60% Faster Hiring",
                  color: "#1d8fff",
                },
                { icon: Clock, label: "24-72hr Deploy", color: "#1d8fff" },
                {
                  icon: CheckCircle2,
                  label: "Zero Admin Hassle",
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
                    Get Started <ArrowRight className="w-5 h-5" />
                  </span>
                }
                ContractUrl="/contract-staffing"
                className="group px-5 py-3 bg-gradient-to-r from-[#1d8fff] to-[#0066cc] text-white rounded-xl font-semibold shadow-lg shadow-[#1d8fff]/25 hover:shadow-xl hover:shadow-[#1d8fff]/40 transition-all transform hover:scale-[1.02] active:scale-[0.98] duration-200"
                service="Contract Staffing"
              />
              <PopupForm
                ctaTitle="Download Brochure"
                ContractUrl="/contract-staffing"
                className="px-5 py-3 bg-gradient-to-l from-[#ff6900] to-orange-400 text-white rounded-xl font-semibold border-2 border-orange-300 hover:border-[#ff6900] hover:text-[#fff] transition-all hover:shadow-[#ff6900]/40 shadow-lg transform hover:scale-[1.02] active:scale-[0.98] duration-200"
                service="Contract Staffing"
              />
            </motion.div>

            {/* Trust Indicators */}
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
                      src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=600"
                      alt="Contract Staffing Services"
                      className="w-full h-full object-cover aspect-video"
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
                      <p className="text-2xl font-bold text-slate-900">60%</p>
                      <p className="text-xs text-slate-500">Faster Hiring</p>
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
                      <p className="text-2xl font-bold text-slate-900">24hrs</p>
                      <p className="text-xs text-slate-500">Quick Deploy</p>
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

      {/* ========== SECTION 2: INTRODUCTION ========== */}
      <motion.section
        style={{ opacity: heroOpacity }}
        className="relative h-auto flex items-center  text-white overflow-hidden py-24"
      >
        {/* Background Image/Overlay */}
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600')] bg-cover bg-center absolute  z-0">
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-black/40 to-black/20 opacity-100"></div>

        <AnimatedSection className="py-20 px-4 max-w-6xl mx-auto  relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-White">
              Your Partner for Flexible Workforce Solutions
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed max-w-4xl mx-auto">
              In today's dynamic business environment, workforce needs are evolving faster than ever. At SkillzRevo Talent, we empower organizations with flexible Contract Staffing solutions designed to handle short-term projects, seasonal spikes, and specialized skill demands — without the overheads of permanent hiring.
            </p>
            <p className="text-xl text-gray-200 mt-4 max-w-4xl mx-auto">
              Our services help you <span className="font-bold uppercase text-[#ff6900]">scale quickly, optimize costs, and stay competitive</span> in a rapidly changing market.
            </p>
          </div>
        </AnimatedSection>
      </motion.section>

      {/* ========== SECTION 3: WHAT IS CONTRACT STAFFING ========== */}
      <div className="grid md:grid-cols-2 items-center justify-center h-full">
        <div className="bg-blue-50 p-16 flex items-center justify-center h-full">
          <div className="text-center md:text-left ">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="px-5 py-2 rounded-full border border-white/20 bg-gradient-to-br from-[#1d8fff] via-blue-500 to-[#1d8fff] text-white font-bold text-sm tracking-wide shadow-sm shadow-blue-500/30 w-fit mb-4 flex items-center justify-between gap-1"
            >
              <SiGooglegemini /> Leading Contract Staffing Solutions
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl xl:text-5xl text-[#1d8fff] font-bold mb-4 ">
                What is Contract Staffing?
              </h2>
              <p className="text-lg lg:text-xl text-gray-500 mb-10 max-w-xl md:max-w-none mx-auto md:mx-0">
                Contract Staffing involves hiring professionals on a temporary or project basis while keeping them on our payroll. This removes the administrative burden of salary processing, compliance, and benefits, allowing your company to focus entirely on core business outcomes.
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
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600"
            alt="Contract Staffing"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>


    

      {/* Section 3 – Our Contract Staffing Solutions (Updated Content) */}
      <AnimatedSection className="py-20 px-4 md:px-10 max-w-8xl mx-auto bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Our Contract Staffing Solutions
        </h2>
        {/* Adjusted to 5 columns for a cleaner fit */}
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

      {/* Section 4 – Why Choose SkillzRevo Talent? (Updated Content) */}
      <AnimatedSection className="py-20 px-4 bg-[#1d8fff] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Why Choose SkillzRevo Talent?
          </h2>
          <div className="grid md:grid-cols-2 gap-6"> 
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white/20 p-4 rounded-lg" // Adjusted padding/styling
              >
                <FaCheckCircle className="text-2xl mt-1 flex-shrink-0" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Section 5 – Contract Staffing Process Workflow (Updated Content) */}

      <AnimatedSection className="py-20 bg-gradient-to-tl from-orange-400 via-orange-600 to-orange-400">
        <div className="container mx-auto flex flex-col md:items-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold md:text-center text-white mb-15">
            Our Contract Staffing Process Workflow
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
                  {/* Kept existing vertical line logic for mobile */}
                  {index < processSteps.length -1 && ( 
                    <div className="absolute bottom-0 h-full w-1 bg-blue-200 left-6 md:hidden"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>


      {/* Section 8 – Engagement Models (Updated Content/Structure reused from 'Roles') */}
      <AnimatedSection className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Our Engagement Models
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

      {/* Section 6 – Industries We Serve (Updated Content) */}
      <AnimatedSection className="py-20 px-4 bg-[#ff6900] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Industries We Serve
          </h2>
          {/* Increased grid columns to 8 for all industries + Consulting/Analytics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"> 
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

      {/* Section 7 – Benefits of Partnering (Updated Content/Structure reused from 'Benefits') */}
      <AnimatedSection className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900">
            Benefits of Partnering with SkillzRevo Talent
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4"
              >
                <FaBolt className="text-3xl text-[#1d8fff] flex-shrink-0 mt-1" /> {/* Changed Icon to FaBolt for agility/speed */}
                <p className="text-lg text-gray-700 text-left">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Section 9 – Call to Action (CTA) (Updated Content) */}
      <AnimatedSection className="py-20 px-4 bg-[#ff6900] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay Agile. Stay Competitive. <br />
            Hire Smarter with SkillzRevo Talent.
          </h2>
          <p className="text-xl mb-10">
            Discover how our Contract Staffing solutions can help you scale faster and achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PopupForm
              ctaTitle="Request a proposal"
              ContractUrl="/contract-staffing"
              className="px-8 py-4 bg-white !text-[#1d8fff] rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              service="Contract Staffing"
            />
            <PopupForm
              ctaTitle="Download Brochure"
              ContractUrl="/contract-staffing"
              className="px-8 py-4 bg-[#ff6900] !text-[#fff] rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              service="Contract Staffing"
            />
          </div>
        </div>
      </AnimatedSection>
      <FAQAccordion faqs={faqs} />
    </div>
  );
};

export default Contract;