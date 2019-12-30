import React, { useState, useEffect, useContext } from "react";
import Context from "../../context";

export default function Wood() {
  const context = useContext(Context);

  const [wood, setWood] = useState(0);
  const [woodGatherers, setWoodGatherers] = useState(0);
  const [woodRate, setWoodRate] = useState(1);
  const [woodGathererEfficiency, setWoodGathererEffeciency] = useState(0.1);
  const [date, setDate] = useState(Date.now());

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    getWood(woodRate * woodGatherers * woodGathererEfficiency);
  }

  function getWood(amountPerSecond) {
    var tickTime = Date.now() - date;
    setDate(Date.now());
    setWood(wood + (amountPerSecond * tickTime) / 1000);
  }

  function addWorkers(amount) {
    if (amount > 0 && context.unassignedWorkers > 0) {
      setWoodGatherers(woodGatherers + amount);
    }
  }

  return (
    <div>
      <p>You have {Math.round(wood)} wood</p>
      <label>Gatherers: {woodGatherers}</label>
      <br />
      <button onClick={() => addWorkers(1)}>Add Wood Gatherer</button>
      <button onClick={() => addWorkers(-1)}>Remove Wood Gatherer</button>
    </div>
  );
}
