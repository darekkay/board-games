import React, {Component} from 'react';
import './App.css';

import Header from './header/Header';
import Footer from './footer/Footer';
import Game from './game/Game';
import games from './data/games.json';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {player: 1};
  }

  renderGames() {
    return games.own.map(elem => {
      const title = Object.keys(elem)[0];
      const game = elem[title];
      const id = game.id;
      const players = {
        min: game.players[0],
        max: game.players[1] === '+' ? undefined : game.players[1]
      };

      if (this.state.player > 1 && (players.min > this.state.player || players.max < this.state.player))
        return "";

      return (
          <Game
              key={id}
              id={id}
              title={title}
              players={players}
              custom={game.custom}
              expansions={game.expansions}
              favorite={game.favorite}
          />
      );
    });
  };

  onPlayerChange(value) {
    this.setState({
      player: value
    });
  }

  render() {
    return (
        <div id="app">
          <Header onChange={this.onPlayerChange.bind(this)}/>
          <main>
            <div className="scrollable-y">
              <div className="games">
                {this.renderGames()}
              </div>
            </div>
          </main>
          <Footer />
        </div>
    )
  }
}

export default App;
