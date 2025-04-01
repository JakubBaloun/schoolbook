import express from "express";
import classroomRouter from "./controller/classroom.controller.js";
import gradeController from "./controller/grade.controller.js";
import studentRouter from "./controller/student.controller.js";
import subjectRouter from "./controller/subject.controller.js";
import connectDB from "./db/db.js";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("common"));

app.use("/classroom", classroomRouter);
app.use("/grade", gradeController);
app.use("/student", studentRouter);
app.use("/subject", subjectRouter);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to my app!");
});

const port = process.env.PORT || 8080;

const start = async () => {
  try {
    await connectDB();
    console.log("✅ MongoDB connected");

    app.listen(port, () => {
      console.log(`🚀 App is listening on http://localhost:${port}`);
    });
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB", err);
  }
};

start();
