import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      state.mode = !action.payload;
    },
  },
});

export const { setDarkMode } = themeSlice.actions;

export default themeSlice.reducer;
