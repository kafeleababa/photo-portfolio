import React from "react";
import { Link } from "react-router-dom";
import "../styling/Header.scss";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="header-title">K A Studios</h1>
      </Link>

      <nav className="header-items">
        {/* <Link to="/about">About</Link> */}
        {/* <Link to="/contact">Contact</Link> */}
      </nav>
    </div>
  );
}

export default Header;
