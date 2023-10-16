import { configureStore } from "@reduxjs/toolkit";
import diaryReducer from "../features/diarySlice";
import themeReducer from "../features/themeSlice";

export const store = configureStore({
  reducer: {
    diary: diaryReducer,
    theme: themeReducer,
  },
});
