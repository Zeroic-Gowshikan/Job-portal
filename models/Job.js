const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  jobType: { type: String, enum: ["Full Time", "Part Time"], required: true },
  salary: { type: Number, required: true },
  postedAt: { type: Date, default: Date.now },
  description: { type: String },
});

module.exports = mongoose.model("Job", jobSchema);
