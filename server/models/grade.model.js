import mongoose from "mongoose";
const { Schema } = mongoose;

const gradeSchema = new Schema(
  {
    subjectId: { type: String, required: true },
    studentId: { type: String, required: true },
    classroomId: { type: String, required: true },
    grade: { type: Number, required: true },
    description: { type: String, required: true },
    weight: { type: Number, required: true },
  },
  { timestamps: true }
);

const Grade = mongoose.model("Grade", gradeSchema);
export default Grade;
