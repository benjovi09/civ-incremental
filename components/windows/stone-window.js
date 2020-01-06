import React, { useContext } from "react";
import { mainWindowStyle } from "./main-window-style";
import { useDispatch, useSelector } from "react-redux";

export default function StoneWindow() {
  const stoneCount = Math.round(
    useSelector(state => state.resourceReducer.stone)
  );
  const unassignedWorkerCount = useSelector(
    state => state.workerReducer.unassignedWorkers
  );
  const stoneGathererCount = useSelector(
    state => state.workerReducer.stoneGatherer.count
  );
  const dispatch = useDispatch();

  function handleButtonClick(amount) {
    if (amount > 0) {
      if (unassignedWorkerCount >= amount) {
        dispatch({ type: "increment" });
      }
    } else if (amount < 0) {
      if (stoneGathererCount > 0 && stoneGathererCount - amount > 0) {
        dispatch({ type: "decrement" });
      }
    }
  }

  return (
    <div style={mainWindowStyle}>
      <header>
        <h4>Stone</h4>
      </header>
      <ul>
        <li>Stone: {stoneCount}</li>
        <li>Gatherers: {stoneGathererCount} </li>
      </ul>
      <button onClick={() => handleButtonClick(1)}>Add Stone Gatherer</button>
      <button onClick={() => handleButtonClick(-1)}>
        Remove Stone Gatherer
      </button>
    </div>
  );
}
