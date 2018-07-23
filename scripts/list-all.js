const fs = require("fs");
const handlebars = require("handlebars");

const source = fs.readFileSync(`${__dirname}/template.html`, "utf-8");
const template = handlebars.compile(source);
const games = require(`${__dirname}/../src/data/games.json`);

const transform = source =>
  Object.entries(source).map(([category, list]) => {
    if (category === "own") {
      return {
        [category]: list.map(game => ({
          name: Object.keys(game)[0],
          ...Object.values(game)[0]
        }))
      };
    } else {
      return {
        [category]: list.map(game => ({
          name: game[0],
          id: game[1]
        }))
      };
    }
  });

const result = template({ games: transform(games) });
if (result) {
  fs.writeFileSync(`${__dirname}/../build/list-all.html`, result);
}
