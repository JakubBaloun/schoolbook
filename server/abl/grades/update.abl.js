import GradeDao from "../../dao/grade.dao.js";
import { ajv } from "../../utils/ajv.utils.js";
import { bodySchema, paramsSchema } from "../../schemas/grade/update.scema.js";

const gradeDao = new GradeDao();

const updateGrade = async (req, res) => {
  try {
    const { subjectId, studentId, grade, description, weight, classroomId } =
      req.body;
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

    const gradeDTOIN = {
      subjectId,
      studentId,
      grade,
      description,
      weight,
      classroomId,
      id,
    };

    const updateGrade = await gradeDao.updateGrade(gradeDTOIN);
    res.json(updateGrade);
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message });
  }
};

export default updateGrade;
