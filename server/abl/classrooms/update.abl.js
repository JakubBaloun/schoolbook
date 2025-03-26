import ClassroomDao from "../../dao/classroom.dao.js";
import { ajv } from "../../utils/ajv.utils.js";
import {
  bodySchema,
  paramsSchema,
} from "../../schemas/classroom/update.schema.js";

const classroomDao = new ClassroomDao();

const updateClassroom = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const bodyValid = ajv.validate(bodySchema, req.body);
    const paramsValid = ajv.validate(paramsSchema, req.params);

    if (!bodyValid) {
      throw {
        status: 400,
        message: ajv.errors,
      };
    }

    if (!paramsValid) {
      throw {
        status: 400,
        message: ajv.errors,
      };
    }

    const updatedClassroom = { name, id };
    const result = await classroomDao.updateClassroom(updatedClassroom);
    res.json(result);
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message });
  }
};

export default updateClassroom;
