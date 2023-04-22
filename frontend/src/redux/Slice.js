import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {},
};
const userSlice = createSlice({
  name: "admin-user",
  initialState,
  reducers: {
    setAdminUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});
const { reducer, actions } = userSlice;
export const { setAdminUser } = actions;
export default reducer;
