// Business Logic

function rowsColumns(number) {
  // take sqrt of number
  sqrt = Math.sqrt(number);
  // if % round up for rows/columns
  if (sqrt % 1 != 0) {
    return Math.ceil(sqrt);
  } else {
    return sqrt;
  }
}

function encrypt(word) {
  var encrypted = [];
  var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");

  for (k = word.length; k >= 0; k--) {
    if (!alphabet.includes(word[k])) {
      word.splice(k, 1);
      console.log(word);
    }
  }

  var rowColumn = rowsColumns(word.length);

  for (j = 0; j < rowColumn; j++) {
    for (i = 0; i < word.length; i++) {
      if (i % rowColumn === 0) {
        encrypted.push(word[i]);
      }
    }
    word.shift();
  }

  for (i = 0; i < encrypted.length; i++) {
    if (i % 6 === 0) {
      encrypted.splice(i, 0, " ");
    }
  }

  return (encrypted.join(""));
}

// User Logic
$(document).ready(function() {

  $('#english').submit(function(ev) {
    ev.preventDefault();

    var message = $("#enterLine").val().split("");
    var result = encrypt(message);
    $(".translated").show();
    $("#results").text(result);

  });
});
