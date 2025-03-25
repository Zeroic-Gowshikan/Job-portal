import React, { useState, useEffect } from "react";
import { FaSearch, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import searchicon from '../assets/searchicon.png';
import locationicon from '../assets/Location.png';
import jobtypeicon from '../assets/jobtypeicon.png';
import downicon from '../assets/downicon.png';
import classes from '../style/inputfield.module.css';

const InputFields = ({ jobs, onFilter }) => {
  const [salaryRange, setSalaryRange] = useState([50000, 1200000]);
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
    <div className="flex justify-center items-center p-4 bg-white shadow-sm rounded-lg w-full  mt-2 h-[80px]">
      {/* Search Field */}
      <div className="flex items-center px-4 py-2 w-64 border-r-2 w-[300px]">
      <img src={searchicon} alt="search" className="mr-4" />
        <input
          type="text"
          placeholder="Search by Job Title, Role"
          className="outline-none bg-transparent w-full"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Location Field */}
      <div className="flex items-center px-4 py-2 w-48 relative border-r-2 w-[300px]">
      <img src={locationicon} alt="search" className="mr-4" />
        <input
          type="text"
          placeholder="Preferred Location"
          className="outline-none bg-transparent w-full"
          value={location}
          onChange={handleLocationChange}
        />
        <img src={downicon} alt="search" className="ml-4" />
      </div>

      {/* Job Type Field */}
      <div className="flex items-center px-4 py-2 w-40 relative border-r-2 w-[300px]">
      <img src={jobtypeicon} alt="search" className="mr-4" />
        <select
          value={jobType}
          onChange={handleJobTypeChange}
          className="outline-none bg-transparent w-full appearance-none text-gray-500"
        >
          <option value="">Job Type</option>
          <option value="internship">Internship</option>
          <option value="fulltime">Full-Time</option>
          <option value="parttime">Part-Time</option>
          <option value="contract">Contract</option>
        </select>
        <img src={downicon} alt="search" className="ml-4" />
      </div>

      {/* Salary Range Slider */}
      <div className="flex items-center space-x-2 ml-4 flex-col">
        <span className="text-gray-500 mb-4">Salary Per Month ₹{(salaryRange[0] / 1000).toFixed(0)}k - ₹{(salaryRange[1] / 1000).toFixed(0)}k</span>
        <input
  type="range"
  min="500000"
  max="2000000"
  value={salaryRange[1]}
  onChange={handleSalaryChange}
  className={`w-48 h-[2px] rounded-full appearance-none cursor-pointer ${classes.slider}`}
  style={{
    WebkitAppearance: "none",
    appearance: "none",
    height: "2px",
    borderRadius: "9999px",
    background: `linear-gradient(to right, black ${
      ((salaryRange[1] - 500000) / (2000000 - 500000)) * 100
    }%, #D3D3D3 ${
      ((salaryRange[1] - 500000) / (2000000 - 500000)) * 100
    }%)`,
  }}
/>


      
      </div>
    </div>
  );
};

export default InputFields;
