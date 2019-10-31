// Business Logic


function encrypt(word) {
  var encrypted = [];
  var row = Math.sqrt(word.length);
  var column = Math.sqrt(word.length);

  console.log(row + ", " + column);

  for (j = 0; j < column; j++) {

    for (i = 0; i < word.length; i++) {

      if (i % row === 0) {
        encrypted.push(word[i]);
        console.log(word);
      }

    }
    word.shift();
  }
  return (encrypted.join(""));


}



// User Logic
$(document).ready(function() {





  $('#english').submit(function(ev) {
    ev.preventDefault();

    var message = $("#enterLine").val().split("");
    var result = encrypt(message);
    $("#results").append(result);

    console.log(message);


  });



});
