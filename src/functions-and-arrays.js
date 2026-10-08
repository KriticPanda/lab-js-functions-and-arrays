// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else if (num1 === num2) {
    return num1;
  }
}

console.log(maxOfTwoNumbers(5, 7));

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(wordsArray) {
  if (wordsArray.length === 0) {
    return null;
  }

  let longestSize = wordsArray[0].length; // value starts at 7
  let longestWord = wordsArray[0]; // mystery

  for (let i = 1; i < wordsArray.length; i++) {
    let word = wordsArray[i]; // which is 3 because i is 3 and 3 in index is equal to crocodile
    let wordSize = word.length; // calculates the length of the word in question in this case is 9

    if (wordSize > longestSize) {
      // if wordSize (current word.length) is bigger then previous value which was stored (longestSize), it updates
      longestSize = wordSize; // updates the value of the longest word in this case 9
      longestWord = word; // crocodile
    }
  }

  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbersArray) {
  if (numbersArray.length === 0) {
    return 0;
  }

  let total = 0;

  for (let i = 0; i < numbersArray.length; i++) {
    let number = numbersArray[i];
    total += number;
  }

  return total;
}

console.log(sumNumbers(numbers));

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(averageCalc) {
  if (averageCalc.length === 0) {
    return 0;
  }

  let total = 0;

  for (let i = 0; i < averageCalc.length; i++) {
    let number = averageCalc[i];
    total += number;
  }

  return total / averageCalc.length;
}
console.log(averageNumbers(numbers2));

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(wordFinder) {
  if (wordFinder.length === 0) {
    return null;
  }
  for (i = 0; i < wordFinder.length; i++) {
    const wordOfDay = wordFinder[5];
    if (wordOfDay === wordFinder[i]) {
      return true;
    }
  }
  return false;
}
