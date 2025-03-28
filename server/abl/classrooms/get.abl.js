import ClassroomDao from "../../dao-mongo/classroom.dao.js";
import { ajv } from "../../utils/ajv.utils.js";
import schema from "../../schemas/classroom/get.schema.js";

const classroomDao = new ClassroomDao();

const getClassroom = async (req, res) => {
  try {
    const { id } = req.params;

    const valid = ajv.validate(schema, req.params);
    if (!valid) {
      throw {
        status: 400,
        message: ajv.errors,
      };
    }
    const classroom = await classroomDao.getClassroom(id);

    res.json(classroom);
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message });
  }
};

export default getClassroom;
