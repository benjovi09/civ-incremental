import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { professionTypes } from "../../enums";

export default function ProfessionsWindow() {
  const dispatch = useDispatch();

  const unassignedWorkerCount = useSelector(
    state => state.professionReducer
  ).find(p => p.name === "unemployed").count;
  
  const gathererCount = useSelector(state => state.professionReducer).find(
    p => p.name === professionTypes.PRIMARY.GATHERER
  ).count;

  function handleButtonClick(amount) {
    if (amount > 0) {
      if (unassignedWorkerCount >= amount) {
        dispatch({
          type: "increment",
          payload: professionTypes.PRIMARY.GATHERER
        });
      }
    } else if (amount < 0) {
      if (gathererCount > 0 && gathererCount - amount > 0) {
        dispatch({
          type: "decrement",
          payload: professionTypes.PRIMARY.GATHERER
        });
      }
    }
  }
  return (
    <div>
      <button onClick={() => handleButtonClick(1)}>Add Gatherer</button>
      <button onClick={() => handleButtonClick(-1)}>Remove Gatherer</button>
    </div>
  );
}
