import React, { useState, useEffect, useContext } from "react";
import Context from "../context";
import DisplayStyle from "./display-style";

export default function StatsDisplay() {
  const context = useContext(Context);
  const resources = context.resources;
  return (
    <div style={DisplayStyle}>
      stats display!
      <br />
      <label>resources</label>
      <ul>
        <li>Wood: {resources.wood}</li>
        <li>Stone: {resources.stone}</li>
      </ul>
    </div>
  );
}

