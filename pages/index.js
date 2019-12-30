import Layout from "../components/layout";
import React, { useState } from "react";
import Wood from "../components/resources/wood";

function Main() {
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);

  return (
    <Layout>
      <Wood></Wood>
    </Layout>
  );
}

export default Main;
