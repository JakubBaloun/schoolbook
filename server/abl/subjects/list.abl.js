import SubjectDao from "../../dao-mongo/subject.dao.js";

const studentDao = new SubjectDao();

const listSubjects = async (req, res) => {
  try {
    const students = await studentDao.listSubjects();
    res.json(students);
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message });
  }
};

export default listSubjects;
