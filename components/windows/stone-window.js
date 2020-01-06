import React, { useContext } from "react";
import { mainWindowStyle } from "./main-window-style";
import { useDispatch, useSelector } from "react-redux";

export default function StoneWindow() {
  const stoneCount = Math.round(
    useSelector(state => state.resourceReducer.stone)
  );
  const stoneGathererCount = useSelector(
    state => state.workerReducer.stoneGatherer.count
  );
  const dispatch = useDispatch();

  return (
    <div style={mainWindowStyle}>
      <header>
        <h4>Stone</h4>
      </header>
      <ul>
        <li>Stone: {stoneCount}</li>
        <li>Gatherers: {stoneGathererCount} </li>
      </ul>
      <button onClick={() => dispatch({ type: "increment" })}>
        Add Stone Gatherer
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        Remove Stone Gatherer
      </button>
    </div>
  );
}
