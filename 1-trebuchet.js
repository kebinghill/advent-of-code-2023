const lineReader = require('line-reader');

let array = [];
let valueArr = [];
let total = 0;

let numberStrings = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};

let initialStr = ['o', 't', 'f', 's', 'e', 'n'];
let acceptedChar = [
  'o',
  'n',
  'e',
  't',
  'w',
  'h',
  'r',
  'f',
  'u',
  'i',
  'v',
  's',
  'x',
  'g',
];

lineReader.eachLine('data/trebuchet-input.txt', (line, last) => {
  array.push(line);

  if (last) {
    for (let i = 0; i < array.length; i++) {
      let firstNumber;
      let secondNumber;

      for (let j = 0; j < array[i].length; j++) {
        let character = array[i][j];
        if (character >= '0' && character <= '9' && firstNumber === undefined) {
          firstNumber = character;
          secondNumber = character;
        } else if (character >= '0' && character <= '9') {
          secondNumber = character;
        } else if (initialStr.includes(character)) {
          let currNumString = character;
          for (let x = j + 1; x < array[i].length; x++) {
            if (acceptedChar.includes(array[i][x])) {
              currNumString += array[i][x];
            } else {
              break;
            }
            if (currNumString in numberStrings) {
              if (firstNumber === undefined) {
                firstNumber = numberStrings[currNumString];
                break;
              } else {
                secondNumber = numberStrings[currNumString];
                break;
              }
            } else if (currNumString.length >= 5) {
              break;
            }
          }
        }
      }

      valueArr.push(firstNumber + secondNumber);

      if (i === array.length - 1) {
        for (let y = 0; y < valueArr.length; y++) {
          total += Number(valueArr[y]);
        }
        console.log(total);
      }
    }
  }
});
