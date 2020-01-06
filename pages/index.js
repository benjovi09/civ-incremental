import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";

import Ticker from "../components/ticker";
import Layout from "../components/layout";
import StatsWindow from "../components/windows/stats-window";
import StoneWindow from "../components/windows/stone-window";

function Main() {
  return (
    <Provider store={store}>
      <Layout>
        <StatsWindow></StatsWindow>
        <StoneWindow></StoneWindow>
      </Layout>
      <Ticker></Ticker>
    </Provider>
  );
}

export default Main;
