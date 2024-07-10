const mongoose = require("mongoose");
const subjects = require("../../data/subjects-seed");
const subject = require("../../api/models/subject");

mongoose
  .connect(
    "mongodb+srv://prueba:prueba@rtc-project6-cluster.jt2cinz.mongodb.net/?retryWrites=true&w=majority&appName=RTC-Project6-Cluster"
  )
  .then(async () => {
    const allSubjects = await subject.find();

    if (allSubjects.length) {
      await subject.collection.drop(); //La función drop borra la colección
      console.log("Todos las asignaturas borradas");
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await subject.insertMany(subjects);
    console.log("Todas las asignaturas añadidas");
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  // Por último nos desconectaremos de la DB.
  .finally(() => mongoose.disconnect());
