import React from "react";
import { Link } from "react-router-dom";

const NavMenu = props => {
  const visibilityClass = props.menuVisibility ? "show" : "hide";
  return (
    <nav className={visibilityClass} onClick={props.hideMenuHandler}>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/team">
          <li>View Team</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavMenu;
