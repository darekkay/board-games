import React, { Component } from "react";
import "./App.css";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import GameList, { filteredGamesCount } from "./gamelist/GameList";

import games from "./data/games.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { player: 1 };
  }

  onPlayerChange(value) {
    this.setState({
      player: value
    });
  }

  render() {
    return (
      <div id="app">
        <Header onChange={this.onPlayerChange.bind(this)} />
        <main>
          <div className="scrollable-y">
            <div className="games">
              <GameList games={games} player={this.state.player} />
            </div>
          </div>
        </main>
        <Footer
          allGamesCount={games.own.length}
          filteredGamesCount={filteredGamesCount(games, this.state.player)}
        />
      </div>
    );
  }
}

export default App;
