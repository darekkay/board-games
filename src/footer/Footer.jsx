import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    const { filteredGamesCount, allGamesCount } = this.props;
    return (
      <footer>
        <div className="footer-link">
          <a
            href="https://darekkay.com"
            target="_blank"
            rel="noopener noreferrer"
            className="animated"
          >
            Handmade with &hearts; by Darek Kay
          </a>
        </div>

        <div className="footer-gamecount">
          {filteredGamesCount} / {allGamesCount}
        </div>

        <div className="footer-link">
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
