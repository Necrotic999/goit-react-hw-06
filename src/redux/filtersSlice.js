import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filter",
  initialState: {
    filters: "",
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filters = payload;
    },
  },
  selectors: {
    selectNameFilter: (state) => {
      return state.filters;
    },
  },
});

export const filterReducer = slice.reducer;
export const { changeFilter } = slice.actions;
export const { selectNameFilter } = slice.selectors;
