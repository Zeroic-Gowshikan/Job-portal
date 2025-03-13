import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import JobList from "./Components/JobList";
import InputFields from "./Components/InputFields"

const App = () => {
  const [jobs, setJobs] = useState([]); // Job list state

  const addNewJob = (newJob) => {
    setJobs((prevJobs) => [newJob, ...prevJobs]); // Add job to the list
  };

  return (
    <div>
      <Navbar onJobAdded={addNewJob} />
      <InputFields />
      <JobList jobs={jobs} />
    </div>
  );
};

export default App;
