import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.set('bufferCommands', false);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected!");
  } catch (error) {
    console.log(`MongoDB Error: ${error}`);
  }
};

export default connectDB;
