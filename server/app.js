import express from "express";
import classroomRouter from "./controller/classroom.controller.js";
import gradeController from "./controller/grade.controller.js";
import studentRouter from "./controller/student.controller.js";
import subjectRouter from "./controller/subject.controller.js";

const app = express();

app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

app.use("/classroom", classroomRouter);
app.use("/grade", gradeController);
app.use("/student", studentRouter);
app.use("/subject", subjectRouter);

app.get("/", (req, res) => {
  res.status(200).send("hello?");
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is listening on port ${3000}`);
});
