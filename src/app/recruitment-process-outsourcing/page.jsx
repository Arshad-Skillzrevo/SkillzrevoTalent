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
  FaChartBar, // New Icon for Analytics & Reporting
  FaUsersCog, // New Icon for Hybrid RPO / dedicated teams
  FaTag, // New Icon for Cost/Pricing
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

// Section 10 - FAQs (Updated Content)
const faqs = [
  {
    q: "1. What is Recruitment Process Outsourcing (RPO)?",
    a: "RPO is a strategic partnership where SkillzRevo Talent takes ownership of all or part of your recruitment lifecycle—from talent sourcing to onboarding. We act as an extension of your HR team, providing expertise and technology to ensure scalable, high-quality hiring.",
  },
  {
    q: "2. How does SkillzRevo Talent’s RPO model work?",
    a: (
      <p>
        We begin with **Workforce Planning** to define needs, then execute
        **Multi-channel Sourcing**, followed by **AI-based Screening and Assessment**,
        **Interview Management**, and finally, **Offer & Onboarding**. The entire process
        is tracked with detailed **Analytics & Reporting** for transparency.
      </p>
    ),
  },
  {
    q: "3. What are the key benefits of RPO?",
    a: (
      <ul className="list-disc pl-6">
        <li>Reduce **time-to-hire** by up to 40%</li>
        <li>Lower overall recruitment **costs** by 30–50%</li>
        <li>Improve **quality of hire** with specialized assessments</li>
        <li>Ensure workforce **scalability**</li>
        <li>Enhance your **employer brand**</li>
      </ul>
    ),
  },
  {
    q: "4. What are the different RPO engagement models you offer?",
    a: "We offer four primary models: **End-to-End RPO** (full lifecycle ownership), **Project-Based RPO** (for specific campaigns), **Hybrid RPO** (combining internal and external resources), and **On-Demand RPO** (pay-as-you-go recruiter support).",
  },
  {
    q: "5. Do you handle recruitment technology as part of the RPO?",
    a: "Yes. Our RPO services include leveraging and integrating advanced recruitment technology, such as our proprietary **ATS**, AI screening tools, and analytics platforms, ensuring a modern and efficient process.",
  },
  {
    q: "6. Can RPO help with employer branding?",
    a: "Absolutely. We actively support your employer branding efforts by crafting compelling job descriptions, managing career pages, and ensuring a positive, professional candidate experience that strengthens your market reputation.",
  },
  {
    q: "7. Which industries do your RPO services cover?",
    a: "Our RPO services are tailored for high-growth sectors including IT & Technology, BFSI, Healthcare & Pharma, Manufacturing, Retail, E-commerce, and more.",
  },
  {
    q: "8. Is RPO only suitable for large companies?",
    a: "No. While End-to-End RPO suits large-scale hiring, our **Project-Based** and **On-Demand RPO** models are perfectly suited for startups and SMEs needing quick, focused, and scalable recruitment support.",
  },
  {
    q: "9. How do you measure RPO success?",
    a: "We track crucial metrics like **Time-to-Hire**, **Cost-per-Hire**, **Quality of Hire**, **Source of Hire**, and **Candidate Satisfaction** through regular transparent analytics and reporting.",
  },
  {
    q: "10. How do I start a partnership with SkillzRevo RPO?",
    a: (
      <p>
        Simply reach out via the "Schedule a Free Consultation" button. We will
        analyze your current hiring challenges and propose a customized RPO model
        and strategy tailored to your specific goals.
      </p>
    ),
  },
];


