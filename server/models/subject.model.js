import mongoose from "mongoose";

const { Schema } = mongoose;

const SubjectSchema = new Schema({
  name: { type: String, required: true },
  shortName: { type: String, required: true },
  description: { type: String, required: true },
});

const Subject = mongoose.model("Subject", SubjectSchema);

export default Subject;
