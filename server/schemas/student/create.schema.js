const schema = {
  type: "object",
  properties: {
    firstName: { type: "string", minLength: 2 },
    surname: { type: "string", minLength: 2 },
    nationalId: { type: "string", minLength: 10 },
    classroomId: { type: "string", minLength: 10 },
  },
  required: ["firstName", "surename", "nationalId", "classroomId"],
};

export default schema;
