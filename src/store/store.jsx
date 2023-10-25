import { configureStore } from "@reduxjs/toolkit";
import diaryReducer from "../features/diarySlice";
import themeReducer from "../features/themeSlice";
import userReducer from "../features/userSlice";
import user2Reducer from "../features/user2Slice";

export const store = configureStore({
  reducer: {
    diary: diaryReducer,
    theme: themeReducer,
    user: userReducer,
    user2: userReducer,
  },
});
