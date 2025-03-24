import Logo from "../cybermind_works_logo.jpg";
import React, { useState } from "react";
import CreateJob from "./CreateJob"; // Import CreateJob component
import CreateJobModal from "./CreateJobModal";

const Navbar = ({ onJobAdded }) => {
 // Controls the popup
 const [showForm, setShowForm] = useState(false); 
  return (
    <>
      {/* Navbar Container */}
      <nav className="flex items-center justify-between bg-white shadow-md rounded-full px-5 py-3 max-w-3xl mx-auto mt-3">
        {/* Left Side - Logo and Navigation Links */}
        <div className="flex items-center space-x-9">
          <img src={Logo} alt="Logo" className="w-10 h-10" />
          <ul className="flex space-x-5 text-gray-700 font-medium">
            <li className="cursor-pointer hover:text-blue-500">Home</li>
            <li className="cursor-pointer hover:text-blue-500">Find Jobs</li>
            <li className="cursor-pointer hover:text-blue-500">Find Talents</li>
            <li className="cursor-pointer hover:text-blue-500">About Us</li>
            <li className="cursor-pointer hover:text-blue-500">Testimonials</li>
          </ul>
        </div>

        {/* Right Side - Create Jobs Button */}
        <button
          onClick={() => setShowForm(true)}
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-full px-5 py-2"
        >
          Create Jobs
        </button>
      </nav>

      {/* Job Creation Form Modal */}
      {/* {showForm && <CreateJob onClose={() => setShowForm(false)} onJobAdded={onJobAdded} />} */}
      {showForm && <CreateJobModal  setShowForm={setShowForm} onJobAdded={onJobAdded}/>}
    </>
  );
};

export default Navbar;
