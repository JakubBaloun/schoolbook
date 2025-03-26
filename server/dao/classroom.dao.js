import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import fs from "fs/promises";
import crypto from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DEFAULT_DATA_PATH = path.join(__dirname, "..", "data", "classrooms.json");

export default class ClassroomDao {
  constructor(dataPath) {
    this.classroomDataPath = dataPath ? dataPath : DEFAULT_DATA_PATH;
  }

  async _loadAllClassrooms() {
    const data = await fs.readFile(this.classroomDataPath);
    return JSON.parse(data);
  }

  async listAllClassrooms() {
    return await this._loadAllClassrooms();
  }

  async getClassroom(id) {
    const classrooms = await this._loadAllClassrooms();
    const classroom = classrooms.find((classroom) => id === classroom.id);
    if (!classroom) {
      throw {
        status: 404,
        message: `Classroom with id ${id} does not exist`,
      };
    }
    return classroom;
  }

  async createClassroom(classroom) {
    const classrooms = await this._loadAllClassrooms();

    const newClassroom = {
      ...classroom,
      id: crypto.randomBytes(8).toString("hex"),
    };

    classrooms.push(newClassroom);

    await fs.writeFile(this.classroomDataPath, JSON.stringify(classrooms));
    return newClassroom;
  }

  async updateClassroom(classroom) {
    const classrooms = await this._loadAllClassrooms();
    const index = classrooms.findIndex((c) => c.id === classroom.id);

    if (index < 0) {
      throw {
        status: 404,
        message: `Classroom with id ${classroom.id} does not exist`,
      };
    }

    classrooms[index] = {
      ...classrooms[index],
      ...classroom,
    };

    await fs.writeFile(this.classroomDataPath, JSON.stringify(classrooms));
    return classroom;
  }

  async deleteClassroom(id) {
    let classrooms = await this._loadAllClassrooms();
    const index = classrooms.findIndex((c) => c.id === id);

    if (index < 0) {
      throw {
        status: 404,
        message: `Classroom with id ${id} does not exist`,
      };
    }

    classrooms.splice(index, 1);

    await fs.writeFile(this.classroomDataPath, JSON.stringify(classrooms));
  }
}
