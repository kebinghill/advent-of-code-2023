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
    let powers = [];
    for (let i = 0; i < games.length; i++) {
      const currGame = games[i];
      const rounds = Object.values(currGame);
      console.log('-------------------------------');
      console.log(`game ${count++}`);

      let maxBlue = 0;
      let maxRed = 0;
      let maxGreen = 0;
      for (let j = 0; j < rounds.length - 1; j++) {
        const round = rounds[j];
        console.log(round);

        if (round['green'] && maxGreen < round['green']) {
          maxGreen = round['green'];
        }

        if (round['blue'] && maxBlue < round['blue']) {
          maxBlue = round['blue'];
        }

        if (round['red'] && maxRed < round['red']) {
          maxRed = round['red'];
        }

        if (j === rounds.length - 2) {
          powers.push(maxBlue * maxRed * maxGreen);
        }

        // console.log('maxblue', maxBlue);
        // console.log('maxred', maxRed);
        // console.log('maxgreen', maxGreen);

        // let remainder = Object.keys(round).reduce((a, k) => {
        //   a[k] = round[k] - allowedValues[k];
        //   return a;
        // }, {});

        // const finalVals = Object.values(remainder);
        // let hasPositive = finalVals.some((v) => v > 0);

        // if (hasPositive) {
        //   break;
        // }

        // if (rounds.length - 2 === j) {
        //   total += currGame.game;
        // }
      }
    }

    const sum = powers.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    console.log(sum);
    // console.log(total);
  }
});
