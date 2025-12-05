// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import {
//   Building2,
//   ShieldCheck,
//   Stethoscope,
//   Factory,
//   ShoppingBag,
//   Wifi,
//   BookOpen,
//   Flame,
//   Truck,
//   Rocket,
// } from "lucide-react";

// const industries = [
//   {
//     title: "Information Technology & ITES",
//     description:
//       "Build future-ready teams in full-stack, cloud, DevOps, Cybersecurity, Machine Learning, and advanced software innovation.",
//     image: "/images/it-recruitment.jpg",
//     icon: Building2,
//   },
//   {
//     title: "Banking & Financial Services",
//     description:
//       "Empower BFSI institutions with AI-driven analytics, fraud detection, cybersecurity, and automation expertise.",
//     image: "/images/contract-staffing.jpg",
//     icon: ShieldCheck,
//   },
//   {
//     title: "Healthcare & Life Sciences",
//     description:
//       "Leverage AI/ML, analytics, and secure digital solutions to improve healthcare delivery and compliance.",
//     image: "/images/rpo.jpg",
//     icon: Stethoscope,
//   },
//   {
//     title: "Manufacturing & Engineering",
//     description:
//       "Enable smart factories through automation, predictive maintenance, robotics, and real-time data visualization.",
//     image: "/images/manufacture.jpg",
//     icon: Factory,
//   },
//   {
//     title: "Retail & E-Commerce",
//     description:
//       "Drive growth with personalization, automation, business intelligence, and customer analytics for competitive advantage.",
//     image: "/images/retail.jpg",
//     icon: ShoppingBag,
//   },
//   {
//     title: "Telecom & Networking",
//     description:
//       "Enhance network security, optimize data pipelines, and deploy scalable cloud-based communication solutions effectively.",
//     image: "/images/telecomm.jpg",
//     icon: Wifi,
//   },
//   {
//     title: "Education & EdTech",
//     description:
//       "Empower learning with AI-powered tools, digital content, and advanced upskilling programs for educators.",
//     image: "/images/edtech.jpg",
//     icon: BookOpen,
//   },
//   {
//     title: "Energy, Oil & Gas",
//     description:
//       "Deliver domain experts for energy transformation, compliance, and safety-critical operations.",
//     image: "/images/government.jpg",
//     icon: Flame,
//   },
//   {
//     title: "Logistics & Supply Chain",
//     description:
//       "Optimize routes, forecast demand, and build BI dashboards for smarter, efficient supply chain management.",
//     image: "/images/supply.jpg",
//     icon: Truck,
//   },
//   {
//     title: "Startups & Emerging Businesses",
//     description:
//       "Transform your business with agile digital strategies, flexible staffing, and rapid innovation expertise.",
//     image: "/images/startup.jpg",
//     icon: Rocket,
//   },
// ];

// const IndustriesTabs = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [openAccordion, setOpenAccordion] = useState(null);

//   const toggleAccordion = (index) => {
//     setOpenAccordion(openAccordion === index ? null : index);
//   };

//   const activeIndustry = industries[activeIndex];

//   return (
//     <section className="py-10 lg:py-20 px-6 lg:px-16 mx-auto">
//       <h2 className="text-3xl md:text-4xl font-extrabold heading-oswald uppercase text-[#1d8fff] mb-8">
//         Industries We Serve
//       </h2>

//       {/* Accordion for mobile */}
//       <div className="block lg:hidden space-y-4">
//         {industries.map((industry, index) => {
//           const Icon = industry.icon;
//           return (
//             <div
//               key={index}
//               className="border rounded-lg shadow-sm bg-white overflow-hidden"
//             >
//               <button
//                 onClick={() => toggleAccordion(index)}
//                 className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-800 hover:bg-blue-50 transition"
//               >
//                 <div className="flex items-center gap-3">
//                   <Icon className="w-5 h-5 text-[#1d8fff]" />
//                   {industry.title}
//                 </div>
//                 <span className="text-xl">
//                   {openAccordion === index ? "−" : "+"}
//                 </span>
//               </button>

