import Link from "next/link";

const backgroundStyle = {
  backgroundColor: "green",
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
    </div>
  );
}

export default Header;
