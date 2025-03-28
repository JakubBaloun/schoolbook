import SubjectDao from "../../dao-mongo/subject.dao.js";
import {
  bodySchema,
  paramsSchema,
} from "../../schemas/subject/update.schema.js";
import { ajv } from "../../utils/ajv.utils.js";

const subjectDao = new SubjectDao();

const updateSubject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, shortName, description } = req.body;

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

    const subject = {
      id,
      name,
      shortName,
      description,
    };

    const updatedSubject = await subjectDao.updateSubject(subject);
    res.json(updatedSubject);
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message });
  }
};

export default updateSubject;
