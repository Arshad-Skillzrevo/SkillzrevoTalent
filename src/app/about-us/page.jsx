"use client";

import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Users,
  ShieldCheck,
  Brain,
  Cloud,
  LineChart,
  Rocket,
  CheckCircle2,
  Globe2,
  Briefcase,
  GraduationCap,
  Layers,
  Handshake,
} from "lucide-react";
import { FaNetworkWired, FaRegHandshake, FaUserTie } from "react-icons/fa";
import MainSegments from "./MainSegments";
import PopupForm from "../components/PopupForm";

// Color tokens (use Tailwind arbitrary colors for styling)
const BRAND_BLUE = "#1d8fff"; // primary
const BRAND_ORANGE = "#ff6900"; // accent

// Motion presets
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export default function AboutSkillzRevoTalent() {
  // const [tab, setTab] = useState<"employers" | "talent">("employers");
  const [tab, setTab] = useState("employers");

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* SEO (You can move these to Next.js Metadata API if preferred) */}
      <Head>
        <title>
          SkillzRevo Talent | AI, Data Science & Tech Staffing Solutions
        </title>
        <meta
          name="description"
          content="SkillzRevo Talent connects skilled professionals with top companies in AI, Data Science, Cybersecurity & Emerging Tech. Hire future-ready talent today!"
        />
        <meta
          name="keywords"
          content="SkillzRevo Talent, IT staffing company, AI recruitment, Data Science staffing, tech talent solutions, contract staffing, permanent hiring, RPO services"
        />
      </Head>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(29,143,255,0.15), rgba(255,105,0,0.08))",
          }}
        />
        <div
          className="absolute -top-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-30"
          style={{ background: BRAND_BLUE }}
        />
        <div
          className="absolute -bottom-16 -left-16 h-80 w-80 rounded-full blur-3xl opacity-30"
          style={{ background: BRAND_ORANGE }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            className="max-w-3xl text-center mx-auto"
          >
            {/* <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium"
                  style={{ backgroundColor: "#f3f8ff", color: BRAND_BLUE }}>
              <Rocket className="h-4 w-4" />
              About SkillzRevo Talent
            </span> */}
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Building Future-Ready Teams for a Smarter World
            </h1>
            <p className="mt-4 text-lg text-gray-700 md:text-xl">
              Empowering organizations with exceptional talent in AI, Data
              Science, Cybersecurity, Cloud, and Emerging Technologies.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <PopupForm
                ctaTitle={
                  <span className="flex items-center justify-center gap-2">
                    Hire Talent
                    <Handshake className="ml-2 h-5 w-5" />
                  </span>
                }
                pageUrl="/about-us"
                className="group px-5 py-3 bg-gradient-to-r from-[#ff6900] to-[#d85a00] text-white rounded-xl font-semibold shadow-lg shadow-[#ff6900]/25 hover:shadow-xl hover:shadow-[#ff6900]/40 transition-all transform hover:scale-[1.02] active:scale-[0.98] duration-200"
              />

              <a
                href="https://www.skillzrevo.com/work-with-us"
                className="group px-5 py-3 flex w-fit bg-gradient-to-r from-[#1d8fff] to-[#0066cc] text-white rounded-xl font-semibold shadow-lg shadow-[#1d8fff]/25 hover:shadow-xl hover:shadow-[#1d8fff]/40 transition-all transform hover:scale-[1.02] active:scale-[0.98] duration-200"
              >
                Apply Now
                <Users className="ml-2 h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Who We Are */}
      <section className="relative border-t border-gray-100">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold md:text-4xl">
              Empowering Businesses with Talent That Transforms
            </h2>
            <p className="mt-4 text-gray-700">
              SkillzRevo Talent is the specialized talent & staffing arm of the
              SkillzRevo ecosystem. As a division of
              <span className="font-semibold">
                {" "}
                SkillzRevo Solutions Pvt. Ltd.
              </span>
              , we bridge the gap between trained, job-ready professionals and
              future-forward employers — creating sustainable growth for both.
            </p>
            <p className="mt-3 text-gray-700">
              Backed by the SkillzRevo Academy, we combine training excellence,
              deep domain knowledge, and modern recruitment practices to deliver
              quality, speed, and reliability in every engagement.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm"
                style={{ background: "#eef6ff", color: BRAND_BLUE }}
              >
                <FaNetworkWired /> Integrated Pipeline
              </span>
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm"
                style={{ background: "#fff1e9", color: BRAND_ORANGE }}
              >
                <FaRegHandshake /> Strategic Partner
              </span>
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative h-64 w-full overflow-hidden rounded-2xl bg-gray-100 shadow-lg md:h-96"
          >
            {/* Placeholder visual / replace with image */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 20% 30%, rgba(29,143,255,0.2), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,105,0,0.2), transparent 45%)",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-xl bg-white/70 text-center ">
                <img
                  src="/images/Collab.jpg"
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Mission & Vision */}
      <section className="bg-gray-50">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-16 md:grid-cols-2"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <Rocket style={{ color: BRAND_ORANGE }} />
              <h3 className="text-2xl font-semibold">Our Mission</h3>
            </div>
            <p className="mt-3 text-gray-700">
              To connect qualified, trained, and motivated talent with
              organizations seeking expertise in emerging technologies —
              creating meaningful opportunities and driving innovation,
              efficiency, and transformation.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <Globe2 style={{ color: BRAND_BLUE }} />
              <h3 className="text-2xl font-semibold">Our Vision</h3>
            </div>
            <p className="mt-3 text-gray-700">
              To become a leading AI-driven staffing partner and the go-to
              talent marketplace for roles in AI, Data Science, Analytics,
              Cybersecurity, Cloud, and other future-focused domains — in India
              and beyond.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Section 3: What We Do */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h3 className="text-3xl font-bold">
            Comprehensive Staffing & Workforce Solutions
          </h3>
          <p className="mt-2 max-w-3xl text-gray-700">
            From full-time hiring to contract and offshore models, we tailor
            staffing to your scale, duration, and skill depth.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "Permanent Hiring",
                desc: "Build strong, long-term teams across AI, Data, and Tech roles.",
                icon: <FaUserTie className="h-6 w-6" />,
              },
              {
                title: "Contract Staffing",
                desc: "Scale instantly with project-based or short-term professionals.",
                icon: <Layers className="h-6 w-6" />,
              },
              {
                title: "Offshore & Remote Teams",
                desc: "Access pre-trained, cost-effective offshore and hybrid teams.",
                icon: <Cloud className="h-6 w-6" />,
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition hover:shadow-xl"
              >
                <div
                  className="mb-4 inline-flex rounded-xl p-3"
                  style={{
                    backgroundColor: i % 2 === 0 ? "#eef6ff" : "#fff1e9",
                    color: i % 2 === 0 ? BRAND_BLUE : BRAND_ORANGE,
                  }}
                >
                  {card.icon}
                </div>
                <h4 className="text-xl font-semibold">{card.title}</h4>
                <p className="mt-2 text-gray-700">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                title: "Recruitment Process Outsourcing (RPO)",
                desc: "End-to-end talent management from sourcing to onboarding.",
                icon: <LineChart className="h-6 w-6" />,
              },
              {
                title: "Campus & Fresher Hiring",
                desc: "Access certified, trained fresh graduates ready to perform.",
                icon: <GraduationCap className="h-6 w-6" />,
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition hover:shadow-xl"
              >
                <div
                  className="mb-4 inline-flex rounded-xl p-3"
                  style={{
                    backgroundColor: i % 2 === 0 ? "#eef6ff" : "#fff1e9",
                    color: i % 2 === 0 ? BRAND_BLUE : BRAND_ORANGE,
                  }}
                >
                  {card.icon}
                </div>
                <h4 className="text-lg font-semibold">{card.title}</h4>
                <p className="mt-2 text-gray-700">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h3 className="text-3xl font-bold">Why Choose SkillzRevo Talent</h3>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                title: "Integrated Learning-to-Hiring Model",
                desc: "Backed by SkillzRevo Academy, providing access to pre-trained, industry-ready candidates.",
                icon: <Brain className="h-6 w-6" />,
              },
              {
                title: "Specialized Tech Recruitment",
                desc: "Focused exclusively on Data, AI, Cloud, Cybersecurity & Emerging Tech roles.",
                icon: <ShieldCheck className="h-6 w-6" />,
              },
              {
                title: "Quality-First Approach",
                desc: "Multi-stage assessments ensure only the right-fit candidates are shortlisted.",
                icon: <CheckCircle2 className="h-6 w-6" />,
              },
              {
                title: "Scalable Models & Global Reach",
                desc: "Permanent to offshore teams, with pan-India and international coverage.",
                icon: <Globe2 className="h-6 w-6" />,
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg"
              >
                <div
                  className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: idx % 2 === 0 ? "#eef6ff" : "#fff1e9",
                    color: idx % 2 === 0 ? BRAND_BLUE : BRAND_ORANGE,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="mt-1 text-gray-700">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: For Employers & For Talent (Tabs) */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-3xl font-bold">Built For Employers & Talent</h3>
            <div className="flex rounded-xl border-gray-200 border p-1">
              <button
                onClick={() => setTab("employers")}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  tab === "employers" ? "text-white" : "text-gray-700"
                }`}
                style={{
                  backgroundColor:
                    tab === "employers" ? BRAND_ORANGE : "transparent",
                }}
              >
                For Employers
              </button>
              <button
                onClick={() => setTab("talent")}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  tab === "talent" ? "text-white" : "text-gray-700"
                }`}
                style={{
                  backgroundColor:
                    tab === "talent" ? BRAND_BLUE : "transparent",
                }}
              >
                For Talent
              </button>
            </div>
          </div>

          <div className="mt-8">
            {tab === "employers" ? (
              <motion.div
                key="emp"
                variants={fadeUp}
                initial="initial"
                animate="animate"
                className="grid grid-cols-1 gap-6 md:grid-cols-2"
              >
                {[
                  "Access pre-screened, certified talent",
                  "Role consultation & customized staffing plans",
                  "Fast turnaround & transparent communication",
                  "Dedicated account managers for every engagement",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <div
                      className="mt-1 h-5 w-5"
                      style={{ color: BRAND_ORANGE }}
                    >
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <p className="text-gray-800">{point}</p>
                  </div>
                ))}
                <div className="md:col-span-2">
                  <PopupForm
                    ctaTitle={
                      <span className="flex items-center justify-center gap-2">
                        Hire Talent
                        <Handshake className="ml-2 h-5 w-5" />
                      </span>
                    }
                    pageUrl="/about-us"
                    className="group px-5 py-3 bg-gradient-to-r from-[#ff6900] to-[#d85a00] text-white rounded-xl font-semibold shadow-lg shadow-[#ff6900]/25 hover:shadow-xl hover:shadow-[#ff6900]/40 transition-all transform hover:scale-[1.02] active:scale-[0.98] duration-200"
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="tal"
                variants={fadeUp}
                initial="initial"
                animate="animate"
                className="grid grid-cols-1 gap-6 md:grid-cols-2"
              >
                {[
                  "Work with leading tech organizations",
                  "Personalized guidance & interview preparation",
                  "Opportunities in AI, Data, Cloud & Cybersecurity",
                  "Continuous learning via SkillzRevo Academy",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <div className="mt-1 h-5 w-5" style={{ color: BRAND_BLUE }}>
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <p className="text-gray-800">{point}</p>
                  </div>
                ))}
                <div className="md:col-span-2">
                  <a
                    href="https://www.skillzrevo.com/work-with-us"
                    className="group px-5 py-3 flex w-fit bg-gradient-to-r from-[#1d8fff] to-[#0066cc] text-white rounded-xl font-semibold shadow-lg shadow-[#1d8fff]/25 hover:shadow-xl hover:shadow-[#1d8fff]/40 transition-all transform hover:scale-[1.02] active:scale-[0.98] duration-200"
                  >
                    Apply Now
                    <Users className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Section 6: The SkillzRevo Ecosystem */}
      <section className="bg-gray-50">
        {/* <div className="mx-auto max-w-7xl px-6 py-16">
          <h3 className="text-3xl font-bold">One Group. Three Divisions. Infinite Possibilities.</h3>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "SkillzRevo Academy",
                subtitle: "Training & Upskilling",
                cta: "Visit Academy",
                color: BRAND_BLUE,
                tagline: "Learn. Evolve. Excel.",
              },
              {
                title: "SkillzRevo Talent",
                subtitle: "Staffing & Workforce Solutions",
                cta: "Visit Talent",
                color: BRAND_ORANGE,
                tagline: "Hire. Scale. Succeed.",
              },
              {
                title: "SkillzRevo Consulting",
                subtitle: "Consulting & Enterprise Solutions",
                cta: "Visit Consulting",
                color: BRAND_BLUE,
                tagline: "Transform. Innovate. Lead.",
              },
            ].map((col) => (
              <motion.div
                key={col.title}
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-medium" style={{ color: col.color }}>
                  {col.tagline}
                </p>
                <h4 className="mt-1 text-xl font-semibold">{col.title}</h4>
                <p className="mt-1 text-gray-700">{col.subtitle}</p>
                <button
                  className="mt-4 rounded-lg px-4 py-2 text-sm font-semibold text-white"
                  style={{ background: col.color }}
                >
                  {col.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div> */}
        <MainSegments />
      </section>

      {/* Section 7: Our Promise */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-3xl font-bold">Our Promise</h3>
            <p className="mt-3 max-w-4xl text-gray-700">
              At SkillzRevo Talent, integrity, quality, and mutual success are
              central to everything we do. We don’t just fill roles — we build
              partnerships, enable careers, and strengthen businesses with
              future-ready talent.
            </p>
            <blockquote
              className="mt-5 border-l-4 pl-4 text-lg font-semibold"
              style={{ borderColor: BRAND_BLUE }}
            >
              We don’t just fill roles — we build success stories.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Section 8: CTA */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, ${BRAND_BLUE}11, ${BRAND_ORANGE}11)`,
            borderColor: `linear-gradient(90deg, ${BRAND_BLUE}11, ${BRAND_ORANGE}11)`,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-2xl border border-gray-200 bg-white p-10 shadow-sm">
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold">
                  Let’s Build the Workforce of Tomorrow, Today.
                </h3>
                <p className="mt-2 max-w-3xl text-gray-700">
                  Whether you’re an employer seeking the right talent or a
                  professional ready for your next leap — we connect skill with
                  opportunity.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <PopupForm
                ctaTitle={
                  <span className="flex items-center justify-center gap-2">
                    Hire Talent
                    <Handshake className="ml-2 h-5 w-5" />
                  </span>
                }
                pageUrl="/about-us"
                className="group px-5 py-3 bg-gradient-to-r from-[#ff6900] to-[#d85a00] text-white rounded-xl font-semibold shadow-lg shadow-[#ff6900]/25 hover:shadow-xl hover:shadow-[#ff6900]/40 transition-all transform hover:scale-[1.02] active:scale-[0.98] duration-200"
              />

              <a
                href="https://www.skillzrevo.com/work-with-us"
                className="group px-5 py-3 flex w-fit bg-gradient-to-r from-[#1d8fff] to-[#0066cc] text-white rounded-xl font-semibold shadow-lg shadow-[#1d8fff]/25 hover:shadow-xl hover:shadow-[#1d8fff]/40 transition-all transform hover:scale-[1.02] active:scale-[0.98] duration-200"
              >
                Apply Now
                <Users className="ml-2 h-5 w-5" />
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note / Short Summary */}
      <footer className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-600">
          <p>
            SkillzRevo Talent, a division of SkillzRevo Solutions Pvt. Ltd., is
            a specialized staffing and workforce solutions partner focused on
            Data Science, AI, Cybersecurity, Cloud, and Emerging Technologies.
            From permanent and contract staffing to offshore teams and RPO
            services, we help businesses scale faster with the right talent —
            driving growth, innovation, and future-readiness.
          </p>
        </div>
      </footer>

      {/* Hidden: SEO Keywords you can feed to CMS/meta */}
      <div className="sr-only">
        Staffing company in India, IT staffing solutions, AI and Data Science
        recruitment, Contract staffing agency, EdTech staffing solutions, Tech
        talent hiring company, Corporate recruitment partner, Emerging
        technology hiring, SkillzRevo Talent staffing solutions, Future-ready
        workforce
      </div>
    </div>
  );
}
