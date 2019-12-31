import React, { useState, useEffect, useContext } from "react";
import DisplayStyle from "./display-style";
import Context from "../context";

export default function StoneDisplay() {
  const context = useContext(Context);
  const resources = context.resources;
  //TODO: Get saved values from api
  const [stone, setstone] = useState(0);
  const [stoneGatherers, setstoneGatherers] = useState(0);
  const [stoneRate, setstoneRate] = useState(50);
  const [stoneWorkerEfficiency, setstoneWorkerEffeciency] = useState(0.001);
  const [date, setDate] = useState(Date.now());

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    getstone(stoneRate * stoneGatherers * stoneWorkerEfficiency);
  }

  function getstone(amountPerSecond) {
    var tickTimeInMilliSeconds = Date.now() - date;
    setDate(Date.now());
    setstone(stone + (amountPerSecond * tickTimeInMilliSeconds) / 1000);
  }

  return (
    <div style={DisplayStyle}>
      <header>
        <h4>Stone</h4>
      </header>
      <text>
        <ul>
          <li>Stone: {resources.stone}</li>
          <li>Gatherers: {stoneGatherers} </li>
        </ul>
      </text>
      <button onClick={() => setstoneGatherers(stoneGatherers + 1)}>
        Add Stone Gatherer
      </button>
    </div>
  );
}
