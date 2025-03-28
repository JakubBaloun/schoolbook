import loadClassroomService from "../../services/classroom/load.service.js";

const loadClassroom = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await loadClassroomService(id);
    res.json(data);
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message });
  }
};

export default loadClassroom;
