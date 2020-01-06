import Layout from "../components/layout";
import React, { useState, useReducer } from "react";
import {StateProvider} from "../components/context";
import StatsWindow from "../components/windows/stats-window";
import StoneWindow from "../components/windows/stone-window";
let reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        jobs: {
          stoneGatherer: state.jobs.stoneGatherer + 1
        }
      };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return;
  }
};

function Main() {
  const userState = {
    /* get saved data from api*/
    resources: {
      wood: 10,
      stone: 5
    },
    jobs: {
      unassignedWorkers: 5,
      assignedWorkers: 0,
      woodGatherer: 0,
      stoneGatherer: 0
    }
  };

  const [state, dispatch] = useReducer(reducer, userState);
  
  return (
    <Layout>
      <StateProvider initialState={userState} reducer={reducer}>
        <StoneWindow></StoneWindow>
      </StateProvider>
    </Layout>
  );
}

export default Main;
