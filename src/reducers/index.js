import { combineReducers } from "redux";
import textReducer from "./numberReducer";

const rootReducer = combineReducers({
  text: textReducer,
});

export default rootReducer;
