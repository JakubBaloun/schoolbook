import Student from "../models/student.model.js";

export default class StudentDao {
  async listStudents() {
    return await Student.find();
  }

  async getStudent(id) {
    const student = await Student.findById(id);
    if (!student) {
      throw {
        status: 404,
        message: `Student with id ${id} does not exist`,
      };
    }

    return student;
  }

  async createStudent(student) {
    const newStudent = new Student({
      ...student,
    });

    await newStudent.save();
    return newStudent;
  }

  async deleteStudent(id) {
    const student = await Student.findByIdAndDelete(id);
    if (!student) {
      throw {
        status: 404,
        message: `Student with id ${id} does not exist`,
      };
    }
  }

  async updateStudent(newData) {
    const updatedStudent = await Student.findByIdAndUpdate(
      newData.id,
      {
        firstname: newData.firstname,
        surname: newData.surname,
        nationalId: newData.nationalId,
        classroomId: newData.classroomId,
      },
      { new: true }
    );

    if (!updatedStudent) {
      throw {
        status: 404,
        message: `Student with id ${newData.id} does not exist`,
      };
    }

    return updatedStudent;
  }
}
