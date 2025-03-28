import ClassroomDao from "../../dao-mongo/classroom.dao.js";

const classroomDao = new ClassroomDao();

const listClassrooms = async (req, res) => {
  try {
    const data = await classroomDao.listAllClassrooms();
    res.send(data);
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message });
  }
};

export default listClassrooms;
