import React, { useState, useEffect, useContext } from "react";
import { mainWindowStyle } from "./main-window-style";
import { StateContext } from "../context";

export default function StatsWindow() {
  const { state, dispatch } = useContext(StateContext);
  const resources = state.resources;
  const jobs = state.jobs;
  return (
    <div style={mainWindowStyle}>
      <header>
        <h4>Statistics</h4>
      </header>
      <label>resources</label>
      <ul>
        <li>Wood: {resources.wood}</li>
        <li>Stone: {resources.stone}</li>
      </ul>
      <label>Workers</label>
      <ul>
        <li>
          Assignable: {jobs.unassignedWorkers}/
          {jobs.assignedWorkers + jobs.unassignedWorkers}
        </li>
        <li>Wood Gatherer: {jobs.woodGatherer}</li>
        <li>Stone Gatherer: {jobs.stoneGatherer}</li>
      </ul>
    </div>
  );
}
