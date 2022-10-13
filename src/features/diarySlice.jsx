import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  lists: [],
  item: undefined,
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
    setStorageList: (state, action) => {
      state.lists = action.payload;
    },
    getDiaryItem: (state, action) => {
      var diaryList = current(state.lists);
      state.item = diaryList.filter((item) => {
        debugger;
        return item.id === parseInt(action.payload);
      });
      console.log(action.payload);
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
