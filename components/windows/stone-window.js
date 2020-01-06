import React from "react";
import { mainWindowStyle } from "./main-window-style";
import { useStateValue } from "../context";

function setState(state) {
  console.log(state);
}

export default function StoneWindow() {
  const [{ state }, dispatch] = useStateValue();
  debugger;
  const handleButtonClick = amount => {
    if (state.jobs.unassignedWorkers > amount) {
      setState({
        ...state,
        jobs: {
          unassignedWorkers: state.jobs.unassignedWorkers,
          stoneGatherer: amount
        }
      });
    }
  };

  return (
    <div style={mainWindowStyle}>
      <header>
        <h4>Stone</h4>
      </header>
      <ul>
        <li>Stone: {1}</li>
        <li>Gatherers: {2} </li>
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
