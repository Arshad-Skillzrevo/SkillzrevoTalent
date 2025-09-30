"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  FaCode, FaCloud, FaBrain, FaShieldAlt, FaDatabase, 
  FaCheckCircle, FaRocket, FaUsers, FaChartLine, FaClock,
  FaDownload, FaCalendarAlt, FaSearch, FaClipboardCheck,
  FaHandshake, FaHeadset, FaBuilding, FaHospital, FaShoppingCart,
  FaGraduationCap, FaIndustry, FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaLinkedin, FaTwitter, FaFacebook, FaInstagram
} from 'react-icons/fa';

const AnimatedSection = ({ children, className = '' }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ITRecruitmentPage = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  const solutions = [
    {
      title: "Permanent IT Staffing",
      description: "Full-time technology professionals on your payroll. Ideal for strategic and leadership roles.",
      icon: <FaUsers className="text-4xl" />
    },
    {
      title: "Contract & Project-Based IT Staffing",
      description: "Specialists for short-term projects or assignments. Flexible scaling as per project needs.",
      icon: <FaClock className="text-4xl" />
    },
    {
      title: "Remote & Offshore IT Teams",
      description: "Dedicated tech teams in India for global clients. Reduce costs up to 60%.",
      icon: <FaCloud className="text-4xl" />
    },
    {
      title: "IT Executive Search",
      description: "Identify and hire C-level & senior leadership roles in technology. CTOs, CIOs, VPs, Heads of Engineering.",
      icon: <FaChartLine className="text-4xl" />
    },
    {
      title: "Recruitment Process Outsourcing (RPO) for IT",
      description: "End-to-end IT recruitment function management. Ideal for large-scale IT hiring and fast-growing organizations.",
      icon: <FaRocket className="text-4xl" />
    }
  ];

  const differentiators = [
    "Access to pre-screened IT talent from our exclusive database",
    "Specialized recruiters with deep domain knowledge",
    "AI-driven talent sourcing for speed & accuracy",
    "Faster time-to-hire — deploy IT talent in days, not weeks",
    "Hiring expertise across legacy, emerging, and niche technologies",
    "Employer branding support to attract premium candidates",
    "Cost-effective hiring without compromising quality"
  ];

  const processSteps = [
    { title: "Requirement Analysis", description: "Understand technology stack, job roles, skill needs.", icon: <FaSearch /> },
    { title: "Talent Sourcing", description: "AI-powered sourcing, job portals, referrals, and proprietary database.", icon: <FaDatabase /> },
    { title: "Screening & Assessments", description: "Resume screening, technical tests, coding challenges, and cultural-fit assessments.", icon: <FaClipboardCheck /> },
    { title: "Interview Coordination", description: "Scheduling, candidate preparation, feedback management.", icon: <FaCalendarAlt /> },
    { title: "Offer Management", description: "Salary negotiation, offer rollouts, joining formalities.", icon: <FaHandshake /> },
    { title: "Post-Hiring Support", description: "Ongoing engagement for seamless integration.", icon: <FaHeadset /> }
  ];

  const roles = [
    {
      category: "Software Development & Engineering",
      icon: <FaCode />,
      positions: ["Full Stack Developers", "Frontend & Backend Engineers", "Mobile App Developers"]
    },
    {
      category: "Cloud, DevOps & Infrastructure",
      icon: <FaCloud />,
      positions: ["Cloud Engineers (AWS, Azure, GCP)", "DevOps Specialists", "Network Administrators"]
    },
    {
      category: "Data, AI & Emerging Technologies",
      icon: <FaBrain />,
      positions: ["Data Scientists", "AI/ML Engineers", "Generative AI Experts"]
    },
    {
      category: "Cybersecurity & IT Governance",
      icon: <FaShieldAlt />,
      positions: ["Security Analysts", "Ethical Hackers", "SOC Engineers"]
    }
  ];

  const industries = [
    { name: "IT & Software", icon: <FaCode /> },
    { name: "BFSI", icon: <FaBuilding /> },
    { name: "Healthcare", icon: <FaHospital /> },
    { name: "E-commerce", icon: <FaShoppingCart /> },
    { name: "EdTech", icon: <FaGraduationCap /> },
    { name: "Manufacturing", icon: <FaIndustry /> }
  ];

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-orange-50"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#1d8fff] to-[#ff6900] bg-clip-text text-transparent"
          >
            IT Recruitment Services to Build High-Performing Tech Teams
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-10 text-gray-700"
          >
            Hire top IT talent faster, smarter, and cost-effectively.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-[#1d8fff] text-white rounded-lg font-semibold hover:bg-[#1570d9] transition-all transform hover:scale-105 shadow-lg">
              Get Started
            </button>
            <button className="px-8 py-4 bg-white text-[#1d8fff] border-2 border-[#1d8fff] rounded-lg font-semibold hover:bg-[#1d8fff] hover:text-white transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              <FaDownload /> Download Brochure
            </button>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#1d8fff] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#1d8fff] rounded-full mt-2"></div>
          </div>
        </motion.div>
      </motion.section>

      {/* Introduction */}
      <AnimatedSection className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Your Trusted IT Recruitment Partner
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            In the fast-evolving technology landscape, hiring the right IT talent is critical to maintaining a competitive edge. 
            SkillzRevo Talent specializes in end-to-end IT recruitment solutions to help you attract, hire, and retain exceptional 
            technology professionals — faster and more cost-effectively.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mt-4">
            From startups to global enterprises, we connect you with pre-vetted, highly skilled IT talent across India and overseas, 
            while acting as an extension of your HR team.
          </p>
        </div>
      </AnimatedSection>

      {/* What is IT Recruitment */}
      <AnimatedSection className="py-20 px-4 bg-gradient-to-r from-blue-50 to-orange-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">What is IT Recruitment?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              IT Recruitment is the process of identifying, sourcing, assessing, and hiring top technology professionals 
              to meet organizational requirements.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              SkillzRevo Talent combines industry expertise, a vast talent network, AI-powered hiring tools, and specialized 
              recruiters to deliver exceptional candidates for permanent, contract, remote, or offshore roles.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600" 
              alt="IT Recruitment" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Solutions */}
      <AnimatedSection className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Our IT Recruitment Solutions
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#1d8fff]"
            >
              <div className="text-[#ff6900] mb-4">{solution.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{solution.title}</h3>
              <p className="text-gray-700">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection className="py-20 px-4 bg-gradient-to-br from-[#1d8fff] to-[#ff6900] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Why Choose SkillzRevo Talent?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg"
              >
                <FaCheckCircle className="text-2xl mt-1 flex-shrink-0" />
                <p className="text-lg">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Process */}
      <AnimatedSection className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Our IT Recruitment Process
        </h2>
        <div className="relative">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className="flex-1 text-right" style={{ textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1d8fff] to-[#ff6900] flex items-center justify-center text-white text-2xl shadow-lg flex-shrink-0">
                {step.icon}
              </div>
              <div className="flex-1"></div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* IT Roles */}
      <AnimatedSection className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            IT Roles We Hire
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="text-4xl text-[#1d8fff] mb-4">{role.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{role.category}</h3>
                <ul className="space-y-2">
                  {role.positions.map((position, i) => (
                    <li key={i} className="text-gray-700 flex items-start gap-2">
                      <span className="text-[#ff6900] mt-1">•</span>
                      {position}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Industries */}
      <AnimatedSection className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-gradient-to-br from-[#1d8fff] to-[#ff6900] p-6 rounded-xl text-white text-center flex flex-col items-center justify-between shadow-lg"
            >
              <div className="text-4xl mb-3">{industry.icon}</div>
              <p className="font-semibold">{industry.name}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Benefits */}
      <AnimatedSection className="py-20 px-4 bg-gradient-to-r from-orange-50 to-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900">
            Benefits of Partnering with SkillzRevo Talent
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Access pre-vetted, highly skilled IT professionals",
              "Hire across multiple technologies and domains",
              "Reduce hiring timelines by up to 50%",
              "Cut recruitment costs by up to 40%",
              "Build scalable remote & offshore IT teams",
              "Seamless HR, payroll & compliance support"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4"
              >
                <FaCheckCircle className="text-3xl text-[#1d8fff] flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700 text-left">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 px-4 bg-gradient-to-r from-[#1d8fff] to-[#ff6900] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hire Top IT Talent. Build Future-Ready Tech Teams.
          </h2>
          <p className="text-xl mb-10">
            Empower your business with the right technology professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#1d8fff] rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Schedule a Consultation
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#1d8fff] transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              <FaDownload /> Download Brochure
            </button>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      
    </div>
  );
};

export default ITRecruitmentPage;