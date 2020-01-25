import StatsWindow from "./stats-window";
import React from "react";
import ResourceWindow from "./resource-window";
import { useSelector } from "react-redux";

export default function WindowContainer() {
  const resourceState = useSelector(state => state.resourceReducer);
  return (
    <section aria-label="window-container">
      <StatsWindow></StatsWindow>
      {resourceState.map(resource => (
        <ResourceWindow resource={resource} />
      ))}
    </section>
  );
}
