import express from "express";
const router = express.Router();

router.get("/list", (req, res) => {
  res.send("grades");
});

export default router;
