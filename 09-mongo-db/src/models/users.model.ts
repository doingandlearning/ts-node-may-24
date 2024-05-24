import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { required: true, type: String },
  location: { required: true, type: String },
  role: String,
});

export const User = mongoose.model("User", userSchema);

// export interface User {
//   name: string;
//   location: string;
//   role?: string;
//   id: string;
// }
