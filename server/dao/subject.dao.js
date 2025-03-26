import { fileURLToPath } from "url";
import { dirname } from "path";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DEFAULT_DATA_PATH = path.join(__dirname, "..", "data", "subjects.json");

export default class SubjectDao {
  constructor(dataPath) {
    this.subjectDataPath = dataPath ? dataPath : DEFAULT_DATA_PATH;
  }

  async _loadAllSubjects() {
    const data = await fs.readFile(this.subjectDataPath);
    return JSON.parse(data);
  }

  async _getSubjectById(id) {
    const subjects = await this._loadAllSubjects();

    const index = subjects.findIndex((s) => s.id === id);

    if (index < 0) {
      throw {
        status: 404,
        message: `Subject with id ${id} does not exist.`,
      };
    }

    return subjects[index];
  }

  async listSubjects() {
    return await this._loadAllSubjects();
  }

  async getSubject(id) {
    return await this._getSubjectById(id);
  }

  async deleteSubject(id) {
    let subjects = await this._loadAllSubjects();

    const subject = await this._getSubjectById(id);

    subjects = subjects.filter((s) => s.id !== subject.id);

    await fs.writeFile(this.subjectDataPath, JSON.stringify(subjects));
  }

  async updateSubject(subject) {
    let updatedSubject = await this._getSubjectById(subject.id);

    let subjects = await this._loadAllSubjects();

    subjects = subjects.filter((s) => s.id !== updatedSubject.id);

    updatedSubject = {
      ...updatedSubject,
      ...subject,
    };

    subjects.push(updatedSubject);
    console.log(updatedSubject);
    await fs.writeFile(this.subjectDataPath, JSON.stringify(subjects));
    return updatedSubject;
  }

  async createSubject(subject) {
    const subjects = await this._loadAllSubjects();

    const newSubject = {
      ...subject,
      id: crypto.randomBytes(8).toString("hex"),
    };

    subjects.push(newSubject);

    await fs.writeFile(this.subjectDataPath, JSON.stringify(subjects));
    return newSubject;
  }
}
