import GradeDao from "../../dao-mongo/grade.dao.js";
import { ajv } from "../../utils/ajv.utils.js";
import schema from "../../schemas/grade/get.schema.js";

const gradeDao = new GradeDao();

const getGrade = async (req, res) => {
  try {
    const { id } = req.params;

    const valid = ajv.validate(schema, req.params);

    if (!valid) {
      throw {
        status: 400,
        message: ajv.errors,
      };
    }

    const grade = await gradeDao.getGrade(id);
    res.json(grade);
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message });
  }
};

export default getGrade;
