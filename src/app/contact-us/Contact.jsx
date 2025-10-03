"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import {
  BuildingOfficeIcon,
  DocumentTextIcon,
  UserGroupIcon,
  AcademicCapIcon,
  ArrowUturnLeftIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  PhoneIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";

import MainSegments from "./MainSegments";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    altMobile: "",
    email: "",
    country: "",
    experience: "",
    qualification: "",
    role: "",
  });
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const countries = [
    "India",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "United Arab Emirates",
    "Singapore",
    "Germany",
    "Other",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    const payload = {
      name: formData.name,
      mobile: formData.mobile,
      email: formData.email,
      AltMobile: formData.altMobile,
      Country: formData.country,
      Experience: formData.experience,
      Qualification: formData.qualification,
      Role: formData.role,
    };

    try {
      const response = await fetch(
        "https://4606bd36-c5fd-4702-b793-059cd091a766.neodove.com/integration/custom/9c9b17fd-f2e6-46fe-a926-21a8c9ea4f00/leads",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        setStatus("success");
        setMessage("✅ Your enquiry has been sent successfully!");
        setFormData({
          name: "",
          mobile: "",
          altMobile: "",
          email: "",
          country: "",
          experience: "",
          qualification: "",
          role: "",
        });
        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 4000);
      } else {
        setStatus("error");
        setMessage("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("❌ An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-w-full min-h-screen bg-white">
      {/* HERO SECTION */}
      <div className="relative flex justify-center items-center py-32 bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
          alt="Contact Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800/80 to-transparent"></div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl text-center font-bold text-white z-10 drop-shadow-xl"
        >
          We Are Here to Help!
        </motion.h1>
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-50"
      >
        <div className="text-center text-3xl md:text-5xl font-bold my-12 text-[#1d8fff] uppercase">
          Contact SkillzRevo
        </div>

        {/* Contact Info + Form */}
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 py-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-600 text-lg">
              For any questions, concerns, or assistance related to our
              services, please reach out using the following:
            </p>

            {[
              {
                icon: <EnvelopeIcon className="text-[#1d8fff] h-6 w-6" />,
                title: "Customer Support Email",
                value: "support@skillzrevo.com",
              },
              {
                icon: <PhoneIcon className="text-[#1d8fff] h-6 w-6" />,
                title: "Customer Support Phone",
                value: "+1 (987) 654-8569, +1 (456) 877-4695",
              },
              {
                icon: <PaperAirplaneIcon className="text-[#1d8fff] h-6 w-6" />,
                title: "Fax and Mail",
                value: "+1 (123) 978-1811",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                {item.icon}
                <div>
                  <h4 className="font-bold text-gray-800">{item.title}</h4>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl shadow-lg border border-gray-100 bg-white"
          >
            <h2 className="text-2xl font-bold text-center text-[#1d8fff] mb-4">
              Send Us Any Question, Suggestion, or Enquiry
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name *"
                className="border border-gray-300 p-3 rounded-md w-full"
                required
              />
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number *"
                className="border border-gray-300 p-3 rounded-md w-full"
                required
              />
              <input
                type="text"
                name="altMobile"
                value={formData.altMobile}
                onChange={handleChange}
                placeholder="Alternate Mobile No."
                className="border border-gray-300 p-3 rounded-md w-full"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                className="border border-gray-300 p-3 rounded-md w-full"
                required
              />
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-md w-full"
                required
              >
                <option value="">Select Country *</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Years of Experience"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
              <input
                type="text"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                placeholder="Highest Qualification"
                className="border border-gray-300 p-3 rounded-md w-full"
              />
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Current Role"
                className="border border-gray-300 p-3 rounded-md w-full"
              />

              <div className="flex items-center md:col-span-2 text-sm text-gray-600">
                <input type="checkbox" className="mr-2" id="terms" required />
                <label htmlFor="terms">
                  By providing your contact details, you agree to our{" "}
                  <a href="/TermsandConditions" className="text-[#1d8fff] underline">
                    Terms of Use
                  </a>{" "}
                  &{" "}
                  <a href="/PrivacyPolicy" className="text-[#1d8fff] underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-[#1d8fff] text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition md:col-span-2"
                disabled={status === "sending"}
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                  ? "Sent!"
                  : "Send"}
              </motion.button>

              {message && (
                <div
                  className={`mt-2 text-center text-sm font-semibold md:col-span-2 ${
                    status === "success" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {message}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* Keep the rest (MainSegments, Enquiries, Offices) */}
      <MainSegments />
    </div>
  );
}
