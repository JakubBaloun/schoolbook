const schema = {
  type: "object",
  properties: {
    subjectId: { type: "string" },
    studentId: { type: "string" },
    grade: { type: "integer", minimum: 1, maximum: 5 },
    description: { type: "string" },
    weight: { type: "number", minimum: 0.5, maximum: 10 },
    classroomId: { type: "string" },
  },
  required: ["subjectId", "studentId", "grade", "weight", "classroomId"],
};

export default schema;
