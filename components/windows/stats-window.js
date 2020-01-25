import React from "react";
import { mainWindowStyle } from "./main-window-style";
import { useSelector } from "react-redux";

export default function StatsWindow() {
  const resources = useSelector(state => state.resourceReducer);
  const professions = useSelector(state => state.professionReducer);

  const unemployedCount = professions.find(p => p.name.toLowerCase() === "unemployed").count;
  const totalWorkers = professions.map(p => p.count).reduce((t, v) => t + v, 0);

  const professionsElement = professions.map(profession => (
    <li>
      {profession.name}: {profession.count}
    </li>
  ));

  const workersElement = resources.map(resource => (
    <li key={resource.name}>
      {resource.name}: {Math.round(resource.count)}
    </li>
  ));

  return (
    <div style={mainWindowStyle}>
      <header>
        <h4>Statistics</h4>
      </header>
      <label>resources</label>
      <ul>{workersElement}</ul>
      <label>Workers: {unemployedCount} / {totalWorkers}</label>
      <ul>{professionsElement}</ul>
    </div>
  );
}
