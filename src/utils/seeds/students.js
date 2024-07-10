const mongoose = require("mongoose");
const students = require("../../data/students-seed");
const student = require("../../api/models/student");

mongoose
  .connect(
    "mongodb+srv://prueba:prueba@rtc-project6-cluster.jt2cinz.mongodb.net/?retryWrites=true&w=majority&appName=RTC-Project6-Cluster"
  )
  .then(async () => {
    const allStudents = await student.find();

    if (allStudents.length) {
      await student.collection.drop(); //La función drop borra la colección
      console.log("Todos los estudiantes borrados");
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await student.insertMany(students);
    console.log("Todos los estudiantes añadidos");
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  // Por último nos desconectaremos de la DB.
  .finally(() => mongoose.disconnect());
