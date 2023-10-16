import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [],
  item: "",
};

export const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    addDiaryList: (state, action) => {
      state.lists = [...state.lists, action.payload].sort(
        (a, b) => b.dateformat - a.dateformat
      );
    },
    deleteList: (state, action) => {
      state.lists = state.lists.filter((item) => item.id !== action.payload.id);
    },
    doneEditList: (state, action) => {
      state.lists = [
        ...state.lists.filter((item) => item.id !== action.payload.id),
        action.payload,
      ].sort((a, b) => b.dateformat - a.dateformat);
    },
    setStorageList: (state, action) => {
      state.lists = action.payload;
    },
    getDiaryItem: (state, action) => {
      state.item = state.lists.filter(
        (item) => item.id === parseInt(action.payload)
      );
    },
  },
});

export const {
  addDiaryList,
  deleteList,
  doneEditList,
  setStorageList,
  getDiaryItem,
} = diarySlice.actions;

export default diarySlice.reducer;
