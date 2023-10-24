import { createSlice } from "@reduxjs/toolkit";

// const initialState = localStorage.getItem("user")
//   ? JSON.parse(localStorage.getItem("user"))
//   : { email: "", token: "", id: "" };

const initialState = {
  user: {
    email: "",
    token: "",
    id: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.user.email = action.payload.email;
      state.user.token = action.payload.token;
      state.user.id = action.payload.id;

      //   localStorage.setItem("user", JSON.stringify(state));
    },
  },
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
