// Business logic below:

var pigLatin = function(word) {

  var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  var vowelsFound = false;

  for (var i = 0; i < word.length; i += 1) {
    for (var j = 0; j < vowels.length; j += 1) {
      if (word[i] === vowels[j]) {
        vowelsFound = true;
      }
    };
  };

  if (vowels[5] === word[0]) {
    alert("Y is not a vowel");
  } else {
    alert("Y is a vowel");
  }

  if (vowelsFound === true) {
    return "vowel spotted";
  } else if (/^[a-zA-Z]+$/.test(word) === false) {
    return "Non-Letters Detected!";
  } else {
    return "igpay";
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