//               {openAccordion === index && (
//                 <motion.div
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{ height: "auto", opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                   className="px-4 pb-4 space-y-3"
//                 >
//                   <p className="text-gray-600">{industry.description}</p>
//                   <div className="relative w-full h-48 rounded-lg overflow-hidden shadow">
//                     <Image
//                       src={industry.image}
//                       alt={industry.title}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                 </motion.div>
//               )}
//             </div>
//           );
//         })}
//       </div>

//       {/* Tabs for desktop */}
//       <div className="hidden lg:grid grid-cols-4 gap-6 ">
//         {/* Left Tabs */}
//         <div className="bg-white rounded-xl shadow-md border border-gray-200 col-span-1 p-4 flex flex-col gap-2">
//           {industries.map((industry, index) => {
//             const Icon = industry.icon;
//             return (
//               <button
//                 key={index}
//                 onClick={() => setActiveIndex(index)}
//                 className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left font-medium transition-all ${
//                   index === activeIndex
//                     ? "bg-[#1d8fff] text-white shadow"
//                     : "hover:bg-blue-50 text-gray-700"
//                 }`}
//               >
//                 <Icon className="min-w-8 min-h-8" />
//                 {industry.title}
//               </button>
//             );
//           })}
//         </div>

//         {/* Right Content */}
//         <motion.div
//           key={activeIndex}
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="bg-white rounded-xl shadow-md border border-gray-200 col-span-3 p-6 flex flex-col gap-2 items-center justify-between"
//         >
//           <div className="flex gap-4 justify-between w-full flex-col">
//             <div className="flex items-center gap-4">
//               <div className="bg-blue-100 p-4 rounded-md">
//                 <activeIndustry.icon className="w-10 h-10 text-[#1d8fff]" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-800">
//                 {activeIndustry.title}
//               </h3>
//             </div>
//             <p className="text-gray-600 leading-relaxed">
//               {activeIndustry.description}
//             </p>
//           </div>
//           <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md">
//             <Image
//               src={activeIndustry.image}
//               alt={activeIndustry.title}
//               fill
//               className="object-cover"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default IndustriesTabs;


"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, ShieldCheck, Stethoscope, Factory, ShoppingBag, Wifi, BookOpen, Flame, Truck, Rocket, ChevronLeft, ChevronRight } from "lucide-react";

const industries = [
  {
    title: "Information Technology & ITES",
    description: "Build future-ready teams in full-stack, cloud, DevOps, Cybersecurity, Machine Learning, and advanced software innovation.",
    image: "/images/it-recruitment.jpg",
    icon: Building2,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Banking & Financial Services",
    description: "Empower BFSI institutions with AI-driven analytics, fraud detection, cybersecurity, and automation expertise.",
    image: "/images/contract-staffing.jpg",
    icon: ShieldCheck,
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    title: "Healthcare & Life Sciences",
    description: "Leverage AI/ML, analytics, and secure digital solutions to improve healthcare delivery and compliance.",
    image: "/images/rpo.jpg",
    icon: Stethoscope,
    gradient: "from-red-500 to-pink-500"
  },
  {
    title: "Manufacturing & Engineering",
    description: "Enable smart factories through automation, predictive maintenance, robotics, and real-time data visualization.",
    image: "/images/manufacture.jpg",
    icon: Factory,
    gradient: "from-orange-500 to-amber-500"
  },
  {
    title: "Retail & E-Commerce",
    description: "Drive growth with personalization, automation, business intelligence, and customer analytics for competitive advantage.",
    image: "/images/retail.jpg",
    icon: ShoppingBag,
    gradient: "from-purple-500 to-fuchsia-500"
  },
  {
    title: "Telecom & Networking",
    description: "Enhance network security, optimize data pipelines, and deploy scalable cloud-based communication solutions effectively.",
    image: "/images/telecomm.jpg",
    icon: Wifi,
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    title: "Education & EdTech",
    description: "Empower learning with AI-powered tools, digital content, and advanced upskilling programs for educators.",
    image: "/images/edtech.jpg",
    icon: BookOpen,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Energy, Oil & Gas",
    description: "Deliver domain experts for energy transformation, compliance, and safety-critical operations.",
    image: "/images/government.jpg",
    icon: Flame,
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    title: "Logistics & Supply Chain",
    description: "Optimize routes, forecast demand, and build BI dashboards for smarter, efficient supply chain management.",
    image: "/images/supply.jpg",
    icon: Truck,
    gradient: "from-slate-600 to-gray-700"
  },
  {
    title: "Startups & Emerging Businesses",
    description: "Transform your business with agile digital strategies, flexible staffing, and rapid innovation expertise.",
    image: "/images/startup.jpg",
    icon: Rocket,
    gradient: "from-violet-500 to-purple-500"
  },
];

export default function IndustriesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getVisibleSlides = () => {
    const width = typeof window !== 'undefined' ? window.innerWidth : 1280;
    if (width < 640) return 1;
    if (width < 1024) return 2;
    if (width < 1280) return 3;
    return 4;
  };

  const [slidesPerView, setSlidesPerView] = useState(4);

  useState(() => {
    const handleResize = () => setSlidesPerView(getVisibleSlides());
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % industries.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + industries.length) % industries.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < slidesPerView + 1; i++) {
      cards.push(industries[(currentIndex + i) % industries.length]);
    }
    return cards;
  };

  useState(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  });

  return (
    <section className="py-16 lg:py-20  bg-white border-t-1 border-blue-200 overflow-hidden">
      <div className=" mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <h2 className="text-4xl md:text-5xl font-bold heading-oswald text-[#1d8fff] mb-4 tracking-tight">
              INDUSTRIES WE SERVE
            </h2>
            <div className="h-1.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
          </motion.div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            Empowering diverse sectors with cutting-edge talent and innovative solutions
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-5 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-blue-500 text-gray-700 hover:text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 group"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-5 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-blue-500 text-gray-700 hover:text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 group"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Container */}
          <div className=" px-8">
            <div 
              className="flex gap-6 transition-transform duration-700 ease-out"
              style={{ 
                transform: `translateX(-${(currentIndex * (100 / slidesPerView))}%)`,
              }}
            >
              {industries.concat(industries).map((industry, idx) => {
                const Icon = industry.icon;
                const actualIndex = idx % industries.length;
                
                return (
                  <motion.div
                    key={idx}
                    className="flex-shrink-0"
                    style={{ width: `calc(${100 / slidesPerView}% - ${(6 * (slidesPerView - 1)) / slidesPerView}rem)` }}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-gray-100 hover:border-transparent">
                      {/* Gradient Overlay on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0`}></div>
                      
                      {/* Image Container */}
                      <div className="relative h-52 overflow-hidden">
                        <div 
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                          style={{ backgroundImage: `url(${industry.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        
                        {/* Floating Icon */}
                        <motion.div
                          animate={hoveredIndex === idx ? { y: -10, rotate: 5 } : { y: 0, rotate: 0 }}
                          transition={{ duration: 0.3 }}
                          className={`absolute top-4 right-4 bg-gradient-to-br ${industry.gradient} p-3 rounded-xl shadow-lg`}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="relative p-6 z-10">
                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300">
                          {industry.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-700">
                          {industry.description}
                        </p>

                        {/* Hover Arrow */}
                        {/* <motion.div
                          initial={{ x: -10, opacity: 0 }}
                          animate={hoveredIndex === idx ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
                          className="mt-4 flex items-center gap-2 text-blue-600 font-semibold text-sm"
                        >
                          <span>Learn More</span>
                          <ChevronRight className="w-4 h-4" />
                        </motion.div> */}
                      </div>

                      {/* Bottom Accent */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-10">
            {industries.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'w-8 bg-blue-600' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}