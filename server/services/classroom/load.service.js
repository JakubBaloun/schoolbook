import ClassroomDao from "../../dao-mongo/classroom.dao.js";
import GradeDao from "../../dao/grade.dao.js";
import StudentDao from "../../dao/student.dao.js";
import SubjectDao from "../../dao/subject.dao.js";

const classroomDao = new ClassroomDao();
const studentDao = new StudentDao();
const subjectDao = new SubjectDao();
const gradeDao = new GradeDao();

const loadClassroomService = async (id) => {
  const classroom = await classroomDao.getClassroom(id);
  if (!classroom) {
    throw {
      status: 404,
      message: `Třída s identifikátorem ${id} neexistuje`,
    };
  }

  const students = await studentDao.listStudents().then((students) => {
    return students.filter((student) => student.classroomId === id);
  });

  const grades = await gradeDao.listGrades();
  const subjects = await subjectDao.listSubjects();

  students.forEach((student) => {
    student.subjects = [];

    subjects.forEach((subject) => {
      let averageGrade = null;
      const studentSubjectGrades = grades.filter(
        (grade) =>
          grade.studentId === student.id && grade.subjectId === subject.id
      );

      let gradeSum = 0;
      let weightSum = 0;

      studentSubjectGrades.forEach((grade) => {
        gradeSum += grade.grade * grade.weight;
        weightSum += grade.weight;
      });

      if (gradeSum) averageGrade = gradeSum / weightSum;
      student.subjects.push({ ...subject, averageGrade });
    });
  });

  const data = {
    ...classroom,
    students: students,
  };

  return data;
};

export default loadClassroomService;
