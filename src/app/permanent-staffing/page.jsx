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
  FaBolt,
  FaBriefcase,
  FaHourglassHalf,
  FaProjectDiagram,
  FaExchangeAlt,
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
    q: "1. How is Permanent Staffing different from Contract Staffing?",
    a: "Permanent staffing is the recruitment of **full-time employees** who join your company's payroll and long-term structure. Contract staffing involves hiring temporary or project-based professionals who remain on our payroll.",
  },
  {
    q: "2. What industries do you specialize in for Permanent Staffing?",
    a: (
      <ul className="list-disc pl-6">
        <li>Information Technology (IT) & Software</li>
        <li>BFSI (Banking, Financial Services, and Insurance)</li>
        <li>Healthcare & Pharmaceuticals</li>
        <li>Manufacturing & Engineering</li>
        <li>E-commerce & Retail</li>
        <li>EdTech & Startups</li>
      </ul>
    ),
  },
  {
    q: "3. How fast can you close permanent positions?",
    a: "With AI-driven sourcing, a vast pre-screened talent pool, and a streamlined process, we typically reduce the time-to-hire by up to **40%** compared to traditional methods.",
  },
  {
    q: "4. How do you ensure candidates are a good cultural fit?",
    a: (
      <p>
        We use a multi-layered screening process that includes behavioral
        interviews, psychometric assessments, and detailed cultural fit
        analysis, ensuring the candidate's values align with your organization's
        mission.
      </p>
    ),
  },
  {
    q: "5. What types of roles do you recruit for?",
    a: "We recruit across all levels, from entry-level specialists to C-suite executives, including specialized roles in Engineering, Technology, Finance, Sales, and Operations.",
  },
  {
    q: "6. Do you offer guarantees on permanent placements?",
    a: "Yes, we provide a standard replacement guarantee period. If a placed candidate leaves within the specified time frame, we commit to finding a suitable replacement at no additional fee.",
  },
  {
    q: "7. What are your different engagement models?",
    a: "We offer **Exclusive Hiring**, **Retainer**, **Contingency**, and **Hybrid** models to align with your volume, urgency, and resource preferences.",
  },
  {
    q: "8. Can you help with niche or leadership hiring?",
    a: "Absolutely. We have specialized executive search teams dedicated to identifying and attracting senior leadership and professionals with highly niche, in-demand skill sets.",
  },
  {
    q: "9. How is your pricing structured for permanent hiring?",
    a: (
      <p>
        Our fee structure is transparent and typically based on a percentage of
        the placed candidate's annual compensation, varying based on the
        difficulty and volume of the roles.
      </p>
    ),
  },
  {
    q: "10. What kind of post-hiring support do you provide?",
    a: (
      <p>
        We provide post-placement follow-ups for both the client and the
        candidate to ensure a smooth transition and integration into the new
        role and organizational culture.
      </p>
    ),
  },
];

