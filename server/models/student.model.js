import mongoose from "mongoose";

const { Schema } = mongoose;
const StudentSchema = new Schema({
  firstname: { type: String, required: true },
  surname: { type: String, required: true },
  nationalId: { type: String, required: true },
  classroomId: { type: String, required: true },
});

const Student = mongoose.model("Student", StudentSchema);
export default Student;
