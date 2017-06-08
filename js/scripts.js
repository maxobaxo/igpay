// Business logic below:

var pigLatin = function(word) {

  var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  var vowelFirst = false;

  for (var i = 0; i < vowels.length; i += 1) {
    if (word[0] === vowels[i]) {
      vowelFirst = true;
    } else {
      for (var i = 0; i < vowels.length; i += 1) {
        for (var j = 0; j < word.length; j += 1) {
          if (word[1] === vowels[i]) {
            var singleConsFirst = true;
          } else if (word[2] === vowels[i]) {
            var twoConsFirst = true;
          } else if (word[3] === vowels[i]) {
            var threeConsFirst = true;
          }
        };
      };
    }
  };
  if (vowelFirst === true) {
    if (vowels[5] === word[0]) {
      //logic when Y is the first letter
      var vowelYesY = word.slice(1, word.length);
      return vowelYesY + word[0] + "ay";
    } else {
      //only a-words are working properly
      var vowelNotY = word.concat("way");
      return vowelNotY;
    }
  } else if (vowelFirst === false) {
    //logic first few letters are consonants
    if (singleConsFirst === true) {
      var oneConsFirst = word.slice(1, word.length);
      return oneConsFirst + word[0] + "ay";
    } else {
      if (twoConsFirst === true) {
        var twoConsReturn = word.slice(2, word.length);
        return twoConsReturn + word[0] + word[1] + "ay";
      } else if (threeConsFirst === true) {
        var threeConsReturn = word.slice(3, word.length);
        return threeConsReturn + word[0] + word[1] + word[2] + "ay";
      }
    }
    // var multiConsFirst =
    //logic for first letter NOT a vowel
  } else {
    return "Error!";
  }
};



// if (/^[a-zA-Z]+$/.test(word) === false) {
// return "Non-Letters Detected!";

// UI logic below:

$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var word = $("input#word").val();
    var result = pigLatin(word);
    $("#result").text(result);
  });
});
