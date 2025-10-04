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
  FaMapMarkedAlt, // For Global/Geography
  FaMoneyBillWave, // For Cost Savings
  FaUserTie, // For Dedicated Teams
  FaUsersCog, // For Teams/HR
  FaLaptopCode, // For IT/Remote Work
} from "react-icons/fa";
import FAQAccordion from "../components/FAQAccordion";

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

// Section 11 - FAQs (Updated Content)
const faqs = [
  {
    q: "1. What is the difference between Remote Staffing and Offshore Teams?",
    a: "Remote Staffing involves hiring skilled professionals who work remotely, dedicated to your projects, regardless of location. Offshore Teams (like those established in India) take this further by establishing a dedicated workforce in another country to significantly reduce operational and infrastructure costs.",
  },
  {
    q: "2. How does SkillzRevo Talent’s offshore staffing model work?",
    a: (
      <p>
        We identify, vet, and hire top talent from global talent pools (especially India's). These professionals work exclusively for you, seamlessly integrated into your projects. We handle all local **payroll, compliance, HR administration, and infrastructure**, while you maintain full operational control.
      </p>
    ),
  },
  {
    q: "3. What are the main benefits of using remote and offshore teams?",
    a: (
      <ul className="list-disc pl-6">
        <li>**Cost Savings** up to 60% on salary and infrastructure costs.</li>
        <li>Access to a **global, pre-vetted talent pool** without geographical constraints.</li>
        <li>**Scalability** for fast workforce expansion or contraction.</li>
        <li>Potential for **24/7 Productivity** across different time zones.</li>
      </ul>
    ),
  },
  {
    q: "4. What is the Build-Operate-Transfer (BOT) Model?",
    a: "The BOT Model is a strategic solution where SkillzRevo Talent takes responsibility for the initial **Build** (recruitment, infrastructure setup), **Operate** (management, HR, payroll) phases, and then **Transfers** the fully functional, stable offshore team and facility to your company once ready.",
  },
  {
    q: "5. How do you ensure data security and compliance for offshore teams?",
    a: "We adhere strictly to global data security standards (like GDPR and ISO) and local compliance laws. Our contracts include robust IP protection clauses, and our facilities/systems are designed with enterprise-level security protocols.",
  },
  {
    q: "6. Which types of roles are best suited for remote and offshore staffing?",
    a: "Virtually any role can be remote, but we specialize in Technology (Developers, DevOps), Data & Analytics, Digital Marketing, Customer Support, Finance & Accounting, and Creative roles, which benefit significantly from the cost and talent arbitrage.",
  },
];


const RemoteStaffingPage = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.9]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  // Section 3 — Our Remote Staffing & Offshore Solutions (Updated Content/Structure reused from 'Solutions')
  const solutions = [
    {
      title: "Dedicated Remote Teams",
      description:
        "Full-time, exclusive professionals working remotely, seamlessly integrated with your in-house teams. Ideal for long-term roles.",
      icon: <FaUserTie className="text-4xl" />,
    },
    {
      title: "Offshore Development Centers (ODC)",
      description:
        "Establish dedicated teams in a cost-effective location (e.g., India) under your brand and process standards for massive scalability.",
      icon: <FaBuilding className="text-4xl" />,
    },
    {
      title: "On-Demand Remote Staffing",
      description:
        "Flexible professionals hired on a project or hourly basis for short-term tasks, pilot projects, or sudden niche requirements.",
      icon: <FaClock className="text-4xl" />,
    },
    {
      title: "Build-Operate-Transfer (BOT)",
      description:
        "We build, manage, and stabilize your entire offshore operation, then transfer full ownership to you once ready.",
      icon: <FaExchangeAlt className="text-4xl" />,
    },
    {
      title: "Hybrid Remote Model",
      description:
        "Combining onsite talent, nearby remote staff, and offshore teams for the optimal balance of collaboration and cost-efficiency.",
      icon: <FaUsersCog className="text-4xl" />,
    },
  ];

  // Section 4 — Why Choose SkillzRevo Talent for Remote Staffing & Offshore Teams? (Updated Content/Structure reused from 'Differentiators')
  const differentiators = [
    "Access to Global Talent without geographical boundaries or local skill shortages",
    "Cost Savings up to 60% on salary, benefits, and infrastructure overheads",
    "24/7 Productivity potential through optimized time zone management",
    "Complete HR & Payroll Management handled by SkillzRevo's local experts",
    "Zero Infrastructure Costs—we provide the necessary office space, equipment, and IT setup",
    "Data Security & Compliance adherence (GDPR, ISO, local regulations) for peace of mind",
    "Scalable & Flexible Teams that can be rapidly expanded or reduced based on project needs",
  ];

  // Section 5 — Remote Staffing & Offshore Team Process Workflow (Updated Content/Structure reused from 'Process Steps')
  const processSteps = [
    {
      title: "1. Requirement Analysis",
      description: "Assess project scope, skill needs, cultural fit, and resource requirements.",
      icon: FaSearch,
    },
    {
      title: "2. Talent Sourcing & Screening",
      description:
        "AI-driven global recruitment, proprietary database, and comprehensive pre-vetting.",
      icon: FaMapMarkedAlt,
    },
    {
      title: "3. Interviews & Assessments",
      description:
        "Virtual interviews, technical assessments, and cultural fit evaluation by your team.",
      icon: FaClipboardCheck,
    },
    {
      title: "4. Onboarding & Setup",
      description: "Seamless integration, tool provision, security protocols, and compliance setup.",
      icon: FaLaptopCode,
    },
    {
      title: "5. Payroll & Compliance",
      description: "Handling all contracts, taxation, insurance, benefits, and local HR administration.",
      icon: FaShieldAlt,
    },
    {
      title: "6. Performance Tracking",
      description: "Transparent, real-time monthly performance reports and dedicated account management.",
      icon: FaChartLine,
    },
  ];

  // Section 6 — Roles We Hire for Remote & Offshore Teams (Updated Content/Structure reused from 'Roles')
  const highValueRoles = [
    {
      category: "Technology & IT",
      icon: <FaCode />,
      positions: [
        "Full Stack Developers",
        "DevOps Engineers",
        "Cloud Specialists",
      ],
    },
    {
      category: "Data & Analytics",
      icon: <FaDatabase />,
      positions: [
        "Data Scientists",
        "AI/ML Engineers",
        "BI Analysts",
      ],
    },
    {
      category: "Digital Marketing",
      icon: <FaChartLine />,
      positions: [
        "SEO/SEM Experts",
        "Paid Ads Managers",
        "Content Strategists",
      ],
    },
    {
      category: "Support & Operations",
      icon: <FaHeadset />,
      positions: [
        "Virtual Assistants",
        "Helpdesk Executives",
        "Inside Sales Teams",
      ],
    },
  ];

  // Section 7 — Industries We Serve (Updated Content/Structure reused from 'Industries')
  const industries = [
    { name: "IT & Software Development", icon: <FaCode /> },
    { name: "BFSI", icon: <FaBuilding /> },
    { name: "Healthcare & Pharmaceuticals", icon: <FaHospital /> },
    { name: "E-commerce & Retail", icon: <FaShoppingCart /> },
    { name: "EdTech & Startups", icon: <FaGraduationCap /> },
    { name: "Consulting & Analytics", icon: <FaBrain /> },
    { name: "Telecom & Media", icon: <FaCloud /> },
    { name: "Global Enterprises & SMBs", icon: <FaIndustry /> },
  ];

  // Section 8 — Benefits of Partnering with SkillzRevo Talent (Updated Content/Structure reused from 'Benefits')
  const benefits = [
    "Access pre-vetted professionals from a global talent pool, eliminating local talent scarcity.",
    "Save up to 60% on total hiring costs compared to hiring in high-cost regions.",
    "Fast deployment—hire your entire team within days, not months.",
    "End-to-end management—from recruitment to onboarding and continuous compliance.",
    "Seamless collaboration—integrated with dedicated remote team tools and account management.",
    "Scale without geographical limits, ensuring business continuity and rapid expansion.",
  ];

  // Section 9 — Engagement Models (Re-purposing the structure for detailed model descriptions)
  const engagementModels = [
    {
      title: "Full-Time Dedicated Remote Staffing",
      description: "Ideal for long-term, core operational roles. The professional works 100% exclusively for you, integrated into your team structure.",
      icon: <FaUserTie />,
    },
    {
      title: "Project-Based Offshore Teams",
      description: "Perfect for fixed-duration assignments or specific product launches. Get a full team for a set time with clear deliverables.",
      icon: <FaProjectDiagram />,
    },
    {
      title: "Hybrid Model",
      description: "Strategically combining the strengths of your local team with the cost-efficiency and scale of remote and offshore talent.",
      icon: <FaUsersCog />,
    },
    {
      title: "Build-Operate-Transfer (BOT)",
      description: "For companies aiming for a permanent global presence: we establish and run the center until you are ready to take over full ownership.",
      icon: <FaExchangeAlt />,
    },
  ];

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* Header Section (Hero) (Updated Content) */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative h-full py-16 md:py-48 flex items-center justify-center bg-[#ff6900] text-white"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Remote Staffing & Offshore Teams That Empower Global Growth
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto"
          >
            Access top global talent, scale operations, and reduce costs — without geographical limits.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#ff6900] rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Get Started Now
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#ff6900] transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
              <FaDownload /> Download Brochure
            </button>
          </div>
        </div>
      </motion.section>

      {/* Section 1 — Introduction (Updated Content) */}
      <AnimatedSection className="py-20 px-4 max-w-6xl mx-auto bg-white">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Build a Borderless, High-Performing Workforce
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            In today’s digital-first, borderless workplace, businesses need access to the **best talent without geographical limitations**. SkillzRevo Talent enables you to build high-performing remote teams and offshore staffing solutions that reduce costs, improve scalability, and provide potential 24/7 productivity.
          </p>
          <p className="text-xl font-semibold text-[#1d8fff] mt-4 max-w-4xl mx-auto flex items-center justify-center gap-2">
            We empower you to hire top talent across India and overseas, while handling **payroll, compliance, HR, and onboarding** — allowing you to focus entirely on your core business growth.
          </p>
        </div>
      </AnimatedSection>

      {/* Section 2 — What is Remote Staffing & Offshore Teams? (Updated Content) */}
      <AnimatedSection className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Understanding Remote Staffing and Offshore Solutions
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              **Remote Staffing** allows companies to hire skilled professionals who work remotely while being dedicated to your projects. They integrate directly into your team, regardless of their physical location.
            </p>
            <p className="text-lg text-gray-700 mb-4 border-l-4 border-[#ff6900] pl-4">
                **Offshore Teams** take this further by establishing a dedicated workforce in another country (e.g., India), helping reduce operational and infrastructure costs while tapping into massive, high-skill talent pools.
            </p>
            <p className="text-md font-medium text-gray-800">
                With SkillzRevo Talent, you get pre-vetted, highly skilled professionals working exclusively for you, either on our payroll (Offshore) or yours (Remote).
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Image representing remote collaboration
              alt="Remote Collaboration"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Section 4 — Why Choose SkillzRevo Talent for Remote Staffing & Offshore Teams? (Updated Content) */}
      <AnimatedSection className="py-20 px-4 bg-[#1d8fff] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            The SkillzRevo Global Advantage
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

      {/* Section 5 — Remote Staffing & Offshore Team Process Workflow (Updated Content) */}
      <AnimatedSection className="py-20 bg-gradient-to-tl from-orange-400 via-orange-600 to-orange-400">
        <div className="container mx-auto flex flex-col md:items-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold md:text-center text-white mb-10">
            Our 6-Step Global Team Deployment Process
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

      {/* Section 6 — Roles We Hire for Remote & Offshore Teams (Updated Content/Structure reused from 'Roles') */}
      <AnimatedSection className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Roles We Staff for Remote & Offshore Teams
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highValueRoles.map((role, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#1d8fff]">
                <div className="text-4xl bg-blue-100 p-4 rounded-full w-fit text-[#1d8fff] mb-4">{role.icon}</div>
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

      {/* Section 7 — Industries We Serve (Updated Content) */}
      <AnimatedSection className="py-20 px-4 bg-[#ff6900] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Industries We Serve Globally
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

      {/* Section 9 — Engagement Models (Updated Content/Structure reused from 'Solutions' but slightly modified for models) */}
      <AnimatedSection className="py-20 px-4 md:px-10 max-w-8xl mx-auto bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Flexible Engagement Models
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagementModels.map((model, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#1d8fff] flex flex-col items-center text-center"
            >
              <div className="text-[#1d8fff] bg-blue-100 p-4 rounded-full w-fit mb-4">
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

      {/* Section 8 — Benefits of Partnering with SkillzRevo Talent (Updated Content) */}
      <AnimatedSection className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900">
            Measurable Benefits of Global Staffing
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-lg flex items-start gap-4 border-l-4 border-[#ff6900]"
              >
                <FaBolt className="text-3xl text-[#ff6900] flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700 text-left">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Section 10 – Call to Action (CTA) (Updated Content) */}
      <AnimatedSection className="py-20 px-4 bg-[#1d8fff] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Go Global. Scale Faster. Build Your Dream Offshore Team with SkillzRevo Talent.
          </h2>
          <p className="text-xl mb-10">
            Hire top remote professionals or set up offshore teams without operational hassles and focus on your core business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#1d8fff] rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Schedule a Consultation
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#1d8fff] transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
              <FaDownload /> Download Remote Staffing Brochure
            </button>
          </div>
        </div>
      </AnimatedSection>
      <FAQAccordion faqs={faqs} />
    </div>
  );
};

export default RemoteStaffingPage;