const ITRecruitmentPage = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.9]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  // Section 3 – Our RPO Service Models (Updated Content/Structure reused from 'Solutions')
  const solutions = [
    {
      title: "End-to-End RPO",
      description:
        "Full ownership of the recruitment lifecycle: planning, sourcing, screening, interviewing, and onboarding. Ideal for large-scale, continuous hiring.",
      icon: <FaRocket className="text-4xl" />, // FaRocket for full journey
    },
    {
      title: "Project-Based RPO",
      description:
        "Short-term RPO for specific hiring drives (e.g., new product launch). Quick ramp-up of dedicated resources for focused goals.",
      icon: <FaProjectDiagram className="text-4xl" />, // FaProjectDiagram for project focus
    },
    {
      title: "Hybrid RPO",
      description:
        "Flexible collaboration where our team complements your in-house HR for specific functions, niche roles, or geographical needs.",
      icon: <FaUsersCog className="text-4xl" />, // FaUsersCog for collaboration/hybrid
    },
    {
      title: "On-Demand RPO",
      description:
        "Pay-as-you-go model. Immediate access to highly specialized recruiters or teams for urgent or fluctuating needs.",
      icon: <FaClock className="text-4xl" />, // FaClock for speed/on-demand
    },
    {
      title: "Recruitment Technology & Analytics",
      description:
        "Integration of advanced ATS, AI screening, and data analytics to optimize decision-making and performance.",
      icon: <FaBrain className="text-4xl" />, // FaBrain for technology/AI
    },
  ];

  // Section 4 – Why Choose SkillzRevo RPO? (Updated Content/Structure reused from 'Differentiators')
  const differentiators = [
    "Faster Time-to-Hire through AI-driven sourcing and screening technologies",
    "Cost Optimization with efficient processes and lower Cost-per-Hire metrics",
    "Scalable Solutions that rapidly adjust to changing hiring demands and business growth",
    "Access to Top Talent from exclusive, curated networks and specialized headhunting",
    "Dedicated Recruitment Teams with deep industry specialization and domain knowledge",
    "Advanced Recruitment Technology (ATS, AI screening, analytics) integration",
    "Employer Branding Support to attract the best passive candidates in the market",
  ];

  // Section 5 – Our RPO Process Workflow (Updated Content/Structure reused from 'Process Steps')
  const processSteps = [
    {
      title: "1. Workforce Planning",
      description: "Define hiring strategy, forecasts, volume, and required skill profiles.",
      icon: FaChartLine,
    },
    {
      title: "2. Talent Sourcing",
      description:
        "Multi-channel sourcing across portals, social media, referrals, and active headhunting.",
      icon: FaSearch,
    },
    {
      title: "3. Screening & Assessment",
      description:
        "AI-based resume screening, technical/skill testing, and psychometric evaluations.",
      icon: FaClipboardCheck,
    },
    {
      title: "4. Interview Management",
      description: "End-to-end scheduling, communication, and real-time feedback loop coordination.",
      icon: FaCalendarAlt,
    },
    {
      title: "5. Offer & Onboarding",
      description: "Negotiation, documentation, compliance checks, and smooth candidate joining.",
      icon: FaHandshake,
    },
    {
      title: "6. Analytics & Reporting",
      description: "Transparent metrics on Time-to-Hire, Cost-per-Hire, and Quality of Hire.",
      icon: FaChartBar,
    },
  ];

  // Section 6 – Industries We Serve (Updated Content/Structure reused from 'Industries')
  const industries = [
    { name: "IT & Technology", icon: <FaCode /> },
    { name: "BFSI & Consulting", icon: <FaBuilding /> },
    { name: "Healthcare & Pharma", icon: <FaHospital /> },
    { name: "Manufacturing & Engineering", icon: <FaIndustry /> },
    { name: "Retail & E-commerce", icon: <FaShoppingCart /> },
    { name: "Telecom & Media", icon: <FaCloud /> },
    { name: "EdTech & Startups", icon: <FaGraduationCap /> },
    { name: "Consumer Goods", icon: <FaBriefcase /> }, // Replaced one for diversity
  ];

  // Section 7 – Key Benefits of Partnering (Updated Content/Structure reused from 'Benefits')
  const benefits = [
    "Reduce time-to-hire by up to 40% with optimized process pipelines",
    "Lower recruitment costs by 30–50% by eliminating fixed overheads and vacancies",
    "Improve quality of hire using advanced assessment and cultural fit tools",
    "Build a scalable, future-ready workforce that adapts instantly to market shifts",
    "Enhance candidate experience and strengthen your external employer brand",
    "Gain access to recruitment market intelligence and performance analytics",
  ];

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* Header Section (Hero) (Updated Content) */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative h-full py-16 md:py-48 flex items-center justify-center bg-[#1d8fff] text-white"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Recruitment Process Outsourcing (RPO) That Transforms Talent Acquisition
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto"
          >
            End-to-end hiring solutions to scale your workforce efficiently and cost-effectively.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#1d8fff] rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Get Started Today
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#1d8fff] transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
              <FaDownload /> Download RPO Brochure
            </button>
          </div>
        </div>
      </motion.section>

      {/* Section 1 — Introduction (Updated Content) */}
      <AnimatedSection className="py-20 px-4 max-w-6xl mx-auto bg-white">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            The Strategic Advantage of RPO
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            SkillzRevo Talent delivers <span className="font-semibold">end-to-end Recruitment Process Outsourcing (RPO) solutions</span> designed to streamline your hiring process, reduce costs, and improve the quality of talent acquisition.
          </p>
          <p className="text-xl font-semibold text-[#ff6900] mt-4 max-w-4xl mx-auto flex items-center justify-center gap-2">
            Whether you’re expanding rapidly or seeking niche skills, our RPO services help you scale hiring efficiently while focusing on your core business objectives.
          </p>
        </div>
      </AnimatedSection>

      {/* Section 2 — What is RPO? (Updated Content) */}
      <AnimatedSection className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              What is RPO and Why Do You Need It?
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold">Recruitment Process Outsourcing (RPO)</span> is a strategic partnership where SkillzRevo Talent takes ownership of all or part of your recruitment lifecycle — from talent sourcing to onboarding.
            </p>
            <p className="text-lg text-gray-700 mb-4 border-l-4 border-[#1d8fff] pl-4">
                Acting as an <span className="font-semibold">extension of your HR team</span>, we bring industry expertise, advanced recruitment technology, and data-driven strategies to ensure scalable, high-quality hiring solutions across all levels.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Image representing data/strategy/flow
              alt="RPO Workflow"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Section 3 — Our RPO Service Models (Updated Content/Structure reused from 'Solutions') */}
      <AnimatedSection className="py-20 px-4 md:px-10 max-w-8xl mx-auto bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Flexible RPO Service Models
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

      {/* Section 4 — Why Choose SkillzRevo RPO? (Updated Content) */}
      <AnimatedSection className="py-20 px-4 bg-[#1d8fff] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Key Differentiators of SkillzRevo RPO
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

      {/* Section 5 — Our RPO Process Workflow (Updated Content) */}
      <AnimatedSection className="py-20 bg-gradient-to-tl from-orange-400 via-orange-600 to-orange-400">
        <div className="container mx-auto flex flex-col md:items-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold md:text-center text-white mb-10">
            Our 6-Step RPO Process Workflow
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



      {/* Section 7 — Key Benefits of Partnering (Updated Content/Structure reused from 'Benefits') */}
      <AnimatedSection className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900">
            Key Benefits of Partnering with SkillzRevo RPO
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4"
              >
                <FaBolt className="text-3xl text-[#1d8fff] flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700 text-left">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>


            {/* Section 6 — Industries We Serve (Updated Content) */}
      <AnimatedSection className="py-20 px-4 bg-[#ff6900] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Industries We Serve with RPO
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

      {/* Section 8 — Client Testimonials (Re-purposing the 'Roles' section for testimonials for structural consistency) */}
      <AnimatedSection className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#ff6900]">
              <div className="text-4xl bg-blue-200 p-4 rounded-full w-fit text-[#1d8fff] mb-4"><FaUsers /></div>
              <p className="text-gray-700 italic text-xl mb-4">
                “SkillzRevo Talent’s RPO model transformed our recruitment strategy — we saw faster hiring, better talent quality, and significant cost savings.”
              </p>
              <h3 className="text-lg font-bold text-gray-900">
                - HR Head, Leading IT Company
              </h3>
            </div>
            {/* Testimonial 2 (Added a second one for the grid layout) */}
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#1d8fff]">
              <div className="text-4xl bg-blue-200 p-4 rounded-full w-fit text-[#1d8fff] mb-4"><FaChartLine /></div>
              <p className="text-gray-700 italic text-xl mb-4">
                “Their dedicated team became a seamless extension of our operations. The data reporting provided unmatched transparency and control over our workforce planning.”
              </p>
              <h3 className="text-lg font-bold text-gray-900">
                - VP of Operations, BFSI Client
              </h3>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Section 9 – Call-to-Action (CTA) (Updated Content) */}
      <AnimatedSection className="py-20 px-4 bg-[#ff6900] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transform Your Recruitment Strategy with SkillzRevo Talent
          </h2>
          <p className="text-xl mb-10">
            Hire smarter, faster, and better. Stop managing processes and start acquiring talent that drives growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#1d8fff] rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Schedule a Free Consultation
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#1d8fff] transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
              <FaDownload /> Download RPO Service Brochure
            </button>
          </div>
        </div>
      </AnimatedSection>
      <FAQAccordion faqs={faqs} />
    </div>
  );
};

export default ITRecruitmentPage;