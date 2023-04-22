import adminUserSchema from "./userSchema";
export const postAdminUser = async (data) => {
  return await adminUserSchema.save();
};
