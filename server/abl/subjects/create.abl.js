import SubjectDao from "../../dao-mongo/subject.dao.js";
import schema from "../../schemas/subject/create.schema.js";
import { ajv } from "../../utils/ajv.utils.js";

const subjectDao = new SubjectDao();

const createSubject = async (req, res) => {
  try {
    const { name, shortName, description } = req.body;

    const valid = ajv.validate(schema, req.body);

    if (!valid) {
      throw {
        status: 400,
        message: ajv.errors,
      };
    }

    const newSubject = {
      name,
      shortName,
      description,
    };

    const subject = await subjectDao.createSubject(newSubject);
    res.json(subject);
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message });
  }
};

export default createSubject;
