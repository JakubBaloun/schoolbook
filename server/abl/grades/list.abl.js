import GradeDao from "../../dao-mongo/grade.dao.js";

const gradeDao = new GradeDao();

const listGrades = async (req, res) => {
  try {
    const grades = await gradeDao.listGrades();

    res.json(grades);
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message });
  }
};

export default listGrades;
