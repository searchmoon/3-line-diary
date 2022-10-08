import { configureStore } from "@reduxjs/toolkit";
import diarySlice from "../features/diarySlice";

export const store = configureStore({
  reducer: {
    diary: diaryReducer,
  },
});
