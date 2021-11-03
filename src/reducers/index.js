import { counterReducer } from "./counter";
import { variantReducer } from "./variant";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  variant: variantReducer,
  counter: counterReducer,
});

export default rootReducers;
