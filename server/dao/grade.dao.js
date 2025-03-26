import { fileURLToPath } from "url";
import path from "path";
import fs from "fs/promises";
import { dirname } from "path";
import crypto from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DEFAULT_DATA_PATH = path.join(__dirname, "..", "data", "grades.json");

export default class GradeDao {
  constructor(dataPath) {
    this.gradeDataPath = dataPath ? dataPath : DEFAULT_DATA_PATH;
  }

  async _loadAllGrades() {
    const data = await fs.readFile(this.gradeDataPath);
    return JSON.parse(data);
  }

  async listGrades() {
    const grades = await this._loadAllGrades();
    return grades;
  }

  async getGrade(id) {
    const grades = await this._loadAllGrades();

    const index = grades.findIndex((g) => g.id === id);

    if (index < 0) {
      throw {
        status: 404,
        message: `Grade with id ${id} does not exist`,
      };
    }

    return grades[index];
  }

  async createGrade(grade) {
    const grades = await this._loadAllGrades();

    const newGrade = {
      ...grade,
      id: crypto.randomBytes(8).toString("hex"),
      date: new Date().toISOString(),
    };

    grades.push(newGrade);

    await fs.writeFile(this.gradeDataPath, JSON.stringify(grades));
    return newGrade;
  }

  async deleteGrade(id) {
    let grades = await this._loadAllGrades();

    const index = grades.findIndex((g) => g.id === id);

    if (index < 0) {
      throw {
        status: 404,
        message: `Grade with id ${id} does not exist`,
      };
    }

    grades.splice(index, 1);

    await fs.writeFile(this.gradeDataPath, JSON.stringify(grades));
  }

  async updateGrade(newData) {
    let grades = await this._loadAllGrades();
    let index = grades.findIndex((s) => s.id === newData.id);

    if (index < 0) {
      throw {
        status: 404,
        message: `Grade with id ${newData.id} does not exist.`,
      };
    }

    grades[index] = {
      ...grades[index],
      ...newData,
    };

    await fs.writeFile(this.gradeDataPath, JSON.stringify(grades));

    return grades[index];
  }
}
