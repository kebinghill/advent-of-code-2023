const lineReader = require('line-reader');

const arr = [];

lineReader.eachLine('data/gear-ratios-input.txt', (line, last) => {
  arr.push(line);

  if (last) {
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      let currNum = '';
      for (let j = 0; j < arr[i].length; j++) {
        const prevChar = arr[i][j - 1];
        const char = arr[i][j];
        const nextChar = arr[i][j + 1];

        const upperLeftChar = i > 0 ? arr[i - 1][j - 1] : null;
        const aboveChar = i > 0 ? arr[i - 1][j] : null;
        const upperRightChar = i > 0 ? arr[i - 1][j + 1] : null;

        const lowerLeftChar = i < arr.length - 1 ? arr[i + 1][j - 1] : null;
        const lowerChar = i < arr.length - 1 ? arr[i + 1][j] : null;
        const lowerRightChar = i < arr.length - 1 ? arr[i + 1][j + 1] : null;

        if (Number(char)) {
          currNum += char;
          console.log(currNum);
          if (!Number(nextChar)) {
            console.log('break here');
            currNum = '';
          }
        }
      }
    }
  }
});
