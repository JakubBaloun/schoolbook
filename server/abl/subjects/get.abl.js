import SubjectDao from "../../dao-mongo/subject.dao.js";
import schema from "../../schemas/student/get.schema.js";
import { ajv } from "../../utils/ajv.utils.js";

const subjectDao = new SubjectDao();

const getSubject = async (req, res) => {
  try {
    const { id } = req.params;

    const valid = ajv.validate(schema, req.params);

    if (!valid) {
      throw {
        status: 400,
        message: ajv.errors,
      };
    }

    const subject = await subjectDao.getSubject(id);
    res.json(subject);
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message });
  }
};

export default getSubject;
