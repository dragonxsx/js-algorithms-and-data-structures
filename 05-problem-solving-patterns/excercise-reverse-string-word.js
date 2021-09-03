// Input: "This is a string"
// Output: "sihT si a gnirts"

// Process: reverse every word. Ex: string => gnirts
// 1. Detect word
// 2. Reverse word

let stringA = "This is a string";

function reverseEveryWord(str) {
  const readWord = (str) => {
    let words = [];
    let tempString = "";
    
    for(let char of str) {
      if(char !== " ") {
        tempString = tempString.concat(char);
      }

      if(char === " ") {
        words.push(tempString);
        tempString = "";
      }
    }
    words.push(tempString);

    return words;
  };

  const reverseWord = (str) => {
    let reversedWord = '';
    for(let char of str) {
        reversedWord = char.concat(reversedWord);
    }

    return reversedWord;
  };

  const reversedString = readWord(str)
    .map(word => reverseWord(word))
    .reduce((prev, cur) => prev + ' ' + cur);

  return reversedString;
}

// Optimization:
// Accept stream of data
// TODO

// Native javascript solution?
function resverseEachWord(str) {
    const reversedString = str.split('').reverse().join('');
    const reversedEachWordInString = reversedString.split(' ').reverse().join(' ');
    return reversedEachWordInString;
}

console.log(reverseEveryWord(stringA));
console.log(resverseEachWord(stringA));