const PermanentStaffingPage = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.9]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  // Section 7 – Engagement Models (Reused structure from 'Solutions')
  const solutions = [
    {
      title: "Exclusive Hiring Model",
      description:
        "Dedicated recruiters focus solely on your roles, ensuring faster closure and better quality candidates.",
      icon: <FaUsers className="text-4xl" />,
    },
    {
      title: "Retainer Model",
      description:
        "Ideal for ongoing, high-volume, or mission-critical positions. Guarantees focused attention and resources.",
      icon: <FaHandshake className="text-4xl" />,
    },
    {
      title: "Contingency Model",
      description:
        "A risk-free option where you only pay a fee upon the successful placement of a candidate.",
      icon: <FaCheckCircle className="text-4xl" />,
    },
    {
      title: "Hybrid Model",
      description:
        "Combining our external recruitment expertise with your internal HR team for maximum efficiency.",
      icon: <FaExchangeAlt className="text-4xl" />,
    },
    {
      title: "Executive Search",
      description:
        "Confidential and strategic identification and placement of C-level and senior leadership talent.",
      icon: <FaChartLine className="text-4xl" />,
    },
  ];

  // Section 4 – Why Choose SkillzRevo Talent? (Reused structure from 'Differentiators')
  const differentiators = [
    "Vast pre-screened talent pool for immediate access to quality candidates",
    "AI-driven tools and methodologies lead to faster hiring cycles",
    "Industry-specialized recruiters with deep domain knowledge (IT, BFSI, Healthcare, etc.)",
    "Quality over quantity approach focused on long-term retention and fit",
    "Data-driven recruitment analytics for transparent decision-making",
    "Cost-effective, scalable hiring solutions tailored to growth stages",
    "Employer branding support to attract premium candidates",
  ];

  // Section 3 – Our Approach to Permanent Staffing (Reused structure from 'Process Steps')
  const processSteps = [
    {
      title: "Understanding Your Needs",
      description:
        "Define job requirements, skills, and organizational culture in detail.",
      icon: FaSearch,
    },
    {
      title: "Talent Sourcing",
      description:
        "Leveraging AI tools, portals, referrals, and exclusive databases to find the right talent.",
      icon: FaDatabase,
    },
    {
      title: "Screening & Assessment",
      description:
        "Technical tests, psychometric profiling, and in-depth cultural fit analysis.",
      icon: FaClipboardCheck,
    },
    {
      title: "Interviews & Coordination",
      description:
        "End-to-end scheduling, communication, and candidate preparation.",
      icon: FaCalendarAlt,
    },
    {
      title: "Offer & Onboarding",
      description:
        "Salary negotiation, offer rollout, and support for a smooth joining process.",
      icon: FaHandshake,
    },
    {
      title: "Post-Placement Follow-up",
      description:
        "Engaging with candidate and client to ensure seamless integration and satisfaction.",
      icon: FaHeadset,
    },
  ];

  // Section 7 - Engagement Models (Reused structure from 'Roles' but content is redundant with 'Solutions' - keeping 'Solutions' for display)
  // Re-purposing this section to display high-value roles we staff for, as a secondary feature.
  const highValueRoles = [
    {
      category: "IT & Digital Leadership",
      icon: <FaCode />,
      positions: ["CTO/CIO", "VP of Engineering", "Product Managers"],
    },
    {
      category: "Finance & BFSI",
      icon: <FaBuilding />,
      positions: ["Financial Analysts", "Risk Managers", "Audit Professionals"],
    },
    {
      category: "Sales & Marketing",
      icon: <FaChartLine />,
      positions: [
        "Sales Directors",
        "CMO/VP of Marketing",
        "Key Account Managers",
      ],
    },
    {
      category: "Operations & HR",
      icon: <FaIndustry />,
      positions: [
        "Operations Heads",
        "Supply Chain Directors",
        "HR Business Partners",
      ],
    },
  ];

  // Section 5 – Industries We Serve (Reused structure from 'Industries')
  const industries = [
    { name: "IT & Software", icon: <FaCode /> },
    { name: "BFSI", icon: <FaBuilding /> },
    { name: "Healthcare & Pharma", icon: <FaHospital /> },
    { name: "Manufacturing & Engineering", icon: <FaIndustry /> },
    { name: "E-commerce & Retail", icon: <FaShoppingCart /> },
    { name: "Telecom & Media", icon: <FaCloud /> },
    { name: "EdTech & Startups", icon: <FaGraduationCap /> },
    { name: "Consulting & Analytics", icon: <FaBrain /> },
  ];

  // Section 6 – Benefits of Partnering with Us (Reused structure from 'Benefits')
  const benefits = [
    "Hire the best, pre-qualified talent that drives long-term value",
    "Reduce hiring time by up to 40% with our streamlined, tech-powered process",
    "Improve candidate quality and cultural fit for higher retention rates",
    "Scale your workforce seamlessly during periods of expansion or restructuring",
    "End-to-end recruitment support, minimizing administrative burden on your HR team",
    "Access to passive, high-calibre candidates unavailable on job portals",
  ];

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* Hero Section (Updated Content) */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative h-full py-16 md:py-48 flex items-center justify-center bg-[#1d8fff] text-white"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Hire Permanent Talent that Drives Long-Term Success
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto"
          >
            SkillzRevo Talent helps organizations find, attract, and retain
            full-time employees who fit your culture, values, and business
            goals.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PopupForm
              ctaTitle="Get Started"
              pageUrl="/permanent-staffing"
              className="px-8 py-4 bg-white !text-[#1d8fff] rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              service="Permanent Staffing"
            />
            <PopupForm
              ctaTitle="Download Brochure"
              pageUrl="/permanent-staffing"
              className="px-8 py-4 bg-[#ff6900] !text-[#fff] rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              service="Permanent Staffing"
            />
          </div>
        </div>
      </motion.section>

      {/* Section 1 – Introduction (Updated Content) */}
      <AnimatedSection className="py-20 px-4 max-w-6xl mx-auto bg-white">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Your Strategic Partner for Full-Time Hiring
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            At SkillzRevo Talent, we understand that your business success
            depends on hiring the right people. Our{" "}
            <span className="font-semibold">Permanent Staffing Solutions</span>{" "}
            are tailored to ensure you get high-performing, culturally aligned
            professionals for crucial full-time roles.
          </p>
          <p className="text-xl font-semibold text-[#ff6900] mt-4 max-w-4xl mx-auto  gap-2">
            With deep industry expertise, an extensive talent network, and
            AI-powered recruitment processes, we deliver{" "}
            <span className="font-semibold">
              faster, smarter, and cost-effective
            </span>{" "}
            staffing solutions.
          </p>
        </div>
      </AnimatedSection>

      {/* Section 2 – What is Permanent Staffing? (Updated Content) */}
      <AnimatedSection className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              What is Permanent Staffing?
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Permanent Staffing is the essential process of hiring{" "}
              <span className="font-semibold">full-time employees</span> who
              become a core part of your organization's team, culture, and
              payroll. These individuals are key to achieving long-term
              strategic goals and maintaining institutional knowledge.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              As your strategic hiring partner, SkillzRevo Talent manages the
              entire lifecycle — from sourcing and screening to negotiations and
              onboarding — so you can focus on{" "}
              <span className="font-semibold">growth</span> while we handle the
              recruitment complexity.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Updated Image for professional hiring
              alt="Permanent Staffing"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Section 7 – Engagement Models (Updated Content/Structure reused from 'Solutions') */}
      <AnimatedSection className="py-20 px-4 md:px-10 max-w-8xl mx-auto bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Our Permanent Staffing Engagement Models
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

      {/* Section 4 – Why Choose SkillzRevo Talent? (Updated Content) */}
      <AnimatedSection className="py-20 px-4 bg-[#1d8fff] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            The SkillzRevo Talent Advantage
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

      {/* Section 3 – Our Approach to Permanent Staffing (Updated Content) */}
      <AnimatedSection className="py-20 bg-gradient-to-tl from-orange-400 via-orange-600 to-orange-400">
        <div className="container mx-auto flex flex-col md:items-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold md:text-center text-white mb-10">
            Our 6-Step Permanent Staffing Process
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
                  {index < processSteps.length - 1 && (
                    <div className="absolute bottom-0 h-full w-1 bg-blue-200 left-6 md:hidden"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* High Value Roles (Using the 'Roles' structure for a secondary feature) */}
      <AnimatedSection className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            High-Value Roles We Staff
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highValueRoles.map((role, index) => (
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

      {/* Section 5 – Industries We Serve (Updated Content) */}
      <AnimatedSection className="py-20 px-4 bg-[#ff6900] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Industries We Serve
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

      {/* Section 6 – Benefits of Partnering with Us (Updated Content) */}
      <AnimatedSection className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900">
            Benefits of Partnering for Permanent Staffing
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4"
              >
                <FaBolt className="text-3xl text-[#1d8fff] flex-shrink-0 mt-1" />{" "}
                {/* Icon for Speed/Efficiency */}
                <p className="text-lg text-gray-700 text-left">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Section 9 – Call-to-Action (CTA) (Updated Content) */}
      <AnimatedSection className="py-20 px-4 bg-[#ff6900] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Find Your Next Star Employee with SkillzRevo Talent
          </h2>
          <p className="text-xl mb-10">
            From niche hires to high-volume recruitment, we deliver talent that
            drives success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PopupForm
              ctaTitle="Get Started"
              pageUrl="/permanent-staffing"
              className="px-8 py-4 bg-white !text-[#1d8fff] rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              service="Permanent Staffing"
            />
            <PopupForm
              ctaTitle="Download Brochure"
              pageUrl="/permanent-staffing"
              className="px-8 py-4 bg-[#ff6900] !text-[#fff] rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              service="Permanent Staffing"
            />
          </div>
        </div>
      </AnimatedSection>
      <FAQAccordion faqs={faqs} />
    </div>
  );
};

export default PermanentStaffingPage;
