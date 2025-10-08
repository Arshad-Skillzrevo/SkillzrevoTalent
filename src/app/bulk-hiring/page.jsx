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
  FaGlobe, // New Icon for Pan-India Reach
  FaCogs, // New Icon for AI/Process
  FaFilter, // New Icon for Screening
  FaSitemap, // New Icon for Process/Scale
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

// SEO Additions - FAQ Section
const faqs = [
  {
    q: "1. What is Bulk Hiring?",
    a: "Bulk Hiring involves recruiting a large number of candidates across multiple roles and locations within a short timeframe to meet business expansion, seasonal peaks, or major project needs.",
  },
  {
    q: "2. How does SkillzRevo Talent manage large-scale recruitment?",
    a: "We use AI-driven sourcing tools, structured assessment platforms, and a nationwide recruiter network to handle end-to-end recruitment efficiently—from screening to onboarding—ensuring speed, quality, and consistency.",
  },
  {
    q: "3. Which industries can benefit from Bulk Hiring services?",
    a: "Industries like **IT & ITeS, BFSI, E-commerce, Manufacturing, Retail, BPO, and Telecom** frequently leverage our managed services for rapid, high-volume workforce deployment.",
  },
  {
    q: "4. How does SkillzRevo ensure quality during mass hiring?",
    a: "Quality is ensured through **structured, multi-level assessments**, AI-powered screening, and analytics-based candidate scoring, guaranteeing only the best-fit candidates are presented.",
  },
  {
    q: "5. Can you handle campus and fresher hiring drives?",
    a: "Yes. We organize end-to-end **pan-India campus recruitment campaigns**, covering assessments, college coordination, and pre-joining engagement for entry-level talent.",
  },
  {
    q: "6. What locations do you cover?",
    a: "We have a strong **pan-India presence** and robust virtual recruitment infrastructure, enabling us to cover multiple metro and non-metro locations, as well as support offshore hiring.",
  },
  {
    q: "7. What is the typical turnaround time for Bulk Hiring projects?",
    a: "Depending on role complexity and volume, we typically onboard large batches of candidates within **2 to 6 weeks**, significantly reducing your time-to-market.",
  },
  {
    q: "8. Can SkillzRevo manage remote or hybrid team hiring?",
    a: "Absolutely. Our digital recruitment infrastructure supports remote sourcing, virtual interviews, and paperless onboarding for remote-ready and hybrid teams at scale.",
  },
  {
    q: "9. How cost-effective are your bulk hiring solutions?",
    a: "Our managed hiring model significantly **reduces the cost-per-hire** by optimizing sourcing channels, leveraging technology for screening, and streamlining recruitment operations.",
  },
  {
    q: "10. How can I get started?",
    a: "Schedule a consultation or request a proposal—our team will assess your specific volume requirements and design a customized, high-impact bulk hiring plan.",
  },
];


// Section 3 – Key Highlights (Updated Content)
const highlights = [
  {
    icon: <FaHandshake />,
    title: "End-to-End Hiring Support",
    description: "Complete management of the recruitment cycle, from initial sourcing to final onboarding.",
  },
  {
    icon: <FaGlobe />,
    title: "Pan-India Reach",
    description: "Access a diverse, nationwide talent pool across Tier 1, 2, and 3 cities.",
  },
  {
    icon: <FaCogs />,
    title: "AI-Powered Screening",
    description: "Efficient, unbiased shortlisting using AI tools for higher accuracy and speed.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Campus & Fresher Drives",
    description: "Structured bulk recruitment for immediate fulfillment of entry-level and fresh talent roles.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Role-Specific Assessments",
    description: "Tailored technical, aptitude, and behavioral evaluations for precise candidate fit.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Flexible Hiring Models",
    description: "Choose from managed services, dedicated teams, or hybrid engagement options.",
  },
];

// Section 4 – How It Works (Process Workflow) (Updated Content)
const processSteps = [
  {
    title: "1. Requirement Gathering",
    description: "Define role types, hiring numbers, skill matrices, and location specifics.",
    icon: FaSearch,
  },
  {
    title: "2. Talent Sourcing",
    description:
      "Leverage job portals, campus networks, and SkillzRevo’s proprietary database for scale.",
    icon: FaDatabase,
  },
  {
    title: "3. Screening & Assessment",
    description:
      "AI-driven aptitude, technical, and in-depth behavioral testing for accurate shortlisting.",
    icon: FaFilter,
  },
  {
    title: "4. Interview Coordination",
    description: "Streamlined scheduling, virtual interview setup, and candidate management.",
    icon: FaCalendarAlt,
  },
  {
    title: "5. Onboarding & Reporting",
    description: "Offer rollout, joining management, and real-time MIS tracking for transparency.",
    icon: FaRocket,
  },
];

