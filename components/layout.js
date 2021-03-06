import Header from "./Header";
import React from "react";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  );
}

export default Layout;
