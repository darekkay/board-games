import React, { Component } from "react";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Header.css";

class Header extends Component {
  shouldComponentUpdate = () => false; // The header does not ever change, as there are no props

  render() {
    return (
      <header>
        <Slider
          min={1}
          max={8}
          dots={true}
          defaultValue={1}
          marks={{ 1: "Off", 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: "8+" }}
          onChange={this.props.onChange}
        />
        <div className="logo">
          <img src="img/cube.png" alt="" />
          <h1 className="title">Board Games</h1>
        </div>
      </header>
    );
  }
}

export default Header;
