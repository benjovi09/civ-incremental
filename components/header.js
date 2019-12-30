import Link from "next/link";
import css from "styled-jsx/css";
import React, { useState, useEffect } from "react";

const linkStyle = css`
  h4 {
    margin: 0;
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  h4:hover {
    background-color: #ddd;
    color: black;
  }

  h4.active {
    background-color: #4caf50;
    color: white;
  }

  h6 {
    margin-right: 1%;
    margin-top: 5px;
    float: right;
    color: white;
    text-align: center;
  }
`;

const backgroundStyle = {
  backgroundColor: "#333",
  overflow: "hidden"
};

function Header() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <header style={backgroundStyle}>
      <Link href="/">
        <h4>Main</h4>
      </Link>
      <Link href="/options">
        <h4>Options</h4>
      </Link>
      <Link href="/profile">
        <h4>Profile</h4>
      </Link>
      <h6>{date.toLocaleTimeString()}</h6>
      <style jsx>{linkStyle}</style>
    </header>
  );
}

export default Header;
