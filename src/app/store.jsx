import { configureStore } from "@reduxjs/toolkit";
import diaryReducer from "../features/diarySlice";

export const store = configureStore({
  reducer: {
    diary: diaryReducer,
  },
});
