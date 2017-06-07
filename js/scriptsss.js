// Business logic below:

var pigLatin = function(word) {

  var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  var vowelFirst = false;
  var multiConsFirst = false;
  var singleConsFirst = false;

  for (var i = 0; i < vowels.length; i += 1) {
    if (word[0] === vowels[i]) {
      vowelFirst = true;
    } else {
      for (var i = 0; i < vowels.length; i += 1) {
        for (var j = 0; j < word.length; j += 1) {
          if (word[1] === vowels[i]) {
            singleConsFirst === true;
          } else if (word[j] === vowels[i]) {
            multiConsFirst = true;
          }
        };
      };
    }
  };

  if (vowelFirst === true) {
    if (word[0] === vowels[5]) {
      //alert("Y is not a vowel");
      var vowelYesY = word.slice(1, word.length);
      return vowelYesY + word[0] + "ay";
    } else {
      var vowelNotY = word.concat("way");
      return vowelNotY;
    }
  } else if (vowelFirst !== true) {
    //logic only first letter is consonant
    if (singleConsFirst === true) {
      var oneConsFirst = word.slice(1, word.length);
      return oneConsFirst + word[0] + "ay";
    } else if (multiConsFirst === true) {
    //logic first-x letters are consonants
    } else {
      return "Error!";
    }
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
