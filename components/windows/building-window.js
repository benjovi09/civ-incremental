import React from "react";
import { mainWindowStyle } from "./main-window-style";
import { useSelector } from "react-redux";

export default function() {
  const buildings = useSelector(state => state.buildingsReducer);

  function handleButtonClick(amount) {}

  return (
    <div style={mainWindowStyle}>
      BuildingWindow
      {buildings.map(building => (
        <article>
          <Building building={building}></Building>
          <button onClick={() => handleButtonClick(1)}>
            Build {building.name}
          </button>
        </article>
      ))}
    </div>
  );
}

function Building(props) {
  const building = props.building;
  return (
    <div>
      {building.name}: {building.amount}
    </div>
  );
}
