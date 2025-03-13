import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const InputFields = () => {
  const [salary, setSalary] = useState([50000, 200000]);

  const handleSalaryChange = (e) => {
    const value = Number(e.target.value);
    setSalary((prev) => [prev[0], value]);
  };

  return (
    <div className="flex justify-center items-center space-x-4 p-4 bg-white  shadow-md rounded-lg">
      {/* Search Field */}
      <div className="flex items-center border rounded-full px-4 py-2 bg-gray-100 w-64">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search by Job Title, Role"
          className="outline-none bg-transparent w-full text-sm"
        />
      </div>

      {/* Location Field */}
      <div className="flex items-center border rounded-full px-4 py-2 bg-gray-100 w-48">
        <FaMapMarkerAlt className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Preferred Location"
          className="outline-none bg-transparent w-full text-sm"
        />
        <IoIosArrowDown className="text-gray-500 ml-2" />
      </div>

      {/* Job Type Field */}
      <div className="flex items-center border rounded-full px-4 py-2 bg-gray-100 w-40">
        <FaBriefcase className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Job Type"
          className="outline-none bg-transparent w-full text-sm"
        />
        <IoIosArrowDown className="text-gray-500 ml-2" />
      </div>

      {/* Salary Range Slider */}
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-500">Salary Per Month</span>
        <input
          type="range"
          min="50000"
          max="200000"
          value={salary[1]}
          onChange={handleSalaryChange}
          className="w-32 accent-blue-500"
        />
        <span className="text-sm text-gray-500">
          ₹{(salary[0] / 1000).toFixed(0)}k - ₹{(salary[1] / 1000).toFixed(0)}k
        </span>
      </div>
    </div>
  );
};

export default InputFields;
