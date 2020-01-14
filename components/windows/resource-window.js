import React from "react";
import { mainWindowStyle } from "./main-window-style";
import { useDispatch, useSelector } from "react-redux";
import { professionTypes } from "../../enums";

export default function ResourceWindow(resource) {
  resource = resource.resource;
  const primaryProfession = useSelector(state => state.professionReducer).find(
    p => p.name.includes(resource.name) && p.type === professionTypes.PRIMARY
  );
  const gathererCount = primaryProfession.count;

  const unassignedWorkerCount = useSelector(
    state => state.professionReducer
  ).find(p => p.name === "unemployed").count;

  const dispatch = useDispatch();

  function handleButtonClick(amount) {
    if (amount > 0) {
      if (unassignedWorkerCount >= amount) {
        dispatch({ type: "increment", payload: primaryProfession.name });
      }
    } else if (amount < 0) {
      if (gathererCount > 0 && gathererCount - amount > 0) {
        dispatch({ type: "decrement", payload: primaryProfession.name });
      }
    }
  }

  return (
    <div style={mainWindowStyle}>
      <header>
        <h4>{resource.name}</h4>
      </header>
      <ul>
        <li>
          {resource.name}: {resource.count}
        </li>
        <li>Gatherers: {gathererCount} </li>
      </ul>
      <button onClick={() => handleButtonClick(1)}>
        Add {resource.name} Gatherer
      </button>
      <button onClick={() => handleButtonClick(-1)}>
        Remove {resource.name} Gatherer
      </button>
    </div>
  );
}
