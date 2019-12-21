import Link from "next/link";

const backgroundStyle = {
  backgroundColor: "#333",
  overflow: "hidden"
};

const linkStyle = {};

function Header() {
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

      <style jsx>{`
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
      `}</style>
    </div>
  );
}

export default Header;
