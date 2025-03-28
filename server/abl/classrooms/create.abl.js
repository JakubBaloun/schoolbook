import ClassroomDao from "../../dao-mongo/classroom.dao.js";
import { ajv } from "../../utils/ajv.utils.js";
import schema from "../../schemas/classroom/create.schema.js";

const classroomDao = new ClassroomDao();

const createClassroom = async (req, res) => {
  try {
    const { name } = req.body;

    const valid = ajv.validate(schema, req.body);
    if (!valid) {
      throw {
        status: 400,
        message: ajv.errors,
      };
    }

    const newClassroom = { name };
    res.json(await classroomDao.createClassroom(newClassroom));
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message });
  }
};

export default createClassroom;
