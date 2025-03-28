import express from "express";
import listClassrooms from "../abl/classrooms/list.abl.js";
import getClassroom from "../abl/classrooms/get.abl.js";
import createClassroom from "../abl/classrooms/create.abl.js";
import updateClassroom from "../abl/classrooms/update.abl.js";
import deleteClassroom from "../abl/classrooms/delete.abl.js";
import loadClassroom from "../abl/classrooms/load.abl.js";

const router = express.Router();

router.get("/list", listClassrooms);

router.get("/get/:id", getClassroom);

router.post("/create", createClassroom);

router.put("/update/:id", updateClassroom);

router.delete("/delete/:id", deleteClassroom);

router.get("/load/:id", loadClassroom);

export default router;
