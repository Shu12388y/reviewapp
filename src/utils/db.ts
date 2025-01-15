import mongoose from "mongoose";

export const DB = async () => {
  try {
    await mongoose.connect(process.env.DB!);
    console.log("DB connnected");
  } catch (error) {
    throw new Error("Db Error");
  }
};
