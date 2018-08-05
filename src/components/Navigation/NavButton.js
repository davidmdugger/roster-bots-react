import React from "react";

const NavButton = props => {
  return (
    <button id="menuToggler" onClick={props.mouseClickHandler}>
      &#9776;
    </button>
  );
};

export default NavButton;
