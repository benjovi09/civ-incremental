import React from "react";
import { mainWindowStyle } from "./main-window-style";
import { useDispatch, useSelector } from "react-redux";

export default function ResourceWindow(resource) {
  const stoneCount = Math.round(
    useSelector(state => state.resourceReducer.stone)
  );
  const unassignedWorkerCount = useSelector(
    state => state.workerReducer.unassignedWorkers
  );
  const gathererCount = useSelector(
    state => state.workerReducer.stoneGatherer.count
  );
  const dispatch = useDispatch();

  function handleButtonClick(amount) {
    if (amount > 0) {
      if (unassignedWorkerCount >= amount) {
        dispatch({ type: "increment" });
      }
    } else if (amount < 0) {
      if (gathererCount > 0 && gathererCount - amount > 0) {
        dispatch({ type: "decrement" });
      }
    }
  }

  return (
    <div style={mainWindowStyle}>
      <header>
        <h4>{ resource.name }</h4>
      </header>
      <ul>
        <li>{ resource.name }: {stoneCount}</li>
        <li>Gatherers: {gathererCount} </li>
      </ul>
      <button onClick={() => handleButtonClick(1)}>Add { resource.name } Gatherer</button>
      <button onClick={() => handleButtonClick(-1)}>
        Remove { resource.name } Gatherer
      </button>
    </div>
  );
}
