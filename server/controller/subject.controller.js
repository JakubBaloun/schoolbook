import express from "express";
const router = express.Router();

router.get("/list", (req, res) => {
  res.send("subjects");
});

export default router;
