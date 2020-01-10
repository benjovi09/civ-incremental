import React from "react";
import { mainWindowStyle } from "./main-window-style";
import { useSelector } from "react-redux";

export default function StatsWindow() {
  const resources = useSelector(state => state.resourceReducer);
  const professions = useSelector(state => state.professionReducer);

  return (
    <div style={mainWindowStyle}>
      <header>
        <h4>Statistics</h4>
      </header>
      <label>resources</label>
      <ul>
        {resources.map(resource => (
          <li>
            {resource.name}: {resource.count}
          </li>
        ))}
      </ul>
      <label>Workers</label>
      <ul>
        {professions.map(profession => (
          <li>
            {profession.name}: {profession.count}
          </li>
        ))}
      </ul>
    </div>
  );
}
