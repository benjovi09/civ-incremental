import StatsWindow from "./stats-window";
import React from "react";
import ResourceWindow from "./resource-window";
import BuildingWindow from "./building-window";
import { useSelector } from "react-redux";
import ProfessionsWindow from "./professions-window";

export default function WindowContainer() {
  const resources = useSelector(state => state.resourceReducer);
  return (
    <section aria-label="window-container">
      <StatsWindow></StatsWindow>
      <BuildingWindow></BuildingWindow>
      <ProfessionsWindow></ProfessionsWindow>
    </section>
  );
}
