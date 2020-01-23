import StatsWindow from "./stats-window";
import React from "react";
import ResourceWindow from "./resource-window";
import BuildingWindow from "./building-window";
import { useSelector } from "react-redux";
import buildingWindow from "./building-window";

export default function WindowContainer() {
  const resources = useSelector(state => state.resourceReducer);
  return (
    <section aria-label="window-container">
      <StatsWindow></StatsWindow>
      <BuildingWindow></BuildingWindow>
      {resources.map(resource => (
        <ResourceWindow resource={resource} />
      ))}
    </section>
  );
}
