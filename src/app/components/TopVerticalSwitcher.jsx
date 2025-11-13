"use client"
import Link from "next/link"
import Image from "next/image"
import {
  HomeIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa"

const verticals = [
  {
    name: "Home",
    slug: "skillzrevo",
    href: "https://skillzrevo.com",
    icon: HomeIcon,
  },
  {
    name: "Academy",
    slug: "academy",
    href: "https://academy.skillzrevo.com",
    icon: AcademicCapIcon,
  },
  {
    name: "Talent",
    slug: "talent",
    href: "https://talent.skillzrevo.com",
    icon: BriefcaseIcon,
  },
  {
    name: "Consulting",
    slug: "consulting",
    href: "https://consulting.skillzrevo.com",
    icon: BuildingOffice2Icon,
  },
]

export default function TopVerticalSwitcher() {
  return (
    <div className="sticky top-0 z-[20] w-full flex items-center justify-between bg-[#1d8fff] text-white text-xs">
  
      <div className="flex items-end">
        <Link href="/" className="md:block h-full bg-white border-r-2 border-[#1d8fff] hidden px-4">
        <div className="relative w-[200px] h-[60px] ">
          <Image
            src="/Logo.webp"
            alt="SkillzRevo Logo"
            fill
            sizes="w-full h-[40px]"
            className="object-contain py-1"
            priority
          />
        </div>
      </Link>

      {/* Navigation */}
      <div className="flex h-full items-center">
        {verticals.map((v) => {
          const isActive = v.slug === "talent"
          const Icon = v.icon

          return (
            <Link
              href={v.href}
              key={v.name}
              className={`flex items-center gap-1 md:gap-2 px-2 md:px-6 py-4 heading-oswald uppercase md:text-sm font-medium transition-colors ${
                isActive
                  ? "bg-white text-[#1d8fff] font-semibold"
                  : "hover:bg-white/20"
              }`}
            >
              <Icon className="h-4 w-4 md:h-5 md:w-5" />
              {v.name}
            </Link>
          )
        })}
      </div>
      </div>

        <div className="flex space-x-2 text-white">
            <a
              href="https://www.facebook.com/skillzrevo/"
              className="hover:bg-[#ff5e14] p-2 rounded-md transition-colors duration-200"
            >
              <FaFacebookF className="size-6" />
            </a>
            <a
              href="https://x.com/skillzrevo89393"
              className="hover:bg-[#ff5e14] p-2 rounded-md transition-colors duration-200"
            >
              <FaTwitter className="size-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/skillzrevo/"
              className="hover:bg-[#ff5e14] p-2 rounded-md transition-colors duration-200"
            >
              <FaLinkedinIn className="size-6" />
            </a>
            <a
              href="https://www.instagram.com/skillzrevo"
              className="hover:bg-[#ff5e14] p-2 rounded-md transition-colors duration-200"
            >
              <FaInstagram className="size-6" />
            </a>
            <a
              href="https://www.youtube.com/@SkillzRevo"
              className="hover:bg-[#ff5e14] p-2 rounded-md transition-colors duration-200"
            >
              <FaYoutube className="size-6" />
            </a>
          </div>

    </div>
  )
}
