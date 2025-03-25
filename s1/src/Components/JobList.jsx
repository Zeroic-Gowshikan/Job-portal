import React, { useState } from "react";
import JobCard from "./JobCard";

const JobList = ({jobs}) => {
 
 



  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {jobs.map((job, index) => (
        <JobCard 
          key={index} 
          logo={job.logo} 
          title={job.title} 
          company={job.company}
          experience="N/A" // Update if you have experience data
          mode={job.location} 
          salary={(job.salaryto/100000)+" LPA"} 
          description={job.description} 
          date={job.date}
        />
      ))}
      {jobs.length===0&&<h1 className="flex justify-between w-full text-gray-500 mt-2 text-center">No Match</h1>}
      
    </div>
  );
};

export default JobList;
