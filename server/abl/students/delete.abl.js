import StudentDao from "../../dao-mongo/student.dao.js";
import { ajv } from "../../utils/ajv.utils.js";
import schema from "../../schemas/student/delete.schema.js";

const studentDao = new StudentDao();

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const valid = ajv.validate(schema, req.params);

    if (!valid) {
      throw {
        status: 400,
        message: ajv.errors,
      };
    }

    await studentDao.deleteStudent(id);
    res.status(204).end();
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message });
  }
};

export default deleteStudent;
