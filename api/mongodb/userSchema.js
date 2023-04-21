import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    status: {},
    firstName: {},
  },
  { timestamps: true }
);
export default mongoose.model("adminUser", userSchema);
