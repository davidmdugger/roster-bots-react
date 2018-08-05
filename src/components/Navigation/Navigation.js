import React, { Component } from "react";
import "./Navigation.css";

import NavButton from "./NavButton";
import NavMenu from "./NavMenu";

class Navigation extends Component {
  state = {
    visible: false
  };

  toggleMenu = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  mouseClickHandler = e => {
    this.toggleMenu();
  };

  hideMenuHandler = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div className="navigation">
        <NavButton mouseClickHandler={this.mouseClickHandler} />
        <NavMenu
          menuVisibility={this.state.visible}
          hideMenuHandler={this.hideMenuHandler}
        />
      </div>
    );
  }
}

export default Navigation;