// Section 5 – Engagement Models (Updated Content)
const engagementModels = [
  {
    title: "End-to-End Bulk Hiring (Managed Model)",
    description:
      "We handle the entire process—sourcing, screening, selection, and onboarding—on behalf of your HR team for complete efficiency.",
    icon: <FaUsers className="text-4xl" />,
  },
  {
    title: "Shared Recruitment Model",
    description:
      "Our specialist bulk hiring team works alongside your internal recruiters to accelerate hiring velocity during peak demand.",
    icon: <FaExchangeAlt className="text-4xl" />,
  },
  {
    title: "Campus & Fresher Drives",
    description:
      "Full management of pan-India campus recruitment campaigns, including assessments, coordination, and pre-joining engagement.",
    icon: <FaGraduationCap className="text-4xl" />,
  },
  {
    title: "Offshore / Remote Bulk Hiring",
    description:
      "Hire large-scale remote-ready or offshore teams efficiently using SkillzRevo’s robust virtual recruitment infrastructure.",
    icon: <FaCloud className="text-4xl" />,
  },
];

// Section 7 – Roles We Hire For (Updated Content)
const highValueRoles = [
  {
    category: "Technology & IT Roles",
    icon: <FaCode />,
    positions: [
      "Software Developers",
      "Data Analysts",
      "QA Engineers",
      "Technical Support Associates",
      "Cloud, DevOps & Network Engineers",
    ],
  },
  {
    category: "Non-Tech & Functional Roles",
    icon: <FaBriefcase />,
    positions: [
      "Sales & Marketing Executives",
      "Customer Support & BPO Associates",
      "HR & Operations Coordinators",
      "Finance & Accounts Assistants",
      "Supply Chain & Logistics Staff",
    ],
  },
];

// Section 8 – Industries We Serve (Updated Content)
const industries = [
  { name: "IT & ITeS", icon: <FaCode /> },
  { name: "BFSI & FinTech", icon: <FaBuilding /> },
  { name: "E-commerce & Retail", icon: <FaShoppingCart /> },
  { name: "Manufacturing & Engineering", icon: <FaIndustry /> },
  { name: "Telecom & Media", icon: <FaHeadset /> },
  { name: "Healthcare & Pharma", icon: <FaHospital /> },
  { name: "EdTech & Startups", icon: <FaGraduationCap /> },
  { name: "Logistics & Supply Chain", icon: <FaProjectDiagram /> },
];

// Section 9 – Business Benefits (Updated Content)
const benefits = [
  {
    icon: <FaBolt />,
    title: "Accelerated Hiring Timelines",
    description: "Deploy large teams in record time to meet rapid business demands and project deadlines.",
  },
  {
    icon: <FaChartLine />,
    title: "Optimized Recruitment Costs",
    description: "Achieve cost-effective bulk hiring with our managed services and efficient processes.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Consistent Quality Standards",
    description: "Ensure uniform assessments and screening across all regions and role types.",
  },
  {
    icon: <FaSitemap />,
    title: "Scalable & Flexible",
    description: "Ramp up or scale down resources instantly as per changing business or project requirements.",
  },
  {
    icon: <FaHandshake />,
    title: "Seamless Partnership",
    description: "Guaranteed end-to-end coordination, minimizing the administrative load on your internal HR team.",
  },
];

