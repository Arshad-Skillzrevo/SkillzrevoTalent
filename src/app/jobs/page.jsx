"use client";
import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";

export default function JobListingPage() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");
  const [remote, setRemote] = useState("");

  useEffect(() => {
    fetch("https://api.manatal.com/open/v3/career-page/skillzrevo/jobs/")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.results || []);
        setFilteredJobs(data.results || []);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = jobs.filter((job) => {
      const matchesSearch = job.position_name.toLowerCase().includes(search.toLowerCase());
      const matchesType = jobType ? job.contract_details === jobType : true;
      const matchesLocation = location
        ? job.country?.toLowerCase() === location.toLowerCase() || job.city?.toLowerCase() === location.toLowerCase()
        : true;
      const matchesRemote =
        remote === ""
          ? true
          : remote === "yes"
          ? job.is_remote === true
          : job.is_remote === false;
      return matchesSearch && matchesType && matchesLocation && matchesRemote;
    });
    setFilteredJobs(filtered);
  }, [search, jobType, location, remote, jobs]);

  const uniqueLocations = [...new Set(jobs.map((job) => job.country || job.city).filter(Boolean))];
  const uniqueTypes = [...new Set(jobs.map((job) => job.contract_details).filter(Boolean))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-[#1d8fff] mb-6">
          Explore Career Opportunities
        </h1>

        {/* Search & Filters */}
        <div className="grid md:grid-cols-4 gap-4 bg-white shadow p-4 rounded-xl">
          <input
            type="text"
            placeholder="Search job title..."
            className="border p-2 rounded-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border p-2 rounded-lg"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="">All Job Types</option>
            {uniqueTypes.map((type, i) => (
              <option key={i} value={type}>{type.replace("_", " ")}</option>
            ))}
          </select>

          <select
            className="border p-2 rounded-lg"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">All Locations</option>
            {uniqueLocations.map((loc, i) => (
              <option key={i} value={loc}>{loc}</option>
            ))}
          </select>

          <select
            className="border p-2 rounded-lg"
            value={remote}
            onChange={(e) => setRemote(e.target.value)}
          >
            <option value="">Remote / Onsite</option>
            <option value="yes">Remote</option>
            <option value="no">Onsite</option>
          </select>
        </div>

        {/* Job Listings */}
        {loading ? (
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse bg-gray-200 h-48 rounded-lg" />
            ))}
          </div>
        ) : filteredJobs.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h2 className="text-xl font-semibold text-[#1d8fff]">{job.position_name}</h2>
                <p className="text-gray-500 text-sm mt-1">
                  {job.location_display || "Location not specified"}
                </p>
                <p className="text-sm text-[#ff6900] capitalize mt-1">{job.contract_details}</p>
                <div
                  className="mt-3 text-gray-700 text-sm"
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(job.description.slice(0, 300)) }}
                />
                <a
                  href={`https://careers-page.com/skillzrevo/job/${job.hash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-[#1d8fff] text-white px-4 py-2 rounded-lg hover:bg-[#166fd1] transition-all"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-6">No jobs found.</p>
        )}
      </div>
    </div>
  );
}
