import Layout from "../components/layout";
import React from "react";
import Context from "../context";
import Wood from "../components/resources/wood";

function Main() {
  const defaultState = {
    unassignedWorkers: 1,
    assignedWorkers: 0
  };
  return (
    <Layout>
      <Context.Provider value={defaultState}>
        <Wood></Wood>
      </Context.Provider>
    </Layout>
  );
}

export default Main;
