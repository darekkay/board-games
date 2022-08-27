import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    const { filteredGamesCount, allGamesCount } = this.props;
    return (
      <footer>
        <div className="footer-link">
          <a href="https://darekkay.com/board-games/list-all.html">
            See all games
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
