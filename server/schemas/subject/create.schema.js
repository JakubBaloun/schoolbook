const schema = {
  type: "object",
  properties: {
    name: { type: "string", minLength: 2 },
    shortName: { type: "string", minLength: 2 },
    description: { type: "string" },
  },
  required: ["name", "shortName"],
};

export default schema;
