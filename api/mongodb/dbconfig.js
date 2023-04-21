import mongoose from "mongoose";
const dbConnect = () => {
  try {
    const connStr = process.env.MONGO_CLIENT;
    if (!connStr) {
      console.log("there is no MONGO_CLIENT available");
    }
    const conn = mongoose.connect(connStr);
    conn && console.log("mongodb connected");
  } catch (error) {
    console.log(error);
  }
};
