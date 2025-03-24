import React, { useState } from "react";
import classes from "../style/createjobmodal.module.css";

const CreateJobModal = ({ setShowForm, onJobAdded }) => {
  // State to manage all form data
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    jobType: "",
    salaryfrom: "",
    salaryto: "",
    description: "",
    logo: "", // Optional field (not used in the UI)
    date:new Date()
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onJobAdded callback with the form data
    onJobAdded(formData);
    // Optionally reset the form after submission
    setFormData({
      title: "",
      company: "",
      location: "",
      jobType: "",
      salaryfrom: "",
      salaryto: "",
      description: "",
      logo: "",
    });
    // Close the modal
    setShowForm(false);
  };

  const handleContainerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={classes.overlay} onClick={() => setShowForm(false)}>
      <div className={classes.container} onClick={handleContainerClick}>
        <h1>Create Job Opening</h1>
        <form onSubmit={handleSubmit}>
          <div className={classes.inputcontainer}>
            <div className={classes.ainput}>
              <label>Job Title</label>
              <input
                name="title"
                placeholder="Job title"
                type="text"
                value={formData.title}
                onChange={handleInputChange}
              />
              <label>Location</label>
              <input
                name="location"
                placeholder="Location"
                type="text"
                value={formData.location}
                onChange={handleInputChange}
              />
              <label>Salary Range</label>
              <div className={classes.salaryinputs}>
                <input
                  name="salaryfrom"
                  placeholder="₹0"
                  type="number"
                  value={formData.salaryfrom}
                  onChange={handleInputChange}
                />
                <input
                  name="salaryto"
                  placeholder="₹1200000"
                  type="number"
                  value={formData.salaryto}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className={classes.binput}>
              <label>Company Name</label>
              <input
                name="company"
                placeholder="Amazon ,Microsoft ,Swiggy"
                type="text"
                value={formData.company}
                onChange={handleInputChange}
              />
              <label>Job Type</label>
              <select
                name="jobType"
                value={formData.jobType}
                onChange={handleInputChange}
              >
                <option value="">Job Type</option>
                <option value="Internship">Internship</option>
                <option value="FullTime">Full-Time</option>
                <option value="PartTime">Part-Time</option>
                <option value="Contract">Contract</option>
              </select>
              <label>Application Deadline</label>
              <input
                name="applicationDeadline"
                placeholder=""
                type="date"
                value={formData.applicationDeadline}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <label>Job Description</label>
          <textarea
            name="description"
            placeholder="Please share a description to let the candidate know more about the job role"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
          <div>
            <button type="button" className={classes.savebtn}>
              Save Draft
            </button>
            <button type="submit" className={classes.publishbtn}>
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateJobModal;