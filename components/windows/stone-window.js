import React, { useContext } from "react";
import { mainWindowStyle } from "./main-window-style";
import { StateContext } from "../context";

export default function StoneWindow() {
  const { state, dispatch } = useContext(StateContext);

  return (
    <div style={mainWindowStyle}>
      <header>
        <h4>Stone</h4>
      </header>
      <ul>
        <li>Stone: {state.resources.stone}</li>
        <li>Gatherers: {state.jobs.stoneGatherer} </li>
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
