// Business logic below:
var pigLatin = function(word) {

  var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  var vowelFirst = false;
  var vowelSecond = false;
  var vowelThird = false;
  var vowelFourth = false;

  for (var i = 0; i < vowels.length; i += 1) {
    if (word[0] === vowels[i]) {
      vowelFirst = true;
    } else if (word [0] !== vowels[i] && word[1] === vowels[i]) {
      vowelSecond = true;
    } else if (word [0] !== vowels[i] && word[1] !== vowels[i] && word[2] === vowels[i]) {
      vowelThird = true;
    } else if (word [0] !== vowels[i] && word[1] !== vowels[i] && word[2] !== vowels[i] && word[3] === vowels[i]) {
      vowelFourth = true;
    }
  };

console.log("vowelFirst = " + vowelFirst);
console.log("vowelSecond = " + vowelSecond);
console.log("vowelThird = " + vowelThird);
console.log("vowelFourth = " + vowelFourth);

  if (vowelFirst === true) {
    if (vowels[5] === word[0]) {
      var vowelYesY = word.slice(1, word.length);
      return vowelYesY + word[0] + "ay";
    } else {
      //only a-words are working properly
      var vowelNotY = word.concat("way");
      return vowelNotY;
    }
  } else if (vowelFirst === false) {
    if (vowelSecond === true) {
      var oneConsFirst = word.slice(1, word.length);
      return oneConsFirst + word[0] + "ay";
    } else if (vowelThird === true) {
      var twoConsFirst = word.slice(2, word.length);
      return twoConsFirst + word[0] + word[1] + "ay";
    } else if (vowelFourth === true) {
      var threeConsFirst = word.slice(3, word.length);
      return threeConsFirst + word[0] + word[1] + word[2] + "ay";
    }
    //logic for first letter NOT a vowel
  } else {
    return "Error!";
  }
};

// UI logic below:
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var word = $("input#word").val();
    var result = pigLatin(word);
    $("#result").text(result);
  });
});
