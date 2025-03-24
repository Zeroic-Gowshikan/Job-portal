import React, { useState, useEffect } from "react";
import { FaSearch, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const InputFields = ({ jobs, onFilter }) => {
  const [salaryRange, setSalaryRange] = useState([500000, 1200000]);
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");

  // Helper function to check if all words in the query match the job title
  const doesMatch = (title, query) => {
    const normalizedTitle = title.toLowerCase().replace(/\s+/g, "");
    const normalizedQuery = query.toLowerCase().replace(/\s+/g, "");

    const queryWords = normalizedQuery.split(/[^a-zA-Z0-9]+/).filter(Boolean);
    return queryWords.every((word) => normalizedTitle.includes(word));
  };

  // Apply filters whenever any of the filter criteria change
  useEffect(() => {
  

    const isDefaultFilters =
      !searchQuery &&
      !location &&
      !jobType &&
      salaryRange[0] === 500000 &&
      salaryRange[1] === 1200000;

    if (isDefaultFilters) {
   
      onFilter(jobs);
      return;
    }

    const filtered = jobs.filter((job) => {


      const matchesTitle = !searchQuery || doesMatch(job.title, searchQuery);
   

      const matchesLocation =
        !location ||
        job.location.toLowerCase().trim().includes(location.toLowerCase().trim());


      const matchesJobType =
        !jobType || job.jobType.toLowerCase().trim() === jobType.toLowerCase().trim();
   

      const matchesSalary =
        job.salaryfrom >= salaryRange[0] && job.salaryto <= salaryRange[1];


      const matchesAll = matchesTitle && matchesLocation && matchesJobType && matchesSalary;


      return matchesAll;
    });

 
    onFilter(filtered);
  }, [jobs, searchQuery, location, jobType, salaryRange]);

  const handleSalaryChange = (e) => {
    const value = Number(e.target.value);
    setSalaryRange((prev) => [prev[0], value]);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  const handleLocationChange = (event) => {
    const value = event.target.value.trim(); // Trim spaces
    setLocation(value);
  };

  const handleJobTypeChange = (event) => {
    const value = event.target.value.trim(); // Trim spaces

    setJobType(value);
  };

  return (
    <div className="flex justify-center items-center space-x-4 p-4 bg-white shadow-md rounded-lg">
      {/* Search Field */}
      <div className="flex items-center border rounded-full px-4 py-2 bg-gray-100 w-64">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search by Job Title, Role"
          className="outline-none bg-transparent w-full text-sm"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Location Field */}
      <div className="flex items-center border rounded-full px-4 py-2 bg-gray-100 w-48 relative">
        <FaMapMarkerAlt className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Preferred Location"
          className="outline-none bg-transparent w-full text-sm"
          value={location}
          onChange={handleLocationChange}
        />
        <IoIosArrowDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
      </div>

      {/* Job Type Field */}
      <div className="flex items-center border rounded-full px-4 py-2 bg-gray-100 w-40 relative">
        <FaBriefcase className="text-gray-500 mr-2" />
        <select
          value={jobType}
          onChange={handleJobTypeChange}
          className="outline-none bg-transparent w-full text-sm appearance-none"
        >
          <option value="">Job Type</option>
          <option value="internship">Internship</option>
          <option value="fulltime">Full-Time</option>
          <option value="parttime">Part-Time</option>
          <option value="contract">Contract</option>
        </select>
        <IoIosArrowDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
      </div>

      {/* Salary Range Slider */}
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-500">Salary Per Month</span>
        <input
          type="range"
          min="500000"
          max="2000000"
          value={salaryRange[1]}
          onChange={handleSalaryChange}
          className="w-32 accent-blue-500"
        />
        <span className="text-sm text-gray-500">
          ₹{(salaryRange[0] / 1000).toFixed(0)}k - ₹{(salaryRange[1] / 1000).toFixed(0)}k
        </span>
      </div>
    </div>
  );
};

export default InputFields;