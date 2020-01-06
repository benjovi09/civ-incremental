import { combineReducers } from "redux";
import resourceReducer from "./resources";
import workerReducer from "./workers";
import tickReducer from "./ticker";

export default combineReducers({ tickReducer, resourceReducer, workerReducer });
