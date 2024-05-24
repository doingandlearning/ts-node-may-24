import mongoose from "mongoose";

export default async function connectToDb() {
  return mongoose.connect(process.env.DATABASE_URI || "mongodb://localhost");
}
