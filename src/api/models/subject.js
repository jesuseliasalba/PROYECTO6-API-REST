const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: false },
});

const Subject = mongoose.model("subjects", subjectSchema, "subjects");

module.exports = Subject;
