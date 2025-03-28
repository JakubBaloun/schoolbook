import StudentDao from "../../dao-mongo/student.dao.js";

const studentDao = new StudentDao();

const listStudents = async (req, res) => {
  try {
    const students = await studentDao.listStudents();
    res.send(students);
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message });
  }
};

export default listStudents;
