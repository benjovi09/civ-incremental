import StatsWindow from "./stats-window";
import React from "react";
import ResourceWindow from "./resource-window";
import { useSelector } from "react-redux";

export default function WindowContainer() {
  const resources = useSelector(state => state.resourceReducer);
  return (
    <section aria-label="window-container">
      <StatsWindow></StatsWindow>
      {resources.map(resource => (
        <ResourceWindow resource={resource} />
      ))}
    </section>
  );
}
