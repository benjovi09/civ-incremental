import React from "react";
import { mainWindowStyle } from "./main-window-style";
import { useDispatch, useSelector } from "react-redux";
import { professionTypes } from "../../enums";

export default function ResourceWindow(resource) {
  resource = resource.resource;




  return (
    <div style={mainWindowStyle}>
      <header>
        <h4>{resource.name}</h4>
      </header>
      <ul>
        <li>
          {resource.name}: {resource.count}
        </li>
      </ul>
    </div>
  );
}
