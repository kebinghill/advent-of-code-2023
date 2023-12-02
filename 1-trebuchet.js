const fs = require('fs');
const lineReader = require('line-reader');

let array = [];
let valueArr = [];
let total = 0;

let numberStrings = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

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

// fs.readFile('data/trebuchet-input.txt', (err, data) => {
//   if (err) throw err;

//   let array = [];

//   for (let i = 0; i < data.length - 1; i++) {
//     let splitStart = data[i];
//   }

//   console.log(data.indexOf('\n'));

//   array = [...data];

//   console.log(array);
// });
