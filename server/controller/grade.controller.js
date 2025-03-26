import express from "express";
import listGrades from "../abl/grades/list.abl.js";
import getGrade from "../abl/grades/get.abl.js";
import createGrade from "../abl/grades/create.abl.js";
import deleteGrade from "../abl/grades/delete.abl.js";

const router = express.Router();

router.get("/list", listGrades);

router.get("/get/:id", getGrade);

router.post("/create/", createGrade);

router.delete("/delete/:id", deleteGrade);

export default router;
