import Layout from "../components/layout";
import React, { useEffect, useState, useReducer } from "react";
import { StateContext } from "../components/context";
import StatsWindow from "../components/windows/stats-window";
import StoneWindow from "../components/windows/stone-window";

let reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        jobs: {
          ...state.jobs,
          stoneGatherer: state.jobs.stoneGatherer + 1
        }
      };
    case "decrement":
      return {
        ...state,
        jobs: {
          ...state.jobs,
          stoneGatherer: state.jobs.stoneGatherer - 1
        }
      };
    case "tick":
      return {
        ...state,
        resources: {
          ...state.resources,
          stone: action.data.resources.stone
        }
      };
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

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    const newDate = new Date();

    const tik = {
      resources: {
        stone: state.resources.stone + getStone(newDate - date)
      }
    };
    setDate(newDate);
    dispatch({ type: "tick", data: tik });
  }

  function getStone(tick) {
    return tick * state.jobs.stoneGatherer;
  }

  const [state, dispatch] = useReducer(reducer, userState);

  return (
    <Layout>
      <StateContext.Provider value={{ state, dispatch }}>
        <StatsWindow></StatsWindow>
        <StoneWindow></StoneWindow>
      </StateContext.Provider>
    </Layout>
  );
}

export default Main;
