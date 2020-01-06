import React, { useState, useEffect, useContext } from "react";
import MainWindowStyle from "./main-window-style";
import Context from "../context";

export default function WoodWindow() {
  const context = useContext(Context);
  const resources = context.resources;
  const WoodGathererCount = context.jobs.woodGatherer;

  return (
    <div style={MainWindowStyle}>
      <header>
        <h4>Wood</h4>
      </header>
      <text>
        <ul>
          <li>Wood: {resources.wood}</li>
          <li>Gatherers: {WoodGathererCount} </li>
        </ul>
      </text>
      <button onClick={() => setWoodGatherers(WoodGathererCount + 1)}>
        Add Wood Gatherer
      </button>
      <button onClick={() => setWoodGatherers(WoodGathererCount - 1)}>
        Remove Wood Gatherer
      </button>
    </div>
  );
}
