const lineReader = require('line-reader');

const allowedValues = {
  red: 12,
  green: 13,
  blue: 14,
};

let games = [];

lineReader.eachLine('data/cube-conundrum-input.txt', (line, last) => {
  const game = line.split(/\:|\;/);

  let gameObj = {};

  for (let i = 0; i < game.length; i++) {
    if (i === 0) {
      gameObj.game = game[0];
    } else {
      let innerGame = game[i].split(',');
      let innerGameObj = {};

      for (let j = 0; j < innerGame.length; j++) {
        const val = innerGame[j];
        const value = val.trim().split(' ');
        innerGameObj[value[1]] = value[0];
      }

      gameObj[i] = innerGameObj;
    }
  }

  games.push(gameObj);
  if (last) {
    console.log(games);
  }
});
