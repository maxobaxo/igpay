// Business logic below:

var pigLatin = function(word) {
  if (/^[a-zA-Z]+$/.test(word) === false) {
    return "ERROR!"
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
