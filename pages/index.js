import Layout from "../components/layout";
import React, { useState } from "react";

function Main() {
  const [count, setCount] = useState(0);
  return (
    <Layout>
      <p>Hello World!</p>

      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </Layout>
  );
}

export default Main;
