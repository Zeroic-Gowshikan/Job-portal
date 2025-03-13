import React from "react";

const CreateJobModal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-1/2">
        <h2 className="text-xl font-semibold text-center mb-4">
          Create Job Opening
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Job Title"
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Location"
            className="border p-2 rounded-md"
          />
          <select className="border p-2 rounded-md">
            <option>Full Time</option>
            <option>Part Time</option>
          </select>
          <input
            type="text"
            placeholder="Salary Range"
            className="border p-2 rounded-md"
          />
          <input
            type="date"
            placeholder="Application Deadline"
            className="border p-2 rounded-md"
          />
        </div>
        <textarea
          placeholder="Job Description"
          className="border p-2 w-full mt-4 rounded-md"
        />
        <div className="flex justify-between mt-4">
          <button className="bg-gray-300 px-4 py-2 rounded-md">
            Save Draft
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateJobModal;
