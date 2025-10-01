import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PartnershipTable = () => {
  const [hoveredCol, setHoveredCol] = useState(null);

  const headers = [
    { title: 'Lead Referral Partner', color: 'from-blue-500 to-blue-600' },
    { title: 'Recruitment Associate Partner', color: 'from-cyan-500 to-cyan-600' },
    { title: 'Franchise / Regional Partner', color: 'from-indigo-500 to-indigo-600' }
  ];

  const rows = [
    {
      label: 'Role',
      values: ['Share potential client leads', 'Source and submit qualified talent', 'End-to-end staffing delivery in region']
    },
    {
      label: 'Ideal For',
      values: ['Freelancers, Industry Contacts', 'Recruitment Consultants, Solo HRs', 'Agencies, HR Entrepreneurs']
    },
    {
      label: 'Involvement Level',
      values: ['Low - Just refer', 'Medium - Candidate sourcing', 'High - Own full recruitment cycle']
    },
    {
      label: 'Revenue Share',
      values: ['10-15% of net revenue', '30-50% of placement fee', '60-70% of net revenue']
    },
    {
      label: 'Client Ownership',
      values: ['SkillzRevo-managed', 'SkillzRevo-managed', 'Joint or Full (based on region)']
    },
    {
      label: 'Brand Representation',
      values: ['Not required', 'Optional', 'Mandatory (with branding toolkit)']
    },
    {
      label: 'Tech Access (CRM, ATS)',
      values: ['No', 'Optional (ATS Access)', 'Full CRM + ATS Access']
    },
    {
      label: 'Support Provided',
      values: ['Dedicated Manager, Deal Closure', 'Job Briefs, Sourcing Help, ATS', 'Branding, Training, Mandates, Tech']
    },
    {
      label: 'Investment Required',
      values: ['None', 'None', 'Moderate (based on region setup)']
    },
    {
      label: 'Training Provided',
      values: ['Lead Conversion Know-how', 'Recruitment Process Training', 'Full Sales + Ops Enablement']
    },
    {
      label: 'Payout Timeline',
      values: ['Post invoice payment by client', 'Post candidate joining', 'Monthly Revenue Share Cycle']
    },
    {
      label: 'Growth Opportunity',
      values: ['Side income stream', 'Scalable income via sourcing', 'Regional business unit under SkillzRevo']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 py-16 px-4">
      <div className="overflow-hidden mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
            Find the Right Fit for Your Expertise and Business Goals
          </h1>
          <p className="text-lg md:text-xl text-blue-50 max-w-4xl mx-auto">
            Whether you're a solo consultant, a small recruiting team, or a full-fledged agency — we have a model designed for your level of involvement, earning potential, and business vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="bg-blue-100 px-6 py-5 text-left font-bold text-blue-900 border-b-2 border-blue-200 w-1/6">
                    Feature / Criteria
                  </th>
                  {headers.map((header, idx) => (
                    <motion.th
                      key={idx}
                      onMouseEnter={() => setHoveredCol(idx)}
                      onMouseLeave={() => setHoveredCol(null)}
                      className={`px-6 py-5 text-center font-bold text-white border-b-2 border-blue-200 w-1/5 transition-all duration-300 ${
                        hoveredCol === idx ? '-translate-y-2' : ''
                      }`}
                      style={{
                        background: `linear-gradient(135deg, ${
                          idx === 0 ? '#3b82f6, #2563eb' : idx === 1 ? '#06b6d4, #0891b2' : '#6366f1, #4f46e5'
                        })`
                      }}
                    >
                      {header.title}
                    </motion.th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIdx) => (
                  <motion.tr
                    key={rowIdx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: rowIdx * 0.05 }}
                    className="hover:bg-blue-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 font-semibold text-gray-700 bg-blue-50 border-b border-gray-200">
                      {row.label}
                    </td>
                    {row.values.map((value, colIdx) => (
                      <motion.td
                        key={colIdx}
                        whileHover={{ scale: 1.02 }}
                        className={`px-6 py-4 text-center border-b border-gray-200 transition-all duration-300 ${
                          hoveredCol === colIdx ? 'bg-blue-50 font-semibold' : ''
                        }`}
                      >
                        <span className={`${hoveredCol === colIdx ? 'text-blue-700 ' : 'text-gray-700'}`}>
                          {value}
                        </span>
                      </motion.td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Get Started Today
          </button>
        </motion.div> */}
      </div>
    </div>
  );
};

export default PartnershipTable;