const BulkHiringPage = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.9]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* Hero Section (Header) */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative h-full py-16 md:py-48 flex items-center justify-center bg-[#1d8fff] text-white"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Bulk Hiring Solutions – Hire at Scale with Speed and Precision
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto"
          >
            End-to-end high-volume recruitment services to build your workforce faster, smarter, and more efficiently.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#1d8fff] rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Start a Consultation
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#1d8fff] transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
              <FaDownload /> Request Proposal
            </button>
          </div>
        </div>
      </motion.section>

      {/* Section 1 – Introduction */}
      <AnimatedSection className="py-20 px-4 max-w-6xl mx-auto bg-white">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Scaling Your Workforce Without Compromise
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            In a fast-paced business world, scaling teams quickly without compromising on quality is a major challenge. Traditional hiring often falls short in speed, consistency, and talent quality.
          </p>
          <p className="text-xl font-semibold text-[#ff6900] mt-4 max-w-4xl mx-auto  gap-2">
            SkillzRevo Talent’s <span className="font-bold">Bulk Hiring Solutions</span> help enterprises, startups, and global organizations recruit large numbers of qualified candidates efficiently and cost-effectively, combining <span className="font-bold">technology-driven screening</span> and <span className="font-bold">pan-India outreach</span>.
          </p>
        </div>
      </AnimatedSection>

      {/* Section 2 – What is Bulk Hiring? */}
      <AnimatedSection className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              The Power of Managed High-Volume Recruitment
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-bold">Bulk Hiring</span> refers to the process of recruiting a large number of candidates within a defined timeframe to meet business expansion, seasonal peaks, or project-based demands.
            </p>
            <p className="text-lg text-gray-700 mb-4 border-l-4 border-[#1d8fff] pl-4 font-semibold">
              We manage the entire hiring cycle—from requirement planning to onboarding—deploying <span className="font-bold">data-driven tools, AI assessments, and a trained recruitment team</span> to deliver ready-to-join employees at scale.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1542744095-23c2d3345330?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Image for a mass assessment/office setup
              alt="Bulk Hiring Infographic"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Section 3 – Key Highlights */}
      <AnimatedSection className="py-20 px-4 md:px-10 max-w-8xl mx-auto bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Why Our Bulk Hiring Program Stands Out
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#1d8fff] flex flex-col justify-between h-full"
            >
              <div className="flex flex-col items-center gap-4 mb-4">
                <div className="text-5xl text-[#1d8fff] bg-blue-100 rounded-full p-4 flex-shrink-0">{item.icon}</div>
                <h3 className="text-xl text-center font-bold text-gray-900">{item.title}</h3>
              </div>
              <p className="text-gray-700 text-center">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Section 4 – How It Works (Process Workflow) */}
      <AnimatedSection className="py-20 bg-gradient-to-tl from-orange-400 via-orange-600 to-orange-400">
        <div className="container mx-auto flex flex-col md:items-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold md:text-center text-white mb-10">
            Our 5-Step Bulk Hiring Process Workflow
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
      <AnimatedSection className="py-20 px-4 md:px-10 max-w-8xl mx-auto bg-gray-50">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Flexible Bulk Hiring Engagement Models
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagementModels.map((model, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#ff6900] flex flex-col items-start h-full"
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

      {/* Section 6 – Why Partner with SkillzRevo Talent? (Updated Content) */}
      <AnimatedSection className="py-20 px-4 bg-[#1d8fff] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Key Differentiators & Business Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Differentiators Column */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4 border-b-2 pb-2">Our Strategic Differentiators</h3>
              {[
                "AI-Driven Screening Tools: Faster, higher-quality shortlisting.",
                "100+ Partner Institutions: Access to diverse, skilled graduates.",
                "Dedicated Recruitment Teams: Scale up hiring capacity instantly.",
                "Data-Driven Process Management: Transparent, real-time reporting.",
                "Multi-Location Capability: Consistent delivery across India.",
                "Strong Employer Branding Support: Boost candidate engagement & retention.",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCogs className="text-xl flex-shrink-0" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
            {/* Business Benefits Column (Mirroring Section 9 for consistency) */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4 border-b-2 pb-2">Resulting Business Benefits</h3>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  {benefit.icon && <div className="text-xl flex-shrink-0">{benefit.icon}</div>}
                  <p className="text-lg">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Section 7 – Roles We Hire For */}
      <AnimatedSection className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Roles We Staff at Scale
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {highValueRoles.map((role, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#ff6900]">
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

      {/* Section 8 – Industries We Serve */}
      <AnimatedSection className="py-20 px-4 bg-[#ff6900] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Industries We Deliver Bulk Hiring Solutions For
          </h2>
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

      {/* Section 9 – Business Benefits (Updated Content) */}
      <AnimatedSection className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900">
            Measurable Impact of Managed Bulk Hiring
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center h-full"
              >
                <div className="text-4xl text-[#1d8fff] mb-3">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-md text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Section 10 – Call to Action (CTA) */}
      <AnimatedSection className="py-20 px-4 bg-[#1d8fff] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Build Your Workforce at Scale with SkillzRevo Talent
          </h2>
          <p className="text-xl mb-10">
            Accelerate high-volume recruitment with our AI-powered, process-driven Bulk Hiring Solutions designed for speed, efficiency, and quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#1d8fff] rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Schedule a Consultation
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#1d8fff] transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
              <FaDownload /> Request Bulk Hiring Proposal
            </button>
          </div>
        </div>
      </AnimatedSection>
      <FAQAccordion faqs={faqs} />
    </div>
  );
};

export default BulkHiringPage;