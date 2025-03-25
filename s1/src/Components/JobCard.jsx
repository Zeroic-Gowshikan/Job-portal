import React from "react";
import classes from '../style/jobCard.module.css';
import xplogo from '../assets/explogo.png';
import loc from '../assets/loclogo.png';
import lpalogo from '../assets/lpalogo.png'
const JobCard = ({ logo, title, company, mode, salary, description,date}) => {

  // Function to calculate how much time has passed since a given date
const getTimePassed = (postDate) => {
  const now = new Date(); // Current date and time
  const targetDate = new Date(postDate); // Convert the input date string to a Date object
  const diffInMs = now - targetDate; // Difference in milliseconds

  if (diffInMs < 0) {
    return "In the future"; // Handle dates that are in the future
  }

  const diffInSeconds = Math.floor(diffInMs / 1000); // Convert milliseconds to seconds
  const diffInMinutes = Math.floor(diffInSeconds / 60); // Convert seconds to minutes
  const diffInHours = Math.floor(diffInMinutes / 60); // Convert minutes to hours
  const diffInDays = Math.floor(diffInHours / 24); // Convert hours to days

  if (diffInMinutes < 1) {
    // Less than 1 minute
    return `${diffInSeconds} second${diffInSeconds > 1 ? "s" : ""} ago`;
  } else if (diffInHours < 1) {
    // Less than 1 hour
    return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
  } else if (diffInDays < 1) {
    // Less than 1 day
    return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
  } else {
    // 1 day or more
    return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
  }
};

  return (
    <div className="bg-white  shadow-md rounded-lg p-[10px] w-[316px] max-w-sm h-[360px]">
      {/* Job Logo & Time */}
      <div className={classes.content}>
      <div className="flex justify-between items-center">
        <img src={logo} alt="Company Logo" className="w-10 h-10 rounded-full object-contain" />
        <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-md">
        {getTimePassed(date)}
        </span>
      </div>


      {/* Job Title */}
      <h3 className="text-xl font-semibold mt-3">{title}</h3>

      {/* Job Info */}
      <div className="flex items-center text-gray-500 text-base space-x-3 mt-1">
        <span className="flex flex-row  justify-center items-center">  <img src={xplogo} alt="search" className="h-[16px] mr-1" /> {company}</span>
        <span className="flex flex-row  justify-center items-center">  <img src={loc} alt="search" className="h-[16px] mr-1" /> {mode}</span>
        <span className="flex flex-row  justify-center items-center">  <img src={lpalogo} alt="search" className="h-[16px] mr-1" /> {salary}</span>
      </div>

      {/* Job Description */}
      <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>
      {/* Apply Button */}
      <button className={`w-[284px] h-[46px] bg-blue-500 text-white py-2 mt-3 rounded-md hover:bg-blue-600 ${classes.btn}`}>
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
