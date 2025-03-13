const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let jobs = [
  { id: 1, title: "Full Stack Developer", company: "Amazon", location: "Remote", jobType: "FullTime", salary: "12 LPA", deadline: "2025-04-01", description: "Develop and maintain web applications." },
  { id: 2, title: "Node.js Developer", company: "Tesla", location: "Onsite", jobType: "FullTime", salary: "10 LPA", deadline: "2025-03-25", description: "Build scalable backend services." },
  { id: 3, title: "UX/UI Designer", company: "Dribbble", location: "Hybrid", jobType: "PartTime", salary: "8 LPA", deadline: "2025-04-10", description: "Create user-friendly designs." },
  { id: 4, title: "Frontend Developer", company: "Google", location: "Remote", jobType: "FullTime", salary: "15 LPA", deadline: "2025-05-01", description: "Develop modern UI components." },
  { id: 5, title: "Backend Engineer", company: "Microsoft", location: "Onsite", jobType: "FullTime", salary: "13 LPA", deadline: "2025-06-01", description: "Work on API integrations and databases." },
  { id: 6, title: "Product Designer", company: "Adobe", location: "Hybrid", jobType: "PartTime", salary: "9 LPA", deadline: "2025-04-15", description: "Design creative products and interfaces." },

];

app.get("/api/jobs", (req, res) => {
  res.json(jobs);
});

app.post("/api/jobs", (req, res) => {
  const newJob = { id: jobs.length + 1, ...req.body };
  jobs.push(newJob);
  res.status(201).json(newJob);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
