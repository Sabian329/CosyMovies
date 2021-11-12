import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../slices/searchSlice";
import favouritesReducer from "../slices/addToFavSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    favourites: favouritesReducer,
  },
});
