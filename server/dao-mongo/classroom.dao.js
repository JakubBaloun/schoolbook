import Classroom from "../models/classroom.model.js";

export default class ClassroomDao {
  async listAllClassrooms() {
    return await Classroom.find();
  }

  async getClassroom(id) {
    const classroom = await Classroom.findById(id);
    if (!classroom) {
      throw {
        status: 404,
        message: `Classroom with id ${id} does not exist`,
      };
    }
    return classroom;
  }

  async createClassroom(classroom) {
    const newClassroom = new Classroom({
      ...classroom,
    });

    await newClassroom.save();

    return newClassroom;
  }

  async updateClassroom(classroom) {
    const updatedClassroom = await Classroom.findByIdAndUpdate(
      classroom.id,
      {
        name: classroom.name,
      },
      { new: true }
    );

    if (!updatedClassroom) {
      throw {
        status: 404,
        message: `Classroom with id ${classroom.id} does not exist`,
      };
    }

    return updatedClassroom;
  }

  async deleteClassroom(id) {
    const classroom = await Classroom.findByIdAndDelete(id);
    if (!classroom) {
      throw {
        status: 404,
        message: `Classroom with id ${id} does not exist`,
      };
    }
  }
}
