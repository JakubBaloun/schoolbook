import mongoose from "mongoose";

const dbURI = process.env.MONGO_URI;

const connectDB = async () => {
  await mongoose.connect(dbURI);
};

export default connectDB;
