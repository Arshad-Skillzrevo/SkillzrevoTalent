"use client";

import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow">
      <nav className="mx-auto flex max-w-8xl items-center justify-between gap-5 px-4 py-3 lg:px-8 xl:px-16">
        {/* Logo */}
        <a href="https://skillzrevotalent.com/" className="flex items-center">
          <img
            src="https://skillzrevotalent.com/wp-content/uploads/2025/07/SkillzRevo-FINAL-LOGO_1.webp"
            alt="SkillzRevo Logo"
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 font-medium text-gray-700">
          <a
            href="https://skillzrevo.com/"
            className="hover:text-[#1d8fff] border-b-2 border-transparent hover:border-[#1d8fff] transition-colors text-sm"
          >
            Home
          </a>

          <a
            href="https://skillzrevotalent.com/about-us/"
            className="hover:text-[#1d8fff] border-b-2 border-transparent hover:border-[#1d8fff] transition-colors text-sm"
          >
            About Us
          </a>

          {/* Staffing Services */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm hover:text-[#1d8fff] border-b-2 border-transparent hover:border-[#1d8fff] transition-colors">
              Staffing Services <FaChevronDown size={12} />
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md border border-gray-200 w-56 z-50">
              {[
                ["IT Recruitment", "https://skillzrevotalent.com/it-recruitment/"],
                ["Contract Staffing", "https://skillzrevotalent.com/contract-staffing/"],
                ["Permanent Staffing", "https://skillzrevotalent.com/permanent-staffing/"],
                ["Remote Staffing & Offshore Teams", "https://skillzrevotalent.com/remote-staffing-offshore-teams/"],
                ["Recruitment Process Outsourcing", "https://skillzrevotalent.com/recruitment-process-outsourcing/"],
                ["Campus & Fresher Hiring", "https://skillzrevotalent.com/campus-fresher-hiring/"],
              ].map(([label, link]) => (
                <a
                  key={label}
                  href={link}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#1d8fff] transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Partner with Us */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm hover:text-[#1d8fff] border-b-2 border-transparent hover:border-[#1d8fff] transition-colors">
              Partner with Us <FaChevronDown size={12} />
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md border border-gray-200  w-56 z-50">
              <a
                href="https://skillzrevotalent.com/channel-partner/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#1d8fff]"
              >
                Staffing Partner
              </a>
              <a
                href="https://testing.skillzrevo.com/Channel-Partner"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#1d8fff]"
              >
                Training Partner
              </a>
              <a
                href="https://consulting.skillzrevo.com/channel-partner/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#1d8fff]"
              >
                Consulting Partner
              </a>
            </div>
          </div>

          {/* For Businesses */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm hover:text-[#1d8fff] border-b-2 border-transparent hover:border-[#1d8fff] transition-colors">
              For Businesses <FaChevronDown size={12} />
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md border border-gray-200  w-56 z-50">
              <a
                href="http://skillzrevo.com/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#1d8fff]"
              >
                Training
              </a>
              <a
                href="https://skillzrevo.com/corporate-training/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#1d8fff]"
              >
                Corporate Training
              </a>
            </div>
          </div>

          <a
            href="https://skillzrevotalent.com/contact-us/"
            className="hover:text-[#1d8fff] border-b-2 border-transparent hover:border-[#1d8fff] transition-colors text-sm"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-gray-700"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md border-t border-gray-200">
          <nav className="flex flex-col px-4 py-3 text-gray-700 font-medium space-y-2">
            <a href="https://skillzrevo.com/" className="py-2">Home</a>
            <a href="https://skillzrevotalent.com/about-us/" className="py-2">About Us</a>

            {/* Staffing Services */}
            <div>
              <button
                onClick={() => handleDropdown("staffing")}
                className="flex justify-between w-full py-2"
              >
                Staffing Services <FaChevronDown />
              </button>
              {openDropdown === "staffing" && (
                <div className="ml-4 flex flex-col space-y-1">
                  <a href="https://skillzrevotalent.com/it-recruitment/">IT Recruitment</a>
                  <a href="https://skillzrevotalent.com/contract-staffing/">Contract Staffing</a>
                  <a href="https://skillzrevotalent.com/permanent-staffing/">Permanent Staffing</a>
                  <a href="https://skillzrevotalent.com/remote-staffing-offshore-teams/">Remote Staffing</a>
                  <a href="https://skillzrevotalent.com/recruitment-process-outsourcing/">RPO</a>
                  <a href="https://skillzrevotalent.com/campus-fresher-hiring/">Campus Hiring</a>
                </div>
              )}
            </div>

            {/* Partner with Us */}
            <div>
              <button
                onClick={() => handleDropdown("partner")}
                className="flex justify-between w-full py-2"
              >
                Partner with Us <FaChevronDown />
              </button>
              {openDropdown === "partner" && (
                <div className="ml-4 flex flex-col space-y-1">
                  <a href="https://skillzrevotalent.com/channel-partner/">Staffing Partner</a>
                  <a href="https://testing.skillzrevo.com/Channel-Partner">Training Partner</a>
                  <a href="https://consulting.skillzrevo.com/channel-partner/">Consulting Partner</a>
                </div>
              )}
            </div>

            {/* For Businesses */}
            <div>
              <button
                onClick={() => handleDropdown("business")}
                className="flex justify-between w-full py-2"
              >
                For Businesses <FaChevronDown />
              </button>
              {openDropdown === "business" && (
                <div className="ml-4 flex flex-col space-y-1">
                  <a href="http://skillzrevo.com/">Training</a>
                  <a href="https://skillzrevo.com/corporate-training/">Corporate Training</a>
                </div>
              )}
            </div>

            <a href="https://skillzrevotalent.com/contact-us/" className="py-2">Contact Us</a>
          </nav>
        </div>
      )}
    </header>
  );
}
