import React, { useState, useEffect, useContext } from "react";
import DisplayStyle from "./display-style";
import Context from "../context";

export default function WoodDisplay() {
  const context = useContext(Context);
  const resources = context.resources;
  //TODO: Get saved values from api
  const [wood, setWood] = useState(0);
  const [woodGatherers, setWoodGatherers] = useState(0);
  const [woodRate, setWoodRate] = useState(50);
  const [woodWorkerEfficiency, setWoodWorkerEffeciency] = useState(0.001);
  const [date, setDate] = useState(Date.now());

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    getWood(woodRate * woodGatherers * woodWorkerEfficiency);
  }

  function getWood(amountPerSecond) {
    var tickTimeInMilliSeconds = Date.now() - date;
    setDate(Date.now());
    setWood(wood + (amountPerSecond * tickTimeInMilliSeconds) / 1000);
  }

  return (
    <div style={DisplayStyle}>
      <header>
        <h4>Wood</h4>
      </header>
      <text>
        <ul>
          <li>Wood: {resources.wood}</li>
          <li>Gatherers: {woodGatherers} </li>
        </ul>
      </text>
      <button onClick={() => setWoodGatherers(woodGatherers + 1)}>
        Add Wood Gatherer
      </button>
    </div>
  );
}
