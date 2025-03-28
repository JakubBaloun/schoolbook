import Subject from "../models/subject.model.js";

export default class SubjectDao {
  async listSubjects() {
    return await Subject.find();
  }

  async getSubject(id) {
    const subject = await Subject.findById(id);
    if (!subject) {
      throw {
        status: 404,
        message: `Subject with id ${id} does not exist.`,
      };
    }
    return subject;
  }

  async createSubject(subjectData) {
    const newSubject = new Subject(subjectData);
    await newSubject.save();
    return newSubject;
  }

  async updateSubject(subjectData) {
    const updated = await Subject.findByIdAndUpdate(
      subjectData.id,
      {
        name: subjectData.name,
        shortName: subjectData.shortName,
        description: subjectData.description,
      },
      { new: true }
    );

    if (!updated) {
      throw {
        status: 404,
        message: `Subject with id ${subjectData.id} does not exist.`,
      };
    }

    return updated;
  }

  async deleteSubject(id) {
    const deleted = await Subject.findByIdAndDelete(id);
    if (!deleted) {
      throw {
        status: 404,
        message: `Subject with id ${id} does not exist.`,
      };
    }
  }
}
