const lineReader = require('line-reader');

const allowedValues = {
  red: 12,
  green: 13,
  blue: 14,
};

let games = [];
let total = 0;

lineReader.eachLine('data/cube-conundrum-input.txt', (line, last) => {
  const game = line.split(/\:|\;/);

  let gameObj = {};

  for (let i = 0; i < game.length; i++) {
    if (i === 0) {
      gameObj.game = Number(game[0].split(' ')[1]);
    } else {
      let innerGame = game[i].split(',');
      let innerGameObj = {};

      for (let j = 0; j < innerGame.length; j++) {
        const val = innerGame[j];
        const value = val.trim().split(' ');
        innerGameObj[value[1]] = Number(value[0]);
      }

      gameObj[i] = innerGameObj;
    }
  }
  games.push(gameObj);

  if (last) {
    let count = 1;
    for (let i = 0; i < games.length; i++) {
      const currGame = games[i];
      const rounds = Object.values(currGame);
      // console.log('-------------------------------');
      // console.log(`game ${count++}`);
      for (let j = 0; j < rounds.length - 1; j++) {
        const round = rounds[j];
        let remainder = Object.keys(round).reduce((a, k) => {
          a[k] = round[k] - allowedValues[k];
          return a;
        }, {});

        const finalVals = Object.values(remainder);
        let hasPositive = finalVals.some((v) => v > 0);

        if (hasPositive) {
          break;
        }

        if (rounds.length - 2 === j) {
          total += currGame.game;
        }
      }
    }
    console.log(total);
  }
});
