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
// add spaces to array until array.length = square of rows/columns

function encrypt(word) {
  var encrypted = [];
  var rowColumn = rowsColumns(word.length);

  console.log(rowColumn);

  for (j = 0; j < rowColumn; j++) {

    for (i = 0; i < word.length; i++) {

      if (i % rowColumn === 0) {
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
