const Student = require("../models/student");

const postStudent = async (req, res, next) => {
  try {
    const newStudent = new Student({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      birthday: req.body.birthday,
      email: req.body.email,
      phone: req.body.phone,
      subjects: req.body.subjects,
    });
    const createdStudent = await newStudent.save();
    return res.status(201).json(createdStudent);
  } catch (error) {
    next(error);
  }
};

const getStudents = async (req, res, next) => {
  try {
    const students = await Student.find().populate("subjects");
    return res.status(200).json(students);
  } catch (error) {
    next(error);
  }
};

const updateStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const studentModify = new Student(req.body);
    studentModify._id = id;

    const student = await Student.findById(id);

    student.firstname = studentModify.firstname
      ? studentModify.firstname
      : student.firstname;

    student.lastname = studentModify.lastname
      ? studentModify.lastname
      : student.lastname;

    student.birthday = studentModify.birthday
      ? studentModify.birthday
      : student.birthday;

    student.email = studentModify.email ? studentModify.email : student.email;

    student.phone = studentModify.phone ? studentModify.phone : student.phone;

    if (studentModify.subjects) {
      for (const subject of studentModify.subjects) {
        if (!student.subjects.includes(subject)) {
          student.subjects.push(subject);
        }
      }
    }

    const studentUpdated = await Student.findByIdAndUpdate(id, student, {
      new: true,
    });

    return res.status(200).json(studentUpdated);
  } catch (error) {
    next(error);
  }
};

const deleteStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);
    return res.status(200).json("Student deleted");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postStudent,
  getStudents,
  updateStudent,
  deleteStudent,
};
