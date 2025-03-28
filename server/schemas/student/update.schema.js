const bodySchema = {
  type: "object",
  properties: {
    firstname: { type: "string", minLength: 2 },
    surname: { type: "string", minLength: 2 },
    nationalId: { type: "string", minLength: 10 },
    classroomId: { type: "string", minLength: 10 },
  },
  required: ["firstname", "surname", "nationalId", "classroomId"],
};

const paramsSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
  },
  required: ["id"],
};

export { paramsSchema, bodySchema };
