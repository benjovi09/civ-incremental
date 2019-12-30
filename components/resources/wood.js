import React, { useState, useEffect } from "react";

export default function Wood() {
  const [wood, setWood] = useState(0);
  const [woodWorkers, setWoodWorkers] = useState(0);
  const [woodRate, setWoodRate] = useState(0);
  const [woodWorkerEfficiency, setWoodWorkerEffeciency] = useState(0);
  const [date, setDate] = useState(Date.now());

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    getWood(woodRate * woodWorkers * woodWorkerEfficiency);
  }

  function getWood(amountPerSecond) {
    var tickTime = Date.now() - date;
    setDate(Date.now());
    setWood(wood + (amountPerSecond * tickTime) / 1000);
  }

  return (
    <div>
      <p>You have {Math.round(wood)} wood</p>
      <label>Workers: {woodWorkers}</label>
      <br />
      <button onClick={() => setWoodWorkers(woodWorkers + 1)}>
        Add Wood Worker
      </button>
    </div>
  );
}
