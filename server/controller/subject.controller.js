import express from "express";
import listSubjects from "../abl/subjects/list.abl.js";
import getSubject from "../abl/subjects/get.abl.js";
import deleteSubject from "../abl/subjects/delete.abl.js";
import updateSubject from "../abl/subjects/update.abl.js";
import createSubject from "../abl/subjects/create.abl.js";

const router = express.Router();

router.get("/list", listSubjects);

router.get("/get/:id", getSubject);

router.delete("/delete/:id", deleteSubject);

router.put("/update/:id", updateSubject);

router.post("/create", createSubject);

export default router;
