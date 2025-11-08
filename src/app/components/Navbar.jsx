// components/Navbar.jsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import TopVerticalSwitcher from "./TopVerticalSwitcher";

// 1. Centralized navigation data
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Staffing Services",
    href: "#",
    children: [
      { label: "IT Recruitment", href: "/it-recruitment" },
      { label: "Contract Staffing", href: "/contract-staffing" },
      { label: "Permanent Staffing", href: "/permanent-staffing" },
      { label: "Remote Staffing & Offshore Teams", href: "/remote-staffing-offshore-teams" },
      { label: "Recruitment Process Outsourcing", href: "/recruitment-process-outsourcing" },
      { label: "Campus & Fresher Hiring", href: "/campus-fresher-hiring" },
      { label: "Train-to-Hire", href: "/train-to-hire" },
      { label: "Contact-to-Hire", href: "/contact-to-hire" },
      { label: "Bulk Hiring", href: "/bulk-hiring" },
      { label: "Executive Search", href: "/executive-search" },
      { label: "Vendor Management Solutions (VMS)", href: "/vendor-management-solutions" },
    ],
  },
  {
    label: "Partner with Us",
    href: "#",
    children: [
      { label: "Staffing Partner", href: "/channel-partner/" },
      { label: "Training Partner", href: "https://skillzrevo.com/channel-partner" },
      { label: "Consulting Partner", href: "https://consulting.skillzrevo.com/channel-partner/" },
    ],
  },
  {
    label: "For Businesses",
    href: "#",
    children: [
        { label: "Training", href: "http://skillzrevo.com/" },
        { label: "Corporate Training", href: "https://skillzrevo.com/corporate-training/" },
        { label: "Consulting Services", href: "https://consulting.skillzrevo.com/" },
    ]
  },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname(); // Hook to get the current URL path

  // Close mobile menu on route change
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [pathname]);


  const handleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const NavLink = ({ href, children, className = "" }) => {
    const isActive = pathname === href;
    return (
      <Link href={href} className={`${className} text-sm transition-colors border-b-2 ${isActive ? 'text-[#1d8fff] border-[#1d8fff]' : 'text-gray-700 border-transparent hover:text-[#1d8fff] hover:border-[#1d8fff]'}`}>
        {children}
      </Link>
    );
  };

  return (
    <header className="bg-white sticky top-0 z-20 shadow-md">
      <TopVerticalSwitcher />
      <nav className="mx-auto flex max-w-8xl items-center justify-between gap-5 px-4 py-3 lg:px-8 xl:px-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          {/* 2. Use Next.js <Image> for performance */}
          <div className="relative w-[200px] h-[50px]">
            <Image
            src="/Logo.webp"
            alt="SkillzRevo Logo"
            // width={200} // Set appropriate width
            // height={50}
            fill
             // Set appropriate height
            // w-[200px] h-[50px]
            className="object-contain"
            priority // Load logo first
          />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 font-medium">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-[#1d8fff] transition-colors">
                  {link.label}
                  <FaChevronDown size={12} className="transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md border border-gray-100 w-60 z-50 mt-0 py-1">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#1d8fff] transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={link.label} href={link.href}>
                {link.label}
              </NavLink>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen} // 4. Accessibility improvement
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {/* 3. Added transitions for smoother open/close */}
      <div
        className={`lg:hidden absolute w-full bg-white shadow-lg border-t border-gray-200 transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-3 text-gray-700 font-medium space-y-2">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() => handleDropdown(link.label)}
                  className="flex justify-between items-center w-full py-2"
                  aria-expanded={openDropdown === link.label} // 4. Accessibility improvement
                >
                  {link.label}
                  <FaChevronDown
                    className={`transition-transform duration-200 ${
                      openDropdown === link.label ? "rotate-180" : "" // 3. Rotating icon
                    }`}
                  />
                </button>
                <div
                  className={`pl-4 overflow-hidden transition-all duration-300 ease-in-out ${
                    openDropdown === link.label ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="flex flex-col space-y-2 py-2">
                    {link.children.map((child) => (
                       <NavLink key={child.label} href={child.href} className="py-1">
                          {child.label}
                       </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink key={link.label} href={link.href} className="py-2">
                {link.label}
              </NavLink>
            )
          )}
        </nav>
      </div>
    </header>
  );
}