import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [],
};

export const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    addDiaryList: (state, action) => {
      state.lists = [...state.lists, action.payload].sort(
        (a, b) => a.date - b.date
      );
    },
    deleteList: (state, action) => {
      state.lists = state.lists.filter((item) => item.id !== action.payload.id);
    },
    doneEditList: (state, action) => {
      state.lists = [
        ...state.lists.filter((item) => item.id !== action.payload.id),
        action.payload,
      ].sort((a, b) => a.id - b.id);
    },
  },
});

export const { addDiaryList, deleteList, doneEditList } = diarySlice.actions;

export default diarySlice.reducer;
