import { combineReducers } from "redux";
import resourceReducer from "./resources";
import professionReducer from "./professions";
import tickReducer from "./ticker";
import professionResourceReducer from "./profession-resources";
import buildingsReducer from "./buildings";

export default combineReducers({
  tickReducer,
  resourceReducer,
  buildingsReducer,
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
