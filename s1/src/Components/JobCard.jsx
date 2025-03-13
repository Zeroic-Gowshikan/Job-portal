import React from "react";

const JobCard = ({ logo, title, company, mode, salary, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-sm">
      {/* Job Logo & Time */}
      <div className="flex justify-between items-center">
        <img src={logo} alt="Company Logo" className="w-10 h-10 rounded-full object-contain" />
        <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-md">
          24h Ago
        </span>
      </div>

      {/* Job Title */}
      <h3 className="text-lg font-semibold mt-3">{title}</h3>

      {/* Job Info */}
      <div className="flex items-center text-gray-500 text-sm space-x-3 mt-1">
        <span>🏢 {company}</span>
        <span>📍 {mode}</span>
        <span>💰 {salary}</span>
      </div>

      {/* Job Description */}
      <p className="text-gray-600 text-sm mt-2">{description}</p>

      {/* Apply Button */}
      <button className="w-full bg-blue-500 text-white py-2 mt-3 rounded-md hover:bg-blue-600">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
