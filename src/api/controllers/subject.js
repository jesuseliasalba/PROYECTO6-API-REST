const Subject = require("../models/subject");

const postSubject = async (req, res, next) => {
  try {
    const newSubject = new Subject({
      name: req.body.name,
      description: req.body.description,
    });
    const createdSubject = await newSubject.save();
    return res.status(201).json(createdSubject);
  } catch (error) {
    next(error);
  }
};

const getSubjects = async (req, res, next) => {
  try {
    const Subjects = await Subject.find();
    return res.status(200).json(Subjects);
  } catch (error) {
    next(error);
  }
};

const updateSubject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const SubjectModify = new Subject(req.body);
    SubjectModify._id = id;
    const SubjectUpdated = await Subject.findByIdAndUpdate(id, SubjectModify, {
      new: true,
    });
    return res.status(200).json(SubjectUpdated);
  } catch (error) {
    next(error);
  }
};

const deleteSubject = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Subject.findByIdAndDelete(id);
    return res.status(200).json("Subject deleted");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postSubject,
  getSubjects,
  updateSubject,
  deleteSubject,
};
