import { combineReducers } from "redux";
import resourceReducer from "./resources";
import professionReducer from "./professions";
import tickReducer from "./ticker";
import professionResourceReducer from "./profession-resources";

export default combineReducers({
  tickReducer,
  resourceReducer,
  professionReducer,
  professionResourceReducer
});
/*
function combineReducers(reducers) {
  return (state = {}, action) =>
    Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    });
}*/
