// eslint-disable-next-line import/no-nodejs-modules
const fs = require("fs");

const handlebars = require("handlebars");

const templateSource = fs.readFileSync(`${__dirname}/template.html`, "utf-8");
const template = handlebars.compile(templateSource);
const games = require(`${__dirname}/../src/data/games.json`);

const transformObject = (game) => ({
  name: Object.keys(game)[0],
  ...Object.values(game)[0],
});

const transformArray = (game) => ({
  name: game[0],
  id: game[1],
});

const transform = (source) =>
  Object.entries(source).map(([category, list]) => {
    if (category === "own") {
      return {
        [category]: list.map((game) => transformObject(game)),
      };
    } else {
      return {
        [category]: list.map((game) => transformArray(game)),
      };
    }
  });

const result = template({ games: transform(games) });
if (result) {
  fs.writeFileSync(`${__dirname}/../dist/list-all.html`, result);
}
