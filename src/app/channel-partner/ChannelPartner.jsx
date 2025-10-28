"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaRocket, FaChartLine, FaUsers, FaLock, FaHeadset, FaCheckCircle, FaArrowRight, FaFileAlt, FaGlobe, FaCog, FaBook, FaLightbulb, FaBriefcase, FaUserTie, FaGraduationCap, FaBuilding } from 'react-icons/fa';
import PartnershipTable from './PartnershipTable';

export default function ChannelPartner() {
  const [activeTab, setActiveTab] = useState('benefits');

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 text-white py-24 px-4 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full mb-4"
              >
                <span className="text-sm font-semibold text-[#1d8fff]">Join Our Partner Network</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold mb-6 leading-12 tracking-tight"
              >
                Partner With Us To Revolutionize Hiring Across India & Middle East
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl mb-8 text-blue-50"
              >
                Join our network of successful partners and unlock unlimited growth potential with cutting-edge staffing solutions
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-semibold shadow-xl transition-all"
                >
                  Become a Partner
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-black px-8 py-4 rounded-md font-semibold border-2 border-white transition-all"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden md:block w-full h-full "
            >
              <img src="/images/partner.jpg" alt="Partnership" className="rounded-xl h-full object-cover shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-12 px-4 bg-white shadow-sm -mt-8 relative z-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "500+", label: "Active Partners" },
              { number: "10K+", label: "Clients Served" },
              { number: "50K+", label: "Successful Placements" },
              { number: "95%", label: "Partner Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Partnership Opportunities */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className='h-full'>
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" alt="Team Meeting" className="rounded-xl h-full object-cover shadow-xl " />
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-3">
                <motion.div variants={fadeInUp} className="text-left mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Unlock Your Potential With Our
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-500">
              Human-Centric Delivery
            </h3>
          </motion.div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our partnership program is designed to empower businesses like yours to scale rapidly while maintaining exceptional service quality. We provide comprehensive support, cutting-edge technology, and proven methodologies.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Join hundreds of successful partners who have transformed their business model and achieved remarkable growth through our ecosystem. Experience the power of collaboration and innovation.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
                  <FaCheckCircle className="text-blue-500" />
                  <span className="text-gray-700">Proven Track Record</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
                  <FaCheckCircle className="text-blue-500" />
                  <span className="text-gray-700">End-to-End Support</span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md font-semibold shadow-lg transition-all mt-4"
              >
                Learn More About Partnership
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Value Proposition */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 px-4 bg-gradient-to-br from-blue-400 to-blue-500 text-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Partner With Us To Gain Direct Access To Businesses
              </h2>
              <p className="text-lg text-blue-50 mb-6 leading-tight tracking-tight">
                Get exclusive access to our extensive network of businesses actively seeking staffing solutions. Our platform connects you directly with decision-makers, streamlining the entire process and maximizing your success rate.
              </p>
              <ul className="space-y-1 mb-8">
                {[
                  "Direct client connections",
                  "Streamlined processes",
                  "Higher conversion rates",
                  "Ongoing support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <FaCheckCircle className="text-orange-400 bg-white rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold shadow-lg transition-all"
              >
                Get Started Today
              </motion.button>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative h-full">
              <div className="absolute -inset-4 bg-white opacity-10 rounded-3xl blur-2xl"></div>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978" alt="Business Meeting" className="rounded-xl shadow-2xl object-cover h-full relative z-10" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Engagement Models */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Types / Partner Engagement Models
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose the partnership model that best fits your business goals and expertise
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-8 text-center "
            >
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FaHandshake className="text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Institutional Partner</h3>
              <p className="text-gray-600 mb-6">
                Perfect for established organizations looking to expand their service offerings and tap into new markets
              </p>
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <FaCheckCircle className="text-blue-500 flex-shrink-0" />
                  <span>Revenue sharing model</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <FaCheckCircle className="text-blue-500 flex-shrink-0" />
                  <span>Training & resources</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <FaCheckCircle className="text-blue-500 flex-shrink-0" />
                  <span>Marketing support</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(255,105,0,0.2)" }}
              className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-8 text-center shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-white bg-opacity-10 w-32 h-32 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              <div className="bg-white text-orange-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10">
                <FaRocket className="text-3xl" />
              </div>
              <div className="absolute top-2 left-2 bg-white text-orange-500 bg-opacity-20 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4">Recruitment Partnership</h3>
              <p className="mb-6 text-orange-50">
                Ideal for recruitment agencies seeking to scale their operations nationwide with proven systems
              </p>
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2 text-sm">
                  <FaCheckCircle className="flex-shrink-0" />
                  <span>Higher commission rates</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheckCircle className="flex-shrink-0" />
                  <span>Dedicated support team</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheckCircle className="flex-shrink-0" />
                  <span>Priority lead access</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-8 text-center transition-all"
            >
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <FaChartLine className="text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Enterprise / Regional Partner</h3>
              <p className="text-gray-600 mb-6">
                Designed for large-scale operations with regional market expertise and established networks
              </p>
              <div className="space-y-2 text-left">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <FaCheckCircle className="text-blue-500 flex-shrink-0" />
                  <span>Exclusive territories</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <FaCheckCircle className="text-blue-500 flex-shrink-0" />
                  <span>Custom solutions</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <FaCheckCircle className="text-blue-500 flex-shrink-0" />
                  <span>Strategic partnership</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <PartnershipTable/>

      {/* Comparison Table */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Partnership In 3 Simple Steps
            </h2>
            <p className="text-gray-600 text-lg">
              Begin your journey to success with our streamlined process
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaFileAlt, title: "Apply Online", desc: "Fill out our comprehensive application form with your business details and partnership preferences", color: "from-blue-400 to-blue-500" },
              { icon: FaCog, title: "Get Verified", desc: "Our team reviews your application and conducts a quick verification process", color: "from-orange-400 to-orange-500" },
              { icon: FaRocket, title: "Start Earning", desc: "Once approved, access our platform and start placing candidates immediately", color: "from-green-400 to-green-500" }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-blue-100 h-full">
                  <div className={`bg-gradient-to-br ${step.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md`}>
                    <step.icon className="text-4xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{step.desc}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-8 transform -translate-y-1/2">
                    <FaArrowRight className="text-blue-300 text-3xl" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-4 rounded-md font-semibold shadow-lg transition-all"
            >
              Start Your Partnership Journey
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Tools & Templates */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tools & Templates You'll Receive
            </h2>
            <p className="text-gray-600 text-lg">
              Everything you need to succeed from day one
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="space-y-2">
              {[
                { icon: FaBook, text: "Comprehensive training materials and onboarding guides" },
                { icon: FaLightbulb, text: "Marketing collateral & professionally designed brand assets" },
                { icon: FaCog, text: "Advanced CRM & applicant tracking system access" },
                { icon: FaFileAlt, text: "Legal document templates and compliance resources" },
                { icon: FaChartLine, text: "Real-time performance dashboards and analytics tools" },
                { icon: FaBriefcase, text: "Professional client presentation decks and proposals" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-center justify-start gap-4 bg-gradient-to-r from-blue-50 to-white p-3 rounded-xl border border-blue-100 hover:shadow-md transition-all w-full"
                >
                  <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white p-2 rounded-lg flex-shrink-0">
                    <item.icon className="text-xl" />
                  </div>
                  <p className="text-gray-700 pt-1">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeInUp} className="h-full w-full">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0" alt="Tools" className="rounded-xl shadow-2xl h-full object-cover relative z-10" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQs Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Everything you need to know about partnering with us
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: "What is the minimum investment required?", a: "Zero upfront investment needed. We believe in performance-based partnerships where you earn as you grow." },
              { q: "How long does the onboarding process take?", a: "Typically 3-5 business days from application submission to full platform access." },
              { q: "What kind of support do partners receive?", a: "24/7 dedicated support, assigned account manager, training resources, and regular performance reviews." },
              { q: "Can I operate in multiple cities?", a: "Yes, based on your partner tier. Enterprise partners get exclusive territory rights." },
              { q: "How do I receive payments?", a: "Monthly payouts via direct bank transfer based on successful placements and milestones." },
              { q: "Is there a minimum commitment period?", a: "We offer flexible terms with no long-term lock-in, allowing you to grow at your own pace." }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white border-l-4 border-blue-500 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg mb-3 text-blue-600">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Who Should Apply */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Who Should Apply?
            </h2>
            <p className="text-gray-600 text-lg">
              We're looking for motivated partners across various sectors
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: FaUsers, label: "Recruitment Agencies" },
              { icon: FaUserTie, label: "HR Consultancies" },
              { icon: FaGraduationCap, label: "Training Institutes" },
              { icon: FaLightbulb, label: "Entrepreneurs" },
              { icon: FaBriefcase, label: "Business Consultants" },
              { icon: FaGlobe, label: "Regional Distributors" },
              { icon: FaBook, label: "Industry Experts" },
              { icon: FaBuilding, label: "Educational Institutions" }
            ].map((type, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all"
              >
                <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <type.icon className="text-2xl" />
                </div>
                <p className="font-semibold text-gray-800">{type.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Everything You Need Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need To Know Before Partnering With Us
            </h2>
            <p className="text-gray-600 text-lg">
              Complete transparency about what you can expect
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "No upfront costs or hidden fees - completely transparent pricing",
              "Flexible partnership models tailored to your business needs",
              "Comprehensive training and continuous onboarding support",
              "Access to our proprietary technology platform and tools",
              "Extensive marketing and branding support included",
              "Regular performance reviews and business optimization",
              "Fair and transparent revenue sharing model",
              "Dedicated partner success manager for personalized guidance",
              "Co-branded marketing materials and promotional resources",
              "Early access to new features, services, and market opportunities",
              "Active partner community with networking events",
              "Complete legal and compliance support throughout",
              "Enterprise-grade data security and privacy protection",
              "Scalable solutions designed for growing businesses",
              "Performance-based incentives and bonus structures"
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ x: 5 }}
                className="bg-white p-5 rounded-xl flex items-start gap-4 shadow-md hover:shadow-lg transition-all border border-blue-100"
              >
                <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                <p className="text-gray-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-24 px-4 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
                Get Started With Skilzrevo Staffing Today!
              </h2>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Join India's fastest-growing staffing network and unlock unlimited growth potential. Transform your business with our proven partnership model.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold shadow-xl transition-all flex items-center gap-2"
                >
                  Apply Now <FaArrowRight />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-blue-600 px-8 py-4 rounded-xl font-semibold border-2 border-white transition-all"
                >
                  Schedule a Call
                </motion.button>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400" />
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400" />
                  <span>Get Started in 48 Hours</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden h-full md:block relative"
            >
              <div className="absolute -inset-4 bg-white opacity-10 rounded-3xl blur-2xl"></div>
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72" alt="Success" className="rounded-2xl shadow-xl h-full object-cover relative z-10" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Trust Badges */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-16 px-4 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center ">
            {[
              "ISO Certified",
              "MSME Registered",
              "Data Secure",
              "Trusted Partner"
            ].map((badge, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaCheckCircle className="text-blue-500 text-3xl" />
                </div>
                <p className="font-semibold text-gray-700">{badge}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

        {/* Comparison Table */}
//         <div className="max-w-6xl mx-auto">
//           <motion.div variants={fadeInUp} className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Find The Right Fit For Your Expertise And
//             </h2>
//             <h3 className="text-2xl md:text-3xl font-bold text-blue-500">
//               Business Goals
//             </h3>
//           </motion.div>
          
//           <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead className="bg-gradient-to-r from-blue-500 to-blue-600">
//                   <tr>
//                     <th className="px-6 py-5 text-left text-white font-semibold">Features</th>
//                     <th className="px-6 py-5 text-center text-white font-semibold">Institutional</th>
//                     <th className="px-6 py-5 text-center text-white font-semibold">Recruitment</th>
//                     <th className="px-6 py-5 text-center text-white font-semibold">Enterprise</th>
//                   </tr>
//                 </thead>
//                 <tbody className="text-gray-800">
//                   {[
//                     "Revenue Share Model",
//                     "Dedicated Support",
//                     "Marketing Resources",
//                     "Training Programs",
//                     "Technology Platform Access",
//                     "Exclusive Territory Rights",
//                     "Custom Branding",
//                     "Priority Lead Distribution"
//                   ].map((feature, index) => (
//                     <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
//                       <td className="px-6 py-4 font-medium">{feature}</td>
//                       <td className="px-6 py-4 text-center">
//                         {index < 5 ? <FaCheckCircle className="mx-auto text-green-500 text-xl" /> : <span className="text-gray-400">—</span>}
//                       </td>
//                       <td className="px-6 py-4 text-center">
//                         <FaCheckCircle className="mx-auto text-green-500 text-xl" />
//                       </td>
//                       <td className="px-6 py-4 text-center">
//                         <FaCheckCircle className="mx-auto text-green-500 text-xl" />
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
     

//       {/* Why Choose Us */}
//       <motion.section 
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={staggerContainer}
//         className="py-20 px-4 bg-white"
//       >
//         <div className="max-w-6xl mx-auto">
//           <motion.div variants={fadeInUp} className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Why Partners Choose SkillServo StaffPro?
//             </h2>
//             <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//               Join a network that prioritizes your success with comprehensive support and cutting-edge solutions
//             </p>
//           </motion.div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               { icon: FaRocket, title: "Rapid Growth", desc: "Scale your business 3x faster with our proven methodologies", color: "blue" },
//               { icon: FaLock, title: "Secure Platform", desc: "Enterprise-grade security for all your data and transactions", color: "green" },
//               { icon: FaHeadset, title: "24/7 Support", desc: "Dedicated support team always ready to assist you", color: "purple" },
//               { icon: FaUsers, title: "Large Network", desc: "Access to 10,000+ active clients nationwide", color: "orange" },
//               { icon: FaChartLine, title: "Real-time Analytics", desc: "Comprehensive dashboards and performance insights", color: "blue" },
//               { icon: FaGlobe, title: "Pan-India Presence", desc: "Established presence across all major cities", color: "green" }
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 whileHover={{ y: -10 }}
//                 className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-blue-100"
//               >
//                 <div className={`bg-gradient-to-br from-${item.color}-400 to-${item.color}-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md`}>
//                   <item.icon className="text-3xl text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl font-semibold shadow-lg transition-all"
//             >
//               Join Our Network Today
//             </motion.button>
//           </div>
//         </div>
//       </motion.section>

//       {/* Onboarding Process */}
//       <motion.section 
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={staggerContainer}
//         className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white"
//       >
//         <div className="max-w-6xl mx-auto">
//           <motion.div variants={fadeInUp} className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Easy, Transparent Partner Onboarding
//             </h2>
//             <p className="text-gray-600 text-lg">
//               Get started in just 4 simple steps
//             </p>
//           </motion.div>
          
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <motion.div variants={fadeInUp} className="space-y-6">
//               {[
//                 { num: "01", title: "Fill Online Application", desc: "Complete our simple partnership application form with your business details" },
//                 { num: "02", title: "Submit Documentation", desc: "Provide necessary business documents for verification" },
//                 { num: "03", title: "Background Verification", desc: "Quick and thorough verification process for compliance" },
//                 { num: "04", title: "Agreement Signing", desc: "Sign the partnership agreement and get onboarded" }
//               ].map((step, index) => (
//                 <motion.div 
//                   key={index}
//                   whileHover={{ x: 10 }}
//                   className="flex gap-6 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-blue-100"
//                 >
//                   <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-xl shadow-md">
//                     {step.num}
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-lg mb-2 text-gray-800">{step.title}</h4>
//                     <p className="text-gray-600 text-sm">{step.desc}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//             <motion.div variants={fadeInUp} className="relative">
//               <div className="absolute -inset-4 bg-blue-200 opacity-20 rounded-3xl blur-2xl"></div>
//               <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&h=500&fit=crop" alt="Handshake" className="rounded-2xl shadow-2xl relative z-10" />
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Sample Earnings */}
//       <motion.section 
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInUp}
//         className="py-20 px-4 bg-white"
//       >
//         <div className="max-w-6xl mx-auto">
//           <motion.div variants={fadeInUp} className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Sample Partner Earnings
//             </h2>
//             <p className="text-gray-600 text-lg">
//               Realistic earning potential based on partner performance
//             </p>
//           </motion.div>
          
//           <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-blue-100">
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
//                   <tr>
//                     <th className="px-6 py-5 text-left font-semibold">Partner Type</th>
//                     <th className="px-6 py-5 text-left font-semibold">Monthly Placements</th>
//                     <th className="px-6 py-5 text-left font-semibold">Avg. Revenue/Placement</th>
//                     <th className="px-6 py-5 text-left font-semibold">Monthly Earnings</th>
//                   </tr>
//                 </thead>
//                 <tbody className="text-gray-800">
//                   <tr className="border-b border-blue-50 bg-blue-50 bg-opacity-30">
//                     <td className="px-6 py-5 font-bold text-blue-600">Institutional Partner</td>
//                     <td className="px-6 py-5">50-100</td>
//                     <td className="px-6 py-5">₹5,000</td>
//                     <td className="px-6 py-5 font-bold text-green-600 text-lg">₹2.5L - ₹5L</td>
//                   </tr>
//                   <tr className="border-b border-blue-50">
//                     <td className="px-6 py-5 font-bold text-orange-600">Recruitment Partner</td>
//                     <td className="px-6 py-5">100-200</td>
//                     <td className="px-6 py-5">₹6,000</td>
//                     <td className="px-6 py-5 font-bold text-green-600 text-lg">₹6L - ₹12L</td>
//                   </tr>
//                   <tr className="bg-blue-50 bg-opacity-30">
//                     <td className="px-6 py-5 font-bold text-blue-600">Enterprise Partner</td>
//                     <td className="px-6 py-5">200-500</td>
//                     <td className="px-6 py-5">₹7,000</td>
//                     <td className="px-6 py-5 font-bold text-green-600 text-lg">₹14L - ₹35L</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
          
//           <motion.div variants={fadeInUp} className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
//             <p className="text-gray-700 text-sm">
//               <strong>Note:</strong> Earnings are indicative and may vary based on market conditions, effort, and partnership tier. Actual results depend on individual performance and commitment.
//             </p>
//           </motion.div>
//         </div>
//       </motion.section>
//       {/* Who Should Apply */}
//       <motion.section 
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInUp}
//         className="py-16 px-4 bg-[#1d8fff] text-white"
//       >
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
//             WHO SHOULD APPLY?
//           </h2>
          
//           <div className="grid md:grid-cols-4 gap-4 mt-12">
//             {[
//               "Recruitment Agencies",
//               "HR Consultancies",
//               "Training Institutes",
//               "Entrepreneurs",
//               "Business Consultants",
//               "Regional Distributors",
//               "Industry Experts",
//               "Educational Institutions"
//             ].map((type, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white text-[#1d8fff] rounded-lg p-6 text-center font-semibold shadow-lg"
//               >
//                 {type}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Everything You Need Section */}
//       <motion.section 
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={staggerContainer}
//         className="py-16 px-4 bg-gray-50"
//       >
//         <div className="max-w-6xl mx-auto">
//           <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center mb-12">
//             EVERYTHING YOU NEED TO KNOW BEFORE PARTNERING WITH US
//           </motion.h2>
          
//           <div className="space-y-3">
//             {[
//               "No upfront costs or hidden fees",
//               "Flexible partnership models to suit your business",
//               "Comprehensive training and onboarding support",
//               "Access to proprietary technology platform",
//               "Marketing and branding support included",
//               "Regular performance reviews and optimization",
//               "Transparent revenue sharing model",
//               "Dedicated partner success manager",
//               "Co-branded marketing materials",
//               "Early access to new features and services",
//               "Partner community and networking events",
//               "Legal and compliance support",
//               "Data security and privacy protection",
//               "Scalable solutions for growing businesses",
//               "Performance-based incentives and bonuses"
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeInUp}
//                 className="bg-[#1d8fff] text-white p-4 rounded-lg flex items-center space-x-3"
//               >
//                 <FaCheckCircle className="text-[#ff6900] text-xl flex-shrink-0" />
//                 <p>{item}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>


//       {/* Final CTA */}
//         <motion.section 
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInUp}
//         className="py-20 px-4 bg-gradient-to-r from-[#1d8fff] to-[#0066cc] text-white"
//       >
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold mb-6">
//                 GET THEM WITH SKILLSERVO STAFFPRO TODAY!
//               </h2>
//               <p className="text-lg mb-8 opacity-90">
//                 Join India's fastest-growing staffing network and unlock unlimited potential
//               </p>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-[#ff6900] hover:bg-[#e55d00] text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition-all"
//               >
//                 Apply Now <FaArrowRight className="inline ml-2" />
//               </motion.button>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop" alt="Success" className="rounded-lg shadow-2xl" />
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>
//     </div>
//   );
// };