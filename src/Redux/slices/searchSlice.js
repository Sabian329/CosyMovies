import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    isOpen: false,
    currentValue: "",
  },
  reducers: {
    closeSearch(state, action) {
      state.isOpen = false;
    },
    openSearch(state, action) {
      state.isOpen = true;
    },
    updateCurrentValue(state, action) {
      state.currentValue = action.payload;
    },
  },
});

export const { closeSearch, openSearch, updateCurrentValue } =
  searchSlice.actions;

export default searchSlice.reducer;
