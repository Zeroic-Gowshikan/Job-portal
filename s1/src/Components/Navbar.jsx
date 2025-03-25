import Logo from "../cybermind_works_logo.jpg";
import button from '../assets/button.png';
import React, { useState } from "react";
import CreateJob from "./CreateJob"; // Import CreateJob component
import CreateJobModal from "./CreateJobModal";

const Navbar = ({ onJobAdded }) => {
 // Controls the popup
 const [showForm, setShowForm] = useState(false); 
  return (
    <>
      {/* Navbar Container */}
      <nav className="flex items-center justify-between bg-white shadow-sm rounded-full px-5 py-3 max-w-5xl h-[80px] mx-auto mt-3 mb-3">
        {/* Left Side - Logo and Navigation Links */}
        <div className="flex items-center space-x-20 ">
          <img src={Logo} alt="Logo" className="w-[44px] h-[44px]" />
          <ul className="flex space-x-20 text-gray-700 font-medium" >
            <li className="cursor-pointer hover:text-blue-500">Home</li>
            <li className="cursor-pointer hover:text-blue-500">Find Jobs</li>
            <li className="cursor-pointer hover:text-blue-500">Find Talents</li>
            <li className="cursor-pointer hover:text-blue-500">About Us</li>
            <li className="cursor-pointer hover:text-blue-500">Testimonials</li>
          </ul>
        </div>

        {/* Right Side - Create Jobs Button */}
        <img src={button} alt="Logo" className="w-[133px] h-[48px]"  onClick={() => setShowForm(true)}/>
      </nav>

      {/* Job Creation Form Modal */}
      {/* {showForm && <CreateJob onClose={() => setShowForm(false)} onJobAdded={onJobAdded} />} */}
      {showForm && <CreateJobModal  setShowForm={setShowForm} onJobAdded={onJobAdded}/>}
    </>
  );
};

export default Navbar;
