import GradeDao from "../../dao/grade.dao.js";
import { ajv } from "../../utils/ajv.utils.js";
import schema from "../../schemas/grade/delete.schema.js";

const gradeDao = new GradeDao();

const deleteGrade = async (req, res) => {
  try {
    const { id } = req.params;

    const valid = ajv.validate(schema, req.body);

    if (!valid) {
      throw {
        status: 400,
        message: ajv.errors,
      };
    }

    await gradeDao.deleteGrade(id);
    res.status(204).end();
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message });
  }
};

export default deleteGrade;
