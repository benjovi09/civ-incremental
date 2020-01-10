import { combineReducers } from "redux";
import resourceReducer from "./resources";
import professionReducer from "./professions";
import tickReducer from "./ticker";

export default combineReducers({
  tickReducer,
  resourceReducer,
  professionReducer
});
