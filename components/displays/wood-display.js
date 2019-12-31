import React, { useState, useEffect } from "react";
import DisplayStyle from "./display-style";

export default function WoodDisplay() {
  //TODO: Get saved values from api
  const [wood, setWood] = useState(0);
  const [woodGatherers, setWoodGatherers] = useState(10);
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
      <label>Gatherers: {woodGatherers}</label>
      <br />
      <button onClick={() => setWoodGatherers(woodGatherers + 1)}>
        Add Wood Worker
      </button>
    </div>
  );
}
