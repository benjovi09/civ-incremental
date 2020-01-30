import StatsWindow from "./stats-window";
import React from "react";
import BuildingWindow from "./building-window";
import ProfessionsWindow from "./professions-window";

export default function WindowContainer() {
  return (
    <section aria-label="window-container">
      <StatsWindow></StatsWindow>
      <BuildingWindow></BuildingWindow>
      <ProfessionsWindow></ProfessionsWindow>
    </section>
  );
}
