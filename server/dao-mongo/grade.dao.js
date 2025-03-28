import Grade from "../models/grade.model.js";

export default class GradeDao {
  async listGrades() {
    return await Grade.find();
  }

  async getGrade(id) {
    const grade = await Grade.findById(id);

    if (!grade) {
      throw {
        status: 404,
        message: `Grade with id ${id} does not exist`,
      };
    }

    return grade;
  }

  async createGrade(grade) {
    const newGrade = new Grade({
      ...grade,
    });

    await newGrade.save();
    return newGrade;
  }

  async deleteGrade(id) {
    const grade = await Grade.findByIdAndDelete(id);
    if (!grade) {
      throw {
        status: 404,
        message: `Grade with id ${id} does not exist`,
      };
    }
  }

  async updateGrade(newData) {
    const updatedGrade = await Grade.findByIdAndUpdate(
      newData.id,
      {
        subjectId: newData.subjectId,
        studentId: newData.studentId,
        grade: newData.grade,
        description: newData.description,
        weight: newData.weight,
        classroomId: newData.classroomId,
      },
      { new: true }
    );

    if (!updatedGrade) {
      throw {
        status: 404,
        message: `Grade with id ${newData.id} does not exist`,
      };
    }
    return updatedGrade;
  }
}
