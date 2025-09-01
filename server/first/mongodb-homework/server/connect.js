import mongoose from "mongoose";
const { connect } = mongoose;


const connectDB = async (mongoUri) => {
  try {
    await connect(mongoUri);
    console.log("MongoDB connected...✅");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
