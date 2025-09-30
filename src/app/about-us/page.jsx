"use client";
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaRocket, FaLightbulb, FaHandshake, FaShieldAlt, FaBolt, FaSearch, FaUsers, FaCheckCircle, FaHeadset } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export default function SkillzRevoLanding() {
  const [isVisible, setIsVisible] = useState({});
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const values = [
    { icon: FaRocket, title: 'Excellence', desc: 'Delivering quality in every placement and partnership', color: 'from-blue-500 to-cyan-500' },
    { icon: FaLightbulb, title: 'Innovation', desc: 'Leveraging technology and insights to transform staffing', color: 'from-purple-500 to-pink-500' },
    { icon: FaShieldAlt, title: 'Integrity', desc: 'Transparent, ethical practices in all our interactions', color: 'from-green-500 to-emerald-500' },
    { icon: FaHandshake, title: 'Partnership', desc: 'Building long-term relationships beyond transactions', color: 'from-orange-500 to-red-500' },
    { icon: FaBolt, title: 'Agility', desc: 'Adapting quickly to changing workforce needs', color: 'from-yellow-500 to-orange-500' }
  ];

  const process = [
    { icon: FaSearch, title: 'Discover', desc: 'Understanding your unique requirements and culture', step: '01' },
    { icon: FaUsers, title: 'Source', desc: 'Leveraging our network and technology to find top talent', step: '02' },
    { icon: FaCheckCircle, title: 'Assess', desc: 'Rigorous evaluation to ensure perfect fit', step: '03' },
    { icon: FaHeadset, title: 'Deploy & Support', desc: 'Seamless onboarding and ongoing partnership', step: '04' }
  ];

  const heroImages = [
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="section-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full"
          >
            {heroImages.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="w-full h-full relative">
                  <img src={img} alt={`Hero ${i + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-transparent" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              SkillzRevo
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl font-light mb-4 text-cyan-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Talent & Staffing
            </motion.p>
            <motion.p 
              className="text-lg md:text-xl max-w-3xl mx-auto text-slate-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Bridging the gap between exceptional talent and forward-thinking organizations across industries
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex gap-6 justify-center flex-wrap"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div 
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Company Overview */}
      <section id="section-overview" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible['section-overview'] ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Who We Are
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              SkillzRevo Talent & Staffing is the dedicated staffing and recruitment vertical of SkillzRevo Solutions Pvt. Ltd. 
              We bridge the gap between exceptional talent and forward-thinking organizations across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="section-mission" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible['section-mission'] ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-10 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
              <FaRocket className="text-3xl" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-cyan-300">Our Mission</h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              To revolutionize workforce solutions by connecting the right talent with the right opportunities, 
              enabling businesses to thrive and professionals to achieve meaningful career growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible['section-mission'] ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-10 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
              <FaLightbulb className="text-3xl" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-purple-300">Our Vision</h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              To be the most trusted global staffing partner, known for innovation, expertise, 
              and unwavering commitment to client and candidate success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section id="section-values" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible['section-values'] ? { opacity: 1, y: 0 } : {}}
            className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            Core Values
          </motion.h2>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-16 overflow-x-hidden overflow-y-visible"
          >
            {values.map((value, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible['section-values'] ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 h-80 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500 hover:border-slate-600"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <value.icon className="text-4xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{value.desc}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Staffing Process */}
      <section id="section-process" className="py-32 px-6 bg-gradient-to-b from-slate-950 to-slate-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible['section-process'] ? { opacity: 1, y: 0 } : {}}
            className="text-5xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Our Staffing Approach
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible['section-process'] ? { opacity: 1 } : {}}
            className="text-xl text-center text-slate-400 mb-20"
          >
            A proven 4-step process for exceptional results
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible['section-process'] ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 h-full hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
                  <div className="text-6xl font-black text-slate-700/50 mb-4">{step.step}</div>
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-300">{step.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{step.desc}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-8 w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20" />
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(59,130,246,0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(139,92,246,0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(59,130,246,0.3) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0"
        />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Ready to Transform Your Workforce?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto"
          >
            Partner with SkillzRevo and experience the future of talent acquisition
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Contact Us Today
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400 text-lg mb-2">SkillzRevo Talent & Staffing</p>
          <p className="text-slate-500">A vertical of SkillzRevo Solutions Pvt. Ltd.</p>
        </div>
      </footer>
    </div>
  );
}