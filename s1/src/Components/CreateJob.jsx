import React, { useState } from "react";

const CreateJob = ({ onClose, onJobAdded }) => {
  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    location: "",
    jobType: "FullTime",
    salary: "",
    description: "",
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onJobAdded(jobData); // Send new job to JobList
    onClose(); // Close the form
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <h2 className="text-lg font-bold mb-4">Create Job Opening</h2>

        <input type="text" name="title" placeholder="Job Title" className="border p-2 w-full mb-2" onChange={handleChange} />
        <input type="text" name="company" placeholder="Company Name" className="border p-2 w-full mb-2" onChange={handleChange} />
        <input type="text" name="location" placeholder="Location" className="border p-2 w-full mb-2" onChange={handleChange} />
        <input type="text" name="salary" placeholder="Salary Range" className="border p-2 w-full mb-2" onChange={handleChange} />
        <textarea name="description" placeholder="Job Description" className="border p-2 w-full mb-2" onChange={handleChange} />

        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Publish</button>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;
