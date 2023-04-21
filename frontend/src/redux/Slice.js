import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {},
};
export const userSlice = createSlice({
  name: "adminUser",
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
