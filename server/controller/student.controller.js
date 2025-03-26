import express from "express";
import listStudents from "../abl/students/list.abl.js";
import getStudent from "../abl/students/get.abl.js";
import createStudent from "../abl/students/create.abl.js";
import deleteStudent from "../abl/students/delete.abl.js";
import updateStudent from "../abl/students/update.abl.js";

const router = express.Router();

router.get("/list", listStudents);

router.get("/get/:id", getStudent);

router.post("/create", createStudent);

router.delete("/delete/:id", deleteStudent);

router.put("/update/:id", updateStudent);

export default router;
