import { createSlice } from "@reduxjs/toolkit";

// const initialState = localStorage.getItem("user")
//   ? JSON.parse(localStorage.getItem("user"))
//   : { email: "", token: "", id: "" };

const initialState = {
  userData: null,
};

export const user2Slice = createSlice({
  name: "user2",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserData } = user2Slice.actions;

export default user2Slice.reducer;
