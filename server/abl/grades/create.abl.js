import GradeDao from "../../dao/grade.dao.js";
import { ajv } from "../../utils/ajv.utils.js";
import schema from "../../schemas/grade/create.schema.js";

const gradeDao = new GradeDao();

const createGrade = async (req, res) => {
  try {
    const { subjectId, studentId, grade, description, weight, classroomId } =
      req.body;

    const valid = ajv.validate(schema, req.body);

    if (!valid) {
      throw {
        status: 400,
        message: ajv.errors,
      };
    }

    const newGrade = {
      subjectId,
      studentId,
      grade,
      description,
      weight,
      classroomId,
    };

    const gradeDTO = await gradeDao.createGrade(newGrade);
    res.json(gradeDTO);
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message });
  }
};

export default createGrade;
