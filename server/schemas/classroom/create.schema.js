const schema = {
  type: "object",
  properties: {
    name: { type: "string", minLength: 3 },
  },
  required: ["name"],
};

export default schema;
