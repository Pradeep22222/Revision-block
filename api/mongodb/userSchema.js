import mongoose from "mongoose";
const adminUserSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: "inactive",
    },
    firstName: {
      type: String,
      requiered: true,
      maxLength: [20, "First Name can't be longer than 20 character"],
    },
    lastName: {
      type: String,
      requiered: true,
      maxLength: [20, "Last Name can't be longer than 20 character"],
    },
  },
  { timeStamps: true }
);

export default mongoose.model("admin-user", adminUserSchema);
