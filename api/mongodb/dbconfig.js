import mongoose from "mongoose";
export const dbConnect = () => {
  try {
    const connStr = MONGO_CLIENT;
    if (!connStr) {
      return console.log("No MongoClient available");
    }
    const conn = mongoose.connect(connStr);
    conn && console.log("mongodb Connected");
  } catch (error) {
    console.log(error);
  }
};
