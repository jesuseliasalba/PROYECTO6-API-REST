const express = require("express");
const {
  postStudent,
  getStudents,
  updateStudent,
  deleteStudent,
} = require("../controllers/student");

const studentRouter = express.Router();

studentRouter.post("/create", postStudent);
studentRouter.get("/", getStudents);
studentRouter.put("/edit/:id", updateStudent);
studentRouter.delete("/:id", deleteStudent);

module.exports = studentRouter;
