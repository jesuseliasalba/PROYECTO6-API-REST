const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    birthday: { type: Date, required: true },
    email: { type: String, required: false },
    phone: { type: Number, required: false },
    subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "subjects" }],
  },
  { timestamps: true }
);

const Student = mongoose.model("students", studentSchema, "students");
module.exports = Student;
