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
function replaceVowel(){

}