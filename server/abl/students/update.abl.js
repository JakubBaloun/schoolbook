import StudentDao from "../../dao-mongo/student.dao.js";
import { ajv } from "../../utils/ajv.utils.js";
import {
  bodySchema,
  paramsSchema,
} from "../../schemas/student/update.schema.js";

const studentDao = new StudentDao();

const updateStudent = async (req, res) => {
  try {
    const { firstname, surname, nationalId, classroomId } = req.body;
    const { id } = req.params;

    const validBody = ajv.validate(bodySchema, req.body);
    const validParams = ajv.validate(paramsSchema, req.params);

    if (!validBody) {
      throw {
        status: 400,
        message: ajv.errors,
      };
    }

    if (!validParams) {
      throw {
        status: 400,
        message: ajv.errors,
      };
    }

    const student = { firstname, surname, nationalId, classroomId, id };

    const updatedStudent = await studentDao.updateStudent(student);
    res.json(updatedStudent);
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message });
  }
};

export default updateStudent;
