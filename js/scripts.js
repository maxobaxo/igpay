// Business logic below:

var pigLatin = function(word) {

  var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  var vowelFirst = false;

  for (var i = 0; i < vowels.length; i += 1) {
    if (word[0] === vowels[i]) {
      vowelFirst = true;
    }
  };

  if (vowels[5] === word[0]) {
    //alert("Y is not a vowel");
  } else {
    //alert("Y is a vowel");
  }



  if (vowelFirst === true) {
    var vowelNotY = word.concat("way");
    return vowelNotY;
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
