import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "",
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

export const { setStorageList } = themeSlice.actions;

export default themeSlice.reducer;
