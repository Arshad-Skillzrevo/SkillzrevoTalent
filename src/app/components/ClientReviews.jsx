"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const clientReviews = [
  {
    company: "IT Services Client",
    feedback:
      "SkillzRevo Talent provided us with highly skilled cloud engineers within weeks. Their speed and professionalism stood out.",
  },
  {
    company: "E-Commerce Client",
    feedback:
      "The team understood our requirements perfectly and helped us scale our operations with the right talent.",
  },
  {
    company: "Healthcare Startup",
    feedback:
      "SkillzRevo Talent quickly matched us with data analysts who made an immediate impact on our clinical projects. We saved months of hiring time.",
  },
  {
    company: "FinTech Company",
    feedback:
      "We were struggling to find specialized DevOps engineers. SkillzRevo not only sourced them fast but also ensured cultural fit. Excellent experience!",
  },
  {
    company: "Manufacturing Firm",
    feedback:
      "From the very first interaction, SkillzRevo Talent showcased professionalism. The engineers they placed helped us automate workflows and reduce costs.",
  },
  {
    company: "EdTech Platform",
    feedback:
      "They went beyond being recruiters—they were true workforce partners. Their scalable solutions helped us expand to new geographies seamlessly.",
  },
  {
    company: "Retail Client",
    feedback:
      "Incredibly fast and transparent process. Within 10 days we had a full-stack team onboard. Highly recommended!",
  },
  {
    company: "Telecom Enterprise",
    feedback:
      "SkillzRevo Talent brought us cybersecurity experts who strengthened our infrastructure. A true partner in our growth journey.",
  },
];

export default function ClientReviews() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="bg-gray-100 py-12 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex justify-between max-md:flex-col gap-3 items-start">
          <h2 className="text-3xl md:text-4xl  font-extrabold heading-oswald text-gray-900">
            CLIENT REVIEWS
          </h2>
          <p className="text-sm mt-2 max-w-xl text-gray-600">
            See what our clients say about working with SkillzRevo Talent. We
            take pride in building lasting partnerships and driving business
            impact.
          </p>

          <div className="hidden z-10 md:flex gap-3">
            <button
              ref={prevRef}
              aria-label="Previous review"
              className="w-10 h-10 rounded-full bg-white text-gray-600 shadow hover:bg-gray-200 transition flex items-center justify-center"
            >
              <ChevronDownIcon className="h-5 w-5 rotate-90" />
            </button>

            <button
              ref={nextRef}
              aria-label="Next review"
              className="w-10 h-10 rounded-full bg-white text-gray-600 shadow hover:bg-gray-200 transition flex items-center justify-center"
            >
              <ChevronDownIcon className="h-5 w-5 -rotate-90" />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[Navigation, Autoplay]}
        >
          {clientReviews.map((rev, index) => {
            const isExpanded = expandedIndex === index;
            const shortText = rev.feedback?.slice(0, 160);
            const isLong = rev.feedback?.length > 160;

            return (
              <SwiperSlide key={index}>
                <div className="bg-white text-gray-800 shadow-lg p-6 h-full flex flex-col rounded">
                  <h3 className="font-bold text-lg text-[#1d8fff] mb-2">
                    {rev.company}
                  </h3>

                  <p className="text-sm text-gray-700 leading-relaxed">
                    {isExpanded ? rev.feedback : shortText}
                    {isLong && !isExpanded && "..."}
                  </p>

                  {isLong && (
                    <button
                      className="text-[#1d8fff] font-semibold text-sm mt-2 hover:underline"
                      onClick={() =>
                        setExpandedIndex(isExpanded ? null : index)
                      }
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
