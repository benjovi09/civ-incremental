import React from "react";
import { mainWindowStyle } from "./main-window-style";
import { useSelector } from "react-redux";

export default function StatsWindow() {
  const resources = useSelector(state => state.resourceReducer);
  const jobs = useSelector(state => state.workerReducer);

  return (
    <div style={mainWindowStyle}>
      <header>
        <h4>Statistics</h4>
      </header>
      <label>resources</label>
      <ul>
        <li>Wood: {Math.round(resources.wood)}</li>
        <li>Stone: {Math.round(resources.stone)}</li>
      </ul>
      <label>Workers</label>
      <ul>
        <li>
          Assignable: {jobs.unassignedWorkers}/
          {jobs.assignedWorkers + jobs.unassignedWorkers}
        </li>
        <li>Wood Gatherer: {jobs.woodGatherer.count}</li>
        <li>Stone Gatherer: {jobs.stoneGatherer.count}</li>
      </ul>
    </div>
  );
}
