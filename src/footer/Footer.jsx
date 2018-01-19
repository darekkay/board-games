import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  shouldComponentUpdate = () => false; // The footer does not ever change

  render() {
    return (
      <footer>
        <div>
          <a
            href="https://darekkay.com"
            target="_blank"
            rel="noopener noreferrer"
            className="animated"
          >
            Handmade with &hearts; by Darek Kay
          </a>
        </div>

        <div className="github">
          <a
            href="https://github.com/darekkay/board-games"
            target="_blank"
            rel="noopener noreferrer"
            className="animated"
          >
            Fork me on GitHub
          </a>
          <img src="img/github.png" alt="" />
        </div>
      </footer>
    );
  }
}

export default Footer;
