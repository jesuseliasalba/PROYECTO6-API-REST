require("dotenv").config();
const express = require("express");

const studentRouter = require("./src/api/routes/student");
const subjectRouter = require("./src/api/routes/subject");
const { ConnectDB } = require("./src/config/DB");

ConnectDB();

const PORT = 3000;
const app = express();

app.use(express.json());

app.use("/student", studentRouter);
app.use("/subject", subjectRouter);

app.use((error, req, res, next) => {
  return res
    .status(error.status || 500)
    .json(error.message || "Unexpected error");
});

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
