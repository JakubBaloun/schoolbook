import { fileURLToPath } from "url";
import fs from "fs/promises";
import { dirname } from "path";
import path from "path";
import crypto from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DEFAULT_DATA_PATH = path.join(__dirname, "..", "data", "students.json");

export default class StudentDao {
  constructor(dataPath) {
    this.studentDataPath = dataPath ? dataPath : DEFAULT_DATA_PATH;
  }

  async _loadAllStudents() {
    const data = await fs.readFile(this.studentDataPath);
    return JSON.parse(data);
  }

  async listStudents() {
    return await this._loadAllStudents();
  }

  async getStudent(id) {
    const students = await this._loadAllStudents();

    const student = students.find((student) => id === student.id);

    if (!student) {
      throw {
        status: 404,
        message: `Student with id ${id} does not exist`,
      };
    }

    return student;
  }

  async createStudent(student) {
    const students = await this._loadAllStudents();

    student = {
      ...student,
      id: crypto.randomBytes(8).toString("hex"),
    };

    students.push(student);
    await fs.writeFile(this.studentDataPath, JSON.stringify(students));
    return student;
  }

  async deleteStudent(id) {
    const students = await this._loadAllStudents();

    const index = students.findIndex((s) => s.id === id);

    if (index < 0) {
      throw {
        status: 404,
        message: `Student with id ${id} does not exist`,
      };
    }

    students.splice(index, 1);

    await fs.writeFile(this.studentDataPath, JSON.stringify(students));
  }

  async updateStudent(newData) {
    const students = await this._loadAllStudents();
    let index = students.findIndex((s) => s.id === newData.id);

    if (index < 0) {
      throw {
        status: 404,
        message: `Student with id ${newData.id} does not exist.`,
      };
    }

    students[index] = {
      ...students[index],
      ...newData,
    };

    await fs.writeFile(this.studentDataPath, JSON.stringify(students));

    return students[index];
  }
}
