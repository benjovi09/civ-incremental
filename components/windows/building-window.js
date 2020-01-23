import React from "react";
import { useSelector } from "react-redux";

export default function() {
  const buildings = useSelector(state => state.buildingReducer);
  return <div>hi lol</div>;
}
