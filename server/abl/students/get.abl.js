import StudentDao from "../../dao/student.dao.js";
import schema from "../../schemas/student/get.schema.js";
import { ajv } from "../../utils/ajv.utils.js";

const studentDao = new StudentDao();

const getStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const valid = ajv.validate(schema, req.params);

    if (!valid) {
      throw {
        status: 400,
        message: ajv.errors,
      };
    }

    const student = await studentDao.getStudent(id);
    res.json(student);
  } catch (err) {
    res.status(err.status).json({ error: err.message });
  }
};

export default getStudent;
