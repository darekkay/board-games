import React, { Component } from "react";

import Game from "../game/Game";

const MAX_PLAYERS = 8;

const getPlayers = game => ({
  min: game.players[0],
  max: game.players[1] === "+" ? undefined : game.players[1]
});

const isHidden = (player, players) =>
  player > 1 &&
  ((players.min > player && player < MAX_PLAYERS) || players.max < player);

export const filteredGamesCount = (games, player) => {
  return (
    games.own.length -
    games.own.filter(elem => {
      const title = Object.keys(elem)[0];
      const game = elem[title];
      const id = game.id;
      const players = getPlayers(game);

      return isHidden(player, players);
    }).length
  );
};

class GameList extends Component {
  render() {
    const { games, player } = this.props;

    return games.own.map(elem => {
      const title = Object.keys(elem)[0];
      const game = elem[title];
      const id = game.id;
      const players = getPlayers(game);

      if (isHidden(player, players)) return "";

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
  }
}

export default GameList;
