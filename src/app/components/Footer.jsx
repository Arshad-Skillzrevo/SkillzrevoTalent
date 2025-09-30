import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { FaMapPin, FaClock, FaEnvelope, FaPhone } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0e457b] text-white">
      {/* Social Bar */}
      <div className="bg-[#1d8fff] py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white heading-oswald uppercase">
            Follow Us on Social Media
          </h2>
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
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto max-md:px-4">
        <div className="flex max-md:flex-col justify-between w-full gap-6 md:gap-8">
          {/* Logo + About */}
          <div className="bg-[#ff5e14] py-6 px-2 lg:col-span-1 flex flex-col justify-between md:min-w-[220px] md:max-w-[250px]">
            <img
              src="/SkillzRevo_White.webp"
              alt="SkillzRevo Logo"
              className="w-[80%] mb-5 self-center object-cover"
            />
            <p className="text-sm font-light text-center text-white leading-relaxed">
              SkillzRevo Solutions Pvt Ltd provides Staffing, Consulting, and
              Training services, connecting talent and organizations worldwide.
            </p>
          </div>

          {/* Links Sections */}
          <div className="flex max-md:flex-col justify-between w-full gap-5 py-12">
            {/* Useful Links */}
            {/* <div>
              <h4 className="text-lg font-bold mb-4">Useful Links</h4>
              <ul className="text-sm space-y-2 custom-bullet">
                <li>
                  <a href="https://skillzrevo.com/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about-us/"
                    className="hover:underline"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/channel-partner/"
                    className="hover:underline"
                  >
                    Channel Partner
                  </a>
                </li>
                <li>
                  <a
                    href="/contact-us/"
                    className="hover:underline"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div> */}

            {/* For Businesses */}


            {/* Staffing Services */}
            <div>
              <h4 className="text-lg font-bold mb-4">Staffing Services</h4>
              <ul className="text-sm space-y-2 custom-bullet">
                <li>
                  <a
                    href="/it-recruitment/"
                    className="hover:underline"
                  >
                    IT Recruitment
                  </a>
                </li>
                <li>
                  <a
                    href="/contract-staffing/"
                    className="hover:underline"
                  >
                    Contract Staffing
                  </a>
                </li>
                <li>
                  <a
                    href="/permanent-staffing/"
                    className="hover:underline"
                  >
                    Permanent Staffing
                  </a>
                </li>
                <li>
                  <a
                    href="/remote-staffing-offshore-teams/"
                    className="hover:underline"
                  >
                    Remote Staffing & Offshore Teams
                  </a>
                </li>
                <li>
                  <a
                    href="/recruitment-process-outsourcing/"
                    className="hover:underline"
                  >
                    Recruitment Process Outsourcing
                  </a>
                </li>
                <li>
                  <a
                    href="/campus-fresher-hiring/"
                    className="hover:underline"
                  >
                    Campus & Fresher Hiring
                  </a>
                </li>
              </ul>
            </div>

                        <div>
              <h4 className="text-lg font-bold mb-4">For Businesses</h4>
              <ul className="text-sm space-y-2 custom-bullet">
                <li>
                  <a
                    href="https://skillzrevo.com/"
                    className="hover:underline"
                  >
                    Training (Academy)
                  </a>
                </li>
                <li>
                  <a href="/corporate-training" className="hover:underline">
                    Corporate Training
                  </a>
                </li>
                
                <li>
                  <a
                    href="https://consulting.skillzrevo.com/"
                    className="hover:underline"
                  >
                    Consulting
                  </a>
                </li>
              </ul>
            </div>

            {/* Partner with Us */}
            <div>
              <h4 className="text-lg font-bold mb-4">Partner with Us</h4>
              <ul className="text-sm space-y-2 custom-bullet">
                <li>
                  <a href="https://skillzrevo.com/channel-partner" className="hover:underline">
                    Training Channel Partner
                  </a>
                </li>
                <li>
                  <a
                    href="/channel-partner/"
                    className="hover:underline"
                  >
                    Staffing Channel Partner
                  </a>
                </li>
                <li>
                  <a
                    href="https://consulting.skillzrevo.com/channel-partner/"
                    className="hover:underline"
                  >
                    Consulting Channel Partner
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2 max-w-xs">
                  <FaMapPin className="mt-1 text-white min-w-4 min-h-4" />
                  SkillzRevo Solutions Pvt Ltd, Plot No.- GH01A, Sector-16C T-11
                  Suite No.-1901, Gautam Buddha Nagar, Greater Noida
                </li>
                <li className="flex items-center gap-2">
                  <FaClock className="text-white min-w-4 min-h-4" /> 8:30 AM –
                  8:30 PM EST
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-white min-w-4 min-h-4" />{" "}
                  staffing@skillzrevo.com
                </li>
                <li className="flex items-center gap-2">
                  <FaPhone className="text-white min-w-4 min-h-4" /> +91
                  96323 47896
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 content-center items-center justify-center mx-auto max-md:px-4 text-center border-t border-gray-700">
        <div className="flex md:flex-col justify-center md:justify-end text-xs max-md:mx-auto text-gray-400 md:text-white bg-[#ff5e14] py-4 gap-2 mt-2 md:mt-0 w-[250px]">
          <a href="https://www.skillzrevo.com/ShippingandDelivery" className="hover:underline">
            Shipping & Delivery
          </a>
          <a href="https://www.skillzrevo.com/cancellation-refund-policy" className="hover:underline">
            Refund Policy
          </a>
        </div>
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} SkillzRevo Solutions Pvt Ltd. All Rights
          Reserved
        </p>
        <div className="flex justify-center md:justify-end text-xs text-gray-400 gap-4 mt-2 md:mt-0">
          <a href="https://www.skillzrevo.com/TermsandConditions" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="https://www.skillzrevo.com/PrivacyPolicy" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
