const bodySchema = {
  type: "object",
  properties: {
    name: { type: "string", minLength: 2 },
    shortName: { type: "string", minLength: 2 },
    description: { type: "string" },
  },
  required: ["name", "shortName"],
};

const paramsSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
  },
  required: ["id"],
};

export { paramsSchema, bodySchema };
