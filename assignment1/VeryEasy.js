// Very Easy
// Convert minutes to seconds:

function minToSecConverter(minutes) {
  return minutes * 60;
}

function evenly(a, b) {
  if (a % b === 0) {
    return true;
  } else {
    return false;
  }
}

// Easy
// Count instances of a character in a string
function countStringInstance(letter, data) {
  var count = 0;
  for (var position = 0; position < data.length; position++) {
    if (data.charAt(position) === letter) {
      count += 1;
    }
  }
  return count;
}

//Add up the Numbers from a Single Number
// Sum of first n numbers  =  n*(n+1)/2
function sumOfNumbers(number) {
  return (number * (number + 1)) / 2;
}

// Replace Vowel with Another Character
function replaceVowel(word) {
  var modifiedWord = [];
  word = word.split("");
  var vowels = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < word.length; i++) {
    if (vowels.indexOf(word[i]) < 0) {
      modifiedWord.push(word[i]);
    } else {
      modifiedWord.push(vowels.indexOf(word[i]));
    }
  }
  modifiedWord = modifiedWord.join("");
  return modifiedWord;
}

// Medium
// Reverse Words Starting with a particular word
function reverseWord(sentence, letter) {
  var finalSentence = [];
  var splitWords = sentence.split(" ");
  console.log(splitWords);
  for (var i = 0; i < splitWords.length; i++) {
    if (splitWords[i][0] === letter) {
      finalSentence.push(splitWords[i].split("").reverse().join(""));
    } else {
      finalSentence.push(splitWords[i]);
    }
  }
  return finalSentence.join(" ");
}

