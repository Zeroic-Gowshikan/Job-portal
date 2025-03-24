import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import JobList from "./Components/JobList";
import InputFields from "./Components/InputFields";
import amazonLogo from './amazonLogo.png';
import teslaLogo from './teslaLogo.jpg';
import swiggyLogo from './swiggyLogo.jpg';
import googleLogo from './googleLogo.png';
import microsoftLogo from './microsoftLogo.png';
import netflixLogo from './netflixLogo.png';
import adobeLogo from './adobeLogo.png';
import ibmLogo from './ibmLogo.png';

const App = () => {
  const getRandomDate = () => {
    const start = new Date(2025, 2, 20).getTime(); // Start date: January 1, 2023
    const end = new Date().getTime(); // End date: current date
    const randomTimestamp = start + Math.random() * (end - start); // Random timestamp
    return new Date(randomTimestamp).toISOString(); // Convert to ISO string
  };
  const [jobs, setJobs] = useState([
    {
      title: "Full Stack Developer",
      company: "Amazon",
      location: "Onsite",
      jobType: "FullTime",
      salaryfrom: 500000,
      salaryto:1200000,
      description: "Develop and maintain responsive web applications using JavaScript, React, and Node.js. Collaborate with teams to optimize performance, ensure seamless API integration, and enhance user experience. Experience with cloud platforms and knowledge of security best practices is desirable.",
      logo: amazonLogo,
      date: getRandomDate(),
    },
    {
      title: "Node JS Developer",
      company: "Tesla",
      location: "Onsite",
      jobType: "FullTime",
      salaryfrom: 500000,
      salaryto:1200000,
      description: "Build scalable backend systems using Node.js and Express. Design RESTful APIs, manage databases, and ensure application security. Strong knowledge of JavaScript, microservices, and cloud platforms is required. Familiarity with DevOps, containerization, and CI/CD pipelines is an added advantage.",
      logo: teslaLogo,
      date: getRandomDate(),
    },
    {
      title: "UX/UI Designer",
      company: "Swiggy",
      location: "Onsite",
      jobType: "FullTime",
      salaryfrom: 500000,
      salaryto:1100000,
      description: "Design intuitive user experiences by creating wireframes, prototypes, and interfaces. Conduct user research and collaborate with developers to implement designs. Strong knowledge of Figma, Adobe Suite, and responsive design principles is required. Prior experience with UI/UX testing is preferred.",
      date: getRandomDate(),
      logo: swiggyLogo,
    },
    {
      title: "Frontend Developer",
      company: "Google",
      location: "Remote",
      jobType: "FullTime",
      salaryfrom: 500000,
      salaryto:1000000,
      description: "Develop modern and responsive user interfaces using React and Tailwind CSS. Collaborate with backend teams to ensure seamless API integration. Strong expertise in JavaScript, HTML, and CSS is required. Experience with performance optimization and version control is desirable.",
      logo: googleLogo,
      date: getRandomDate(),
    },
    {
      title: "Backend Engineer",
      company: "Microsoft",
      location: "Hybrid",
      jobType: "FullTime",
      salaryfrom: 500000,
      salaryto:1200000,
      description: "Develop and maintain backend systems using Node.js and SQL. Design and implement RESTful APIs while ensuring security and scalability. Strong understanding of cloud computing, Docker, and Kubernetes is required. Experience with CI/CD pipelines and API documentation is preferred.",
      logo: microsoftLogo,
      date: getRandomDate(),
    },
    {
      title: "Mobile App Developer",
      company: "Netflix",
      location: "Onsite",
      jobType: "FullTime",
      salaryfrom: 500000,
      salaryto:1200000,
      description: "Create high-performance mobile applications using React Native. Develop cross-platform solutions, integrate APIs, and optimize performance. Strong understanding of JavaScript and mobile UI frameworks is required. Familiarity with Redux, Firebase, and deployment processes for iOS and Android platforms is preferred.",
      logo: netflixLogo,
      date: getRandomDate(),
    },
    {
      title: "Product Manager",
      company: "Adobe",
      location: "Hybrid",
      jobType: "FullTime",
      salaryfrom: 500000,
      salaryto:1600000,
      description: "Lead product development by defining requirements, coordinating with teams, and ensuring timely delivery. Conduct market research, analyze user feedback, and prioritize feature implementation. Strong understanding of Agile methodologies, product strategy, and stakeholder management is essential.",
      date: getRandomDate(),
      logo: adobeLogo,
    },
    {
      title: "Data Scientist",
      company: "IBM",
      location: "Remote",
      jobType: "FullTime",
      salaryfrom: 500000,
      salaryto:1100000,
      description: "Analyze and interpret complex data to generate actionable insights. Develop machine learning models, identify trends, and support business decisions. Strong expertise in Python, SQL, and data visualization is required. Familiarity with big data technologies and AI algorithms is preferred.",
      logo: ibmLogo,
      date: getRandomDate(),
    },
  ]); // Job list state
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const addNewJob = (newJob) => {
    setJobs((prevJobs) => [newJob, ...prevJobs]); // Add job to the list
  };
  const handleFilter = (filtered) => {
    setFilteredJobs(filtered); // Update the filtered jobs state
   
    
  };

  return (
    <div>
      <Navbar onJobAdded={addNewJob}/>
      <InputFields jobs={jobs} onFilter={handleFilter}/>
      <JobList jobs={filteredJobs} />
      {/* {showForm && <CreateJob onClose={() => setShowForm(false)} onJobAdded={onJobAdded} />} */}
    </div>
  );
};

export default App;
