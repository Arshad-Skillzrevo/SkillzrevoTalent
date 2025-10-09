"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

export default function PopupForm({
  ctaTitle = "Enquire Now",
  pageUrl = "",
  className = "",
  service = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    email: "",
    serviceRequired: service || "",
    companyName: "",
    companyWebsite: "",
    comment: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const services = [
    "IT Recruitment",
    "Contract Staffing",
    "Permanent Staffing",
    "Remote Staffing & Offshore Teams",
    "Recruitment Process Outsourcing",
    "Campus & Fresher Hiring",
    "Train-to-Hire",
    "Contact-to-Hire",
    "Bulk Hiring",
    "Executive Search",
    "Vendor Management Solutions",
  ];

  // Real-time input handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    // 🔹 Real-time auto-prefix for company website
    if (name === "companyWebsite") {
      let updated = value.trim();

      // Add https://www. if missing
      if (
        updated &&
        !/^https?:\/\//i.test(updated) &&
        !updated.startsWith("www.")
      ) {
        updated = `https://www.${updated}`;
      } else if (updated.startsWith("www.")) {
        updated = `https://${updated}`;
      }

      setFormData((prev) => ({ ...prev, [name]: updated }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...formData,
      pageUrl,
      ctaTitle,
      timestamp: new Date().toISOString(),
    };

    try {
      // 🔹 Replace with your NeoDove integration endpoint
      const response = await fetch(
        "https://4606bd36-c5fd-4702-b793-059cd091a766.neodove.com/integration/custom/df242b29-14fc-4eff-91bc-3137ad158120/leads",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        setSuccess(true);
        setFormData({
          fullName: "",
          contact: "",
          email: "",
          serviceRequired: service || "",
          companyName: "",
          companyWebsite: "",
          comment: "",
        });

        // 🔸 If CTA is "Download Brochure" → trigger file download
        if (ctaTitle.toLowerCase().includes("download brochure")) {
          const link = document.createElement("a");
          link.href = "/staffing-brochure.pdf"; // <-- Update this path
          link.download = "staffing-brochure.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }

        setTimeout(() => {
          setSuccess(false);
          setIsOpen(false);
        }, 3000);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* CTA Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`px-5 py-3 rounded-lg font-semibold  transition-all duration-300 ${className} `}
      >
        {ctaTitle}
      </button>

      {/* Popup Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 md:p-8 overflow-y-auto max-h-[90vh] z-50"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-[#ff6900]"
                onClick={() => setIsOpen(false)}
              >
                <X size={24} />
              </button>

              {/* Title */}
              <h2 className="text-2xl font-bold text-center text-[#1d8fff] mb-6">
                {ctaTitle} {service && ` - ${service}`}
              </h2>

              {/* Success Animation */}
              {success ? (
                <motion.div
                  className="flex flex-col items-center text-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-700">
                    Thank you! Your details have been submitted.
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    We’ll get in touch with you soon.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 text-gray-800"
                >
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1d8fff]"
                  />

                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Contact Number"
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#1d8fff]"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email ID"
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#1d8fff]"
                  />

                  {/* Service dropdown or hidden input */}
                  {service ? (
                    <input
                      type="hidden"
                      name="serviceRequired"
                      value={service}
                    />
                  ) : (
                    <select
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#1d8fff]"
                    >
                      <option value="">Select Service Required</option>
                      {services.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  )}

                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#1d8fff]"
                  />

                  <input
                    type="text"
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleChange}
                    placeholder="Company Website (e.g., skillzrevo.com)"
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#1d8fff]"
                  />

                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    placeholder="Comment (optional)"
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#1d8fff]"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-[#ff6900] text-white font-semibold rounded-lg hover:bg-[#1d8fff] transition-all duration-300"
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
