import StatsWindow from "./stats-window";
import React from "react";
import ResourceWindow from "./resource-window";
import { useSelector } from "react-redux";

export default function WindowContainer() {
  const resources = useSelector(state => state.resourceReducer);
  console.log(resources);
  return (
    <section aria-label="window-container">
      <StatsWindow></StatsWindow>
      <ResourceWindow resource={resources} />
    </section>
  );
}


/*
      {resources.map(resource => (
        <ResourceWindow resource={resource} />
      ))}*/
