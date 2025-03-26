import ClassroomDao from "../../dao/classroom.dao.js";
import { ajv } from "../../utils/ajv.utils.js";
import schema from "../../schemas/classroom/delete.schema.js";

const classroomDao = new ClassroomDao();

const deleteClassroom = async (req, res) => {
  try {
    const { id } = req.params;

    const valid = ajv.validate(schema, req.params);
    if (!valid) {
      throw {
        status: 400,
        message: ajv.errors,
      };
    }
    await classroomDao.deleteClassroom(id);
    res.status(204).end();
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message });
  }
};

export default deleteClassroom;
