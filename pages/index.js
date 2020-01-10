import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";

import Ticker from "../components/ticker";
import Layout from "../components/layout";
import WindowContainer from "../components/windows/window-container";

function Main() {
  return (
    <main>
      <Provider store={store}>
        <Layout>
          <WindowContainer></WindowContainer>
        </Layout>
        <Ticker></Ticker>
      </Provider>
    </main>
  );
}

export default Main;
