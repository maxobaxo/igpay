// Business logic below:

var pigLatin = function(word) {

  var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  var vowelFirst = false;

  for (var i = 0; i < vowels.length; i += 1) {
    if (word[0] === vowels[i]) {
      vowelFirst = true;
    }
  };




  if (vowelFirst === true) {
    if (vowels[5] === word[0]) {
      //alert("Y is not a vowel");
      var vowelYesY = word.slice(1, word.length);
      return vowelYesY + word[0] + "ay";
    } else {
      var vowelNotY = word.concat("way");
      return vowelNotY;
    }
  } else if (vowelFirst === false) {
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
