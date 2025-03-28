import mongoose from "mongoose";

const { Schema } = mongoose;

const classroomSchema = new Schema({
  name: { type: String, required: true },
});

const Classroom = mongoose.model("Classroom", classroomSchema);

export default Classroom;
