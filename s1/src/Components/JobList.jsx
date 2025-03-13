import React from "react";
import JobCard from "./JobCard";

const defaultJobs = [
  {
    title: "Full Stack Developer",
    company: "Amazon",
    location: "Onsite",
    jobType: "FullTime",
    salary: "12 LPA",
    description: "We are looking for a skilled Full Stack Developer to join our team.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    title: "Node JS Developer",
    company: "Tesla",
    location: "Onsite",
    jobType: "FullTime",
    salary: "12 LPA",
    description: "Looking for an experienced Node.js developer to build scalable applications.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
  },
  {
    title: "UX/UI Designer",
    company: "Swiggy",
    location: "Onsite",
    jobType: "FullTime",
    salary: "12 LPA",
    description: "We are hiring a UX/UI designer to create beautiful user experiences.",
    logo: "data:image/jpeg;base64,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",
  },
  {
    title: "Frontend Developer",
    company: "Google",
    location: "Remote",
    jobType: "FullTime",
    salary: "15 LPA",
    description: "Frontend Developer required to build modern UIs with React and Tailwind.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    title: "Backend Engineer",
    company: "Microsoft",
    location: "Hybrid",
    jobType: "FullTime",
    salary: "14 LPA",
    description: "Seeking a Backend Engineer with expertise in Node.js, SQL, and Cloud computing.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    title: "Mobile App Developer",
    company: "Netflix",
    location: "Onsite",
    jobType: "FullTime",
    salary: "13 LPA",
    description: "Hiring a React Native developer to work on our mobile app development team.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    title: "Product Manager",
    company: "Adobe",
    location: "Hybrid",
    jobType: "FullTime",
    salary: "16 LPA",
    description: "Looking for a Product Manager to drive product development.",
    logo: "data:image/png;base64,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",
  },
  {
    title: "Data Scientist",
    company: "IBM",
    location: "Remote",
    jobType: "FullTime",
    salary: "18 LPA",
    description: "Seeking a Data Scientist to analyze and interpret complex data.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
];


const JobList = ({ jobs = [] }) => {
  const allJobs = [...defaultJobs, ...jobs]; // Merge default and additional jobs



  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {allJobs.map((job, index) => (
        <JobCard 
          key={index} 
          logo={job.logo} 
          title={job.title} 
          company={job.company}
          experience="N/A" // Update if you have experience data
          mode={job.location} 
          salary={job.salary} 
          description={job.description} 
        />
      ))}
    </div>
  );
};

export default JobList;
