import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice";
const store = configureStore({
  reducer: {
    admin: userReducer,
  },
});
export default store;
