import Layout from "../components/layout";
import React, { useState } from "react";
import Context from "../components/context";
import WoodDisplay from "../components/displays/wood-display";
import StoneDisplay from "../components/displays/stone-display";

import StatsDisplay from "../components/displays/stats-display";

function Main() {
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);

  const userStats = {
    /* get saved data from api*/
    unassignedWorkers: 5,
    assignedWorkers: 0,
    resources: {
      wood: 10,
      stone: 5
    }
  };

  return (
    <Layout>
      <Context.Provider value={userStats}>
        <StatsDisplay></StatsDisplay>

        <WoodDisplay></WoodDisplay>
        <StoneDisplay></StoneDisplay>
      </Context.Provider>
    </Layout>
  );
}

export default Main;
