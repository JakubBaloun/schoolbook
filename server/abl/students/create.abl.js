import StudentDao from "../../dao/student.dao.js";
import { ajv } from "../../utils/ajv.utils.js";
import schema from "../../schemas/student/create.schema.js";

const studentDao = new StudentDao();

const createStudent = async (req, res) => {
  try {
    const { firstName, surname, nationalId, classroomId } = req.body;

    const valid = ajv.validate(schema, req.body);

    if (!valid) {
      throw {
        status: 400,
        message: ajv.errors,
      };
    }

    const newStudent = {
      firstName,
      surname,
      nationalId,
      classroomId,
    };

    const student = await studentDao.createStudent(newStudent);
    res.json(student);
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message });
  }
};

export default createStudent;
