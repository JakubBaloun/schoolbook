import SubjectDao from "../../dao/subject.dao.js";
import schema from "../../schemas/student/delete.schema.js";
import { ajv } from "../../utils/ajv.utils.js";

const subjectDao = new SubjectDao();

const deleteSubject = async (req, res) => {
  try {
    const { id } = req.params;

    const valid = ajv.validate(schema, req.params);

    if (!valid) {
      throw {
        status: 400,
        message: ajv.errors,
      };
    }

    await subjectDao.deleteSubject(id);
    res.status(204).end();
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message });
  }
};

export default deleteSubject;
