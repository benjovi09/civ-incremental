import Link from "next/link";
import css from "styled-jsx/css";
import React, { useState, useEffect } from "react";

const linkStyle = css`
  a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
  a:hover {
    background-color: #ddd;
    color: black;
  }

  a.active {
    background-color: #4caf50;
    color: white;
  }

  p {
    color: white;
    text-align: right;
    padding-right: 16px;
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
    <div style={backgroundStyle}>
      <Link href="/">
        <a>Main</a>
      </Link>
      <Link href="/options">
        <a>Options</a>
      </Link>
      <Link href="/profile">
        <a>Profile</a>
      </Link>

      <p>{date.toLocaleTimeString()}</p>

      <style jsx>{linkStyle}</style>
    </div>
  );
}

export default Header;
