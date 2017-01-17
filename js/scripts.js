$(function() {
  $('form').submit(function() {
    var output = parseInt($('#countTo').val());
    var numberBy = parseInt($('#countBy').val());

    var numberList = [];
    for (var i = numberBy; i <= output; i += numberBy) {
      numberList.push(i);

    }
    $('.display').html('<h1>' + numberList + '</h1>');
    event.preventDefault();
  });
});




// var output = [];
// countBy.forEach(function(count) {
//   output.push(output += numberBy)
