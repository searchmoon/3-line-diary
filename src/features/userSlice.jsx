import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : { email: "", token: "", id: "" };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.id = action.payload.id;

      localStorage.setItem("user", JSON.stringify(state));
    },
    removeUser: (state) => {
      state.token = "";
      state.email = "";
      state.id = "";

      localStorage.setItem("user", JSON.stringify(state));
    },
  },
});

export const { setUserInfo, removeUser } = userSlice.actions;

export default userSlice.reducer;
