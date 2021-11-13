import { createSlice } from "@reduxjs/toolkit";
export const addToFavSlice = createSlice({
  name: "favourites",
  initialState: { favList: [] },
  reducers: {
    addItem(state, action) {
      state.favList = [...state.favList, action.payload];
    },
    deleteItem(state, action) {
      state.favList = state.favList.filter(
        (items) => items.id !== action.payload
      );
    },
  },
});

export const { addItem, deleteItem } = addToFavSlice.actions;
export default addToFavSlice.reducer;
