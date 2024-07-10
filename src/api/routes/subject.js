const express = require("express");
const {
  postSubject,
  getSubjects,
  updateSubject,
  deleteSubject,
} = require("../controllers/subject");

const subjectRouter = express.Router();

subjectRouter.post("/create", postSubject);
subjectRouter.get("/", getSubjects);
subjectRouter.put("/edit/:id", updateSubject);
subjectRouter.delete("/:id", deleteSubject);

module.exports = subjectRouter;
