const bodySchema = {
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

const paramsSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
  },
  required: ["id"],
};

export { paramsSchema, bodySchema };
