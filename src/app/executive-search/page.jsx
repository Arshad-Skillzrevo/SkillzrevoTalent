"use client";
import {
  Award,
  ArrowRight,
  TrendingUp,
  Clock,
  CheckCircle2,
  Users,
  Briefcase,
  Target, // New icon for Executive Search/Precision theme
} from "lucide-react";
import { SiGooglegemini } from "react-icons/si";

// Mock implementation for external components/hooks (Replace with your actual imports)
const useMousePosition = () => ({ x: 0, y: 0 });
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaUserTie,
  FaLock,
  FaClipboardList,
  FaGlobe,
  FaBrain,
  FaHandshake,
  FaSearch,
  FaMapMarkedAlt,
  FaComments,
  FaClipboardCheck,
  FaRocket,
  FaBriefcase,
  FaUserSecret,
  FaProjectDiagram,
  FaCode,
  FaBuilding,
  FaIndustry,
  FaChartLine,
  FaHospital,
  FaShoppingCart,
  FaGraduationCap,
  FaBolt,
  FaCheckCircle,
  FaBullseye,
  FaHeadset,
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

// FAQ Section
const faqs = [
  {
    q: "1. What is Leadership & Executive Search?",
    a: "Leadership & Executive Search is a specialized recruitment service that focuses on identifying, engaging, and hiring senior-level professionals — such as CXOs, VPs, and Directors — who can drive organizational strategy, growth, and transformation.",
  },
  {
    q: "2. How is Executive Search different from traditional recruitment?",
    a: "Traditional recruitment focuses on filling mid or entry-level positions quickly, whereas Executive Search involves a strategic, research-driven, and highly confidential process to identify leaders who align with an organization’s long-term vision, culture, and business objectives.",
  },
  {
    q: "3. What levels of leadership positions does SkillzRevo Talent recruit for?",
    a: (
      <ul className="list-disc pl-6 space-y-2">
        <li>CEO, COO, CTO, CFO, CHRO, and CMO positions</li>
        <li>VPs and Directors across functions</li>
        <li>Business Heads, Country Heads, and Practice Leaders</li>
      </ul>
    ),
  },
  {
    q: "4. Which industries does SkillzRevo Talent serve?",
    a: "We cater to a diverse range of industries, including: IT & Technology, BFSI, Manufacturing, Consulting, Healthcare, FMCG, Retail, EdTech, Telecom, Energy, and Analytics-driven enterprises.",
  },
  {
    q: "5. How long does the Executive Search process take?",
    a: "The duration depends on the role complexity, seniority, and market availability. Typically, a complete executive search engagement takes 4 to 8 weeks, including market mapping, candidate evaluation, and final onboarding.",
  },
  {
    q: "6. How does SkillzRevo ensure confidentiality during the search?",
    a: "All executive searches are handled with strict confidentiality. We use discreet outreach methods, non-disclosure agreements, and secure communication channels to protect both client and candidate identities throughout the process.",
  },
  {
    q: "7. What evaluation methods do you use to assess leadership candidates?",
    a: (
      <>
        <p>Our multi-layered assessment framework includes:</p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Behavioral and competency-based interviews</li>
          <li>Psychometric and leadership potential assessments</li>
          <li>Reference checks and reputation analysis</li>
          <li>Culture-fit and value alignment evaluation</li>
        </ul>
      </>
    ),
  },
  {
    q: "8. What are the engagement models available for Executive Search?",
    a: (
      <>
        <p>We offer three primary models:</p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>
            <strong>Retained Executive Search:</strong> For critical,
            high-impact roles.
          </li>
          <li>
            <strong>Confidential Search:</strong> For sensitive or replacement
            leadership needs.
          </li>
          <li>
            <strong>Strategic Talent Pipelining:</strong> Building long-term
            leadership succession pipelines.
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "9. Do you provide post-hiring support?",
    a: "Yes. We offer onboarding and integration support, ensuring that newly hired leaders smoothly adapt to your organization’s culture, expectations, and performance environment.",
  },
  {
    q: "10. How does SkillzRevo Talent identify suitable leaders for my organization?",
    a: "We leverage a mix of AI-driven analytics, leadership databases, and deep industry networks to identify, assess, and shortlist candidates who meet both technical and cultural requirements.",
  },
  {
    q: "11. Can SkillzRevo help with international leadership hiring?",
    a: "Absolutely. Our Executive Search network spans across India, the Middle East, Southeast Asia, and Europe, enabling cross-border hiring for global leadership roles.",
  },
  {
    q: "12. What makes SkillzRevo Talent’s approach unique?",
    a: "We combine human intelligence with data-driven insights, supported by our in-house analytics and consulting expertise. Our deep understanding of emerging technologies, digital leadership, and evolving business landscapes sets us apart.",
  },
  {
    q: "13. Do you help startups and mid-sized companies with leadership hiring?",
    a: "Yes. We work with startups, scale-ups, and mid-market enterprises to help them hire transformational leaders who can drive growth, set up new functions, or expand globally.",
  },
  {
    q: "14. What are your fees or pricing models for Executive Search?",
    a: "Our pricing is typically based on a retained or success-based model, depending on the role, complexity, and engagement terms. We ensure full transparency and value alignment throughout the engagement.",
  },
  {
    q: "15. Can you assist in leadership succession planning?",
    a: "Yes. We partner with organizations to design and implement leadership succession pipelines, identifying and grooming potential future leaders through proactive search and development programs.",
  },
  {
    q: "16. What if a hired leader leaves shortly after joining?",
    a: "We provide a replacement guarantee period (typically 3–6 months), ensuring risk-free hiring. In such cases, we conduct a replacement search at no additional cost.",
  },
  {
    q: "17. Do you conduct diversity and inclusion-focused leadership searches?",
    a: "Yes. We actively promote diversity hiring by ensuring a balanced slate of candidates across gender, background, and experience, fostering inclusive leadership teams.",
  },
  {
    q: "18. How do you ensure cultural fit between the candidate and our organization?",
    a: "Our consultants conduct cultural compatibility assessments and in-depth discussions with stakeholders to align candidate personalities, leadership styles, and values with your organizational culture.",
  },
  {
    q: "19. Can you support leadership hiring for confidential restructuring projects?",
    a: "Yes. Our team specializes in confidential and discreet searches, ideal for organizational restructuring, replacements, or stealth market entries.",
  },
  {
    q: "20. How can I get started with SkillzRevo Talent’s Executive Search services?",
    a: "Simply schedule a consultation with our leadership search experts or request a detailed brochure. Our team will connect with you to understand your needs and create a customized search plan.",
  },
];

const Page = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.9]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const mousePosition = useMousePosition();

  // Section 3 - Key Highlights
  const keyHighlights = [
    {
      title: "CXO-Level Expertise",
      description:
        "Hiring across CEO, CFO, CTO, CHRO, CMO, and Business Head roles.",
      icon: <FaUserTie className="text-4xl" />,
    },
    {
      title: "Confidential & Discreet Search",
      description: "Trusted process with complete data privacy.",
      icon: <FaLock className="text-4xl" />,
    },
    {
      title: "Behavioral & Competency Assessment",
      description: "Evaluate leadership potential and decision-making style.",
      icon: <FaClipboardList className="text-4xl" />,
    },
    {
      title: "Global & Industry-Specific Network",
      description: "Access to leaders across domains and regions.",
      icon: <FaGlobe className="text-4xl" />,
    },
    {
      title: "Data-Driven Insights",
      description: "AI-powered mapping for role-fit and leadership readiness.",
      icon: <FaBrain className="text-4xl" />,
    },
    {
      title: "Culture Fit Assurance",
      description:
        "Alignment with organizational values, vision, and long-term goals.",
      icon: <FaHandshake className="text-4xl" />,
    },
  ];

  // Section 4 - How It Works (Search Process)
  const processSteps = [
    {
      title: "Needs Analysis",
      description:
        "Define role expectations, KPIs, and leadership competencies.",
      icon: FaSearch,
    },
    {
      title: "Market Mapping",
      description: "Research and identify potential leaders across industries.",
      icon: FaMapMarkedAlt,
    },
    {
      title: "Candidate Engagement",
      description: "Discreet outreach, screening, and relationship building.",
      icon: FaComments,
    },
    {
      title: "Evaluation & Shortlisting",
      description:
        "Behavioral interviews, psychometric assessments, and references.",
      icon: FaClipboardCheck,
    },
    {
      title: "Onboarding Support",
      description: "Facilitate seamless transition and cultural integration.",
      icon: FaRocket,
    },
  ];

  // Section 5 - Engagement Models
  const engagementModels = [
    {
      category: "Retained Executive Search",
      icon: <FaBriefcase />,
      description:
        "For critical leadership positions with strategic importance.",
    },
    {
      category: "Confidential Search",
      icon: <FaUserSecret />,
      description: "Sensitive replacements or restructuring requirements.",
    },
    {
      category: "Strategic Talent Pipelining",
      icon: <FaProjectDiagram />,
      description:
        "Long-term leadership succession and bench-strength planning.",
    },
  ];

  // Section 6 - Why Partner with SkillzRevo Talent?
  const differentiators = [
    {
      differentiator: "Dedicated Leadership Search Team",
      benefit: "Access to senior-level networks & insights",
    },
    {
      differentiator: "Multi-Industry Expertise",
      benefit: "Cross-sectoral leadership benchmarking",
    },
    {
      differentiator: "AI & Human Intelligence Blend",
      benefit: "Faster, accurate, and bias-free hiring",
    },
    {
      differentiator: "Structured Evaluation Framework",
      benefit: "Data-backed leadership selection",
    },
    {
      differentiator: "Cultural Fit Assessment",
      benefit: "Smooth onboarding and sustained retention",
    },
    {
      differentiator: "Global Search Capability",
      benefit: "Leadership hiring across India & overseas markets",
    },
  ];

  // Section 7 - Roles We Specialize In
  const roles = [
    {
      category: "Executive & Leadership Roles",
      positions: [
        "Chief Executive Officer (CEO)",
        "Chief Technology Officer (CTO)",
        "Chief Financial Officer (CFO)",
        "Chief Human Resources Officer (CHRO)",
        "Chief Marketing Officer (CMO)",
        "Chief Data/AI Officer (CDAO)",
      ],
    },
    {
      category: "Senior Management Roles",
      positions: [
        "VP/AVP – Sales, Marketing, Engineering, Product",
        "General Manager / Country Head",
        "Director – Operations / Strategy / Transformation",
      ],
    },
  ];

  // Section 8 - Industries We Serve
  const industries = [
    { name: "IT & Technology", icon: <FaCode /> },
    { name: "BFSI & FinTech", icon: <FaBuilding /> },
    { name: "Manufacturing & Engineering", icon: <FaIndustry /> },
    { name: "Consulting & Analytics", icon: <FaChartLine /> },
    { name: "Healthcare & Life Sciences", icon: <FaHospital /> },
    { name: "Retail, E-commerce & FMCG", icon: <FaShoppingCart /> },
    { name: "Education, EdTech & Non-Profit", icon: <FaGraduationCap /> },
    { name: "Energy & Infrastructure", icon: <FaBolt /> },
  ];

  // Section 9 - Business Benefits
  const businessBenefits = [
    {
      title: "Faster Executive Hiring",
      description:
        "Reduce search timelines with a dedicated leadership search team.",
      icon: <FaRocket />,
    },
    {
      title: "Quality Over Quantity",
      description: "Access curated shortlists of proven leaders.",
      icon: <FaCheckCircle />,
    },
    {
      title: "Strategic Alignment",
      description:
        "Leaders who align with your business vision and growth roadmap.",
      icon: <FaBullseye />,
    },
    {
      title: "Confidential Search",
      description: "Sensitive roles handled with the highest discretion.",
      icon: <FaLock />,
    },
    {
      title: "Sustainable Impact",
      description: "Leaders who drive measurable organizational performance.",
      icon: <FaChartLine />,
    },
  ];
  const execKeyBenefits = [
    {
      icon: Target,
      label: "C-Suite & VP Placements",
      color: "#1d8fff",
    },
    { icon: TrendingUp, label: "95% Retention Rate", color: "#1d8fff" },
    {
      icon: Award,
      label: "Global Talent Mapping",
      color: "#ff6900",
    },
  ];

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* Hero Section */}
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
                Precision-Focused Executive Headhunting
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
                <span className="text-slate-900">Leadership &</span>
                <br />
                <span className="bg-gradient-to-r from-[#1d8fff] to-[#0066cc] bg-clip-text text-transparent">
                  Executive Search
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-xl lg:text-xl xl:text-2xl text-slate-600 max-w-xl"
              >
                Empowering organizations to attract, assess, and onboard exceptional leaders who shape the future of business.
              </motion.p>
            </div>

            {/* Key Benefits (Code 1 Design + Custom Exec Stats) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {execKeyBenefits.map((item, i) => (
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
                pageUrl="/executive-search"
                className="group px-5 py-3 bg-gradient-to-r from-[#1d8fff] to-[#0066cc] text-white rounded-xl font-semibold shadow-lg shadow-[#1d8fff]/25 hover:shadow-xl hover:shadow-[#1d8fff]/40 transition-all transform hover:scale-[1.02] active:scale-[0.98] duration-200"
                service="Executive Search"
              />
              <PopupForm
                ctaTitle="Download Brochure"
                pageUrl="/executive-search"
                className="px-5 py-3 bg-gradient-to-l from-[#ff6900] to-orange-400 text-white rounded-xl font-semibold border-2 border-orange-300 hover:border-[#ff6900] hover:text-[#fff] transition-all hover:shadow-[#ff6900]/40 shadow-lg transform hover:scale-[1.02] active:scale-[0.98] duration-200"
                service="Executive Search"
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
                <Target className="w-8 h-8 text-[#1d8fff]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Leadership Analytics & Fit
                </p>
                <p className="text-xs text-slate-500">
                  Placing leaders who perfectly match your culture and strategy
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
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600" // Updated image: executive/leadership team meeting
                      alt="Leadership & Executive Search"
                      className="w-full h-full object-cover aspect-video"
                    />
                  </div>
                </div>

                {/* Floating Stat Cards (Code 1 Design + Custom Exec Stats) */}
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
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900">95%</p>
                      <p className="text-xs text-slate-500">Search Success</p>
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
                      <p className="text-2xl font-bold text-slate-900">9-12%</p>
                      <p className="text-xs text-slate-500">Average Salary Hike</p>
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
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600')] bg-cover bg-center absolute z-0"></div> {/* Updated background image for relevance */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-black/40 to-black/20 opacity-100"></div>

        <AnimatedSection className="py-20 px-4 max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-White">
              {/* New Content */}
              The Strategic Imperative of Visionary Leadership
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed max-w-4xl mx-auto">
              {/* New Content */}
              In today’s dynamic business landscape, the success of an organization depends on visionary leadership. Finding leaders who can navigate uncertainty, inspire teams, and deliver measurable impact requires a partner with deep market understanding and strategic insight.
            </p>
            <p className="text-xl text-gray-200 mt-4 max-w-4xl mx-auto">
              {/* New Content */}
              At SkillzRevo Talent, our **Leadership & Executive Search Services** are designed to identify, engage, and place high-impact leaders — from mid-level management to C-suite executives — across industries and geographies.
            </p>
          </div>
        </AnimatedSection>
      </motion.section>

      {/* ========== SECTION 3: WHAT IS EXECUTIVE SEARCH? (Code 1 Design + New Content) ========== */}
      <div className="grid md:grid-cols-2 items-center justify-center h-full">
        <div className="bg-blue-50 p-16 flex items-center justify-center h-full order-1 md:order-1">
          <div className="text-center md:text-left ">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="px-5 py-2 rounded-full border border-white/20 bg-gradient-to-br from-[#1d8fff] via-blue-500 to-[#1d8fff] text-white font-bold text-sm tracking-wide shadow-sm shadow-blue-500/30 w-fit mb-4 flex items-center justify-between gap-1"
            >
              <SiGooglegemini /> Strategic Headhunting for Impact
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl xl:text-5xl text-[#1d8fff] font-bold mb-4 ">
                {/* New Content */}
                What is Leadership & Executive Search?
              </h2>
              <p className="text-lg lg:text-xl text-gray-500 mb-4 max-w-xl md:max-w-none mx-auto md:mx-0">
                {/* New Content */}
                **Leadership & Executive Search** is a specialized, discrete recruitment service focused on sourcing **top-tier leaders** who can drive organizational growth and transformation.
              </p>
              <p className="text-lg lg:text-xl text-gray-500 mb-10 max-w-xl md:max-w-none mx-auto md:mx-0 border-l-4 border-[#ff6900] pl-4">
                {/* New Content */}
                Through a blend of strategic research, networking, and confidential outreach, we connect you with accomplished professionals who align with your business goals and cultural DNA. We don’t just find candidates — **we identify leaders who create impact.**
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
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600" // Updated image: leadership/strategic planning
            alt="Leadership Strategy Meeting"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>

      {/* Section 3 – Key Highlights */}
      <AnimatedSection className="py-20 px-4 md:px-10 max-w-8xl mx-auto bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Key Highlights
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#ff6900] flex flex-col items-center text-center"
            >
              <div className="text-[#ff6900] bg-orange-100 p-4 rounded-full w-fit mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {highlight.title}
              </h3>
              <p className="text-gray-700">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Section 4 – How It Works (Search Process) */}
      <AnimatedSection className="py-20 bg-gradient-to-tl from-orange-400 via-orange-600 to-orange-400">
        <div className="container  mx-auto flex flex-col md:items-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold md:text-center text-white mb-15">
            Our Search Process
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
                  {index < processSteps.length && (
                    <div className="absolute bottom-0 h-full w-1 bg-blue-200 left-6 md:hidden"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Section 5 – Engagement Models */}
      <AnimatedSection className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Our Engagement Models
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {engagementModels.map((model, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-blue-500"
              >
                <div className="text-4xl text-blue-500 mb-4 inline-block">
                  {model.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {model.category}
                </h3>
                <p className="text-gray-700">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Section 6 – Why Partner with SkillzRevo Talent? */}
      <AnimatedSection className="py-20 px-4 bg-[#1d8fff] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Why Partner with SkillzRevo Talent?
          </h2>
          <div className="bg-white text-gray-800 rounded-lg shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 font-bold text-xl bg-blue-100">
                Differentiators
              </div>
              <div className="p-6 font-bold text-xl bg-blue-200">
                Business Benefits
              </div>
            </div>
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-200"
              >
                <div className="p-4 flex items-center">
                  {item.differentiator}
                </div>
                <div className="p-4 bg-gray-50 flex items-center">
                  {item.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Section 7 – Roles We Specialize In */}
      <AnimatedSection className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Roles We Specialize In
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {roles.map((role, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-blue-600">
                  {role.category}
                </h3>
                <ul className="space-y-3">
                  {role.positions.map((position, i) => (
                    <li
                      key={i}
                      className="text-gray-700 flex items-start gap-3"
                    >
                      <FaUserTie className="text-[#ff6900] mt-1 flex-shrink-0" />
                      <span>{position}</span>
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
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white/10 p-6 rounded-xl text-center flex flex-col items-center justify-center shadow-lg"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <p className="font-semibold text-lg">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Section 9 – Business Benefits */}
      <AnimatedSection className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900">
            Business Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center gap-4 text-center"
              >
                <div className="text-4xl text-[#1d8fff]">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Section 10 – Call to Action */}
      <AnimatedSection className="py-20 px-4 bg-[#1d8fff] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Build Your Leadership Pipeline with SkillzRevo Talent
          </h2>
          <p className="text-xl mb-10">
            Find, evaluate, and onboard visionary leaders who will shape the
            future of your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PopupForm
              ctaTitle="Get Started"
              pageUrl="/executive-search"
              className="px-8 py-4 bg-white !text-[#1d8fff] rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              service="Executive Search"
            />
            <PopupForm
              ctaTitle="Download Brochure"
              pageUrl="/executive-search"
              className="px-8 py-4 bg-[#ff6900] !text-[#fff] rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              service="Executive Search"
            />
          </div>
        </div>
      </AnimatedSection>

      <FAQAccordion faqs={faqs} />
    </div>
  );
};

export default Page;
